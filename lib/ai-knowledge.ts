export interface FallbackEntry {
  keywords: string[][];
  fn: (query: string) => string;
  memorySafe?: boolean;
  noPrefix?: boolean;
}

export const FALLBACK_RESPONSES: FallbackEntry[] = [
  {
    keywords: [["hola"], ["buenas"], ["saludos"]],
    memorySafe: false,
    noPrefix: true,
    fn: () =>
      "¡Hola! Soy Atlas, tu tutor de IA. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre conceptos de inteligencia artificial, programación, Git, VS Code, herramientas, prompting, o cualquier tema que estés aprendiendo en la plataforma.",
  },
  {
    keywords: [["ia"], ["inteligencia", "artificial"]],
    fn: () =>
      "**Inteligencia Artificial (IA)** es la rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.\n\nIncluye subcampos como:\n- **Machine Learning**: algoritmos que aprenden de datos\n- **Deep Learning**: redes neuronales profundas\n- **Procesamiento de Lenguaje Natural (PLN)**: entender y generar texto\n- **Visión por ordenador**: analizar imágenes\n\n¿Quieres que profundice en alguno de estos?",
  },
  {
    keywords: [
      ["diferencia", "ia"],
      ["diferencia", "ml"],
      ["diferencia", "deep"],
      ["ia", "ml"],
      ["ml", "deep"],
      ["ia", "deep"],
      ["ia", "machine"],
    ],
    fn: () =>
      "La relación es de **contenedores**:\n\n1. **IA** (paraguas): todo sistema que imita capacidades humanas (razonar, ver, hablar...)\n2. **Machine Learning** (subcampo): la IA aprende de datos en lugar de ser programada con reglas explícitas\n3. **Deep Learning** (subcampo del ML): usa redes neuronales profundas y es el motor de los modelos actuales (GPT, Claude, Gemini)\n\nRegla mnemotécnica: todo Deep Learning es Machine Learning, y todo Machine Learning es IA; al revés no siempre.",
  },
  {
    keywords: [["machine", "learning"], ["ml"], ["aprendizaje", "automatico"]],
    fn: () =>
      "**Machine Learning (Aprendizaje Automático)** es un subcampo de la IA en el que los sistemas aprenden patrones a partir de datos sin ser programados explícitamente.\n\nLos tipos principales son:\n1. **Supervisado**: aprende de datos etiquetados (ej: clasificar correos como spam o no spam)\n2. **No supervisado**: encuentra patrones en datos sin etiquetar (ej: segmentar clientes)\n3. **Por refuerzo**: aprende mediante prueba y error con recompensas (ej: AlphaGo)\n\nEn Atlas IA tienes un bloque completo de Fundamentos en el que exploramos cada tipo en detalle.",
  },
  {
    keywords: [["deep", "learning"], ["aprendizaje", "profundo"]],
    fn: () =>
      "**Deep Learning (Aprendizaje Profundo)** es una subrama del Machine Learning que usa **redes neuronales artificiales** con muchas capas (de ahí lo de \"profundo\").\n\nEs la tecnología detrás de:\n- Los asistentes de voz como Siri o Alexa\n- Los modelos de lenguaje como GPT o Claude\n- Los sistemas de visión como los de Tesla\n- La generación de imágenes con DALL-E o Midjourney\n\nA diferencia del ML tradicional, el Deep Learning puede aprender representaciones directamente de datos brutos (píxeles, texto, audio) sin necesidad de extraer características manualmente.",
  },
  {
    keywords: [["llm"], ["large", "language", "model"], ["modelo", "de", "lenguaje"]],
    fn: () =>
      "Un **LLM (Large Language Model)** es un modelo de lenguaje entrenado con enormes cantidades de texto para entender y generar lenguaje humano.\n\nEjemplos populares:\n- **GPT** (OpenAI): el más versátil\n- **Claude** (Anthropic): excelente para análisis y seguridad\n- **Gemini** (Google): multimodal nativo\n- **Llama** (Meta): open source\n\nLos LLM se basan en la arquitectura **Transformer**, que usa un mecanismo de atención para entender el contexto de cada palabra en relación con las demás.",
  },
  {
    keywords: [
      ["diferencia", "gpt"],
      ["diferencia", "claude"],
      ["diferencia", "gemini"],
      ["gpt", "claude"],
      ["claude", "gemini"],
      ["gpt", "gemini"],
      ["gpt", "vs"],
      ["vs", "gpt"],
      ["vs", "gemini"],
      ["vs", "claude"],
      ["claude", "vs"],
      ["gemini", "vs"],
    ],
    fn: () =>
      "Aquí tienes una comparativa rápida:\n\n| Característica | GPT (OpenAI) | Claude (Anthropic) | Gemini (Google) |\n|---|---|---|---|\n| **Fortaleza** | Creatividad y código | Análisis y seguridad | Multimodalidad |\n| **Open Source** | No | No | No |\n\nCada uno tiene su especialidad. GPT es excelente para programación, Claude para análisis de documentos largos, y Gemini para procesar vídeo e imágenes.\n\nSi quieres una comparativa más detallada con puntuaciones, en el bloque **Mapa del Ecosistema** tienes un comparador interactivo.",
  },
  {
    keywords: [["prompting"], ["prompt"], ["ingenieria", "de", "prompt"]],
    fn: () =>
      "**Prompting** es el arte y la ciencia de diseñar instrucciones efectivas para modelos de IA.\n\nBuenas prácticas:\n1. **Sé específico**: en lugar de \"escribe algo\", di \"escribe un correo electrónico de 3 párrafos\"\n2. **Define un rol**: \"actúa como un profesor explicando a estudiantes\"\n3. **Da contexto**: proporciona información relevante antes de preguntar\n4. **Usa ejemplos**: muestra el formato que esperas (few-shot prompting)\n5. **Itera**: refina tu prompt basándote en los resultados\n\nEn Atlas IA tenemos un bloque completo de Ingeniería de Prompt con técnicas avanzadas como chain-of-thought y tree-of-thought.",
  },
  {
    keywords: [["transformer"], ["transformers"], ["atencion"]],
    fn: () =>
      "**Transformer** es la arquitectura que revolucionó la IA en 2017 (Google, \"Attention is All You Need\").\n\nSu innovación clave es el **mecanismo de atención** (self-attention), que permite al modelo:\n- Procesar todas las palabras de una frase simultáneamente (no secuencial)\n- Entender qué palabras son más importantes en relación a otras\n- Escalar a cantidades masivas de datos y parámetros\n\nEs la base de modelos como GPT, BERT, T5 y prácticamente todos los LLM modernos.",
  },
  {
    keywords: [["rag"], ["generacion", "aumentada"], ["recuperacion"]],
    fn: () =>
      "**RAG (Retrieval-Augmented Generation)** es una técnica que combina:\n1. **Un sistema de búsqueda** (recuperación de documentos)\n2. **Un LLM** (generación de respuestas)\n\nFunciona así: cuando haces una pregunta, primero busca documentos relevantes en una base de datos vectorial, y luego el LLM genera la respuesta basándose en esos documentos.\n\nVentajas:\n- Reduce alucinaciones (el modelo \"alucina\" menos)\n- Permite actualizar conocimiento sin reentrenar\n- Ideal para chatbots empresariales con documentación interna",
  },
  {
    keywords: [["herramientas"], ["recomiendas"], ["que", "uso"]],
    fn: () =>
      "Depende de lo que necesites hacer:\n\n**Para texto y análisis:**\n- ChatGPT / Claude / Gemini\n\n**Para programación:**\n- Cursor / Copilot / Claude Code / Cline\n\n**Para imágenes:**\n- DALL-E 3 / Midjourney / Stable Diffusion\n\n**Para audio:**\n- ElevenLabs (voz) / Suno (música)\n\n**Para productividad:**\n- Notion AI / Perplexity / Make\n\nEn el bloque **Mapa del Ecosistema** de Atlas IA tienes un comparador interactivo y un árbol de decisión para elegir la mejor herramienta según tu caso de uso.",
  },
  {
    keywords: [["turing"], ["test", "de", "turing"]],
    fn: () =>
      "El **Test de Turing**, propuesto por Alan Turing en 1950, es una prueba para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del de un humano.\n\nConsiste en que un evaluador conversa a ciegas con un humano y una máquina. Si el evaluador no puede identificar quién es quién de forma consistente, la máquina \"pasa\" el test.\n\nDato curioso: muchos modelos actuales (GPT-4, Claude) pasarían el test, pero la comunidad científica considera que ya no es una métrica relevante para medir inteligencia real.",
  },
  {
    keywords: [["singularidad"], ["singularidad", "tecnologica"]],
    fn: () =>
      "La **Singularidad Tecnológica** es el hipotético punto futuro en el que la IA supera la inteligencia humana en todos los ámbitos, desencadenando un crecimiento tecnológico imparable.\n\nHay dos posturas principales:\n- **Optimistas** (Ray Kurzweil): lo ven como una oportunidad para resolver problemas como enfermedades y cambio climático\n- **Precavidos**: advierten sobre riesgos existenciales si no se alinea correctamente\n\nFechas estimadas: Kurzweil predice 2045. Otros expertos creen que podría ocurrir antes o después.",
  },
  {
    keywords: [["agente"], ["agentes"]],
    fn: () =>
      "Los **agentes de IA** son sistemas autónomos que pueden:\n1. **Planificar**: dividir tareas complejas en pasos\n2. **Usar herramientas**: navegar web, ejecutar código, acceder a APIs\n3. **Memorizar**: recordar contexto de interacciones anteriores\n4. **Ejecutar**: realizar acciones de forma independiente\n\nEjemplos: AutoGPT, Claude con MCP, asistentes personalizados.\n\nEl protocolo **MCP (Model Context Protocol)** permite que los modelos se conecten de forma estandarizada con herramientas externas.",
  },
  {
    keywords: [["token"], ["tokens"]],
    fn: () =>
      "Un **token** es la unidad mínima de texto con la que trabajan los modelos de lenguaje. Un token no equivale a una palabra: puede ser una palabra completa, parte de una palabra (como \"token\" en \"tokens\") o incluso un carácter.\n\nEjemplos reales:\n- \"Hola mundo\" son aproximadamente 2-3 tokens\n- Una página de texto suele rondar los 250 tokens\n- Los modelos tienen un **límite de contexto** (ej: 128K tokens)\n\nEntender los tokens te ayuda a estimar costes, controlar el contexto y diseñar prompts eficientes. En el Laboratorio tienes un simulador de tokens para practicar.",
  },
  {
    keywords: [["embedding"], ["vector", "semantico"], ["embedding"]],
    fn: () =>
      "Un **embedding** es una representación numérica (una lista de números, un vector) que captura el significado de un texto, una imagen o un audio.\n\nLo importante:\n- Textos con significados parecidos quedan **cerca** en el espacio vectorial\n- Textos con significados distintos quedan **lejos**\n- Es la base de los sistemas de búsqueda semántica y de RAG\n\nEjemplo: \"perro\" y \"mascota\" tendrán vectores cercanos; \"perro\" y \"programación\", muy lejanos.",
  },
  {
    keywords: [["alucinacion"], ["alucinaciones"], ["inventa"]],
    fn: () =>
      "Una **alucinación** en IA ocurre cuando el modelo genera información falsa o inventada con total seguridad y apariencia de veracidad.\n\nCausas principales:\n- El modelo no sabe algo y \"rellena\" con lo más probable\n- Información desactualizada en su entrenamiento\n- Preguntas ambiguas o mal formuladas\n\nCómo reducirla:\n1. **Verifica siempre** datos y cifras importantes\n2. Pide que el modelo cite fuentes cuando sea posible\n3. Usa técnicas como **RAG** para basar la respuesta en documentos reales\n4. Desconfía de respuestas demasiado seguras sobre temas que no dominas",
  },
  {
    keywords: [["fine", "tuning"], ["ajuste", "fino"], ["fine-tuning"]],
    fn: () =>
      "El **fine-tuning (ajuste fino)** consiste en reentrenar un modelo ya preentrenado con datos propios de un dominio concreto para especializarlo.\n\nEjemplos:\n- Ajustar un LLM con tus documentos legales para que responda como jurista\n- Especializar un modelo de imágenes para detectar defectos en tu fábrica\n\nVentajas frente a entrenar desde cero:\n- Mucho más barato y rápido (se parte del conocimiento general)\n- Necesita menos datos\n- Conserva la capacidad de lenguaje general\n\nEs una alternativa (o complemento) al RAG, que en lugar de reentrenar, inyecta información en cada consulta.",
  },
  {
    keywords: [["mcp"], ["model", "context", "protocol"], ["protocolo", "mcp"]],
    fn: () =>
      "**MCP (Model Context Protocol)** es un estándar abierto que permite a los modelos de IA conectarse de forma uniforme con herramientas y datos externos.\n\nPiensa en él como el \"USB-C de la IA\": en vez de que cada herramienta invente su propia conexión, MCP unifica el protocolo.\n\nQué permite:\n- Acceder a bases de datos, archivos, APIs o servicios web\n- Que un agente use herramientas reales (navegar, ejecutar código, consultar documentos)\n- Compartir contexto de forma segura entre el modelo y la aplicación\n\nEs el protocolo que hay detrás de muchos agentes y asistentes modernos.",
  },
  {
    keywords: [["vision", "por", "computador"], ["vision", "artificial"], ["vision"]],
    fn: () =>
      "La **visión por ordenador (visión artificial)** es el campo de la IA que permite a las máquinas \"ver\" e interpretar imágenes y vídeos.\n\nAplicaciones reales:\n- Coches autónomos (detectar peatones, señales y carriles)\n- Diagnóstico médico por imagen (radiografías, resonancias)\n- Control de calidad en fábricas\n- Reconocimiento facial y de objetos\n\nHoy los modelos **multimodales** (GPT-4, Claude, Gemini) integran visión directamente: puedes subir una imagen y hacerle preguntas sobre ella.",
  },
  {
    keywords: [["pln"], ["nlp"], ["procesamiento", "de", "lenguaje"], ["lenguaje", "natural"]],
    fn: () =>
      "El **Procesamiento de Lenguaje Natural (PLN o NLP)** es el campo de la IA que se ocupa de que las máquinas entiendan, interpreten y generen lenguaje humano.\n\nTareas del PLN:\n- Traducción automática (Google Translate)\n- Análisis de sentimiento (¿es positiva o negativa esta reseña?)\n- Resúmenes y extracción de información\n- Chatbots y asistentes de voz\n\nLos **LLM basados en Transformers** son hoy la tecnología central del PLN moderno.",
  },
  {
    keywords: [["chain", "of", "thought"], ["cadena", "de", "pensamiento"], ["razonamiento"]],
    fn: () =>
      "**Chain-of-Thought (cadena de pensamiento)** es una técnica de prompting que pide al modelo mostrar los pasos intermedios de su razonamiento antes de dar la respuesta final.\n\nEjemplo:\n- ❌ Sin CoT: \"La respuesta es 24.\"\n- ✅ Con CoT: \"Primero calculo 15+20=35. Luego resto 35-11=24. Por tanto, la respuesta es 24.\"\n\nBeneficios:\n- Mejora la precisión en problemas de matemáticas, lógica y análisis\n- Permite detectar errores en el razonamiento\n- Es la base de variantes como Tree-of-Thoughts\n\nEn la calculadora de prompts del bloque de Ingeniería de Prompt puedes practicarlo.",
  },
  {
    keywords: [["etica"], ["etica", "de", "la", "ia"], ["etica", "ia"], ["etica", "en"], ["sesgo"], ["bias"]],
    fn: () =>
      "La **ética de la IA** estudia cómo diseñar y usar sistemas de IA de forma justa, transparente y responsable.\n\nRiesgos principales:\n- **Sesgo**: la IA reproduce prejuicios presentes en sus datos de entrenamiento\n- **Privacidad**: uso de datos personales sin consentimiento\n- **Opacidad**: modelos que no explican sus decisiones\n- **Impacto laboral**: automatización de puestos\n- **Mal uso**: desinformación, deepfakes, vigilancia\n\nEn Atlas IA tienes un bloque completo de **Ética y Responsabilidad**, y en el Reglamento (AI Act) de la UE hay reglas para las aplicaciones de alto riesgo.",
  },
  {
    keywords: [["temperatura"]],
    fn: () =>
      "La **temperatura** es un parámetro que controla la aleatoriedad de las respuestas de un modelo de IA.\n\n- **Temperatura baja (0-0.3)**: respuestas deterministas, precisas y repetibles. Ideal para hechos, código y tareas técnicas.\n- **Temperatura media (0.5-0.8)**: equilibrio entre coherencia y creatividad. La habitual para uso general.\n- **Temperatura alta (1+)**: más variedad y creatividad, pero más riesgo de errores o divagaciones. Útil para lluvia de ideas o textos creativos.\n\nEs uno de los parámetros que puedes ajustar en muchos modelos y API.",
  },
  {
    keywords: [["programacion", "asistida"], ["asistida"]],
    fn: () =>
      "La **programación asistida** consiste en programar con la ayuda de la IA: la máquina genera, completa o corrige código mientras tú aportas la dirección, la revisión y el criterio.\n\nCómo funciona en la práctica:\n1. Le describes la tarea a la IA (con un buen prompt)\n2. La IA te propone código o lo edita directamente\n3. **Tú lo revisas**, lo pruebas y decides qué aceptar\n\nEl resultado no es \"que la IA haga todo\", sino programar mucho más rápido y aprender por el camino. En Atlas IA tienes el bloque **Programación Asistida** dedicado a esto.",
  },
  {
    keywords: [["vibe", "coding"], ["vibecoding"]],
    fn: () =>
      "**Vibe Coding** es la práctica de programar describiendo a la IA en lenguaje natural qué quieres conseguir, dejando que ella genere el código mientras tú supervisas.\n\nLa clave no es \"aceptar todo lo que salga\":\n- Describe bien el objetivo y las restricciones\n- Revisa el código generado y pregunta por lo que no entiendes\n- Prueba cada cambio en una copia antes de publicarlo\n\nAsí aprendes programación mientras produces resultados reales. Es el enfoque que trabaja el curso de Vibe Coding Educativo.",
  },
  {
    keywords: [["empezar"], ["empezar", "a", "aprender"], ["por", "donde"], ["por", "donde", "empezar"], ["recomiendas", "bloque"], ["que", "bloque"]],
    fn: () =>
      "Si empiezas desde cero, te recomiendo seguir el orden del curso:\n\n1. **Antes de Empezar**: cómo usar la plataforma\n2. **Fundamentos de IA**: qué es la IA, ML, DL, LLM (imprescindible)\n3. **Ingeniería de Prompt**: cómo hablar con los modelos (muy útil enseguida)\n4. **Mapa del Ecosistema**: qué herramienta usar para cada cosa\n\nDespués puedes ir al bloque que más te interese: docencia, multimodal, **programación asistida**, agentes, ética...\n\nCada bloque tiene lecciones cortas con ejercicios, y vas ganando XP e insignias por tu progreso.",
  },
  {
    keywords: [["cuantos", "bloques"], ["cuantos", "bloques", "tiene"], ["estructura", "del", "curso"], ["que", "bloques", "hay"], ["bloques", "curso"], ["bloques", "tiene"], ["dime", "bloques"]],
    fn: () =>
      "El curso tiene **11 bloques**:\n\n0. Antes de Empezar\n1. Fundamentos de IA\n2. Mapa del Ecosistema\n3. Ingeniería de Prompt\n4. IA Aplicada a la Docencia\n5. IA Multimodal\n6. Programación Asistida\n7. Agentes y Automatización\n8. Ética y Responsabilidad\n9. Laboratorio (prácticas interactivas)\n10. Novedades (siempre actualizado)\n\nEn total son más de 70 lecciones con ejercicios, glosario, cronología y un laboratorio con chat, simulador de tokens y comparador de modelos.",
  },
];

export const GENERAL_KNOWLEDGE: FallbackEntry[] = [
  {
    keywords: [["git"], ["control", "de", "version"], ["control", "de", "versiones"], ["versionado"]],
    fn: () =>
      "**Git** es un sistema de control de versiones: guarda el historial completo de tu proyecto para poder deshacer cambios, comparar versiones y colaborar sin pisarse.\n\nEjemplo: imagina que cada cambio es una \"foto\" guardada de tu carpeta. Si algo se rompe, vuelves a la foto anterior.\n\nEn el bloque **Programación Asistida** lo usamos como base para trabajar con código.\n\nReto: haz `git init` en una carpeta, crea un archivo y haz tu primer `git commit`.",
  },
  {
    keywords: [["commit"], ["commitear"], ["commits"]],
    fn: () =>
      "Un **commit** es una instantánea guardada del estado de tu proyecto en un momento concreto. **Commitear** es el verbo coloquial para \"guardar un cambio\" con Git.\n\nBuenas prácticas:\n- Commitea cambios pequeños y con sentido (no \"cambios varios\")\n- Escribe un mensaje claro: `git commit -m \"Añade validación del formulario\"`\n- Commitea a menudo: es tu red de seguridad\n\nReto: haz un commit con un mensaje que explique exactamente qué cambia y por qué.",
  },
  {
    keywords: [["rama", "git"], ["branch"], ["ramas", "git"], ["rama", "github"], ["git", "rama"]],
    fn: () =>
      "Una **rama (branch)** en Git es una línea de trabajo independiente dentro de tu proyecto. La principal suele llamarse `main`.\n\nPara qué sirve:\n- Probar una idea nueva sin romper lo que funciona\n- Trabajar varias personas a la vez\n- Desarrollar una función y fusionarla al terminar (merge)\n\nEjemplo: creas `rama-about` para probar una página y, si funciona, la fusionas en `main`.\n\nReto: crea una rama (`git branch mi-idea`), cambia a ella (`git switch mi-idea`) y vuelve a `main`.",
  },
  {
    keywords: [["github"], ["github", "que"]],
    fn: () =>
      "**GitHub** es una plataforma en la nube para alojar repositorios Git: guardas tu proyecto, lo compartes y colaboras con otras personas.\n\nQué puedes hacer:\n- Subir tu código y ver el historial en la web\n- Colaborar mediante **pull requests** (proponer cambios que se revisan)\n- Usar **GitHub Pages** para publicar webs gratis\n\nEs la red social del código y un imprescindible de tu portafolio. Git es la herramienta local; GitHub, el lugar donde lo compartes.",
  },
  {
    keywords: [["push"], ["pull"], ["clone"], ["sincronizar", "git"], ["git", "push"], ["git", "pull"]],
    fn: () =>
      "Estos tres comandos sincronizan tu proyecto local con el remoto (por ejemplo, GitHub):\n\n- `git clone <url>`: copia un repositorio remoto en tu ordenador\n- `git push`: **sube** tus commits locales al remoto\n- `git pull`: **baja** los cambios que otros han subido\n\nRegla mental: push sube lo tuyo, pull baja lo de los demás, clone te trae el proyecto entero.\n\nReto: sube tu primer proyecto a GitHub con clone/push/pull y comparte el enlace.",
  },
  {
    keywords: [["repositorio"], ["repo"], ["repos"], ["repo", "git"]],
    fn: () =>
      "Un **repositorio** (o repo) es la carpeta de tu proyecto gestionada por Git: contiene el código, su historial de versiones y la configuración.\n\nPuede ser **local** (en tu ordenador) o **remoto** (en GitHub).\n\nEjemplo: `mi-portafolio/` es tu repo si dentro tienes `git init` hecho y versiones guardadas con commits.\n\nEn los repos se suele incluir un archivo **README.md** que explica qué hace el proyecto.",
  },
  {
    keywords: [["vs", "code"], ["vscode"], ["visual", "studio", "code"], ["editor", "de", "codigo"], ["ide"]],
    fn: () =>
      "**VS Code** (Visual Studio Code) es un editor de código gratuito de Microsoft, el más popular para empezar a programar.\n\nPor qué mola:\n- Ligero, con **extensiones** para casi todo (temas, linting, Git)\n- Terminal integrada para usar Git y comandos\n- Con la IA instalada (Cursor, Cline, Copilot) se convierte en un asistente de programación\n\nEs la herramienta que usamos en el curso: instálalo, abre tu carpeta y escribe tu primer archivo `index.html`.",
  },
  {
    keywords: [["extensiones", "vs"], ["extension", "vs", "code"], ["plugins", "vs"], ["extension", "code"], ["extensiones", "vscode"]],
    fn: () =>
      "Las **extensiones de VS Code** son complementos que añaden funciones al editor: resaltado de código, atajos, Git visual, themes y asistentes de IA.\n\nRecomendadas para empezar:\n- **Prettier**: formatea el código automáticamente\n- **ESLint**: avisa de errores en JavaScript\n- **Cline** o **Copilot**: programación asistida con IA\n\nSe instalan desde el panel de extensiones (icono de cuadrícula a la izquierda).",
  },
  {
    keywords: [["html"], ["html5"]],
    fn: () =>
      "**HTML** es el lenguaje con el que se estructura una página web: define títulos, párrafos, imágenes, enlaces y formularios.\n\nEjemplo mínimo:\n```html\n<h1>Hola</h1>\n<p>Soy una página web.</p>\n<a href=\"https://atlasia.com\">Enlace</a>\n```\n\nNo es un lenguaje de programación (no calcula ni decide), pero es el esqueleto de toda web. En la ruta del curso es el primer paso antes de CSS y JavaScript.",
  },
  {
    keywords: [["css"]],
    fn: () =>
      "**CSS** (Cascading Style Sheets) es el lenguaje que da estilo a las páginas HTML: colores, tipografías, márgenes y posición.\n\nEjemplo: con `h1 { color: #2563eb; }` el título se ve azul; con flexbox ordenas los elementos en filas o columnas.\n\nRegla mental: **HTML estructura, CSS decora, JavaScript da vida**.\n\nReto: dale estilo a tu primer HTML y haz que se vea bien en el móvil (diseño responsive).",
  },
  {
    keywords: [["javascript"], ["js"]],
    fn: () =>
      "**JavaScript** es el lenguaje de programación que hace interactivas las webs: responde a clics, valida formularios, pide datos al servidor y más.\n\nEjemplo: un botón que cambia el fondo al pulsarlo. También es la base de herramientas como Node.js y de los frameworks React/Vue.\n\nNo tiene nada que ver con Java (error típico de quien empieza). Es el tercer ladrillo de la web, después de HTML y CSS.",
  },
  {
    keywords: [["frontend"], ["backend"], ["front", "end"], ["back", "end"], ["fullstack"]],
    fn: () =>
      "Son las dos caras de una aplicación web:\n\n- **Frontend**: lo que ve y usa la persona (HTML, CSS, JavaScript). Vive en el navegador.\n- **Backend**: el servidor, la base de datos y la lógica (Python, Node, etc.). No se ve, pero hace que todo funcione.\n\nEjemplo: el formulario que rellenas es frontend; el correo que te llega al enviarlo lo gestiona el backend.\n\n**Fullstack** es quien domina ambas partes.",
  },
  {
    keywords: [["roadmap"], ["ruta", "de", "aprendizaje"], ["ruta", "del", "curso"], ["plan", "de", "estudios"], ["que", "aprender"]],
    fn: () =>
      "Un **roadmap** es un plan ordenado de qué aprender y en qué orden para llegar a un objetivo sin perderse.\n\nMini-roadmap para empezar en desarrollo web con IA:\n1. **HTML + CSS**: maquetar páginas\n2. **JavaScript**: darles interactividad\n3. **Git y GitHub**: versionar y compartir tu código\n4. **VS Code + IA** (Cline, Copilot): programar más rápido\n5. **Publicar**: subir tu proyecto (Vercel, GitHub Pages)\n\nEl orden del curso Atlas IA sigue la misma lógica: fundamentos primero, herramientas después.",
  },
  {
    keywords: [["cline"]],
    fn: () =>
      "**Cline** es una extensión gratuita y de código abierto para VS Code que convierte el editor en un **agente de IA**.\n\nQué hace:\n- Edita y crea archivos de tu proyecto por ti\n- Ejecuta comandos en la terminal\n- Te explica lo que va haciendo paso a paso\n\nSe parece a Cursor o Copilot, pero funciona como extensión de tu VS Code actual. Es una de las herramientas que exploramos en el bloque **Programación Asistida**.",
  },
  {
    keywords: [["agente", "codigo"], ["coding", "agent"], ["agente", "de", "codigo"], ["agentes", "codigo"], ["agente", "programacion"]],
    fn: () =>
      "Un **agente de código** es una IA que no solo sugiere texto: planifica una tarea, edita archivos, ejecuta comandos y va encadenando pasos hasta completarla.\n\nEjemplos: **Cline**, **Cursor**, **Copilot Workspace**, **Claude Code**.\n\nCómo usarlo bien:\n- Dale una tarea pequeña y concreta al principio\n- Revisa cada cambio antes de aceptarlo\n- Usa Git para poder deshacer si algo falla\n\nEs la evolución natural del autocompletado y el corazón del Vibe Coding.",
  },
  {
    keywords: [["deploy"], ["publicar"], ["publico"], ["publica"], ["desplegar"], ["hosting"], ["subir", "proyecto"], ["subir", "la", "web"], ["publicar", "proyecto"]],
    fn: () =>
      "**Publicar (deploy)** tu proyecto significa subirlo a un servidor para que cualquier persona pueda verlo por Internet con una URL.\n\nOpciones sencillas para empezar:\n- **GitHub Pages**: gratis, para webs estáticas (HTML/CSS/JS)\n- **Vercel** o **Netlify**: conectas tu repo de GitHub y se publica solo en cada push\n\nPasos típicos: subes el código a GitHub → conectas la plataforma → obtienes una URL pública. Tu proyecto ya es visible para el mundo.",
  },
  {
    keywords: [["buenas", "practicas"], ["buenas", "practicas", "de", "desarrollo"], ["clean", "code"], ["codigo", "limpio"]],
    fn: () =>
      "Las **buenas prácticas de desarrollo** son hábitos que hacen tu código más fácil de leer, mantener y compartir:\n\n- Nombra bien las cosas (`calcularPrecio` en vez de `f`)\n- Cambios pequeños y commits con mensajes claros\n- Versiona todo con Git y usa `.gitignore` para lo que no debe subir\n- **Nunca subas contraseñas o claves** al repositorio\n- Prueba antes de publicar y documenta lo importante\n\nEn el bloque **Programación Asistida** hay una lección dedicada a esto.",
  },
  {
    keywords: [["recursos", "educativos"], ["recursos", "didacticos"], ["materiales", "educativos"], ["recursos", "docentes"]],
    fn: () =>
      "Los **recursos educativos digitales** son materiales de aprendizaje creados o apoyados con tecnología: presentaciones, actividades interactivas, vídeos, cuestionarios y más.\n\nCon IA puedes generarlos rápido:\n- Crear rúbricas, exámenes y actividades a partir de un tema\n- Adaptar textos a distintos niveles de lectura\n- Diseñar imágenes o vídeos didácticos\n\nSiempre con revisión humana del contenido. En Atlas IA tienes el bloque **IA Aplicada a la Docencia** para profundizar.",
  },
  {
    keywords: [["terminal"], ["consola"], ["cli"], ["linea", "de", "comandos"], ["linea", "comandos"]],
    fn: () =>
      "La **terminal** (o consola) es una ventana donde controlas el ordenador escribiendo comandos de texto en lugar de hacer clic.\n\nComandos básicos:\n- `cd carpeta`: entrar en una carpeta\n- `ls` (o `dir` en Windows): ver su contenido\n- `git status`: ver el estado del repositorio\n\nNo da miedo: cada comando es una instrucción sencilla. Es imprescindible para usar Git de verdad, y VS Code tiene una terminal integrada.",
  },
  {
    keywords: [["node"], ["nodejs"], ["npm"], ["node", "js"]],
    fn: () =>
      "**Node.js** es un entorno que permite ejecutar JavaScript fuera del navegador (en el servidor o en tu ordenador).\n\n**npm** es el gestor de paquetes de Node: instala librerías y herramientas de otros desarrolladores.\n\nEjemplo: `npm install` en un proyecto descarga todas sus dependencias; `npm run dev` arranca el entorno de desarrollo.\n\nMuchos proyectos modernos (como esta plataforma) funcionan así.",
  },
  {
    keywords: [["markdown"], ["md"]],
    fn: () =>
      "**Markdown** es un formato de texto ligero para dar formato con símbolos: `**negrita**`, `# títulos`, `- listas`, `\\`código\\``.\n\nSe usa en GitHub (README), documentación, notas y también en este chat y en las lecciones del curso.\n\nVentaja: es texto plano legible que se convierte en HTML con estilo.\n\nReto: escribe tu primer README.md en Markdown describiendo tu proyecto.",
  },
  {
    keywords: [["gitignore"], ["git", "ignore"]],
    fn: () =>
      "**`.gitignore`** es un archivo donde indicas a Git qué carpetas y archivos NO debe guardar en el historial.\n\nQué conviene ignorar:\n- `node_modules/` (las dependencias se instalan con npm)\n- Archivos con claves o contraseñas\n- Carpetas de build o `.env`\n\nRegla de oro: **los secretos y lo descargable no se versionan**.",
  },
  {
    keywords: [["api"], ["interfaz", "de", "programacion"], ["application", "programming", "interface"]],
    fn: () =>
      "Una **API (Interfaz de Programación de Aplicaciones)** es un contrato que permite que dos programas se comuniquen: tú envías una petición y la API responde con datos, sin necesidad de saber cómo funciona por dentro.\n\nAnalogía: es como la carta de un restaurante. Pides algo del menú (la petición), la cocina lo prepara (el servidor) y te lo traen servido; tú no tienes que entrar en la cocina.\n\nEjemplos reales: la API de GitHub te devuelve repositorios y commits en JSON, la de OpenAI te permite usar modelos de IA desde tu propio código y la de Google Maps integra mapas en cualquier web.",
  },
  {
    keywords: [["donde", "se", "ejecutan"], ["donde", "corren"], ["donde", "se", "ejecuta"], ["gpu"], ["hardware", "ia"], ["chips", "ia"]],
    fn: () =>
      "Los modelos de IA se ejecutan en **procesadores optimizados para matemáticas masivas**:\n- **GPU** (tarjetas gráficas): el estándar para entrenar y ejecutar modelos (NVIDIA domina el sector)\n- **TPU** de Google: chips diseñados específicamente para redes neuronales\n- **NPU**: unidades de IA integradas en móviles y portátiles modernos\n\nSegún dónde corran:\n1. **En la nube**: la mayoría (ChatGPT, Claude, Gemini). Llamas a una API y el modelo se ejecuta en sus servidores\n2. **En local**: con herramientas como Ollama o Llama.cpp, en tu propio ordenador si tiene GPU\n\nDato: tu portátil puede tener ya una NPU sin que lo sepas.",
  },
  {
    keywords: [["python"], ["numpy"], ["pandas"], ["flask"]],
    fn: () =>
      "**Python** es un lenguaje de programación de propósito general, legible y muy utilizado en IA, ciencia de datos, desarrollo web y automatización.\n\nPor qué es tan usado:\n- Sintaxis clara y sencilla, ideal para empezar\n- **numpy** y **pandas**: cálculo numérico y análisis de datos\n- **matplotlib**: gráficas\n- **Flask** o **Django**: crear aplicaciones web\n- Es el lenguaje por defecto del Machine Learning (TensorFlow, PyTorch, scikit-learn)\n\nEjemplo mínimo: `print(\"Hola mundo\")` muestra un mensaje por pantalla.\n\nEn Atlas IA el curso se centra en el desarrollo web con HTML, CSS y JavaScript, pero Python es la puerta de entrada natural a la IA por su ecosistema de librerías.",
  },
  {
    keywords: [["antigravity"], ["antigravedad"]],
    fn: () =>
      "**Antigravity** es un módulo del lenguaje Python que esconde un \"huevo de pascua\" (easter egg).\n\nSi ejecutas en la terminal:\n```python\nimport antigravity\n```\n\nse abre en tu navegador la tira cómica **xkcd #353**, que explica el origen del nombre de Python. El módulo también incluye funciones reales de geolocalización (como `geohash`), pero su fama viene del guiño a la comunidad de programadoras y programadores de Python.\n\nNo hace nada de \"antigravedad\": es un buen ejemplo de cómo los proyectos de software pueden incluir detalles sorpresa.",
  },
  {
    keywords: [["navegador"], ["servidor"], ["internet"], ["como", "funciona", "internet"]],
    fn: () =>
      "Son las piezas básicas de Internet:\n\n- **Navegador**: el programa que usas para ver páginas (Chrome, Firefox, Edge). Pide los recursos y los muestra.\n- **Servidor**: el ordenador conectado de forma permanente que guarda las páginas y las envía cuando se las piden.\n- **Internet**: la red de redes que conecta todos esos ordenadores entre sí.\n\nEl flujo: escribes una dirección (URL) → el navegador pregunta al servidor → el servidor responde con el código de la página (HTML, CSS, JavaScript) → el navegador lo interpreta y lo dibuja en pantalla.",
  },
  {
    keywords: [["url"], ["dominio"], ["direccion", "web"]],
    fn: () =>
      "Una **URL** (o dirección web) es la dirección única de un recurso en Internet, por ejemplo `https://atlas-ia.dev/glosario`.\n\nSe compone de:\n- **Protocolo**: `https` (la comunicación cifrada)\n- **Dominio**: `atlas-ia.dev` (el nombre que identifica el sitio)\n- **Ruta**: `/glosario` (la página o sección concreta)\n\nEl **dominio** se registra en una empresa autorizada y apunta a los servidores donde está alojado el sitio.",
  },
  {
    keywords: [["base", "de", "datos"], ["base", "datos"], ["sql"], ["bd"]],
    fn: () =>
      "Una **base de datos** es un sistema para guardar, organizar y consultar información de forma estructurada: usuarios, lecciones, puntuaciones...\n\nLo habitual:\n- **SQL** (bases relacionales): los datos se organizan en tablas con filas y columnas, como una hoja de cálculo (MySQL, PostgreSQL, SQLite)\n- **NoSQL** (no relacionales): documentos o pares clave-valor para otros casos (MongoDB)\n\nEn Atlas IA el progreso de quien aprende se guarda con **Prisma + SQLite**, una base de datos relacional ligera.",
  },
  {
    keywords: [["framework"], ["libreria"], ["librerias"], ["biblioteca", "de", "codigo"]],
    fn: () =>
      "Un **framework** es un marco de trabajo que te da una base ya hecha y unas reglas para construir aplicaciones sin empezar de cero (por ejemplo React para webs, o Django y Flask para Python).\n\nUna **librería** (o biblioteca) es un conjunto de funciones ya escritas que reutilizas en tu código (por ejemplo moment.js para fechas o numpy para matemáticas).\n\nDiferencia práctica: la librería la llamas tú cuando quieres; el framework te llama a ti (invierte el control).",
  },
];

export interface TopicCategory {
  name: string;
  keywords: string[];
  text: string;
}

export const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    name: "ia",
    keywords: ["ia", "inteligencia", "artificial", "modelo", "modelos", "gpt", "claude", "gemini", "llm", "ml", "deep", "neurona", "red", "algoritmo", "prediccion"],
    text: "La **Inteligencia Artificial** es la rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana: entender lenguaje, reconocer imágenes, recomendar contenidos o generar código.\n\nSe organiza en capas: la **IA** como paraguas, el **Machine Learning** (aprender de los datos) como subcampo y el **Deep Learning** (redes neuronales profundas) como motor de los modelos actuales como GPT o Claude.\n\nEn Atlas IA tienes el bloque de **Fundamentos**, el **Mapa del Ecosistema** con las herramientas y el **Glosario** con la definición de cada concepto.",
  },
  {
    name: "git",
    keywords: ["git", "github", "commit", "branch", "rama", "push", "pull", "repo", "repositorio", "versionado"],
    text: "**Git** es un sistema de control de versiones que guarda el historial completo de tu proyecto para poder deshacer cambios, comparar versiones y colaborar sin pisarse. **GitHub** es la plataforma en la nube que aloja los repositorios Git y permite compartirlos.\n\nComandos esenciales: `git init` (crear el repositorio), `git add` (preparar cambios), `git commit` (guardar una instantánea), `git push` (subir al remoto) y `git pull` (bajar los cambios de otras personas).\n\nEs una habilidad clave que se practica en el bloque **Programación Asistida** del curso.",
  },
  {
    name: "programacion",
    keywords: ["programar", "programacion", "codigo", "codificar", "algoritmo", "funcion", "variable", "bucle", "script", "desarrollo", "desarrollador"],
    text: "**Programar** es dar instrucciones a un ordenador para que haga una tarea. Los lenguajes (JavaScript, Python, HTML...) son la forma de escribirlas de manera que la máquina las entienda.\n\nIdea clave: divide el problema en pasos pequeños, escribe una instrucción cada vez y prueba a menudo. Con la IA como apoyo (Vibe Coding) puedes ir mucho más rápido, pero siempre revisando lo que genera.",
  },
  {
    name: "web",
    keywords: ["html", "css", "javascript", "web", "pagina", "sitio", "frontend", "backend", "navegador", "url"],
    text: "Una **web** está formada por tres tecnologías básicas: **HTML** estructura el contenido, **CSS** le da estilo y **JavaScript** la hace interactiva. El navegador las interpreta y las muestra.\n\nA la web también le corresponden el **frontend** (lo que ve y usa la persona) y el **backend** (el servidor y la base de datos que hacen que todo funcione).",
  },
  {
    name: "vscode",
    keywords: ["vs", "code", "vscode", "visual", "studio", "editor", "ide", "extension", "cline"],
    text: "**VS Code** es el editor de código más popular para empezar: ligero, gratis y ampliable con extensiones. Incluye terminal integrada para usar Git y comandos, y con asistentes de IA como **Cline** o **Copilot** se convierte en tu compañero de programación.\n\nSe instala desde su página oficial, y las extensiones (Prettier, ESLint, Cline, Copilot) se añaden desde el panel de extensiones del editor.",
  },
  {
    name: "publicar",
    keywords: ["deploy", "publicar", "publico", "publica", "desplegar", "hosting", "dominio", "subir", "url"],
    text: "**Publicar** un proyecto es ponerlo en un servidor para que tenga una URL accesible desde cualquier navegador.\n\nOpciones sencillas: **GitHub Pages** para webs estáticas y **Vercel/Netlify** para proyectos más completos, conectando tu repositorio de Git. El flujo típico: subes a GitHub y la plataforma publica sola en cada cambio.",
  },
  {
    name: "vibecoding",
    keywords: ["vibe", "coding", "vibecoding", "asistida", "asistido"],
    text: "**Vibe Coding** es la práctica de programar describiendo a la IA en lenguaje natural qué quieres conseguir, dejando que ella genere el código mientras tú supervisas. La clave: describe bien el objetivo, revisa lo que genera y prueba cada cambio antes de publicarlo.\n\nEs el enfoque del curso de Vibe Coding Educativo de Atlas IA, con el bloque **Programación Asistida** como base.",
  },
  {
    name: "educacion",
    keywords: ["educativ", "docente", "ensenanza", "ensenar", "aula", "clase", "alumnado", "estudiantes", "profesorado", "didactica", "recursos"],
    text: "Las **herramientas educativas digitales** (incluidas las de IA) sirven para crear materiales, corregir, evaluar y personalizar el aprendizaje: rúbricas, exámenes, actividades interactivas, traducciones y adaptaciones de textos.\n\nCon IA puedes generarlas rápido, pero siempre con revisión humana. En Atlas IA el bloque **IA Aplicada a la Docencia** está dedicado a esto.",
  },
];

