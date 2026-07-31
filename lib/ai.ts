import OpenAI from "openai";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const SYSTEM_PROMPT = `Eres Atlas, un tutor experto en Inteligencia Artificial. Tus características:

- Explicas conceptos de IA de forma clara, didáctica y adaptada al nivel de cada persona
- Usas ejemplos prácticos del mundo real
- Cuando te preguntan sobre herramientas (ChatGPT, Claude, Gemini, etc.), comparas sus fortalezas
- Hablas siempre en español, con tono amigable pero profesional
- Puedes explicar desde conceptos básicos (qué es un LLM) hasta avanzados (RAG, ajuste fino, MCP)
- Si no sabes algo, lo admites y sugieres dónde buscar en Atlas IA
- Mantienes respuestas concisas pero completas (3-5 párrafos como máximo salvo que se pidan más)
- Usas markdown básico para formato (**negrita**, listas, \`código\`)`;

const FALLBACK_RESPONSES: Record<string, (query: string) => string> = {
  "hola": () => "¡Hola! Soy Atlas, tu tutor de IA. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre conceptos de inteligencia artificial, herramientas, prompting, o cualquier tema que estés aprendiendo en la plataforma.",
  "que es ia": () => "**Inteligencia Artificial (IA)** es la rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.\n\nIncluye subcampos como:\n- **Machine Learning**: algoritmos que aprenden de datos\n- **Deep Learning**: redes neuronales profundas\n- **Procesamiento de Lenguaje Natural (PLN)**: entender y generar texto\n- **Visión por ordenador**: analizar imágenes\n\n¿Quieres que profundice en alguno de estos?",
  "que es machine learning": () => "**Machine Learning (Aprendizaje Automático)** es un subcampo de la IA en el que los sistemas aprenden patrones a partir de datos sin ser programados explícitamente.\n\nLos tipos principales son:\n1. **Supervisado**: aprende de datos etiquetados (ej: clasificar correos como spam o no spam)\n2. **No supervisado**: encuentra patrones en datos sin etiquetar (ej: segmentar clientes)\n3. **Por refuerzo**: aprende mediante prueba y error con recompensas (ej: AlphaGo)\n\nEn Atlas IA tienes un bloque completo de Fundamentos en el que exploramos cada tipo en detalle.",
  "que es deep learning": () => "**Deep Learning (Aprendizaje Profundo)** es una subrama del Machine Learning que usa **redes neuronales artificiales** con muchas capas (de ahí lo de \"profundo\").\n\nEs la tecnología detrás de:\n- Los asistentes de voz como Siri o Alexa\n- Los modelos de lenguaje como GPT o Claude\n- Los sistemas de visión como los de Tesla\n- La generación de imágenes con DALL-E o Midjourney\n\nA diferencia del ML tradicional, el Deep Learning puede aprender representaciones directamente de datos brutos (píxeles, texto, audio) sin necesidad de extraer características manualmente.",
  "que es un llm": () => "Un **LLM (Large Language Model)** es un modelo de lenguaje entrenado con enormes cantidades de texto para entender y generar lenguaje humano.\n\nEjemplos populares:\n- **GPT-4** (OpenAI): el más versátil\n- **Claude** (Anthropic): excelente para análisis y seguridad\n- **Gemini** (Google): multimodal nativo\n- **Llama** (Meta): open source\n\nLos LLM se basan en la arquitectura **Transformer**, que usa un mecanismo de atención para entender el contexto de cada palabra en relación con las demás.",
  "diferencia entre gpt claude gemini": () => "Aquí tienes una comparativa rápida:\n\n| Característica | GPT-4 (OpenAI) | Claude (Anthropic) | Gemini (Google) |\n|---|---|---|---|\n| **Fortaleza** | Creatividad y código | Análisis y seguridad | Multimodalidad |\n| **Contexto** | 128K tokens | 200K tokens | 1M tokens |\n| **Precio** | Desde $20/mes | Desde $20/mes | Desde $19/mes |\n| **Open Source** | No | No | No |\n\nCada uno tiene su especialidad. GPT-4 es excelente para programación, Claude para análisis de documentos largos, y Gemini para procesar vídeo e imágenes.",
  "que es prompting": () => "**Prompting** es el arte y la ciencia de diseñar instrucciones efectivas para modelos de IA.\n\nBuenas prácticas:\n1. **Sé específico**: en lugar de \"escribe algo\", di \"escribe un correo electrónico de 3 párrafos\"\n2. **Define un rol**: \"actúa como un profesor explicando a estudiantes\"\n3. **Da contexto**: proporciona información relevante antes de preguntar\n4. **Usa ejemplos**: muestra el formato que esperas (few-shot prompting)\n5. **Itera**: refina tu prompt basándote en los resultados\n\nEn Atlas IA tenemos un bloque completo de Ingeniería de Prompt con técnicas avanzadas como chain-of-thought y tree-of-thought.",
  "que son los transformers": () => "**Transformer** es la arquitectura que revolucionó la IA en 2017 (Google, \"Attention is All You Need\").\n\nSu innovación clave es el **mecanismo de atención** (self-attention), que permite al modelo:\n- Procesar todas las palabras de una frase simultáneamente (no secuencial)\n- Entender qué palabras son más importantes en relación a otras\n- Escalar a cantidades masivas de datos y parámetros\n\nEs la base de modelos como GPT, BERT, T5 y prácticamente todos los LLM modernos.",
  "que es rag": () => "**RAG (Retrieval-Augmented Generation)** es una técnica que combina:\n1. **Un sistema de búsqueda** (recuperación de documentos)\n2. **Un LLM** (generación de respuestas)\n\nFunciona así: cuando haces una pregunta, primero busca documentos relevantes en una base de datos vectorial, y luego el LLM genera la respuesta basándose en esos documentos.\n\nVentajas:\n- Reduce alucinaciones (el modelo \"alucina\" menos)\n- Permite actualizar conocimiento sin reentrenar\n- Ideal para chatbots empresariales con documentación interna",
  "que herramientas ia recomiendas": () => "Depende de lo que necesites hacer:\n\n**Para texto y análisis:**\n- ChatGPT / Claude / Gemini\n\n**Para programación:**\n- Cursor / Copilot / Claude Code\n\n**Para imágenes:**\n- DALL-E 3 / Midjourney / Stable Diffusion\n\n**Para audio:**\n- ElevenLabs (voz) / Suno (música)\n\n**Para productividad:**\n- Notion AI / Perplexity / Make\n\nEn el bloque **Mapa del Ecosistema** de Atlas IA tienes un comparador interactivo y un árbol de decisión para elegir la mejor herramienta según tu caso de uso.",
  "que es el test de turing": () => "El **Test de Turing**, propuesto por Alan Turing en 1950, es una prueba para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del de un humano.\n\nConsiste en que un evaluador conversa a ciegas con un humano y una máquina. Si el evaluador no puede identificar quién es quién de forma consistente, la máquina \"pasa\" el test.\n\nDato curioso: muchos modelos actuales (GPT-4, Claude) pasarían el test, pero la comunidad científica considera que ya no es una métrica relevante para medir inteligencia real.",
  "que es la singularidad": () => "La **Singularidad Tecnológica** es el hipotético punto futuro en el que la IA supera la inteligencia humana en todos los ámbitos, desencadenando un crecimiento tecnológico imparable.\n\nHay dos posturas principales:\n- **Optimistas** (Ray Kurzweil): lo ven como una oportunidad para resolver problemas como enfermedades y cambio climático\n- **Precavidos**: advierten sobre riesgos existenciales si no se alinea correctamente\n\nFechas estimadas: Kurzweil predice 2045. Otros expertos creen que podría ocurrir antes o después.",
  "que son los agentes ia": () => "Los **agentes de IA** son sistemas autónomos que pueden:\n1. **Planificar**: dividir tareas complejas en pasos\n2. **Usar herramientas**: navegar web, ejecutar código, acceder a APIs\n3. **Memorizar**: recordar contexto de interacciones anteriores\n4. **Ejecutar**: realizar acciones de forma independiente\n\nEjemplos: AutoGPT, Claude con MCP, asistentes personalizados.\n\nEl protocolo **MCP (Model Context Protocol)** de Anthropic permite que los modelos se conecten de forma estandarizada con herramientas externas.",
};

function findFallbackResponse(query: string): string | null {
  const normalized = query.toLowerCase().trim();

  for (const [key, responseFn] of Object.entries(FALLBACK_RESPONSES)) {
    const keyWords = key.split(" ");
    const matches = keyWords.filter((kw) => normalized.includes(kw)).length;
    if (matches === keyWords.length) {
      return responseFn(query);
    }
  }

  const generalResponses = [
    `¡Excelente pregunta! En Atlas IA cubrimos muchos temas relacionados con inteligencia artificial. ¿Podrías concretar un poco más?\n\nPuedes preguntarme sobre:\n- **Conceptos**: qué es IA, ML, Deep Learning, LLM\n- **Herramientas**: ChatGPT, Claude, Gemini, Cursor\n- **Técnicas**: prompting, RAG, ajuste fino, agentes\n- **Historia**: hitos, evolución, Turing\n- **Recursos**: qué bloque te recomiendo según tu nivel`,
    `Interesante. Como tutor de IA, puedo ayudarte con conceptos, herramientas y técnicas. Algunos temas populares:\n\n- **Fundamentos**: Machine Learning, Deep Learning, Transformers\n- **Prompting**: técnicas avanzadas, roles, formatos\n- **Ecosistema**: comparativa de herramientas\n- **Ética**: sesgo, privacidad, impacto social\n\n¿Sobre cuál te gustaría aprender?`,
    `Buena pregunta. Para darte la mejor respuesta, ¿puedes decirme si te interesa más la **teoría** (conceptos, fundamentos) o la **práctica** (herramientas, prompting, proyectos)?\n\nAsí puedo adaptar mi explicación a tu nivel e intereses.`,
  ];

  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

export async function streamChatResponse(
  messages: { role: string; content: string }[],
  onToken: (token: string) => void,
  onDone: () => void,
  onError: (error: string) => void,
) {
  if (openai) {
    try {
      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      });

      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta?.content || "";
        if (token) onToken(token);
      }
      onDone();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error al conectar con la IA";
      onError(message);
    }
    return;
  }

  const userQuery = messages.filter((m) => m.role === "user").pop()?.content || "";
  const response = findFallbackResponse(userQuery) || "No tengo una respuesta preparada para eso. ¿Puedes reformular tu pregunta?";
  const words = response.split(" ");
  for (let i = 0; i < words.length; i++) {
    onToken((i > 0 ? " " : "") + words[i]);
    await new Promise((r) => setTimeout(r, 20 + Math.random() * 30));
  }
  onDone();
}
