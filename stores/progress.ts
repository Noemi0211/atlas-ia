"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Challenge {
  id: string;
  type: "daily" | "weekly";
  title: string;
  description: string;
  xpReward: number;
  badgeReward?: string;
  completed: boolean;
  expiresAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "basico" | "intermedio" | "avanzado";
  completed: boolean;
  completedAt?: string;
}

export interface Notification {
  id: string;
  type: "badge" | "challenge" | "streak" | "level";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface RankingEntry {
  name: string;
  xp: number;
  badges: number;
  streak: number;
  avatar: string;
}

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

const DAILY_CHALLENGES: Omit<Challenge, "id" | "completed" | "expiresAt">[] = [
  { type: "daily", title: "Una lección hoy", description: "Completa al menos 1 lección", xpReward: 30, badgeReward: "reto-diario" },
  { type: "daily", title: "Racha activa", description: "Visita la plataforma y completa una lección", xpReward: 20 },
  { type: "daily", title: "Explora una herramienta", description: "Usa el comparador de herramientas", xpReward: 25 },
];

const WEEKLY_CHALLENGES: Omit<Challenge, "id" | "completed" | "expiresAt">[] = [
  { type: "weekly", title: "3 lecciones esta semana", description: "Completa 3 lecciones en 7 días", xpReward: 100, badgeReward: "reto-semanal" },
  { type: "weekly", title: "Prueba 3 herramientas", description: "Usa el comparador 3 veces", xpReward: 80 },
  { type: "weekly", title: "Racha de 3 días", description: "Mantén una racha de 3 días consecutivos", xpReward: 120, badgeReward: "racha-3" },
];

const DEFAULT_PROJECTS: Omit<Project, "completed" | "completedAt">[] = [
  { id: "proyecto-1", title: "Chatbot simple con prompts", description: "Diseña un prompt de sistema para un asistente de atención al cliente", difficulty: "basico" },
  { id: "proyecto-2", title: "Análisis de sentimientos", description: "Usa IA para analizar el sentimiento de 10 reseñas de productos", difficulty: "basico" },
  { id: "proyecto-3", title: "Generador de imágenes", description: "Crea una serie de 5 imágenes con DALL-E o Midjourney para una campaña", difficulty: "intermedio" },
  { id: "proyecto-4", title: "Flujo de automatización", description: "Diseña un flujo de trabajo con Make o Zapier que use IA", difficulty: "intermedio" },
  { id: "proyecto-5", title: "Agente RAG básico", description: "Construye un agente con recuperación de información usando prompts", difficulty: "avanzado" },
  { id: "proyecto-6", title: "Comparativa de modelos", description: "Compara GPT-4, Claude y Gemini en una tarea específica y documenta resultados", difficulty: "avanzado" },
];

const NAMES = ["Ana García", "Carlos López", "María Rodríguez", "David Martínez", "Laura Sánchez", "Jorge Fernández", "Sofía Díaz", "Miguel Ángel Ruiz", "Elena Torres", "Pablo Ramírez", "Isabel Castro", "Alejandro Vargas", "Valentina Ortiz", "Fernando Mendoza", "Camila Ríos", "Andrés Herrera", "Lucía Campos", "Santiago Vega", "Paula Navarro", "Diego Aguirre"];
const AVATARS = ["🧑‍💻", "👩‍🔬", "👨‍🏫", "👩‍🎨", "👨‍🚀", "👩‍💼", "👨‍🔧", "👩‍🎓", "👨‍💻", "👩‍🏭"];

function generateRankingData(currentXP: number, currentBadges: string[], currentStreak: number): RankingEntry[] {
  const entries: RankingEntry[] = [
    { name: "Tú", xp: currentXP, badges: currentBadges.length, streak: currentStreak, avatar: "⭐" },
  ];

  const shuffled = [...NAMES].sort(() => Math.random() - 0.5).slice(0, 15);
  for (const name of shuffled) {
    const xpBase = Math.floor(Math.random() * 3000) + 100;
    const variation = Math.random() > 0.5 ? 1 : -1;
    const xp = Math.max(50, xpBase + variation * Math.floor(Math.random() * 500));
    entries.push({
      name,
      xp,
      badges: Math.floor(Math.random() * 8) + 1,
      streak: Math.floor(Math.random() * 30),
      avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
    });
  }

  return entries.sort((a, b) => b.xp - a.xp);
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

export const BADGES: Record<string, { nombre: string; descripcion: string; icono: string }> = {
  "first-lesson": {
    nombre: "Primer paso",
    descripcion: "Completaste tu primera lección",
    icono: "🎯",
  },
  "five-lessons": {
    nombre: "Estudiante dedicado",
    descripcion: "Completaste 5 lecciones",
    icono: "📚",
  },
  "ten-lessons": {
    nombre: "Explorador",
    descripcion: "Completaste 10 lecciones",
    icono: "🧭",
  },
  "twenty-five-lessons": {
    nombre: "Maestro del conocimiento",
    descripcion: "Completaste 25 lecciones",
    icono: "🏆",
  },
  "fifty-lessons": {
    nombre: "Erudito",
    descripcion: "Completaste 50 lecciones",
    icono: "📖",
  },
  "seventy-five-lessons": {
    nombre: "Sabio de la IA",
    descripcion: "Completaste 75 lecciones",
    icono: "🏅",
  },
  "xp-100": {
    nombre: "Centenario",
    descripcion: "Acumulaste 100 XP",
    icono: "⭐",
  },
  "xp-500": {
    nombre: "Veterano",
    descripcion: "Acumulaste 500 XP",
    icono: "🌟",
  },
  "xp-1000": {
    nombre: "Leyenda",
    descripcion: "Acumulaste 1.000 XP",
    icono: "👑",
  },
  "xp-2500": {
    nombre: "Inmortal",
    descripcion: "Acumulaste 2.500 XP",
    icono: "💎",
  },
  "xp-5000": {
    nombre: "Dios de la IA",
    descripcion: "Acumulaste 5.000 XP",
    icono: "⚡",
  },
  "streak-7": {
    nombre: "Racha de fuego",
    descripcion: "7 días consecutivos de aprendizaje",
    icono: "🔥",
  },
  "streak-14": {
    nombre: "Racha imparable",
    descripcion: "14 días consecutivos de aprendizaje",
    icono: "💪",
  },
  "streak-30": {
    nombre: "Leyenda viviente",
    descripcion: "30 días consecutivos de aprendizaje",
    icono: "🌟",
  },
  "ecosistema-complete": {
    nombre: "Explorador del ecosistema",
    descripcion: "Completaste todas las lecciones del Bloque 2",
    icono: "🌍",
  },
  "comparador-user": {
    nombre: "Comparador experto",
    descripcion: "Usaste el comparador interactivo de herramientas",
    icono: "⚖️",
  },
  "arbol-decision": {
    nombre: "Decisión inteligente",
    descripcion: "Completaste el árbol de decisión de herramientas",
    icono: "🌳",
  },
  "prompting-complete": {
    nombre: "Maestro del prompt",
    descripcion: "Completaste todas las lecciones del Bloque 3",
    icono: "💬",
  },
  "calculadora-prompts": {
    nombre: "Arquitecto de prompts",
    descripcion: "Usaste la calculadora de prompts",
    icono: "🔧",
  },
  "reto-diario": {
    nombre: "Asiduo",
    descripcion: "Completaste un reto diario",
    icono: "📅",
  },
  "reto-semanal": {
    nombre: "Campeón semanal",
    descripcion: "Completaste un reto semanal",
    icono: "📆",
  },
  "racha-3": {
    nombre: "Constante",
    descripcion: "Mantuviste una racha de 3 días",
    icono: "📈",
  },
  "primer-proyecto": {
    nombre: "Arquitecto en prácticas",
    descripcion: "Completaste tu primer proyecto",
    icono: "🛠️",
  },
  "tres-proyectos": {
    nombre: "Constructor",
    descripcion: "Completaste 3 proyectos",
    icono: "🏗️",
  },
  "todos-proyectos": {
    nombre: "Maestro constructor",
    descripcion: "Completaste todos los proyectos",
    icono: "🏰",
  },
  "chat-ia": {
    nombre: "Explorador del laboratorio",
    descripcion: "Usaste el chat de IA en el laboratorio",
    icono: "🔬",
  },
  "agentes-complete": {
    nombre: "Arquitecto de agentes",
    descripcion: "Completaste todas las lecciones del Bloque 7",
    icono: "🤖",
  },
  "ia-docencia-complete": {
    nombre: "Educador IA",
    descripcion: "Completaste todas las lecciones del Bloque 4",
    icono: "🎓",
  },
  "ia-multimodal-complete": {
    nombre: "Explorador multimodal",
    descripcion: "Completaste todas las lecciones del Bloque 5",
    icono: "🖼️",
  },
  "programacion-complete": {
    nombre: "Arquitecto de software",
    descripcion: "Completaste todas las lecciones del Bloque 6",
    icono: "💻",
  },
  "etica-complete": {
    nombre: "Guardián ético",
    descripcion: "Completaste todas las lecciones del Bloque 8",
    icono: "🛡️",
  },
  "laboratorio-complete": {
    nombre: "Científico de IA",
    descripcion: "Completaste todas las lecciones del Bloque 9",
    icono: "🧪",
  },
  "novedades-complete": {
    nombre: "Vanguardista",
    descripcion: "Completaste todas las lecciones del Bloque 10",
    icono: "✨",
  },
  "ingeniero-prompts": {
    nombre: "Ingeniero de prompts",
    descripcion: "Usaste el entorno de prompts interactivo",
    icono: "💡",
  },
  "arquitecto-flujos": {
    nombre: "Arquitecto de flujos",
    descripcion: "Creaste un flujo de agentes en AgentFlow",
    icono: "🔀",
  },
  "evaluador-modelos": {
    nombre: "Evaluador de modelos",
    descripcion: "Usaste el comparador de modelos",
    icono: "📊",
  },
};
