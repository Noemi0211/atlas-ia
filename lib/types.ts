export interface BloqueMeta {
  slug: string;
  numero: number;
  titulo: string;
  descripcion: string;
  icono: string;
  color: string;
  lecciones: number;
  progreso?: number;
}

export interface LeccionMeta {
  slug: string;
  titulo: string;
  descripcion: string;
  orden: number;
  duracion?: string;
  dificultad?: "basico" | "intermedio" | "avanzado";
}

export interface GlosarioTermino {
  termino: string;
  definicion: string;
  categoria: string;
}

export type Theme = "light" | "dark" | "system";

export type Dificultad = "basico" | "intermedio" | "avanzado";

export type CategoriaHerramienta =
  | "asistente-conversacion"
  | "codigo"
  | "imagen"
  | "audio-video"
  | "no-code"
  | "productividad"
  | "investigacion";

export interface HerramientaIA {
  id: string;
  nombre: string;
  empresa: string;
  categoria: CategoriaHerramienta;
  descripcion: string;
  caracteristicas: string[];
  idealPara: string[];
  precio: "gratis" | "freemium" | "pago";
  precioDetalle?: string;
  url: string;
  openSource: boolean;
  multimodal: boolean;
  ventanaContexto?: string;
  fortalezaPrincipal: string;
  debilidadPrincipal: string;
  popularidad: number;
}

export interface CriterioComparacion {
  id: string;
  nombre: string;
  descripcion: string;
  opciones: string[];
}

export interface DecisionNode {
  id: string;
  pregunta: string;
  descripcion?: string;
  opciones: {
    texto: string;
    siguienteNodoId?: string;
    herramientaRecomendada?: string;
  }[];
}

export interface ResultadoComparacion {
  herramientaId: string;
  puntuaciones: Record<string, number>;
}
