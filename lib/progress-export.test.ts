import { describe, it, expect } from "vitest";
import {
  createSnapshot,
  parseSnapshot,
  isValidProgressData,
  EXPORT_SCHEMA,
  SCHEMA_VERSION,
  type ProgressData,
} from "./progress-export";

function validData(): ProgressData {
  return {
    completedLessons: ["fundamentos/01-que-es-ia", "fundamentos/02-historia"],
    xp: 150,
    badges: ["first-lesson", "xp-100"],
    favorites: ["fundamentos/01-que-es-ia"],
    notes: { "fundamentos/01-que-es-ia": "apuntes" },
    currentStreak: 3,
    lastVisit: "2026-09-11",
    challenges: [
      {
        id: "ch-daily-1",
        type: "daily",
        title: "Una lección hoy",
        description: "Completa al menos 1 lección",
        xpReward: 30,
        completed: true,
        expiresAt: "2026-09-12T00:00:00.000Z",
      },
    ],
    projects: [
      {
        id: "proyecto-1",
        title: "Chatbot simple",
        description: "Diseña un prompt de sistema",
        difficulty: "basico",
        completed: true,
        completedAt: "2026-09-01T00:00:00.000Z",
      },
    ],
    notifications: [
      {
        id: "abc123",
        type: "badge",
        title: "Nueva insignia",
        message: "Has desbloqueado: Primer paso",
        read: false,
        createdAt: "2026-09-11T00:00:00.000Z",
      },
    ],
    comparedTools: 2,
    arbolCompletado: true,
    calculadoraUsada: false,
    quizBest: { "fundamentos/01-que-es-ia": 4 },
    quizPerfect: ["fundamentos/01-que-es-ia"],
    colaboradorBadge: true,
  };
}

describe("createSnapshot", () => {
  it("crea un snapshot con schema y versión actuales", () => {
    const snap = createSnapshot(validData());
    expect(snap.schema).toBe(EXPORT_SCHEMA);
    expect(snap.version).toBe(SCHEMA_VERSION);
    expect(typeof snap.exportedAt).toBe("string");
    expect(snap.data.xp).toBe(150);
  });
});

describe("isValidProgressData", () => {
  it("acepta un objeto de progreso completo", () => {
    expect(isValidProgressData(validData())).toBe(true);
  });

  it("rechaza valores no-objeto", () => {
    expect(isValidProgressData(null)).toBe(false);
    expect(isValidProgressData("hola")).toBe(false);
    expect(isValidProgressData([])).toBe(false);
  });

  it("rechaza si falta un campo", () => {
    const data = validData() as unknown as Record<string, unknown>;
    delete data.xp;
    expect(isValidProgressData(data)).toBe(false);
  });

  it("rechaza un array de strings inválido", () => {
    const data = validData();
    data.badges = ["ok", 42] as unknown as string[];
    expect(isValidProgressData(data)).toBe(false);
  });

  it("rechaza dificultad de proyecto no válida", () => {
    const data = validData();
    data.projects[0].difficulty = "experto" as never;
    expect(isValidProgressData(data)).toBe(false);
  });

  it("rechaza tipo de notificación no válido", () => {
    const data = validData();
    data.notifications[0].type = "chat" as never;
    expect(isValidProgressData(data)).toBe(false);
  });

  it("rechaza quizBest con valores no numéricos", () => {
    const data = validData();
    data.quizBest = { x: "3" } as never;
    expect(isValidProgressData(data)).toBe(false);
  });

  it("acepta badgeReward y completedAt opcionales ausentes", () => {
    const data = validData();
    delete data.challenges[0].badgeReward;
    delete data.projects[0].completedAt;
    expect(isValidProgressData(data)).toBe(true);
  });
});

describe("parseSnapshot", () => {
  it("acepta un round-trip createSnapshot → JSON", () => {
    const json = JSON.stringify(createSnapshot(validData()));
    const result = parseSnapshot(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.snapshot.data.xp).toBe(150);
      expect(result.snapshot.schema).toBe(EXPORT_SCHEMA);
    }
  });

  it("rechaza JSON inválido", () => {
    const result = parseSnapshot("{no-es-json");
    expect(result).toEqual({ ok: false, reason: "not-json" });
  });

  it("rechaza un JSON sin el schema Atlas", () => {
    const result = parseSnapshot(JSON.stringify({ version: 1, data: validData() }));
    expect(result).toEqual({ ok: false, reason: "invalid-schema" });
  });

  it("rechaza una versión futura", () => {
    const snap = createSnapshot(validData());
    const future = JSON.stringify({ ...snap, version: SCHEMA_VERSION + 1 });
    const result = parseSnapshot(future);
    expect(result).toEqual({ ok: false, reason: "future-version" });
  });

  it("rechaza datos internos inválidos", () => {
    const snap = createSnapshot(validData());
    const broken = JSON.stringify({
      ...snap,
      data: { ...snap.data, xp: "mucho" },
    });
    const result = parseSnapshot(broken);
    expect(result).toEqual({ ok: false, reason: "invalid-data" });
  });
});