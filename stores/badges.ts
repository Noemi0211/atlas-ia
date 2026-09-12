export interface BadgeInfo {
  nombre: string;
  descripcion: string;
  icono: string;
}

export const BADGES: Record<string, BadgeInfo> = {
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
  "primer-quiz": {
    nombre: "Primer cuestionario",
    descripcion: "Completaste tu primer cuestionario",
    icono: "📝",
  },
  "quiz-perfecto": {
    nombre: "Puntuación perfecta",
    descripcion: "Completaste un cuestionario con puntuación perfecta",
    icono: "🎯",
  },
  "quiz-maestro": {
    nombre: "Maestro del cuestionario",
    descripcion: "Completaste 10 cuestionarios",
    icono: "📜",
  },
  "colaborador": {
    nombre: "Colaborador",
    descripcion: "Enviaste tu primera propuesta de mejora",
    icono: "💬",
  },
  "curso-completo": {
    nombre: "Diploma",
    descripcion: "Completaste el curso completo de Atlas IA",
    icono: "🎓",
  },
};

