export interface RateLimitOptions {
  windowMs: number;
  max: number;
  keyPrefix: string;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  retryAfterMs: number;
}

const buckets = new Map<string, number[]>();
let lastCleanup = 0;
const CLEANUP_INTERVAL_MS = 60_000;

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("cf-connecting-ip") ??
    "unknown"
  );
}

export function rateLimit(req: Request, options: RateLimitOptions): RateLimitResult {
  const key = `${options.keyPrefix}:${getClientIp(req)}`;
  const now = Date.now();

  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    lastCleanup = now;
    for (const [bucketKey, stamps] of buckets) {
      const recent = stamps.filter((ts) => now - ts < options.windowMs);
      if (recent.length === 0) buckets.delete(bucketKey);
      else buckets.set(bucketKey, recent);
    }
  }

  const stamps = buckets.get(key) ?? [];
  const active = stamps.filter((ts) => now - ts < options.windowMs);

  if (active.length >= options.max) {
    const retryAfterMs = Math.max(0, options.windowMs - (now - active[0]));
    return { success: false, remaining: 0, retryAfterMs };
  }

  active.push(now);
  buckets.set(key, active);
  return { success: true, remaining: options.max - active.length, retryAfterMs: 0 };
}

export function clearRateLimits(): void {
  buckets.clear();
  lastCleanup = 0;
}
