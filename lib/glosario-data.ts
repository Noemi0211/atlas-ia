import { GlosarioTermino } from "./types";

export const GLOSARIO: GlosarioTermino[] = [
  { termino: "Agente de IA", definicion: "Un sistema de IA capaz de tomar decisiones y ejecutar acciones de forma autónoma para lograr un objetivo específico. Puede navegar por internet, usar herramientas y ejecutar código.", categoria: "Conceptos" },
  { termino: "Alucinación", definicion: "Cuando un modelo de IA genera información que parece plausible pero es completamente falsa o inventada. Las alucinaciones son una de las limitaciones más importantes de los LLM.", categoria: "Limitaciones" },
  { termino: "API", definicion: "Application Programming Interface. Un conjunto de reglas que permite a dos aplicaciones comunicarse entre sí. Las APIs permiten integrar IA en otras aplicaciones.", categoria: "Técnico" },
  { termino: "Aprendizaje Supervisado", definicion: "Un tipo de machine learning en el que el modelo se entrena con datos etiquetados, es decir, datos que ya tienen la respuesta correcta. El modelo aprende a predecir la salida correcta.", categoria: "ML" },
  { termino: "Aprendizaje No Supervisado", definicion: "Un tipo de machine learning en el que el modelo encuentra patrones en datos sin etiquetar, sin saber cuál es la respuesta correcta. Útil para clustering y segmentación.", categoria: "ML" },
  { termino: "Aprendizaje por Refuerzo", definicion: "Un tipo de machine learning en el que un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas por acciones correctas y castigos por incorrectas.", categoria: "ML" },
  { termino: "Batch size", definicion: "Número de ejemplos de entrenamiento procesados antes de actualizar los parámetros del modelo. Un batch size más grande puede mejorar la estabilidad del entrenamiento.", categoria: "Técnico" },
  { termino: "Chain-of-Thought (CoT)", definicion: "Técnica de prompting que pide al modelo razonar paso a paso antes de responder. Mejora la precisión en problemas complejos y tareas de razonamiento.", categoria: "Prompting" },
  { termino: "Chatbot", definicion: "Un programa que simula una conversación humana. Los chatbots modernos de IA pueden mantener conversaciones complejas y ayudar con diversas tareas.", categoria: "Herramientas" },
  { termino: "Contexto (ventana de contexto)", definicion: "La cantidad de información que un modelo de IA puede 'recordar' y considerar al generar una respuesta. Se mide en tokens. Un contexto más amplio permite conversaciones más largas.", categoria: "Técnico" },
  { termino: "Deep Learning", definicion: "Un subconjunto del Machine Learning que utiliza redes neuronales con muchas capas (profundas) para aprender patrones complejos. Es la base de los modelos más potentes actuales.", categoria: "ML" },
  { termino: "Dataset", definicion: "Un conjunto de datos utilizado para entrenar un modelo de IA. La calidad y cantidad del conjunto de datos determinan en gran medida la calidad del modelo resultante.", categoria: "Técnico" },
  { termino: "Embedding", definicion: "Una representación numérica de un texto, imagen u otro tipo de dato que captura su significado semántico. Los embeddings permiten que la IA 'entienda' la relación entre conceptos.", categoria: "Técnico" },
  { termino: "Entrenamiento", definicion: "El proceso de enseñar a un modelo de IA ajustando sus parámetros a partir de datos de ejemplo. Puede durar desde minutos hasta meses dependiendo del modelo.", categoria: "Técnico" },
  { termino: "Few-shot prompting", definicion: "Técnica de prompting en la que se proporcionan ejemplos del resultado esperado antes de pedir la tarea real. Ayuda a guiar al modelo hacia el formato deseado.", categoria: "Prompting" },
  { termino: "Fine-tuning", definicion: "El proceso de ajustar un modelo preentrenado con datos específicos para mejorar su rendimiento en una tarea concreta. Permite personalizar modelos generales.", categoria: "Técnico" },
  { termino: "Generación Aumentada por Recuperación (RAG)", definicion: "Técnica que combina generación de texto con búsqueda de información relevante en una base de conocimiento externa. Permite respuestas más precisas y actualizadas.", categoria: "Técnico" },
  { termino: "GPT", definicion: "Generative Pre-trained Transformer. Un tipo de modelo de lenguaje desarrollado por OpenAI que genera texto predictivo. Es la base de ChatGPT.", categoria: "Modelos" },
  { termino: "Gradiente", definicion: "Valor matemático que indica la dirección y magnitud del error de un modelo, usado durante el entrenamiento para ajustar los parámetros y minimizar errores.", categoria: "Técnico" },
  { termino: "Hiperparámetros", definicion: "Parámetros que se configuran antes de entrenar un modelo, como la tasa de aprendizaje, número de capas o tamaño del batch. Influyen significativamente en el rendimiento.", categoria: "Técnico" },
  { termino: "Inferencia", definicion: "El proceso de usar un modelo ya entrenado para generar predicciones o respuestas a nuevas preguntas. Es lo que ocurre cada vez que interactúas con una IA.", categoria: "Técnico" },
  { termino: "Ingeniería de Prompt (Prompt Engineering)", definicion: "La disciplina de diseñar instrucciones optimizadas para obtener los mejores resultados de un modelo de IA. Incluye técnicas como few-shot, cadena de pensamiento y más.", categoria: "Prompting" },
  { termino: "Inteligencia Artificial (IA)", definicion: "Rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Incluye aprendizaje, razonamiento, percepción y lenguaje.", categoria: "Conceptos" },
  { termino: "Inteligencia Artificial General (AGI)", definicion: "Una IA hipotética que igualaría o superaría la inteligencia humana en cualquier tarea cognitiva. A día de hoy no existe; los sistemas actuales son IA estrecha.", categoria: "Conceptos" },
  { termino: "IA Estrecha (ANI)", definicion: "IA diseñada para una tarea específica, como reconocer imágenes o traducir textos. Todos los sistemas actuales de IA son ANI, no AGI.", categoria: "Conceptos" },
  { termino: "LLM (Large Language Model)", definicion: "Un modelo de lenguaje entrenado con enormes cantidades de datos de texto. Puede generar, traducir, resumir y responder preguntas. Ejemplos: GPT-4, Claude, Gemini.", categoria: "Modelos" },
  { termino: "Machine Learning", definicion: "Un enfoque de la IA en el que los sistemas aprenden de los datos sin ser programados explícitamente para cada tarea. El modelo encuentra patrones en los datos y los usa para hacer predicciones.", categoria: "ML" },
  { termino: "Modelo fundacional", definicion: "Modelos de IA masivos entrenados en grandes cantidades de datos que pueden adaptarse a múltiples tareas. GPT-4, Claude y Gemini son modelos fundacionales.", categoria: "Modelos" },
  { termino: "Multimodal", definicion: "Capacidad de un modelo de IA para procesar y generar múltiples tipos de datos simultáneamente: texto, imágenes, audio y vídeo.", categoria: "Conceptos" },
  { termino: "Neurona (artificial)", definicion: "Unidad básica de una red neuronal que recibe entradas, las procesa y produce una salida. Inspirada en las neuronas biológicas del cerebro humano.", categoria: "ML" },
  { termino: "Overfitting", definicion: "Cuando un modelo se ajusta en exceso a los datos de entrenamiento, incluidos el ruido y los detalles irrelevantes, y no generaliza bien a datos nuevos. Es un error común.", categoria: "ML" },
  { termino: "Parámetros", definicion: "Los valores internos que un modelo de IA aprende durante el entrenamiento. Modelos grandes pueden tener desde millones hasta billones de parámetros.", categoria: "Técnico" },
  { termino: "Perceptrón", definicion: "El tipo más simple de red neuronal, con una sola capa. Fue la base de las redes modernas. Por sí solo puede resolver únicamente problemas linealmente separables.", categoria: "ML" },
  { termino: "Preentrenamiento", definicion: "Fase inicial en la que un modelo aprende de grandes cantidades de datos no etiquetados. Después se afina (ajuste fino) para tareas específicas. Ahorra tiempo y recursos.", categoria: "Técnico" },
  { termino: "Prompt", definicion: "La instrucción o pregunta que le damos a una IA. Un buen prompt produce mejores resultados. La ingeniería de prompts es el arte de formular instrucciones efectivas.", categoria: "Prompting" },
  { termino: "RAG (Retrieval-Augmented Generation)", definicion: "Una técnica que combina la generación de texto con la búsqueda de información relevante. Permite a las IAs responder con información actualizada y específica.", categoria: "Técnico" },
  { termino: "Red Neuronal", definicion: "Un sistema computacional inspirado en el cerebro humano, compuesto por capas de neuronas interconectadas. Es la base del deep learning.", categoria: "ML" },
  { termino: "Red Neuronal Convolucional (CNN)", definicion: "Tipo de red neuronal especializada en procesar imágenes y datos con estructura de cuadrícula. Usa filtros para detectar patrones visuales.", categoria: "ML" },
  { termino: "Red Neuronal Recurrente (RNN)", definicion: "Tipo de red neuronal diseñada para datos secuenciales como texto o audio. Tiene memoria de pasos anteriores, pero es menos eficiente que los transformers.", categoria: "ML" },
  { termino: "Regresión", definicion: "Técnica de machine learning para predecir valores numéricos continuos, como precios, temperaturas o tiempos. El modelo encuentra una función que relaciona variables.", categoria: "ML" },
  { termino: "Sesgo (Bias)", definicion: "Error sistemático en un modelo de IA que favorece ciertos resultados sobre otros. Puede originarse en datos de entrenamiento desequilibrados o en el diseño del algoritmo.", categoria: "Limitaciones" },
  { termino: "Token", definicion: "La unidad básica de texto que un modelo de IA procesa. Un token puede ser una palabra, parte de una palabra o un carácter. Los precios de las APIs se suelen medir en tokens.", categoria: "Técnico" },
  { termino: "Transformer", definicion: "La arquitectura de red neuronal que revolucionó la IA. Publicada en 2017, es la base de todos los modelos de lenguaje modernos. Permite procesar texto de forma paralela.", categoria: "ML" },
  { termino: "Transfer Learning", definicion: "Técnica en la que un modelo entrenado para una tarea se reutiliza como punto de partida para una tarea diferente pero relacionada. Ahorra tiempo de entrenamiento.", categoria: "Técnico" },
  { termino: "Tasa de aprendizaje", definicion: "Hiperparámetro que controla cuánto se ajustan los parámetros del modelo en cada paso del entrenamiento. Si es muy alta, el modelo puede divergir; si es muy baja, el entrenamiento se vuelve lento.", categoria: "Técnico" },
  { termino: "Underfitting", definicion: "Cuando un modelo es demasiado simple para capturar los patrones en los datos. Produce malos resultados tanto en entrenamiento como en datos nuevos.", categoria: "ML" },
  { termino: "Zero-shot prompting", definicion: "Técnica en la que se le pide a la IA realizar una tarea sin proporcionar ejemplos previos. Funciona bien para tareas que el modelo ya entiende por su entrenamiento.", categoria: "Prompting" },
];

export const CATEGORIAS_GLOSARIO = [
  "Todas",
  "Conceptos",
  "ML",
  "Modelos",
  "Técnico",
  "Prompting",
  "Herramientas",
  "Limitaciones",
] as const;

export function getGlosarioPorCategoria(categoria: string): GlosarioTermino[] {
  if (categoria === "Todas") return GLOSARIO;
  return GLOSARIO.filter((t) => t.categoria === categoria);
}

export function agruparPorLetra(terminos: GlosarioTermino[]) {
  const grupos: Record<string, GlosarioTermino[]> = {};
  for (const t of terminos) {
    const letra = t.termino[0].toUpperCase();
    if (!grupos[letra]) grupos[letra] = [];
    grupos[letra].push(t);
  }
  return Object.entries(grupos).sort(([a], [b]) => a.localeCompare(b));
}
