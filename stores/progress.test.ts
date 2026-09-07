import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useProgress } from "./progress";

function resetState() {
  useProgress.setState({
    completedLessons: [],
    xp: 0,
    badges: [],
    favorites: [],
    notes: {},
    currentStreak: 0,
    lastVisit: null,
    challenges: [],
    notifications: [],
    comparedTools: 0,
    arbolCompletado: false,
    calculadoraUsada: false,
    quizBest: {},
    quizPerfect: [],
  });
}

describe("useProgress", () => {
  beforeEach(() => {
    localStorage.clear();
    resetState();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("completar una lección suma XP y desbloquea la primera insignia", () => {
    useProgress.getState().completeLesson("fundamentos/01-que-es-ia");
    const { completedLessons, xp, badges } = useProgress.getState();
    expect(completedLessons).toEqual(["fundamentos/01-que-es-ia"]);
    expect(xp).toBe(50);
    expect(badges).toContain("first-lesson");
  });

  it("no duplica lecciones ya completadas", () => {
    const s = useProgress.getState();
    s.completeLesson("fundamentos/01-que-es-ia");
    s.completeLesson("fundamentos/01-que-es-ia");
    expect(useProgress.getState().completedLessons).toHaveLength(1);
    expect(useProgress.getState().xp).toBe(50);
  });

  it("completa el bloque de ecosistema al llegar a 8 lecciones", () => {
    const s = useProgress.getState();
    for (let i = 1; i <= 8; i++) {
      s.completeLesson(`ecosistema/${i}`);
    }
    expect(useProgress.getState().badges).toContain("ecosistema-complete");
  });

  it("getLessonProgress calcula el porcentaje por bloque", () => {
    const s = useProgress.getState();
    s.completeLesson("fundamentos/01-que-es-ia");
    s.completeLesson("fundamentos/02-historia-ia");
    expect(s.getLessonProgress("fundamentos", 10)).toBe(20);
    expect(s.getLessonProgress("fundamentos", 0)).toBe(0);
  });

  it("toggleFavorite añade y quita favoritos", () => {
    const s = useProgress.getState();
    s.toggleFavorite("fundamentos/01-que-es-ia");
    expect(useProgress.getState().favorites).toContain("fundamentos/01-que-es-ia");
    s.toggleFavorite("fundamentos/01-que-es-ia");
    expect(useProgress.getState().favorites).toHaveLength(0);
  });

  it("addXP desbloquea insignias por umbrales", () => {
    const s = useProgress.getState();
    s.addXP(100);
    expect(useProgress.getState().badges).toContain("xp-100");
    s.addXP(900);
    const badges = useProgress.getState().badges;
    expect(badges).toContain("xp-500");
    expect(badges).toContain("xp-1000");
  });

  it("updateStreak acumula racha con días consecutivos", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 7, 13, 10, 0, 0));
    useProgress.getState().updateStreak();
    expect(useProgress.getState().currentStreak).toBe(1);

    vi.setSystemTime(new Date(2026, 7, 14, 10, 0, 0));
    useProgress.getState().updateStreak();
    expect(useProgress.getState().currentStreak).toBe(2);

    vi.setSystemTime(new Date(2026, 7, 15, 10, 0, 0));
    useProgress.getState().updateStreak();
    expect(useProgress.getState().currentStreak).toBe(3);

    vi.setSystemTime(new Date(2026, 7, 15, 12, 0, 0));
    useProgress.getState().updateStreak();
    expect(useProgress.getState().currentStreak).toBe(3);
  });

  it("updateStreak reinicia la racha si se salta un día", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 7, 13, 10, 0, 0));
    useProgress.getState().updateStreak();
    vi.setSystemTime(new Date(2026, 7, 20, 10, 0, 0));
    useProgress.getState().updateStreak();
    expect(useProgress.getState().currentStreak).toBe(1);
  });

  it("unlockComparadorBadge incrementa el contador y otorga insignia", () => {
    useProgress.getState().unlockComparadorBadge();
    const { comparedTools, badges } = useProgress.getState();
    expect(comparedTools).toBe(1);
    expect(badges).toContain("comparador-user");
  });

  it("generateDailyChallenges crea 3 retos diarios sin duplicar", () => {
    useProgress.getState().generateDailyChallenges();
    const daily = useProgress.getState().challenges.filter((c) => c.type === "daily");
    expect(daily).toHaveLength(3);
    useProgress.getState().generateDailyChallenges();
    const dailyAgain = useProgress.getState().challenges.filter((c) => c.type === "daily");
    expect(dailyAgain).toHaveLength(3);
  });

  it("completeProject suma XP según dificultad y desbloquea insignia", () => {
    useProgress.getState().completeProject("proyecto-1");
    const { xp, projects, badges } = useProgress.getState();
    expect(xp).toBe(100);
    expect(projects.find((p) => p.id === "proyecto-1")?.completed).toBe(true);
    expect(badges).toContain("primer-proyecto");
  });

  it("getRankingData devuelve al menos la entrada propia", () => {
    const ranking = useProgress.getState().getRankingData();
    expect(ranking.length).toBeGreaterThan(0);
    expect(ranking.some((r) => r.name === "Tú")).toBe(true);
  });

  it("recordQuizResult suma XP la primera vez y guarda la mejor puntuación", () => {
    const s = useProgress.getState();
    s.recordQuizResult("fundamentos/01-que-es-ia", 3, 4);
    expect(useProgress.getState().xp).toBe(15);
    expect(useProgress.getState().quizBest["fundamentos/01-que-es-ia"]).toBe(3);
    expect(useProgress.getState().badges).toContain("primer-quiz");

    s.recordQuizResult("fundamentos/01-que-es-ia", 4, 4);
    expect(useProgress.getState().xp).toBe(15);
    expect(useProgress.getState().quizBest["fundamentos/01-que-es-ia"]).toBe(4);
  });

  it("recordQuizResult no repite XP al reintentar un cuestionario", () => {
    const s = useProgress.getState();
    s.recordQuizResult("fundamentos/01-que-es-ia", 2, 4);
    s.recordQuizResult("fundamentos/01-que-es-ia", 4, 4);
    expect(useProgress.getState().xp).toBe(10);
  });

  it("recordQuizResult otorga la insignia de puntuación perfecta", () => {
    const s = useProgress.getState();
    s.recordQuizResult("fundamentos/02-historia-ia", 4, 4);
    const { quizPerfect, badges } = useProgress.getState();
    expect(quizPerfect).toContain("fundamentos/02-historia-ia");
    expect(badges).toContain("quiz-perfecto");
  });

  it("recordQuizResult desbloquea quiz-maestro al completar 10 cuestionarios", () => {
    const s = useProgress.getState();
    for (let i = 1; i <= 10; i++) {
      s.recordQuizResult(`bloque/leccion-${String(i).padStart(2, "0")}`, i % 4, 4);
    }
    expect(useProgress.getState().badges).toContain("quiz-maestro");
  });
});
