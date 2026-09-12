import type { Challenge, Notification, Project } from "@/stores/progress";

export const EXPORT_SCHEMA = "atlas-progress";
export const SCHEMA_VERSION = 1;

export interface ProgressData {
  completedLessons: string[];
  xp: number;
  badges: string[];
  favorites: string[];
  notes: Record<string, string>;
  currentStreak: number;
  lastVisit: string | null;
  challenges: Challenge[];
  projects: Project[];
  notifications: Notification[];
  comparedTools: number;
  arbolCompletado: boolean;
  calculadoraUsada: boolean;
  quizBest: Record<string, number>;
  quizPerfect: string[];
  colaboradorBadge: boolean;
  cursoCompletadoAt?: string | null;
}

export interface ProgressSnapshot {
  schema: string;
  version: number;
  exportedAt: string;
  data: ProgressData;
}

export function createSnapshot(data: ProgressData): ProgressSnapshot {
  return {
    schema: EXPORT_SCHEMA,
    version: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    data,
  };
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringRecord(value: unknown): value is Record<string, string> {
  if (!isRecord(value)) return false;
  return Object.values(value).every((v) => typeof v === "string");
}

function isNumberRecord(value: unknown): value is Record<string, number> {
  if (!isRecord(value)) return false;
  return Object.values(value).every((v) => typeof v === "number" && Number.isFinite(v));
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isOptionalString(value: unknown): value is string | undefined {
  return typeof value === "string" || value === undefined;
}

function isChallenge(value: unknown): value is Challenge {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    (value.type === "daily" || value.type === "weekly") &&
    typeof value.title === "string" &&
    typeof value.description === "string" &&
    isNumber(value.xpReward) &&
    isOptionalString(value.badgeReward) &&
    typeof value.completed === "boolean" &&
    typeof value.expiresAt === "string"
  );
}

function isProject(value: unknown): value is Project {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.description === "string" &&
    (value.difficulty === "basico" ||
      value.difficulty === "intermedio" ||
      value.difficulty === "avanzado") &&
    typeof value.completed === "boolean" &&
    isOptionalString(value.completedAt)
  );
}

function isNotification(value: unknown): value is Notification {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    (value.type === "badge" ||
      value.type === "challenge" ||
      value.type === "streak" ||
      value.type === "level") &&
    typeof value.title === "string" &&
    typeof value.message === "string" &&
    typeof value.read === "boolean" &&
    typeof value.createdAt === "string"
  );
}

export function isValidProgressData(value: unknown): value is ProgressData {
  if (!isRecord(value)) return false;
  if (!isStringArray(value.completedLessons)) return false;
  if (!isNumber(value.xp)) return false;
  if (!isStringArray(value.badges)) return false;
  if (!isStringArray(value.favorites)) return false;
  if (!isStringRecord(value.notes)) return false;
  if (!isNumber(value.currentStreak)) return false;
  if (value.lastVisit !== null && typeof value.lastVisit !== "string") return false;
  if (
    !Array.isArray(value.challenges) ||
    !value.challenges.every(isChallenge)
  )
    return false;
  if (!Array.isArray(value.projects) || !value.projects.every(isProject))
    return false;
  if (
    !Array.isArray(value.notifications) ||
    !value.notifications.every(isNotification)
  )
    return false;
  if (!isNumber(value.comparedTools)) return false;
  if (typeof value.arbolCompletado !== "boolean") return false;
  if (typeof value.calculadoraUsada !== "boolean") return false;
  if (!isNumberRecord(value.quizBest)) return false;
  if (!isStringArray(value.quizPerfect)) return false;
  if (typeof value.colaboradorBadge !== "boolean") return false;
  if (
    value.cursoCompletadoAt !== undefined &&
    value.cursoCompletadoAt !== null &&
    typeof value.cursoCompletadoAt !== "string"
  )
    return false;
  return true;
}

export type ParseResult =
  | { ok: true; snapshot: ProgressSnapshot }
  | { ok: false; reason: "not-json" | "invalid-schema" | "invalid-data" | "future-version" };

export function parseSnapshot(json: string): ParseResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    return { ok: false, reason: "not-json" };
  }

  if (!isRecord(parsed)) return { ok: false, reason: "invalid-schema" };
  if (parsed.schema !== EXPORT_SCHEMA) return { ok: false, reason: "invalid-schema" };
  if (!isNumber(parsed.version)) return { ok: false, reason: "invalid-data" };
  if (parsed.version > SCHEMA_VERSION) return { ok: false, reason: "future-version" };
  if (!isValidProgressData(parsed.data)) return { ok: false, reason: "invalid-data" };

  return {
    ok: true,
    snapshot: {
      schema: parsed.schema,
      version: parsed.version,
      exportedAt: typeof parsed.exportedAt === "string" ? parsed.exportedAt : "",
      data: parsed.data,
    },
  };
}