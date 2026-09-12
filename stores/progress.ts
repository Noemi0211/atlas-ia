"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BLOQUES } from "@/lib/constants";
import { BADGES, type BadgeInfo } from "./badges";
import {
  DAILY_CHALLENGES,
  WEEKLY_CHALLENGES,
  DEFAULT_PROJECTS,
  generateRankingData,
  type Challenge,
  type Notification,
  type Project,
  type RankingEntry,
} from "./progress-data";

export { BADGES, type BadgeInfo };
export type { Challenge, Notification, Project, RankingEntry };

export const TOTAL_LESSONS = BLOQUES.reduce((acc, b) => acc + b.lecciones, 0);

interface ProgressState {
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
  cursoCompletadoAt: string | null;

  completeLesson: (lessonId: string) => void;
  addXP: (amount: number) => void;
  addBadge: (badgeId: string) => void;
  toggleFavorite: (lessonId: string) => void;
  saveNote: (lessonId: string, note: string) => void;
  removeNote: (lessonId: string) => void;
  updateStreak: () => void;
  getLessonProgress: (bloqueSlug: string, totalLessons: number) => number;
  unlockComparadorBadge: () => void;
  unlockArbolDecisionBadge: () => void;
  unlockCalculadoraBadge: () => void;
  unlockColaboradorBadge: () => void;
  recordQuizResult: (lessonId: string, correct: number, total: number) => void;

  completeChallenge: (challengeId: string) => void;
  completeProject: (projectId: string) => void;
  markNotificationRead: (notificationId: string) => void;
  markAllNotificationsRead: () => void;
  addNotification: (notification: Omit<Notification, "id" | "createdAt" | "read">) => void;
  getUnreadNotificationsCount: () => number;
  generateDailyChallenges: () => void;
  generateWeeklyChallenges: () => void;
  getRankingData: () => RankingEntry[];
  checkStreakBadge: () => void;
  getTotalLessons: () => number;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      xp: 0,
      badges: [],
      favorites: [],
      notes: {},
      currentStreak: 0,
      lastVisit: null,
      challenges: [],
      projects: DEFAULT_PROJECTS.map((p) => ({ ...p, completed: false })),
      notifications: [],
      comparedTools: 0,
      arbolCompletado: false,
      calculadoraUsada: false,
      quizBest: {},
      quizPerfect: [],
      colaboradorBadge: false,
      cursoCompletadoAt: null,

      completeLesson: (lessonId: string) => {
        const { completedLessons, xp, challenges } = get();
        if (!completedLessons.includes(lessonId)) {
          const newCompleted = [...completedLessons, lessonId];
          const newXP = xp + 50;

          const newChallenges = challenges.map((c) => {
            if (c.completed) return c;
            if (c.id === "ch-daily-1" || c.id === "ch-daily-2") {
              return { ...c, completed: true };
            }
            if (c.id === "ch-weekly-1" && newCompleted.length >= 3) {
              return { ...c, completed: true };
            }
            return c;
          });

          set({
            completedLessons: newCompleted,
            xp: newXP,
            challenges: newChallenges,
          });

          const total = newCompleted.length;
          if (total === 1) get().addBadge("first-lesson");
          if (total === 5) get().addBadge("five-lessons");
          if (total === 10) get().addBadge("ten-lessons");
          if (total === 25) get().addBadge("twenty-five-lessons");
          if (total === 50) get().addBadge("fifty-lessons");
          if (total === 75) get().addBadge("seventy-five-lessons");

          if (total >= TOTAL_LESSONS) {
            get().addBadge("curso-completo");
            if (!get().cursoCompletadoAt) {
              set({ cursoCompletadoAt: new Date().toISOString() });
            }
          }

          if (lessonId.startsWith("ecosistema/")) {
            const ecosystemLessons = completedLessons.filter((id) =>
              id.startsWith("ecosistema/")
            ).length + 1;
            if (ecosystemLessons >= 8) {
              get().addBadge("ecosistema-complete");
            }
          }

          if (lessonId.startsWith("prompting/")) {
            const promptingLessons = completedLessons.filter((id) =>
              id.startsWith("prompting/")
            ).length + 1;
            if (promptingLessons >= 8) {
              get().addBadge("prompting-complete");
            }
          }

          if (lessonId.startsWith("agentes/")) {
            const agentesLessons = completedLessons.filter((id) =>
              id.startsWith("agentes/")
            ).length + 1;
            if (agentesLessons >= 8) {
              get().addBadge("agentes-complete");
            }
          }

          if (lessonId.startsWith("ia-docencia/")) {
            const docenciaLessons = completedLessons.filter((id) =>
              id.startsWith("ia-docencia/")
            ).length + 1;
            if (docenciaLessons >= 7) {
              get().addBadge("ia-docencia-complete");
            }
          }

          if (lessonId.startsWith("ia-multimodal/")) {
            const multimodalLessons = completedLessons.filter((id) =>
              id.startsWith("ia-multimodal/")
            ).length + 1;
            if (multimodalLessons >= 6) {
              get().addBadge("ia-multimodal-complete");
            }
          }

          if (lessonId.startsWith("programacion/")) {
            const programacionLessons = completedLessons.filter((id) =>
              id.startsWith("programacion/")
            ).length + 1;
            if (programacionLessons >= 6) {
              get().addBadge("programacion-complete");
            }
          }

          if (lessonId.startsWith("etica/")) {
            const eticaLessons = completedLessons.filter((id) =>
              id.startsWith("etica/")
            ).length + 1;
            if (eticaLessons >= 6) {
              get().addBadge("etica-complete");
            }
          }

          if (lessonId.startsWith("laboratorio/")) {
            const laboratorioLessons = completedLessons.filter((id) =>
              id.startsWith("laboratorio/")
            ).length + 1;
            if (laboratorioLessons >= 5) {
              get().addBadge("laboratorio-complete");
            }
          }

          if (lessonId.startsWith("novedades/")) {
            const novedadesLessons = completedLessons.filter((id) =>
              id.startsWith("novedades/")
            ).length + 1;
            if (novedadesLessons >= 6) {
              get().addBadge("novedades-complete");
            }
          }

          const newChallengesAfter = get().challenges;
          const completedChallenge = newChallengesAfter.find((c) => c.completed && !challenges.find((oc) => oc.id === c.id)?.completed);
          if (completedChallenge) {
            set({ xp: get().xp + completedChallenge.xpReward });
            get().addNotification({
              type: "challenge",
              title: "¡Reto completado!",
              message: `Completaste "${completedChallenge.title}" y ganaste ${completedChallenge.xpReward} XP`,
            });
            if (completedChallenge.badgeReward) {
              get().addBadge(completedChallenge.badgeReward);
            }
          }
        }
      },

      addXP: (amount: number) => {
        const { xp, badges } = get();
        const newXP = xp + amount;
        const newBadges = [...badges];

        if (newXP >= 100 && !newBadges.includes("xp-100"))
          newBadges.push("xp-100");
        if (newXP >= 500 && !newBadges.includes("xp-500"))
          newBadges.push("xp-500");
        if (newXP >= 1000 && !newBadges.includes("xp-1000"))
          newBadges.push("xp-1000");
        if (newXP >= 2500 && !newBadges.includes("xp-2500"))
          newBadges.push("xp-2500");
        if (newXP >= 5000 && !newBadges.includes("xp-5000"))
          newBadges.push("xp-5000");

        set({ xp: newXP, badges: newBadges });
      },

      addBadge: (badgeId: string) => {
        const { badges, notifications } = get();
        if (!badges.includes(badgeId)) {
          const badgeInfo = BADGES[badgeId];
          const newBadges = [...badges, badgeId];
          set({ badges: newBadges });
          if (badgeInfo) {
            const newNotification: Notification = {
              id: generateId(),
              type: "badge",
              title: "¡Nueva insignia!",
              message: `Has desbloqueado: ${badgeInfo.nombre}`,
              read: false,
              createdAt: new Date().toISOString(),
            };
            set({ notifications: [...notifications, newNotification] });
          }
        }
      },

      toggleFavorite: (lessonId: string) => {
        const { favorites } = get();
        if (favorites.includes(lessonId)) {
          set({ favorites: favorites.filter((id) => id !== lessonId) });
        } else {
          set({ favorites: [...favorites, lessonId] });
        }
      },

      saveNote: (lessonId: string, note: string) => {
        const { notes } = get();
        set({ notes: { ...notes, [lessonId]: note } });
      },

      removeNote: (lessonId: string) => {
        const { notes } = get();
        const newNotes = { ...notes };
        delete newNotes[lessonId];
        set({ notes: newNotes });
      },

      updateStreak: () => {
        const { lastVisit, currentStreak } = get();
        const today = new Date().toDateString();

        if (lastVisit === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisit === yesterday.toDateString()) {
          const newStreak = currentStreak + 1;
          set({ currentStreak: newStreak, lastVisit: today });
          get().checkStreakBadge();
        } else if (lastVisit !== today) {
          set({ currentStreak: 1, lastVisit: today });
        }
      },

      checkStreakBadge: () => {
        const { currentStreak } = get();
        if (currentStreak >= 7) get().addBadge("streak-7");
        if (currentStreak >= 14) get().addBadge("streak-14");
        if (currentStreak >= 30) get().addBadge("streak-30");

        if (currentStreak === 3) {
          const { challenges } = get();
          const weeklyChallenge = challenges.find((c) => c.id === "ch-weekly-3");
          if (weeklyChallenge && !weeklyChallenge.completed) {
            const newChallenges = challenges.map((c) =>
              c.id === "ch-weekly-3" ? { ...c, completed: true } : c
            );
            set({ challenges: newChallenges });
          }
        }
      },

      getLessonProgress: (bloqueSlug: string, totalLessons: number) => {
        const { completedLessons } = get();
        const completed = completedLessons.filter((id) =>
          id.startsWith(bloqueSlug)
        ).length;
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
      },

      unlockComparadorBadge: () => {
        const { comparedTools, challenges } = get();
        const newCount = comparedTools + 1;
        set({ comparedTools: newCount });
        get().addBadge("comparador-user");

        const weeklyChallenge = challenges.find((c) => c.id === "ch-weekly-2");
        if (weeklyChallenge && !weeklyChallenge.completed && newCount >= 3) {
          const newChallenges = challenges.map((c) =>
            c.id === "ch-weekly-2" ? { ...c, completed: true } : c
          );
          set({ challenges: newChallenges });
        }
      },

      unlockArbolDecisionBadge: () => {
        if (!get().arbolCompletado) {
          set({ arbolCompletado: true });
          get().addBadge("arbol-decision");
        }
      },

      unlockCalculadoraBadge: () => {
        if (!get().calculadoraUsada) {
          set({ calculadoraUsada: true });
          get().addBadge("calculadora-prompts");
        }
      },

      unlockColaboradorBadge: () => {
        if (!get().colaboradorBadge) {
          set({ colaboradorBadge: true });
          get().addBadge("colaborador");
          get().addXP(50);
        }
      },

      recordQuizResult: (lessonId: string, correct: number, total: number) => {
        const { quizBest, quizPerfect, xp } = get();
        const firstTime = !(lessonId in quizBest);
        const isPerfect = correct === total;

        const newQuizBest = {
          ...quizBest,
          [lessonId]: Math.max(quizBest[lessonId] ?? 0, correct),
        };
        const newPerfect =
          isPerfect && !quizPerfect.includes(lessonId)
            ? [...quizPerfect, lessonId]
            : quizPerfect;

        set({
          quizBest: newQuizBest,
          quizPerfect: newPerfect,
          ...(firstTime ? { xp: xp + correct * 5 } : {}),
        });

        if (firstTime) get().addBadge("primer-quiz");
        if (isPerfect) get().addBadge("quiz-perfecto");
        if (Object.keys(newQuizBest).length === 10) {
          get().addBadge("quiz-maestro");
        }
      },

      completeChallenge: (challengeId: string) => {
        const { challenges, xp } = get();
        const challenge = challenges.find((c) => c.id === challengeId);
        if (!challenge || challenge.completed) return;

        const newChallenges = challenges.map((c) =>
          c.id === challengeId ? { ...c, completed: true } : c
        );
        set({ challenges: newChallenges, xp: xp + challenge.xpReward });

        get().addNotification({
          type: "challenge",
          title: "¡Reto completado!",
          message: `Completaste "${challenge.title}" y ganaste ${challenge.xpReward} XP`,
        });

        if (challenge.badgeReward) {
          get().addBadge(challenge.badgeReward);
        }
      },

      completeProject: (projectId: string) => {
        const { projects, xp } = get();
        const project = projects.find((p) => p.id === projectId);
        if (!project || project.completed) return;

        const xpMap = { basico: 100, intermedio: 200, avanzado: 350 };
        const earnedXP = xpMap[project.difficulty];

        const newProjects = projects.map((p) =>
          p.id === projectId ? { ...p, completed: true, completedAt: new Date().toISOString() } : p
        );
        set({ projects: newProjects, xp: xp + earnedXP });

        get().addNotification({
          type: "badge",
          title: "¡Proyecto completado!",
          message: `Completaste "${project.title}" y ganaste ${earnedXP} XP`,
        });

        const completedProjects = newProjects.filter((p) => p.completed).length;
        if (completedProjects === 1) get().addBadge("primer-proyecto");
        if (completedProjects === 3) get().addBadge("tres-proyectos");
        if (completedProjects === 6) get().addBadge("todos-proyectos");
      },

      markNotificationRead: (notificationId: string) => {
        const { notifications } = get();
        set({
          notifications: notifications.map((n) =>
            n.id === notificationId ? { ...n, read: true } : n
          ),
        });
      },

      markAllNotificationsRead: () => {
        const { notifications } = get();
        set({
          notifications: notifications.map((n) => ({ ...n, read: true })),
        });
      },

      addNotification: (notification) => {
        const { notifications } = get();
        const newNotification: Notification = {
          ...notification,
          id: generateId(),
          read: false,
          createdAt: new Date().toISOString(),
        };
        set({ notifications: [newNotification, ...notifications].slice(0, 50) });
      },

      getUnreadNotificationsCount: () => {
        return get().notifications.filter((n) => !n.read).length;
      },

      generateDailyChallenges: () => {
        const today = new Date().toDateString();
        const { challenges } = get();
        const existingDaily = challenges.find((c) => c.type === "daily" && new Date(c.expiresAt).toDateString() === today);
        if (existingDaily) return;

        const dailyChallenges: Challenge[] = DAILY_CHALLENGES.map((c) => ({
          ...c,
          id: `ch-daily-${DAILY_CHALLENGES.indexOf(c) + 1}`,
          completed: false,
          expiresAt: new Date(Date.now() + 86400000).toISOString(),
        }));

        const weeklies = challenges.filter((c) => c.type === "weekly");
        set({ challenges: [...dailyChallenges, ...weeklies] });
      },

      generateWeeklyChallenges: () => {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const weekKey = weekStart.toDateString();
        const { challenges } = get();
        const existingWeekly = challenges.find((c) => c.type === "weekly" && new Date(c.expiresAt).toDateString() >= weekKey);
        if (existingWeekly) return;

        const weeklyChallenges: Challenge[] = WEEKLY_CHALLENGES.map((c) => ({
          ...c,
          id: `ch-weekly-${WEEKLY_CHALLENGES.indexOf(c) + 1}`,
          completed: false,
          expiresAt: new Date(Date.now() + 604800000).toISOString(),
        }));

        const dailies = challenges.filter((c) => c.type === "daily");
        set({ challenges: [...dailies, ...weeklyChallenges] });
      },

      getRankingData: () => {
        const { xp, badges, currentStreak } = get();
        return generateRankingData(xp, badges, currentStreak);
      },

      getTotalLessons: () => {
        return get().completedLessons.length;
      },
    }),
    {
      name: "atlas-progress",
    }
  )
);

