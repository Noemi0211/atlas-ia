export interface PromptConfig {
  tarea: string;
  rol: string;
  formato: string;
  tono: string;
  audiencia: string;
  extension: string;
  contexto?: string;
}

export const ROLES = [
  { id: "ninguno", label: "Ninguno en particular", descripcion: "Sin rol específico" },
  { id: "profesor", label: "Profesor / Educador", descripcion: "Explica conceptos de forma clara y didáctica" },
  { id: "periodista", label: "Periodista / Escritor", descripcion: "Redacción clara, objetiva y bien estructurada" },
  { id: "abogado", label: "Abogado / Asesor legal", descripcion: "Preciso, formal, basado en normativas" },
  { id: "cientifico", label: "Científico / Investigador", descripcion: "Rigor académico, datos y referencias" },
  { id: "marketing", label: "Experto en Marketing", descripcion: "Persuasivo, orientado a conversión" },
  { id: "ceo", label: "CEO / Directivo", descripcion: "Visión estratégica, ejecutiva y práctica" },
  { id: "desarrollador", label: "Desarrollador / Programador", descripcion: "Técnico, preciso, con ejemplos de código" },
  { id: "creativo", label: "Creativo / Diseñador", descripcion: "Original, visual, innovador" },
  { id: "psicologo", label: "Psicólogo / Coach", descripcion: "Empático, comprensivo, orientado a personas" },
] as const;

export const FORMATOS = [
  { id: "parrafos", label: "Párrafos", descripcion: "Texto fluido en párrafos" },
  { id: "lista", label: "Lista con viñetas", descripcion: "Puntos clave enumerados" },
  { id: "tabla", label: "Tabla comparativa", descripcion: "Datos organizados en columnas" },
  { id: "pasos", label: "Pasos / Instrucciones", descripcion: "Secuencia numerada de acciones" },
  { id: "email", label: "Email / Carta", descripcion: "Formato de correspondencia" },
  { id: "codigo", label: "Código", descripcion: "Bloques de código con explicación" },
  { id: "esquema", label: "Esquema / Outline", descripcion: "Estructura jerárquica de contenidos" },
  { id: "dialogo", label: "Diálogo / Conversación", descripcion: "Formato de preguntas y respuestas" },
] as const;

export const TONOS = [
  { id: "profesional", label: "Profesional", descripcion: "Formal y corporativo" },
  { id: "casual", label: "Casual / Amigable", descripcion: "Cercano y natural" },
  { id: "divulgativo", label: "Divulgativo", descripcion: "Claro para todo público" },
  { id: "humoristico", label: "Humorístico", descripcion: "Con sentido del humor" },
  { id: "inspirador", label: "Inspirador / Motivacional", descripcion: "Que motive a la acción" },
  { id: "tecnico", label: "Técnico / Especializado", descripcion: "Con jerga del sector" },
  { id: "formal", label: "Formal / Serio", descripcion: "Muy formal, para documentos oficiales" },
] as const;

export const AUDIENCIAS = [
  { id: "general", label: "Público general", descripcion: "Para cualquier persona" },
  { id: "principiante", label: "Principiantes", descripcion: "Personas sin conocimiento previo" },
  { id: "profesional", label: "Profesionales del sector", descripcion: "Con experiencia en el área" },
  { id: "ejecutivo", label: "Ejecutivos / Directivos", descripcion: "Alta dirección" },
  { id: "estudiante", label: "Estudiantes", descripcion: "En formación académica" },
  { id: "cliente", label: "Clientes / Usuarios", descripcion: "Personas que usan tu producto" },
  { id: "ninos", label: "Niños / Adolescentes", descripcion: "Audiencia joven" },
] as const;

export const EXTENSIONES = [
  { id: "muy-corta", label: "Muy corta (< 50 palabras)", descripcion: "Respuesta breve" },
  { id: "corta", label: "Corta (50-150 palabras)", descripcion: "Resumen conciso" },
  { id: "media", label: "Media (150-300 palabras)", descripcion: "Extensión estándar" },
  { id: "larga", label: "Larga (300-500 palabras)", descripcion: "Respuesta detallada" },
  { id: "muy-larga", label: "Muy larga (500+ palabras)", descripcion: "Análisis exhaustivo" },
] as const;

export function generarPrompt(config: PromptConfig): string {
  const partes: string[] = [];

  if (config.rol && config.rol !== "ninguno") {
    const rolLabel = ROLES.find((r) => r.id === config.rol)?.label || "";
    partes.push(`Eres un ${rolLabel.toLowerCase()}.`);
  }

  if (config.contexto) {
    partes.push(`\n\nContexto: ${config.contexto}`);
  }

  partes.push(`\n\n${config.tarea}`);

  const especificaciones: string[] = [];

  if (config.formato) {
    const formatoLabel = FORMATOS.find((f) => f.id === config.formato)?.label || "";
    especificaciones.push(`en formato ${formatoLabel.toLowerCase()}`);
  }

  if (config.tono) {
    const tonoLabel = TONOS.find((t) => t.id === config.tono)?.label || "";
    especificaciones.push(`con tono ${tonoLabel.toLowerCase()}`);
  }

  if (config.audiencia) {
    const audienciaLabel = AUDIENCIAS.find((a) => a.id === config.audiencia)?.label || "";
    especificaciones.push(`dirigido a ${audienciaLabel.toLowerCase()}`);
  }

  if (config.extension) {
    const extLabel = EXTENSIONES.find((e) => e.id === config.extension)?.label || "";
    especificaciones.push(extLabel);
  }

  if (especificaciones.length > 0) {
    partes.push(`\n\nResponde ${especificaciones.join(", ")}.`);
  }

  return partes.join("");
}
