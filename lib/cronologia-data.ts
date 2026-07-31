export interface HitoIA {
  año: number;
  mes?: number;
  titulo: string;
  descripcion: string;
  categoria: "modelo" | "empresa" | "investigacion" | "herramienta" | "hito";
  icono?: string;
}

export const CRONOLOGIA: HitoIA[] = [
  {
    año: 1950,
    titulo: "Test de Turing",
    descripcion: "Alan Turing publica 'Computing Machinery and Intelligence' y propone el Test de Turing para medir la inteligencia de una máquina.",
    categoria: "investigacion",
  },
  {
    año: 1956,
    titulo: "Nacimiento de la IA",
    descripcion: "Conferencia de Dartmouth: John McCarthy acuña el término 'inteligencia artificial' y marca el inicio oficial del campo.",
    categoria: "hito",
  },
  {
    año: 1966,
    titulo: "ELIZA: primer chatbot",
    descripcion: "Joseph Weizenbaum crea ELIZA, el primer programa de procesamiento de lenguaje natural que simulaba una conversación con un psicoterapeuta.",
    categoria: "investigacion",
  },
  {
    año: 1997,
    titulo: "Deep Blue vence a Kasparov",
    descripcion: "El superordenador de IBM Deep Blue derrota al campeón mundial de ajedrez Garry Kasparov, demostrando que una máquina puede superar al ser humano en tareas específicas.",
    categoria: "hito",
  },
  {
    año: 2006,
    titulo: "Nace el Deep Learning moderno",
    descripcion: "Geoffrey Hinton publica un artículo clave sobre deep learning que reactiva el interés en redes neuronales profundas.",
    categoria: "investigacion",
  },
  {
    año: 2011,
    titulo: "Watson gana en Jeopardy!",
    descripcion: "El sistema Watson de IBM vence a los campeones humanos en el concurso Jeopardy!, demostrando capacidades avanzadas de procesamiento de lenguaje natural.",
    categoria: "hito",
  },
  {
    año: 2012,
    titulo: "AlexNet revoluciona la visión por ordenador",
    descripcion: "Alex Krizhevsky gana ImageNet con AlexNet, una red neuronal profunda que reduce drásticamente la tasa de error en reconocimiento de imágenes.",
    categoria: "investigacion",
  },
  {
    año: 2014,
    titulo: "Nacen las GANs",
    descripcion: "Ian Goodfellow inventa las Generative Adversarial Networks, permitiendo generar imágenes realistas por primera vez.",
    categoria: "investigacion",
  },
  {
    año: 2015,
    titulo: "OpenAI se funda",
    descripcion: "Sam Altman, Elon Musk y otros fundan OpenAI con la misión de desarrollar IA segura y beneficiosa para la humanidad.",
    categoria: "empresa",
  },
  {
    año: 2017,
    titulo: "Attention Is All You Need",
    descripcion: "Google publica el artículo que introduce la arquitectura Transformer, la base de todos los modelos de lenguaje modernos (GPT, BERT, Claude, Gemini).",
    categoria: "investigacion",
  },
  {
    año: 2018,
    titulo: "BERT de Google",
    descripcion: "Google lanza BERT, un modelo de lenguaje preentrenado que revoluciona la comprensión del lenguaje natural.",
    categoria: "modelo",
  },
  {
    año: 2018,
    titulo: "Nace GPT",
    descripcion: "OpenAI lanza GPT-1, el primer modelo generativo preentrenado basado en transformers, con 117 millones de parámetros.",
    categoria: "modelo",
  },
  {
    año: 2019,
    titulo: "GPT-2: polémica y poder",
    descripcion: "OpenAI desarrolla GPT-2 con 1500 millones de parámetros. Inicialmente no lo publican por miedo a usos malintencionados, sentando un precedente ético importante.",
    categoria: "modelo",
  },
  {
    año: 2020,
    titulo: "GPT-3 y la API de OpenAI",
    descripcion: "OpenAI lanza GPT-3 con 175 000 millones de parámetros y una API comercial. Marca el inicio de la IA generativa accesible para el público.",
    categoria: "modelo",
  },
  {
    año: 2020,
    titulo: "Nace DALL-E",
    descripcion: "OpenAI presenta DALL-E, un modelo capaz de generar imágenes a partir de descripciones de texto.",
    categoria: "modelo",
  },
  {
    año: 2021,
    titulo: "GitHub Copilot",
    descripcion: "GitHub y OpenAI lanzan Copilot, un asistente de código con IA que revoluciona la programación asistida.",
    categoria: "herramienta",
  },
  {
    año: 2022,
    titulo: "Stable Diffusion: IA gratuita para todos",
    descripcion: "Stability AI lanza Stable Diffusion, un generador de imágenes open source ejecutable localmente, democratizando la creación visual.",
    categoria: "herramienta",
  },
  {
    año: 2022,
    titulo: "ChatGPT: la explosión masiva",
    descripcion: "OpenAI lanza ChatGPT basado en GPT-3.5. Alcanza 100 millones de usuarios en 2 meses, convirtiéndose en la aplicación de crecimiento más rápido de la historia.",
    categoria: "herramienta",
  },
  {
    año: 2023,
    titulo: "GPT-4 multimodal",
    descripcion: "OpenAI lanza GPT-4 con capacidades multimodales (texto e imágenes). Es el modelo más potente del momento.",
    categoria: "modelo",
  },
  {
    año: 2023,
    titulo: "Claude de Anthropic",
    descripcion: "Anthropic lanza Claude, un asistente de IA con enfoque en seguridad y análisis profundo, compitiendo directamente con ChatGPT.",
    categoria: "modelo",
  },
  {
    año: 2023,
    titulo: "Gemini de Google",
    descripcion: "Google lanza Gemini, su modelo multimodal más potente con contexto de hasta 2 millones de tokens, integrado con el ecosistema Google.",
    categoria: "modelo",
  },
  {
    año: 2023,
    titulo: "Cursor: editor de código con IA",
    descripcion: "Cursor lanza su editor de código con IA nativa, compitiendo directamente con Copilot y redefiniendo la experiencia de programación asistida.",
    categoria: "herramienta",
  },
  {
    año: 2024,
    titulo: "Llama 3: open source potente",
    descripcion: "Meta lanza Llama 3, un modelo open source competitivo con GPT-4, democratizando el acceso a modelos de alto rendimiento.",
    categoria: "modelo",
  },
  {
    año: 2024,
    titulo: "Sora: vídeo con IA",
    descripcion: "OpenAI presenta Sora, un modelo de generación de vídeo a partir de texto con calidad y realismo impresionantes.",
    categoria: "modelo",
  },
  {
    año: 2024,
    titulo: "DeepSeek irrumpe en el mercado",
    descripcion: "La empresa emergente china DeepSeek lanza un modelo competitivo con GPT-4 a una fracción del coste, revolucionando el mercado de APIs de IA.",
    categoria: "modelo",
  },
  {
    año: 2025,
    titulo: "Agentes autónomos de IA",
    descripcion: "Los agentes de IA capaces de ejecutar tareas complejas de forma autónoma se convierten en la tendencia dominante, con múltiples plataformas lanzando sus propias soluciones.",
    categoria: "herramienta",
  },
  {
    año: 2025,
    titulo: "Contexto de 1M+ tokens",
    descripcion: "Gemini 2.0 y modelos competidores alcanzan ventanas de contexto de más de 1 millón de tokens, permitiendo procesar documentos del tamaño de novelas completas.",
    categoria: "investigacion",
  },
  {
    año: 2026,
    titulo: "IA multimodal generalizada",
    descripcion: "La mayoría de los modelos principales son multimodales, integrando texto, imagen, audio y vídeo en una sola interfaz unificada. Atlas IA se consolida como plataforma educativa de referencia.",
    categoria: "hito",
  },
];
