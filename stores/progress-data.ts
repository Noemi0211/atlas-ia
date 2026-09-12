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

export const DAILY_CHALLENGES: Omit<Challenge, "id" | "completed" | "expiresAt">[] = [
  { type: "daily", title: "Una lección hoy", description: "Completa al menos 1 lección", xpReward: 30, badgeReward: "reto-diario" },
  { type: "daily", title: "Racha activa", description: "Visita la plataforma y completa una lección", xpReward: 20 },
  { type: "daily", title: "Explora una herramienta", description: "Usa el comparador de herramientas", xpReward: 25 },
];

export const WEEKLY_CHALLENGES: Omit<Challenge, "id" | "completed" | "expiresAt">[] = [
  { type: "weekly", title: "3 lecciones esta semana", description: "Completa 3 lecciones en 7 días", xpReward: 100, badgeReward: "reto-semanal" },
  { type: "weekly", title: "Prueba 3 herramientas", description: "Usa el comparador 3 veces", xpReward: 80 },
  { type: "weekly", title: "Racha de 3 días", description: "Mantén una racha de 3 días consecutivos", xpReward: 120, badgeReward: "racha-3" },
];

export const DEFAULT_PROJECTS: Omit<Project, "completed" | "completedAt">[] = [
  { id: "proyecto-1", title: "Chatbot simple con prompts", description: "Diseña un prompt de sistema para un asistente de atención al cliente", difficulty: "basico" },
  { id: "proyecto-2", title: "Análisis de sentimientos", description: "Usa IA para analizar el sentimiento de 10 reseñas de productos", difficulty: "basico" },
  { id: "proyecto-3", title: "Generador de imágenes", description: "Crea una serie de 5 imágenes con DALL-E o Midjourney para una campaña", difficulty: "intermedio" },
  { id: "proyecto-4", title: "Flujo de automatización", description: "Diseña un flujo de trabajo con Make o Zapier que use IA", difficulty: "intermedio" },
  { id: "proyecto-5", title: "Agente RAG básico", description: "Construye un agente con recuperación de información usando prompts", difficulty: "avanzado" },
  { id: "proyecto-6", title: "Comparativa de modelos", description: "Compara GPT-4, Claude y Gemini en una tarea específica y documenta resultados", difficulty: "avanzado" },
];

const NAMES = ["Ana García", "Carlos López", "María Rodríguez", "David Martínez", "Laura Sánchez", "Jorge Fernández", "Sofía Díaz", "Miguel Ángel Ruiz", "Elena Torres", "Pablo Ramírez", "Isabel Castro", "Alejandro Vargas", "Valentina Ortiz", "Fernando Mendoza", "Camila Ríos", "Andrés Herrera", "Lucía Campos", "Santiago Vega", "Paula Navarro", "Diego Aguirre"];
const AVATARS = ["🧑‍💻", "👩‍🔬", "👨‍🏫", "👩‍🎨", "👨‍🚀", "👩‍💼", "👨‍🔧", "👩‍🎓", "👨‍💻", "👩‍🏭"];

export function generateRankingData(currentXP: number, currentBadges: string[], currentStreak: number): RankingEntry[] {
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

