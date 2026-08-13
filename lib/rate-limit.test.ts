import { describe, it, expect, beforeEach } from "vitest";
import {
  getClientIp,
  rateLimit,
  clearRateLimits,
} from "./rate-limit";

function makeRequest(headers: Record<string, string> = {}): Request {
  return new Request("http://localhost/api/test", { headers });
}

describe("getClientIp", () => {
  it("extrae la primera IP de x-forwarded-for", () => {
    const req = makeRequest({ "x-forwarded-for": "1.2.3.4, 5.6.7.8" });
    expect(getClientIp(req)).toBe("1.2.3.4");
  });

  it("cae a x-real-ip y luego a unknown", () => {
    expect(getClientIp(makeRequest({ "x-real-ip": "9.9.9.9" }))).toBe("9.9.9.9");
    expect(getClientIp(makeRequest())).toBe("unknown");
  });
});

describe("rateLimit", () => {
  beforeEach(() => {
    clearRateLimits();
  });

  const options = { windowMs: 60_000, max: 3, keyPrefix: "test" };

  it("permite hasta max peticiones", () => {
    expect(rateLimit(makeRequest(), options).success).toBe(true);
    expect(rateLimit(makeRequest(), options).success).toBe(true);
    expect(rateLimit(makeRequest(), options).success).toBe(true);
  });

  it("bloquea a partir de max peticiones", () => {
    const req = makeRequest({ "x-forwarded-for": "10.0.0.1" });
    for (let i = 0; i < 3; i++) {
      expect(rateLimit(req, options).success).toBe(true);
    }
    const blocked = rateLimit(req, options);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.retryAfterMs).toBeGreaterThan(0);
  });

  it("cuenta IPs por separado", () => {
    const a = makeRequest({ "x-forwarded-for": "10.0.0.1" });
    const b = makeRequest({ "x-forwarded-for": "10.0.0.2" });
    expect(rateLimit(a, options).success).toBe(true);
    expect(rateLimit(b, options).success).toBe(true);
    expect(rateLimit(a, options).success).toBe(true);
    expect(rateLimit(b, options).success).toBe(true);
  });

  it("no comparte contador entre prefijos distintos", () => {
    const req = makeRequest({ "x-forwarded-for": "10.0.0.1" });
    for (let i = 0; i < 3; i++) {
      expect(rateLimit(req, options).success).toBe(true);
    }
    expect(rateLimit(req, { ...options, keyPrefix: "otro" }).success).toBe(true);
  });

  it("clearRateLimits reinicia los contadores", () => {
    const req = makeRequest({ "x-forwarded-for": "10.0.0.1" });
    for (let i = 0; i < 3; i++) {
      rateLimit(req, options);
    }
    expect(rateLimit(req, options).success).toBe(false);
    clearRateLimits();
    expect(rateLimit(req, options).success).toBe(true);
  });
});
