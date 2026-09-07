import type { Locale } from "./i18n/config";

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

export interface LessonQuiz {
  id: string;
  questions: QuizQuestion[];
}

/** Variantes localizadas de una pregunta. El índice `correct` es común. */
export interface QuizQuestionVariants {
  q: { es: string; en: string; val: string };
  options: { es: string[]; en: string[]; val: string[] };
  correct: number;
  explain: { es: string; en: string; val: string };
}

const QUIZZES: Record<string, QuizQuestionVariants[]> = {
  "antes-de-empezar/01-bienvenido": [
    {
      "q": {
        "es": "Según la lección, ¿qué necesita una persona para empezar a aprender IA en Atlas IA?",
        "en": "According to the lesson, what does a person need to start learning AI on Atlas IA?",
        "val": "Segons la lliçó, què necessita una persona per a començar a aprendre IA en Atlas IA?"
      },
      "options": {
        "es": [
          "Curiosidad y ganas de aprender",
          "Ser ingeniero o programador",
          "Pagar una suscripción",
          "Instalar un programa en el ordenador"
        ],
        "en": [
          "Curiosity and the desire to learn",
          "Being an engineer or programmer",
          "Paying for a subscription",
          "Installing a program on your computer"
        ],
        "val": [
          "Curiositat i ganes d'aprendre",
          "Ser enginyer o programador",
          "Pagar una subscripció",
          "Instal·lar un programa a l'ordinador"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Atlas IA está creado para cualquier persona sin necesidad de ser ingeniero o programador, y solo pide curiosidad y ganas de aprender.",
        "en": "Atlas IA was created so that anyone can understand AI without needing to be an engineer or programmer, and it only asks for curiosity and the desire to learn.",
        "val": "Atlas IA s'ha creat perquè qualsevol persona puga entendre la IA sense necessitat de ser enginyer o programador, i només demana curiositat i ganes d'aprendre."
      }
    },
    {
      "q": {
        "es": "¿Cuál de estas cosas NO se menciona como parte de Atlas IA?",
        "en": "Which of these is NOT mentioned as part of Atlas IA?",
        "val": "Quina d'aquestes coses NO s'esmenta com a part d'Atlas IA?"
      },
      "options": {
        "es": [
          "Comparativas entre herramientas",
          "Conceptos claros con lenguaje sencillo",
          "Certificados oficiales de pago",
          "Actividades prácticas para aprender haciendo"
        ],
        "en": [
          "Comparisons between tools",
          "Clear concepts explained in plain language",
          "Official paid certificates",
          "Hands-on activities to learn by doing"
        ],
        "val": [
          "Comparatives entre eines",
          "Conceptes clars amb llenguatge senzill",
          "Certificats oficials de pagament",
          "Activitats pràctiques per a aprendre fent"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Atlas IA combina conceptos claros, ejemplos reales, comparativas, actividades prácticas y una comunidad; no menciona certificados de pago.",
        "en": "Atlas IA combines clear concepts, real examples, comparisons, hands-on activities and a community; it does not mention paid certificates.",
        "val": "Atlas IA combina conceptes clars, exemples reals, comparatives, activitats pràctiques i una comunitat; no menciona certificats de pagament."
      }
    },
    {
      "q": {
        "es": "¿Qué sugerencia hace la lección sobre cómo avanzar por el curso?",
        "en": "What suggestion does the lesson make about how to move through the course?",
        "val": "Quin suggeriment fa la lliçó sobre com avançar pel curs?"
      },
      "options": {
        "es": [
          "Saltar pasos para llegar antes a la IA avanzada",
          "Avanzar a tu ritmo sin saltar pasos",
          "Empezar por los bloques más difíciles",
          "Leer solo los bloques de herramientas"
        ],
        "en": [
          "Skip steps to reach advanced AI sooner",
          "Move at your own pace without skipping steps",
          "Start with the hardest blocks",
          "Only read the tool blocks"
        ],
        "val": [
          "Saltar passos per a arribar abans a la IA avançada",
          "Avançar al teu ritme sense saltar passos",
          "Començar pels blocs més difícils",
          "Llegir només els blocs d'eines"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El consejo es empezar por el principio y avanzar a tu ritmo, porque cada lección construye sobre la anterior y la base es lo más importante.",
        "en": "The advice is to start at the beginning and move at your own pace, because each lesson builds on the previous one and the foundation is the most important thing.",
        "val": "El consell és començar pel principi i avançar al teu ritme, perquè cada lliçó construïx sobre l'anterior i la base és el més important."
      }
    },
    {
      "q": {
        "es": "Según la tabla de bloques, ¿qué aprenderás en el bloque 3?",
        "en": "According to the blocks table, what will you learn in block 3?",
        "val": "Segons la taula de blocs, què aprendràs al bloc 3?"
      },
      "options": {
        "es": [
          "Aplicar IA en la enseñanza",
          "Comunicarte eficazmente con la IA",
          "Privacidad, RGPD y responsabilidad",
          "Imagen, vídeo y audio"
        ],
        "en": [
          "Applying AI in education",
          "Communicating effectively with AI",
          "Privacy, GDPR and responsibility",
          "Image, video and audio"
        ],
        "val": [
          "Aplicar la IA a l'ensenyament",
          "Comunicar-te eficaçment amb la IA",
          "Privacitat, RGPD i responsabilitat",
          "Imatge, vídeo i àudio"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El bloque 3 es Prompting: comunicarte eficazmente con la IA, mientras que docencia, ética y multimodal son otros bloques.",
        "en": "Block 3 is Prompting: communicating effectively with AI, while teaching, ethics and multimodal are other blocks.",
        "val": "El bloc 3 és Prompting: comunicar-te eficaçment amb la IA; docència, ètica i multimodal són altres blocs."
      }
    }
  ],
  "antes-de-empezar/02-como-aprender": [
    {
      "q": {
        "es": "¿Cuál es la regla de oro que propone la lección?",
        "en": "What is the golden rule proposed in the lesson?",
        "val": "Quina és la regla d'or que proposa la lliçó?"
      },
      "options": {
        "es": [
          "Primero entiende los conceptos y después usa las herramientas",
          "Usa las herramientas cuanto antes y teoriza después",
          "Lee solo tutoriales actualizados",
          "Memoriza definiciones sin practicar"
        ],
        "en": [
          "First understand the concepts, then use the tools",
          "Use the tools as soon as possible and theorise later",
          "Only read up-to-date tutorials",
          "Memorise definitions without practising"
        ],
        "val": [
          "Primer entén els conceptes i després usa les eines",
          "Usa les eines com més aviat millor i teoritza després",
          "Llig només tutorials actualitzats",
          "Memoritza definicions sense practicar"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El error más común es usar herramientas sin entender qué hay debajo, así que la lección insiste en conceptualizar primero.",
        "en": "The most common mistake is using tools without understanding what lies underneath, so the lesson insists on understanding concepts first.",
        "val": "L'error més comú és usar eines sense entendre què hi ha davall, així que la lliçó insistix a conceptualitzar primer."
      }
    },
    {
      "q": {
        "es": "Según el balance perfecto, ¿cuánto tiempo deberías dedicar a la práctica guiada?",
        "en": "According to the perfect balance, how much time should you devote to guided practice?",
        "val": "Segons el balanç perfecte, quant de temps hauries de dedicar a la pràctica guiada?"
      },
      "options": {
        "es": [
          "El 30%",
          "El 50%",
          "El 40%",
          "El 20%"
        ],
        "en": [
          "30%",
          "50%",
          "40%",
          "20%"
        ],
        "val": [
          "El 30%",
          "El 50%",
          "El 40%",
          "El 20%"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El balance ideal es 30% teoría, 40% práctica guiada y 30% experimentación libre.",
        "en": "The ideal balance is 30% theory, 40% guided practice and 30% free experimentation.",
        "val": "El balanç ideal és 30% teoria, 40% pràctica guiada i 30% experimentació lliure."
      }
    },
    {
      "q": {
        "es": "¿Qué ritmo de estudio recomienda la lección?",
        "en": "What study pace does the lesson recommend?",
        "val": "Quin ritme d'estudi recomana la lliçó?"
      },
      "options": {
        "es": [
          "Varias lecciones por día",
          "Una lección al día",
          "Una lección por semana",
          "Repasar todo en fin de semana"
        ],
        "en": [
          "Several lessons a day",
          "One lesson a day",
          "One lesson a week",
          "Review everything at the weekend"
        ],
        "val": [
          "Diverses lliçons al dia",
          "Una lliçó al dia",
          "Una lliçó per setmana",
          "Repassar-ho tot el cap de setmana"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El consejo es una lección al día y, si hay más tiempo, media hora de práctica; la constancia supera al esfuerzo ocasional.",
        "en": "The advice is one lesson a day and, if you have more time, half an hour of practice; consistency beats occasional effort.",
        "val": "El consell és una lliçó al dia i, si hi ha més temps, mitja hora de pràctica; la constància supera l'esforç ocasional."
      }
    },
    {
      "q": {
        "es": "¿Cómo propone la lección medir tu progreso?",
        "en": "How does the lesson suggest measuring your progress?",
        "val": "Com proposa la lliçó mesurar el teu progrés?"
      },
      "options": {
        "es": [
          "Por el número de lecciones leídas",
          "Por la velocidad de lectura",
          "Por si puedes explicar el concepto, aplicarlo y tomar decisiones informadas",
          "Por los minutos dedicados cada día"
        ],
        "en": [
          "By the number of lessons read",
          "By your reading speed",
          "By whether you can explain the concept, apply it and make informed decisions",
          "By the minutes spent each day"
        ],
        "val": [
          "Pel nombre de lliçons llegides",
          "Per la velocitat de lectura",
          "Per si pots explicar el concepte, aplicar-lo i prendre decisions informades",
          "Pels minuts dedicats cada dia"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El verdadero progreso se mide por la comprensión real: explicarlo a otra persona, aplicarlo y tomar decisiones informadas.",
        "en": "Real progress is measured by true understanding: explaining it to someone else, applying it and making informed decisions.",
        "val": "El vertader progrés es mesura per la comprensió real: explicar-ho a una altra persona, aplicar-ho i prendre decisions informades."
      }
    }
  ],
  "antes-de-empezar/03-como-evoluciona": [
    {
      "q": {
        "es": "Según la cronología de la lección, ¿qué hito corresponde a 2022?",
        "en": "According to the lesson timeline, which milestone corresponds to 2022?",
        "val": "Segons la cronologia de la lliçó, quin fita correspon a 2022?"
      },
      "options": {
        "es": [
          "Se publica el paper de los Transformers",
          "GPT-3 demuestra que los modelos grandes funcionan",
          "ChatGPT llega a 100 millones de usuarios en 2 meses",
          "Se acuña el término Inteligencia Artificial"
        ],
        "en": [
          "The Transformers paper is published",
          "GPT-3 demonstrates that large models work",
          "ChatGPT reaches 100 million users in 2 months",
          "The term Artificial Intelligence is coined"
        ],
        "val": [
          "Es publica l'article dels Transformers",
          "GPT-3 demostra que els models grans funcionen",
          "ChatGPT arriba a 100 milions d'usuaris en 2 mesos",
          "S'encunya el terme Intel·ligència Artificial"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El 2022 ChatGPT llegó a 100 millones de usuarios en 2 meses; los Transformers fueron en 2017, GPT-3 en 2020 y el término en 1956.",
        "en": "In 2022 ChatGPT reached 100 million users in 2 months; Transformers were in 2017, GPT-3 in 2020 and the term in 1956.",
        "val": "El 2022 ChatGPT va arribar a 100 milions d'usuaris en 2 mesos; els Transformers van ser el 2017, GPT-3 el 2020 i el terme el 1956."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la primera de las olas de la IA que describe la lección?",
        "en": "What is the first of the AI waves described in the lesson?",
        "val": "Quina és la primera de les onades de la IA que descriu la lliçó?"
      },
      "options": {
        "es": [
          "Multimodal (2023-2024)",
          "Integración (2025+)",
          "Agentes (2024-2025)",
          "Modelos de lenguaje (2020-2022)"
        ],
        "en": [
          "Multimodal (2023-2024)",
          "Integration (2025+)",
          "Agents (2024-2025)",
          "Language models (2020-2022)"
        ],
        "val": [
          "Multimodal (2023-2024)",
          "Integració (2025+)",
          "Agents (2024-2025)",
          "Models de llenguatge (2020-2022)"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La ola 1 es la de los modelos de lenguaje (2020-2022) con chatbots impresionantes pero limitados.",
        "en": "Wave 1 is language models (2020-2022), with chatbots that were impressive but limited.",
        "val": "L'onada 1 és la dels models de llenguatge (2020-2022), amb xatbots impressionants però limitats."
      }
    },
    {
      "q": {
        "es": "¿Qué compromiso sencillo pide la lección para mantenerte al día?",
        "en": "What simple commitment does the lesson ask of you to stay up to date?",
        "val": "Quin compromís senzill demana la lliçó per a mantindre't al dia?"
      },
      "options": {
        "es": [
          "Dedicar 15 minutos cada semana a ver qué ha cambiado",
          "Leer noticias de IA dos horas cada día",
          "Probar todas las herramientas nuevas todos los días",
          "Seguir a todos los influencers tecnológicos"
        ],
        "en": [
          "Spend 15 minutes every week checking what has changed",
          "Read AI news for two hours every day",
          "Try every new tool every day",
          "Follow every tech influencer"
        ],
        "val": [
          "Dedicar 15 minuts cada setmana a vore què ha canviat",
          "Llegir notícies d'IA dues hores cada dia",
          "Provar totes les eines noves cada dia",
          "Seguir tots els influencers tecnològics"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección no pide dedicar horas: un vistazo rápido semanal de 15 minutos basta para mantenerte relevante durante años.",
        "en": "The lesson does not ask for hours: a quick 15-minute weekly look is enough to stay relevant for years.",
        "val": "La lliçó no demana hores: un cop d'ull ràpid setmanal de 15 minuts basta per a mantindre't rellevant durant anys."
      }
    },
    {
      "q": {
        "es": "¿Qué es la paradoja del principiante según la lección?",
        "en": "What is the beginner's paradox according to the lesson?",
        "val": "Què és la paradoxa del principiant segons la lliçó?"
      },
      "options": {
        "es": [
          "Que al empezar tarde pierdes demasiado tiempo",
          "Que empezar ahora es una desventaja por la competencia",
          "Que si empiezas ahora no tienes malos hábitos que desaprender",
          "Que los principiantes nunca alcanzan la mejor práctica"
        ],
        "en": [
          "That starting late makes you lose too much time",
          "That starting now is a disadvantage because of competition",
          "That starting now means you have no bad habits to unlearn",
          "That beginners never reach best practice"
        ],
        "val": [
          "Que al començar tard perds massa temps",
          "Que començar ara és un desavantatge per la competència",
          "Que si comences ara no tens mals hàbits per desaprendre",
          "Que els principiants no arriben mai a la millor pràctica"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Empezar ahora es una ventaja: no tienes vicios que desaprender, así que puedes empezar con las mejores prácticas desde el día uno.",
        "en": "Starting now is an advantage: you have no habits to unlearn, so you can start with best practices from day one.",
        "val": "Començar ara és un avantatge: no tens vicis per desaprendre, així que pots començar amb les millors pràctiques des del primer dia."
      }
    }
  ],
  "antes-de-empezar/04-ia-para-aprender": [
    {
      "q": {
        "es": "Según la lección, ¿qué hace que un prompt sea mucho mejor?",
        "en": "According to the lesson, what makes a prompt much better?",
        "val": "Segons la lliçó, què fa que un prompt siga molt millor?"
      },
      "options": {
        "es": [
          "Ser corto y directo",
          "Especificidad y estructura",
          "Usar más signos de exclamación",
          "Escribirlo en mayúsculas"
        ],
        "en": [
          "Being short and direct",
          "Specificity and structure",
          "Using more exclamation marks",
          "Writing it in capital letters"
        ],
        "val": [
          "Ser curt i directe",
          "Especificitat i estructura",
          "Usar més signes d'exclamació",
          "Escriure'l en majúscules"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La diferencia es clara: especificidad y estructura dan mejores resultados que un prompt genérico como Explícame la IA.",
        "en": "The difference is clear: specificity and structure give better results than a generic prompt like Explain AI to me.",
        "val": "La diferència és clara: especificitat i estructura donen millors resultats que un prompt genèric com Explica'm la IA."
      }
    },
    {
      "q": {
        "es": "¿En qué consiste el método Socrático de aprendizaje con IA?",
        "en": "What does the Socratic method of learning with AI consist of?",
        "val": "En què consistix el mètode Socràtic d'aprenentatge amb IA?"
      },
      "options": {
        "es": [
          "Pedir la respuesta directamente",
          "Que la IA te haga preguntas guiadas para llegar tú a la conclusión",
          "Leer la teoría y después memorizarla",
          "Usar solo una IA para las dudas"
        ],
        "en": [
          "Asking for the answer directly",
          "Having the AI ask you guided questions so you reach the conclusion yourself",
          "Reading the theory and then memorising it",
          "Using only one AI for doubts"
        ],
        "val": [
          "Demanar la resposta directament",
          "Que la IA et faça preguntes guiades perquè arribe tu a la conclusió",
          "Llegir la teoria i després memoritzar-la",
          "Usar només una IA per als dubtes"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El método Socrático pide a la IA que no dé la respuesta, sino que haga preguntas una a una para que descubras tú mismo el concepto.",
        "en": "The Socratic method asks the AI not to give the answer but to ask questions one at a time so that you discover the concept yourself.",
        "val": "El mètode Socràtic demana a la IA que no done la resposta, sinó que faça preguntes una a una perquè descobrisques tu mateix el concepte."
      }
    },
    {
      "q": {
        "es": "¿Cuál de los siguientes es un error común al usar IA para aprender?",
        "en": "Which of the following is a common mistake when using AI to learn?",
        "val": "Quin dels següents és un error comú en usar la IA per a aprendre?"
      },
      "options": {
        "es": [
          "Confundir información con conocimiento",
          "Verificar los datos con fuentes oficiales",
          "Pedir ejemplos de tu propio contexto",
          "Comparar varios modelos"
        ],
        "en": [
          "Confusing information with knowledge",
          "Verifying data with official sources",
          "Asking for examples from your own context",
          "Comparing several models"
        ],
        "val": [
          "Confondre informació amb coneixement",
          "Verificar les dades amb fonts oficials",
          "Demanar exemples del teu propi context",
          "Comparar diversos models"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Leer muchas respuestas no significa entender; además son errores no verificar la información, usar una sola IA y copiar sin entender.",
        "en": "Reading many responses does not mean understanding; failing to verify information, using only one AI and copying without understanding are also mistakes.",
        "val": "Llegir moltes respostes no significa entendre; també són errors no verificar la informació, usar una sola IA i copiar sense entendre."
      }
    },
    {
      "q": {
        "es": "¿Qué incluye, según el consejo de la lección, el mejor prompt para aprender?",
        "en": "According to the lesson's advice, what does the best prompt for learning include?",
        "val": "Segons el consell de la lliçó, què inclou el millor prompt per a aprendre?"
      },
      "options": {
        "es": [
          "Quién eres, qué nivel tienes, qué quieres aprender y cómo quieres que te lo expliquen",
          "Una lista de herramientas que conoces",
          "La fecha de publicación del contenido",
          "Tus resultados anteriores en el curso"
        ],
        "en": [
          "Who you are, what level you have, what you want to learn and how you want it explained",
          "A list of tools you know",
          "The publication date of the content",
          "Your previous results in the course"
        ],
        "val": [
          "Qui ets, quin nivell tens, què vols aprendre i com vols que t'ho expliquen",
          "Una llista d'eines que coneixes",
          "La data de publicació del contingut",
          "Els teus resultats anteriors al curs"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El mejor prompt para aprender incluye quién eres, tu nivel, qué quieres aprender y el formato de explicación deseado.",
        "en": "The best prompt for learning includes who you are, your level, what you want to learn and the explanation format you want.",
        "val": "El millor prompt per a aprendre inclou qui ets, el teu nivell, què vols aprendre i el format d'explicació desitjat."
      }
    }
  ],
  "antes-de-empezar/05-primer-contacto": [
    {
      "q": {
        "es": "¿Qué necesitas para hacer el ejercicio práctico de la lección?",
        "en": "What do you need to do the practical exercise in the lesson?",
        "val": "Què necessites per a fer l'exercici pràctic de la lliçó?"
      },
      "options": {
        "es": [
          "Una cuenta de pago en una herramienta de IA",
          "Acceso a una herramienta de IA gratuita como ChatGPT, Claude o Gemini",
          "Un ordenador muy potente",
          "Conocimientos previos de programación"
        ],
        "en": [
          "A paid account on an AI tool",
          "Access to a free AI tool such as ChatGPT, Claude or Gemini",
          "A very powerful computer",
          "Previous programming knowledge"
        ],
        "val": [
          "Un compte de pagament en una eina d'IA",
          "Accés a una eina d'IA gratuïta com ChatGPT, Claude o Gemini",
          "Un ordinador molt potent",
          "Coneixements previs de programació"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Necesitas acceso a una de estas herramientas gratuitas (ChatGPT, Claude o Gemini); ninguna requiere pago ni conocimientos previos.",
        "en": "You need access to one of these free tools (ChatGPT, Claude or Gemini); none requires payment or prior knowledge.",
        "val": "Necessites accés a una d'aquestes eines gratuïtes (ChatGPT, Claude o Gemini); cap requereix pagament ni coneixements previs."
      }
    },
    {
      "q": {
        "es": "¿Qué ejercicio es el más importante según la lección?",
        "en": "Which exercise is the most important according to the lesson?",
        "val": "Quin exercici és el més important segons la lliçó?"
      },
      "options": {
        "es": [
          "El test de la alucinación",
          "Presentarte a la IA",
          "Pedir una explicación",
          "Explorar capacidades libremente"
        ],
        "en": [
          "The hallucination test",
          "Introducing yourself to the AI",
          "Asking for an explanation",
          "Exploring capabilities freely"
        ],
        "val": [
          "El test de l'al·lucinació",
          "Presentar-te a la IA",
          "Demanar una explicació",
          "Explorar capacitats lliurement"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El ejercicio 5, el test de la alucinación, es el más importante: enseña que la IA puede inventar datos con total seguridad.",
        "en": "Exercise 5, the hallucination test, is the most important one: it teaches that AI can invent data with total confidence.",
        "val": "L'exercici 5, el test de l'al·lucinació, és el més important: ensenya que la IA pot inventar dades amb total seguretat."
      }
    },
    {
      "q": {
        "es": "¿Qué debes hacer si la IA contesta el Nobel de Física 2024 sin dudar?",
        "en": "What should you do if the AI answers the 2024 Physics Nobel without hesitation?",
        "val": "Què has de fer si la IA respon el Nobel de Física 2024 sense dubtar?"
      },
      "options": {
        "es": [
          "Confiar al 100% porque lo dice con seguridad",
          "Verificar la respuesta con una búsqueda en Google",
          "Anotarla como dato definitivo",
          "Cambiar de herramienta de inmediato"
        ],
        "en": [
          "Trust it 100% because it says it confidently",
          "Verify the answer with a Google search",
          "Write it down as a definitive fact",
          "Switch tools immediately"
        ],
        "val": [
          "Confiar al 100% perquè ho diu amb seguretat",
          "Verificar la resposta amb una cerca a Google",
          "Anotar-la com a dada definitiva",
          "Canviar d'eina immediatament"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección advierte de que si la IA da un nombre sin dudar no confíes al 100%: verifica siempre con una búsqueda en Google.",
        "en": "The lesson warns that if the AI gives a name without hesitation you should not trust it 100%: always verify with a Google search.",
        "val": "La lliçó avisa que si la IA dóna un nom sense dubtar no confies al 100%: verifica sempre amb una cerca a Google."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué idea clave transmite el ejercicio de comparar respuestas?",
        "en": "According to the lesson, what key idea does the comparison exercise convey?",
        "val": "Segons la lliçó, quina idea clau transmet l'exercici de comparar respostes?"
      },
      "options": {
        "es": [
          "Que hay una IA mejor que todas las demás",
          "Que la primera herramienta que uses serás siempre la mejor",
          "Que no hay una IA mejor que otra, sino herramientas más adecuadas para cada tarea",
          "Que todas las IAs responden exactamente igual"
        ],
        "en": [
          "That there is one AI better than all the others",
          "That the first tool you use is always the best",
          "That there is no AI better than another, just tools more suitable for each task",
          "That all AIs respond exactly the same"
        ],
        "val": [
          "Que hi ha una IA millor que totes les altres",
          "Que la primera eina que uses sempre serà la millor",
          "Que no hi ha una IA millor que una altra, sinó eines més adequades per a cada tasca",
          "Que totes les IAs responen exactament igual"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El mensaje es que no hay una IA mejor que otra: hay herramientas más adecuadas para cada tarea, y cada una tiene su personalidad.",
        "en": "The message is that no AI is better than another: there are tools more suitable for each task, and each has its own personality.",
        "val": "El missatge és que no hi ha una IA millor que una altra: hi ha eines més adequades per a cada tasca, i cadascuna té la seua personalitat."
      }
    }
  ],
  "antes-de-empezar/06-antes-de-continuar": [
    {
      "q": {
        "es": "¿Cuál es, según la lección, el requisito más importante para seguir el curso?",
        "en": "According to the lesson, what is the most important requirement to follow the course?",
        "val": "Segons la lliçó, quin és el requisit més important per a seguir el curs?"
      },
      "options": {
        "es": [
          "Tener un ordenador potente",
          "Saber programar",
          "Las ganas de aprender",
          "Saber inglés"
        ],
        "en": [
          "Having a powerful computer",
          "Knowing how to program",
          "The desire to learn",
          "Speaking English"
        ],
        "val": [
          "Tindre un ordinador potent",
          "Saber programar",
          "Les ganes d'aprendre",
          "Saber anglés"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección subraya que las ganas de aprender no es broma: es el requisito más importante de todos.",
        "en": "The lesson stresses that the desire to learn is no joke: it is the most important requirement of all.",
        "val": "La lliçó subratlla que les ganes d'aprendre no és broma: és el requisit més important de tots."
      }
    },
    {
      "q": {
        "es": "Para tener la mentalidad correcta, ¿qué significa ser escéptico según la lección?",
        "en": "Within the right mindset, what does being sceptical mean according to the lesson?",
        "val": "Dins de la mentalitat correcta, què significa ser escèptic segons la lliçó?"
      },
      "options": {
        "es": [
          "No creer nada solo porque una IA o este curso lo diga, y pensar por ti mismo",
          "Desconfiar de todas las herramientas de IA",
          "Revisar las fuentes solo al final del curso",
          "Evitar hacer preguntas al profesorado"
        ],
        "en": [
          "Not believing anything just because an AI or this course says it, and thinking for yourself",
          "Distrusting every AI tool",
          "Checking sources only at the end of the course",
          "Avoiding asking teachers questions"
        ],
        "val": [
          "No creure res només perquè una IA o aquest curs ho diga, i pensar pel teu compte",
          "Desconfiar de totes les eines d'IA",
          "Revisar les fonts només al final del curs",
          "Evitar fer preguntes al professorat"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Ser escéptico es cuestionar todo, incluso lo que dice la IA o esta plataforma: esa es la base del pensamiento crítico.",
        "en": "Being sceptical means questioning everything, even what the AI or this platform says: that is the basis of critical thinking.",
        "val": "Ser escèptic és qüestionar-ho tot, fins i tot allò que diu la IA o aquesta plataforma: aquesta és la base del pensament crític."
      }
    },
    {
      "q": {
        "es": "¿Qué contenidos vas a aprender en el Bloque 1 según la lección?",
        "en": "What will you learn in Block 1 according to the lesson?",
        "val": "Què aprendràs al Bloc 1 segons la lliçó?"
      },
      "options": {
        "es": [
          "Solo el manejo de herramientas de pago",
          "Fundamentos como Machine Learning, LLM, Transformers, tokens y alucinaciones",
          "La historia de la informática desde sus orígenes",
          "Técnicas avanzadas de programación en todos los lenguajes"
        ],
        "en": [
          "Only how to use paid tools",
          "Fundamentals such as Machine Learning, LLMs, Transformers, tokens and hallucinations",
          "The history of computing from its origins",
          "Advanced programming techniques in all languages"
        ],
        "val": [
          "Només el maneig d'eines de pagament",
          "Fonaments com Machine Learning, LLM, Transformers, tokens i al·lucinacions",
          "La història de la informàtica des dels orígens",
          "Tècniques avançades de programació en tots els llenguatges"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El Bloque 1 cubre la base: qué es la IA, Machine Learning y Deep Learning, LLM, Transformers, tokens, contexto, inferencia y alucinaciones.",
        "en": "Block 1 covers the foundation: what AI is, Machine Learning and Deep Learning, LLMs, Transformers, tokens, context, inference and hallucinations.",
        "val": "El Bloc 1 cobreix la base: què és la IA, Machine Learning i Deep Learning, LLM, Transformers, tokens, context, inferència i al·lucinacions."
      }
    },
    {
      "q": {
        "es": "¿Qué consejo de los cinco del camino coincide con una recomendación de la lección 02?",
        "en": "Which of the five tips for the road matches a recommendation from lesson 02?",
        "val": "Quin consell dels cinc del camí coincidix amb una recomanació de la lliçó 02?"
      },
      "options": {
        "es": [
          "Terminar todo el bloque en dos días",
          "Hacer una lección al día porque la constancia supera al esfuerzo ocasional",
          "Compararte con personas que llevan meses usando IA",
          "Estudiar solo los fines de semana"
        ],
        "en": [
          "Finishing the whole block in two days",
          "Doing one lesson a day because consistency beats occasional effort",
          "Comparing yourself with people who have been using AI for months",
          "Studying only at weekends"
        ],
        "val": [
          "Acabar tot el bloc en dos dies",
          "Fer una lliçó al dia perquè la constància supera l'esforç ocasional",
          "Comparar-te amb persones que porten mesos usant la IA",
          "Estudiar només els caps de setmana"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El consejo de una lección al día refleja la misma idea de la lección 02: la constancia supera al esfuerzo ocasional.",
        "en": "The advice of one lesson a day reflects the same idea from lesson 02: consistency beats occasional effort.",
        "val": "El consell d'una lliçó al dia reflectix la mateixa idea de la lliçó 02: la constància supera l'esforç ocasional."
      }
    }
  ],
  "fundamentos/01-que-es-ia": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es la definición más precisa de Inteligencia Artificial?",
        "en": "According to the lesson, which is the most accurate definition of Artificial Intelligence?",
        "val": "Segons la lliçó, quina és la definició més precisa d'Intel·ligència Artificial?"
      },
      "options": {
        "es": [
          "Una máquina que piensa, siente y tiene conciencia como las personas",
          "Un campo de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana",
          "Cualquier programa o script que ejecuta instrucciones definidas por un programador",
          "Un algoritmo de búsqueda como el que usa Google para ordenar resultados"
        ],
        "en": [
          "A machine that thinks, feels and has consciousness just like people",
          "A field of computer science that seeks to create systems capable of performing tasks that normally require human intelligence",
          "Any program or script that runs instructions defined by a programmer",
          "A search algorithm like the one Google uses to rank results"
        ],
        "val": [
          "Una màquina que pensa, sent i té consciència com les persones",
          "Un camp de la informàtica que busca crear sistemes capaços de realitzar tasques que normalment requereixen intel·ligència humana",
          "Qualsevol programa o script que executa instruccions definides per un programador",
          "Un algorisme de cerca com el que usa Google per a ordenar resultats"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El texto define la IA como un campo de la informática que simula capacidades humanas: procesa datos y encuentra patrones, no posee conciencia ni emociones.",
        "en": "The text defines AI as a field of computer science that simulates human abilities: it processes data and finds patterns, it does not have consciousness or emotions.",
        "val": "El text definix la IA com un camp de la informàtica que simula capacitats humanes: processa dades i troba patrons, no té consciència ni emocions."
      }
    },
    {
      "q": {
        "es": "¿Por qué un chatbot que solo muestra respuestas pregrabadas NO es considerado IA real?",
        "en": "Why is a chatbot that only shows pre-recorded responses NOT considered real AI?",
        "val": "Per què un xatbot que només mostra respostes pregrabades NO es considera IA real?"
      },
      "options": {
        "es": [
          "Porque no genera respuestas nuevas a partir de datos",
          "Porque funciona con reglas IF-THEN escritas por humanos",
          "Porque no aprende de los datos ni mejora con la experiencia",
          "Porque no está conectado a un modelo de lenguaje"
        ],
        "en": [
          "Because it does not generate new responses from data",
          "Because it works with human-written IF-THEN rules",
          "Because it does not learn from data or improve with experience",
          "Because it is not connected to a language model"
        ],
        "val": [
          "Perquè no genera respostes noves a partir de dades",
          "Perquè funciona amb regles IF-THEN escrites per humans",
          "Perquè no aprén de les dades ni millora amb l'experiència",
          "Perquè no està connectat a un model de llenguatge"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección afirma que si un sistema no aprende de los datos y no mejora con la experiencia, probablemente no es IA real, aunque se venda como tal.",
        "en": "The lesson states that if a system does not learn from data and does not improve with experience, it is probably not real AI, even if it is sold as one.",
        "val": "La lliçó afirma que si un sistema no aprén de les dades i no millora amb l'experiència, probablement no és IA real, encara que es venga com a tal."
      }
    },
    {
      "q": {
        "es": "Actualmente vivimos en la Era 3 de la IA. ¿Qué caracteriza a esta era?",
        "en": "We are currently living in Era 3 of AI. What characterizes this era?",
        "val": "Actualment vivim en l'Era 3 de la IA. Què caracteritza aquesta era?"
      },
      "options": {
        "es": [
          "Sistemas basados en reglas escritas por humanos entre 1950 y 1990",
          "Máquinas que aprenden de datos en lugar de seguir reglas",
          "Redes recurrentes que procesan el texto palabra por palabra",
          "Modelos enormes que aprenden patrones complejos mediante Deep Learning y LLM"
        ],
        "en": [
          "Rule-based systems written by humans between 1950 and 1990",
          "Machines that learn from data instead of following rules",
          "Recurrent networks that process text word by word",
          "Enormous models that learn complex patterns through Deep Learning and LLM"
        ],
        "val": [
          "Sistemes basats en regles escrites per humans entre 1950 i 1990",
          "Màquines que aprenen de les dades en lloc de seguir regles",
          "Xarxes recurrents que processen el text paraula per paraula",
          "Models enormes que aprenen patrons complexos mitjançant Deep Learning i LLM"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La Era 3 (Deep Learning y LLM, 2017-actualidad) se caracteriza por modelos enormes capaces de aprender patrones increíblemente complejos, como ChatGPT, Claude o Gemini.",
        "en": "Era 3 (Deep Learning and LLM, 2017-today) is characterized by enormous models capable of learning incredibly complex patterns, such as ChatGPT, Claude or Gemini.",
        "val": "L'Era 3 (Deep Learning i LLM, 2017-actualitat) es caracteritza per models enormes capaços d'aprendre patrons increïblement complexos, com ChatGPT, Claude o Gemini."
      }
    },
    {
      "q": {
        "es": "¿Cuál de las siguientes afirmaciones sobre la IA General (AGI) es correcta?",
        "en": "Which of the following statements about General AI (AGI) is correct?",
        "val": "Quina de les següents afirmacions sobre la IA General (AGI) és correcta?"
      },
      "options": {
        "es": [
          "No existe aún: tendría capacidades cognitivas similares a las de un humano",
          "Es la IA que existe hoy, diseñada para una única tarea específica",
          "Es una IA que supera la inteligencia humana en todos los aspectos",
          "Es terreno de la ciencia ficción y nunca se alcanzará"
        ],
        "en": [
          "It does not exist yet: it would have cognitive abilities similar to a human's",
          "It is the AI that exists today, designed for a single specific task",
          "It is an AI that surpasses human intelligence in every aspect",
          "It is the realm of science fiction and will never be achieved"
        ],
        "val": [
          "Encara no existeix: tindria capacitats cognitives semblants a les d'un humà",
          "És la IA que existeix hui, dissenyada per a una única tasca específica",
          "És una IA que supera la intel·ligència humana en tots els aspectes",
          "És terreny de la ciència-ficció i mai s'aconseguirà"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La AGI tendría capacidades cognitivas similares a las humanas y podría aprender cualquier tarea, pero no existe todavía; la estrecha es la actual y la superinteligencia supera al humano.",
        "en": "AGI would have cognitive abilities similar to humans and could learn any task, but it does not exist yet; narrow AI is the current one and superintelligence surpasses humans.",
        "val": "La AGI tindria capacitats cognitives semblants a les humanes i podria aprendre qualsevol tasca, però encara no existeix; la estreta és l'actual i la superintel·ligència supera l'humà."
      }
    }
  ],
  "fundamentos/02-historia-ia": [
    {
      "q": {
        "es": "¿Qué fue el invierno de la IA?",
        "en": "What was the AI winter?",
        "val": "Què va ser l'hivern de la IA?"
      },
      "options": {
        "es": [
          "La época en la que los ordenadores dejaron de funcionar",
          "Un momento de gran euforia y optimismo desmedido",
          "Un periodo en el que las expectativas superaron a los resultados y la financiación se evaporó",
          "El nombre de la primera conferencia sobre Inteligencia Artificial"
        ],
        "en": [
          "The time when computers stopped working",
          "A moment of great euphoria and excessive optimism",
          "A period in which expectations exceeded results and funding evaporated",
          "The name of the first conference on Artificial Intelligence"
        ],
        "val": [
          "L'època en què els ordinadors van deixar de funcionar",
          "Un moment de gran eufòria i optimisme desmesurat",
          "Un període en què les expectatives van superar els resultats i el finançament es va evaporar",
          "El nom de la primera conferència sobre Intel·ligència Artificial"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El invierno de la IA fue un periodo (1974-1993) de expectativas demasiado altas, proyectos que no entregaban lo prometido y desaparición de la financiación.",
        "en": "The AI winter was a period (1974-1993) of excessively high expectations, projects that did not deliver what was promised and vanishing funding.",
        "val": "L'hivern de la IA va ser un període (1974-1993) d'expectatives massa altes, projectes que no complien el promés i desaparició del finançament."
      }
    },
    {
      "q": {
        "es": "¿Qué paper de 2017 lo cambió todo en la IA moderna?",
        "en": "Which 2017 paper changed everything in modern AI?",
        "val": "Quin article de 2017 ho va canviar tot en la IA moderna?"
      },
      "options": {
        "es": [
          "Attention Is All You Need",
          "Artificial Intelligence: A Modern Approach",
          "Computing Machinery and Intelligence",
          "ImageNet Classification with Deep Neural Networks"
        ],
        "en": [
          "Attention Is All You Need",
          "Artificial Intelligence: A Modern Approach",
          "Computing Machinery and Intelligence",
          "ImageNet Classification with Deep Neural Networks"
        ],
        "val": [
          "Attention Is All You Need",
          "Artificial Intelligence: A Modern Approach",
          "Computing Machinery and Intelligence",
          "ImageNet Classification with Deep Neural Networks"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Google publicó Attention Is All You Need en 2017, introduciendo la arquitectura Transformer, base de todos los modelos de lenguaje actuales.",
        "en": "Google published Attention Is All You Need in 2017, introducing the Transformer architecture, the foundation of all current language models.",
        "val": "Google va publicar Attention Is All You Need en 2017, introduint l'arquitectura Transformer, base de tots els models de llenguatge actuals."
      }
    },
    {
      "q": {
        "es": "¿Cuál fue el impacto de ChatGPT en la adopción de la IA?",
        "en": "What was ChatGPT's impact on AI adoption?",
        "val": "Quin va ser l'impacte de ChatGPT en l'adopció de la IA?"
      },
      "options": {
        "es": [
          "Fue el primer programa capaz de superar el Test de Turing",
          "Introdujo la arquitectura Transformer en los modelos de lenguaje",
          "Provocó el primer invierno de la IA",
          "Alcanzó 100 millones de usuarios en 2 meses, la aplicación que creció más rápido en la historia"
        ],
        "en": [
          "It was the first program able to pass the Turing Test",
          "It introduced the Transformer architecture in language models",
          "It caused the first AI winter",
          "It reached 100 million users in 2 months, the fastest-growing application in history"
        ],
        "val": [
          "Va ser el primer programa capaç de superar el Test de Turing",
          "Va introduir l'arquitectura Transformer en els models de llenguatge",
          "Va provocar el primer hivern de la IA",
          "Va aconseguir 100 milions d'usuaris en 2 mesos, l'aplicació que va créixer més ràpid en la història"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "ChatGPT se lanzó en noviembre de 2022 y alcanzó 100 millones de usuarios en 2 meses, convirtiéndose en la aplicación de más rápido crecimiento de la historia.",
        "en": "ChatGPT was launched in November 2022 and reached 100 million users in 2 months, becoming the fastest-growing application in history.",
        "val": "ChatGPT es va llançar al novembre de 2022 i va aconseguir 100 milions d'usuaris en 2 mesos, convertint-se en l'aplicació de creixement més ràpid de la història."
      }
    },
    {
      "q": {
        "es": "La lección dice que la velocidad de la IA se acelera. ¿Qué velocidad se pronostica para la cuarta revolución?",
        "en": "The lesson says that the speed of AI accelerates. What speed is predicted for the fourth revolution?",
        "val": "La lliçó diu que la velocitat de la IA s'accelera. Quina velocitat es pronostica per a la quarta revolució?"
      },
      "options": {
        "es": [
          "20 años",
          "15 años",
          "5 años",
          "2 o 3 años"
        ],
        "en": [
          "20 years",
          "15 years",
          "5 years",
          "2 or 3 years"
        ],
        "val": [
          "20 anys",
          "15 anys",
          "5 anys",
          "2 o 3 anys"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los ciclos se aceleran: 20 años el primero, 15 el segundo, 5 el tercero y 2 o 3 años la cuarta revolución.",
        "en": "The cycles are accelerating: 20 years for the first, 15 for the second, 5 for the third and 2 or 3 years for the fourth revolution.",
        "val": "Els cicles s'acceleren: 20 anys el primer, 15 el segon, 5 el tercer i 2 o 3 anys la quarta revolució."
      }
    }
  ],
  "fundamentos/03-machine-learning": [
    {
      "q": {
        "es": "¿Cuál es la diferencia fundamental entre programación tradicional y Machine Learning?",
        "en": "What is the fundamental difference between traditional programming and Machine Learning?",
        "val": "Quina és la diferència fonamental entre programació tradicional i Machine Learning?"
      },
      "options": {
        "es": [
          "La programación tradicional usa redes neuronales y Machine Learning no",
          "En la programación tradicional escribes las reglas; en Machine Learning el modelo descubre las reglas a partir de ejemplos",
          "Machine Learning no necesita datos para funcionar",
          "Ambas son exactamente iguales, solo cambia el lenguaje de programación"
        ],
        "en": [
          "Traditional programming uses neural networks and Machine Learning does not",
          "In traditional programming you write the rules; in Machine Learning the model discovers the rules from examples",
          "Machine Learning does not need data to work",
          "Both are exactly the same, only the programming language changes"
        ],
        "val": [
          "La programació tradicional usa xarxes neuronals i Machine Learning no",
          "En la programació tradicional escrius les regles; en Machine Learning el model descobrix les regles a partir d'exemples",
          "Machine Learning no necessita dades per a funcionar",
          "Les dues són exactament iguals, només canvia el llenguatge de programació"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "En la programación tradicional tienes Entrada + Reglas para obtener Salida; en Machine Learning das Entrada + Salida y el sistema descubre las reglas.",
        "en": "In traditional programming you have Input + Rules to get Output; in Machine Learning you give Input + Output and the system discovers the rules.",
        "val": "En la programació tradicional tens Entrada + Regles per a obtindre l'Eixida; en Machine Learning dones Entrada + Eixida i el sistema descobrix les regles."
      }
    },
    {
      "q": {
        "es": "El filtrado de spam de Gmail es un ejemplo clásico de aprendizaje...",
        "en": "Gmail's spam filtering is a classic example of... learning.",
        "val": "El filtratge de brossa de Gmail és un exemple clàssic d'aprenentatge..."
      },
      "options": {
        "es": [
          "por refuerzo, porque el modelo recibe recompensas por cada acierto",
          "no supervisado, porque las etiquetas se descubren automáticamente",
          "no supervisado, porque agrupa los correos por comportamiento de compra",
          "supervisado, porque se entrena con miles de correos etiquetados como spam o no spam"
        ],
        "en": [
          "reinforcement, because the model receives rewards for each correct answer",
          "unsupervised, because the labels are discovered automatically",
          "unsupervised, because it groups emails by purchasing behavior",
          "supervised, because it is trained with thousands of emails labeled as spam or not spam"
        ],
        "val": [
          "per reforç, perquè el model rep recompenses per cada encert",
          "no supervisat, perquè les etiquetes es descobrixen automàticament",
          "no supervisat, perquè agrupa els correus per comportament de compra",
          "supervisat, perquè s'entrena amb milers de correus etiquetats com a brossa o no brossa"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El filtrado de spam usa aprendizaje supervisado: se enseñan miles de correos etiquetados como spam o no spam para que el modelo aprenda a distinguirlos.",
        "en": "Spam filtering uses supervised learning: thousands of emails are labeled as spam or not spam so the model learns to distinguish them.",
        "val": "El filtratge de brossa usa aprenentatge supervisat: s'ensenyen milers de correus etiquetats com a brossa o no brossa perquè el model aprenga a distingir-los."
      }
    },
    {
      "q": {
        "es": "El sobreajuste (overfitting) es un problema porque...",
        "en": "Overfitting is a problem because...",
        "val": "El sobreajust és un problema perquè..."
      },
      "options": {
        "es": [
          "el modelo nunca alcanza una precisión alta en los datos de entrenamiento",
          "el modelo necesita demasiadas características para clasificar",
          "el modelo memoriza los datos de entrenamiento pero falla con datos nuevos que nunca ha visto",
          "el modelo aprende demasiado despacio durante el entrenamiento"
        ],
        "en": [
          "the model never reaches high accuracy on the training data",
          "the model needs too many features to classify",
          "the model memorizes the training data but fails with new data it has never seen",
          "the model learns too slowly during training"
        ],
        "val": [
          "el model mai aconseguix una precisió alta en les dades d'entrenament",
          "el model necessita massa característiques per a classificar",
          "el model memoritza les dades d'entrenament però falla amb dades noves que mai ha vist",
          "el model aprén massa a poc a poc durant l'entrenament"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Un modelo con sobreajuste puede obtener el 100% de precisión en el entrenamiento y ser inútil en el mundo real; por eso se separan datos de entrenamiento y de prueba.",
        "en": "An overfitted model can get 100% accuracy on training data and be useless in the real world; that is why we separate training and test data.",
        "val": "Un model amb sobreajust pot obtindre el 100% de precisió en l'entrenament i ser inútil en el món real; per això se separen dades d'entrenament i de prova."
      }
    },
    {
      "q": {
        "es": "¿Qué afirma la lección sobre la relación entre Machine Learning y la IA?",
        "en": "What does the lesson state about the relationship between Machine Learning and AI?",
        "val": "Què afirma la lliçó sobre la relació entre el Machine Learning i la IA?"
      },
      "options": {
        "es": [
          "Machine Learning es un subconjunto de la IA: no toda IA usa Machine Learning, pero la mayoría de la IA moderna sí",
          "Son lo mismo y los términos pueden usarse indistintamente",
          "La IA es un subconjunto del Machine Learning",
          "El Deep Learning es un subconjunto del Machine Learning, y la IA no tiene relación con ambos"
        ],
        "en": [
          "Machine Learning is a subset of AI: not all AI uses Machine Learning, but most modern AI does",
          "They are the same thing and the terms can be used interchangeably",
          "AI is a subset of Machine Learning",
          "Deep Learning is a subset of Machine Learning, and AI has no relationship with either"
        ],
        "val": [
          "Machine Learning és un subconjunt de la IA: no tota la IA usa Machine Learning, però la majoria de la IA moderna sí",
          "Són el mateix i els termes es poden usar indistintament",
          "La IA és un subconjunt del Machine Learning",
          "El Deep Learning és un subconjunt del Machine Learning, i la IA no té relació amb cap dels dos"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección usa el diagrama: IA (campo amplio) contiene Machine Learning, que a su vez contiene Deep Learning y este los LLM.",
        "en": "The lesson uses the diagram: AI (broad field) contains Machine Learning, which in turn contains Deep Learning and this contains LLMs.",
        "val": "La lliçó usa el diagrama: IA (camp ampli) conté Machine Learning, que al seu torn conté Deep Learning i aquest els LLM."
      }
    }
  ],
  "fundamentos/04-deep-learning": [
    {
      "q": {
        "es": "¿Por qué se llama deep (profundo) al Deep Learning?",
        "en": "Why is Deep Learning called deep?",
        "val": "Per què s'anomena deep (profund) al Deep Learning?"
      },
      "options": {
        "es": [
          "Porque se inspira en el cerebro humano",
          "Porque necesita muchos gigabytes de memoria",
          "Porque tiene muchas capas intermedias: una red profunda puede tener decenas o cientos de capas",
          "Porque procesa la información en orden secuencial"
        ],
        "en": [
          "Because it is inspired by the human brain",
          "Because it needs many gigabytes of memory",
          "Because it has many intermediate layers: a deep network can have tens or hundreds of layers",
          "Because it processes information in sequential order"
        ],
        "val": [
          "Perquè s'inspira en el cervell humà",
          "Perquè necessita molts gigabytes de memòria",
          "Perquè té moltes capes intermèdies: una xarxa profunda pot tindre desenes o centenars de capes",
          "Perquè processa la informació en ordre seqüencial"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Deep se refiere a la profundidad: muchas capas intermedias donde cada una aprende representaciones más complejas de los datos.",
        "en": "Deep refers to depth: many intermediate layers where each one learns more complex representations of the data.",
        "val": "Deep es referix a la profunditat: moltes capes intermèdies on cadascuna aprén representacions més complexes de les dades."
      }
    },
    {
      "q": {
        "es": "¿En qué se especializan las redes neuronales convolucionales (CNN)?",
        "en": "What are convolutional neural networks (CNN) specialized in?",
        "val": "En què s'especialitzen les xarxes neuronals convolucionals (CNN)?"
      },
      "options": {
        "es": [
          "En imágenes: detectan patrones visuales como bordes, texturas y objetos",
          "En secuencias de texto y audio, procesando la información en orden",
          "En generar texto nuevo a partir de un prompt",
          "En traducir automáticamente entre dos idiomas"
        ],
        "en": [
          "Images: they detect visual patterns such as edges, textures and objects",
          "Sequences of text and audio, processing information in order",
          "Generating new text from a prompt",
          "Automatically translating between two languages"
        ],
        "val": [
          "En imatges: detecten patrons visuals com vores, textures i objectes",
          "En seqüències de text i àudio, processant la informació en ordre",
          "En generar text nou a partir d'un prompt",
          "En traduir automàticament entre dos idiomes"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Las CNN se especializan en imágenes (reconocimiento facial, diagnóstico médico por imagen, conducción autónoma); las RNN/LSTM se usan para secuencias y los Transformers son la arquitectura dominante.",
        "en": "CNNs specialize in images (facial recognition, medical imaging diagnosis, autonomous driving); RNN/LSTM are used for sequences and Transformers are the dominant architecture.",
        "val": "Les CNN s'especialitzen en imatges (reconeixement facial, diagnòstic mèdic per imatge, conducció autònoma); les RNN/LSTM s'usen per a seqüències i els Transformers són l'arquitectura dominant."
      }
    },
    {
      "q": {
        "es": "En el entrenamiento de una red neuronal, ¿qué es la backpropagation?",
        "en": "In neural network training, what is backpropagation?",
        "val": "En l'entrenament d'una xarxa neuronal, què és la backpropagation?"
      },
      "options": {
        "es": [
          "La fase en la que los datos entran por la capa inicial",
          "La comparación entre la salida del modelo y la respuesta correcta",
          "El momento en el que la red genera la respuesta final al usuario",
          "El proceso de enviar el error hacia atrás por la red ajustando los parámetros de cada neurona"
        ],
        "en": [
          "The phase in which data enters through the initial layer",
          "The comparison between the model's output and the correct answer",
          "The moment when the network generates the final response to the user",
          "The process of sending the error backwards through the network, adjusting each neuron's parameters"
        ],
        "val": [
          "La fase en què les dades entren per la capa inicial",
          "La comparació entre l'eixida del model i la resposta correcta",
          "El moment en què la xarxa genera la resposta final a l'usuari",
          "El procés d'enviar l'error cap arrere per la xarxa ajustant els paràmetres de cada neurona"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La backpropagation envía el error hacia atrás por la red para ajustar los parámetros de cada neurona y reducir el error en cada iteración.",
        "en": "Backpropagation sends the error backwards through the network to adjust each neuron's parameters and reduce the error in each iteration.",
        "val": "La backpropagation envia l'error cap arrere per la xarxa per a ajustar els paràmetres de cada neurona i reduir l'error en cada iteració."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué diferencia a los Transformers de las redes recurrentes?",
        "en": "According to the lesson, what distinguishes Transformers from recurrent networks?",
        "val": "Segons la lliçó, què diferencia els Transformers de les xarxes recurrents?"
      },
      "options": {
        "es": [
          "Están especializados únicamente en imágenes",
          "Procesan toda la secuencia a la vez en lugar de una por una",
          "Solo pueden procesar textos muy cortos",
          "No pueden generar texto nuevo"
        ],
        "en": [
          "They are specialized only in images",
          "They process the whole sequence at once instead of one by one",
          "They can only process very short texts",
          "They cannot generate new text"
        ],
        "val": [
          "Estan especialitzats únicament en imatges",
          "Processen tota la seqüència alhora en lloc d'una per una",
          "Només poden processar textos molt curts",
          "No poden generar text nou"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los Transformers procesan toda la secuencia a la vez, lo que los hace más rápidos y potentes; son la base de ChatGPT, Claude y Gemini.",
        "en": "Transformers process the whole sequence at once, which makes them faster and more powerful; they are the basis of ChatGPT, Claude and Gemini.",
        "val": "Els Transformers processen tota la seqüència alhora, cosa que els fa més ràpids i potents; són la base de ChatGPT, Claude i Gemini."
      }
    }
  ],
  "fundamentos/05-llm": [
    {
      "q": {
        "es": "¿Cuál es el paso central del entrenamiento de un LLM?",
        "en": "What is the central step in training an LLM?",
        "val": "Quin és el pas central de l'entrenament d'un LLM?"
      },
      "options": {
        "es": [
          "Memorizar las respuestas correctas de un examen",
          "Clasificar imágenes en categorías predefinidas",
          "Escribir reglas explícitas para cada tarea",
          "Aprender a predecir la siguiente palabra más probable en un texto"
        ],
        "en": [
          "Memorizing the correct answers of an exam",
          "Classifying images into predefined categories",
          "Writing explicit rules for each task",
          "Learning to predict the most likely next word in a text"
        ],
        "val": [
          "Memoritzar les respostes correctes d'un examen",
          "Classificar imatges en categories predefinides",
          "Escriure regles explícites per a cada tasca",
          "Aprendre a predir la paraula següent més probable en un text"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El LLM se entrena para predecir la siguiente palabra (por ejemplo: El cielo es de color... azul), repitiendo el proceso billones de veces.",
        "en": "The LLM is trained to predict the next word (for example: The sky is... blue), repeating the process billions of times.",
        "val": "El LLM s'entrena per a predir la paraula següent (per exemple: El cel és de color... blau), repetint el procés bilions de vegades."
      }
    },
    {
      "q": {
        "es": "¿Qué papel juega el RLHF en la utilidad de un LLM como ChatGPT?",
        "en": "What role does RLHF play in the usefulness of an LLM like ChatGPT?",
        "val": "Quin paper juga el RLHF en la utilitat d'un LLM com ChatGPT?"
      },
      "options": {
        "es": [
          "Es el proceso de recopilar billones de tokens de internet",
          "Es el que hace que el modelo sea útil y seguro: humanos evalúan las respuestas y dan retroalimentación",
          "Determina el número de parámetros del modelo",
          "Permite que el modelo acceda a internet en tiempo real"
        ],
        "en": [
          "It is the process of collecting billions of tokens from the internet",
          "It is what makes the model useful and safe: humans evaluate the responses and give feedback",
          "It determines the number of parameters of the model",
          "It allows the model to access the internet in real time"
        ],
        "val": [
          "És el procés de recopilar bilions de tokens d'internet",
          "És el que fa que el model siga útil i segur: els humans avaluen les respostes i donen retroalimentació",
          "Determina el nombre de paràmetres del model",
          "Permet que el model accedisca a internet en temps real"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El RLHF usa retroalimentación humana para que el modelo produzca respuestas más útiles y seguras; sin él generaría texto correcto pero no necesariamente útil.",
        "en": "RLHF uses human feedback so the model produces more useful and safer responses; without it, it would generate correct but not necessarily useful text.",
        "val": "El RLHF usa retroalimentació humana perquè el model produïsca respostes més útils i segures; sense ell generaria text correcte però no necessàriament útil."
      }
    },
    {
      "q": {
        "es": "¿Qué son las capacidades emergentes de los LLM?",
        "en": "What are the emergent capabilities of LLMs?",
        "val": "Què són les capacitats emergents dels LLM?"
      },
      "options": {
        "es": [
          "Las habilidades que el modelo memoriza de sus datos de entrenamiento",
          "Los límites de la ventana de contexto del modelo",
          "Capacidades para las que el modelo no fue entrenado explícitamente y que aparecen al alcanzar cierto tamaño",
          "Las funciones de búsqueda en internet del modelo"
        ],
        "en": [
          "The skills the model memorizes from its training data",
          "The limits of the model's context window",
          "Capabilities for which the model was not explicitly trained and that appear once it reaches a certain size",
          "The model's internet search functions"
        ],
        "val": [
          "Les habilitats que el model memoritza de les seues dades d'entrenament",
          "Els límits de la finestra de context del model",
          "Capacitats per a les quals el model no va ser entrenat explícitament i que apareixen en aconseguir certa grandària",
          "Les funcions de cerca a internet del model"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Razonamiento lógico, resolución de problemas matemáticos o comprensión de metáforas emergen del tamaño y la diversidad de los datos de entrenamiento.",
        "en": "Logical reasoning, solving mathematical problems or understanding metaphors emerge from the size and diversity of the training data.",
        "val": "El raonament lògic, la resolució de problemes matemàtics o la comprensió de metàfores emergeixen de la grandària i la diversitat de les dades d'entrenament."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es un riesgo importante al usar un LLM puro?",
        "en": "According to the lesson, what is an important risk when using a pure LLM?",
        "val": "Segons la lliçó, quin és un risc important en usar un LLM pur?"
      },
      "options": {
        "es": [
          "Puede inventar datos con total seguridad cuando no conoce la respuesta",
          "Siempre informa cuando no está seguro de una respuesta",
          "No puede generar texto coherente",
          "No requiere verificación porque solo usa fuentes actualizadas"
        ],
        "en": [
          "It can invent data with total confidence when it does not know the answer",
          "It always reports when it is not sure about an answer",
          "It cannot generate coherent text",
          "It does not require verification because it only uses up-to-date sources"
        ],
        "val": [
          "Pot inventar dades amb total seguretat quan no coneix la resposta",
          "Sempre informa quan no està segur d'una resposta",
          "No pot generar text coherent",
          "No requereix verificació perquè només usa fonts actualitzades"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Los LLM inventan datos con total seguridad (alucinación) y no tienen acceso a internet en tiempo real, por eso nunca debes confiar a ciegas en datos críticos.",
        "en": "LLMs invent data with total confidence (hallucination) and have no real-time internet access, so you should never blindly trust critical data.",
        "val": "Els LLM inventen dades amb total seguretat (al·lucinació) i no tenen accés a internet en temps real, per això mai has de confiar a cegues en dades crítiques."
      }
    }
  ],
  "fundamentos/06-transformers": [
    {
      "q": {
        "es": "¿Cuál era el principal problema de las redes recurrentes (RNN/LSTM) antes de los Transformers?",
        "en": "What was the main problem with recurrent networks (RNN/LSTM) before Transformers?",
        "val": "Quin era el problema principal de les xarxes recurrents (RNN/LSTM) abans dels Transformers?"
      },
      "options": {
        "es": [
          "No podían procesar texto en paralelo y olvidaban información de las primeras palabras",
          "Eran demasiado precisas con textos largos",
          "Solo podían trabajar con imágenes",
          "No podían generar texto coherente"
        ],
        "en": [
          "They could not process text in parallel and forgot information from the first words",
          "They were too accurate with long texts",
          "They could only work with images",
          "They could not generate coherent text"
        ],
        "val": [
          "No podien processar text en paral·lel i oblidaven informació de les primeres paraules",
          "Eren massa precises amb textos llargs",
          "Només podien treballar amb imatges",
          "No podien generar text coherent"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Las RNN procesaban palabra por palabra: lentitud, memoria corta (olvidaban el principio) y escalabilidad limitada.",
        "en": "RNNs processed word by word: slowness, short memory (forgetting the beginning) and limited scalability.",
        "val": "Les RNN processaven paraula per paraula: lentitud, memòria curta (oblidaven el principi) i escalabilitat limitada."
      }
    },
    {
      "q": {
        "es": "¿Qué hace el mecanismo de atención en un Transformer?",
        "en": "What does the attention mechanism do in a Transformer?",
        "val": "Què fa el mecanisme d'atenció en un Transformer?"
      },
      "options": {
        "es": [
          "Traduce el texto palabra por palabra en orden",
          "Almacena las respuestas correctas para recuperarlas después",
          "Calcula la relevancia de cada palabra en relación con todas las demás de la secuencia",
          "Reduce el número de parámetros del modelo"
        ],
        "en": [
          "It translates the text word by word in order",
          "It stores the correct answers to retrieve them later",
          "It calculates the relevance of each word in relation to all the other words in the sequence",
          "It reduces the number of parameters of the model"
        ],
        "val": [
          "Tradueix el text paraula per paraula en ordre",
          "Emmagatzema les respostes correctes per a recuperar-les després",
          "Calcula la rellevància de cada paraula en relació amb totes les altres de la seqüència",
          "Reduïx el nombre de paràmetres del model"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La atención calcula la relevancia de cada palabra respecto a todas las demás, como un traductor que mira toda la frase y entiende las relaciones.",
        "en": "Attention calculates the relevance of each word in relation to all the others, like a translator who looks at the whole sentence and understands the relationships.",
        "val": "L'atenció calcula la rellevància de cada paraula respecte a totes les altres, com un traductor que mira tota la frase i entén les relacions."
      }
    },
    {
      "q": {
        "es": "¿Por qué los Transformers necesitan positional encoding?",
        "en": "Why do Transformers need positional encoding?",
        "val": "Per què els Transformers necessiten positional encoding?"
      },
      "options": {
        "es": [
          "Porque generan una palabra cada vez en secuencia",
          "Porque procesan todo a la vez y necesitan saber el orden de las palabras",
          "Porque solo entienden texto en inglés",
          "Porque necesitan memorizar el vocabulario completo"
        ],
        "en": [
          "Because they generate one word at a time in sequence",
          "Because they process everything at once and need to know the order of the words",
          "Because they only understand English text",
          "Because they need to memorize the whole vocabulary"
        ],
        "val": [
          "Perquè generen una paraula cada vegada en seqüència",
          "Perquè processen tot alhora i necessiten saber l'ordre de les paraules",
          "Perquè només entenen text en anglés",
          "Perquè necessiten memoritzar el vocabulari complet"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Como el Transformer procesa la secuencia completa a la vez y no en orden, el positional encoding añade información sobre la posición de cada palabra.",
        "en": "Since the Transformer processes the whole sequence at once and not in order, positional encoding adds information about the position of each word.",
        "val": "Com que el Transformer processa la seqüència completa alhora i no en ordre, el positional encoding afig informació sobre la posició de cada paraula."
      }
    },
    {
      "q": {
        "es": "Un modelo decoder-only como GPT está especialmente indicado para...",
        "en": "A decoder-only model like GPT is especially suitable for...",
        "val": "Un model només descodificador com GPT està especialment indicat per a..."
      },
      "options": {
        "es": [
          "entender y clasificar texto, como el análisis de sentimiento",
          "transformar texto de un idioma a otro",
          "reconocer objetos en imágenes",
          "generar texto: chatbots, generación de contenido y código"
        ],
        "en": [
          "understanding and classifying text, such as sentiment analysis",
          "transforming text from one language to another",
          "recognizing objects in images",
          "generating text: chatbots, content generation and code"
        ],
        "val": [
          "entendre i classificar text, com l'anàlisi de sentiments",
          "transformar text d'un idioma a un altre",
          "reconéixer objectes en imatges",
          "generar text: xatbots, generació de contingut i codi"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El encoder-only (BERT) es para entender, el decoder-only (GPT) para generar y el encoder-decoder (T5, BART) para transformar texto.",
        "en": "Encoder-only (BERT) is for understanding, decoder-only (GPT) for generating and encoder-decoder (T5, BART) for transforming text.",
        "val": "El només codificador (BERT) és per a entendre, el només descodificador (GPT) per a generar i el codificador-descodificador (T5, BART) per a transformar text."
      }
    }
  ],
  "fundamentos/07-tokens-contexto": [
    {
      "q": {
        "es": "¿Qué es un token en un modelo de lenguaje?",
        "en": "What is a token in a language model?",
        "val": "Què és un token en un model de llenguatge?"
      },
      "options": {
        "es": [
          "Una frase completa separada por puntos",
          "Un carácter individual del alfabeto",
          "La unidad básica de texto que el modelo procesa; no es exactamente una palabra",
          "Un párrafo completo del documento"
        ],
        "en": [
          "A complete sentence separated by periods",
          "An individual character of the alphabet",
          "The basic unit of text that the model processes; it is not exactly a word",
          "A complete paragraph of the document"
        ],
        "val": [
          "Una frase completa separada per punts",
          "Un caràcter individual de l'alfabet",
          "La unitat bàsica de text que el model processa; no és exactament una paraula",
          "Un paràgraf complet del document"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Un token es un fragmento de texto: Inteligencia Artificial puede ser 2 tokens, pero la palabra desarrolladores puede dividirse en 3 tokens.",
        "en": "A token is a fragment of text: Inteligencia Artificial can be 2 tokens, but the word desarrolladores can be split into 3 tokens.",
        "val": "Un token és un fragment de text: Intel·ligència Artificial pot ser 2 tokens, però la paraula desenvolupadors pot dividir-se en 3 tokens."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuántos tokens suele generar un modelo por segundo?",
        "en": "According to the lesson, how many tokens does a model usually generate per second?",
        "val": "Segons la lliçó, quants tokens sol generar un model per segon?"
      },
      "options": {
        "es": [
          "Entre 20 y 100 tokens por segundo",
          "Entre 1 y 5 tokens por segundo",
          "Entre 500 y 1.000 tokens por segundo",
          "Más de 10.000 tokens por segundo"
        ],
        "en": [
          "Between 20 and 100 tokens per second",
          "Between 1 and 5 tokens per second",
          "Between 500 and 1,000 tokens per second",
          "More than 10,000 tokens per second"
        ],
        "val": [
          "Entre 20 i 100 tokens per segon",
          "Entre 1 i 5 tokens per segon",
          "Entre 500 i 1.000 tokens per segon",
          "Més de 10.000 tokens per segon"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La velocidad de generación suele estar entre 20 y 100 tokens por segundo, lo que se conoce como throughput.",
        "en": "The generation speed is usually between 20 and 100 tokens per second, which is known as throughput.",
        "val": "La velocitat de generació sol estar entre 20 i 100 tokens per segon, cosa que es coneix com a throughput."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la diferencia entre ventana de contexto y memoria?",
        "en": "What is the difference between context window and memory?",
        "val": "Quina és la diferència entre finestra de context i memòria?"
      },
      "options": {
        "es": [
          "Son conceptos idénticos y se usan indistintamente",
          "La memoria es más pequeña que la ventana de contexto",
          "La ventana de contexto se aplica solo al texto generado, no al recibido",
          "La ventana de contexto limita el texto que el modelo puede ver; fuera de ella el modelo no recuerda nada de la conversación"
        ],
        "en": [
          "They are identical concepts and are used interchangeably",
          "Memory is smaller than the context window",
          "The context window applies only to generated text, not received text",
          "The context window limits the text the model can see; outside it the model remembers nothing from the conversation"
        ],
        "val": [
          "Són conceptes idèntics i s'usen indistintament",
          "La memòria és més xicoteta que la finestra de context",
          "La finestra de context s'aplica només al text generat, no al rebut",
          "La finestra de context limita el text que el model pot veure; fora d'ella el model no recorda res de la conversa"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El modelo no recuerda conversaciones anteriores fuera de la ventana actual; cada nueva conversación empieza de cero salvo que la plataforma guarde el historial.",
        "en": "The model does not remember previous conversations outside the current window; each new conversation starts from scratch unless the platform saves the history.",
        "val": "El model no recorda converses anteriors fora de la finestra actual; cada nova conversa comença de zero llevat que la plataforma guarde l'historial."
      }
    },
    {
      "q": {
        "es": "¿Por qué los textos en español suelen usar más tokens que en inglés?",
        "en": "Why do Spanish texts usually use more tokens than English?",
        "val": "Per què els textos en espanyol solen usar més tokens que en anglés?"
      },
      "options": {
        "es": [
          "Porque el español tiene menos palabras que el inglés",
          "Porque los tokenizadores están más optimizados para inglés",
          "Porque los modelos no entienden el español",
          "Porque el inglés usa caracteres diferentes"
        ],
        "en": [
          "Because Spanish has fewer words than English",
          "Because tokenizers are more optimized for English",
          "Because models do not understand Spanish",
          "Because English uses different characters"
        ],
        "val": [
          "Perquè l'espanyol té menys paraules que l'anglés",
          "Perquè els tokenitzadors estan més optimitzats per a l'anglés",
          "Perquè els models no entenen l'espanyol",
          "Perquè l'anglés usa caràcters diferents"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La regla general dice que 1 token equivale a 0.75 palabras en español, y los textos en español usan más tokens porque los tokenizadores están optimizados para inglés.",
        "en": "The general rule says 1 token equals 0.75 words in Spanish, and Spanish texts use more tokens because tokenizers are optimized for English.",
        "val": "La regla general diu que 1 token equival a 0.75 paraules en espanyol, i els textos en espanyol usen més tokens perquè els tokenitzadors estan optimitzats per a l'anglés."
      }
    }
  ],
  "fundamentos/08-alucinaciones-sesgos": [
    {
      "q": {
        "es": "¿Qué es una alucinación en un modelo de IA?",
        "en": "What is a hallucination in an AI model?",
        "val": "Què és una al·lucinació en un model d'IA?"
      },
      "options": {
        "es": [
          "Un error de red que corta la conexión",
          "Información que parece plausible pero es completamente falsa",
          "Una respuesta demasiado larga o confusa",
          "Un fallo del servidor al procesar la petición"
        ],
        "en": [
          "A network error that cuts the connection",
          "Information that seems plausible but is completely false",
          "A response that is too long or confusing",
          "A server failure when processing the request"
        ],
        "val": [
          "Un error de xarxa que talla la connexió",
          "Informació que sembla plausible però és completament falsa",
          "Una resposta massa llarga o confusa",
          "Una fallada del servidor en processar la petició"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La alucinación genera información falsa con apariencia de verdad, como nombres, fechas o referencias inventadas; no es un error aleatorio, sino una característica del modelo.",
        "en": "Hallucination generates false information that looks true, such as invented names, dates or references; it is not a random error but a feature of the model.",
        "val": "L'al·lucinació genera informació falsa amb aparença de veritat, com noms, dates o referències inventades; no és un error aleatori, sinó una característica del model."
      }
    },
    {
      "q": {
        "es": "¿Por qué las alucinaciones no pueden eliminarse por completo?",
        "en": "Why can hallucinations not be completely eliminated?",
        "val": "Per què les al·lucinacions no es poden eliminar completament?"
      },
      "options": {
        "es": [
          "Porque los modelos no tienen suficientes parámetros",
          "Porque faltan datos de entrenamiento en español",
          "Porque los modelos se entrenan sin supervisión humana",
          "Porque la alucinación y la generación de texto son el mismo proceso"
        ],
        "en": [
          "Because models do not have enough parameters",
          "Because there is not enough Spanish training data",
          "Because models are trained without human supervision",
          "Because hallucination and text generation are the same process"
        ],
        "val": [
          "Perquè els models no tenen prou paràmetres",
          "Perquè falten dades d'entrenament en espanyol",
          "Perquè els models s'entrenen sense supervisió humana",
          "Perquè l'al·lucinació i la generació de text són el mateix procés"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El modelo predice la siguiente palabra más probable; una alucinación es simplemente esa predicción cuando coincide con información falsa. Son inseparables.",
        "en": "The model predicts the most likely next word; a hallucination is simply that prediction when it matches false information. They are inseparable.",
        "val": "El model prediu la paraula següent més probable; una al·lucinació és simplement eixa predicció quan coincidix amb informació falsa. Són inseparables."
      }
    },
    {
      "q": {
        "es": "¿De dónde derivan los sesgos de un modelo de IA?",
        "en": "Where do the biases of an AI model come from?",
        "val": "D'on deriven els biaixos d'un model d'IA?"
      },
      "options": {
        "es": [
          "De los datos de entrenamiento, que reflejan prejuicios culturales, de género o de popularidad",
          "De los errores aleatorios del hardware",
          "De la velocidad de generación del modelo",
          "Del idioma en el que se hace la consulta"
        ],
        "en": [
          "From the training data, which reflect cultural, gender or popularity prejudices",
          "From random hardware errors",
          "From the model's generation speed",
          "From the language in which the query is made"
        ],
        "val": [
          "De les dades d'entrenament, que reflectixen prejudicis culturals, de gènere o de popularitat",
          "Dels errors aleatoris del hardware",
          "De la velocitat de generació del model",
          "De l'idioma en què es fa la consulta"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Los sesgos son prejuicios sistemáticos derivados de los datos de entrenamiento, como asumir que un doctor es hombre o una enfermera mujer.",
        "en": "Biases are systematic prejudices derived from the training data, such as assuming a doctor is a man or a nurse is a woman.",
        "val": "Els biaixos són prejudicis sistemàtics derivats de les dades d'entrenament, com assumir que un metge és home o una infermera dona."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cómo deberías usar la IA para datos críticos?",
        "en": "According to the lesson, how should you use AI for critical data?",
        "val": "Segons la lliçó, com hauries d'usar la IA per a dades crítiques?"
      },
      "options": {
        "es": [
          "Como fuente única de información factual exacta",
          "Para obtener citas y referencias verificadas",
          "Como punto de partida, verificando siempre con fuentes primarias",
          "Para tomar decisiones médicas o legales"
        ],
        "en": [
          "As the single source of exact factual information",
          "To obtain verified quotes and references",
          "As a starting point, always verifying with primary sources",
          "To make medical or legal decisions"
        ],
        "val": [
          "Com a font única d'informació factual exacta",
          "Per a obtindre cites i referències verificades",
          "Com a punt de partida, verificant sempre amb fonts primàries",
          "Per a prendre decisions mèdiques o legals"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La IA es excelente para ideas, estructura y borradores, pero no para datos factuales exactos ni decisiones críticas; siempre verifica con fuentes primarias.",
        "en": "AI is excellent for ideas, structure and drafts, but not for exact factual data or critical decisions; always verify with primary sources.",
        "val": "La IA és excel·lent per a idees, estructura i esborranys, però no per a dades factuals exactes ni decisions crítiques; sempre verifica amb fonts primàries."
      }
    }
  ],
  "fundamentos/09-modelos-principales": [
    {
      "q": {
        "es": "¿Cuál es la fortaleza principal de Claude Fable 5.1 según la lección?",
        "en": "What is the main strength of Claude Fable 5.1 according to the lesson?",
        "val": "Quina és la fortalesa principal de Claude Fable 5.1 segons la lliçó?"
      },
      "options": {
        "es": [
          "El análisis profundo: excelente con documentos largos y muy fuerte en análisis de código",
          "Ser el modelo open source más económico",
          "Acceder a información en tiempo real de Google",
          "Ser el más rápido para tareas ofimáticas"
        ],
        "en": [
          "Deep analysis: excellent with long documents and very strong at code analysis",
          "Being the most affordable open source model",
          "Accessing Google's real-time information",
          "Being the fastest for office work"
        ],
        "val": [
          "L'anàlisi profund: excel·lent amb documents llargs i molt fort en anàlisi de codi",
          "Ser el model open source més econòmic",
          "Accedir a informació en temps real de Google",
          "Ser el més ràpid per a tasques ofimàtiques"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Claude Fable 5.1 es el analista profundo: ventana de hasta 1M de tokens, fuerte en código y con respuestas matizadas; ideal para documentos, programación e investigación.",
        "en": "Claude Fable 5.1 is the deep analyst: up to 1M token window, strong at code and with nuanced responses; ideal for documents, programming and research.",
        "val": "Claude Fable 5.1 és l'analista profund: finestra de fins a 1M de tokens, fort en codi i amb respostes matisades; ideal per a documents, programació i investigació."
      }
    },
    {
      "q": {
        "es": "¿Qué ventaja destacada ofrece un modelo open source como Muse Spark 1.3?",
        "en": "What outstanding advantage does an open source model like Muse Spark 1.3 offer?",
        "val": "Quin avantatge destacat oferix un model open source com Muse Spark 1.3?"
      },
      "options": {
        "es": [
          "Tiene la ventana de contexto más grande del mercado",
          "Accede a información en tiempo real sin conexión",
          "Es gratuito, descargable y puedes ejecutarlo en tu propio ordenador",
          "Es el modelo con mayor capacidad de razonamiento matemático"
        ],
        "en": [
          "It has the largest context window on the market",
          "It accesses real-time information without a connection",
          "It is free, downloadable and you can run it on your own computer",
          "It is the model with the greatest mathematical reasoning capability"
        ],
        "val": [
          "Té la finestra de context més gran del mercat",
          "Accedix a informació en temps real sense connexió",
          "És gratuït, descarregable i pots executar-lo en el teu propi ordinador",
          "És el model amb més capacitat de raonament matemàtic"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Muse Spark 1.3 es el campeón open source: gratuito, ejecutable en local, iguala a los modelos de la frontera a una fracción del precio; ideal para privacidad y experimentación.",
        "en": "Muse Spark 1.3 is the open source champion: free, runnable locally, it matches frontier models at a fraction of the price; ideal for privacy and experimentation.",
        "val": "Muse Spark 1.3 és el campió open source: gratuït, executable en local, iguala els models de la frontera a una fracció del preu; ideal per a privacitat i experimentació."
      }
    },
    {
      "q": {
        "es": "Según la estrategia recomendada de la lección, ¿qué modelos se eligen para un presupuesto ajustado?",
        "en": "According to the strategy recommended in the lesson, which models are chosen for a tight budget?",
        "val": "Segons l'estratègia recomanada de la lliçó, quins models s'eligen per a un pressupost ajustat?"
      },
      "options": {
        "es": [
          "GPT-6 Astra o Claude Fable 5.1",
          "Muse Spark 1.3, Qwen 3.8 o DeepSeek V4",
          "Gemini 3.8 o GPT-6 Astra",
          "Solo Claude Fable 5.1"
        ],
        "en": [
          "GPT-6 Astra or Claude Fable 5.1",
          "Muse Spark 1.3, Qwen 3.8 or DeepSeek V4",
          "Gemini 3.8 or GPT-6 Astra",
          "Only Claude Fable 5.1"
        ],
        "val": [
          "GPT-6 Astra o Claude Fable 5.1",
          "Muse Spark 1.3, Qwen 3.8 o DeepSeek V4",
          "Gemini 3.8 o GPT-6 Astra",
          "Només Claude Fable 5.1"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Para presupuesto ajustado la lección recomienda Muse Spark 1.3, Qwen 3.8 o DeepSeek V4; para uso diario Gemini 3.8 o GPT-6 Astra y para documentos largos o programación Claude Fable 5.1.",
        "en": "For a tight budget the lesson recommends Muse Spark 1.3, Qwen 3.8 or DeepSeek V4; for daily use Gemini 3.8 or GPT-6 Astra and for long documents or programming Claude Fable 5.1.",
        "val": "Per a pressupost ajustat la lliçó recomana Muse Spark 1.3, Qwen 3.8 o DeepSeek V4; per a ús diari Gemini 3.8 o GPT-6 Astra i per a documents llargs o programació Claude Fable 5.1."
      }
    },
    {
      "q": {
        "es": "¿Por qué la lección afirma que no existe un modelo mejor para todos los casos?",
        "en": "Why does the lesson state that there is no best model for every case?",
        "val": "Per què la lliçó afirma que no existeix un model millor per a tots els casos?"
      },
      "options": {
        "es": [
          "Porque todos los modelos tienen exactamente las mismas capacidades",
          "Porque los modelos más baratos siempre son mejores",
          "Porque solo los modelos de pago son fiables",
          "Porque cada modelo tiene fortalezas diferentes y lo correcto es preguntar cuál es el mejor para tu caso de uso"
        ],
        "en": [
          "Because all models have exactly the same capabilities",
          "Because the cheapest models are always the best",
          "Because only paid models are reliable",
          "Because each model has different strengths and the right question is which is the best for your use case"
        ],
        "val": [
          "Perquè tots els models tenen exactament les mateixes capacitats",
          "Perquè els models més barats sempre són millors",
          "Perquè només els models de pagament són fiables",
          "Perquè cada model té fortaleses diferents i el correcte és preguntar quin és el millor per al teu cas d'ús"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La estrategia correcta es evaluar según la tarea propia: coste por uso, velocidad, manejo del español y fiabilidad, probando varios modelos.",
        "en": "The right strategy is to evaluate according to your own task: cost per use, speed, Spanish handling and reliability, trying several models.",
        "val": "L'estratègia correcta és avaluar segons la teua pròpia tasca: cost per ús, velocitat, gestió de l'espanyol i fiabilitat, provant diversos models."
      }
    }
  ],
  "fundamentos/10-resumen-fundamentos": [
    {
      "q": {
        "es": "Tras el Bloque 1, ¿qué diferencia clave existe entre Machine Learning y la programación tradicional?",
        "en": "After Block 1, what key difference exists between Machine Learning and traditional programming?",
        "val": "Després del Bloc 1, quina diferència clau existeix entre el Machine Learning i la programació tradicional?"
      },
      "options": {
        "es": [
          "La programación tradicional usa redes neuronales",
          "Machine Learning aprende de los datos en lugar de seguir reglas escritas por humanos",
          "El Machine Learning no necesita datos de entrenamiento",
          "Ambas siguen las mismas reglas explícitas"
        ],
        "en": [
          "Traditional programming uses neural networks",
          "Machine Learning learns from data instead of following human-written rules",
          "Machine Learning does not need training data",
          "Both follow the same explicit rules"
        ],
        "val": [
          "La programació tradicional usa xarxes neuronals",
          "Machine Learning aprén de les dades en lloc de seguir regles escrites per humans",
          "El Machine Learning no necessita dades d'entrenament",
          "Totes dues seguixen les mateixes regles explícites"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen lo condensa así: ML = aprender de los datos en lugar de seguir reglas; sus tres tipos son supervisado, no supervisado y por refuerzo.",
        "en": "The summary condenses it like this: ML = learning from data instead of following rules; its three types are supervised, unsupervised and reinforcement.",
        "val": "El resum ho condensa així: ML = aprendre de les dades en lloc de seguir regles; els seus tres tipus són supervisat, no supervisat i per reforç."
      }
    },
    {
      "q": {
        "es": "Según el resumen del bloque, ¿qué es un token?",
        "en": "According to the block summary, what is a token?",
        "val": "Segons el resum del bloc, què és un token?"
      },
      "options": {
        "es": [
          "Un conjunto de mil palabras",
          "El límite máximo de la ventana de contexto",
          "Una regla de programación tradicional",
          "La unidad de texto del modelo, equivalente aproximadamente a 0.75 palabras en español"
        ],
        "en": [
          "A set of a thousand words",
          "The maximum limit of the context window",
          "A rule of traditional programming",
          "The model's text unit, equivalent to approximately 0.75 words in Spanish"
        ],
        "val": [
          "Un conjunt de mil paraules",
          "El límit màxim de la finestra de context",
          "Una regla de programació tradicional",
          "La unitat de text del model, equivalent aproximadament a 0.75 paraules en espanyol"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Token = unidad de texto del modelo (≈ 0.75 palabras en español); la ventana de contexto es cuánto puede ver el modelo y la inferencia es usar el modelo entrenado.",
        "en": "Token = the model's text unit (≈ 0.75 words in Spanish); the context window is how much the model can see and inference is using the trained model.",
        "val": "Token = unitat de text del model (≈ 0.75 paraules en espanyol); la finestra de context és quant pot veure el model i la inferència és usar el model entrenat."
      }
    },
    {
      "q": {
        "es": "¿Qué consejo clave resume la lección sobre las alucinaciones?",
        "en": "What key advice does the lesson summarize about hallucinations?",
        "val": "Quin consell clau resumeix la lliçó sobre les al·lucinacions?"
      },
      "options": {
        "es": [
          "Las alucinaciones solo ocurren con textos muy largos",
          "Los LLM avisan cuando van a alucinar",
          "Los LLM inventan información con total seguridad; siempre verifica los datos críticos con fuentes primarias",
          "Las alucinaciones pueden eliminarse con un mejor prompt"
        ],
        "en": [
          "Hallucinations only happen with very long texts",
          "LLMs warn when they are about to hallucinate",
          "LLMs invent information with total confidence; always verify critical data with primary sources",
          "Hallucinations can be eliminated with a better prompt"
        ],
        "val": [
          "Les al·lucinacions només ocorren amb textos molt llargs",
          "Els LLM avisen quan van a al·lucinar",
          "Els LLM inventen informació amb total seguretat; sempre verifica les dades crítiques amb fonts primàries",
          "Les al·lucinacions es poden eliminar amb un millor prompt"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección 8 subraya que los LLM inventan información con total seguridad y que los sesgos vienen de los datos de entrenamiento: verifica siempre con fuentes primarias.",
        "en": "Lesson 8 stresses that LLMs invent information with total confidence and that biases come from the training data: always verify with primary sources.",
        "val": "La lliçó 8 subratlla que els LLM inventen informació amb total seguretat i que els biaixos venen de les dades d'entrenament: verifica sempre amb fonts primàries."
      }
    },
    {
      "q": {
        "es": "¿Qué papel tienen los Transformers en el panorama actual de la IA según el resumen?",
        "en": "What role do Transformers play in the current AI landscape according to the summary?",
        "val": "Quin paper tenen els Transformers en el panorama actual de la IA segons el resum?"
      },
      "options": {
        "es": [
          "Son la base de todos los modelos modernos: procesan todo el texto a la vez mediante el mecanismo de atención",
          "Solo se usan para clasificar imágenes médicas",
          "Son un tipo de programación tradicional",
          "Procesan el texto palabra por palabra en secuencia"
        ],
        "en": [
          "They are the foundation of all modern models: they process all the text at once through the attention mechanism",
          "They are only used to classify medical images",
          "They are a type of traditional programming",
          "They process text word by word in sequence"
        ],
        "val": [
          "Són la base de tots els models moderns: processen tot el text alhora mitjançant el mecanisme d'atenció",
          "Només s'usen per a classificar imatges mèdiques",
          "Són un tipus de programació tradicional",
          "Processen el text paraula per paraula en seqüència"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Los Transformers (2017) procesan todo el texto a la vez con el mecanismo de atención y son la base de todos los modelos de lenguaje modernos.",
        "en": "Transformers (2017) process all the text at once with the attention mechanism and are the foundation of all modern language models.",
        "val": "Els Transformers (2017) processen tot el text alhora amb el mecanisme d'atenció i són la base de tots els models de llenguatge moderns."
      }
    }
  ],
  "ecosistema/01-panorama-ecosistema": [
    {
      "q": {
        "es": "Según la lección, ¿cuántas categorías principales de herramientas de IA existen?",
        "en": "According to the lesson, how many main categories of AI tools are there?",
        "val": "Segons la lliçó, quantes categories principals d'eines d'IA existeixen?"
      },
      "options": {
        "es": [
          "Cinco",
          "Seis",
          "Siete",
          "Diez"
        ],
        "en": [
          "Five",
          "Six",
          "Seven",
          "Ten"
        ],
        "val": [
          "Cinc",
          "Sis",
          "Set",
          "Deu"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección establece siete categorías principales: asistentes de conversación, código, imágenes, audio y vídeo, no-code, productividad e investigación.",
        "en": "The lesson sets out seven main categories: conversational assistants, code, images, audio and video, no-code, productivity and research.",
        "val": "La lliçó estableix set categories principals: assistents de conversa, codi, imatges, àudio i vídeo, no-code, productivitat i investigació."
      }
    },
    {
      "q": {
        "es": "Según el texto, ¿cuántas herramientas diferentes suelen usar los profesionales según la tarea?",
        "en": "According to the text, how many different tools do professionals usually use depending on the task?",
        "val": "Segons el text, quantes eines diferents solen usar els professionals segons la tasca?"
      },
      "options": {
        "es": [
          "Una sola",
          "Dos o tres",
          "Tres a cinco",
          "Más de diez"
        ],
        "en": [
          "Just one",
          "Two or three",
          "Three to five",
          "More than ten"
        ],
        "val": [
          "Una sola",
          "Dues o tres",
          "Tres a cinc",
          "Més de deu"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El texto indica que los profesionales suelen usar entre tres y cinco herramientas diferentes según la tarea.",
        "en": "The text states that professionals usually use between three and five different tools depending on the task.",
        "val": "El text indica que els professionals solen usar entre tres i cinc eines diferents segons la tasca."
      }
    },
    {
      "q": {
        "es": "¿Por qué según la lección no tiene sentido comparar ChatGPT con Midjourney?",
        "en": "Why does the lesson say it makes no sense to compare ChatGPT with Midjourney?",
        "val": "Per què diu la lliçó que no té sentit comparar ChatGPT amb Midjourney?"
      },
      "options": {
        "es": [
          "Porque uno es de pago y el otro gratuito",
          "Porque pertenecen a categorías distintas",
          "Porque Midjourney es más nuevo",
          "Porque Midjourney genera texto"
        ],
        "en": [
          "Because one is paid and the other free",
          "Because they belong to different categories",
          "Because Midjourney is newer",
          "Because Midjourney generates text"
        ],
        "val": [
          "Perquè un és de pagament i l'altre gratuït",
          "Perquè pertanyen a categories diferents",
          "Perquè Midjourney és més nou",
          "Perquè Midjourney genera text"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Pertenecen a categorías distintas: ChatGPT es un asistente de conversación y Midjourney genera imágenes, por lo que compararlas no es equivalente.",
        "en": "They belong to different categories: ChatGPT is a conversational assistant and Midjourney generates images, so comparing them is not equivalent.",
        "val": "Pertanyen a categories diferents: ChatGPT és un assistent de conversa i Midjourney genera imatges, de manera que comparar-les no és equivalent."
      }
    },
    {
      "q": {
        "es": "¿Cuál es el consejo práctico que da la lección para aprender a usar herramientas de IA?",
        "en": "What practical advice does the lesson give for learning to use AI tools?",
        "val": "Quin consell pràctic dóna la lliçó per a aprendre a usar eines d'IA?"
      },
      "options": {
        "es": [
          "Aprende todas las herramientas de cada categoría a la vez",
          "Elige una categoría, domina una herramienta y ve ampliando",
          "Usa siempre la herramienta más cara",
          "Contrata a un experto para que elija por ti"
        ],
        "en": [
          "Learn all the tools in each category at once",
          "Pick one category, master one tool, and then gradually expand",
          "Always use the most expensive tool",
          "Hire an expert to choose for you"
        ],
        "val": [
          "Aprèn totes les eines de cada categoria alhora",
          "Tria una categoria, domina una eina i vés ampliant",
          "Usa sempre l'eina més cara",
          "Contracta un expert perquè trie per tu"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección aconseja elegir una categoría, dominar una herramienta y después ir ampliando progresivamente.",
        "en": "The lesson advises picking one category, mastering one tool, and then gradually expanding.",
        "val": "La lliçó aconsella triar una categoria, dominar una eina i després anar ampliant progressivament."
      }
    }
  ],
  "ecosistema/02-asistentes-conversacion": [
    {
      "q": {
        "es": "¿Cuál es el contexto máximo que puede procesar Gemini según la comparativa de la lección?",
        "en": "What is the maximum context Gemini can process according to the lesson comparison?",
        "val": "Quin és el context màxim que pot processar Gemini segons la comparativa de la lliçó?"
      },
      "options": {
        "es": [
          "128.000 tokens",
          "200.000 tokens",
          "500.000 tokens",
          "2 millones de tokens"
        ],
        "en": [
          "128,000 tokens",
          "200,000 tokens",
          "500,000 tokens",
          "2 million tokens"
        ],
        "val": [
          "128.000 tokens",
          "200.000 tokens",
          "500.000 tokens",
          "2 milions de tokens"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Gemini tiene un contexto gigante que puede llegar a 2 millones de tokens, lo que le permite procesar documentos enormes.",
        "en": "Gemini has a giant context that can reach 2 million tokens, allowing it to process enormous documents.",
        "val": "Gemini té un context gegant que pot arribar a 2 milions de tokens, cosa que li permet processar documents enormes."
      }
    },
    {
      "q": {
        "es": "¿Qué punto fuerte destaca la lección de Claude frente a los otros dos asistentes?",
        "en": "What strong point does the lesson highlight about Claude compared to the other two assistants?",
        "val": "Quin punt fort destaca la lliçó de Claude enfront dels altres dos assistents?"
      },
      "options": {
        "es": [
          "Es el más fácil de usar",
          "Tiene la mayor cantidad de plugins",
          "Es más propenso a alucinaciones",
          "Realiza análisis profundos con menos alucinaciones"
        ],
        "en": [
          "It is the easiest to use",
          "It has the most plugins",
          "It is more prone to hallucinations",
          "It performs deep analyses with fewer hallucinations"
        ],
        "val": [
          "És el més fàcil d'usar",
          "Té la major quantitat de plugins",
          "És més propens a al·lucinacions",
          "Realitza anàlisis profunds amb menys al·lucinacions"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Claude destaca por su análisis profundo y por ser menos propenso a alucinaciones, con respuestas más cuidadas y matizadas.",
        "en": "Claude stands out for its deep analysis and for being less prone to hallucinations, with more careful and nuanced responses.",
        "val": "Claude destaca per la seua anàlisi profunda i per ser menys propens a al·lucinacions, amb respostes més cuidades i matisades."
      }
    },
    {
      "q": {
        "es": "¿Qué función específica de ChatGPT permite recordar conversaciones anteriores?",
        "en": "What specific feature of ChatGPT allows it to remember previous conversations?",
        "val": "Quina funció específica de ChatGPT permet recordar converses anteriors?"
      },
      "options": {
        "es": [
          "Plugins",
          "Multimodalidad",
          "Memoria",
          "Composer"
        ],
        "en": [
          "Plugins",
          "Multimodality",
          "Memory",
          "Composer"
        ],
        "val": [
          "Plugins",
          "Multimodalitat",
          "Memòria",
          "Composer"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La memoria es la función de ChatGPT que le permite recordar conversaciones anteriores y mantener contexto entre sesiones.",
        "en": "Memory is the ChatGPT feature that allows it to remember previous conversations and maintain context across sessions.",
        "val": "La memòria és la funció de ChatGPT que li permet recordar converses anteriors i mantindre context entre sessions."
      }
    },
    {
      "q": {
        "es": "Según los consejos de la lección, ¿qué se recomienda hacer si la primera respuesta de un asistente no es perfecta?",
        "en": "According to the lesson tips, what should you do if an assistant's first response is not perfect?",
        "val": "Segons els consells de la lliçó, què es recomana fer si la primera resposta d'un assistent no és perfecta?"
      },
      "options": {
        "es": [
          "Cambiar a otro asistente inmediatamente",
          "Pide que la mejore, iterando la conversación",
          "Reducir el prompt a una sola palabra",
          "Reiniciar el navegador"
        ],
        "en": [
          "Switch to another assistant immediately",
          "Ask it to improve it, iterating the conversation",
          "Reduce the prompt to a single word",
          "Restart the browser"
        ],
        "val": [
          "Canviar a un altre assistent immediatament",
          "Demana que la millore, iterant la conversa",
          "Reduir el prompt a una sola paraula",
          "Reiniciar el navegador"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Uno de los consejos es iterar: si la primera respuesta no es perfecta, pide que la mejore con instrucciones adicionales.",
        "en": "One of the tips is to iterate: if the first response is not perfect, ask it to improve with additional instructions.",
        "val": "Un dels consells és iterar: si la primera resposta no és perfecta, demana que la millore amb instruccions addicionals."
      }
    }
  ],
  "ecosistema/03-herramientas-codigo": [
    {
      "q": {
        "es": "¿Cuál es la diferencia principal de tipo entre GitHub Copilot y Cursor según la lección?",
        "en": "What is the main difference in type between GitHub Copilot and Cursor according to the lesson?",
        "val": "Quina és la diferència principal de tipus entre GitHub Copilot i Cursor segons la lliçó?"
      },
      "options": {
        "es": [
          "Copilot es un chatbot y Cursor es un editor",
          "Copilot es una extensión y Cursor es un editor con IA nativa",
          "Los dos son editores independientes",
          "Los dos son extensiones de VS Code"
        ],
        "en": [
          "Copilot is a chatbot and Cursor is an editor",
          "Copilot is an extension and Cursor is an editor with native AI",
          "Both are standalone editors",
          "Both are VS Code extensions"
        ],
        "val": [
          "Copilot és un xatbot i Cursor és un editor",
          "Copilot és una extensió i Cursor és un editor amb IA nativa",
          "Tots dos són editors independents",
          "Tots dos són extensions de VS Code"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Copilot funciona como extensión en editores existentes, mientras que Cursor es un editor independiente con IA integrada desde su núcleo.",
        "en": "Copilot works as an extension in existing editors, while Cursor is a standalone editor with AI integrated at its core.",
        "val": "Copilot funciona com a extensió en editors existents, mentre que Cursor és un editor independent amb IA integrada des del seu nucli."
      }
    },
    {
      "q": {
        "es": "¿Qué dice la lección sobre el futuro de la programación con IA?",
        "en": "What does the lesson say about the future of programming with AI?",
        "val": "Què diu la lliçó sobre el futur de la programació amb IA?"
      },
      "options": {
        "es": [
          "La IA reemplazará a todos los programadores",
          "La IA no va a reemplazar a los programadores, sino a cambiar cómo programan",
          "Los programadores solo escribirán prompts",
          "El código manual desaparecerá completamente"
        ],
        "en": [
          "AI will replace all programmers",
          "AI will not replace programmers, but change how they program",
          "Programmers will only write prompts",
          "Manual coding will disappear completely"
        ],
        "val": [
          "La IA reemplaçarà tots els programadors",
          "La IA no reemplaçarà els programadors, sinó que canviarà com programen",
          "Els programadors només escriuran prompts",
          "El codi manual desapareixerà completament"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección es claro: la IA va a cambiar cómo se programa, pero no va a reemplazar a los programadores, que serán más productivos.",
        "en": "The lesson is clear: AI will change how programming is done, but it will not replace programmers, who will be more productive.",
        "val": "La lliçó és clara: la IA canviarà com es programa, però no reemplaçarà els programadors, que seran més productius."
      }
    },
    {
      "q": {
        "es": "¿En qué casos la lección recomienda usar un chatbot general como Claude o ChatGPT para código?",
        "en": "In what cases does the lesson recommend using a general chatbot like Claude or ChatGPT for code?",
        "val": "En quins casos la lliçó recomana usar un xatbot general com Claude o ChatGPT per a codi?"
      },
      "options": {
        "es": [
          "Para autocompletado de código repetitivo",
          "Para aprendizaje, explicaciones y tareas puntuales",
          "Para cambios en múltiples archivos a la vez",
          "Para proyectos grandes con muchas dependencias"
        ],
        "en": [
          "For autocomplete of repetitive code",
          "For learning, explanations and one-off tasks",
          "For changes across multiple files at once",
          "For large projects with many dependencies"
        ],
        "val": [
          "Per a l'autocompleció de codi repetitiu",
          "Per a aprenentatge, explicacions i tasques puntuals",
          "Per a canvis en múltiples fitxers alhora",
          "Per a projectes grans amb moltes dependències"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los chatbots generales son ideales para aprender, obtener explicaciones de código y realizar tareas puntuales, no para integración profunda.",
        "en": "General chatbots are ideal for learning, getting code explanations and performing one-off tasks, not for deep integration.",
        "val": "Els xatbots generals són ideals per a aprendre, obtindre explicacions de codi i realitzar tasques puntuals, no per a integració profunda."
      }
    },
    {
      "q": {
        "es": "Según la tabla comparativa de la lección, ¿cuál es la principal ventaja de Cursor frente a Copilot?",
        "en": "According to the lesson comparison table, what is Cursor's main advantage over Copilot?",
        "val": "Segons la taula comparativa de la lliçó, quina és l'avantatge principal de Cursor enfront de Copilot?"
      },
      "options": {
        "es": [
          "Es más barato",
          "Tiene más lenguajes compatibles",
          "Ofrece una IA profunda e integrada como editor",
          "Es una extensión más ligera"
        ],
        "en": [
          "It is cheaper",
          "It supports more languages",
          "It offers deep integrated AI as an editor",
          "It is a lighter extension"
        ],
        "val": [
          "És més barat",
          "Admet més llenguatges",
          "Ofereix una IA profunda i integrada com a editor",
          "És una extensió més lleugera"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La tabla indica que la ventaja principal de Cursor es su IA profunda integrada como editor, a diferencia de Copilot que es una extensión de autocompletado.",
        "en": "The table indicates that Cursor's main advantage is its deep AI integrated as an editor, unlike Copilot which is an autocomplete extension.",
        "val": "La taula indica que l'avantatge principal de Cursor és la seua IA profunda integrada com a editor, a diferència de Copilot que és una extensió d'autocompleció."
      }
    }
  ],
  "ecosistema/04-generacion-imagenes": [
    {
      "q": {
        "es": "¿Qué hace que Stable Diffusion sea diferente de DALL-E y Midjourney según la lección?",
        "en": "What makes Stable Diffusion different from DALL-E and Midjourney according to the lesson?",
        "val": "Què fa que Stable Diffusion siga diferent de DALL-E i Midjourney segons la lliçó?"
      },
      "options": {
        "es": [
          "Es el más fácil de usar",
          "Es el más artístico",
          "Es gratuito, de código abierto y ejecutable localmente",
          "Está integrado en ChatGPT"
        ],
        "en": [
          "It is the easiest to use",
          "It is the most artistic",
          "It is free, open-source and can be run locally",
          "It is integrated into ChatGPT"
        ],
        "val": [
          "És el més fàcil d'usar",
          "És el més artístic",
          "És gratuït, de codi obert i executable localment",
          "Està integrat en ChatGPT"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Stable Diffusion se distingue por ser gratuito, de código abierto y ejecutable en el ordenador del usuario, aunque requiere hardware potente.",
        "en": "Stable Diffusion stands out for being free, open-source and runnable on the user's computer, although it requires powerful hardware.",
        "val": "Stable Diffusion destaca per ser gratuït, de codi obert i executable en l'ordinador de l'usuari, encara que requereix maquinari potent."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuáles son los cuatro elementos de la estructura básica de un buen prompt para imágenes?",
        "en": "According to the lesson, what are the four elements of the basic structure of a good prompt for images?",
        "val": "Segons la lliçó, quins són els quatre elements de l'estructura bàsica d'un bon prompt per a imatges?"
      },
      "options": {
        "es": [
          "Color, tamaño, formato y resolución",
          "Sujeto, estilo, detalles y calidad",
          "Palabra clave, descripción, contexto y resultado",
          "Texto, imagen, audio y vídeo"
        ],
        "en": [
          "Colour, size, format and resolution",
          "Subject, style, details and quality",
          "Keyword, description, context and outcome",
          "Text, image, audio and video"
        ],
        "val": [
          "Color, mida, format i resolució",
          "Subjecte, estil, detalls i qualitat",
          "Paraula clau, descripció, context i resultat",
          "Text, imatge, àudio i vídeo"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La estructura básica incluye sujeto (qué aparece), estilo (qué aspecto tiene), detalles (elementos a incluir) y calidad (nivel de detalle).",
        "en": "The basic structure includes subject (what appears), style (what it looks like), details (elements to include) and quality (level of detail).",
        "val": "L'estructura bàsica inclou subjecte (què apareix), estil (quina aparença té), detalls (elements a incloure) i qualitat (nivell de detall)."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la limitación de DALL-E 3 en comparación con Midjourney según la tabla comparativa?",
        "en": "What is the limitation of DALL-E 3 compared to Midjourney according to the comparison table?",
        "val": "Quina és la limitació de DALL-E 3 en comparació amb Midjourney segons la taula comparativa?"
      },
      "options": {
        "es": [
          "No genera imágenes realistas",
          "Su calidad artística es menor",
          "No permite variaciones",
          "Solo funciona en escritorio"
        ],
        "en": [
          "It does not generate realistic images",
          "Its artistic quality is lower",
          "It does not allow variations",
          "It only works on desktop"
        ],
        "val": [
          "No genera imatges realistes",
          "La seua qualitat artística és menor",
          "No permet variacions",
          "Només funciona en escriptori"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Según la tabla, DALL-E 3 tiene 4 estrellas de calidad artística frente a las 5 de Midjourney, aunque gana en facilidad de uso.",
        "en": "According to the table, DALL-E 3 has 4 stars for artistic quality compared to Midjourney's 5, although it wins on ease of use.",
        "val": "Segons la taula, DALL-E 3 té 4 estrelles de qualitat artística enfront de les 5 de Midjourney, encara que guanya en facilitat d'ús."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son algunas de las limitaciones actuales de la generación de imágenes con IA que menciona la lección?",
        "en": "What are some current limitations of AI image generation mentioned in the lesson?",
        "val": "Quines són algunes de les limitacions actuals de la generació d'imatges amb IA que menciona la lliçó?"
      },
      "options": {
        "es": [
          "Solo genera imágenes en blanco y negro",
          "No puede crear más de una imagen por día",
          "Dificultades con el texto visible, manos incorrectas y consistencia entre imágenes",
          "No acepta descripciones en español"
        ],
        "en": [
          "It only generates black and white images",
          "It cannot create more than one image per day",
          "Difficulties with visible text, incorrect hands and consistency between images",
          "It does not accept descriptions in Spanish"
        ],
        "val": [
          "Només genera imatges en blanc i negre",
          "No pot crear més d'una imatge al dia",
          "Dificultats amb el text visible, mans incorrectes i consistència entre imatges",
          "No accepta descripcions en valencià"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección señala cuatro limitaciones: texto en imágenes, manos y dedos incorrectos, inconsistencia entre múltiples imágenes y derechos de autor.",
        "en": "The lesson points out four limitations: text in images, incorrect hands and fingers, inconsistency across multiple images and copyright.",
        "val": "La lliçó assenyala quatre limitacions: text en imatges, mans i dits incorrectes, inconsistència entre múltiples imatges i drets d'autor."
      }
    }
  ],
  "ecosistema/05-audio-video": [
    {
      "q": {
        "es": "¿Qué capacidades principales ofrece ElevenLabs según la lección?",
        "en": "What main capabilities does ElevenLabs offer according to the lesson?",
        "val": "Quines capacitats principals ofereix ElevenLabs segons la lliçó?"
      },
      "options": {
        "es": [
          "Edición de vídeo y generación de avatares",
          "Síntesis de voz ultrarrealista, clonación de voz y soporte multiidioma",
          "Generación de música orquestal",
          "Creación de subtítulos automáticos"
        ],
        "en": [
          "Video editing and avatar generation",
          "Ultra-realistic voice synthesis, voice cloning and multi-language support",
          "Orchestral music generation",
          "Automatic subtitle creation"
        ],
        "val": [
          "Edició de vídeo i generació d'avatars",
          "Síntesi de veu ultrarrealista, clonació de veu i suport multillengua",
          "Generació de música orquestral",
          "Creació de subtítols automàtics"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "ElevenLabs crea voces ultrarrealistas con clonación de voz, soporte multiidioma y ajuste de emociones, siendo la mejor síntesis de voz del mercado.",
        "en": "ElevenLabs creates ultra-realistic voices with voice cloning, multi-language support and emotion adjustment, being the best voice synthesis on the market.",
        "val": "ElevenLabs crea veus ultrarrealistes amb clonació de veu, suport multillengua i ajust d'emocions, sent la millor síntesi de veu del mercat."
      }
    },
    {
      "q": {
        "es": "Según el flujo típico de creación de un podcast descrito en la lección, ¿qué paso sigue después de generar la voz con ElevenLabs?",
        "en": "According to the typical podcast creation workflow described in the lesson, what step follows after generating the voice with ElevenLabs?",
        "val": "Segons el flux típic de creació d'un podcast descrit a la lliçó, quin pas segueix després de generar la veu amb ElevenLabs?"
      },
      "options": {
        "es": [
          "Escribir el guion",
          "Añadir música de fondo con Soundraw",
          "Exportar directamente a YouTube",
          "Generar clips con Runway"
        ],
        "en": [
          "Write the script",
          "Add background music with Soundraw",
          "Export directly to YouTube",
          "Generate clips with Runway"
        ],
        "val": [
          "Escriure el guió",
          "Afegir música de fons amb Soundraw",
          "Exportar directament a YouTube",
          "Generar clips amb Runway"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El flujo descrito es: escribir el guion, generar la voz con ElevenLabs, añadir música de fondo con Soundraw y editar con Audacity o Adobe Audition.",
        "en": "The described workflow is: write the script, generate the voice with ElevenLabs, add background music with Soundraw, and edit with Audacity or Adobe Audition.",
        "val": "El flux descrit és: escriure el guió, generar la veu amb ElevenLabs, afegir música de fons amb Soundraw i editar amb Audacity o Adobe Audition."
      }
    },
    {
      "q": {
        "es": "¿Qué función de Runway permite controlar el movimiento en áreas específicas de un vídeo?",
        "en": "What Runway feature allows controlling movement in specific areas of a video?",
        "val": "Quina funció de Runway permet controlar el moviment en àrees específiques d'un vídeo?"
      },
      "options": {
        "es": [
          "Gen-3 Alpha",
          "Motion Brush",
          "Cámara lenta",
          "Composición"
        ],
        "en": [
          "Gen-3 Alpha",
          "Motion Brush",
          "Slow motion",
          "Compositing"
        ],
        "val": [
          "Gen-3 Alpha",
          "Motion Brush",
          "Càmera lenta",
          "Composició"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Motion Brush es la herramienta de Runway que permite controlar el movimiento en áreas específicas de un vídeo.",
        "en": "Motion Brush is the Runway tool that allows controlling movement in specific areas of a video.",
        "val": "Motion Brush és l'eina de Runway que permet controlar el moviment en àrees específiques d'un vídeo."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son las consideraciones éticas que la lección señala al usar IA para audio y vídeo?",
        "en": "What ethical considerations does the lesson point out when using AI for audio and video?",
        "val": "Quines consideracions ètiques assenyala la lliçó en usar IA per a àudio i vídeo?"
      },
      "options": {
        "es": [
          "Usar clonación de voz siempre sin restricciones",
          "No indicar nunca que el contenido es generado por IA",
          "No usar deepfakes para engañar, ser transparente y verificar derechos de uso",
          "Usar la IA solo con fines personales"
        ],
        "en": [
          "Use voice cloning always without restrictions",
          "Never indicate that content is generated by AI",
          "Do not use deepfakes to deceive, be transparent and verify usage rights",
          "Use AI only for personal purposes"
        ],
        "val": [
          "Usar la clonació de veu sempre sense restriccions",
          "No indicar mai que el contingut és generat per IA",
          "No usar deepfakes per a enganyar, ser transparent i verificar els drets d'ús",
          "Usar la IA només amb fins personals"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección señala cuatro puntos éticos: no usar deepfakes para engañar, indicar cuando el contenido es generado por IA, verificar derechos para uso comercial y tener en cuenta las limitaciones.",
        "en": "The lesson points out four ethical issues: do not use deepfakes to deceive, indicate when content is AI-generated, verify rights for commercial use and consider the limitations.",
        "val": "La lliçó assenyala quatre punts ètics: no usar deepfakes per a enganyar, indicar quan el contingut és generat per IA, verificar drets per a ús comercial i tindre en compte les limitacions."
      }
    }
  ],
  "ecosistema/06-plataformas-nocode": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es la principal ventaja de Make frente a Zapier?",
        "en": "According to the lesson, what is Make's main advantage over Zapier?",
        "val": "Segons la lliçó, quina és l'avantatge principal de Make enfront de Zapier?"
      },
      "options": {
        "es": [
          "Tiene más aplicaciones disponibles",
          "Es más fácil de usar para principiantes",
          "Ofrece más control visual, lógica compleja y más operaciones por el precio",
          "No requiere ninguna configuración"
        ],
        "en": [
          "It has more applications available",
          "It is easier to use for beginners",
          "It offers more visual control, complex logic and more operations for the price",
          "It requires no configuration"
        ],
        "val": [
          "Té més aplicacions disponibles",
          "És més fàcil d'usar per a principiants",
          "Ofereix més control visual, lògica complexa i més operacions pel preu",
          "No requereix cap configuració"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Make ofrece interfaz visual con lógica compleja, condicionales y bucles, además de un plan gratuito generoso con 1000 operaciones al mes.",
        "en": "Make offers a visual interface with complex logic, conditionals and loops, plus a generous free plan with 1000 operations per month.",
        "val": "Make ofereix interfície visual amb lògica complexa, condicionals i bucles, a més d'un pla gratuït generós amb 1000 operacions al mes."
      }
    },
    {
      "q": {
        "es": "¿Qué es lo que n8n ofrece según la tabla comparativa de plataformas?",
        "en": "What does n8n offer according to the platforms comparison table?",
        "val": "Què ofereix n8n segons la taula comparativa de plataformes?"
      },
      "options": {
        "es": [
          "Integración nativa con Microsoft",
          "Automatización de navegador",
          "Código abierto y autoalojado, gratuito",
          "La mayor cantidad de integraciones"
        ],
        "en": [
          "Native Microsoft integration",
          "Browser automation",
          "Open source and self-hosted, free",
          "The largest number of integrations"
        ],
        "val": [
          "Integració nativa amb Microsoft",
          "Automatització de navegador",
          "Codi obert i autoallotjat, gratuït",
          "La major quantitat d'integracions"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "n8n se destaca por ser de código abierto y autoalojado, gratuito si lo configuras en tu propio servidor, ideal para quien quiere control total de los datos.",
        "en": "n8n stands out for being open source and self-hosted, free if you set it up on your own server, ideal for those who want full control of their data.",
        "val": "n8n destaca per ser de codi obert i autoallotjat, gratuït si el configures en el teu propi servidor, ideal per a qui vol control total de les seues dades."
      }
    },
    {
      "q": {
        "es": "¿Cuál es el primer consejo que da la lección para empezar con plataformas no-code?",
        "en": "What is the first tip the lesson gives for getting started with no-code platforms?",
        "val": "Quin és el primer consell que dóna la lliçó per a començar amb plataformes no-code?"
      },
      "options": {
        "es": [
          "Usar plantillas existentes",
          "Empieza con una automatización simple antes de las complejas",
          "Documenta todo desde el primer día",
          "Activa todas las automatizaciones a la vez"
        ],
        "en": [
          "Use existing templates",
          "Start with a simple automation before complex ones",
          "Document everything from day one",
          "Activate all automations at once"
        ],
        "val": [
          "Usa plantilles existents",
          "Comença amb una automatització simple abans de les complexes",
          "Documenta tot des del primer dia",
          "Activa totes les automatitzacions alhora"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El primer consejo es empezar simple: una automatización básica antes de pasar a las más complejas, para aprender el funcionamiento paso a paso.",
        "en": "The first tip is to start simple: one basic automation before moving on to more complex ones, to learn how it works step by step.",
        "val": "El primer consell és començar simple: una automatització bàsica abans de passar a les més complexes, per a aprendre el funcionament pas a pas."
      }
    },
    {
      "q": {
        "es": "Según el ejemplo práctico de la lección, ¿qué acciones ejecuta Make automáticamente al publicar un artículo en un blog?",
        "en": "According to the practical example in the lesson, what actions does Make execute automatically when publishing a blog post?",
        "val": "Segons l'exemple pràctic de la lliçó, quines accions executa Make automàticament en publicar un article en un blog?"
      },
      "options": {
        "es": [
          "Solo publica en Twitter",
          "Extrae título y resumen, genera publicación para Twitter e imagen para LinkedIn, y publica en ambas plataformas",
          "Envía un correo al autor y guarda una copia en Drive",
          "Actualiza la base de datos del blog"
        ],
        "en": [
          "Only publishes on Twitter",
          "Extracts title and summary, generates a Twitter post and LinkedIn image, and publishes on both platforms",
          "Sends an email to the author and saves a copy on Drive",
          "Updates the blog database"
        ],
        "val": [
          "Només publica en Twitter",
          "Extrau títol i resum, genera publicació per a Twitter i imatge per a LinkedIn, i publica en ambdues plataformes",
          "Envia un correu a l'autor i guarda una còpia a Drive",
          "Actualitza la base de dades del blog"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El ejemplo describe cinco pasos: trigger al publicar, extraer título y resumen, generar publicación para Twitter con IA, crear imagen para LinkedIn y publicar en ambas plataformas.",
        "en": "The example describes five steps: trigger on publish, extract title and summary, generate a Twitter post with AI, create an image for LinkedIn, and publish on both platforms.",
        "val": "L'exemple descriu cinc passos: trigger en publicar, extraure títol i resum, generar publicació per a Twitter amb IA, crear imatge per a LinkedIn i publicar en ambdues plataformes."
      }
    }
  ],
  "ecosistema/07-comparador-interactivo": [
    {
      "q": {
        "es": "¿Cuáles son los cinco criterios de comparación que propone la lección para elegir una herramienta?",
        "en": "What are the five comparison criteria the lesson proposes for choosing a tool?",
        "val": "Quins són els cinc criteris de comparació que proposa la lliçó per a triar una eina?"
      },
      "options": {
        "es": [
          "Velocidad, precio, soporte, idioma y actualizaciones",
          "Facilidad de uso, calidad de respuesta, velocidad, precio y personalización",
          "Popularidad, antigüedad, número de usuarios, precio y compatibilidad",
          "Diseño, rendimiento, seguridad, escalabilidad y coste"
        ],
        "en": [
          "Speed, price, support, language and updates",
          "Ease of use, response quality, speed, price and customisation",
          "Popularity, age, number of users, price and compatibility",
          "Design, performance, security, scalability and cost"
        ],
        "val": [
          "Velocitat, preu, suport, idioma i actualitzacions",
          "Facilitat d'ús, qualitat de resposta, velocitat, preu i personalització",
          "Popularitat, antiguitat, nombre d'usuaris, preu i compatibilitat",
          "Disseny, rendiment, seguretat, escalabilitat i cost"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección enumera cinco criterios: facilidad de uso, calidad de respuesta, velocidad, precio y personalización, cada uno con su propia pregunta guía.",
        "en": "The lesson lists five criteria: ease of use, response quality, speed, price and customisation, each with its own guiding question.",
        "val": "La lliçó enumera cinc criteris: facilitat d'ús, qualitat de resposta, velocitat, preu i personalització, cadascun amb la seua pròpia pregunta guia."
      }
    },
    {
      "q": {
        "es": "¿Qué error común al elegir herramientas señala la lección cuando alguien elige solo por ser la más barata?",
        "en": "What common mistake when choosing tools does the lesson highlight when someone picks only because it is the cheapest?",
        "val": "Quin error comú en triar eines assenyala la lliçó quan algú tria només per ser la més barata?"
      },
      "options": {
        "es": [
          "Que no tendrá todas las funciones",
          "Que el precio bajo no garantiza calidad, hay que considerar la relación calidad-precio",
          "Que no tiene versión gratuita",
          "Que solo funciona en un dispositivo"
        ],
        "en": [
          "That it will not have all the features",
          "That a low price does not guarantee quality, you must consider value for money",
          "That it has no free version",
          "That it only works on one device"
        ],
        "val": [
          "Que no tindrà totes les funcions",
          "Que el preu baix no garanteix qualitat, cal considerar la relació qualitat-preu",
          "Que no té versió gratuïta",
          "Que només funciona en un dispositiu"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección advierte que el precio bajo no garantiza calidad y que hay que considerar la relación calidad-precio antes de decidir.",
        "en": "The lesson warns that a low price does not guarantee quality and that value for money should be considered before deciding.",
        "val": "La lliçó adverteix que el preu baix no garanteix qualitat i que cal considerar la relació qualitat-preu abans de decidir."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por qué es importante considerar la curva de aprendizaje de una herramienta?",
        "en": "According to the lesson, why is it important to consider a tool's learning curve?",
        "val": "Segons la lliçó, per què és important considerar la corba d'aprenentatge d'una eina?"
      },
      "options": {
        "es": [
          "Porque las herramientas fáciles siempre son mejores",
          "Porque una herramienta potente pero difícil puede no valer la pena si no tienes tiempo para aprenderla",
          "Porque las herramientas difíciles tienen más funciones",
          "Porque la curva de aprendizaje determina el precio"
        ],
        "en": [
          "Because easy tools are always better",
          "Because a powerful but hard-to-use tool may not be worth it if you do not have time to learn it",
          "Because difficult tools have more features",
          "Because the learning curve determines the price"
        ],
        "val": [
          "Perquè les eines fàcils sempre són millors",
          "Perquè una eina potent però difícil pot no valdre la pena si no tens temps per a aprendre-la",
          "Perquè les eines difícils tenen més funcions",
          "Perquè la corba d'aprenentatge determina el preu"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección indica que ignorar la curva de aprendizaje es un error común, ya que una herramienta potente pero difícil de usar puede no ser rentable sin tiempo para dominarla.",
        "en": "The lesson indicates that ignoring the learning curve is a common mistake, as a powerful but hard-to-use tool may not be worthwhile without time to master it.",
        "val": "La lliçó indica que ignorar la corba d'aprenentatge és un error comú, ja que una eina potent però difícil d'usar pot no ser rendible sense temps per a dominar-la."
      }
    },
    {
      "q": {
        "es": "¿Qué aconseja la lección sobre la búsqueda de la herramienta ideal?",
        "en": "What does the lesson advise about searching for the ideal tool?",
        "val": "Què aconsella la lliçó sobre la recerca de l'eina ideal?"
      },
      "options": {
        "es": [
          "Busca siempre la herramienta perfecta y no aceptes menos",
          "Busca la herramienta suficientemente buena para tus necesidades actuales",
          "Espera a que salga la mejor versión antes de decidir",
          "Usa siempre la herramienta más popular del mercado"
        ],
        "en": [
          "Always look for the perfect tool and do not accept less",
          "Look for the tool that is good enough for your current needs",
          "Wait for the best version before deciding",
          "Always use the most popular tool on the market"
        ],
        "val": [
          "Busca sempre l'eina perfecta i no acceptes menys",
          "Busca l'eina suficientment bona per a les teues necessitats actuals",
          "Espera a que ixca la millor versió abans de decidir",
          "Usa sempre l'eina més popular del mercat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección aconseja no buscar la herramienta perfecta, sino la suficientemente buena para las necesidades actuales, ya que siempre se puede cambiar después.",
        "en": "The lesson advises not to look for the perfect tool, but for the good enough one for current needs, since you can always change later.",
        "val": "La lliçó aconsella no buscar l'eina perfecta, sinó la suficientment bona per a les necessitats actuals, ja que sempre es pot canviar després."
      }
    }
  ],
  "ecosistema/08-arbol-decision": [
    {
      "q": {
        "es": "¿Cuál es el primer paso que describe la lección para usar el árbol de decisión?",
        "en": "What is the first step the lesson describes for using the decision tree?",
        "val": "Quin és el primer pas que descriu la lliçó per a usar l'arbre de decisió?"
      },
      "options": {
        "es": [
          "Explorar todas las herramientas disponibles",
          "Leer la primera pregunta y seleccionar la opción que mejor se adapte",
          "Consultar las reseñas en internet",
          "Pedir opinión a un experto"
        ],
        "en": [
          "Explore all available tools",
          "Read the first question and select the option that best fits you",
          "Check reviews online",
          "Ask an expert for their opinion"
        ],
        "val": [
          "Explorar totes les eines disponibles",
          "Llegir la primera pregunta i seleccionar l'opció que millor s'adapte",
          "Consultar les ressenyes a internet",
          "Demanar opinió a un expert"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El proceso comienza leyendo la primera pregunta, seleccionando la opción más adecuada, siguiendo la rama y llegando a una recomendación.",
        "en": "The process begins by reading the first question, selecting the most suitable option, following the branch and reaching a recommendation.",
        "val": "El procés comença llegint la primera pregunta, seleccionant l'opció més adequada, seguint la branca i arribant a una recomanació."
      }
    },
    {
      "q": {
        "es": "¿Qué aspectos NO considera el árbol de decisión según la lección?",
        "en": "What aspects does the decision tree NOT consider according to the lesson?",
        "val": "Quins aspectes NO considera l'arbre de decisió segons la lliçó?"
      },
      "options": {
        "es": [
          "El tipo de tarea que necesitas hacer",
          "Tu nivel técnico, presupuesto exacto, preferencias de interfaz y compatibilidad con herramientas existentes",
          "La categoría de herramienta que buscas",
          "Si necesitas una herramienta gratuita o de pago"
        ],
        "en": [
          "The type of task you need to do",
          "Your technical level, exact budget, interface preferences and compatibility with existing tools",
          "The category of tool you are looking for",
          "Whether you need a free or paid tool"
        ],
        "val": [
          "El tipus de tasca que necessites fer",
          "El teu nivell tècnic, pressupost exacte, preferències d'interfície i compatibilitat amb eines existents",
          "La categoria d'eina que busques",
          "Si necessites una eina gratuïta o de pagament"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección lista cuatro cosas que el árbol no cubre: nivel técnico específico, presupuesto exacto, preferencias personales de interfaz y compatibilidad con herramientas que ya se usan.",
        "en": "The lesson lists four things the tree does not cover: specific technical level, exact budget, personal interface preferences and compatibility with tools already in use.",
        "val": "La lliçó llista quatre coses que l'arbre no cobreix: nivell tècnic específic, pressupost exacte, preferències personals d'interfície i compatibilitat amb eines que ja s'usen."
      }
    },
    {
      "q": {
        "es": "Según los consejos finales de la lección, ¿cuál de estas afirmaciones es correcta?",
        "en": "According to the final tips in the lesson, which of these statements is correct?",
        "val": "Segons els consells finals de la lliçó, quin d'aquestes afirmacions és correcta?"
      },
      "options": {
        "es": [
          "Todas las herramientas son iguales y no importa cuál elijas",
          "Empieza con una herramienta y domínala antes de explorar otras",
          "La IA no cambiará en el futuro, así que puedes quedarte con la primera elección",
          "Debes usar todas las herramientas recomendadas a la vez"
        ],
        "en": [
          "All tools are the same and it does not matter which one you choose",
          "Start with one tool and master it before exploring others",
          "AI will not change in the future, so you can stick with your first choice",
          "You must use all recommended tools at once"
        ],
        "val": [
          "Totes les eines són iguals i no importa quina tries",
          "Comença amb una eina i domina-la abans d'explorar les altres",
          "La IA no canviarà en el futur, així que pots quedar-te amb la primera elecció",
          "Has d'usar totes les eines recomanades alhora"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Uno de los consejos finales es empezar con una herramienta y dominarla antes de explorar otras, porque no hay herramienta perfecta y la IA cambia rápido.",
        "en": "One of the final tips is to start with one tool and master it before exploring others, because there is no perfect tool and AI changes fast.",
        "val": "Un dels consells finals és començar amb una eina i dominar-la abans d'explorar les altres, perquè no hi ha eina perfecta i la IA canvia ràpid."
      }
    },
    {
      "q": {
        "es": "Según el resumen del bloque, ¿qué tipo de herramientas interactivas ofrece Atlas IA para ayudar a elegir?",
        "en": "According to the block summary, what type of interactive tools does Atlas IA offer to help choose?",
        "val": "Segons el resum del bloc, quin tipus d'eines interactives ofereix Atlas IA per a ajudar a triar?"
      },
      "options": {
        "es": [
          "Un chatbot y una calculadora",
          "Un comparador de herramientas y un árbol de decisión",
          "Un motor de búsqueda y un generador de prompts",
          "Un simulador de tokens y un editor de código"
        ],
        "en": [
          "A chatbot and a calculator",
          "A tool comparator and a decision tree",
          "A search engine and a prompt generator",
          "A token simulator and a code editor"
        ],
        "val": [
          "Un xatbot i una calculadora",
          "Un comparador d'eines i un arbre de decisió",
          "Un motor de cerca i un generador de prompts",
          "Un simulador de tokens i un editor de codi"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen del bloque concluye que Atlas IA ofrece herramientas interactivas para comparar herramientas y decidir cuál se adapta mejor a cada persona.",
        "en": "The block summary concludes that Atlas IA offers interactive tools to compare tools and decide which one best fits each person.",
        "val": "El resum del bloc conclou que Atlas IA ofereix eines interactives per a comparar eines i decidir quina s'adapta millor a cada persona."
      }
    }
  ],
  "prompting/01-que-es-prompting": [
    {
      "q": {
        "es": "Segun la leccion, que principio fundamental rige la ingenieria de prompt?",
        "en": "According to the lesson, what fundamental principle governs prompt engineering?",
        "val": "Segons la lliço, quin principi fonamental regeix l'enginyeria de prompt?"
      },
      "options": {
        "es": [
          "Los prompts mas largos siempre dan mejores respuestas",
          "La basura entra, la basura sale: si tu prompt es vago, la respuesta sera vaga",
          "La IA siempre interpretara tu intencion correctamente",
          "No importa como escribas el prompt, el resultado sera el mismo"
        ],
        "en": [
          "Longer prompts always produce better responses",
          "Garbage in, garbage out: if your prompt is vague, the response will be vague",
          "AI will always interpret your intent correctly",
          "It does not matter how you write the prompt, the result will be the same"
        ],
        "val": [
          "Els prompts més llargs sempre donen millors respostes",
          "Escombraries entren, escombraries eixen: si el teu prompt és vague, la resposta serà vaga",
          "La IA sempre interpretarà la teua intenció correctament",
          "No importa com escrigues el prompt, el resultat serà el mateix"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El principio basura entra, basura sale significa que la calidad de la respuesta depende directamente de la calidad de lo que le pides a la IA.",
        "en": "The garbage in, garbage out principle means that the quality of the response depends directly on the quality of what you ask the AI.",
        "val": "El principi escombraries entren, escombraries eixen significa que la qualitat de la resposta depén directament de la qualitat del que li demanes a la IA."
      }
    },
    {
      "q": {
        "es": "Por que es importante aprender prompting segun la leccion?",
        "en": "Why is it important to learn prompting according to the lesson?",
        "val": "Per què és important aprendre prompting segons la lliço?"
      },
      "options": {
        "es": [
          "Solo es importante para programadores profesionales",
          "Multiplica tu productividad, diferencia resultados y es transferible entre modelos",
          "Permite reemplazar completamente el criterio humano",
          "Solo es util para crear contenido artistico"
        ],
        "en": [
          "It is only important for professional programmers",
          "It multiplies your productivity, separates useful results and is transferable across models",
          "It allows completely replacing human judgement",
          "It is only useful for creating artistic content"
        ],
        "val": [
          "Només és important per a programadors professionals",
          "Multiplica la teua productivitat, diferencia resultats útils i és transferible entre models",
          "Permet reemplaçar completament el criteri humà",
          "Només és útil per a crear contingut artístic"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion enumera cinco razones: multiplica la productividad, diferencia resultados, ahorra tiempo, aumenta la precision y es transferible entre modelos.",
        "en": "The lesson lists five reasons: it multiplies productivity, separates results, saves time, increases accuracy and is transferable across models.",
        "val": "La lliço enumera cinc raons: multiplica la productivitat, diferencia resultats, estalvia temps, augmenta la precisió i és transferible entre models."
      }
    },
    {
      "q": {
        "es": "Que afirma la leccion sobre el prompting y la programacion?",
        "en": "What does the lesson say about prompting and programming?",
        "val": "Què afirma la lliço sobre el prompting i la programació?"
      },
      "options": {
        "es": [
          "Es necesario saber programar para escribir buenos prompts",
          "El prompting es una habilidad de comunicacion, no tecnica",
          "Solo los ingenieros pueden dominar el prompting",
          "Se requieren conocimientos avanzados de Python"
        ],
        "en": [
          "You need to know how to program to write good prompts",
          "Prompting is a communication skill, not a technical one",
          "Only engineers can master prompting",
          "Advanced Python knowledge is required"
        ],
        "val": [
          "Cal saber programar per a escriure bons prompts",
          "El prompting és una habilitat de comunicació, no tècnica",
          "Només els enginyers poden dominar el prompting",
          "Es requereixen coneixements avançats de Python"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion afirma explicitamente que no necesitas saber programar para ser bueno en prompting, ya que es una habilidad de comunicacion.",
        "en": "The lesson explicitly states that you do not need to know how to program to be good at prompting, as it is a communication skill.",
        "val": "La lliço afirma explícitament que no necessites saber programar per a ser bo en prompting, ja que és una habilitat de comunicació."
      }
    },
    {
      "q": {
        "es": "Cual de estas afirmaciones es un mito comun sobre el prompting?",
        "en": "Which of these statements is a common myth about prompting?",
        "val": "Quina d'aquestes afirmacions és un mite comú sobre el prompting?"
      },
      "options": {
        "es": [
          "El prompting requiere practica y conocimiento de tecnicas",
          "El prompting solo sirve para tareas simples",
          "Aunque los modelos mejoren, comunicarse eficazmente con ellos siempre sera valioso",
          "La diferencia entre un prompt basico y uno excelente marca resultados muy distintos"
        ],
        "en": [
          "Prompting requires practice and knowledge of techniques",
          "Prompting is only useful for simple tasks",
          "Even if models improve, communicating effectively with them will always be valuable",
          "The difference between a basic and an excellent prompt produces very different results"
        ],
        "val": [
          "El prompting requereix pràctica i coneixement de tècniques",
          "El prompting només serveix per a tasques simples",
          "Encara que els models milloren, comunicar-se eficaçment amb ells sempre serà valuós",
          "La diferència entre un prompt bàsic i un d'excel·lent marca resultats molt diferents"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La leccion destaca como mito la creencia de que los modelos mejoraran y el prompting no hara falta. Aunque mejoren, saber comunicarse con la IA siempre sera valioso.",
        "en": "The lesson highlights as a myth the belief that models will improve and prompting will no longer be needed. Even if they improve, knowing how to communicate with AI will always be valuable.",
        "val": "La lliço destaca com a mite la creença que els models milloren i el prompting no farà falta. Encara que milloren, saber comunicar-se amb la IA sempre serà valuós."
      }
    }
  ],
  "prompting/02-anatomia-prompt": [
    {
      "q": {
        "es": "Cuantos elementos clave componen un prompt efectivo segun la leccion?",
        "en": "How many key elements make up an effective prompt according to the lesson?",
        "val": "Quants elements clau componen un prompt efectiu segons la lliço?"
      },
      "options": {
        "es": [
          "Cuatro: rol, contexto, tarea y formato",
          "Cinco: rol, contexto, tarea, formato y restricciones",
          "Seis: rol, contexto, tarea, formato, restricciones y ejemplos",
          "Siete: rol, contexto, tarea, formato, restricciones, ejemplos y paso a paso"
        ],
        "en": [
          "Four: role, context, task and format",
          "Five: role, context, task, format and constraints",
          "Six: role, context, task, format, constraints and examples",
          "Seven: role, context, task, format, constraints, examples and step by step"
        ],
        "val": [
          "Quatre: rol, context, tasca i format",
          "Cinc: rol, context, tasca, format i restriccions",
          "Sis: rol, context, tasca, format, restriccions i exemples",
          "Set: rol, context, tasca, format, restriccions, exemples i pas a pas"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La leccion presenta siete elementos clave: rol, contexto, tarea especifica, formato de salida, restricciones, ejemplos (few-shot) y paso a paso.",
        "en": "The lesson presents seven key elements: role, context, specific task, output format, constraints, examples (few-shot) and step by step.",
        "val": "La lliço presenta set elements clau: rol, context, tasca específica, format d'eixida, restriccions, exemples (few-shot) i pas a pas."
      }
    },
    {
      "q": {
        "es": "Para que sirve asignar un rol a la IA en un prompt?",
        "en": "What is the purpose of assigning a role to the AI in a prompt?",
        "val": "Per a què serveix assignar un rol a la IA en un prompt?"
      },
      "options": {
        "es": [
          "Para que la IA genere mas texto del necesario",
          "Para establecer el tono, la profundidad y el enfoque de la respuesta",
          "Para que la IA responda mas rapido",
          "Para evitar que la IA cometa errores"
        ],
        "en": [
          "To make the AI generate more text than needed",
          "To set the tone, depth and focus of the response",
          "To make the AI respond faster",
          "To prevent the AI from making mistakes"
        ],
        "val": [
          "Perquè la IA genere més text del necessari",
          "Per a establir el to, la profunditat i l'enfocament de la resposta",
          "Perquè la IA responga més ràpid",
          "Per a evitar que la IA cometa errors"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Segun la leccion, decirle a la IA quien es establece el tono, la profundidad y el enfoque de la respuesta.",
        "en": "According to the lesson, telling the AI who it is sets the tone, depth and focus of the response.",
        "val": "Segons la lliço, dir-li a la IA qui és estableix el to, la profunditat i l'enfocament de la resposta."
      }
    },
    {
      "q": {
        "es": "Cual es el proposito de especificar el formato de salida en un prompt?",
        "en": "What is the purpose of specifying the output format in a prompt?",
        "val": "Quin és el propòsit d'especificar el format d'eixida en un prompt?"
      },
      "options": {
        "es": [
          "Para que la IA use menos tokens",
          "Para indicar como quieres la respuesta: lista, tabla, parrafos o codigo",
          "Para reducir el coste del uso de la IA",
          "Para que la IA genere mas ejemplos"
        ],
        "en": [
          "To make the AI use fewer tokens",
          "To indicate how you want the response: list, table, paragraphs or code",
          "To reduce the cost of using AI",
          "To make the AI generate more examples"
        ],
        "val": [
          "Perquè la IA use menys tokens",
          "Per a indicar com vols la resposta: llista, taula, paràgrafs o codi",
          "Per a reduir el cost de l'ús de la IA",
          "Perquè la IA genere més exemples"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El formato de salida indica como quieres que se estructure la respuesta, ya sea en lista, tabla, parrafos o codigo.",
        "en": "The output format indicates how you want the response to be structured, whether as a list, table, paragraphs or code.",
        "val": "El format d'eixida indica com vols que s'estructure la resposta, ja siga en llista, taula, paràgrafs o codi."
      }
    },
    {
      "q": {
        "es": "Cual de estos errores comunes evita la plantilla universal de la leccion?",
        "en": "Which of these common mistakes does the lesson's universal template help avoid?",
        "val": "Quin d'aquests errors comuns evita la plantilla universal de la lliço?"
      },
      "options": {
        "es": [
          "Escribir en un idioma diferente al de la IA",
          "Pedir todo a la vez sin estructurar el prompt en secciones",
          "Usar caracteres especiales en el prompt",
          "Escribir el prompt en minusculas"
        ],
        "en": [
          "Writing in a different language than the AI",
          "Asking for everything at once without structuring the prompt into sections",
          "Using special characters in the prompt",
          "Writing the prompt in lowercase"
        ],
        "val": [
          "Escriure en un idioma diferent al de la IA",
          "Demana-ho tot alhora sense estructurar el prompt en seccions",
          "Usar caràcters especials en el prompt",
          "Escriure el prompt en minúscules"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La plantilla universal estructura el prompt en secciones (rol, contexto, tarea, formato, restricciones), evitando pedir todo a la vez de forma desorganizada.",
        "en": "The universal template structures the prompt into sections (role, context, task, format, constraints), avoiding asking for everything at once in an unorganised way.",
        "val": "La plantilla universal estructura el prompt en seccions (rol, context, tasca, format, restriccions), evitant demanar-ho tot alhora de manera desorganitzada."
      }
    }
  ],
  "prompting/03-tecnicas-basicas": [
    {
      "q": {
        "es": "Cual es la diferencia principal entre zero-shot y few-shot prompting?",
        "en": "What is the main difference between zero-shot and few-shot prompting?",
        "val": "Quina és la diferència principal entre zero-shot i few-shot prompting?"
      },
      "options": {
        "es": [
          "Zero-shot usa ejemplos y few-shot no",
          "Zero-shot le pide a la IA sin darle ejemplos, y few-shot le da ejemplos antes de pedir la tarea",
          "Zero-shot es solo para texto y few-shot para imagenes",
          "No hay diferencia, son sinonimos"
        ],
        "en": [
          "Zero-shot uses examples and few-shot does not",
          "Zero-shot asks the AI without giving it examples, and few-shot gives it examples before the task",
          "Zero-shot is only for text and few-shot for images",
          "There is no difference, they are synonyms"
        ],
        "val": [
          "Zero-shot usa exemples i few-shot no",
          "Zero-shot demana a la IA sense donar-li exemples, i few-shot li dona exemples abans de la tasca",
          "Zero-shot és només per a text i few-shot per a imatges",
          "No hi ha diferència, són sinònims"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El zero-shot le pide a la IA que haga algo sin darle ejemplos, mientras que el few-shot le proporciona ejemplos del resultado esperado antes de la tarea real.",
        "en": "Zero-shot asks the AI to do something without giving it examples, while few-shot provides examples of the expected result before the real task.",
        "val": "El zero-shot demana a la IA que faça alguna cosa sense donar-li exemples, mentre que el few-shot li proporciona exemples del resultat esperat abans de la tasca real."
      }
    },
    {
      "q": {
        "es": "Segun la leccion, cuantos ejemplos se recomienda usar en few-shot prompting?",
        "en": "According to the lesson, how many examples are recommended in few-shot prompting?",
        "val": "Segons la lliço, quants exemples es recomana usar en few-shot prompting?"
      },
      "options": {
        "es": [
          "Mas de 10 para asegurar el patron",
          "Solo 1 ejemplo siempre",
          "2 o 3 ejemplos; mas de 5 puede confundir al modelo y aumentar el coste",
          "Exactamente 5 en todos los casos"
        ],
        "en": [
          "More than 10 to ensure the pattern",
          "Only 1 example always",
          "2 or 3 examples; more than 5 can confuse the model and increase cost",
          "Exactly 5 in all cases"
        ],
        "val": [
          "Més de 10 per a assegurar el patró",
          "Només 1 exemple sempre",
          "2 o 3 exemples; més de 5 pot confondre el model i augmentar el cost",
          "Exactament 5 en tots els casos"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La leccion recomienda usar 2 o 3 ejemplos, ya que mas de 5 puede confundir al modelo y aumentar el coste.",
        "en": "The lesson recommends using 2 or 3 examples, as more than 5 can confuse the model and increase cost.",
        "val": "La lliço recomana usar 2 o 3 exemples, ja que més de 5 pot confondre el model i augmentar el cost."
      }
    },
    {
      "q": {
        "es": "Que proporciona el role prompting a la IA?",
        "en": "What does role prompting provide to the AI?",
        "val": "Què proporciona el role prompting a la IA?"
      },
      "options": {
        "es": [
          "Un limite estricto de palabras",
          "Un rol o personalidad especifica antes de hacerle la pregunta",
          "Una conexion a internet para buscar informacion",
          "Un conjunto de reglas matematicas"
        ],
        "en": [
          "A strict word limit",
          "A specific role or personality before asking the question",
          "An internet connection to search for information",
          "A set of mathematical rules"
        ],
        "val": [
          "Un límit estricte de paraules",
          "Un rol o personalitat específica abans de fer-li la pregunta",
          "Una connexió a internet per a buscar informació",
          "Un conjunt de regles matemàtiques"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El role prompting le asigna un rol o personalidad especifica a la IA antes de hacerle la pregunta, como un abogado o un profesor.",
        "en": "Role prompting assigns a specific role or personality to the AI before asking the question, such as a lawyer or a teacher.",
        "val": "El role prompting li assigna un rol o personalitat específica a la IA abans de fer-li la pregunta, com un advocat o un professor."
      }
    },
    {
      "q": {
        "es": "Para que tipo de problemas funciona mejor la tecnica Chain-of-Thought?",
        "en": "For what type of problems does Chain-of-Thought work best?",
        "val": "Per a quin tipus de problemes funciona millor la tècnica Chain-of-Thought?"
      },
      "options": {
        "es": [
          "Tareas de traduccion simples",
          "Problemas matematicos, logicos, analisis y decisiones complejas",
          "Generar contenido creativo como poemas",
          "Clasificar sentimientos en redes sociales"
        ],
        "en": [
          "Simple translation tasks",
          "Maths problems, logic, analysis and complex decisions",
          "Generating creative content such as poems",
          "Classifying sentiment on social media"
        ],
        "val": [
          "Tasques de traducció simples",
          "Problemes matemàtics, lògics, anàlisi i decisions complexes",
          "Generar contingut creatiu com a poemes",
          "Classificar sentiments en xarxes socials"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Chain-of-Thought funciona mejor para problemas matematicos, logicos, analisis y decisiones complejas, ya que pide a la IA que razone paso a paso.",
        "en": "Chain-of-Thought works best for maths problems, logic, analysis and complex decisions, as it asks the AI to reason step by step.",
        "val": "Chain-of-Thought funciona millor per a problemes matemàtics, lògics, anàlisi i decisions complexes, ja que demana a la IA que raone pas a pas."
      }
    }
  ],
  "prompting/04-tecnicas-avanzadas": [
    {
      "q": {
        "es": "Cual es la diferencia entre Chain-of-Thought y Tree-of-Thought?",
        "en": "What is the difference between Chain-of-Thought and Tree-of-Thought?",
        "val": "Quina és la diferència entre Chain-of-Thought i Tree-of-Thought?"
      },
      "options": {
        "es": [
          "Chain-of-Thought explora multiples soluciones, Tree-of-Thought razona paso a paso",
          "Tree-of-Thought es una extension de CoT que explora multiples lineas de razonamiento en paralelo y elige la mejor",
          "No hay diferencia tecnica entre ambas tecnicas",
          "Chain-of-Thought es para texto y Tree-of-Thought para imagenes"
        ],
        "en": [
          "Chain-of-Thought explores multiple solutions, Tree-of-Thought reasons step by step",
          "Tree-of-Thought is an extension of CoT that explores multiple lines of reasoning in parallel and chooses the best",
          "There is no technical difference between both techniques",
          "Chain-of-Thought is for text and Tree-of-Thought for images"
        ],
        "val": [
          "Chain-of-Thought explora múltiples solucions, Tree-of-Thought raona pas a pas",
          "Tree-of-Thought és una extensió de CoT que explora múltiples línies de raonament en paral·lel i tria la millor",
          "No hi ha diferència tècnica entre ambdues tècniques",
          "Chain-of-Thought és per a text i Tree-of-Thought per a imatges"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Tree-of-Thought es una extension de Chain-of-Thought donde la IA explora multiples lineas de razonamiento en paralelo y elige la mejor, ideal cuando hay multiples soluciones posibles.",
        "en": "Tree-of-Thought is an extension of Chain-of-Thought where the AI explores multiple lines of reasoning in parallel and chooses the best, ideal when there are multiple possible solutions.",
        "val": "Tree-of-Thought és una extensió de Chain-of-Thought on la IA explora múltiples línies de raonament en paral·lel i tria la millor, ideal quan hi ha múltiples solucions possibles."
      }
    },
    {
      "q": {
        "es": "Cuando es mas util usar la tecnica ReAct en lugar de Chain-of-Thought?",
        "en": "When is it more useful to use ReAct instead of Chain-of-Thought?",
        "val": "Quan és més útil usar la tècnica ReAct en lloc de Chain-of-Thought?"
      },
      "options": {
        "es": [
          "Cuando el problema requiere multiples pasos logicos",
          "Cuando necesitas informacion actualizada o verificar hechos",
          "Cuando quieres respuestas mas creativas",
          "Cuando trabajas con modelos de ChatGPT"
        ],
        "en": [
          "When the problem requires multiple logical steps",
          "When you need up-to-date information or need to verify facts",
          "When you want more creative responses",
          "When working with ChatGPT models"
        ],
        "val": [
          "Quan el problema requereix múltiples passos lògics",
          "Quan necessites informació actualitzada o verificar fets",
          "Quan vols respostes més creatives",
          "Quan treballes amb models de ChatGPT"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "ReAct combina razonamiento con la capacidad de buscar informacion o usar herramientas, por lo que es ideal cuando necesitas datos actualizados o verificar hechos.",
        "en": "ReAct combines reasoning with the ability to search for information or use tools, making it ideal when you need up-to-date data or to verify facts.",
        "val": "ReAct combina raonament amb la capacitat de buscar informació o usar eines, per la qual cosa és ideal quan necessites dades actualitzades o verificar fets."
      }
    },
    {
      "q": {
        "es": "Que tecnica avanzada le pide a la IA que compare dos o mas opciones y explique las diferencias?",
        "en": "Which advanced technique asks the AI to compare two or more options and explain the differences?",
        "val": "Quina tècnica avançada demana a la IA que compare dues o més opcions i explique les diferències?"
      },
      "options": {
        "es": [
          "Meta-prompt",
          "Prompt de contraste",
          "Prompt de restricciones creativas",
          "Prompt de multiples perspectivas"
        ],
        "en": [
          "Meta-prompt",
          "Contrast prompt",
          "Creative constraints prompt",
          "Multiple perspectives prompt"
        ],
        "val": [
          "Meta-prompt",
          "Prompt de contrast",
          "Prompt de restriccions creatives",
          "Prompt de múltiples perspectives"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El prompt de contraste pide a la IA que compare dos o mas opciones y explique las diferencias, como comparar Scratch con Python para ensenar programacion a ninos.",
        "en": "The contrast prompt asks the AI to compare two or more options and explain the differences, such as comparing Scratch with Python to teach programming to children.",
        "val": "El prompt de contrast demana a la IA que compare dues o més opcions i explique les diferències, com comparar Scratch amb Python per a ensenyar programació a xiquets."
      }
    },
    {
      "q": {
        "es": "Para que sirve un meta-prompt?",
        "en": "What is a meta-prompt used for?",
        "val": "Per a què serveix un meta-prompt?"
      },
      "options": {
        "es": [
          "Para generar respuestas mas cortas",
          "Para crear un prompt que genera otros prompts",
          "Para eliminar restricciones de la IA",
          "Para cambiar el idioma de la IA"
        ],
        "en": [
          "To generate shorter responses",
          "To create a prompt that generates other prompts",
          "To remove AI restrictions",
          "To change the language of the AI"
        ],
        "val": [
          "Per a generar respostes més curtes",
          "Per a crear un prompt que genera altres prompts",
          "Per a eliminar restriccions de la IA",
          "Per a canviar l'idioma de la IA"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Un meta-prompt es un prompt que genera prompts para ti, creando una herramienta de automatizacion del diseno de prompts.",
        "en": "A meta-prompt is a prompt that generates prompts for you, creating an automation tool for prompt design.",
        "val": "Un meta-prompt és un prompt que genera prompts per a tu, creant una eina d'automatització del disseny de prompts."
      }
    }
  ],
  "prompting/05-prompting-por-modelo": [
    {
      "q": {
        "es": "Como se describe la personalidad de ChatGPT en la leccion?",
        "en": "How is ChatGPT's personality described in the lesson?",
        "val": "Com es descriu la personalitat de ChatGPT a la lliço?"
      },
      "options": {
        "es": [
          "Analitico, matizado y cuidadoso",
          "Versatil, directo y generalista",
          "Conciso, factual e integrado con Google",
          "Creativo, informal y expresivo"
        ],
        "en": [
          "Analytical, nuanced and careful",
          "Versatile, direct and generalist",
          "Concise, factual and integrated with Google",
          "Creative, informal and expressive"
        ],
        "val": [
          "Analític, matisat i acurat",
          "Versàtil, directe i generalista",
          "Concís, factual i integrat amb Google",
          "Creatiu, informal i expressiu"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion describe a ChatGPT como versatil, directo y generalista, funcionando mejor con instrucciones claras y directas.",
        "en": "The lesson describes ChatGPT as versatile, direct and generalist, working best with clear, direct instructions.",
        "val": "La lliço descriu ChatGPT com a versàtil, directe i generalista, funcionant millor amb instruccions clares i directes."
      }
    },
    {
      "q": {
        "es": "Que tipo de preguntas funcionan mejor con Gemini segun la leccion?",
        "en": "What type of questions work best with Gemini according to the lesson?",
        "val": "Quin tipus de preguntes funcionen millor amb Gemini segons la lliço?"
      },
      "options": {
        "es": [
          "Preguntas que requieren opinion subjetiva",
          "Preguntas factuales y actualizadas con fuentes",
          "Preguntas muy largas sin estructura",
          "Preguntas que piden creatividad pura"
        ],
        "en": [
          "Questions requiring subjective opinion",
          "Factual, up-to-date questions with sources",
          "Very long questions without structure",
          "Questions asking for pure creativity"
        ],
        "val": [
          "Preguntes que requereixen opinió subjectiva",
          "Preguntes factuals i actualitzades amb fonts",
          "Preguntes molt llargues sense estructura",
          "Preguntes que demanen puresa creativa"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Gemini funciona mejor con preguntas factuals y actualizadas, ya que es un modelo factual y conciso con integracion en Google.",
        "en": "Gemini works best with factual, up-to-date questions, as it is a factual and concise model with Google integration.",
        "val": "Gemini funciona millor amb preguntes factuals i actualitzades, ja que és un model factual i concís amb integració en Google."
      }
    },
    {
      "q": {
        "es": "Cual es el patron de adaptacion recomendado para Claude?",
        "en": "What is the recommended adaptation pattern for Claude?",
        "val": "Quin és el patró d'adaptació recomanat per a Claude?"
      },
      "options": {
        "es": [
          "Instruccion clara, formato especifico, ejemplo opcional",
          "Contexto detallado, pregunta matuzada, solicitud de analisis",
          "Pregunta factual, formato de respuesta, solicitud de fuentes",
          "Tarea abierta, sin restricciones, sin formato"
        ],
        "en": [
          "Clear instruction, specific format, optional example",
          "Detailed context, nuanced question, request for analysis",
          "Factual question, response format, request for sources",
          "Open task, no constraints, no format"
        ],
        "val": [
          "Instrucció clara, format específic, exemple opcional",
          "Context detallat, pregunta matisada, sol·licitud d'anàlisi",
          "Pregunta factual, format de resposta, sol·licitud de fonts",
          "Tasca oberta, sense restriccions, sense format"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Para Claude, el patron recomendado es contexto detallado, pregunta matuzada y solicitud de analisis, ya que Claude es analitico y reflexivo.",
        "en": "For Claude, the recommended pattern is detailed context, nuanced question and request for analysis, as Claude is analytical and reflective.",
        "val": "Per a Claude, el patró recomanat és context detallat, pregunta matisada i sol·licitud d'anàlisi, ja que Claude és analític i reflexiu."
      }
    },
    {
      "q": {
        "es": "Segun la leccion, cual es la mejor estrategia para trabajar con diferentes modelos de IA?",
        "en": "According to the lesson, what is the best strategy for working with different AI models?",
        "val": "Segons la lliço, quina és la millor estratègia per a treballar amb diferents models d'IA?"
      },
      "options": {
        "es": [
          "Aprender a usar solo un modelo y dominarlo por completo",
          "Usar siempre el mismo prompt para todos los modelos",
          "Saber cual funciona mejor para cada tarea y adaptar tu prompt en consecuencia",
          "Elegir el modelo mas reciente siempre"
        ],
        "en": [
          "Learn to use only one model and master it completely",
          "Always use the same prompt for all models",
          "Know which works best for each task and adapt your prompt accordingly",
          "Choose the most recent model always"
        ],
        "val": [
          "Aprendre a usar només un model i dominar-lo completament",
          "Usar sempre el mateix prompt per a tots els models",
          "Saber quin funciona millor per a cada tasca i adaptar el teu prompt en conseqüència",
          "Tria el model més recient sempre"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La leccion afirma que la mejor estrategia no es aprender a usar un solo modelo, sino saber cual funciona mejor para cada tarea y adaptar el prompt.",
        "en": "The lesson states that the best strategy is not to learn to use a single model, but to know which one works best for each task and adapt the prompt.",
        "val": "La lliço afirma que la millor estratègia no és aprendre a usar un sol model, sinó saber quin funciona millor per a cada tasca i adaptar el prompt."
      }
    }
  ],
  "prompting/06-refinamiento-iterativo": [
    {
      "q": {
        "es": "Cuales son los pasos del ciclo de refinamiento de prompts?",
        "en": "What are the steps of the prompt refinement cycle?",
        "val": "Quins són els passos del cicle de refinament de prompts?"
      },
      "options": {
        "es": [
          "Leer, copiar, pegar y verificar",
          "Escribir prompt, probar, evaluar resultado, identificar mejora, ajustar prompt y repetir",
          "Pensar, redactar, enviar y olvidar",
          "Crear, guardar, compartir y archivar"
        ],
        "en": [
          "Read, copy, paste and verify",
          "Write prompt, test, evaluate result, identify improvement, adjust prompt and repeat",
          "Think, draft, send and forget",
          "Create, save, share and archive"
        ],
        "val": [
          "Llegir, copiar, pegar i verificar",
          "Escriure prompt, provar, avaluar resultat, identificar millora, ajustar prompt i repetir",
          "Pensar, redactar, enviar i oblidar",
          "Crear, guardar, compartir i arxivat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El ciclo de refinamiento consta de escribir el prompt, probarlo, evaluar el resultado, identificar que mejorar, ajustar el prompt y repetir hasta obtener el mejor resultado.",
        "en": "The refinement cycle consists of writing the prompt, testing it, evaluating the result, identifying what to improve, adjusting the prompt and repeating until the best result is obtained.",
        "val": "El cicle de refinament consta d'escriure el prompt, provar-lo, avaluar el resultat, identificar què millorar, ajustar el prompt i repetir fins a obtindre el millor resultat."
      }
    },
    {
      "q": {
        "es": "Como se puede usar la propia IA para mejorar los prompts segun la leccion?",
        "en": "How can the AI itself be used to improve prompts according to the lesson?",
        "val": "Com es pot usar la mateixa IA per a millorar els prompts segons la lliço?"
      },
      "options": {
        "es": [
          "No es posible usar la IA para mejorar prompts",
          "Pedirle a la IA que evalue su propia respuesta o tu prompt y te de sugerencias",
          "Reiniciar la conversacion con un nuevo prompt",
          "Cambiar de modelo de IA"
        ],
        "en": [
          "It is not possible to use AI to improve prompts",
          "Ask the AI to evaluate its own response or your prompt and give you suggestions",
          "Restart the conversation with a new prompt",
          "Switch to a different AI model"
        ],
        "val": [
          "No és possible usar la IA per a millorar prompts",
          "Demana a la IA que avalue la seua pròpia resposta o el teu prompt i et done suggeriments",
          "Reiniciar la conversa amb un nou prompt",
          "Canviar de model d'IA"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion describe la tecnica de pedirle a la IA que evalue su propia respuesta o tu prompt y te de sugerencias concretas de mejora.",
        "en": "The lesson describes the technique of asking the AI to evaluate its own response or your prompt and give you concrete improvement suggestions.",
        "val": "La lliço descriu la tècnica de demanar a la IA que avalue la seua pròpia resposta o el teu prompt i et done suggeriments concrets de millora."
      }
    },
    {
      "q": {
        "es": "Que ocurre si un prompt es demasiado vago segun el ejemplo de la leccion?",
        "en": "What happens if a prompt is too vague according to the lesson's example?",
        "val": "Què passa si un prompt és massa vague segons l'exemple de la lliço?"
      },
      "options": {
        "es": [
          "La IA responde con un error",
          "La IA genera consejos genericos que ya has oido mil veces",
          "La IA se niega a responder",
          "La IA redirige a otra herramienta"
        ],
        "en": [
          "The AI responds with an error",
          "The AI generates generic tips you have heard a thousand times before",
          "The AI refuses to respond",
          "The AI redirects to another tool"
        ],
        "val": [
          "La IA respon amb un error",
          "La IA genera consells genèrics que ja has sentit mil vegades",
          "La IA es nega a respondre",
          "La IA redirigeix a una altra eina"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Un prompt vago como Dame consejos para mejorar mi productividad genera consejos genericos poco utiles, por eso se recomienda iterar añadiendo contexto y especificidad.",
        "en": "A vague prompt such as Give me tips to improve my productivity generates generic, unhelpful advice, which is why it is recommended to iterate by adding context and specificity.",
        "val": "Un prompt vague com Dóna'm consells per a millorar la meua productivitat genera consells genèrics poc útils, per això es recomana iterar afegint context i especificitat."
      }
    },
    {
      "q": {
        "es": "Que verificacion final recomienda la leccion antes de considerar un prompt terminado?",
        "en": "What final verification does the lesson recommend before considering a prompt finished?",
        "val": "Quina verificació final recomana la lliço abans de considerar un prompt acabat?"
      },
      "options": {
        "es": [
          "Probar el prompt con diferentes modelos",
          "Revisar que tenga rol claro, contexto suficiente, tarea especifica, formato definido y restricciones adecuadas",
          "Compararlo con prompts de otros usuarios",
          "Asegurarse de que tenga mas de 100 palabras"
        ],
        "en": [
          "Test the prompt with different models",
          "Check that it has a clear role, sufficient context, specific task, defined format and appropriate constraints",
          "Compare it with other users' prompts",
          "Make sure it has more than 100 words"
        ],
        "val": [
          "Provar el prompt amb diferents models",
          "Comprovar que tinga rol clar, context suficient, tasca específica, format definit i restriccions adequades",
          "Comparar-lo amb prompts d'altres usuaris",
          "Assegurar-se que tinga més de 100 paraules"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lista de comprobacion incluye verificar rol claro, contexto suficiente, tarea especifica, formato de salida, restricciones, tono, extension y si necesita ejemplos.",
        "en": "The checklist includes verifying clear role, sufficient context, specific task, output format, constraints, tone, length and whether it needs examples.",
        "val": "La llista de comprovació inclou verificar rol clar, context suficient, tasca específica, format d'eixida, restriccions, to, extensió i si necessita exemples."
      }
    }
  ],
  "prompting/07-calculadora-prompts": [
    {
      "q": {
        "es": "Cuales son los cinco pasos para usar la calculadora de prompts segun la leccion?",
        "en": "What are the five steps to use the prompt calculator according to the lesson?",
        "val": "Quins són els cinc passos per a usar la calculadora de prompts segons la lliço?"
      },
      "options": {
        "es": [
          "Leer, escribir, revisar, enviar, evaluar",
          "Describir la tarea, elegir el rol, seleccionar el formato, anadir restricciones, copiar el prompt",
          "Investigar, planificar, ejecutar, medir, ajustar",
          "Pensar, redactar, corregir, publicar, compartir"
        ],
        "en": [
          "Read, write, review, send, evaluate",
          "Describe the task, choose the role, select the format, add constraints, copy the prompt",
          "Research, plan, execute, measure, adjust",
          "Think, draft, correct, publish, share"
        ],
        "val": [
          "Llegir, escriure, revisar, enviar, avaluar",
          "Descriure la tasca, triar el rol, seleccionar el format, afegir restriccions, copiar el prompt",
          "Investigar, planificar, executar, mesurar, ajustar",
          "Pensar, redactar, corregir, publicar, compartir"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La calculadora guia en cinco pasos: describir la tarea, elegir el rol, seleccionar el formato, anadir restricciones y copiar el prompt generado.",
        "en": "The calculator guides you through five steps: describe the task, choose the role, select the format, add constraints and copy the generated prompt.",
        "val": "La calculadora guia en cinc passos: descriure la tasca, triar el rol, seleccionar el format, afegir restriccions i copiar el prompt generat."
      }
    },
    {
      "q": {
        "es": "Que formato recomienda la leccion para un correo electronico?",
        "en": "What format does the lesson recommend for an email?",
        "val": "Quin format recomana la lliço per a un correu electrònic?"
      },
      "options": {
        "es": [
          "Solo el cuerpo del mensaje",
          "Asunto, cuerpo y despedida",
          "Remitente, destinatario y fecha",
          "Solo el asunto"
        ],
        "en": [
          "Only the body of the message",
          "Subject, body and closing",
          "Sender, recipient and date",
          "Only the subject"
        ],
        "val": [
          "Només el cos del missatge",
          "Assumpte, cos i comiat",
          "Remitent, destinatari i data",
          "Només l'assumpte"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion indica que el formato para un correo es asunto mas cuerpo mas despedida.",
        "en": "The lesson indicates that the format for an email is subject plus body plus closing.",
        "val": "La lliço indica que el format per a un correu és assumpte més cos més comiat."
      }
    },
    {
      "q": {
        "es": "Que tecnica avanzada se puede combinar con el prompt generado por la calculadora para que la IA razone antes de responder?",
        "en": "What advanced technique can be combined with the calculator-generated prompt to make the AI reason before responding?",
        "val": "Quina tècnica avançada es pot combinar amb el prompt generat per la calculadora perquè la IA raone abans de respondre?"
      },
      "options": {
        "es": [
          "Prompt de restricciones creativas",
          "Chain-of-Thought, anadiendo Piensa paso a paso antes de responder",
          "Prompt de multiples perspectivas",
          "Meta-prompt"
        ],
        "en": [
          "Creative constraints prompt",
          "Chain-of-Thought, adding Think step by step before answering",
          "Multiple perspectives prompt",
          "Meta-prompt"
        ],
        "val": [
          "Prompt de restriccions creatives",
          "Chain-of-Thought, afegint Think step by step before answering",
          "Prompt de múltiples perspectives",
          "Meta-prompt"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La leccion muestra como combinar el prompt generado con Chain-of-Thought anadiendo Piensa paso a paso antes de responder.",
        "en": "The lesson shows how to combine the generated prompt with Chain-of-Thought by adding Think step by step before answering.",
        "val": "La lliço mostra com combinar el prompt generat amb Chain-of-Thought afegint Think step by step before answering."
      }
    },
    {
      "q": {
        "es": "Por que es importante ser especifico en la descripcion de la tarea segun la calculadora?",
        "en": "Why is it important to be specific in the task description according to the calculator?",
        "val": "Per què és important ser específic en la descripció de la tasca segons la calculadora?"
      },
      "options": {
        "es": [
          "Porque la IA no acepta prompts largos",
          "Porque un prompt vago genera respuestas genericas, mientras que uno especifico genera respuestas utiles",
          "Porque la calculadora solo acepta texto corto",
          "Porque los usuarios no leen respuestas largas"
        ],
        "en": [
          "Because the AI does not accept long prompts",
          "Because a vague prompt generates generic responses, while a specific one generates useful responses",
          "Because the calculator only accepts short text",
          "Because users do not read long responses"
        ],
        "val": [
          "Perquè la IA no accepta prompts llargs",
          "Perquè un prompt vague genera respostes genèriques, mentre que un específic genera respostes útils",
          "Perquè la calculadora només accepta text curt",
          "Perquè els usuaris no lliguen respostes llargues"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Escribir un correo es vago y genera respuestas genericas, mientras que escribir un correo de seguimiento para un cliente que no ha comprado en 3 meses es especifico y util.",
        "en": "Writing an email is vague and generates generic responses, while writing a follow-up email to a customer who has not bought in 3 months is specific and useful.",
        "val": "Escriure un correu és vague i genera respostes genèriques, mentre que escriure un correu de seguiment per a un client que no ha comprat en 3 mesos és específic i útil."
      }
    }
  ],
  "prompting/08-resumen-prompting": [
    {
      "q": {
        "es": "Segun el resumen, cuales son los elementos clave de un buen prompt?",
        "en": "According to the summary, what are the key elements of a good prompt?",
        "val": "Segons el resum, quins són els elements clau d'un bon prompt?"
      },
      "options": {
        "es": [
          "Rol, contexto, tarea, formato, restricciones y ejemplos",
          "Rol, formato y restricciones solamente",
          "Tarea, contexto y formato solamente",
          "Rol, contexto, tarea, formato, restricciones, ejemplos y paso a paso"
        ],
        "en": [
          "Role, context, task, format, constraints and examples",
          "Role, format and constraints only",
          "Task, context and format only",
          "Role, context, task, format, constraints, examples and step by step"
        ],
        "val": [
          "Rol, context, tasca, format, restriccions i exemples",
          "Rol, format i restriccions solament",
          "Tasca, context i format solament",
          "Rol, context, tasca, format, restriccions, exemples i pas a pas"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El resumen del bloque enumera siete elementos: rol, contexto, tarea, formato, restricciones, ejemplos y paso a paso.",
        "en": "The block summary lists seven elements: role, context, task, format, constraints, examples and step by step.",
        "val": "El resum del bloc enumera set elements: rol, context, tasca, format, restriccions, exemples i pas a pas."
      }
    },
    {
      "q": {
        "es": "Segun las diez reglas de oro, que debes hacer si el primer prompt no es perfecto?",
        "en": "According to the ten golden rules, what should you do if the first prompt is not perfect?",
        "val": "Segons les deu regles d'or, què has de fer si el primer prompt no és perfecte?"
      },
      "options": {
        "es": [
          "Cambiar de modelo de IA inmediatamente",
          "Iterar, probar, refinar y mejorar",
          "Aceptarlo tal como esta porque la IA no comete errores",
          "Pedir a alguien mas que escriba el prompt"
        ],
        "en": [
          "Switch to a different AI model immediately",
          "Iterate, test, refine and improve",
          "Accept it as it is because AI does not make mistakes",
          "Ask someone else to write the prompt"
        ],
        "val": [
          "Canviar de model d'IA immediatament",
          "Iterar, provar, refin i millorar",
          "Acceptar-lo tal com està perquè la IA no comet errors",
          "Demana a algú més que escriga el prompt"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La cuarta regla de oro es iterar: tu primer prompt no sera el mejor. Refina, prueba y mejora.",
        "en": "The fourth golden rule is to iterate: your first prompt will not be the best. Refine, test and improve.",
        "val": "La quarta regla d'or és iterar: el teu primer prompt no serà el millor. Refina, prova i millora."
      }
    },
    {
      "q": {
        "es": "Cual es uno de los cinco errores comunes que debes evitar segun la leccion?",
        "en": "What is one of the five common mistakes you should avoid according to the lesson?",
        "val": "Quin és un dels cinc errors comuns que has d'evitar segons la lliço?"
      },
      "options": {
        "es": [
          "Usar ejemplos en el prompt",
          "El prompt vago como Escribe algo sobre IA",
          "Especificar el formato de respuesta",
          "Asignar un rol a la IA"
        ],
        "en": [
          "Using examples in the prompt",
          "The vague prompt such as Write something about AI",
          "Specifying the response format",
          "Assigning a role to the AI"
        ],
        "val": [
          "Usar exemples en el prompt",
          "El prompt vague com Escriu alguna cosa sobre IA",
          "Especificar el format de resposta",
          "Assignar un rol a la IA"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El prompt vago como Escribe algo sobre IA es uno de los cinco errores comunes, ya que no especifica formato, contexto ni objetivo.",
        "en": "The vague prompt such as Write something about AI is one of the five common mistakes, as it does not specify format, context or objective.",
        "val": "El prompt vague com Escriu alguna cosa sobre IA és un dels cinc errors comuns, ja que no especifica format, context ni objectiu."
      }
    },
    {
      "q": {
        "es": "Cuales son algunas de las tendencias futuras del prompting mencionadas en la leccion?",
        "en": "What are some of the future prompting trends mentioned in the lesson?",
        "val": "Quines són algunes de les tendències futures del prompting mencionades a la lliço?"
      },
      "options": {
        "es": [
          "Agentes autonomos, multimodal, personalizacion y automatizacion",
          "Bases de datos relacionales, programacion imperativa y redes neuronales",
          "Mineria de datos, criptomonedas y blockchain",
          "Realidad virtual, realidad aumentada y domotica"
        ],
        "en": [
          "Autonomous agents, multimodal, personalisation and automation",
          "Relational databases, imperative programming and neural networks",
          "Data mining, cryptocurrencies and blockchain",
          "Virtual reality, augmented reality and home automation"
        ],
        "val": [
          "Agents autònoms, multimodal, personalització i automatització",
          "Bases de dades relacionals, programació imperativa i xarxes neuronals",
          "Mineria de dades, criptomonedes i blockchain",
          "Realitat virtual, realitat augmentada i domòtica"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La leccion menciona como tendencias futuras los agentes autonomos, el prompting multimodal, la personalizacion y la automatizacion de prompts.",
        "en": "The lesson mentions as future trends autonomous agents, multimodal prompting, personalisation and prompt automation.",
        "val": "La lliço menciona com a tendències futures els agents autònoms, el prompting multimodal, la personalització i l'automatització de prompts."
      }
    }
  ],
  "ia-docencia/01-fundamentos-docencia": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es el papel de la IA en educación?",
        "en": "According to the lesson, what is the role of AI in education?",
        "val": "Segons la lliçó, quin és el paper de la IA en educació?"
      },
      "options": {
        "es": [
          "Sustituir al profesorado en todas las tareas",
          "Actuar como asistente que potencia cada etapa del proceso educativo",
          "Eliminar la evaluación del aprendizaje",
          "Limitar el acceso a la tecnología en el aula"
        ],
        "en": [
          "Replace teachers in all tasks",
          "Act as an assistant that enhances every stage of the educational process",
          "Remove learning assessment",
          "Limit access to technology in the classroom"
        ],
        "val": [
          "Substituir el professorat en totes les tasques",
          "Actuar com un assistent que potència cada etapa del procés educatiu",
          "Eliminar l'avaluació de l'aprenentatge",
          "Limitar l'accés a la tecnologia a l'aula"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La IA no busca sustituir al profesorado, sino dotarle de superpoderes: actúa como asistente en cada etapa del proceso educativo.",
        "en": "AI does not seek to replace teachers, but to give them superpowers: it acts as an assistant in every stage of the educational process.",
        "val": "La IA no busca substituir el professorat, sinó dotar-lo de superpoders: actua com un assistent en cada etapa del procés educatiu."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son las tres áreas principales de impacto de la IA en educación?",
        "en": "What are the three main areas of impact of AI in education?",
        "val": "Quines són les tres àrees principals d'impacte de la IA en educació?"
      },
      "options": {
        "es": [
          "Análisis de datos educativos, diseño de edificios y transporte",
          "Personalización del aprendizaje y automatización de tareas administrativas",
          "Corrección de exámenes y atención genérica al estudiantado",
          "Personalización del aprendizaje, automatización de tareas administrativas y análisis de datos educativos"
        ],
        "en": [
          "Analysis of educational data, building design and transport",
          "Learning personalisation and automating administrative tasks",
          "Grading exams and generic attention to students",
          "Learning personalisation, automating administrative tasks and analysis of educational data"
        ],
        "val": [
          "Anàlisi de dades educatives, disseny d'edificis i transport",
          "Personalització de l'aprenentatge i automatització de tasques administratives",
          "Correcció d'exàmens i atenció genèrica a l'estudiantat",
          "Personalització de l'aprenentatge, automatització de tasques administratives i anàlisi de dades educatives"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Las tres áreas de impacto son la personalización del aprendizaje, la automatización de tareas administrativas y el análisis de datos educativos.",
        "en": "The three areas of impact are learning personalisation, automating administrative tasks and analysing educational data.",
        "val": "Les tres àrees d'impacte són la personalització de l'aprenentatge, l'automatització de tasques administratives i l'anàlisi de dades educatives."
      }
    },
    {
      "q": {
        "es": "Según la tabla de la lección, con IA la detección de dificultades pasa de ser...",
        "en": "According to the lesson table, with AI the detection of difficulties goes from being...",
        "val": "Segons la taula de la lliçó, amb IA la detecció de dificultats passa de ser..."
      },
      "options": {
        "es": [
          "Manual y lenta a automática e inmediata",
          "Genérica a personalizada",
          "Reactiva a predictiva",
          "Estática a dinámica"
        ],
        "en": [
          "Manual and slow to automatic and immediate",
          "Generic to personalised",
          "Reactive to predictive",
          "Static to dynamic"
        ],
        "val": [
          "Manual i lenta a automàtica i immediata",
          "Genèrica a personalitzada",
          "Reactiva a predictiva",
          "Estàtica a dinàmica"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La tabla muestra que la detección de dificultades pasa de ser reactiva sin IA a predictiva con IA.",
        "en": "The table shows that the detection of difficulties changes from reactive without AI to predictive with AI.",
        "val": "La taula mostra que la detecció de dificultats passa de ser reactiva sense IA a predictiva amb IA."
      }
    },
    {
      "q": {
        "es": "¿Qué describe correctamente el modelo de tutor inteligente?",
        "en": "What correctly describes the intelligent tutor model?",
        "val": "Què descriu correctament el model de tutor intel·ligent?"
      },
      "options": {
        "es": [
          "Sistemas que interactúan directamente con el estudiantado para guiar su aprendizaje",
          "Herramientas que ayudan al profesorado a corregir y generar materiales",
          "Plataformas que recopilan datos para decisiones pedagógicas",
          "Aplicaciones que organizan horarios y comunican con las familias"
        ],
        "en": [
          "Systems that interact directly with students to guide their learning",
          "Tools that help teachers grade and generate materials",
          "Platforms that collect data to inform pedagogical decisions",
          "Applications that organise schedules and communicate with families"
        ],
        "val": [
          "Sistemes que interactuen directament amb l'estudiantat per a guiar el seu aprenentatge",
          "Eines que ajuden el professorat a corregir i generar materials",
          "Plataformes que recopilen dades per a fonamentar decisions pedagògiques",
          "Aplicacions que organitzen horaris i es comuniquen amb les famílies"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El tutor inteligente es uno de los tres modelos de integración: sistemas que interactúan directamente con el estudiantado para guiar su aprendizaje.",
        "en": "The intelligent tutor is one of the three integration models: systems that interact directly with students to guide their learning.",
        "val": "El tutor intel·ligent és un dels tres models d'integració: sistemes que interactuen directament amb l'estudiantat per a guiar el seu aprenentatge."
      }
    }
  ],
  "ia-docencia/02-herramientas-ensenanza": [
    {
      "q": {
        "es": "¿Qué ventaja ofrece Khanmigo frente a un chatbot tradicional?",
        "en": "What advantage does Khanmigo offer over a traditional chatbot?",
        "val": "Quin avantatge ofereix Khanmigo enfront d'un chatbot tradicional?"
      },
      "options": {
        "es": [
          "Da la respuesta final al instante",
          "Guía al estudiantado con preguntas socráticas y pistas progresivas sin dar la respuesta",
          "Solo funciona para aprender idiomas",
          "Corrige exámenes en grupos grandes automáticamente"
        ],
        "en": [
          "Gives the final answer immediately",
          "Guides students with Socratic questions and progressive hints without giving the answer",
          "Only works for learning languages",
          "Automatically grades exams in large groups"
        ],
        "val": [
          "Dóna la resposta final a l'instant",
          "Guia l'estudiantat amb preguntes socràtiques i pistes progressives sense donar la resposta",
          "Només funciona per a aprendre idiomes",
          "Corregeix exàmens en grups grans automàticament"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Khanmigo es un tutor virtual que no da la respuesta directamente: plantea preguntas socráticas y ofrece pistas progresivas.",
        "en": "Khanmigo is a virtual tutor that does not give the answer directly: it asks Socratic questions and offers progressive hints.",
        "val": "Khanmigo és un tutor virtual que no dóna la resposta directament: planteja preguntes socràtiques i ofereix pistes progressives."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la función principal de Perplexity en el ámbito docente?",
        "en": "What is Perplexity's main function in teaching?",
        "val": "Quina és la funció principal de Perplexity en l'àmbit docent?"
      },
      "options": {
        "es": [
          "Generar presentaciones completas a partir de un prompt",
          "Crear tarjetas didácticas adaptativas",
          "Buscar información con fuentes verificables para preparar contenidos actualizados",
          "Corregir trabajos escritos automáticamente"
        ],
        "en": [
          "Generate complete presentations from a prompt",
          "Create adaptive flashcards",
          "Search for information with verifiable sources to prepare up-to-date content",
          "Automatically grade written assignments"
        ],
        "val": [
          "Generar presentacions completes a partir d'un prompt",
          "Crear targetes didàctiques adaptatives",
          "Cercar informació amb fonts verificables per a preparar continguts actualitzats",
          "Corregir treballs escrits automàticament"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Perplexity es excelente para la investigación docente porque busca información con fuentes verificables.",
        "en": "Perplexity is excellent for teacher research because it searches for information with verifiable sources.",
        "val": "Perplexity és excel·lent per a la investigació docent perquè cerca informació amb fonts verificables."
      }
    },
    {
      "q": {
        "es": "Para corregir exámenes y trabajos en grupos grandes, ¿qué herramienta de evaluación destaca la lección?",
        "en": "For grading exams and assignments in large groups, which assessment tool does the lesson highlight?",
        "val": "Per a corregir exàmens i treballs en grups grans, quina eina d'avaluació destaca la lliçó?"
      },
      "options": {
        "es": [
          "Gradescope",
          "Gamma",
          "Duolingo",
          "Tome"
        ],
        "en": [
          "Gradescope",
          "Gamma",
          "Duolingo",
          "Tome"
        ],
        "val": [
          "Gradescope",
          "Gamma",
          "Duolingo",
          "Tome"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Gradescope utiliza IA para agilizar la corrección de exámenes y trabajos, especialmente útil en grupos grandes.",
        "en": "Gradescope uses AI to speed up the grading of exams and assignments, especially useful in large groups.",
        "val": "Gradescope utilitza IA per a agilitzar la correcció d'exàmens i treballs, especialment útil en grups grans."
      }
    },
    {
      "q": {
        "es": "¿Qué hay que verificar antes de usar cualquier herramienta con estudiantes?",
        "en": "What must you check before using any tool with students?",
        "val": "Què cal verificar abans d'usar qualsevol eina amb estudiants?"
      },
      "options": {
        "es": [
          "Que tenga más de mil usuarios",
          "Que funcione solo sin conexión",
          "Que no tenga versión móvil",
          "Sus condiciones de uso y la edad mínima requerida, normalmente 13 o 16 años"
        ],
        "en": [
          "That it has more than a thousand users",
          "That it only works offline",
          "That it has no mobile version",
          "Its terms of use and the required minimum age, usually 13 or 16 years old"
        ],
        "val": [
          "Que tinga més de mil usuaris",
          "Que funcione només sense connexió",
          "Que no tinga versió mòbil",
          "Les seues condicions d'ús i l'edat mínima requerida, normalment 13 o 16 anys"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Antes de usar una herramienta con estudiantes hay que verificar sus condiciones de uso y la edad mínima requerida, que suele ser de 13 o 16 años.",
        "en": "Before using a tool with students you must check its terms of use and the required minimum age, which is usually 13 or 16 years old.",
        "val": "Abans d'usar una eina amb estudiants cal verificar les seues condicions d'ús i l'edat mínima requerida, que sol ser de 13 o 16 anys."
      }
    }
  ],
  "ia-docencia/03-planificacion-curricular": [
    {
      "q": {
        "es": "¿Qué papel tiene la IA en la planificación curricular?",
        "en": "What role does AI play in curriculum planning?",
        "val": "Quin paper té la IA en la planificació curricular?"
      },
      "options": {
        "es": [
          "Diseña la unidad completa sin intervención del profesorado",
          "Actúa como co-planificadora ofreciendo opciones que el profesorado evalúa, adapta y aprueba",
          "Sustituye el currículum oficial",
          "Elimina la necesidad de criterios de evaluación"
        ],
        "en": [
          "Designs the whole unit without teacher involvement",
          "Acts as a co-planner offering options that teachers evaluate, adapt and approve",
          "Replaces the official curriculum",
          "Removes the need for assessment criteria"
        ],
        "val": [
          "Dissenya la unitat completa sense intervenció del professorat",
          "Actua com a co-planificadora oferint opcions que el professorat avalua, adapta i aprova",
          "Substitueix el currículum oficial",
          "Elimina la necessitat de criteris d'avaluació"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La IA no diseña por ti: ofrece opciones, estructuras y sugerencias que evalúas, adaptas y apruebas; el criterio pedagógico sigue siendo tuyo.",
        "en": "AI does not design for you: it offers options, structures and suggestions that you evaluate, adapt and approve; the pedagogical judgement remains yours.",
        "val": "La IA no dissenya per tu: t'ofereix opcions, estructures i suggeriments que avalues, adaptes i aproves; el criteri pedagògic continua sent teu."
      }
    },
    {
      "q": {
        "es": "¿Qué elementos debe incluir un prompt para planificar una unidad didáctica con IA?",
        "en": "What elements should a prompt include to plan a teaching unit with AI?",
        "val": "Quins elements ha d'incloure un prompt per a planificar una unitat didàctica amb IA?"
      },
      "options": {
        "es": [
          "Contexto, objetivos, enfoque y recursos disponibles",
          "Nombre del centro y del tutor legal",
          "Marca del dispositivo y color del aula",
          "Solo el título de la unidad"
        ],
        "en": [
          "Context, objectives, approach and available resources",
          "School name and legal guardian",
          "Device brand and classroom colour",
          "Only the title of the unit"
        ],
        "val": [
          "Context, objectius, enfocament i recursos disponibles",
          "Nom del centre i del tutor legal",
          "Marca del dispositiu i color de l'aula",
          "Només el títol de la unitat"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Un prompt efectivo incluye el contexto (nivel, asignatura, duración), los objetivos, el enfoque metodológico y los recursos disponibles.",
        "en": "An effective prompt includes the context (level, subject, duration), the objectives, the methodological approach and the available resources.",
        "val": "Un prompt efectiu inclou el context (nivell, assignatura, durada), els objectius, l'enfocament metodològic i els recursos disponibles."
      }
    },
    {
      "q": {
        "es": "Según la tabla de la lección, ¿cómo cambia el tiempo de diseño de una unidad didáctica al usar IA?",
        "en": "According to the lesson table, how does the design time of a teaching unit change when using AI?",
        "val": "Segons la taula de la lliçó, com canvia el temps de disseny d'una unitat didàctica en usar IA?"
      },
      "options": {
        "es": [
          "De 1-2 horas a 10 minutos",
          "Continúa siendo de 4-6 horas",
          "De 30-60 minutos a 4-6 horas",
          "De 4-6 horas por unidad a 30-60 minutos"
        ],
        "en": [
          "From 1-2 hours to 10 minutes",
          "It remains 4-6 hours",
          "From 30-60 minutes to 4-6 hours",
          "From 4-6 hours per unit to 30-60 minutes"
        ],
        "val": [
          "D'1-2 hores a 10 minuts",
          "Continua sent de 4-6 hores",
          "De 30-60 minuts a 4-6 hores",
          "De 4-6 hores per unitat a 30-60 minuts"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Con la IA el tiempo de diseño de una unidad didáctica pasa de 4-6 horas a tan solo 30-60 minutos.",
        "en": "With AI the design time of a teaching unit goes from 4-6 hours to just 30-60 minutes.",
        "val": "Amb la IA el temps de disseny d'una unitat didàctica passa de 4-6 hores a només 30-60 minuts."
      }
    },
    {
      "q": {
        "es": "¿Qué precaución sobre las limitaciones de la IA menciona la lección al planificar?",
        "en": "What precaution about AI limitations does the lesson mention when planning?",
        "val": "Quina precaució sobre les limitacions de la IA menciona la lliçó en planificar?"
      },
      "options": {
        "es": [
          "La IA siempre conoce el contexto del centro educativo",
          "La IA nunca comete errores factuales",
          "La IA puede alucinar, así que hay que verificar siempre los datos factuales",
          "La IA no puede generar adaptaciones curriculares"
        ],
        "en": [
          "AI always knows the school context",
          "AI never makes factual mistakes",
          "AI can hallucinate, so you should always verify factual data",
          "AI cannot generate curriculum adaptations"
        ],
        "val": [
          "La IA sempre coneix el context del centre educatiu",
          "La IA mai no comet errors factuals",
          "La IA pot al·lucinar, així que cal verificar sempre les dades factuals",
          "La IA no pot generar adaptacions curriculars"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Entre las limitaciones se destaca que la IA puede alucinar y que no conoce tu contexto, por lo que hay que verificar y adaptar cada sugerencia.",
        "en": "Among the limitations it is highlighted that AI can hallucinate and does not know your context, so you must verify and adapt every suggestion.",
        "val": "Entre les limitacions es destaca que la IA pot al·lucinar i que no coneix el teu context, per la qual cosa cal verificar i adaptar cada suggeriment."
      }
    }
  ],
  "ia-docencia/04-creacion-contenido": [
    {
      "q": {
        "es": "¿Qué relación tiene la IA con la creatividad del profesorado en la creación de contenido?",
        "en": "What is AI's relationship with teachers' creativity in content creation?",
        "val": "Quina relació té la IA amb la creativitat del professorat en la creació de contingut?"
      },
      "options": {
        "es": [
          "La reemplaza por completo",
          "La amplifica: el profesorado aporta criterio y la IA velocidad y variedad",
          "Solo genera texto, nunca imágenes",
          "Se limita al profesorado experto en tecnología"
        ],
        "en": [
          "It completely replaces it",
          "It amplifies it: teachers bring judgement and AI brings speed and variety",
          "It only generates text, never images",
          "It is limited to tech-savvy teachers"
        ],
        "val": [
          "La reemplaça per complet",
          "L'amplifica: el professorat aporta criteri i la IA velocitat i varietat",
          "Només genera text, mai imatges",
          "Es limita al professorat expert en tecnologia"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La IA no reemplaza la creatividad del profesorado: la amplifica. Tú pones el criterio y el toque humano, y la IA aporta velocidad y variedad.",
        "en": "AI does not replace teachers' creativity: it amplifies it. You bring judgement and the human touch, while AI brings speed and variety.",
        "val": "La IA no reemplaça la creativitat del professorat: l'amplifica. Tu poses el criteri i el toc humà, i la IA aporta velocitat i varietat."
      }
    },
    {
      "q": {
        "es": "Además de preguntas de opción múltiple, ¿qué otro tipo de actividad puede generar la IA según la lección?",
        "en": "Besides multiple-choice questions, what other type of activity can AI generate according to the lesson?",
        "val": "A més de preguntes d'opció múltiple, quin altre tipus d'activitat pot generar la IA segons la lliçó?"
      },
      "options": {
        "es": [
          "Solo exámenes orales presenciales",
          "Únicamente resúmenes de texto",
          "Memorización mecánica sin explicación",
          "Ejercicios de verdadero/falso con justificación"
        ],
        "en": [
          "Only in-person oral exams",
          "Only text summaries",
          "Mechanical memorisation without explanation",
          "True/false exercises with justification"
        ],
        "val": [
          "Només exàmens orals presencials",
          "Únicament resums de text",
          "Memorització mecànica sense explicació",
          "Exercicis de vertader/fals amb justificació"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La IA puede generar actividades variadas: opción múltiple, verdadero/falso con justificación, casos prácticos, problemas escalonados y juegos de rol.",
        "en": "AI can generate varied activities: multiple choice, true/false with justification, case studies, stepped problems and role-playing games.",
        "val": "La IA pot generar activitats variades: opció múltiple, vertader/fals amb justificació, casos pràctics, problemes escalonats i jocs de rol."
      }
    },
    {
      "q": {
        "es": "¿Qué herramientas menciona la lección para generar imágenes educativas?",
        "en": "Which tools does the lesson mention for generating educational images?",
        "val": "Quines eines menciona la lliçó per a generar imatges educatives?"
      },
      "options": {
        "es": [
          "DALL-E, Midjourney y Canva Magic Studio",
          "Gradescope, Turnitin y Quizlet",
          "Perplexity y Khanmigo",
          "Duolingo y Tome"
        ],
        "en": [
          "DALL-E, Midjourney and Canva Magic Studio",
          "Gradescope, Turnitin and Quizlet",
          "Perplexity and Khanmigo",
          "Duolingo and Tome"
        ],
        "val": [
          "DALL-E, Midjourney i Canva Magic Studio",
          "Gradescope, Turnitin i Quizlet",
          "Perplexity i Khanmigo",
          "Duolingo i Tome"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Herramientas como DALL-E, Midjourney o Canva Magic Studio permiten generar imágenes educativas como diagramas, ilustraciones y mapas conceptuales.",
        "en": "Tools such as DALL-E, Midjourney or Canva Magic Studio make it possible to generate educational images such as diagrams, illustrations and concept maps.",
        "val": "Eines com DALL-E, Midjourney o Canva Magic Studio permeten generar imatges educatives com diagrames, il·lustracions i mapes conceptuals."
      }
    },
    {
      "q": {
        "es": "¿Qué debe hacer el profesorado antes de usar contenido generado por IA en el aula?",
        "en": "What must teachers do before using AI-generated content in the classroom?",
        "val": "Què ha de fer el professorat abans d'usar contingut generat per IA a l'aula?"
      },
      "options": {
        "es": [
          "Usarlo directamente para ahorrar tiempo",
          "Traducirlo siempre a otro idioma",
          "Revisarlo críticamente: precisión, adecuación, claridad, sesgo y originalidad",
          "Pedir autorización a las familias"
        ],
        "en": [
          "Use it directly to save time",
          "Always translate it into another language",
          "Review it critically: accuracy, suitability, clarity, bias and originality",
          "Ask families for permission"
        ],
        "val": [
          "Usar-lo directament per a estalviar temps",
          "Traduir-lo sempre a un altre idioma",
          "Revisar-lo críticament: precisió, adequació, claredat, biaix i originalitat",
          "Demanar autorització a les famílies"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Nunca uses contenido generado por IA directamente en el aula sin revisarlo antes; debe pasar por tu filtro de precisión, adecuación, claridad, sesgo y originalidad.",
        "en": "Never use AI-generated content directly in the classroom without reviewing it first; it must pass through your filter of accuracy, suitability, clarity, bias and originality.",
        "val": "No uses mai contingut generat per IA directament a l'aula sense revisar-lo abans; ha de passar pel teu filtre de precisió, adequació, claredat, biaix i originalitat."
      }
    }
  ],
  "ia-docencia/05-evaluacion-aprendizaje": [
    {
      "q": {
        "es": "¿Qué responsabilidad conserva el profesorado cuando la IA ayuda a evaluar?",
        "en": "What responsibility does the teacher keep when AI helps with assessment?",
        "val": "Quina responsabilitat conserva el professorat quan la IA ajuda a avaluar?"
      },
      "options": {
        "es": [
          "La decisión final, la interpretación de los resultados y el acompañamiento al estudiantado",
          "La IA decide las calificaciones sin supervisión",
          "No debe usar IA para evaluar",
          "Desaparece la evaluación del aprendizaje"
        ],
        "en": [
          "The final decision, the interpretation of results and supporting students",
          "AI decides the grades without supervision",
          "AI should not be used for assessment",
          "Learning assessment disappears"
        ],
        "val": [
          "La decisió final, la interpretació dels resultats i l'acompanyament a l'estudiantat",
          "La IA decideix les qualificacions sense supervisió",
          "No ha d'usar IA per a avaluar",
          "Desapareix l'avaluació de l'aprenentatge"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La IA no evalúa por ti: te ayuda a evaluar mejor, pero la decisión final, la interpretación de los resultados y el acompañamiento son tu responsabilidad.",
        "en": "AI does not assess for you: it helps you assess better, but the final decision, the interpretation of results and supporting students remain your responsibility.",
        "val": "La IA no avalua per tu: t'ajuda a avaluar millor, però la decisió final, la interpretació dels resultats i l'acompanyament continuen sent la teua responsabilitat."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son las ventajas de las rúbricas generadas por IA?",
        "en": "What are the advantages of AI-generated rubrics?",
        "val": "Quins són els avantatges de les rúbriques generades per IA?"
      },
      "options": {
        "es": [
          "Son idénticas para todos los centros",
          "Eliminan la necesidad de criterios de evaluación",
          "Consistencia, rapidez y personalización",
          "Solo sirven para la corrección oral"
        ],
        "en": [
          "They are identical for all schools",
          "They remove the need for assessment criteria",
          "Consistency, speed and personalisation",
          "They only serve for oral grading"
        ],
        "val": [
          "Són idèntiques per a tots els centres",
          "Eliminen la necessitat de criteris d'avaluació",
          "Consistència, rapidesa i personalització",
          "Només serveixen per a la correcció oral"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Las rúbricas generadas por IA ofrecen consistencia, rapidez y personalización: se generan en minutos y se adaptan a tu contexto.",
        "en": "AI-generated rubrics offer consistency, speed and personalisation: they are generated in minutes and adapted to your context.",
        "val": "Les rúbriques generades per IA ofereixen consistència, rapidesa i personalització: es generen en minuts i s'adapten al teu context."
      }
    },
    {
      "q": {
        "es": "¿Qué permite la IA en la retroalimentación a gran escala?",
        "en": "What does AI make possible in feedback at scale?",
        "val": "Què permet la IA en la retroalimentació a gran escala?"
      },
      "options": {
        "es": [
          "Generar un único comentario genérico para toda la clase",
          "Generar comentarios individualizados para cada estudiante, imposible de hacer manualmente en grupos numerosos",
          "Eliminar toda la retroalimentación",
          "Solo devolver calificaciones numéricas"
        ],
        "en": [
          "Generate a single generic comment for the whole class",
          "Generate individualised comments for each student, impossible to do manually in large groups",
          "Remove all feedback",
          "Only return numerical grades"
        ],
        "val": [
          "Generar un únic comentari genèric per a tota la classe",
          "Generar comentaris individualitzats per a cada estudiant, impossible de fer manualment en grups nombrosos",
          "Eliminar tota la retroalimentació",
          "Només tornar qualificacions numèriques"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La IA puede generar comentarios individualizados para cada estudiante, algo imposible de hacer manualmente en grupos numerosos.",
        "en": "AI can generate individualised comments for each student, something impossible to do manually in large groups.",
        "val": "La IA pot generar comentaris individualitzats per a cada estudiant, una cosa impossible de fer manualment en grups nombrosos."
      }
    },
    {
      "q": {
        "es": "¿Cuál de las siguientes es una limitación de la evaluación con IA?",
        "en": "Which of the following is a limitation of AI-based assessment?",
        "val": "Quina de les següents és una limitació de l'avaluació amb IA?"
      },
      "options": {
        "es": [
          "Entiende siempre el contexto completo del estudiantado",
          "No puede penalizar ningún estilo de escritura",
          "Funciona siempre sin conexión a internet",
          "Puede producir falsos positivos y negativos, especialmente en la detección de originalidad"
        ],
        "en": [
          "It always understands the students' full context",
          "It never penalises any writing style",
          "It always works without an internet connection",
          "It can produce false positives and negatives, especially in originality detection"
        ],
        "val": [
          "Entén sempre el context complet de l'estudiantat",
          "No pot penalitzar cap estil d'escriptura",
          "Funciona sempre sense connexió a internet",
          "Pot produir falsos positius i negatius, especialment en la detecció d'originalitat"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Una de las limitaciones señaladas son los falsos positivos y negativos, especialmente en la detección de originalidad.",
        "en": "One of the limitations pointed out is false positives and negatives, especially in originality detection.",
        "val": "Una de les limitacions assenyalades són els falsos positius i negatius, especialment en la detecció d'originalitat."
      }
    }
  ],
  "ia-docencia/06-etica-desafios": [
    {
      "q": {
        "es": "¿Por qué se afirma que la tecnología nunca es neutral?",
        "en": "Why is it stated that technology is never neutral?",
        "val": "Per què s'afirma que la tecnologia mai no és neutral?"
      },
      "options": {
        "es": [
          "Porque todos los algoritmos son imparciales por diseño",
          "Porque no afecta a los grupos de estudiantes",
          "Porque cada algoritmo incorpora decisiones humanas que pueden reflejar sesgos y privilegiar ciertas perspectivas",
          "Porque solo tiene efectos positivos"
        ],
        "en": [
          "Because all algorithms are impartial by design",
          "Because it does not affect groups of students",
          "Because every algorithm embeds human decisions that can reflect biases and privilege certain perspectives",
          "Because it only has positive effects"
        ],
        "val": [
          "Perquè tots els algorismes són imparcials per disseny",
          "Perquè no afecta els grups d'estudiants",
          "Perquè cada algorisme incorpora decisions humanes que poden reflectir biaixos i privilegiar certes perspectives",
          "Perquè només té efectes positius"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La tecnología nunca es neutral: cada algoritmo incorpora decisiones humanas que pueden reflejar sesgos, privilegiar ciertas perspectivas y afectar de manera desigual a los estudiantes.",
        "en": "Technology is never neutral: every algorithm embeds human decisions that can reflect biases, privilege certain perspectives and affect students unevenly.",
        "val": "La tecnologia mai no és neutral: cada algorisme incorpora decisions humanes que poden reflectir biaixos, privilegiar certes perspectives i afectar els estudiants de manera desigual."
      }
    },
    {
      "q": {
        "es": "Antes de introducir datos personales de estudiantes en herramientas de IA gratuitas, según la lección hay que...",
        "en": "Before entering students' personal data into free AI tools, according to the lesson you must...",
        "val": "Abans d'introduir dades personals d'estudiants en eines d'IA gratuïtes, segons la lliçó cal..."
      },
      "options": {
        "es": [
          "Confiar en que la herramienta los protege siempre",
          "Verificar su política de privacidad, porque muchas plataformas usan los datos para entrenar sus modelos",
          "Anonimizar siempre sin excepción",
          "Pedir permiso al profesorado"
        ],
        "en": [
          "Trust that the tool always protects them",
          "Check its privacy policy, because many platforms use the data to train their models",
          "Always anonymise without exception",
          "Ask the teaching staff for permission"
        ],
        "val": [
          "Confiar que l'eina sempre els protegeix",
          "Verificar la seua política de privacitat, perquè moltes plataformes usen les dades per a entrenar els seus models",
          "Anonimitzar sempre sense excepció",
          "Demanar permís al professorat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Nunca introduzcas datos personales de estudiantes en herramientas gratuitas sin verificar su política de privacidad, ya que muchas plataformas los usan para entrenar sus modelos.",
        "en": "Never enter students' personal data into free tools without checking their privacy policy, as many platforms use it to train their models.",
        "val": "No introduïsques mai dades personals d'estudiants en eines gratuïtes sense verificar la seua política de privacitat, ja que moltes plataformes les usen per a entrenar els seus models."
      }
    },
    {
      "q": {
        "es": "¿Qué es la brecha digital?",
        "en": "What is the digital divide?",
        "val": "Què és la bretxa digital?"
      },
      "options": {
        "es": [
          "La desigualdad en el acceso y uso de tecnologías digitales entre el estudiantado",
          "La velocidad de conexión de la escuela",
          "La diferencia de edad entre docentes",
          "El costo de las herramientas de IA"
        ],
        "en": [
          "Inequality in access to and use of digital technologies among students",
          "The school's connection speed",
          "The age difference between teachers",
          "The cost of AI tools"
        ],
        "val": [
          "La desigualtat en l'accés i l'ús de tecnologies digitals entre l'estudiantat",
          "La velocitat de connexió de l'escola",
          "La diferència d'edat entre docents",
          "El cost de les eines d'IA"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La brecha digital es la desigualdad en el acceso y uso de las tecnologías digitales: conectividad, dispositivos, competencia digital y apoyo familiar.",
        "en": "The digital divide is inequality in access to and use of digital technologies: connectivity, devices, digital skills and family support.",
        "val": "La bretxa digital és la desigualtat en l'accés i l'ús de les tecnologies digitals: connectivitat, dispositius, competència digital i suport familiar."
      }
    },
    {
      "q": {
        "es": "¿Cuál de las siguientes NO es una función del profesorado en la era de la IA?",
        "en": "Which of the following is NOT a role of teachers in the AI era?",
        "val": "Quina de les següents NO és una funció del professorat en l'era de la IA?"
      },
      "options": {
        "es": [
          "Guía crítico que enseña a usar la IA con criterio",
          "Curador de contenido que selecciona y adapta lo que la IA genera",
          "Acompañante emocional del estudiantado",
          "Ser sustituido por sistemas de tutoría automática sin intervención docente"
        ],
        "en": [
          "Critical guide who teaches how to use AI with judgment",
          "Content curator who selects and adapts what AI generates",
          "Emotional companion for students",
          "Being replaced by automated tutoring systems with no teacher involvement"
        ],
        "val": [
          "Guia crític que ensenya a usar la IA amb criteri",
          "Curador de contingut que selecciona i adapta el que la IA genera",
          "Acompanyant emocional de l'estudiantat",
          "Ser substituït per sistemes de tutoria automàtica sense intervenció docent"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Lejos de desaparecer, el rol del profesorado se vuelve más importante: guía crítico, curador de contenido, acompañante emocional, promotor de valores y diseñador de experiencias.",
        "en": "Far from disappearing, the role of teachers becomes more important: critical guide, content curator, emotional companion, promoter of values and experience designer.",
        "val": "Lluny de desaparéixer, el paper del professorat es torna més important: guia crític, curador de contingut, acompanyant emocional, promotor de valors i dissenyador d'experiències."
      }
    }
  ],
  "ia-docencia/07-resumen-recursos": [
    {
      "q": {
        "es": "Según el resumen del bloque, ¿cuál es la clave para obtener resultados útiles con la IA en la planificación curricular?",
        "en": "According to the block summary, what is the key to getting useful results with AI in curriculum planning?",
        "val": "Segons el resum del bloc, quina és la clau per a obtindre resultats útils amb la IA en la planificació curricular?"
      },
      "options": {
        "es": [
          "Tener la herramienta más cara",
          "Usar siempre el mismo prompt genérico",
          "Evitar pedir adaptaciones curriculares",
          "Un prompt bien estructurado"
        ],
        "en": [
          "Having the most expensive tool",
          "Always using the same generic prompt",
          "Avoiding curriculum adaptations",
          "A well-structured prompt"
        ],
        "val": [
          "Tindre l'eina més cara",
          "Usar sempre el mateix prompt genèric",
          "Evitar demanar adaptacions curriculars",
          "Un prompt ben estructurat"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "En la lección de planificación curricular se indica que un prompt bien estructurado es la clave para obtener resultados útiles.",
        "en": "The curriculum planning lesson states that a well-structured prompt is the key to getting useful results.",
        "val": "En la lliçó de planificació curricular s'indica que un prompt ben estructurat és la clau per a obtindre resultats útils."
      }
    },
    {
      "q": {
        "es": "Según el resumen, ¿qué combinación ofrece los mejores resultados en la evaluación?",
        "en": "According to the summary, which combination offers the best results in assessment?",
        "val": "Segons el resum, quina combinació ofereix els millors resultats en l'avaluació?"
      },
      "options": {
        "es": [
          "Evaluación automática combinada con criterio humano",
          "Exclusivamente evaluación automática",
          "Solo retroalimentación motivacional",
          "Evaluación sin herramientas de IA"
        ],
        "en": [
          "Automated assessment combined with human judgement",
          "Exclusively automated assessment",
          "Only motivational feedback",
          "Assessment without AI tools"
        ],
        "val": [
          "Avaluació automàtica combinada amb criteri humà",
          "Exclusivament avaluació automàtica",
          "Només retroalimentació motivacional",
          "Avaluació sense eines d'IA"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La combinación de evaluación automática y criterio humano ofrece los mejores resultados.",
        "en": "Combining automated assessment with human judgement offers the best results.",
        "val": "La combinació d'avaluació automàtica i criteri humà ofereix els millors resultats."
      }
    },
    {
      "q": {
        "es": "¿Qué término del glosario del bloque se define como la desigualdad en el acceso y uso de tecnologías digitales?",
        "en": "Which glossary term of the block is defined as inequality in access to and use of digital technologies?",
        "val": "Quin terme del glossari del bloc es defineix com la desigualtat en l'accés i l'ús de tecnologies digitals?"
      },
      "options": {
        "es": [
          "Sesgo algorítmico",
          "Brecha digital",
          "Tutor inteligente",
          "Retroalimentación formativa"
        ],
        "en": [
          "Algorithmic bias",
          "Digital divide",
          "Intelligent tutor",
          "Formative feedback"
        ],
        "val": [
          "Biaix algorítmic",
          "Bretxa digital",
          "Tutor intel·ligent",
          "Retroalimentació formativa"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La brecha digital se define en el glosario como la desigualdad en el acceso y uso de tecnologías digitales.",
        "en": "The digital divide is defined in the glossary as inequality in access to and use of digital technologies.",
        "val": "La bretxa digital es defineix al glossari com la desigualtat en l'accés i l'ús de tecnologies digitals."
      }
    },
    {
      "q": {
        "es": "Según el resumen de fundamentos, la IA personaliza el aprendizaje, automatiza tareas administrativas y permite...",
        "en": "According to the fundamentals summary, AI personalises learning, automates administrative tasks and makes possible...",
        "val": "Segons el resum de fonaments, la IA personalitza l'aprenentatge, automatitza tasques administratives i permet..."
      },
      "options": {
        "es": [
          "El uso exclusivo de materiales impresos",
          "Eliminar la revisión pedagógica",
          "El análisis de datos educativos",
          "La supresión del papel del profesorado"
        ],
        "en": [
          "The exclusive use of printed materials",
          "Removing pedagogical review",
          "The analysis of educational data",
          "Removing the role of teachers"
        ],
        "val": [
          "L'ús exclusiu de materials impresos",
          "Eliminar la revisió pedagògica",
          "L'anàlisi de dades educatives",
          "La supressió del paper del professorat"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección de fundamentos resume que la IA personaliza el aprendizaje, automatiza tareas administrativas y permite el análisis de datos educativos.",
        "en": "The fundamentals lesson summarises that AI personalises learning, automates administrative tasks and enables the analysis of educational data.",
        "val": "La lliçó de fonaments resumeix que la IA personalitza l'aprenentatge, automatitza tasques administratives i permet l'anàlisi de dades educatives."
      }
    }
  ],
  "ia-multimodal/01-introduccion-multimodal": [
    {
      "q": {
        "es": "¿Qué significa que un modelo de IA sea multimodal?",
        "en": "What does it mean for an AI model to be multimodal?",
        "val": "Què significa que un model d'IA siga multimodal?"
      },
      "options": {
        "es": [
          "Que puede procesar y generar información en múltiples formatos como texto, imagen, audio y vídeo",
          "Que solo trabaja con modelos de lenguaje de gran tamaño",
          "Que funciona sin necesidad de conexión a internet",
          "Que genera únicamente imágenes a partir de texto"
        ],
        "en": [
          "That it can process and generate information in multiple formats such as text, image, audio and video",
          "That it only works with very large language models",
          "That it works without needing an internet connection",
          "That it only generates images from text"
        ],
        "val": [
          "Que pot processar i generar informació en múltiples formats com text, imatge, àudio i vídeo",
          "Que només treballa amb models de llenguatge de gran tamany",
          "Que funciona sense necessitat de connexió a internet",
          "Que genera únicament imatges a partir de text"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Un modelo multimodal procesa y genera información en múltiples formatos dentro de un mismo sistema.",
        "en": "A multimodal model processes and generates information in multiple formats within a single system.",
        "val": "Un model multimodal processa i genera informació en múltiples formats dins d'un mateix sistema."
      }
    },
    {
      "q": {
        "es": "¿Cuál de estos modelos no admite vídeo, según la tabla de capacidades de la lección?",
        "en": "Which of these models does not support video, according to the lesson's capabilities table?",
        "val": "Quin d'aquests models no admet vídeo, segons la taula de capacitats de la lliçó?"
      },
      "options": {
        "es": [
          "GPT-6 Astra",
          "Claude Fable 5.1",
          "Gemini 3.8",
          "Muse Spark 1.3"
        ],
        "en": [
          "GPT-6 Astra",
          "Claude Fable 5.1",
          "Gemini 3.8",
          "Muse Spark 1.3"
        ],
        "val": [
          "GPT-6 Astra",
          "Claude Fable 5.1",
          "Gemini 3.8",
          "Muse Spark 1.3"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Según la tabla, Muse Spark 1.3 no admite audio ni vídeo; solo texto e imagen.",
        "en": "According to the table, Muse Spark 1.3 does not support audio or video; only text and image.",
        "val": "Segons la taula, Muse Spark 1.3 no admet àudio ni vídeo; només text i imatge."
      }
    },
    {
      "q": {
        "es": "¿Qué enfocamiento de fusión multimodal es más potente aunque más costoso computacionalmente?",
        "en": "Which multimodal fusion approach is more powerful even though it is more computationally expensive?",
        "val": "Quin enfocament de fusió multimodal és més potent tot i que és computacionalment més costós?"
      },
      "options": {
        "es": [
          "La fusión tardía",
          "La fusión híbrida por etapas",
          "La fusión temprana",
          "La fusión por separado y combinada al final"
        ],
        "en": [
          "Late fusion",
          "Hybrid fusion by stages",
          "Early fusion",
          "Separate fusion combined at the end"
        ],
        "val": [
          "La fusió tardana",
          "La fusió híbrida per etapes",
          "La fusió primerenca",
          "La fusió per separat i combinada al final"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La fusión temprana es más potente porque permite aprender relaciones entre modalidades, aunque es más costosa.",
        "en": "Early fusion is more powerful because it allows learning relationships between modalities, although it is more expensive.",
        "val": "La fusió primerenca és més potent perquè permet aprendre relacions entre modalitats, tot i que és més costosa."
      }
    },
    {
      "q": {
        "es": "¿Cuál es un ejemplo de aplicación transversal de la multimodalidad?",
        "en": "Which is an example of a cross-cutting multimodal application?",
        "val": "Quin és un exemple d'aplicació transversal de la multimodalitat?"
      },
      "options": {
        "es": [
          "La búsqueda multimodal, como encontrar imágenes describiéndolas con texto",
          "La gestión de contraseñas de usuarios",
          "El envío de correos electrónicos automáticos",
          "La verificación de antivirus en el ordenador"
        ],
        "en": [
          "Multimodal search, such as finding images by describing them with text",
          "Managing user passwords",
          "Sending automated emails",
          "Running antivirus checks on the computer"
        ],
        "val": [
          "La cerca multimodal, com trobar imatges descrivint-les amb text",
          "La gestió de contrasenyes d'usuaris",
          "L'enviament de correus electrònics automàtics",
          "La verificació d'antivirus a l'ordinador"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La búsqueda multimodal permite encontrar imágenes describiéndolas con texto, una aplicación transversal de la multimodalidad.",
        "en": "Multimodal search makes it possible to find images by describing them with text, a cross-cutting multimodal application.",
        "val": "La cerca multimodal permet trobar imatges descrivint-les amb text, una aplicació transversal de la multimodalitat."
      }
    }
  ],
  "ia-multimodal/02-imagen-vision": [
    {
      "q": {
        "es": "¿Cómo funcionan los modelos de generación de imágenes por difusión?",
        "en": "How do diffusion-based image generation models work?",
        "val": "Com funcionen els models de generació d'imatges per difusió?"
      },
      "options": {
        "es": [
          "Partiendo de una imagen aleatoria con ruido y refinándola paso a paso hasta que coincide con la descripción textual",
          "Combinando dos fotografías existentes para crear una nueva",
          "Recortando y pegando partes de imágenes de internet",
          "Convirtiendo el texto directamente en vectores sin imágenes"
        ],
        "en": [
          "Starting from a random noisy image and refining it step by step until it matches the text description",
          "Combining two existing photographs to create a new one",
          "Cropping and pasting parts of internet images",
          "Converting text directly into vectors without images"
        ],
        "val": [
          "Partint d'una imatge aleatòria amb soroll i refinant-la pas a pas fins que coincideix amb la descripció textual",
          "Combinant dues fotografies existents per a crear-ne una de nova",
          "Retallant i enganxant parts d'imatges d'internet",
          "Convertint el text directament en vectors sense imatges"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La difusión revierte un proceso de ruido: parte de una imagen con ruido y la refina hasta ajustarse a la descripción.",
        "en": "Diffusion reverses a noise process: it starts from a noisy image and refines it until it matches the description.",
        "val": "La difusió reverteix un procés de soroll: parteix d'una imatge amb soroll i la refina fins a ajustar-se a la descripció."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por qué conviene escribir los prompts de imágenes en inglés para mejores resultados?",
        "en": "According to the lesson, why is it a good idea to write image prompts in English for better results?",
        "val": "Segons la lliçó, per què convé escriure els prompts d'imatges en anglés per a obtenir millors resultats?"
      },
      "options": {
        "es": [
          "Porque los modelos están entrenados principalmente con descripciones en inglés y entienden mejor los matices visuales en ese idioma",
          "Porque los modelos no funcionan en otros idiomas",
          "Porque es la única forma de generar imágenes en color",
          "Porque los prompts en inglés siempre son más cortos"
        ],
        "en": [
          "Because the models are trained mainly with English descriptions and understand visual nuances better in that language",
          "Because the models do not work in other languages",
          "Because it is the only way to generate colour images",
          "Because English prompts are always shorter"
        ],
        "val": [
          "Perquè els models estan entrenats principalment amb descripcions en anglés i entenen millor els matisos visuals en aquest idioma",
          "Perquè els models no funcionen en altres idiomes",
          "Perquè és l'única manera de generar imatges en color",
          "Perquè els prompts en anglés sempre són més curts"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Los modelos están entrenados sobre todo con descripciones en inglés, por eso captan mejor los matices visuales en ese idioma.",
        "en": "The models are trained mostly with English descriptions, so they capture visual nuances better in that language.",
        "val": "Els models estan entrenats sobretot amb descripcions en anglés, per això capten millor els matisos visuals en aquest idioma."
      }
    },
    {
      "q": {
        "es": "¿Qué diferencia principal hay entre Midjourney y Stable Diffusion, según la tabla de la lección?",
        "en": "What is the main difference between Midjourney and Stable Diffusion, according to the lesson's table?",
        "val": "Quina diferència principal hi ha entre Midjourney i Stable Diffusion, segons la taula de la lliçó?"
      },
      "options": {
        "es": [
          "Midjourney es de pago por suscripción y Stable Diffusion es gratuito de código abierto",
          "Midjourney es gratuito y Stable Diffusion es de pago",
          "Midjourney no genera imágenes artísticas",
          "Ambos son idénticos y sirven para lo mismo"
        ],
        "en": [
          "Midjourney is paid by subscription and Stable Diffusion is open source and free",
          "Midjourney is free and Stable Diffusion is paid",
          "Midjourney does not generate artistic images",
          "Both are identical and serve the same purpose"
        ],
        "val": [
          "Midjourney és de pagament per subscripció i Stable Diffusion és gratuït de codi obert",
          "Midjourney és gratuït i Stable Diffusion és de pagament",
          "Midjourney no genera imatges artístiques",
          "Tots dos són idèntics i serveixen per al mateix"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Midjourney usa suscripción con calidad artística muy alta, mientras que Stable Diffusion es gratuito y de código abierto.",
        "en": "Midjourney uses a subscription with very high artistic quality, while Stable Diffusion is free and open source.",
        "val": "Midjourney usa subscripció amb qualitat artística molt alta, mentre que Stable Diffusion és gratuït i de codi obert."
      }
    },
    {
      "q": {
        "es": "¿Cuál de las siguientes es una limitación actual de las imágenes generadas por IA?",
        "en": "Which of the following is a current limitation of AI-generated images?",
        "val": "Quina de les següents és una limitació actual de les imatges generades per IA?"
      },
      "options": {
        "es": [
          "Pueden producir alucinaciones visuales, añadiendo elementos que no se pidieron",
          "Siempre tienen una resolución demasiado baja",
          "Nunca reflejan sesgos de sus datos de entrenamiento",
          "No se pueden usar en materiales educativos"
        ],
        "en": [
          "They can produce visual hallucinations, adding elements that were not requested",
          "They always have too low a resolution",
          "They never reflect biases from their training data",
          "They cannot be used in educational materials"
        ],
        "val": [
          "Poden produir al·lucinacions visuals, afegint elements que no es van demanar",
          "Sempre tenen una resolució massa baixa",
          "No reflecteixen mai biaixos de les seues dades d'entrenament",
          "No es poden usar en materials educatius"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Entre las limitaciones está la alucinación visual, además de los derechos de autor, el sesgo y la consistencia.",
        "en": "Among the limitations are visual hallucination, plus copyright, bias and consistency.",
        "val": "Entre les limitacions està l'al·lucinació visual, a més dels drets d'autor, el biaix i la consistència."
      }
    }
  ],
  "ia-multimodal/03-video-animacion": [
    {
      "q": {
        "es": "Según la tabla de la lección, ¿qué herramienta ofrece la mayor duración máxima de vídeo?",
        "en": "According to the lesson's table, which tool offers the longest maximum video duration?",
        "val": "Segons la taula de la lliçó, quina eina ofereix la durada màxima de vídeo més llarga?"
      },
      "options": {
        "es": [
          "Runway Gen-3",
          "Pika Labs",
          "Kaiber",
          "Sora"
        ],
        "en": [
          "Runway Gen-3",
          "Pika Labs",
          "Kaiber",
          "Sora"
        ],
        "val": [
          "Runway Gen-3",
          "Pika Labs",
          "Kaiber",
          "Sora"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "Según la tabla, Sora promete vídeos de hasta 60 segundos, la mayor duración de las opciones.",
        "en": "According to the table, Sora promises videos of up to 60 seconds, the longest of the options.",
        "val": "Segons la taula, Sora promet vídeos de fins a 60 segons, la durada més llarga de les opcions."
      }
    },
    {
      "q": {
        "es": "¿Qué permite hacer Descript según la lección?",
        "en": "What does Descript allow you to do according to the lesson?",
        "val": "Què permet fer Descript segons la lliçó?"
      },
      "options": {
        "es": [
          "Editar vídeo como si fuera un documento de texto: borras palabras y el vídeo se corta solo",
          "Generar únicamente música de fondo para vídeos",
          "Crear avatares realistas sin contenido de vídeo",
          "Solo transcribir audio sin editar vídeo"
        ],
        "en": [
          "Edit video as if it were a text document: you delete words and the video cuts itself",
          "Only generate background music for videos",
          "Create realistic avatars without video content",
          "Only transcribe audio without editing video"
        ],
        "val": [
          "Editar vídeo com si fóra un document de text: esborres paraules i el vídeo es talla sol",
          "Generar únicament música de fons per a vídeos",
          "Crear avatars realistes sense contingut de vídeo",
          "Només transcriure àudio sense editar vídeo"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Descript permite editar vídeo basándose en la transcripción: al borrar palabras, el vídeo se ajusta automáticamente.",
        "en": "Descript lets you edit video based on the transcript: when you delete words, the video adjusts automatically.",
        "val": "Descript permet editar vídeo basant-se en la transcripció: en esborrar paraules, el vídeo s'ajusta automàticament."
      }
    },
    {
      "q": {
        "es": "¿Para qué sirven herramientas como HeyGen, Synthesia y D-ID?",
        "en": "What are tools like HeyGen, Synthesia and D-ID used for?",
        "val": "Per a què serveixen eines com HeyGen, Synthesia i D-ID?"
      },
      "options": {
        "es": [
          "Crear avatares virtuales que leen guiones o animan fotografías para que hablen",
          "Eliminar el fondo de las imágenes",
          "Transcribir conversaciones en tiempo real",
          "Generar música instrumental a partir de prompts"
        ],
        "en": [
          "Creating virtual avatars that read scripts or animate photographs so they can speak",
          "Removing the background from images",
          "Transcribing conversations in real time",
          "Generating instrumental music from prompts"
        ],
        "val": [
          "Crear avatars virtuals que lliguen guions o animen fotografies perquè parlen",
          "Eliminar el fons de les imatges",
          "Transcriure converses en temps real",
          "Generar música instrumental a partir de prompts"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "HeyGen, Synthesia y D-ID sirven para crear presentadores y avatares virtuales a partir de texto o audio.",
        "en": "HeyGen, Synthesia and D-ID are used to create virtual presenters and avatars from text or audio.",
        "val": "HeyGen, Synthesia i D-ID serveixen per a crear presentadors i avatars virtuals a partir de text o àudio."
      }
    },
    {
      "q": {
        "es": "¿Cuál es una de las principales limitaciones de la generación de vídeo con IA?",
        "en": "What is one of the main limitations of AI video generation?",
        "val": "Quina és una de les principals limitacions de la generació de vídeo amb IA?"
      },
      "options": {
        "es": [
          "Los clips generados son de pocos segundos y los personajes pueden cambiar entre planos",
          "No requiere potencia computacional para ninguna tarea",
          "Solo puede generar vídeos en blanco y negro",
          "No permite ninguna función de edición automática"
        ],
        "en": [
          "Generated clips last only a few seconds and characters can change between shots",
          "It does not require computing power for any task",
          "It can only generate black and white videos",
          "It does not allow any automatic editing features"
        ],
        "val": [
          "Els clips generats són de pocs segons i els personatges poden canviar entre plans",
          "No requereix potència computacional per a cap tasca",
          "Només pot generar vídeos en blanc i negre",
          "No permet cap funció d'edició automàtica"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Entre las limitaciones están el corto alcance, la inconsistencia entre planos y el alto coste computacional.",
        "en": "Among the limitations are the short duration, inconsistency between shots and high computational cost.",
        "val": "Entre les limitacions estan l'abast curt, la inconsistència entre plans i l'alt cost computacional."
      }
    }
  ],
  "ia-multimodal/04-audio-voz": [
    {
      "q": {
        "es": "¿Qué característica destaca de ElevenLabs en síntesis de voz?",
        "en": "What feature stands out about ElevenLabs in voice synthesis?",
        "val": "Quina característica destaca d'ElevenLabs en síntesi de veu?"
      },
      "options": {
        "es": [
          "Ofrece voces hiperrealistas con control de tono, velocidad y emoción, y permite clonar voces",
          "Solo transcribe audio a texto",
          "Solo genera música instrumental clásica",
          "Requiere conexión obligatoria a todos los dispositivos"
        ],
        "en": [
          "It offers hyperrealistic voices with control over pitch, speed and emotion, and allows voice cloning",
          "It only transcribes audio to text",
          "It only generates classical instrumental music",
          "It requires a mandatory connection to all devices"
        ],
        "val": [
          "Ofereix veus hiperrealistes amb control de to, velocitat i emoció, i permet clonar veus",
          "Només transcriu àudio a text",
          "Només genera música instrumental clàssica",
          "Requereix connexió obligatòria a tots els dispositius"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "ElevenLabs es un referente que ofrece voces hiperrealistas y permite clonar voces con pocos minutos de audio.",
        "en": "ElevenLabs is a benchmark that offers hyperrealistic voices and allows cloning voices with just a few minutes of audio.",
        "val": "ElevenLabs és un referent que ofereix veus hiperrealistes i permet clonar veus amb pocs minuts d'àudio."
      }
    },
    {
      "q": {
        "es": "¿Por qué se considera relevante al modelo Whisper de OpenAI?",
        "en": "Why is OpenAI's Whisper model considered relevant?",
        "val": "Per què es considera rellevant el model Whisper d'OpenAI?"
      },
      "options": {
        "es": [
          "Porque transcribe audio con gran precisión en más de 90 idiomas y se puede ejecutar localmente",
          "Porque solo funciona conectado a un servidor pagado",
          "Porque genera canciones completas con letra y melodía",
          "Porque clona la voz sin necesidad de muestra previa"
        ],
        "en": [
          "Because it transcribes audio with great accuracy in more than 90 languages and can run locally",
          "Because it only works connected to a paid server",
          "Because it generates complete songs with lyrics and melody",
          "Because it clones voices without needing a prior sample"
        ],
        "val": [
          "Perquè transcriu àudio amb gran precisió en més de 90 idiomes i es pot executar localment",
          "Perquè només funciona connectat a un servidor de pagament",
          "Perquè genera cançons completes amb lletra i melodia",
          "Perquè clona la veu sense necessitat de mostra prèvia"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Whisper es gratuito, de código abierto y transcribe con precisión en más de 90 idiomas, protegiendo la privacidad.",
        "en": "Whisper is free, open source and transcribes accurately in more than 90 languages, protecting privacy.",
        "val": "Whisper és gratuït, de codi obert i transcriu amb precisió en més de 90 idiomes, protegint la privacitat."
      }
    },
    {
      "q": {
        "es": "¿Qué riesgo ético plantea la clonación de voz sin consentimiento?",
        "en": "What ethical risk does voice cloning without consent raise?",
        "val": "Quin risc ètic planteja la clonació de veu sense consentiment?"
      },
      "options": {
        "es": [
          "La suplantación de identidad y la desinformación mediante audios falsos",
          "El aumento de la velocidad de internet",
          "La mejora de la calidad de las fotografías antiguas",
          "La reducción del almacenamiento de los dispositivos"
        ],
        "en": [
          "Identity impersonation and disinformation through fake audio",
          "Increasing internet speed",
          "Improving the quality of old photographs",
          "Reducing the storage of devices"
        ],
        "val": [
          "La suplantació d'identitat i la desinformació mitjançant àudios falsos",
          "L'augment de la velocitat d'internet",
          "La millora de la qualitat de les fotografies antigues",
          "La reducció de l'emmagatzematge dels dispositius"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Cionar la voz sin consentimiento puede llevar a suplantación de identidad, desinformación y estafas telefónicas.",
        "en": "Cloning a voice without consent can lead to identity impersonation, disinformation and phone scams.",
        "val": "Clonar la veu sense consentiment pot portar a la suplantació d'identitat, la desinformació i estafes telefòniques."
      }
    },
    {
      "q": {
        "es": "Según la tabla de la lección, ¿qué herramienta de música ofrece salida instrumental con un control alto?",
        "en": "According to the lesson's table, which music tool offers instrumental output with high control?",
        "val": "Segons la taula de la lliçó, quina eina de música ofereix eixida instrumental amb un control alt?"
      },
      "options": {
        "es": [
          "Suno AI",
          "AIVA",
          "MusicGen",
          "Udio"
        ],
        "en": [
          "Suno AI",
          "AIVA",
          "MusicGen",
          "Udio"
        ],
        "val": [
          "Suno AI",
          "AIVA",
          "MusicGen",
          "Udio"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "AIVA es un compositor entrenado con música clásica, pensado para bandas sonoras y música instrumental con control alto.",
        "en": "AIVA is a composer trained with classical music, designed for soundtracks and instrumental music with high control.",
        "val": "AIVA és un compositor entrenat amb música clàssica, pensat per a bandes sonores i música instrumental amb control alt."
      }
    }
  ],
  "ia-multimodal/05-aplicaciones-multimodales": [
    {
      "q": {
        "es": "En el caso del vídeo educativo sobre el sistema solar, ¿qué herramienta se usa para narrar el contenido?",
        "en": "In the educational video about the solar system case, which tool is used to narrate the content?",
        "val": "En el cas del vídeo educatiu sobre el sistema solar, quina eina s'usa per a narrar el contingut?"
      },
      "options": {
        "es": [
          "Runway",
          "ElevenLabs",
          "DALL-E",
          "ChatGPT"
        ],
        "en": [
          "Runway",
          "ElevenLabs",
          "DALL-E",
          "ChatGPT"
        ],
        "val": [
          "Runway",
          "ElevenLabs",
          "DALL-E",
          "ChatGPT"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "En el flujo del vídeo educativo se narra el contenido con ElevenLabs, que se encarga del audio.",
        "en": "In the educational video workflow, the content is narrated with ElevenLabs, which handles the audio.",
        "val": "En el flux del vídeo educatiu es narra el contingut amb ElevenLabs, que s'encarrega de l'àudio."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué puede hacer un asistente de estudio multimodal con un apunte escaneado?",
        "en": "According to the lesson, what can a multimodal study assistant do with a scanned note?",
        "val": "Segons la lliçó, què pot fer un assistent d'estudi multimodal amb un apunt escanejat?"
      },
      "options": {
        "es": [
          "Transcribirlo y resumirlo",
          "Solo imprimirlo en papel",
          "Convertirlo en un vídeo de animación",
          "Eliminarlo permanentemente del dispositivo"
        ],
        "en": [
          "Transcribe it and summarize it",
          "Only print it on paper",
          "Turn it into an animated video",
          "Permanently delete it from the device"
        ],
        "val": [
          "Transcriure'l i resumir-lo",
          "Només imprimir-lo en paper",
          "Convertir-lo en un vídeo d'animació",
          "Eliminar-lo permanentment del dispositiu"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Al subir un apunte escaneado, el asistente multimodal lo transcribe y resume, además de poder responder preguntas sobre él.",
        "en": "When uploading a scanned note, the multimodal assistant transcribes and summarizes it, and can also answer questions about it.",
        "val": "En pujar un apunt escanejat, l'assistent multimodal el transcriu i resumeix, a més de poder respondre preguntes sobre ell."
      }
    },
    {
      "q": {
        "es": "Según la tabla de accesibilidad, ¿qué solución multimodal se propone para la discapacidad auditiva?",
        "en": "According to the accessibility table, what multimodal solution is proposed for hearing impairment?",
        "val": "Segons la taula d'accessibilitat, quina solució multimodal es proposa per a la discapacitat auditiva?"
      },
      "options": {
        "es": [
          "Transcripción y subtítulos",
          "Descripción de imágenes",
          "TTS y voz sintetizada",
          "Resumen con audio"
        ],
        "en": [
          "Transcription and subtitles",
          "Image description",
          "TTS and synthesized voice",
          "Summary with audio"
        ],
        "val": [
          "Transcripció i subtítols",
          "Descripció d'imatges",
          "TTS i veu sintetitzada",
          "Resum amb àudio"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Para la discapacidad auditiva, la tabla propone transcripción y subtítulos como solución multimodal.",
        "en": "For hearing impairment, the table proposes transcription and subtitles as the multimodal solution.",
        "val": "Per a la discapacitat auditiva, la taula proposa transcripció i subtítols com a solució multimodal."
      }
    },
    {
      "q": {
        "es": "¿Qué paso viene justo después de generar secuencialmente los elementos en el flujo de trabajo multimodal recomendado?",
        "en": "What step comes right after sequentially generating the elements in the recommended multimodal workflow?",
        "val": "Quin pas ve just després de generar seqüencialment els elements en el flux de treball multimodal recomanat?"
      },
      "options": {
        "es": [
          "Definir el objetivo",
          "Integrar y ajustar combinando todo en una plataforma de edición",
          "Elegir las modalidades",
          "Seleccionar las herramientas por modalidad"
        ],
        "en": [
          "Defining the goal",
          "Integrating and adjusting by combining everything in an editing platform",
          "Choosing the modalities",
          "Selecting the tools per modality"
        ],
        "val": [
          "Definir l'objectiu",
          "Integrar i ajustar combinant-ho tot en una plataforma d'edició",
          "Triar les modalitats",
          "Seleccionar les eines per modalitat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El flujo recomienda generar secuencialmente y después integrar y ajustar todo en una plataforma de edición.",
        "en": "The workflow recommends generating sequentially and then integrating and adjusting everything in an editing platform.",
        "val": "El flux recomana generar seqüencialment i després integrar i ajustar-ho tot en una plataforma d'edició."
      }
    }
  ],
  "ia-multimodal/06-resumen-recursos": [
    {
      "q": {
        "es": "Según el resumen del bloque, ¿qué modelos lideran la capacidad multimodal integrando texto, imagen, audio y vídeo?",
        "en": "According to the block summary, which models lead the multimodal capability integrating text, image, audio and video?",
        "val": "Segons el resum del bloc, quins models lideren la capacitat multimodal integrant text, imatge, àudio i vídeo?"
      },
      "options": {
        "es": [
          "GPT-6 Astra, Gemini 3.8 y Claude 5.1",
          "Solo modelos de código abierto sin nombre",
          "Midjourney y Stable Diffusion",
          "Descript y CapCut"
        ],
        "en": [
          "GPT-6 Astra, Gemini 3.8 and Claude 5.1",
          "Only unnamed open-source models",
          "Midjourney and Stable Diffusion",
          "Descript and CapCut"
        ],
        "val": [
          "GPT-6 Astra, Gemini 3.8 i Claude 5.1",
          "Només models de codi obert sense nom",
          "Midjourney i Stable Diffusion",
          "Descript i CapCut"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El resumen señala que GPT-6 Astra, Gemini 3.8 y Claude 5.1 lideran la capacidad multimodal mediante arquitecturas de fusión.",
        "en": "The summary points out that GPT-6 Astra, Gemini 3.8 and Claude 5.1 lead the multimodal capability through fusion architectures.",
        "val": "El resum assenyala que GPT-6 Astra, Gemini 3.8 i Claude 5.1 lideren la capacitat multimodal mitjançant arquitectures de fusió."
      }
    },
    {
      "q": {
        "es": "¿Qué define el término transcripción (STT) en el glosario del bloque?",
        "en": "What does the term transcription (STT) define in the block glossary?",
        "val": "Què defineix el terme transcripció (STT) en el glossari del bloc?"
      },
      "options": {
        "es": [
          "La conversión de audio a texto",
          "La conversión de texto a audio hablado",
          "La capacidad de procesar solo imágenes",
          "La técnica que revierte un proceso de ruido"
        ],
        "en": [
          "The conversion of audio into text",
          "The conversion of text into spoken audio",
          "The ability to process only images",
          "The technique that reverses a noise process"
        ],
        "val": [
          "La conversió d'àudio a text",
          "La conversió de text a àudio parlat",
          "La capacitat de processar només imatges",
          "La tècnica que reverteix un procés de soroll"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La transcripción (STT) convierte audio en texto, mientras que la síntesis de voz (TTS) hace lo contrario.",
        "en": "Transcription (STT) converts audio into text, while voice synthesis (TTS) does the opposite.",
        "val": "La transcripció (STT) converteix àudio a text, mentre que la síntesi de veu (TTS) fa el contrari."
      }
    },
    {
      "q": {
        "es": "Según el resumen, ¿qué posturas destaca la lección sobre la clonación de voz?",
        "en": "According to the summary, what does the lesson highlight about voice cloning?",
        "val": "Segons el resum, què destaca la lliçó sobre la clonació de veu?"
      },
      "options": {
        "es": [
          "Plantea oportunidades y también riesgos éticos",
          "Está totalmente prohibida en todos los países del mundo",
          "Solo tiene usos para la música instrumental",
          "No tiene ninguna aplicación legítima"
        ],
        "en": [
          "It raises opportunities as well as ethical risks",
          "It is completely banned in every country in the world",
          "It only has uses for instrumental music",
          "It has no legitimate applications"
        ],
        "val": [
          "Planteja oportunitats i també riscos ètics",
          "Està totalment prohibida en tots els països del món",
          "Només té usos per a la música instrumental",
          "No té cap aplicació legítima"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección destaca que la clonación de voz plantea oportunidades y riesgos éticos.",
        "en": "The lesson highlights that voice cloning raises opportunities and ethical risks.",
        "val": "La lliçó destaca que la clonació de veu planteja oportunitats i riscos ètics."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué es la ingeniería de prompts visuales?",
        "en": "According to the lesson, what is visual prompt engineering?",
        "val": "Segons la lliçó, què és l'enginyeria de prompts visuals?"
      },
      "options": {
        "es": [
          "La habilidad de describir correctamente una imagen para que el modelo la genere como se desea",
          "La técnica de transcribir vídeos a texto",
          "La clonación de voces para doblaje",
          "La generación de música a partir de imágenes"
        ],
        "en": [
          "The skill of correctly describing an image so that the model generates it as desired",
          "The technique of transcribing videos into text",
          "The cloning of voices for dubbing",
          "The generation of music from images"
        ],
        "val": [
          "L'habilitat de descriure correctament una imatge perquè el model la genere com es desitja",
          "La tècnica de transcriure vídeos a text",
          "La clonació de veus per a doblatge",
          "La generació de música a partir d'imatges"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La ingeniería de prompts visuales es la descripción textual que guía la generación de una imagen para obtener buenos resultados.",
        "en": "Visual prompt engineering is the textual description that guides the generation of an image to obtain good results.",
        "val": "L'enginyeria de prompts visuals és la descripció textual que guia la generació d'una imatge per a obtenir bons resultats."
      }
    }
  ],
  "programacion/01-introduccion": [
    {
      "q": {
        "es": "Según la lección, ¿qué relación tiene la IA con quien programa?",
        "en": "According to the lesson, what is the relationship between AI and the programmer?",
        "val": "Segons la lliçó, quina relació té la IA amb qui programa?"
      },
      "options": {
        "es": [
          "La IA reemplaza por completo a la persona que programa",
          "La IA potencia a quien programa, que pasa a dirigir la generación de código",
          "La IA solo sirve para escribir comentarios en el código",
          "La IA elimina la necesidad de aprender a programar"
        ],
        "en": [
          "AI completely replaces the programmer",
          "AI empowers the programmer, who moves to directing code generation",
          "AI is only useful for writing code comments",
          "AI eliminates the need to learn programming"
        ],
        "val": [
          "La IA reemplaça completament la persona que programa",
          "La IA potencia qui programa, que passa a dirigir la generació de codi",
          "La IA només serveix per a escriure comentaris en el codi",
          "La IA elimina la necessitat d'aprendre a programar"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección explica que la IA no reemplaza a quien programa sino que la potencia, y quien programa pasa de escribir código a dirigir una orquesta que genera código de forma automatizada.",
        "en": "The lesson explains that AI does not replace the programmer but empowers them, and the programmer moves from writing code to conducting an orchestra that generates code automatically.",
        "val": "La lliçó explica que la IA no reemplaça qui programa sinó que la potencia, i qui programa passa d'escriure codi a dirigir una orquestra que genera codi de manera automatitzada."
      }
    },
    {
      "q": {
        "es": "¿En qué año revolucionó GitHub Copilot el autocompletado según la línea de tiempo de la lección?",
        "en": "In what year did GitHub Copilot revolutionize autocomplete according to the lesson timeline?",
        "val": "En quin any GitHub Copilot va revolucionar l'autocompletat segons la línia de temps de la lliçó?"
      },
      "options": {
        "es": [
          "2022",
          "2021",
          "2023",
          "2024"
        ],
        "en": [
          "2022",
          "2021",
          "2023",
          "2024"
        ],
        "val": [
          "2022",
          "2021",
          "2023",
          "2024"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La línea de tiempo indica que en 2021 GitHub Copilot revolucionó el autocompletado, siendo la primera herramienta ampliamente adoptada de asistencia de código con IA.",
        "en": "The timeline indicates that in 2021 GitHub Copilot revolutionized autocomplete, being the first widely adopted AI code assistant.",
        "val": "La línia de temps indica que en 2021 GitHub Copilot va revolucionar l'autocompletat, sent la primera eina àmpliament adoptada d'assistència de codi amb IA."
      }
    },
    {
      "q": {
        "es": "¿Qué factor influye en la calidad de las sugerencias de un asistente de código?",
        "en": "What factor influences the quality of a code assistant's suggestions?",
        "val": "Quin factor influeix en la qualitat dels suggeriments d'un assistent de codi?"
      },
      "options": {
        "es": [
          "El precio de la suscripción del asistente",
          "El contexto que el modelo tiene disponible del proyecto",
          "El número de personas que usan la herramienta",
          "La velocidad del ordenador donde se ejecuta"
        ],
        "en": [
          "The subscription price of the assistant",
          "The context the model has available from the project",
          "The number of people using the tool",
          "The speed of the computer running it"
        ],
        "val": [
          "El preu de la subscripció de l'assistent",
          "El context que el model té disponible del projecte",
          "El nombre de persones que utilitzen l'eina",
          "La velocitat de l'ordinador on s'executa"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección detalla que la calidad depende del contexto disponible: archivo actual, archivos abiertos, proyecto completo y documentación. Cuantas más pistas contextuales se den, mejores serán las sugerencias.",
        "en": "The lesson details that quality depends on available context: current file, open files, whole project and documentation. The more contextual clues given, the better the suggestions will be.",
        "val": "La lliçó detalla que la qualitat depén del context disponible: fitxer actual, fitxers oberts, projecte complet i documentació. Com més pistes contextuals es donen, millors seran els suggeriments."
      }
    },
    {
      "q": {
        "es": "Según la tabla de mitos y realidades, ¿qué afirmación es correcta?",
        "en": "According to the myths and realities table, which statement is correct?",
        "val": "Segons la taula de mites i realitats, quina afirmació és correcta?"
      },
      "options": {
        "es": [
          "La IA solo funciona con lenguajes de programación populares",
          "El código generado por IA siempre es perfecto",
          "La demanda de personas programadoras cualificadas sigue creciendo",
          "La IA solo sirve para autocompletado de código"
        ],
        "en": [
          "AI only works with popular programming languages",
          "Code generated by AI is always perfect",
          "The demand for qualified programmers keeps growing",
          "AI is only useful for code autocomplete"
        ],
        "val": [
          "La IA només funciona amb llenguatges de programació populars",
          "El codi generat per IA és sempre perfecte",
          "La demanda de persones programadores qualificades continua creixent",
          "La IA només serveix per a autocompletat de codi"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La tabla de mitos y realidades indica que la demanda de perfiles cualificados crece, desmintiendo el mito de que las personas programadoras ya no harán falta.",
        "en": "The myths and realities table indicates that the demand for qualified profiles grows, disproving the myth that programmers will no longer be needed.",
        "val": "La taula de mites i realitats indica que la demanda de perfils qualificats creix, desmentint el mite que les persones programadores ja no faran falta."
      }
    }
  ],
  "programacion/02-copilot-cursor": [
    {
      "q": {
        "es": "¿Cuál es la diferencia fundamental entre GitHub Copilot y Cursor?",
        "en": "What is the fundamental difference between GitHub Copilot and Cursor?",
        "val": "Quina és la diferència fonamental entre GitHub Copilot i Cursor?"
      },
      "options": {
        "es": [
          "Copilot es un IDE completo y Cursor es una extensión",
          "Copilot es una extensión y Cursor es un IDE construido con IA desde cero",
          "Ambos son exactamente iguales pero con precios distintos",
          "Copilot solo funciona con Python y Cursor con todos los lenguajes"
        ],
        "en": [
          "Copilot is a complete IDE and Cursor is an extension",
          "Copilot is an extension and Cursor is an IDE built from scratch with AI",
          "Both are exactly the same but with different prices",
          "Copilot only works with Python and Cursor with all languages"
        ],
        "val": [
          "Copilot és un IDE complet i Cursor és una extensió",
          "Copilot és una extensió i Cursor és un IDE construït des de zero amb IA",
          "Ambdós són exactament iguals però amb preus diferents",
          "Copilot només funciona amb Python i Cursor amb tots els llenguatges"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección establece que Copilot es una extensión que se integra en el editor, mientras que Cursor es un IDE construido desde cero con la IA en el centro, lo que le permite ofrecer capacidades nativas de edición multiarchivo.",
        "en": "The lesson establishes that Copilot is an extension that integrates into the editor, while Cursor is an IDE built from scratch with AI at its core, allowing it to offer native multi-file editing capabilities.",
        "val": "La lliçó estableix que Copilot és una extensió que s'integra en l'editor, mentre que Cursor és un IDE construït des de zero amb la IA al centre, cosa que li permet oferir capacitats natives d'edició multifixer."
      }
    },
    {
      "q": {
        "es": "¿Qué permite hacer el archivo .cursorrules en Cursor?",
        "en": "What does the .cursorrules file allow you to do in Cursor?",
        "val": "Què permet fer el fitxer .cursorrules en Cursor?"
      },
      "options": {
        "es": [
          "Cambiar el tema del editor",
          "Definir instrucciones globales que guían al asistente de IA",
          "Instalar extensiones adicionales",
          "Exportar el historial de código generado"
        ],
        "en": [
          "Change the editor theme",
          "Define global instructions that guide the AI assistant",
          "Install additional extensions",
          "Export the history of generated code"
        ],
        "val": [
          "Canviar el tema de l'editor",
          "Definir instruccions globals que guien l'assistent d'IA",
          "Instal·lar extensions addicionals",
          "Exportar l'historial de codi generat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección muestra que .cursorrules es un archivo donde se escriben instrucciones globales como preferencias de lenguaje, patrones de componentes y herramientas de testing, y que invertir 10 minutos en configurarlo mejora la calidad del código generado durante semanas.",
        "en": "The lesson shows that .cursorrules is a file where you write global instructions such as language preferences, component patterns and testing tools, and that spending 10 minutes configuring it improves the quality of generated code for weeks.",
        "val": "La lliçó mostra que .cursorrules és un fitxer on s'escriuen instruccions globals com preferències de llenguatge, patrons de components i eines de testing, i que invertir 10 minuts a configurar-lo millora la qualitat del codi generat durant setmanes."
      }
    },
    {
      "q": {
        "es": "¿Qué capacidad exclusiva ofrece Cursor que Copilot no tiene de forma nativa?",
        "en": "What exclusive capability does Cursor offer that Copilot does not have natively?",
        "val": "Quina capacitat exclusiva ofereix Cursor que Copilot no té de manera nativa?"
      },
      "options": {
        "es": [
          "Soporte para múltiples lenguajes de programación",
          "Composer, que genera múltiples archivos simultáneamente",
          "Un chat conversacional para hacer preguntas",
          "La posibilidad de crear comentarios en el código"
        ],
        "en": [
          "Support for multiple programming languages",
          "Composer, which generates multiple files simultaneously",
          "A conversational chat to ask questions",
          "The ability to create code comments"
        ],
        "val": [
          "Suport per a múltiples llenguatges de programació",
          "Composer, que genera múltiples fitxers simultàniament",
          "Un xat conversacional per a fer preguntes",
          "La possibilitat de crear comentaris en el codi"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Entre las capacidades exclusivas de Cursor se incluye Composer, que genera múltiples archivos simultáneamente, además del modo agente y la edición por instrucciones en lenguaje natural, algo que un asistente en forma de extensión no puede hacer de forma nativa.",
        "en": "Among Cursor's exclusive capabilities is Composer, which generates multiple files simultaneously, plus agent mode and instruction-based editing in natural language, something an extension-based assistant cannot do natively.",
        "val": "Entre les capacitats exclusives de Cursor es inclou Composer, que genera múltiples fitxers simultàniament, a més del mode agent i l'edició per instruccions en llenguatge natural, cosa que un assistent en forma d'extensió no pot fer de manera nativa."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es el riesgo principal de la dependencia excesiva de asistentes de código?",
        "en": "According to the lesson, what is the main risk of excessive reliance on code assistants?",
        "val": "Segons la lliçó, quin és el risc principal de la dependència excessiva dels assistents de codi?"
      },
      "options": {
        "es": [
          "Que el código generado tenga errores de seguridad",
          "Que se pierda la habilidad para escribir código sin ayuda",
          "Que los asistentes dejen de funcionar con actualizaciones",
          "Que el precio de las herramientas aumente con el tiempo"
        ],
        "en": [
          "That the generated code has security errors",
          "That the ability to write code without help is lost",
          "That the assistants stop working with updates",
          "That the price of tools increases over time"
        ],
        "val": [
          "Que el codi generat tinga errors de seguretat",
          "Que es perda l'habilitat per a escriure codi sense ajuda",
          "Que els assistents deixen de funcionar amb actualitzacions",
          "Que el preu de les eines augmente amb el temps"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección enumera entre sus limitaciones la dependencia como riesgo, advirtiendo que quien programa puede perder la habilidad para escribir código por su cuenta si se apoya excesivamente en los asistentes.",
        "en": "The lesson lists dependency among its limitations, warning that the programmer may lose the ability to write code on their own if they rely too heavily on assistants.",
        "val": "La lliçó enumera entre les seues limitacions la dependència com a risc, advertint que qui programa pot perdre l'habilitat per a escriure codi pel seu compte si es recolza excessivament en els assistents."
      }
    }
  ],
  "programacion/03-claude-code-chat": [
    {
      "q": {
        "es": "¿Qué hace diferente a Claude Code de un chat conversacional como ChatGPT?",
        "en": "What makes Claude Code different from a conversational chat like ChatGPT?",
        "val": "Què fa diferent a Claude Code d'un xat conversacional com ChatGPT?"
      },
      "options": {
        "es": [
          "Claude Code tiene un contexto más amplio de tokens",
          "Claude Code es un agente de terminal que puede leer, escribir y ejecutar código directamente",
          "Claude Code es gratuito mientras que ChatGPT es de pago",
          "Claude Code solo funciona con el lenguaje Python"
        ],
        "en": [
          "Claude Code has a wider token context",
          "Claude Code is a terminal agent that can read, write and run code directly",
          "Claude Code is free while ChatGPT is paid",
          "Claude Code only works with the Python language"
        ],
        "val": [
          "Claude Code té un context de tokens més ampli",
          "Claude Code és un agent de terminal que pot llegir, escriure i executar codi directament",
          "Claude Code és gratuït mentre que ChatGPT és de pagament",
          "Claude Code només funciona amb el llenguatge Python"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección explica que Claude Code no es un chat web sino un agente de terminal que vive en la máquina del usuario y tiene acceso directo al proyecto, pudiendo leer, escribir y ejecutar código, a diferencia de ChatGPT que solo trabaja con lo que el usuario pega en el chat.",
        "en": "The lesson explains that Claude Code is not a web chat but a terminal agent that lives on the user's machine and has direct access to the project, able to read, write and run code, unlike ChatGPT which only works with what the user pastes into the chat.",
        "val": "La lliçó explica que Claude Code no és un xat web sinó un agent de terminal que viu a la màquina de l'usuari i té accés directe al projecte, capaç de llegir, escriure i executar codi, a diferència de ChatGPT que només treballa amb allò que l'usuari enganxa al xat."
      }
    },
    {
      "q": {
        "es": "Según la tabla comparativa, ¿cuántos tokens de contexto ofrece Gemini frente a ChatGPT?",
        "en": "According to the comparison table, how many context tokens does Gemini offer versus ChatGPT?",
        "val": "Segons la taula comparativa, quantes tokens de context ofereix Gemini front a ChatGPT?"
      },
      "options": {
        "es": [
          "Gemini ofrece 200K y ChatGPT 128K",
          "Gemini ofrece 1M y ChatGPT 128K",
          "Ambos ofrecen exactamente 200K tokens",
          "Gemini ofrece 128K y ChatGPT 1M"
        ],
        "en": [
          "Gemini offers 200K and ChatGPT 128K",
          "Gemini offers 1M and ChatGPT 128K",
          "Both offer exactly 200K tokens",
          "Gemini offers 128K and ChatGPT 1M"
        ],
        "val": [
          "Gemini ofereix 200K i ChatGPT 128K",
          "Gemini ofereix 1M i ChatGPT 128K",
          "Ambdós ofereixen exactament 200K tokens",
          "Gemini ofereix 128K i ChatGPT 1M"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La tabla comparativa de la lección indica que Gemini ofrece hasta 1 millón de tokens de contexto, lo que permite analizar proyectos completos, mientras que ChatGPT ofrece 128K tokens con GPT-4o.",
        "en": "The lesson's comparison table indicates that Gemini offers up to 1 million context tokens, allowing analysis of complete projects, while ChatGPT offers 128K tokens with GPT-4o.",
        "val": "La taula comparativa de la lliçó indica que Gemini ofereix fins a 1 milió de tokens de context, cosa que permet analitzar projectes complets, mentre que ChatGPT ofereix 128K tokens amb GPT-4o."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuáles son las cinco fases del flujo de trabajo híbrido recomendado?",
        "en": "According to the lesson, what are the five phases of the recommended hybrid workflow?",
        "val": "Segons la lliçó, quines són les cinc fases del flux de treball híbrid recomanat?"
      },
      "options": {
        "es": [
          "Planificación, implementación, revisión, depuración y documentación",
          "Análisis, diseño, codificación, testing y despliegue",
          "Investigación, prototipado, desarrollo, pruebas y lanzamiento",
          "Recolección de requisitos, arquitectura, implementación, optimización y mantenimiento"
        ],
        "en": [
          "Planning, implementation, review, debugging and documentation",
          "Analysis, design, coding, testing and deployment",
          "Research, prototyping, development, testing and launch",
          "Requirements gathering, architecture, implementation, optimization and maintenance"
        ],
        "val": [
          "Planificació, implementació, revisió, depuració i documentació",
          "Anàlisi, disseny, codificació, testing i desplegament",
          "Investigació, prototipat, desenvolupament, proves i llançament",
          "Recol·lecció de requisits, arquitectura, implementació, optimització i manteniment"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección propone un flujo híbrido de cinco pasos: planificar con Claude Code o ChatGPT, implementar con Copilot o Cursor, revisar con Claude Code, depurar con ChatGPT o Claude, y documentar con un asistente conversacional.",
        "en": "The lesson proposes a five-step hybrid flow: plan with Claude Code or ChatGPT, implement with Copilot or Cursor, review with Claude Code, debug with ChatGPT or Claude, and document with a conversational assistant.",
        "val": "La lliçó proposa un flux híbrid de cinc passos: planificar amb Claude Code o ChatGPT, implementar amb Copilot o Cursor, revisar amb Claude Code, depurar amb ChatGPT o Claude, i documentar amb un assistent conversacional."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la limitación principal de ChatGPT para programación según la lección?",
        "en": "What is ChatGPT's main limitation for programming according to the lesson?",
        "val": "Quina és la limitació principal de ChatGPT per a programació segons la lliçó?"
      },
      "options": {
        "es": [
          "No soporta ningún lenguaje de programación",
          "No tiene acceso al proyecto completo ni ejecuta código",
          "Solo funciona en horario laboral",
          "Tiene un límite de 100 tokens por conversación"
        ],
        "en": [
          "It does not support any programming language",
          "It has no access to the whole project and cannot execute code",
          "It only works during business hours",
          "It has a limit of 100 tokens per conversation"
        ],
        "val": [
          "No dona suport a cap llenguatge de programació",
          "No té accés al projecte complet ni executa codi",
          "Només funciona en horari laboral",
          "Té un límit de 100 tokens per conversa"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección indica que ChatGPT no tiene acceso al proyecto completo y no ejecuta código, limitándose al contexto del chat. Además, puede alucinar APIs que no existen, por lo que siempre se debe verificar en la documentación oficial.",
        "en": "The lesson indicates that ChatGPT does not have access to the whole project and cannot execute code, being limited to the chat context. It can also hallucinate non-existent APIs, so official documentation should always be checked.",
        "val": "La lliçó indica que ChatGPT no té accés al projecte complet i no executa codi, limitant-se al context del xat. A més, pot al·lucinar APIs que no existeixen, per la qual cosa sempre s'ha de verificar en la documentació oficial."
      }
    }
  ],
  "programacion/04-agentes-codigo": [
    {
      "q": {
        "es": "¿Qué diferencia fundamental separa a los agentes autónomos de codificación de los asistentes tradicionales?",
        "en": "What fundamental difference separates autonomous coding agents from traditional assistants?",
        "val": "Quina diferència fonamental separa els agents autònoms de codificació dels assistents tradicionals?"
      },
      "options": {
        "es": [
          "Los agentes autónomos son siempre gratuitos",
          "Los agentes autónomos pueden recibir una tarea de alto nivel y ejecutarla completa de principio a fin",
          "Los agentes autónomos solo funcionan con JavaScript",
          "Los agentes autónomos no requieren instrucciones del usuario"
        ],
        "en": [
          "Autonomous agents are always free",
          "Autonomous agents can receive a high-level task and complete it end to end",
          "Autonomous agents only work with JavaScript",
          "Autonomous agents do not require user instructions"
        ],
        "val": [
          "Els agents autònoms són sempre gratuïts",
          "Els agents autònoms poden rebre una tasca d'alt nivell i executar-la completa de principi a fi",
          "Els agents autònoms només funcionen amb JavaScript",
          "Els agents autònoms no requereixen instruccions de l'usuari"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección explica que mientras los asistentes como Copilot asisten a quien programa, los agentes autónomos pretenden ocupar su lugar: reciben una tarea de alto nivel y la ejecutan completa, planificando, escribiendo código, probando, depurando y desplegando.",
        "en": "The lesson explains that while assistants like Copilot assist the programmer, autonomous agents aim to take their place: they receive a high-level task and complete it fully, planning, writing code, testing, debugging and deploying.",
        "val": "La lliçó explica que mentre els assistents com Copilot assisteixen qui programa, els agents autònoms pretenen ocupar-ne el lloc: reben una tasca d'alt nivell i l'executen completa, planificant, escrivint codi, provant, depurant i desplegant."
      }
    },
    {
      "q": {
        "es": "¿Qué ventaja tiene OpenHands frente a herramientas comerciales como Devin?",
        "en": "What advantage does OpenHands have over commercial tools like Devin?",
        "val": "Quin avantatge té OpenHands front a eines comercials com Devin?"
      },
      "options": {
        "es": [
          "Tiene más capacidades de autocompletado en el IDE",
          "Es de código abierto, gratuito y ejecutable localmente con los datos sin salir de la máquina",
          "Soporta más lenguajes de programación que Devin",
          "Ofrece un soporte técnico 24 horas al día"
        ],
        "en": [
          "It has more autocomplete capabilities in the IDE",
          "It is open source, free and runs locally with data staying on the machine",
          "It supports more programming languages than Devin",
          "It offers 24-hour technical support"
        ],
        "val": [
          "Té més capacitats d'autocompletat en l'IDE",
          "És de codi obert, gratuït i executable localment amb les dades sense eixir de la màquina",
          "Dóna suport a més llenguatges de programació que Devin",
          "Oferix suport tècnic 24 hores al dia"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección destaca que OpenHands es la alternativa de código abierto a Devin: gratuito y transparente, personalizable, local (los datos no salen de la máquina) y con una comunidad activa que realiza mejoras constantes.",
        "en": "The lesson highlights that OpenHands is the open-source alternative to Devin: free and transparent, customizable, local (data never leaves the machine) and with an active community making constant improvements.",
        "val": "La lliçó destaca que OpenHands és l'alternativa de codi obert a Devin: gratuït i transparent, personalitzable, local (les dades no eixen de la màquina) i amb una comunitat activa que fa millores constants."
      }
    },
    {
      "q": {
        "es": "¿Qué tipo de tareas pueden hacer bien los agentes de codificación actuales según la lección?",
        "en": "What type of tasks can current coding agents perform well according to the lesson?",
        "val": "Quin tipus de tasques poden fer bé els agents de codificació actuals segons la lliçó?"
      },
      "options": {
        "es": [
          "Proyectos con requisitos ambiguos y sistemas con muchas dependencias complejas",
          "Aplicaciones CRUD simples, configurar proyectos desde cero y refactorizar código con patrones claros",
          "Tareas que requieren juicio humano y código con implicaciones de seguridad críticas",
          "Crear sistemas operativos y desarrollar compiladores desde cero"
        ],
        "en": [
          "Projects with ambiguous requirements and systems with many complex dependencies",
          "Simple CRUD applications, setting up projects from scratch and refactoring code with clear patterns",
          "Tasks requiring human judgment and code with critical security implications",
          "Creating operating systems and developing compilers from scratch"
        ],
        "val": [
          "Projectes amb requisits ambigus i sistemes amb moltes dependències complexes",
          "Aplicacions CRUD simples, configurar projectes des de zero i refactoritzar codi amb patrons clars",
          "Tasques que requereixen judici humà i codi amb implicacions de seguretat crítiques",
          "Crear sistemes operatius i desenvolupar compiladors des de zero"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección enumera las tareas que funcionan bien: crear aplicaciones CRUD simples, configurar proyectos desde cero, escribir tests unitarios, refactorizar código con patrones claros, migrar entre versiones de librerías y corregir errores con mensajes claros.",
        "en": "The lesson lists the tasks that work well: creating simple CRUD applications, setting up projects from scratch, writing unit tests, refactoring code with clear patterns, migrating between library versions and fixing errors with clear messages.",
        "val": "La lliçó enumera les tasques que funcionen bé: crear aplicacions CRUD simples, configurar projectes des de zero, escriure proves unitàries, refactoritzar codi amb patrons clars, migrar entre versions de llibreries i corregir errors amb missatges clars."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué habilidad será más importante para los programadores en el futuro con agentes autónomos?",
        "en": "According to the lesson, what skill will be most important for programmers in the future with autonomous agents?",
        "val": "Segons la lliçó, quina habilitat serà més important per als programadors en el futur amb agents autònoms?"
      },
      "options": {
        "es": [
          "Memorizar grandes cantidades de documentación de APIs",
          "La revisión de código evaluando lo que los agentes generan",
          "Escribir código lo más rápido posible",
          "Conocer todos los lenguajes de programación existentes"
        ],
        "en": [
          "Memorizing large amounts of API documentation",
          "Code review, evaluating what agents generate",
          "Writing code as fast as possible",
          "Knowing all existing programming languages"
        ],
        "val": [
          "Memoritzar grans quantitats de documentació d'APIs",
          "La revisió de codi avaluant el que els agents generen",
          "Escriure codi el més ràpid possible",
          "Coneixer tots els llenguatges de programació existents"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección señala que uno de los cambios previsibles es que la revisión como habilidad clave se vuelve más importante que escribir código, ya que los programadores pasarán de escribir a especificar requisitos y evaluar resultados.",
        "en": "The lesson points out that one of the predictable changes is that review as a key skill becomes more important than writing code, as programmers will move from writing to specifying requirements and evaluating results.",
        "val": "La lliçó assenyala que un dels canvis previsibles és que la revisió com a habilitat clau esdevé més important que escriure codi, ja que els programadors passaran d'escriure a especificar requisits i avaluar resultats."
      }
    }
  ],
  "programacion/05-buenas-practicas": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es el mejor uso de la IA en programación?",
        "en": "According to the lesson, what is the best use of AI in programming?",
        "val": "Segons la lliçó, quin és el millor ús de la IA en programació?"
      },
      "options": {
        "es": [
          "Escribir la mayor cantidad de código posible en menos tiempo",
          "Escribir mejor código, usando la IA para revisar, refinar y robustecer lo creado",
          "Reemplazar completamente a las personas revisoras de código",
          "Eliminar la necesidad de escribir tests manuales"
        ],
        "en": [
          "Writing as much code as possible in less time",
          "Writing better code, using AI to review, refine and harden what has been created",
          "Completely replacing human code reviewers",
          "Eliminating the need for manual testing"
        ],
        "val": [
          "Escriure la major quantitat de codi possible en menys temps",
          "Escriure millor codi, usant la IA per a revisar, refinar i enfortir el creat",
          "Reemplaçar completament les persones revisores de codi",
          "Eliminar la necessitat de proves manuals"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección establece explícitamente que el mejor uso de la IA en programación no es escribir más código sino escribir mejor código, usando la herramienta para revisar, refinar y robustecer lo que ya se ha creado.",
        "en": "The lesson explicitly states that the best use of AI in programming is not writing more code but writing better code, using the tool to review, refine and harden what has already been created.",
        "val": "La lliçó estableix explícitament que el millor ús de la IA en programació no és escriure més codi sinó escriure millor codi, usant l'eina per a revisar, refinar i enfortir el que ja s'ha creat."
      }
    },
    {
      "q": {
        "es": "¿Qué advierte la lección sobre las pruebas incorrectas generadas por IA?",
        "en": "What does the lesson warn about incorrect tests generated by AI?",
        "val": "Què adverteix la lliçó sobre les proves incorrectes generades per IA?"
      },
      "options": {
        "es": [
          "Que son inútiles pero no causan ningún daño",
          "Que una prueba incorrecta que siempre pasa es más peligrosa que no tener ninguna prueba",
          "Que siempre se deben eliminar inmediatamente",
          "Que solo son un problema en proyectos pequeños"
        ],
        "en": [
          "They are useless but cause no harm",
          "An incorrect test that always passes is more dangerous than having no test at all",
          "They should always be immediately deleted",
          "They are only a problem in small projects"
        ],
        "val": [
          "Són inútils però no causen cap dany",
          "Una prova incorrecta que sempre passa és més perillosa que no tindre cap prova",
          "S'haurien d'eliminar immediatament sempre",
          "Només són un problema en projectes xicotets"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección advierte con un callout de warning que una prueba incorrecta que siempre pasa da una falsa sensación de seguridad, siendo más peligrosa que no tener ninguna prueba, y por eso siempre se deben revisar las generadas.",
        "en": "The lesson warns in a warning callout that an incorrect test that always passes gives a false sense of security, being more dangerous than having no tests at all, and that generated tests should always be reviewed.",
        "val": "La lliçó adverteix amb un callout de warning que una prova incorrecta que sempre passa dóna una falsa sensació de seguretat, sent més perillosa que no tindre cap prova, i per això sempre s'han de revisar les generades."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son los cuatro pasos que la lección recomienda para depurar un error con ayuda de IA?",
        "en": "What are the four steps the lesson recommends for debugging an error with AI assistance?",
        "val": "Quins són els quatre passos que la lliçó recomana per a depurar un error amb ajuda d'IA?"
      },
      "options": {
        "es": [
          "Copiar el error, buscar en Google, preguntar en foros y esperar",
          "Describir el síntoma, proporcionar contexto, incluir lo que se ha probado y pedir hipótesis",
          "Reiniciar el ordenador, reinstalar dependencias, borrar caché y probar de nuevo",
          "Escribir un commit, crear una branch, hacer un pull request y esperar revisión"
        ],
        "en": [
          "Copy the error, search Google, ask in forums and wait",
          "Describe the symptom, provide context, include what has been tried and ask for hypotheses",
          "Restart the computer, reinstall dependencies, clear cache and try again",
          "Write a commit, create a branch, make a pull request and wait for review"
        ],
        "val": [
          "Copiar l'error, buscar a Google, preguntar en fòrums i esperar",
          "Descriure el símptoma, proporcionar context, incluir el que s'ha provat i demanar hipòtesis",
          "Reiniciar l'ordinador, reinstal·lar dependències, buidar memòria cau i provar de nou",
          "Escriure un commit, crear una branch, fer un pull request i esperar revisió"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección detalla cuatro pasos concretos: describir el síntoma (qué ocurre y qué debería ocurrir), proporcionar contexto (error, código relevante, datos de entrada), incluir lo que se ha probado y pedir hipótesis sobre por qué ocurre.",
        "en": "The lesson details four concrete steps: describe the symptom (what happens and what should happen), provide context (error, relevant code, input data), include what has been tried and ask for hypotheses about why it happens.",
        "val": "La lliçó detalla quatre passos concrets: descriure el símptoma (què ocorre i què hauria d'ocórrer), proporcionar context (error, codi rellevant, dades d'entrada), incluir el que s'ha provat i demanar hipòtesis sobre per què ocorre."
      }
    },
    {
      "q": {
        "es": "¿Qué significa TDD asistido según la lección de buenas prácticas?",
        "en": "What does assisted TDD mean according to the best practices lesson?",
        "val": "Què significa TDD assistit segons la lliçó de bones pràctiques?"
      },
      "options": {
        "es": [
          "Usar IA para desplegar código en producción de forma automática",
          "Pedir a la IA que genere tests antes de escribir la implementación",
          "Dejar que la IA escriba todo el código sin supervisión",
          "Usar la IA para hacer commit del código automáticamente"
        ],
        "en": [
          "Using AI to deploy code to production automatically",
          "Asking AI to generate tests before writing the implementation",
          "Letting AI write all code without supervision",
          "Using AI to commit code automatically"
        ],
        "val": [
          "Usar IA per a desplegar codi en producció de manera automàtica",
          "Demanar a la IA que genere tests abans d'escriure la implementació",
          "Deixar que la IA escriga tot el codi sense supervisió",
          "Usar IA per a fer commit del codi automàticament"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección recomienda pedir a la IA que genere tests antes de escribir la implementación (TDD asistido), lo que obliga a pensar en la interfaz y los casos de uso antes del código interno.",
        "en": "The lesson recommends asking AI to generate tests before writing the implementation (assisted TDD), which forces you to think about the interface and use cases before the internal code.",
        "val": "La lliçó recomana demanar a la IA que genere tests abans d'escriure la implementació (TDD assistit), cosa que obliga a pensar en la interfície i els casos d'ús abans del codi intern."
      }
    }
  ],
  "programacion/06-resumen-recursos": [
    {
      "q": {
        "es": "Según el resumen del bloque, ¿cuál es la diferencia entre un asistente en el IDE y un agente autónomo?",
        "en": "According to the block summary, what is the difference between an IDE assistant and an autonomous agent?",
        "val": "Segons el resum del bloc, quina és la diferència entre un assistent en l'IDE i un agent autònom?"
      },
      "options": {
        "es": [
          "No hay diferencia, son exactamente lo mismo",
          "El asistente en el IDE sugiere mientras se escribe; el agente autónomo planifica, implementa y despliega código de forma completa",
          "El asistente en el IDE es gratuito y el agente autónomo siempre es de pago",
          "El agente autónomo solo sirve para escribir tests unitarios"
        ],
        "en": [
          "There is no difference, they are exactly the same",
          "The IDE assistant suggests while typing; the autonomous agent plans, implements and deploys code end to end",
          "The IDE assistant is free and the autonomous agent is always paid",
          "The autonomous agent is only useful for writing unit tests"
        ],
        "val": [
          "No hi ha diferència, són exactament iguals",
          "L'assistent en l'IDE suggereix mentre s'escriu; l'agent autònom planifica, implementa i desplega codi de manera completa",
          "L'assistent en l'IDE és gratuït i l'agent autònom sempre és de pagament",
          "L'agent autònom només serveix per a escriure proves unitàries"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen del bloque recoge que Copilot y Cursor son asistentes en el IDE que integran IA en el editor, mientras que los agentes autónomos como Devin, Factory y OpenHands planifican, implementan y despliegan código de principio a fin.",
        "en": "The block summary gathers that Copilot and Cursor are IDE assistants that integrate AI into the editor, while autonomous agents like Devin, Factory and OpenHands plan, implement and deploy code from start to finish.",
        "val": "El resum del bloc recull que Copilot i Cursor són assistents en l'IDE que integren IA en l'editor, mentre que els agents autònoms com Devin, Factory i OpenHands planifiquen, implementen i despleguen codi de principi a fi."
      }
    },
    {
      "q": {
        "es": "Según el glosario del bloque, ¿qué es la refactorización?",
        "en": "According to the block glossary, what is refactoring?",
        "val": "Segons el glossari del bloc, què és la refactorització?"
      },
      "options": {
        "es": [
          "Escribir código desde cero para un proyecto nuevo",
          "Mejorar la estructura del código sin cambiar su comportamiento",
          "Eliminar todo el código obsoleto de un proyecto",
          "Convertir código de un lenguaje a otro"
        ],
        "en": [
          "Writing code from scratch for a new project",
          "Improving the structure of code without changing its behaviour",
          "Removing all obsolete code from a project",
          "Converting code from one language to another"
        ],
        "val": [
          "Escriure codi des de zero per a un projecte nou",
          "Millorar l'estructura del codi sense canviar el seu comportament",
          "Eliminar tot el codi obsolet d'un projecte",
          "Convertir codi d'un llenguatge a un altre"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El glosario del bloque define la refactorización como la mejora de la estructura del código sin cambiar su comportamiento, una de las capacidades clave de los asistentes de IA como Copilot y Cursor.",
        "en": "The block glossary defines refactoring as improving the structure of code without changing its behaviour, one of the key capabilities of AI assistants like Copilot and Cursor.",
        "val": "El glossari del bloc defineix la refactorització com la millora de l'estructura del codi sense canviar el seu comportament, una de les capacitats clau dels assistents d'IA com Copilot i Cursor."
      }
    },
    {
      "q": {
        "es": "Según el resumen, ¿cuál fue la evolución de la programación asistida por IA según se presenta en las lecciones del bloque?",
        "en": "According to the summary, what was the evolution of AI-assisted programming as presented in the block lessons?",
        "val": "Segons el resum, quina va ser l'evolució de la programació assistida per IA segons es presenta en les lliçons del bloc?"
      },
      "options": {
        "es": [
          "De agentes autónomos a asistentes en el IDE",
          "De asistentes en el IDE a agentes autónomos",
          "De chats web a agentes autónomos directamente",
          "La programación asistida por IA no ha evolucionado"
        ],
        "en": [
          "From autonomous agents to IDE assistants",
          "From IDE assistants to autonomous agents",
          "From web chats directly to autonomous agents",
          "AI-assisted programming has not evolved"
        ],
        "val": [
          "D'agents autònoms a assistents en l'IDE",
          "D'assistents en l'IDE a agents autònoms",
          "De xats web directament a agents autònoms",
          "La programació assistida per IA no ha evolucionat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen del bloque recoge la progresión: primero los asistentes en el IDE como Copilot y Cursor, luego Claude Code y asistentes conversacionales, y finalmente los agentes autónomos de codificación como Devin, Factory y OpenHands.",
        "en": "The block summary captures the progression: first IDE assistants like Copilot and Cursor, then Claude Code and conversational assistants, and finally autonomous coding agents like Devin, Factory and OpenHands.",
        "val": "El resum del bloc recull la progressió: primer els assistents en l'IDE com Copilot i Cursor, després Claude Code i assistents conversacionals, i finalment els agents autònoms de codificació com Devin, Factory i OpenHands."
      }
    },
    {
      "q": {
        "es": "Según el resumen de buenas prácticas del bloque, ¿cuáles son las claves para usar la IA de forma eficaz en programación?",
        "en": "According to the block's best practices summary, what are the keys to using AI effectively in programming?",
        "val": "Segons el resum de bones pràctiques del bloc, quines són les claus per a usar la IA de manera eficaç en programació?"
      },
      "options": {
        "es": [
          "Copiar el código generado sin revisarlo para ahorrar tiempo",
          "Ser específico, iterar, verificar siempre y combinar herramientas",
          "Usar siempre la misma herramienta para todo",
          "Dejar que la IA tome todas las decisiones de arquitectura"
        ],
        "en": [
          "Copy the generated code without reviewing it to save time",
          "Be specific, iterate, always verify and combine tools",
          "Always use the same tool for everything",
          "Let AI make all architectural decisions"
        ],
        "val": [
          "Copiar el codi generat sense revisar-lo per a estalviar temps",
          "Ser específic, iterar, verificar sempre i combinar eines",
          "Usar sempre la mateixa eina per a tot",
          "Deixar que la IA prenga totes les decisions d'arquitectura"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen del bloque condensa las buenas prácticas en cuatro claves: ser específico al pedir, iterar sobre el código generado, verificar siempre los resultados y combinar diferentes herramientas según la tarea.",
        "en": "The block summary condenses best practices into four keys: be specific when asking, iterate on generated code, always verify results and combine different tools depending on the task.",
        "val": "El resum del bloc condensa les bones pràctiques en quatre claus: ser específic al demanar, iterar sobre el codi generat, verificar sempre els resultats i combinar diferents eines segons la tasca."
      }
    }
  ],
  "agentes/01-conceptos-fundamentales": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es la diferencia principal entre un LLM y un agente de IA?",
        "en": "According to the lesson, what is the main difference between an LLM and an AI agent?",
        "val": "Segons la lliçó, quina és la diferència principal entre un LLM i un agent d'IA?"
      },
      "options": {
        "es": [
          "El agente genera texto más rápido que un LLM",
          "El agente puede percibir su entorno, usar herramientas y ejecutar acciones de forma autónoma",
          "El agente solo funciona con bases de datos vectoriales",
          "El agente no necesita un modelo de lenguaje para funcionar"
        ],
        "en": [
          "The agent generates text faster than an LLM",
          "The agent can perceive its environment, use tools and execute actions autonomously",
          "The agent only works with vector databases",
          "The agent does not need a language model to function"
        ],
        "val": [
          "L'agent genera text més ràpid que un LLM",
          "L'agent pot percebre el seu entorn, usar eines i executar accions de manera autònoma",
          "L'agent només funciona amb bases de dades vectorials",
          "L'agent no necessita un model de llenguatge per a funcionar"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Un agente va más allá del texto: percibe el entorno, razona y ejecuta acciones reales usando herramientas externas como APIs y bases de datos.",
        "en": "An agent goes beyond text: it perceives the environment, reasons and executes real actions using external tools such as APIs and databases.",
        "val": "Un agent va més enllà del text: percep l'entorn, raona i executa accions reals usant eines externes com APIs i bases de dades."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son los cuatro componentes esenciales de un agente?",
        "en": "What are the four essential components of an agent?",
        "val": "Quins són els quatre components essencials d'un agent?"
      },
      "options": {
        "es": [
          "Percepción, razonamiento, acción y memoria",
          "CPU, GPU, RAM y disco",
          "Entrada, procesamiento, salida y almacenamiento",
          "Lectura, escritura, cálculo y transmisión"
        ],
        "en": [
          "Perception, reasoning, action and memory",
          "CPU, GPU, RAM and disk",
          "Input, processing, output and storage",
          "Reading, writing, calculation and transmission"
        ],
        "val": [
          "Percepció, raonament, acció i memòria",
          "CPU, GPU, RAM i disc",
          "Entrada, processament, eixida i emmagatzematge",
          "Lectura, escriptura, càlcul i transmissió"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección define cuatro componentes: percepción (recibir información), razonamiento (analizar con un LLM), acción (ejecutar herramientas) y memoria (recordar contexto).",
        "en": "The lesson defines four components: perception (receiving information), reasoning (analysing with an LLM), action (running tools) and memory (remembering context).",
        "val": "La lliçó defineix quatre components: percepció (rebre informació), raonament (analitzar amb un LLM), acció (executar eines) i memòria (recordar el context)."
      }
    },
    {
      "q": {
        "es": "¿En qué orden se ejecuta el ciclo agente descrito en la lección?",
        "en": "In what order does the agent loop described in the lesson execute?",
        "val": "En quin ordre s'executa el cicle de l'agent descrit en la lliçó?"
      },
      "options": {
        "es": [
          "Actuar, razonar, observar, evaluar, repetir",
          "Observar, razonar, actuar, evaluar, repetir",
          "Razonar, observar, evaluar, actuar, repetir",
          "Evaluar, observar, razonar, actuar, repetir"
        ],
        "en": [
          "Act, reason, observe, evaluate, repeat",
          "Observe, reason, act, evaluate, repeat",
          "Reason, observe, evaluate, act, repeat",
          "Evaluate, observe, reason, act, repeat"
        ],
        "val": [
          "Actuar, raonar, observar, avaluar, repetir",
          "Observar, raonar, actuar, avaluar, repetir",
          "Raonar, observar, avaluar, actuar, repetir",
          "Avaluar, observar, raonar, actuar, repetir"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El ciclo comienza observando el entorno, luego razona sobre qué hacer, ejecuta una acción, evalúa el resultado y repite hasta alcanzar el objetivo.",
        "en": "The loop begins by observing the environment, then reasons about what to do, executes an action, evaluates the result and repeats until the goal is reached.",
        "val": "El cicle comença observant l'entorn, després raona sobre què fer, executa una acció, avalua el resultat i repeteix fins a aconseguir l'objectiu."
      }
    },
    {
      "q": {
        "es": "Según la tabla comparativa de la lección, ¿qué ventaja tiene un agente frente a un chatbot tradicional en cuanto a herramientas?",
        "en": "According to the lesson comparison table, what advantage does an agent have over a traditional chatbot regarding tools?",
        "val": "Segons la taula comparativa de la lliçó, quin avantatge té un agent enfront d'un chatbot tradicional pel que fa a eines?"
      },
      "options": {
        "es": [
          "El agente usa más tokens que el chatbot",
          "El agente puede acceder a APIs, bases de datos y navegador, mientras que el chatbot no usa herramientas",
          "El agente solo usa APIs internas del chatbot",
          "El chatbot tiene más integraciones que el agente"
        ],
        "en": [
          "The agent uses more tokens than the chatbot",
          "The agent can access APIs, databases and browser, while the chatbot uses no tools",
          "The agent only uses internal APIs of the chatbot",
          "The chatbot has more integrations than the agent"
        ],
        "val": [
          "L'agent usa més tokens que el chatbot",
          "L'agent pot accedir a APIs, bases de dades i navegador, mentre que el chatbot no usa eines",
          "L'agent només usa APIs internes del chatbot",
          "El chatbot té més integracions que l'agent"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La tabla comparativa indica que los agentes disponen de herramientas externas (APIs, bases de datos, navegador) mientras que un chatbot tradicional no tiene acceso a herramientas.",
        "en": "The comparison table indicates that agents have access to external tools (APIs, databases, browser) while a traditional chatbot has no tool access.",
        "val": "La taula comparativa indica que els agents disposen d'eines externes (APIs, bases de dades, navegador) mentre que un chatbot tradicional no té accés a eines."
      }
    }
  ],
  "agentes/02-tipos-de-agentes": [
    {
      "q": {
        "es": "¿Cuál es la característica principal de un agente reactivo según la lección?",
        "en": "What is the main characteristic of a reactive agent according to the lesson?",
        "val": "Quina és la característica principal d'un agent reactiu segons la lliçó?"
      },
      "options": {
        "es": [
          "Puede planificar tareas complejas de varios pasos",
          "No mantiene estado interno y responde únicamente a la entrada actual",
          "Tiene memoria vectorial para búsquedas semánticas",
          "Trabaja en equipo con otros agentes especializados"
        ],
        "en": [
          "It can plan complex multi-step tasks",
          "It maintains no internal state and responds only to the current input",
          "It has vector memory for semantic searches",
          "It works in a team with other specialised agents"
        ],
        "val": [
          "Pot planificar tasques complexes de diversos passos",
          "No manté estat intern i respon únicament a l'entrada actual",
          "Té memòria vectorial per a cerques semàntiques",
          "Treballa en equip amb altres agents especialitzats"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los agentes reactivos no tienen memoria del pasado y actúan basándose únicamente en la entrada actual, lo que los hace rápidos y predecibles para tareas simples.",
        "en": "Reactive agents have no memory of the past and act based only on the current input, which makes them fast and predictable for simple tasks.",
        "val": "Els agents reactius no tenen memòria del passat i actuen basant-se únicament en l'entrada actual, el que els fa ràpids i previsibles per a tasques simples."
      }
    },
    {
      "q": {
        "es": "¿Qué patrón se utiliza en los agentes autónomos para alternar entre razonamiento y acción?",
        "en": "What pattern is used in autonomous agents to alternate between reasoning and action?",
        "val": "Quin patró s'utilitza en els agents autònoms per a alternar entre raonament i acció?"
      },
      "options": {
        "es": [
          "El patrón ReAct que alterna razonar, actuar, observar y repetir",
          "El patrón RESTR que alterna restricciones y acciones",
          "El patrón ACT que solo ejecuta acciones",
          "El patrón THINK que solo razona sin actuar"
        ],
        "en": [
          "The ReAct pattern that alternates reasoning, acting, observing and repeating",
          "The RESTR pattern that alternates constraints and actions",
          "The ACT pattern that only executes actions",
          "The THINK pattern that only reasons without acting"
        ],
        "val": [
          "El patró ReAct que alterna raonar, actuar, observar i repetir",
          "El patró RESTR que alterna restriccions i accions",
          "El patró ACT que només executa accions",
          "El patró THINK que només raona sense actuar"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El patrón ReAct (Reasoning + Acting) es el más usado para agentes autónomos: piensa qué hacer, ejecuta una herramienta, observa el resultado y repite.",
        "en": "The ReAct pattern (Reasoning + Acting) is the most widely used for autonomous agents: it thinks about what to do, runs a tool, observes the result and repeats.",
        "val": "El patró ReAct (Reasoning + Acting) és el més usat per als agents autònoms: pensa què fer, executa una eina, observa el resultat i repeteix."
      }
    },
    {
      "q": {
        "es": "En un sistema multiagente, ¿cuál es la función del agente validador?",
        "en": "In a multi-agent system, what is the role of the validator agent?",
        "val": "En un sistema multiagent, quina és la funció de l'agent validador?"
      },
      "options": {
        "es": [
          "Divide las tareas y asigna el trabajo a otros agentes",
          "Busca información en fuentes externas",
          "Verifica los resultados de los demás agentes",
          "Redacta los documentos finales del proyecto"
        ],
        "en": [
          "Divides tasks and assigns work to other agents",
          "Searches for information in external sources",
          "Verifies the results of the other agents",
          "Writes the final documents of the project"
        ],
        "val": [
          "Divideix les tasques i assigna el treball als altres agents",
          "Cerca informació en fonts externes",
          "Verifica els resultats dels altres agents",
          "Redacta els documents finals del projecte"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El agente validador tiene la función de verificar los resultados producidos por los demás agentes del equipo, asegurando su corrección.",
        "en": "The validator agent is responsible for verifying the results produced by the other agents in the team, ensuring their correctness.",
        "val": "L'agent validador té la funció de verificar els resultats produïts pels altres agents de l'equip, assegurant la seua correcció."
      }
    },
    {
      "q": {
        "es": "Según la tabla de la lección, ¿qué tipo de agente se recomienda para preguntas frecuentes y clasificación simple?",
        "en": "According to the lesson table, what type of agent is recommended for frequently asked questions and simple classification?",
        "val": "Segons la taula de la lliçó, quin tipus d'agent es recomana per a preguntes freqüents i classificació simple?"
      },
      "options": {
        "es": [
          "Un agente autónomo con memoria vectorial",
          "Un agente multiagente con roles especializados",
          "Un agente reactivo sin memoria",
          "Un agente con memoria resumida"
        ],
        "en": [
          "An autonomous agent with vector memory",
          "A multi-agent system with specialised roles",
          "A reactive agent without memory",
          "An agent with summary memory"
        ],
        "val": [
          "Un agent autònom amb memòria vectorial",
          "Un sistema multiagent amb rols especialitzats",
          "Un agent reactiu sense memòria",
          "Un agent amb memòria resumida"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La tabla de clasificación indica que los agentes reactivos son adecuados para preguntas frecuentes y clasificación simple, ya que son rápidos y predecibles.",
        "en": "The classification table indicates that reactive agents are suitable for frequently asked questions and simple classification, as they are fast and predictable.",
        "val": "La taula de classificació indica que els agents reactius són adequats per a preguntes freqüents i classificació simple, ja que són ràpids i previsibles."
      }
    }
  ],
  "agentes/03-mcp": [
    {
      "q": {
        "es": "¿Qué problema resuelve el Model Context Protocol (MCP) según la lección?",
        "en": "What problem does the Model Context Protocol (MCP) solve according to the lesson?",
        "val": "Quin problema resol el Model Context Protocol (MCP) segons la lliçó?"
      },
      "options": {
        "es": [
          "Acelera el entrenamiento de modelos de lenguaje",
          "Estandariza la conexión entre modelos de lenguaje y herramientas externas sin código personalizado",
          "Reemplaza la necesidad de bases de datos vectoriales",
          "Permite crear nuevos LLMs desde cero"
        ],
        "en": [
          "It speeds up language model training",
          "It standardises the connection between language models and external tools without custom code",
          "It replaces the need for vector databases",
          "It allows creating new LLMs from scratch"
        ],
        "val": [
          "Acelera l'entrenament de models de llenguatge",
          "Estandarditza la connexió entre models de llenguatge i eines externes sense codi personalitzat",
          "Reemplaça la necessitat de bases de dades vectorials",
          "Permet crear nous LLMs des de zero"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "MCP estandariza la conexión entre modelos de lenguaje y herramientas externas: antes de MCP cada integración requería código personalizado, y con MCP cualquier agente compatible puede usar cualquier servidor MCP.",
        "en": "MCP standardises the connection between language models and external tools: before MCP each integration required custom code, and with MCP any compatible agent can use any MCP server.",
        "val": "MCP estandarditza la connexió entre models de llenguatge i eines externes: abans de MCP cada integració requeria codi personalitzat, i amb MCP qualsevol agent compatible pot usar qualsevol servidor MCP."
      }
    },
    {
      "q": {
        "es": "Según la arquitectura MCP, ¿qué rol tiene el servidor MCP?",
        "en": "According to the MCP architecture, what role does the MCP server play?",
        "val": "Segons l'arquitectura MCP, quin rol té el servidor MCP?"
      },
      "options": {
        "es": [
          "Es el agente que decide qué herramienta usar",
          "Es un proceso independiente que expone herramientas, recursos y prompts al agente",
          "Es el navegador que carga las páginas web",
          "Es la base de datos almacena los embeddings"
        ],
        "en": [
          "It is the agent that decides which tool to use",
          "It is an independent process that exposes tools, resources and prompts to the agent",
          "It is the browser that loads web pages",
          "It is the database that stores embeddings"
        ],
        "val": [
          "És l'agent que decideix quina eina usar",
          "És un procés independent que exposa eines, recursos i prompts a l'agent",
          "És el navegador que carrega les pàgines web",
          "És la base de dades que emmagatzema els embeddings"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El servidor MCP es un proceso independiente que expone herramientas (funciones ejecutables), recursos (datos consultables) y prompts (plantillas) al agente cliente.",
        "en": "The MCP server is an independent process that exposes tools (executable functions), resources (queryable data) and prompts (templates) to the client agent.",
        "val": "El servidor MCP és un procés independent que exposa eines (funcions executables), recursos (dades consultables) i prompts (plantilles) a l'agent client."
      }
    },
    {
      "q": {
        "es": "¿Cuál de los siguientes transportes NO se menciona como opción de comunicación en MCP?",
        "en": "Which of the following transport methods is NOT mentioned as a communication option in MCP?",
        "val": "Quin dels transports següents NO es menciona com a opció de comunicació en MCP?"
      },
      "options": {
        "es": [
          "stdio para herramientas locales",
          "HTTP + SSE para servidores remotos",
          "WebSocket para comunicación bidireccional",
          "Bluetooth para dispositivos móviles"
        ],
        "en": [
          "stdio for local tools",
          "HTTP + SSE for remote servers",
          "WebSocket for bidirectional communication",
          "Bluetooth for mobile devices"
        ],
        "val": [
          "stdio per a eines locals",
          "HTTP + SSE per a servidors remots",
          "WebSocket per a comunicació bidireccional",
          "Bluetooth per a dispositius mòbils"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección menciona tres opciones de transporte: stdio (herramientas locales), HTTP + SSE (servidores remotos) y WebSocket (comunicación bidireccional). Bluetooth no se menciona.",
        "en": "The lesson mentions three transport options: stdio (local tools), HTTP + SSE (remote servers) and WebSocket (bidirectional communication). Bluetooth is not mentioned.",
        "val": "La lliçó menciona tres opcions de transport: stdio (eines locals), HTTP + SSE (servidors remots) i WebSocket (comunicació bidireccional). Bluetooth no es menciona."
      }
    },
    {
      "q": {
        "es": "¿Qué ventaja de seguridad ofrece MCP según la lección?",
        "en": "What security advantage does MCP offer according to the lesson?",
        "val": "Quin avantatge de seguretat ofereix MCP segons la lliçó?"
      },
      "options": {
        "es": [
          "Los servidores MCP cifran todo el tráfico de internet",
          "Los servidores MCP se ejecutan en entornos aislados y el agente no tiene acceso directo al sistema",
          "MCP elimina la necesidad de contraseñas en los agentes",
          "Los servidores MCP bloquean automáticamente los virus"
        ],
        "en": [
          "MCP servers encrypt all internet traffic",
          "MCP servers run in isolated environments and the agent has no direct access to the system",
          "MCP eliminates the need for passwords in agents",
          "MCP servers automatically block viruses"
        ],
        "val": [
          "Els servidors MCP xifren tot el tràfic d'internet",
          "Els servidors MCP s'executen en entorns aïllats i l'agent no té accés directe al sistema",
          "MCP elimina la necessitat de contrasenyes en els agents",
          "Els servidors MCP bloquegen automàticament els virus"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección explica que los servidores MCP se ejecutan en entornos aislados, por lo que el agente no tiene acceso directo al sistema y solo interactúa a través de las herramientas definidas.",
        "en": "The lesson explains that MCP servers run in isolated environments, so the agent has no direct access to the system and only interacts through the defined tools.",
        "val": "La lliçó explica que els servidors MCP s'executen en entorns aïllats, per la qual cosa l'agent no té accés directe al sistema i només interactua a través de les eines definides."
      }
    }
  ],
  "agentes/04-rag-avanzado": [
    {
      "q": {
        "es": "¿Cuáles son las tres fases de la arquitectura RAG según la lección?",
        "en": "What are the three phases of the RAG architecture according to the lesson?",
        "val": "Quines són les tres fases de l'arquitectura RAG segons la lliçó?"
      },
      "options": {
        "es": [
          "Entrenamiento, inferencia y despliegue",
          "Indexación, recuperación y generación",
          "Lectura, procesamiento y escritura",
          "Extracción, transformación y carga"
        ],
        "en": [
          "Training, inference and deployment",
          "Indexing, retrieval and generation",
          "Reading, processing and writing",
          "Extraction, transformation and loading"
        ],
        "val": [
          "Entrenament, inferència i desplegament",
          "Indexació, recuperació i generació",
          "Lectura, processament i escriptura",
          "Extracció, transformació i càrrega"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "RAG se divide en indexación (preparar la base de conocimiento con chunks y embeddings), recuperación (buscar fragmentos similares por similitud coseno) y generación (el LLM responde con los fragmentos recuperados como contexto).",
        "en": "RAG is divided into indexing (preparing the knowledge base with chunks and embeddings), retrieval (searching for similar fragments by cosine similarity) and generation (the LLM responds with the retrieved fragments as context).",
        "val": "RAG se divide en indexació (preparar la base de coneixement amb chunks i embeddings), recuperació (cercar fragments similars per similitud cosinus) i generació (el LLM respon amb els fragments recuperats com a context)."
      }
    },
    {
      "q": {
        "es": "¿Qué técnica de RAG consiste en generar múltiples variaciones de una consulta y combinar los resultados?",
        "en": "Which RAG technique involves generating multiple variations of a query and combining the results?",
        "val": "Quina tècnica de RAG consisteix a generar múltiples variacions d'una consulta i combinar els resultats?"
      },
      "options": {
        "es": [
          "Chunking semántico",
          "Re-ranking",
          "Recuperación multi-consulta",
          "Fusión jerárquica"
        ],
        "en": [
          "Semantic chunking",
          "Re-ranking",
          "Multi-query retrieval",
          "Hierarchical fusion"
        ],
        "val": [
          "Chunking semàntic",
          "Re-ranking",
          "Recuperació multi-consulta",
          "Fusió jeràrquica"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La recuperación multi-consulta genera múltiples variaciones de la consulta original y combina los resultados, mejorando la cobertura y reduciendo falsos negativos.",
        "en": "Multi-query retrieval generates multiple variations of the original query and combines the results, improving coverage and reducing false negatives.",
        "val": "La recuperació multi-consulta genera múltiples variacions de la consulta original i combina els resultats, millorant la cobertura i reduint els falsos negatius."
      }
    },
    {
      "q": {
        "es": "¿Qué es el re-ranking en el contexto de RAG avanzado?",
        "en": "What is re-ranking in the context of advanced RAG?",
        "val": "Què és el re-ranking en el context del RAG avançat?"
      },
      "options": {
        "es": [
          "Un proceso que elimina los chunks irrelevantes de la base de datos",
          "Un segundo modelo que reordena los resultados por relevancia tras la recuperación inicial",
          "Una técnica para dividir documentos en fragmentos más pequeños",
          "Un método para generar embeddings de mayor calidad"
        ],
        "en": [
          "A process that removes irrelevant chunks from the database",
          "A second model that reorders results by relevance after initial retrieval",
          "A technique for splitting documents into smaller fragments",
          "A method for generating higher quality embeddings"
        ],
        "val": [
          "Un procés que elimina els chunks irrellevants de la base de dades",
          "Un segon model que reordena els resultats per rellevància després de la recuperació inicial",
          "Una tècnica per a dividir documents en fragments més xicotets",
          "Un mètode per a generar embeddings de major qualitat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El re-ranking utiliza un segundo modelo más pequeño y rápido para reordenar los resultados recuperados por relevancia, mejorando la precisión sin el coste de un modelo grande.",
        "en": "Re-ranking uses a second smaller and faster model to reorder the retrieved results by relevance, improving accuracy without the cost of a large model.",
        "val": "El re-ranking utilitza un segon model més xicotet i ràpid per a reordenar els resultats recuperats per rellevància, millorant la precisió sense el cost d'un model gran."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por qué RAG reduce las alucinaciones de los LLMs?",
        "en": "According to the lesson, why does RAG reduce LLM hallucinations?",
        "val": "Segons la lliçó, per què RAG redueix les al·lucinacions dels LLMs?"
      },
      "options": {
        "es": [
          "Porque entrena al LLM con más datos",
          "Porque el LLM genera respuestas basándose en documentos recuperados de una base de conocimiento en lugar de solo su conocimiento interno",
          "Porque RAG elimina los errores de gramática del LLM",
          "Porque RAG usa reglas programadas que impiden inventar información"
        ],
        "en": [
          "Because it trains the LLM with more data",
          "Because the LLM generates responses based on documents retrieved from a knowledge base rather than only its internal knowledge",
          "Because RAG eliminates grammar errors from the LLM",
          "Because RAG uses programmed rules that prevent inventing information"
        ],
        "val": [
          "Perquè entrena el LLM amb més dades",
          "Perquè el LLM genera respostes basant-se en documents recuperats d'una base de coneixement en lloc del seu coneixement intern només",
          "Perquè RAG elimina els errors de gramàtica del LLM",
          "Perquè RAG usa regles programades que impedeixen inventar informació"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "RAG reduce alucinaciones porque el LLM genera respuestas a partir de documentos recuperados y verificables en una base de conocimiento externa, en lugar de depender únicamente de su conocimiento interno.",
        "en": "RAG reduces hallucinations because the LLM generates responses from documents retrieved and verifiable in an external knowledge base, rather than relying solely on its internal knowledge.",
        "val": "RAG redueix les al·lucinacions perquè el LLM genera respostes a partir de documents recuperats i verificables en una base de coneixement externa, en lloc de dependre únicament del seu coneixement intern."
      }
    }
  ],
  "agentes/05-automatizacion-flujos": [
    {
      "q": {
        "es": "Según la lección, ¿cuál es la característica principal de n8n en comparación con Make y Zapier?",
        "en": "According to the lesson, what is the main characteristic of n8n compared to Make and Zapier?",
        "val": "Segons la lliçó, quina és la característica principal de n8n en comparació amb Make i Zapier?"
      },
      "options": {
        "es": [
          "Es la plataforma con más integraciones disponibles",
          "Es de código abierto y se puede autoalojar para control total sobre los datos",
          "Ofrece un editor visual más intuitivo que los demás",
          "Es la única plataforma que soporta IA"
        ],
        "en": [
          "It is the platform with the most integrations available",
          "It is open source and can be self-hosted for full control over data",
          "It offers a more intuitive visual editor than the others",
          "It is the only platform that supports AI"
        ],
        "val": [
          "És la plataforma amb més integracions disponibles",
          "És de codi obert i es pot autoallotjar per a control total sobre les dades",
          "Oferix un editor visual més intuïtiu que les altres",
          "És l'única plataforma que suporta IA"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "n8n es de código abierto y se puede autoalojar, lo que ofrece control total sobre los datos y la posibilidad de ejecutar modelos localmente, ideal para datos sensibles.",
        "en": "n8n is open source and can be self-hosted, offering full control over data and the ability to run models locally, ideal for sensitive data.",
        "val": "n8n és de codi obert i es pot autoallotjar, el que ofereix control total sobre les dades i la possibilitat d'executar models localment, ideal per a dades sensibles."
      }
    },
    {
      "q": {
        "es": "¿Qué consejo da la lección sobre cuándo automatizar con IA?",
        "en": "What advice does the lesson give about when to automate with AI?",
        "val": "Quin consell dóna la lliçó sobre quan automatitzar amb IA?"
      },
      "options": {
        "es": [
          "Automatizar todos los procesos de golpe para mayor eficiencia",
          "Empezar con un proceso pequeño, validar que funciona y luego escalar",
          "Solo automatizar procesos que no involucren IA",
          "Esperar a que la IA sea perfecta antes de automatizar"
        ],
        "en": [
          "Automate all processes at once for greater efficiency",
          "Start with a small process, validate that it works and then scale",
          "Only automate processes that do not involve AI",
          "Wait until AI is perfect before automating"
        ],
        "val": [
          "Automatitzar tots els processos de cop per a major eficiència",
          "Comença amb un procés xicotet, valida que funciona i després escala",
          "Només automatitzar processos que no involucren IA",
          "Esperar a que la IA siga perfecta abans d'automatitzar"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección advierte explícitamente: no automatizar todo de golpe, sino empezar con un proceso pequeño, validar que funciona y luego escalar.",
        "en": "The lesson explicitly warns: do not automate everything at once, but start with a small process, validate that it works and then scale.",
        "val": "La lliçó avisa explícitament: no automatitzar tot de cop, sinó començar amb un procés xicotet, validar que funciona i després escalar."
      }
    },
    {
      "q": {
        "es": "En el patrón de atención al cliente híbrida descrito en la lección, ¿qué ocurre cuando el chatbot IA no puede resolver un problema?",
        "en": "In the hybrid customer service pattern described in the lesson, what happens when the AI chatbot cannot resolve an issue?",
        "val": "En el patró d'atenció al client híbrida descrit en la lliçó, què ocurreix quan el chatbot IA no pot resoldre un problema?"
      },
      "options": {
        "es": [
          "El chatbot cierra el ticket automáticamente",
          "Escala a una persona humana con todo el contexto de la conversación",
          "Reinicia la conversación desde el principio",
          "Envía un correo electrónico al usuario"
        ],
        "en": [
          "The chatbot closes the ticket automatically",
          "It escalates to a human person with the full context of the conversation",
          "It restarts the conversation from the beginning",
          "It sends an email to the user"
        ],
        "val": [
          "El chatbot tanca el ticket automàticament",
          "Escala a una persona humana amb tot el context de la conversa",
          "Reinicia la conversa des del principi",
          "Envia un correu electrònic a l'usuari"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "En el patrón híbrido, si el chatbot IA no puede resolver el problema, escala a una persona humana proporcionándole todo el contexto de la interacción para que pueda ayudar de forma eficaz.",
        "en": "In the hybrid pattern, if the AI chatbot cannot resolve the issue, it escalates to a human person providing them with the full interaction context so they can help effectively.",
        "val": "En el patró híbrid, si el chatbot IA no pot resoldre el problema, escala a una persona humana proporcionant-li tot el context de la interacció perquè puga ajudar de manera eficaç."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué sucede en el patrón de generación de contenido automatizado con IA?",
        "en": "According to the lesson, what happens in the automated AI content generation pattern?",
        "val": "Segons la lliçó, què passa en el patró de generació de contingut automatitzat amb IA?"
      },
      "options": {
        "es": [
          "La IA genera contenido sin supervisión y lo publica directamente",
          "La IA supervisa fuentes de noticias, redacta resúmenes, los personaliza por audiencia y los publica en los canales correspondientes",
          "La IA solo recopila noticias sin redactar contenido",
          "La IA envía las noticias por correo electrónico a los periodistas"
        ],
        "en": [
          "The AI generates content without supervision and publishes it directly",
          "The AI monitors news sources, writes summaries, personalises them by audience and publishes them to the appropriate channels",
          "The AI only collects news without writing content",
          "The AI sends the news by email to journalists"
        ],
        "val": [
          "La IA genera contingut sense supervisió i el publica directament",
          "La IA supervisa fonts de notícies, redacta resums, els personalitza per audiència i els publica en els canals corresponents",
          "La IA només recopila notícies sense redactar contingut",
          "La IA envia les notícies per correu electrònic als periodistes"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El patrón descrito incluye que la IA supervisa fuentes, redacta resúmenes, los personaliza por audiencia y los publica en los canales correspondientes, automatizando todo el flujo de contenido.",
        "en": "The described pattern includes the AI monitoring sources, writing summaries, personalising them by audience and publishing them to the appropriate channels, automating the entire content flow.",
        "val": "El patró descrit inclou que la IA supervisa fonts, redacta resums, els personalitza per audiència i els publica en els canals corresponents, automatitzant tot el flux de contingut."
      }
    }
  ],
  "agentes/06-herramientas-para-agentes": [
    {
      "q": {
        "es": "¿Cuál es la diferencia principal entre LangChain y CrewAI según la lección?",
        "en": "What is the main difference between LangChain and CrewAI according to the lesson?",
        "val": "Quina és la diferència principal entre LangChain i CrewAI segons la lliçó?"
      },
      "options": {
        "es": [
          "LangChain es gratuito y CrewAI es de pago",
          "LangChain es un marco general para aplicaciones con LLMs, mientras que CrewAI está diseñado específicamente para sistemas multiagente",
          "LangChain solo funciona con Python y CrewAI solo con TypeScript",
          "LangChain es más lento que CrewAI en todos los casos"
        ],
        "en": [
          "LangChain is free and CrewAI is paid",
          "LangChain is a general framework for applications with LLMs, while CrewAI is specifically designed for multi-agent systems",
          "LangChain only works with Python and CrewAI only with TypeScript",
          "LangChain is slower than CrewAI in all cases"
        ],
        "val": [
          "LangChain és gratuït i CrewAI és de pagament",
          "LangChain és un marc general per a aplicacions amb LLMs, mentre que CrewAI està dissenyat específicament per a sistemes multiagent",
          "LangChain només funciona amb Python i CrewAI només amb TypeScript",
          "LangChain és més lent que CrewAI en tots els casos"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "LangChain es el marco más popular para construir aplicaciones generales con LLMs (con LangGraph para grafos de estados), mientras que CrewAI está diseñado nativamente para sistemas multiagent con roles, tareas y crews.",
        "en": "LangChain is the most popular framework for building general applications with LLMs (with LangGraph for state graphs), while CrewAI is natively designed for multi-agent systems with roles, tasks and crews.",
        "val": "LangChain és el marc més popular per a construir aplicacions generals amb LLMs (amb LangGraph per a grafs d'estats), mentre que CrewAI està dissenyat nativament per a sistemes multiagent amb rols, tasques i crews."
      }
    },
    {
      "q": {
        "es": "¿Por qué la lección no recomienda AutoGPT para entornos de producción?",
        "en": "Why does the lesson not recommend AutoGPT for production environments?",
        "val": "Per què la lliçó no recomana AutoGPT per a entorns de producció?"
      },
      "options": {
        "es": [
          "AutoGPT no tiene soporte para herramientas externas",
          "AutoGPT tiene alto consumo de tokens, puede desviarse del objetivo y carece de interfaz pulida",
          "AutoGPT solo funciona en Windows y no es compatible con otros sistemas",
          "AutoGPT requiere una conexión a internet permanente"
        ],
        "en": [
          "AutoGPT has no support for external tools",
          "AutoGPT has high token consumption, can deviate from the goal and lacks a polished interface",
          "AutoGPT only works on Windows and is not compatible with other systems",
          "AutoGPT requires a permanent internet connection"
        ],
        "val": [
          "AutoGPT no té suport per a eines externes",
          "AutoGPT té alt consum de tokens, pot desviar-se de l'objectiu i manca d'una interfície polida",
          "AutoGPT només funciona en Windows i no és compatible amb altres sistemes",
          "AutoGPT requerix una connexió a internet permanent"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección indica que AutoGPT tiene limitaciones para producción: alto consumo de tokens, puede desviarse del objetivo original, dificultad con tareas específicas y sin interfaz pulida.",
        "en": "The lesson indicates that AutoGPT has limitations for production: high token consumption, it can deviate from the original goal, difficulty with specific tasks and no polished interface.",
        "val": "La lliçó indica que AutoGPT té limitacions per a producció: alt consum de tokens, pot desviar-se de l'objectiu original, dificultat amb tasques específiques i sense interfície polida."
      }
    },
    {
      "q": {
        "es": "¿Qué concepto clave de CrewAI representa el conjunto de agentes que colaboran en un proyecto?",
        "en": "Which CrewAI key concept represents the set of agents collaborating on a project?",
        "val": "Quin concepte clau de CrewAI representa el conjunt d'agents que col·laboren en un projecte?"
      },
      "options": {
        "es": [
          "Task",
          "Process",
          "Crew",
          "Chain"
        ],
        "en": [
          "Task",
          "Process",
          "Crew",
          "Chain"
        ],
        "val": [
          "Task",
          "Process",
          "Crew",
          "Chain"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "En CrewAI, un Crew es el equipo de agentes que colaboran juntos. Agent es un agente individual, Task es una tarea a completar y Process es el flujo de trabajo.",
        "en": "In CrewAI, a Crew is the team of agents collaborating together. Agent is an individual agent, Task is a task to complete and Process is the workflow.",
        "val": "En CrewAI, un Crew és l'equip d'agents que col·laboren junts. Agent és un agent individual, Task és una tasca a completar i Process és el flux de treball."
      }
    },
    {
      "q": {
        "es": "Según la comparativa de marcos de trabajo, ¿cuál es el marco recomendado para sistemas RAG?",
        "en": "According to the framework comparison, which is the recommended framework for RAG systems?",
        "val": "Segons la comparativa de marcs de treball, quin és el marc recomanat per a sistemes RAG?"
      },
      "options": {
        "es": [
          "LangChain para todos los casos",
          "AutoGPT porque tiene buena recuperación",
          "Haystack, que está orientado a sistemas RAG y flujos de búsqueda",
          "Dify porque es el más fácil de usar"
        ],
        "en": [
          "LangChain for all cases",
          "AutoGPT because it has good retrieval",
          "Haystack, which is oriented towards RAG systems and search flows",
          "Dify because it is the easiest to use"
        ],
        "val": [
          "LangChain per a tots els casos",
          "AutoGPT perquè té bona recuperació",
          "Haystack, que està orientat a sistemes RAG i fluxos de cerca",
          "Dify perquè és el més fàcil d'usar"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección recomienda Haystack específicamente para sistemas RAG, ya que está diseñado para construir sistemas de recuperación de información y flujos de búsqueda avanzados.",
        "en": "The lesson specifically recommends Haystack for RAG systems, as it is designed to build information retrieval systems and advanced search flows.",
        "val": "La lliçó recomana Haystack específicament per a sistemes RAG, ja que està dissenyat per a construir sistemes de recuperació d'informació i fluxos de cerca avançats."
      }
    }
  ],
  "agentes/07-ejemplos-practicos": [
    {
      "q": {
        "es": "En el caso del soporte técnico automatizado, ¿qué porcentaje de tickets se resuelven sin intervención humana según la lección?",
        "en": "In the automated technical support case, what percentage of tickets are resolved without human intervention according to the lesson?",
        "val": "En el cas del suport tècnic automatitzat, quin percentatge de tickets es resolen sense intervenció humana segons la lliçó?"
      },
      "options": {
        "es": [
          "El 30% de los tickets",
          "El 60% de los tickets",
          "El 45% de los tickets",
          "El 80% de los tickets"
        ],
        "en": [
          "30% of tickets",
          "60% of tickets",
          "45% of tickets",
          "80% of tickets"
        ],
        "val": [
          "El 30% dels tickets",
          "El 60% dels tickets",
          "El 45% dels tickets",
          "El 80% dels tickets"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección indica que el 45% de los tickets de soporte técnico se resuelven sin intervención humana, con un tiempo medio de respuesta de 2 minutos frente a 4 horas antes de la automatización.",
        "en": "The lesson states that 45% of technical support tickets are resolved without human intervention, with an average response time of 2 minutes versus 4 hours before automation.",
        "val": "La lliçó indica que el 45% dels tickets de suport tècnic es resolen sense intervenció humana, amb un temps mitjà de resposta de 2 minuts enfront de 4 hores abans de l'automatització."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué patrón común comparten todos los casos de uso de agentes descritos?",
        "en": "According to the lesson, what common pattern do all the described agent use cases share?",
        "val": "Segons la lliçó, quin patró comú comparteixen tots els casos d'ús d'agents descrits?"
      },
      "options": {
        "es": [
          "Observar, analizar, decidir, actuar y aprender",
          "Leer, escribir, evaluar y repetir",
          "Capturar, procesar, almacenar y transmitir",
          "Conectar, ejecutar, verificar y cerrar"
        ],
        "en": [
          "Observe, analyse, decide, act and learn",
          "Read, write, evaluate and repeat",
          "Capture, process, store and transmit",
          "Connect, execute, verify and close"
        ],
        "val": [
          "Observar, analitzar, decidir, actuar i aprendre",
          "Llegir, escriure, avaluar i repetir",
          "Capturar, processar, emmagatzemar i transmetre",
          "Connectar, executar, verificar i tancar"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Todos los casos de uso comparten el patrón: observar una fuente de datos, analizar con un LLM, decidir qué acción tomar, actuar ejecutando una herramienta y aprender del resultado.",
        "en": "All use cases share the pattern: observe a data source, analyse with an LLM, decide what action to take, act by running a tool and learn from the result.",
        "val": "Tots els casos d'ús comparteixen el patró: observar una font de dades, analitzar amb un LLM, decidir quina acció prendre, actuar executant una eina i aprendre del resultat."
      }
    },
    {
      "q": {
        "es": "¿Qué papel desempeña el agente de pruebas en el caso del asistente de código para desarrollo?",
        "en": "What role does the testing agent play in the code assistant for development case?",
        "val": "Quin paper desenvolup l'agent de proves en el cas de l'assistente de codi per al desenvolupament?"
      },
      "options": {
        "es": [
          "Mapea la arquitectura del código y documenta dependencias",
          "Identifica vulnerabilidades y deuda técnica",
          "Crea pruebas unitarias para el código no cubierto",
          "Genera documentación automática de funciones"
        ],
        "en": [
          "Maps the code architecture and documents dependencies",
          "Identifies vulnerabilities and technical debt",
          "Creates unit tests for uncovered code",
          "Generates automatic documentation of functions"
        ],
        "val": [
          "Mapea l'arquitectura del codi i documenta dependències",
          "Identifica vulnerabilitats i deute tècnic",
          "Crea proves unitàries per al codi no cobert",
          "Genera documentació automàtica de funcions"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El agente de pruebas tiene la función específica de crear pruebas unitarias para el código que no tiene cobertura de tests, asegurando la calidad del software.",
        "en": "The testing agent has the specific function of creating unit tests for code that lacks test coverage, ensuring software quality.",
        "val": "L'agent de proves té la funció específica de crear proves unitàries per al codi que no té cobertura de tests, assegurant la qualitat del programari."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por qué es importante la supervisión humana en los agentes?",
        "en": "According to the lesson, why is human supervision important in agents?",
        "val": "Segons la lliçó, per què és important la supervisió humana en els agents?"
      },
      "options": {
        "es": [
          "Porque los agentes no pueden ejecutar herramientas sin un humano",
          "Porque el agente hace el trabajo pesado pero las decisiones críticas siempre pasan por una persona",
          "Porque los agentes se quedan sin tokens rápidamente",
          "Porque los agentes no pueden conectarse a internet"
        ],
        "en": [
          "Because agents cannot run tools without a human",
          "Because the agent does the heavy lifting but critical decisions always go through a person",
          "Because agents run out of tokens quickly",
          "Because agents cannot connect to the internet"
        ],
        "val": [
          "Perquè els agents no poden executar eines sense una persona",
          "Perquè l'agent fa el treball pesat però les decisions crítiques sempre passen per una persona",
          "Perquè els agents es queden sense tokens ràpidament",
          "Perquè els agents no poden connectar-se a internet"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección enfatiza que el patrón más eficaz es la persona en el circuito: el agente realiza el trabajo pesado, pero las decisiones críticas siempre deben ser supervisadas por una persona humana.",
        "en": "The lesson emphasises that the most effective pattern is human-in-the-loop: the agent does the heavy lifting, but critical decisions must always be supervised by a human person.",
        "val": "La lliçó enfatitza que el patró més eficaç és la persona en el circuit: l'agent realitza el treball pesat, però les decisions crítiques sempre han de ser supervisades per una persona humana."
      }
    }
  ],
  "agentes/08-resumen-agentes": [
    {
      "q": {
        "es": "Según el resumen del bloque, ¿cuáles son los cuatro tipos de agentes clasificados por complejidad?",
        "en": "According to the block summary, what are the four types of agents classified by complexity?",
        "val": "Segons el resum del bloc, quins són els quatre tipus d'agents classificats per complexitat?"
      },
      "options": {
        "es": [
          "Simple, intermedio, avanzado y experto",
          "Reactivo, con memoria, autónomo y multiagente",
          "Básico, dinámico, adaptativo y cognitivo",
          "Local, remoto, híbrido y distribuido"
        ],
        "en": [
          "Simple, intermediate, advanced and expert",
          "Reactive, memory-based, autonomous and multi-agent",
          "Basic, dynamic, adaptive and cognitive",
          "Local, remote, hybrid and distributed"
        ],
        "val": [
          "Simple, intermedi, avançat i expert",
          "Reactiu, amb memòria, autònom i multiagent",
          "Bàsic, dinàmic, adaptatiu i cognitiu",
          "Local, remot, híbrid i distribuït"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El resumen del bloque clasifica los agentes en cuatro tipos: reactivo (sin memoria, tareas simples), con memoria (asistentes y chatbots), autónomo (planificación multi-paso) y multiagente (roles especializados).",
        "en": "The block summary classifies agents into four types: reactive (no memory, simple tasks), memory-based (assistants and chatbots), autonomous (multi-step planning) and multi-agent (specialised roles).",
        "val": "El resum del bloc classifica els agents en quatre tipus: reactiu (sense memòria, tasques simples), amb memòria (assistents i chatbots), autònom (planificació en diversos passos) i multiagent (rols especialitzats)."
      }
    },
    {
      "q": {
        "es": "Según el glosario del bloque, ¿qué es un embedding?",
        "en": "According to the block glossary, what is an embedding?",
        "val": "Segons el glossari del bloc, què és un embedding?"
      },
      "options": {
        "es": [
          "Una función que ejecuta un agente para procesar datos",
          "Una representación vectorial de texto para búsqueda semántica",
          "Un protocolo para conectar herramientas externas",
          "Un marco de trabajo para construir agentes"
        ],
        "en": [
          "A function that an agent runs to process data",
          "A vector representation of text for semantic search",
          "A protocol for connecting external tools",
          "A framework for building agents"
        ],
        "val": [
          "Una funció que executa un agent per a processar dades",
          "Una representació vectorial de text per a la cerca semàntica",
          "Un protocol per a connectar eines externes",
          "Un marc de treball per a construir agents"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El glosario del bloque define embedding como la representación vectorial de texto para búsqueda semántica, utilizada en bases de datos vectoriales y sistemas RAG.",
        "en": "The block glossary defines embedding as the vector representation of text for semantic search, used in vector databases and RAG systems.",
        "val": "El glossari del bloc defineix embedding com la representació vectorial de text per a la cerca semàntica, utilitzada en bases de dades vectorials i sistemes RAG."
      }
    },
    {
      "q": {
        "es": "Según el resumen del bloque, ¿qué es el patrón ReAct?",
        "en": "According to the block summary, what is the ReAct pattern?",
        "val": "Segons el resum del bloc, què és el patró ReAct?"
      },
      "options": {
        "es": [
          "Un marco de trabajo para crear chatbots",
          "Un patrón que alterna razonamiento y acción",
          "Una herramienta para automatizar flujos de trabajo",
          "Un protocolo para conectar bases de datos"
        ],
        "en": [
          "A framework for creating chatbots",
          "A pattern that alternates reasoning and action",
          "A tool for automating workflows",
          "A protocol for connecting databases"
        ],
        "val": [
          "Un marc de treball per a crear chatbots",
          "Un patró que alterna raonament i acció",
          "Una eina per a automatitzar fluxos de treball",
          "Un protocol per a connectar bases de dades"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El glosario del bloque define ReAct como el patrón que alterna razonamiento y acción, utilizado en agentes autónomos para pensar, ejecutar y observar de forma continua.",
        "en": "The block glossary defines ReAct as the pattern that alternates reasoning and action, used in autonomous agents to continuously think, execute and observe.",
        "val": "El glossari del bloc defineix ReAct com el patró que alterna raonament i acció, utilitzat en agents autònoms per a pensar, executar i observar de manera contínua."
      }
    },
    {
      "q": {
        "es": "Según el resumen del bloque, ¿qué significa la expresión persona en el circuito?",
        "en": "According to the block summary, what does the expression human in the loop mean?",
        "val": "Segons el resum del bloc, què significa l'expressió persona en el circuit?"
      },
      "options": {
        "es": [
          "Una persona que programa los agentes desde cero",
          "Supervisión humana en decisiones críticas del agente",
          "Un agente que simula el comportamiento humano",
          "Una persona que usa el agente como asistente personal"
        ],
        "en": [
          "A person who programs agents from scratch",
          "Human supervision in critical decisions of the agent",
          "An agent that simulates human behaviour",
          "A person who uses the agent as a personal assistant"
        ],
        "val": [
          "Una persona que programa els agents des de zero",
          "Supervisió humana en decisions crítiques de l'agent",
          "Un agent que simula el comportament humà",
          "Una persona que usa l'agent com a assistent personal"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El glosario del bloque define persona en el circuito como la supervisión humana en decisiones críticas, asegurando que el agente no tome decisiones importantes sin revisión humana.",
        "en": "The block glossary defines human in the loop as human supervision in critical decisions, ensuring that the agent does not make important decisions without human review.",
        "val": "El glossari del bloc defineix persona en el circuit com la supervisió humana en decisions crítiques, assegurant que l'agent no prenga decisions importants sense revisió humana."
      }
    }
  ],
  "etica/01-introduccion-etica": [
    {
      "q": {
        "es": "¿Cuáles son los cinco principios éticos fundamentales de la IA según la lección?",
        "en": "What are the five fundamental ethical principles of AI according to the lesson?",
        "val": "Quins són els cinc principis ètics fonamentals de la IA segons la lliçó?"
      },
      "options": {
        "es": [
          "Velocidad, precisión, eficiencia, rentabilidad y escalabilidad",
          "Transparencia, justicia, responsabilidad, privacidad y beneficio social",
          "Transparencia, beneficio económico, innovación, privacidad y velocidad",
          "Justicia, beneficio social, precisión, eficiencia y responsabilidad"
        ],
        "en": [
          "Speed, accuracy, efficiency, profitability and scalability",
          "Transparency, fairness, accountability, privacy and social benefit",
          "Transparency, economic benefit, innovation, privacy and speed",
          "Fairness, social benefit, accuracy, efficiency and accountability"
        ],
        "val": [
          "Velocitat, precisió, eficiència, rendibilitat i escalabilitat",
          "Transparència, justícia, responsabilitat, privacitat i benefici social",
          "Transparència, benefici econòmic, innovació, privacitat i velocitat",
          "Justícia, benefici social, precisió, eficiència i responsabilitat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección enumera exactamente cinco principios: transparencia, justicia, responsabilidad, privacidad y beneficio social.",
        "en": "The lesson lists exactly five principles: transparency, fairness, accountability, privacy and social benefit.",
        "val": "La lliçó enumera exactament cinc principis: transparència, justícia, responsabilitat, privacitat i benefici social."
      }
    },
    {
      "q": {
        "es": "¿Por qué se dice que la inteligencia artificial no es neutral?",
        "en": "Why is artificial intelligence said not to be neutral?",
        "val": "Per què es diu que la intel·ligència artificial no és neutral?"
      },
      "options": {
        "es": [
          "Porque los algoritmos siempre cometen errores al procesar los datos",
          "Porque los modelos se entrenan solo con datos históricos obsoletos",
          "Porque la IA no puede procesar correctamente los datos personales",
          "Porque cada modelo, dato de entrenamiento y decisión refleja valores, prioridades y sesgos humanos"
        ],
        "en": [
          "Because algorithms always make mistakes when processing data",
          "Because models are trained only with outdated historical data",
          "Because AI cannot correctly process personal data",
          "Because every model, piece of training data and decision reflects human values, priorities and biases"
        ],
        "val": [
          "Perquè els algorismes sempre cometen errors en processar les dades",
          "Perquè els models s'entrenen només amb dades històriques obsoletes",
          "Perquè la IA no pot processar correctament les dades personals",
          "Perquè cada model, dada d'entrenament i decisió reflectix valors, prioritats i biaixos humans"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección afirma que cada modelo, dato de entrenamiento y decisión de implementación refleja valores, prioridades y sesgos humanos.",
        "en": "The lesson states that every model, training datum and implementation decision reflects human values, priorities and biases.",
        "val": "La lliçó afirma que cada model, dada d'entrenament i decisió d'implementació reflectix valors, prioritats i biaixos humans."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué organizaciones han propuesto marcos éticos de referencia para la IA?",
        "en": "According to the lesson, which organisations have proposed reference ethics frameworks for AI?",
        "val": "Segons la lliçó, quines organitzacions han proposat marcs ètics de referència per a la IA?"
      },
      "options": {
        "es": [
          "UNESCO, Unión Europea, OECD e IEEE",
          "Google, OpenAI, Meta y Apple",
          "Naciones Unidas, Banco Mundial, FMI y OMS",
          "Microsoft, Amazon, IBM y NVIDIA"
        ],
        "en": [
          "UNESCO, European Union, OECD and IEEE",
          "Google, OpenAI, Meta and Apple",
          "United Nations, World Bank, IMF and WHO",
          "Microsoft, Amazon, IBM and NVIDIA"
        ],
        "val": [
          "UNESCO, Unió Europea, OECD i IEEE",
          "Google, OpenAI, Meta i Apple",
          "Nacions Unides, Banc Mundial, FMI i OMS",
          "Microsoft, Amazon, IBM i NVIDIA"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La tabla de la lección cita UNESCO, Unión Europea (AI Act), OECD e IEEE como organizaciones con marcos éticos de referencia.",
        "en": "The lesson table cites UNESCO, the European Union (AI Act), the OECD and the IEEE as organisations with reference ethics frameworks.",
        "val": "La taula de la lliçó cita UNESCO, Unió Europea (AI Act), OECD i IEEE com a organitzacions amb marcs ètics de referència."
      }
    },
    {
      "q": {
        "es": "¿Cuál es un ejemplo real del costo de ignorar la ética en IA según la lección?",
        "en": "What is a real example of the cost of ignoring ethics in AI according to the lesson?",
        "val": "Quin és un exemple real del cost d'ignorar l'ètica en IA segons la lliçó?"
      },
      "options": {
        "es": [
          "Asistentes de voz que funcionaban más rápido en inglés",
          "Modelos que mejoraban la precisión de las búsquedas web",
          "Sistemas de reclutamiento que discriminaban a mujeres",
          "Chatbots que reducían los tiempos de atención al cliente"
        ],
        "en": [
          "Voice assistants that worked faster in English",
          "Models that improved the accuracy of web searches",
          "Recruitment systems that discriminated against women",
          "Chatbots that reduced customer service response times"
        ],
        "val": [
          "Assistents de veu que funcionaven més ràpid en anglés",
          "Models que milloraven la precisió de les cerques web",
          "Sistemes de reclutament que discriminaven dones",
          "Xatbots que reduïen els temps d'atenció al client"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección cita el sesgo en la contratación, el reconocimiento facial con más errores en personas de color, la desinformación en redes y los créditos denegados por código postal como costes reales de ignorar la ética.",
        "en": "The lesson cites bias in hiring, facial recognition with more errors for people of colour, disinformation on social networks and loans denied by postal code as real costs of ignoring ethics.",
        "val": "La lliçó cita el biaix en la contractació, el reconeixement facial amb més errors en persones de color, la desinformació en xarxes i els crèdits denegats per codi postal com a costos reals d'ignorar l'ètica."
      }
    }
  ],
  "etica/02-privacidad-datos": [
    {
      "q": {
        "es": "¿Cuál de estos es un principio fundamental del RGPD según la lección?",
        "en": "Which of these is a fundamental principle of the GDPR according to the lesson?",
        "val": "Quin d'aquests és un principi fonamental del RGPD segons la lliçó?"
      },
      "options": {
        "es": [
          "Maximización de datos: recopilar toda la información posible",
          "Libre reutilización de cualquier dato personal",
          "Minimización de datos: solo recoger los datos necesarios",
          "Publicación de todos los datos con fines comerciales"
        ],
        "en": [
          "Data maximisation: collecting as much information as possible",
          "Free reuse of any personal data",
          "Data minimisation: only collecting the necessary data",
          "Publishing all data for commercial purposes"
        ],
        "val": [
          "Maximització de dades: recopilar tota la informació possible",
          "Reutilització lliure de qualsevol dada personal",
          "Minimització de dades: només recollir les dades necessàries",
          "Publicació de totes les dades amb finalitats comercials"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La minimización de datos (tratar solo los datos necesarios) es uno de los seis principios fundamentales del RGPD que enumera la lección.",
        "en": "Data minimisation (only processing the necessary data) is one of the six fundamental GDPR principles listed in the lesson.",
        "val": "La minimització de dades (tractar només les dades necessàries) és un dels sis principis fonamentals del RGPD que enumera la lliçó."
      }
    },
    {
      "q": {
        "es": "¿Qué derecho del RGPD permite a una persona usuario eliminar sus datos personales?",
        "en": "Which GDPR right allows a user to delete their personal data?",
        "val": "Quin dret del RGPD permet a una persona usuària eliminar les seues dades personals?"
      },
      "options": {
        "es": [
          "Derecho a la supresión (derecho al olvido)",
          "Derecho de portabilidad",
          "Derecho de acceso",
          "Derecho de rectificación"
        ],
        "en": [
          "Right to erasure (right to be forgotten)",
          "Right to portability",
          "Right of access",
          "Right to rectification"
        ],
        "val": [
          "Dret a la supressió (dret a l'oblit)",
          "Dret a la portabilitat",
          "Dret d'accés",
          "Dret a la rectificació"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección enumera el derecho a la supresión, también llamado derecho al olvido, como el derecho a eliminar datos personales.",
        "en": "The lesson lists the right to erasure, also called the right to be forgotten, as the right to delete personal data.",
        "val": "La lliçó enumera el dret a la supressió, també anomenat dret a l'oblit, com el dret a eliminar dades personals."
      }
    },
    {
      "q": {
        "es": "¿Por qué es difícil lograr el consentimiento informado en los sistemas de IA?",
        "en": "Why is it difficult to achieve informed consent in AI systems?",
        "val": "Per què és difícil d'aconseguir el consentiment informat en els sistemes d'IA?"
      },
      "options": {
        "es": [
          "Porque el RGPD no regula el consentimiento en sistemas digitales",
          "Porque las personas usuarias siempre aceptan sin leer los términos",
          "Porque los modelos de IA no crean ningún dato de sus usuarios",
          "Porque la opacidad de los sistemas de IA dificulta entender cómo se usarán los datos para entrenar modelos"
        ],
        "en": [
          "Because the GDPR does not regulate consent in digital systems",
          "Because users always accept without reading the terms",
          "Because AI models do not create any data from their users",
          "Because the opacity of AI systems makes it hard to understand how data will be used to train models"
        ],
        "val": [
          "Perquè el RGPD no regula el consentiment en sistemes digitals",
          "Perquè les persones usuàries sempre accepten sense llegir els termes",
          "Perquè els models d'IA no creen cap dada dels seus usuaris",
          "Perquè l'opacitat dels sistemes d'IA dificulta entendre com s'usaran les dades per a entrenar models"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección señala que la opacidad de los sistemas de IA dificulta cumplir el requisito de transparencia y, por tanto, dar un consentimiento realmente informado.",
        "en": "The lesson points out that the opacity of AI systems makes it hard to meet the transparency requirement and therefore to give genuinely informed consent.",
        "val": "La lliçó assenyala que l'opacitat dels sistemes d'IA dificulta complir el requisit de transparència i, per tant, donar un consentiment realment informat."
      }
    },
    {
      "q": {
        "es": "¿Qué es la privacidad diferencial?",
        "en": "What is differential privacy?",
        "val": "Què és la privacitat diferencial?"
      },
      "options": {
        "es": [
          "Un sistema que elimina automáticamente todos los datos de los usuarios",
          "Una técnica que añade ruido estadístico controlado para que no se pueda identificar a personas concretas en los resultados",
          "Una ley europea que obliga a cifrar todas las conversaciones con IA",
          "Un método para recopilar más datos anónimos de las personas usuarias"
        ],
        "en": [
          "A system that automatically deletes all user data",
          "A technique that adds controlled statistical noise so that specific individuals cannot be identified in the results",
          "A European law that requires encrypting all conversations with AI",
          "A method for collecting more anonymous data from users"
        ],
        "val": [
          "Un sistema que elimina automàticament totes les dades dels usuaris",
          "Una tècnica que afegeix soroll estadístic controlat perquè no es puga identificar persones concretes en els resultats",
          "Una llei europea que obliga a xifrar totes les converses amb IA",
          "Un mètode per a recopilar més dades anònimes de les persones usuàries"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección define la privacidad diferencial como una técnica que añade ruido estadístico controlado manteniendo la utilidad global de los datos.",
        "en": "The lesson defines differential privacy as a technique that adds controlled statistical noise while maintaining the overall usefulness of the data.",
        "val": "La lliçó defineix la privacitat diferencial com una tècnica que afegeix soroll estadístic controlat mantenint la utilitat global de les dades."
      }
    }
  ],
  "etica/03-sesgo-equidad": [
    {
      "q": {
        "es": "¿En qué tres etapas del desarrollo de IA puede introducirse el sesgo según la lección?",
        "en": "At which three stages of AI development can bias be introduced according to the lesson?",
        "val": "En quines tres etapes del desenvolupament d'IA pot introduir-se el biaix segons la lliçó?"
      },
      "options": {
        "es": [
          "En el entrenamiento, en la velocidad y en el coste",
          "En la arquitectura, en el precio y en la interfaz",
          "En la evaluación, en el diseño visual y en el marketing",
          "En los datos, en el modelo y en el despliegue"
        ],
        "en": [
          "In training, in speed and in cost",
          "In the architecture, in the price and in the interface",
          "In evaluation, in the visual design and in marketing",
          "In the data, in the model and in the deployment"
        ],
        "val": [
          "En l'entrenament, en la velocitat i en el cost",
          "En l'arquitectura, en el preu i en la interfície",
          "En l'avaluació, en el disseny visual i en el màrqueting",
          "En les dades, en el model i en el desplegament"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección identifica tres fuentes principales de sesgo: el sesgo en los datos, en el modelo y en el despliegue.",
        "en": "The lesson identifies three main sources of bias: bias in the data, in the model and in the deployment.",
        "val": "La lliçó identifica tres fonts principals de biaix: el biaix en les dades, en el model i en el desplegament."
      }
    },
    {
      "q": {
        "es": "En el ejemplo del reconocimiento facial de la lección, ¿qué problema se observó?",
        "en": "In the facial recognition example in the lesson, what problem was observed?",
        "val": "En l'exemple del reconeixement facial de la lliçó, quin problema es va observar?"
      },
      "options": {
        "es": [
          "El sistema fallaba al reconocer a todos los hombres",
          "Tasas de error del 0.8% para hombres blancos y del 35% para mujeres de piel oscura",
          "Las tasas de error eran idénticas para todos los grupos",
          "El sistema solo funcionaba con imágenes de baja calidad"
        ],
        "en": [
          "The system failed to recognise all men",
          "Error rates of 0.8% for white men and 35% for women with dark skin",
          "The error rates were identical for all groups",
          "The system only worked with low-quality images"
        ],
        "val": [
          "El sistema fallava en reconéixer tots els homes",
          "Taxes d'error del 0.8% per a homes blancs i del 35% per a dones de pell fosca",
          "Les taxes d'error eren idèntiques per a tots els grups",
          "El sistema només funcionava amb imatges de baixa qualitat"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección cita estudios con error del 0.8% para hombres blancos y del 35% para mujeres de piel oscura, causado por datos de entrenamiento con mayoría de hombres blancos.",
        "en": "The lesson cites studies with error rates of 0.8% for white men and 35% for women with dark skin, caused by training data with a majority of white men.",
        "val": "La lliçó cita estudis amb una taxa d'error del 0.8% per a homes blancs i del 35% per a dones de pell fosca, causada per dades d'entrenament amb majoria d'homes blancs."
      }
    },
    {
      "q": {
        "es": "¿Qué demuestra el caso del sistema COMPAS en Estados Unidos?",
        "en": "What does the case of the COMPAS system in the United States demonstrate?",
        "val": "Què demostra el cas del sistema COMPAS als Estats Units?"
      },
      "options": {
        "es": [
          "Que era un sistema perfecto sin ningún tipo de sesgo",
          "Que su sesgo favorecía a las minorías en las decisiones judiciales",
          "Que mostraba sesgo racial al predecir mayor riesgo de reincidencia para personas afroamericanas que para personas blancas en condiciones similares",
          "Que solo se aplicaba a delitos menores sin repercusión social"
        ],
        "en": [
          "That it was a perfect system with no bias of any kind",
          "That its bias favoured minorities in judicial decisions",
          "That it showed racial bias by predicting a higher risk of reoffending for Black people than for white people in similar conditions",
          "That it was only applied to minor offences with no social impact"
        ],
        "val": [
          "Que era un sistema perfecte sense cap tipus de biaix",
          "Que el seu biaix afavoria les minories en les decisions judicials",
          "Que mostrava biaix racial en predir major risc de reincidència per a persones afroamericanes que per a persones blanques en condicions similars",
          "Que només s'aplicava a delictes menors sense repercussió social"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección afirma que COMPAS mostraba sesgo racial al predecir mayor riesgo para personas afroamericanas y menor para personas blancas en condiciones similares.",
        "en": "The lesson states that COMPAS showed racial bias by predicting a higher risk for Black people and a lower risk for white people in similar conditions.",
        "val": "La lliçó afirma que COMPAS mostrava biaix racial en predir major risc per a persones afroamericanes i menor per a persones blanques en condicions similars."
      }
    },
    {
      "q": {
        "es": "¿Por qué no existe una única definición de equidad en IA según la lección?",
        "en": "Why is there no single definition of fairness in AI according to the lesson?",
        "val": "Per què no existeix una única definició d'equitat en IA segons la lliçó?"
      },
      "options": {
        "es": [
          "Porque ninguna métrica de equidad es técnicamente posible",
          "Porque la legislación europea aún no ha definido ningún criterio",
          "Porque todos los modelos de IA miden la equidad de la misma forma",
          "Porque la elección de qué métrica usar depende del contexto, los valores de la comunidad y el impacto en las personas afectadas"
        ],
        "en": [
          "Because no fairness metric is technically possible",
          "Because European legislation has not yet defined any criterion",
          "Because all AI models measure fairness in the same way",
          "Because the choice of which metric to use depends on the context, the values of the community and the impact on the people affected"
        ],
        "val": [
          "Perquè cap mètrica d'equitat és tècnicament possible",
          "Perquè la legislació europea encara no ha definit cap criteri",
          "Perquè tots els models d'IA mesuren l'equitat de la mateixa manera",
          "Perquè l'elecció de quina mètrica usar depén del context, dels valors de la comunitat i de l'impacte en les persones afectades"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección indica que no existe una definición universal de equidad y que la métrica depende del contexto, de los valores de la comunidad y del impacto potencial.",
        "en": "The lesson indicates that there is no universal definition of fairness and that the metric depends on the context, the values of the community and the potential impact.",
        "val": "La lliçó indica que no existeix una definició universal d'equitat i que la mètrica depén del context, dels valors de la comunitat i de l'impacte potencial."
      }
    }
  ],
  "etica/04-copyright-propiedad": [
    {
      "q": {
        "es": "Según la lección, ¿puede una IA ser considerada autora de una obra con copyright en la mayoría de jurisdicciones?",
        "en": "According to the lesson, can an AI be considered the author of a work with copyright in most jurisdictions?",
        "val": "Segons la lliçó, pot una IA ser considerada autora d'una obra amb copyright en la majoria de jurisdiccions?"
      },
      "options": {
        "es": [
          "Sí, siempre que la IA haya sido entrenada con suficientes datos",
          "Solo si la obra se genera en el idioma de la persona usuaria",
          "No, porque solo las personas pueden ser autoras, y una obra generada íntegramente por IA sin intervención humana significativa no puede registrarse",
          "Sí, en todas las jurisdicciones sin excepción"
        ],
        "en": [
          "Yes, as long as the AI has been trained with enough data",
          "Only if the work is generated in the user's language",
          "No, because only humans can be authors, and a work generated entirely by AI without significant human intervention cannot be registered",
          "Yes, in all jurisdictions without exception"
        ],
        "val": [
          "Sí, sempre que la IA haja estat entrenada amb prou dades",
          "Només si l'obra es genera en l'idioma de la persona usuària",
          "No, perquè només les persones poden ser autores, i una obra generada íntegrament per IA sense intervenció humana significativa no es pot registrar",
          "Sí, en totes les jurisdiccions sense excepció"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección indica que la mayoría de jurisdicciones (EE.UU., UE, Reino Unido) sostienen que solo las personas pueden ser autoras.",
        "en": "The lesson states that most jurisdictions (US, EU, UK) hold that only humans can be authors.",
        "val": "La lliçó indica que la majoria de jurisdiccions (EUA, UE, Regne Unit) sostenen que només les persones poden ser autores."
      }
    },
    {
      "q": {
        "es": "¿Qué factor determina si una obra generada con IA puede tener copyright, según la oficina de copyright de EE.UU.?",
        "en": "What factor determines whether a work generated with AI can have copyright, according to the US Copyright Office?",
        "val": "Quin factor determina si una obra generada amb IA pot tindre copyright, segons l'oficina de copyright dels EUA?"
      },
      "options": {
        "es": [
          "El grado de intervención humana: si la IA es una herramienta dirigida por el humano o una creadora sin control humano significativo",
          "El tamaño del modelo de IA utilizado",
          "La cantidad de datos de entrenamiento empleados",
          "El idioma en el que se genera la obra"
        ],
        "en": [
          "The degree of human intervention: whether the AI is a tool directed by the human or a creator without significant human control",
          "The size of the AI model used",
          "The amount of training data used",
          "The language in which the work is generated"
        ],
        "val": [
          "El grau d'intervenció humana: si la IA és una eina dirigida per l'humà o una creadora sense control humà significatiu",
          "La mida del model d'IA utilitzat",
          "La quantitat de dades d'entrenament emprades",
          "L'idioma en què es genera l'obra"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección destaca que el factor clave es el grado de intervención humana, distinguiendo entre la IA como herramienta y la IA como creadora.",
        "en": "The lesson highlights that the key factor is the degree of human intervention, distinguishing between AI as a tool and AI as a creator.",
        "val": "La lliçó destaca que el factor clau és el grau d'intervenció humana, distingint entre la IA com a eina i la IA com a creadora."
      }
    },
    {
      "q": {
        "es": "¿Qué posiciones enfrenta el debate sobre el uso de obras con copyright para entrenar modelos de IA?",
        "en": "What positions does the debate over using copyrighted works to train AI models involve?",
        "val": "Quines posicions enfronta el debat sobre l'ús d'obres amb copyright per a entrenar models d'IA?"
      },
      "options": {
        "es": [
          "Todas las partes coinciden en que es claramente legal",
          "Las empresas de IA defienden que es uso legítimo, mientras los creadores y editoriales lo consideran una infracción masiva",
          "Los gobiernos prohíben todo uso de obras protegidas sin excepción",
          "Las empresas de IA admiten que es ilegal y han dejado de entrenar modelos"
        ],
        "en": [
          "All parties agree that it is clearly legal",
          "AI companies argue it is fair use, while creators and publishers consider it mass infringement",
          "Governments prohibit all use of protected works without exception",
          "AI companies admit it is illegal and have stopped training models"
        ],
        "val": [
          "Totes les parts coincideixen que és clarament legal",
          "Les empreses d'IA defensen que és ús legítim, mentre les persones creadores i les editorials ho consideren una infracció massiva",
          "Els governs prohibeixen tot ús d'obres protegides sense excepció",
          "Les empreses d'IA admeten que és il·legal i han deixat d'entrenar models"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección describe tres posiciones: empresas que lo ven como uso legítimo, creadores que reclaman compensación por infracción masiva y gobiernos que buscan equilibrio.",
        "en": "The lesson describes three positions: companies that see it as fair use, creators who demand compensation for mass infringement and governments seeking a balance.",
        "val": "La lliçó descriu tres posicions: empreses que ho veuen com ús legítim, persones creadores que reclamen compensació per infracció massiva i governs que busquen un equilibri."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué buena práctica es esencial independientemente de lo que decidan los tribunales?",
        "en": "According to the lesson, what good practice is essential regardless of what the courts decide?",
        "val": "Segons la lliçó, quina bona pràctica és essencial independentment del que decidisquen els tribunals?"
      },
      "options": {
        "es": [
          "Ocultar el uso de IA en todas las creaciones profesionales",
          "Usar solo modelos con licencia abierta",
          "Registrar todas las obras generadas por IA como propiedad del modelo",
          "La transparencia: declarar el uso de IA, respetar las licencias y atribuir cuando corresponda"
        ],
        "en": [
          "Hiding the use of AI in all professional creations",
          "Using only openly licensed models",
          "Registering all AI-generated works as the property of the model",
          "Transparency: declaring the use of AI, respecting licences and attributing when appropriate"
        ],
        "val": [
          "Amagar l'ús d'IA en totes les creacions professionals",
          "Usar només models amb llicència oberta",
          "Registrar totes les obres generades per IA com a propietat del model",
          "La transparència: declarar l'ús d'IA, respectar les llicències i atribuir quan corresponga"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección concluye que la transparencia es siempre la mejor política: declarar el uso de IA, respetar las licencias y atribuir.",
        "en": "The lesson concludes that transparency is always the best policy: declaring the use of AI, respecting licences and attributing.",
        "val": "La lliçó conclou que la transparència és sempre la millor política: declarar l'ús d'IA, respectar les llicències i atribuir."
      }
    }
  ],
  "etica/05-regulacion-futuro": [
    {
      "q": {
        "es": "¿Cuál es el enfoque del AI Act europeo para regular la IA?",
        "en": "What is the approach of the European AI Act for regulating AI?",
        "val": "Quin és l'enfocament de l'AI Act europeu per a regular la IA?"
      },
      "options": {
        "es": [
          "Una prohibición total de todas las aplicaciones de IA",
          "Un marco basado en el nivel de riesgo de cada sistema de IA",
          "Un enfoque sectorial sin normas comunes",
          "Una regulación voluntaria sin obligaciones legales"
        ],
        "en": [
          "A total ban on all AI applications",
          "A framework based on the level of risk of each AI system",
          "A sectoral approach with no common rules",
          "Voluntary regulation with no legal obligations"
        ],
        "val": [
          "Una prohibició total de totes les aplicacions d'IA",
          "Un marc basat en el nivell de risc de cada sistema d'IA",
          "Un enfocament sectorial sense normes comunes",
          "Una regulació voluntària sense obligacions legals"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El AI Act clasifica los sistemas de IA según su nivel de riesgo, desde riesgo mínimo hasta riesgo inaceptable.",
        "en": "The AI Act classifies AI systems according to their level of risk, from minimal to unacceptable risk.",
        "val": "L'AI Act classifica els sistemes d'IA segons el seu nivell de risc, des del risc mínim fins al risc inacceptable."
      }
    },
    {
      "q": {
        "es": "Según el AI Act, ¿qué usos pertenecen al nivel de riesgo inaceptable y están prohibidos?",
        "en": "According to the AI Act, which uses belong to the unacceptable risk level and are prohibited?",
        "val": "Segons l'AI Act, quins usos pertanyen al nivell de risc inacceptable i estan prohibits?"
      },
      "options": {
        "es": [
          "Filtros de spam y recomendadores de contenido",
          "Chatbots y generación de contenido sintético",
          "Infraestructuras críticas y sistemas de empleo",
          "Puntuación social, vigilancia masiva y manipulación conductual"
        ],
        "en": [
          "Spam filters and content recommender systems",
          "Chatbots and synthetic content generation",
          "Critical infrastructures and employment systems",
          "Social scoring, mass surveillance and behavioural manipulation"
        ],
        "val": [
          "Filtres de correu brossa i recomanadors de contingut",
          "Xatbots i generació de contingut sintètic",
          "Infraestructures crítiques i sistemes d'ocupació",
          "Puntuació social, vigilància massiva i manipulació conductual"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "La lección indica que el riesgo inaceptable, que está prohibido, incluye la puntuación social, la vigilancia masiva y la manipulación conductual.",
        "en": "The lesson indicates that unacceptable risk, which is prohibited, includes social scoring, mass surveillance and behavioural manipulation.",
        "val": "La lliçó indica que el risc inacceptable, que està prohibit, inclou la puntuació social, la vigilància massiva i la manipulació conductual."
      }
    },
    {
      "q": {
        "es": "¿Qué diferencia hay entre la regulación de la IA en Estados Unidos y en China según la lección?",
        "en": "What difference is there between AI regulation in the United States and in China according to the lesson?",
        "val": "Quina diferència hi ha entre la regulació de la IA als Estats Units i a la Xina segons la lliçó?"
      },
      "options": {
        "es": [
          "Estados Unidos usa un enfoque sectorial y voluntario con énfasis en la innovación, mientras China es centralizado y estricto con marcas de agua obligatorias",
          "China es voluntaria mientras Estados Unidos prohíbe toda la IA",
          "Ambos países usan el mismo enfoque basado en el riesgo",
          "Estados Unidos es estricto y China es descentralizada"
        ],
        "en": [
          "The United States uses a sectoral, voluntary approach with an emphasis on innovation, while China is centralised and strict with mandatory watermarks",
          "China is voluntary while the United States bans all AI",
          "Both countries use the same risk-based approach",
          "The United States is strict and China is decentralised"
        ],
        "val": [
          "Els Estats Units usen un enfocament sectorial i voluntari amb èmfasi en la innovació, mentre la Xina és centralitzada i estricta amb marques d'aigua obligatòries",
          "La Xina és voluntària mentre els EUA prohibeixen tota la IA",
          "Tots dos països usen el mateix enfocament basat en el risc",
          "Els Estats Units són estrictes i la Xina és descentralitzada"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Según la tabla de la lección, EE.UU. es sectorial y voluntario y China es centralizado y estricto, con marcas de agua obligatorias para el contenido generado por IA.",
        "en": "According to the lesson table, the US is sectoral and voluntary and China is centralised and strict, with mandatory watermarks for AI-generated content.",
        "val": "Segons la taula de la lliçó, els EUA són sectorials i voluntaris i la Xina és centralitzada i estricta, amb marques d'aigua obligatòries per al contingut generat per IA."
      }
    },
    {
      "q": {
        "es": "¿Cuál es uno de los principales desafíos de regular la IA según la lección?",
        "en": "What is one of the main challenges of regulating AI according to the lesson?",
        "val": "Quin és un dels principals reptes de regular la IA segons la lliçó?"
      },
      "options": {
        "es": [
          "La IA se regula fácilmente siguiendo leyes ya existentes",
          "Los gobiernos siempre acuerdan la misma normativa global",
          "La velocidad del avance tecnológico supera la capacidad legislativa",
          "La regulación no afecta a la innovación ni a la protección"
        ],
        "en": [
          "AI is regulated easily by following existing laws",
          "Governments always agree on the same global regulation",
          "The speed of technological progress outpaces legislative capacity",
          "Regulation does not affect innovation or protection"
        ],
        "val": [
          "La IA es regula fàcilment seguint lleis ja existents",
          "Els governs sempre acorden la mateixa normativa global",
          "La velocitat de l'avanç tecnològic supera la capacitat legislativa",
          "La regulació no afecta la innovació ni la protecció"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección identifica como desafíos la velocidad del cambio, la naturaleza global de la IA y el equilibrio entre innovación y protección.",
        "en": "The lesson identifies the speed of change, the global nature of AI and the balance between innovation and protection as challenges.",
        "val": "La lliçó identifica com a reptes la velocitat del canvi, la naturalesa global de la IA i l'equilibri entre innovació i protecció."
      }
    }
  ],
  "etica/06-resumen-recursos": [
    {
      "q": {
        "es": "¿Qué principios éticos se destacan como fundamentales en el resumen del bloque?",
        "en": "Which ethical principles are highlighted as fundamental in the block summary?",
        "val": "Quins principis ètics es destaquen com a fonamentals en el resum del bloc?"
      },
      "options": {
        "es": [
          "Precisión, eficiencia, velocidad, coste y escalabilidad",
          "Innovación, beneficio, datos, modelos y algoritmos",
          "Transparencia, justicia, responsabilidad, privacidad y beneficio social",
          "Acceso, rectificación, supresión, portabilidad y oposición"
        ],
        "en": [
          "Accuracy, efficiency, speed, cost and scalability",
          "Innovation, benefit, data, models and algorithms",
          "Transparency, fairness, accountability, privacy and social benefit",
          "Access, rectification, erasure, portability and objection"
        ],
        "val": [
          "Precisió, eficiència, velocitat, cost i escalabilitat",
          "Innovació, benefici, dades, models i algorismes",
          "Transparència, justícia, responsabilitat, privacitat i benefici social",
          "Accés, rectificació, supressió, portabilitat i oposició"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El resumen del bloque confirma que los cinco principios fundamentales de la ética en IA son transparencia, justicia, responsabilidad, privacidad y beneficio social.",
        "en": "The block summary confirms that the five fundamental principles of AI ethics are transparency, fairness, accountability, privacy and social benefit.",
        "val": "El resum del bloc confirma que els cinc principis fonamentals de l'ètica en IA són transparència, justícia, responsabilitat, privacitat i benefici social."
      }
    },
    {
      "q": {
        "es": "Según el glosario del bloque, ¿qué significa XAI?",
        "en": "According to the block glossary, what does XAI mean?",
        "val": "Segons el glossari del bloc, què significa XAI?"
      },
      "options": {
        "es": [
          "Sistemas de IA con inteligencia artificial extrema",
          "Explainable AI: sistemas que pueden explicar sus decisiones",
          "IA aplicada exclusivamente a la atención al cliente",
          "Un protocolo de cifrado de datos para modelos de IA"
        ],
        "en": [
          "Extreme AI systems",
          "Explainable AI: systems that can explain their decisions",
          "AI applied exclusively to customer service",
          "A data encryption protocol for AI models"
        ],
        "val": [
          "Sistemes amb intel·ligència artificial extrema",
          "Explainable AI: sistemes que poden explicar les seues decisions",
          "IA aplicada exclusivament a l'atenció al client",
          "Un protocol de xifrat de dades per a models d'IA"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El glosario define XAI como Explainable AI, es decir, sistemas que pueden explicar sus decisiones.",
        "en": "The glossary defines XAI as Explainable AI, that is, systems that can explain their decisions.",
        "val": "El glossari defineix XAI com Explainable AI, és a dir, sistemes que poden explicar les seues decisions."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué técnica busca conciliar la IA con la privacidad?",
        "en": "According to the lesson, which technique seeks to reconcile AI with privacy?",
        "val": "Segons la lliçó, quina tècnica busca conciliar la IA amb la privacitat?"
      },
      "options": {
        "es": [
          "La privacidad diferencial",
          "El derecho al olvido selectivo",
          "El cifrado de extremo a extremo",
          "La minimización de la recogida de datos"
        ],
        "en": [
          "Differential privacy",
          "Selective right to be forgotten",
          "End-to-end encryption",
          "Minimising data collection"
        ],
        "val": [
          "La privacitat diferencial",
          "El dret a l'oblit selectiu",
          "El xifrat de cap a cap",
          "La minimització de la recollida de dades"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El resumen del bloque indica que técnicas como la privacidad diferencial buscan conciliar la IA y la privacidad.",
        "en": "The block summary indicates that techniques such as differential privacy seek to reconcile AI and privacy.",
        "val": "El resum del bloc indica que tècniques com la privacitat diferencial busquen conciliar la IA i la privacitat."
      }
    },
    {
      "q": {
        "es": "Según el resumen, ¿qué características diferencian los enfoques regulatorios de la Unión Europea frente a Estados Unidos?",
        "en": "According to the summary, what characteristics distinguish the regulatory approaches of the European Union from those of the United States?",
        "val": "Segons el resum, quines característiques diferencien els enfocaments reguladors de la Unió Europea davant dels Estats Units?"
      },
      "options": {
        "es": [
          "Estados Unidos tiene una regulación integral y Europa es sectorial",
          "Ambos usan un enfoque centralizado y estricto",
          "Europa no tiene ninguna regulación de IA vigente",
          "Europa lidera una regulación integral basada en el riesgo, mientras Estados Unidos adopta un enfoque sectorial"
        ],
        "en": [
          "The United States has comprehensive regulation and Europe is sectoral",
          "Both use a centralised and strict approach",
          "Europe has no AI regulation in force",
          "Europe leads comprehensive risk-based regulation, while the United States adopts a sectoral approach"
        ],
        "val": [
          "Els Estats Units tenen una regulació integral i Europa és sectorial",
          "Tots dos usen un enfocament centralitzat i estricte",
          "Europa no té cap regulació d'IA vigent",
          "Europa lidera una regulació integral basada en el risc, mentre els Estats Units adopten un enfocament sectorial"
        ]
      },
      "correct": 3,
      "explain": {
        "es": "El resumen establece que el AI Act europeo lidera la regulación basada en riesgo, mientras EE.UU., China y Latinoamérica tienen enfoques diferentes.",
        "en": "The summary states that the European AI Act leads risk-based regulation, while the US, China and Latin America have different approaches.",
        "val": "El resum estableix que l'AI Act europeu lidera la regulació basada en el risc, mentre els EUA, la Xina i l'Amèrica Llatina tenen enfocaments diferents."
      }
    }
  ],
  "laboratorio/01-bienvenido-laboratorio": [
    {
      "q": {
        "es": "¿Cuáles son las cinco herramientas del laboratorio de Atlas IA?",
        "en": "What are the five tools of the Atlas IA laboratory?",
        "val": "Quines són les cinc eines del laboratori d'Atlas IA?"
      },
      "options": {
        "es": [
          "Chat IA, Entorno de Prompts, Flujo de Agentes, Comparador de Modelos y Simulador de Tokens",
          "Chat IA, Editor de Código, Calculadora, Traductor y Simulador de Tokens",
          "Buscador IA, Generador de Imágenes, Chat IA, Flujo de Agentes y Comparador de Modelos",
          "Entorno de Prompts, Banco de Pruebas, Generador de Código, Chat IA y Analizador de Datos"
        ],
        "en": [
          "AI Chat, Prompt Environment, Agent Flow, Model Comparator and Token Simulator",
          "AI Chat, Code Editor, Calculator, Translator and Token Simulator",
          "AI Search, Image Generator, AI Chat, Agent Flow and Model Comparator",
          "Prompt Environment, Test Bench, Code Generator, AI Chat and Data Analyser"
        ],
        "val": [
          "Chat IA, Entorn de Prompts, Flux d'Agents, Comparador de Models i Simulador de Tokens",
          "Chat IA, Editor de Codi, Calculadora, Traductor i Simulador de Tokens",
          "Cercador IA, Generador d'Imatges, Chat IA, Flux d'Agents i Comparador de Models",
          "Entorn de Prompts, Banc de Proves, Generador de Codi, Chat IA i Analitzador de Dades"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El laboratorio incluye exactamente estas cinco herramientas: Chat IA, Entorno de Prompts, Flujo de Agentes, Comparador de Modelos y Simulador de Tokens.",
        "en": "The laboratory includes exactly these five tools: AI Chat, Prompt Environment, Agent Flow, Model Comparator and Token Simulator.",
        "val": "El laboratori inclou exactament aquestes cinc eines: Chat IA, Entorn de Prompts, Flux d'Agents, Comparador de Models i Simulador de Tokens."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por dónde se recomienda empezar si eres principiante?",
        "en": "According to the lesson, where is it recommended to start if you are a beginner?",
        "val": "Segons la lliçó, per on es recomana començar si ets principiant?"
      },
      "options": {
        "es": [
          "Con el Comparador de Modelos para elegir la mejor herramienta",
          "Con el Chat IA haciendo preguntas básicas sobre conceptos",
          "Con Flujo de Agentes diseñando tu primer flujo",
          "Con el Simulador de Tokens para entender el coste"
        ],
        "en": [
          "With the Model Comparator to choose the best tool",
          "With the AI Chat asking basic questions about concepts",
          "With Agent Flow designing your first flow",
          "With the Token Simulator to understand the cost"
        ],
        "val": [
          "Amb el Comparador de Models per a triar la millor eina",
          "Amb el Chat IA fent preguntes bàsiques sobre conceptes",
          "Amb Flux d'Agents dissenyant el teu primer flux",
          "Amb el Simulador de Tokens per a entendre el cost"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección recomienda empezar con el Chat IA para hacer preguntas básicas sobre conceptos que no te hayan quedado claros en los bloques anteriores.",
        "en": "The lesson recommends starting with the AI Chat to ask basic questions about concepts that were not clear in the previous blocks.",
        "val": "La lliçó recomana començar amb el Chat IA per a fer preguntes bàsiques sobre conceptes que no t'hagen quedat clars en els blocs anteriors."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la principal ventaja de aprender experimentando frente a solo leer teoría?",
        "en": "What is the main advantage of learning by experimenting over just reading theory?",
        "val": "Quin és el principal avantatge d'aprendre experimentant enfront de només llegir teoria?"
      },
      "options": {
        "es": [
          "Es más rápido memorizar los conceptos con ejercicios prácticos",
          "Te permite probar, equivocarte, ajustar y volver a intentar sin riesgo",
          "Evita tener que usar un libro de texto para estudiar",
          "Garantiza que apruebes todos los exámenes del curso"
        ],
        "en": [
          "It is faster to memorise concepts with practical exercises",
          "It lets you try, make mistakes, adjust and try again without risk",
          "It avoids having to use a textbook to study",
          "It guarantees you pass all the course exams"
        ],
        "val": [
          "És més ràpid memoritzar els conceptes amb exercicis pràctics",
          "Et permet provar, equivocar-te, ajustar i tornar-ho a intentar sense risc",
          "Evita haver d'usar un llibre de text per a estudiar",
          "Garantitza que aproves tots els exàmens del curs"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El laboratorio está diseñado para aprender haciendo: probar, equivocarse, ajustar y volver a intentar sin riesgo es la forma en que realmente se aprende IA.",
        "en": "The laboratory is designed for learning by doing: trying, making mistakes, adjusting and trying again without risk is how you really learn AI.",
        "val": "El laboratori està dissenyat per a aprendre fent: provar, equivocar-se, ajustar i tornar-ho a intentar sense risc és la forma en què realment s'aprén IA."
      }
    },
    {
      "q": {
        "es": "¿Qué tipo de nodo permite construir cadenas de agentes en Flujo de Agentes?",
        "en": "What type of nodes allow building agent chains in Agent Flow?",
        "val": "Quin tipus de nodes permet construir cadenes d'agents en Flux d'Agents?"
      },
      "options": {
        "es": [
          "Nodos de entrada, procesamiento, recuperación, acción y salida",
          "Nodos de texto, imagen, audio, vídeo y código",
          "Nodos de inicio, decisión, bucle, condición y fin",
          "Nodos de lectura, escritura, envío, recepción y almacenamiento"
        ],
        "en": [
          "Input, processing, retrieval, action and output nodes",
          "Text, image, audio, video and code nodes",
          "Start, decision, loop, condition and end nodes",
          "Read, write, send, receive and storage nodes"
        ],
        "val": [
          "Nodes d'entrada, processament, recuperació, acció i eixida",
          "Nodes de text, imatge, àudio, vídeo i codi",
          "Nodes d'inici, decisió, bucle, condició i fi",
          "Nodes de lectura, escriptura, enviament, recepció i emmagatzematge"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Flujo de Agentes dispone de cinco tipos de nodo: Input (entrada), LLM (procesamiento), RAG (recuperación), Tool (acción) y Output (salida).",
        "en": "Agent Flow has five node types: Input (entry), LLM (processing), RAG (retrieval), Tool (action) and Output (exit).",
        "val": "Flux d'Agents disposa de cinc tipus de node: Input (entrada), LLM (processament), RAG (recuperació), Tool (acció) i Output (eixida)."
      }
    }
  ],
  "laboratorio/02-chat-ia-practico": [
    {
      "q": {
        "es": "¿Por qué es importante ser específico al preguntar al chat de IA?",
        "en": "Why is it important to be specific when asking the AI chat?",
        "val": "Per què és important ser específic en preguntar al xat d'IA?"
      },
      "options": {
        "es": [
          "Porque el chat cobra más por cada respuesta vaga",
          "Porque la calidad de la respuesta depende directamente de cómo preguntas",
          "Porque el chat solo acepta preguntas con más de diez palabras",
          "Porque los formatos específicos siempre son más cortos"
        ],
        "en": [
          "Because the chat charges more for each vague answer",
          "Because the quality of the answer depends directly on how you ask",
          "Because the chat only accepts questions with more than ten words",
          "Because specific formats are always shorter"
        ],
        "val": [
          "Perquè el xat cobra més per cada resposta vaga",
          "Perquè la qualitat de la resposta depén directament de com preguntes",
          "Perquè el xat només accepta preguntes amb més de deu paraules",
          "Perquè els formats específics sempre són més curts"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección indica que la calidad de lo que obtienes del chat depende directamente de cómo preguntas.",
        "en": "The lesson states that the quality of what you get from the chat depends directly on how you ask.",
        "val": "La lliçó indica que la qualitat del que obtens del xat depén directament de com preguntes."
      }
    },
    {
      "q": {
        "es": "¿Cuál es la recomendación sobre la privacidad al usar el chat de IA?",
        "en": "What is the recommendation about privacy when using the AI chat?",
        "val": "Quina és la recomanació sobre la privadesa en usar el xat d'IA?"
      },
      "options": {
        "es": [
          "No compartas información personal sensible como edad, dirección o lugar de trabajo",
          "Solo puedes usar el chat con nombre real registrado",
          "Las conversaciones se borran automáticamente cada veinticuatro horas",
          "Debes usar el chat únicamente con conexiones cifradas"
        ],
        "en": [
          "Do not share sensitive personal information such as age, address or workplace",
          "You can only use the chat with a registered real name",
          "Conversations are automatically deleted every twenty-four hours",
          "You must use the chat only with encrypted connections"
        ],
        "val": [
          "No compartisques informació personal sensible com edat, adreça o lloc de treball",
          "Només pots usar el xat amb nom real registrat",
          "Les converses se borren automàticament cada vint-i-quatre hores",
          "Has d'usar el xat únicament amb connexions xifrades"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección advierte que las conversaciones pueden usarse para mejorar el sistema y recomienda no compartir datos personales como edad, dirección o lugar de trabajo.",
        "en": "The lesson warns that conversations may be used to improve the system and recommends not sharing personal data such as age, address or workplace.",
        "val": "La lliçó avisa que les converses poden usar-se per a millorar el sistema i recomana no compartir dades personals com edat, adreça o lloc de treball."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué debes hacer cuando la respuesta del chat no es buena?",
        "en": "According to the lesson, what should you do when the chat answer is not good?",
        "val": "Segons la lliçó, què has de fer quan la resposta del xat no és bona?"
      },
      "options": {
        "es": [
          "Reformular la pregunta con más contexto, pedir una fuente o probar otra herramienta",
          "Borrar la conversación y empezar de cero con otra cuenta",
          "Escribir la misma pregunta con más puntos de exclamación",
          "Cambiar el idioma del chat a otro diferente"
        ],
        "en": [
          "Rephrase the question with more context, ask for a source or try another tool",
          "Delete the conversation and start from scratch with another account",
          "Write the same question with more exclamation marks",
          "Change the chat language to a different one"
        ],
        "val": [
          "Reformula la pregunta amb més context, demana una font o prova una altra eina",
          "Esborra la conversa i comença des de zero amb un altre compte",
          "Escriu la mateixa pregunta amb més signes d'exclamació",
          "Canvia l'idioma del xat a un altre diferent"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección recomienda reformular la pregunta con más contexto, pedir una fuente o referencia, solicitar una respuesta más simple o probar otra herramienta del laboratorio.",
        "en": "The lesson recommends rephrasing the question with more context, asking for a source or reference, requesting a simpler answer or trying another laboratory tool.",
        "val": "La lliçó recomana reformular la pregunta amb més context, demanar una font o referència, sol·licitar una resposta més simple o provar una altra eina del laboratori."
      }
    },
    {
      "q": {
        "es": "¿Qué tipo de información puede no manejar bien el chat de IA según la lección?",
        "en": "What type of information may the AI chat handle poorly according to the lesson?",
        "val": "Quin tipus d'informació pot no manejar bé el xat d'IA segons la lliçó?"
      },
      "options": {
        "es": [
          "Información muy reciente, cálculos exactos, opiniones subjetivas y predicciones de futuro",
          "Preguntas en inglés, traducciones técnicas, código de programación y fórmulas matemáticas",
          "Textos largos, resúmenes, listas de ventajas y descripciones de productos",
          "Definiciones de conceptos, explicaciones paso a paso y ejemplos cotidianos"
        ],
        "en": [
          "Very recent information, exact calculations, subjective opinions and predictions about the future",
          "Questions in English, technical translations, programming code and mathematical formulas",
          "Long texts, summaries, lists of advantages and product descriptions",
          "Concept definitions, step-by-step explanations and everyday examples"
        ],
        "val": [
          "Informació molt recent, càlculs exactes, opinions subjectives i prediccions de futur",
          "Preguntes en anglés, traduccions tècniques, codi de programació i fórmules matemàtiques",
          "Textos llargs, resums, llistes de avantatges i descripcions de productes",
          "Definicions de conceptes, explicacions pas a pas i exemples quotidians"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección enumera cuatro limitaciones: información muy reciente, cálculos exactos, opiniones subjetivas y predicciones de futuro.",
        "en": "The lesson lists four limitations: very recent information, exact calculations, subjective opinions and predictions about the future.",
        "val": "La lliçó enumera quatre limitacions: informació molt recent, càlculs exactes, opinions subjectives i prediccions de futur."
      }
    }
  ],
  "laboratorio/03-sandbox-prompts": [
    {
      "q": {
        "es": "¿Cuáles son los cinco selectores disponibles en el Entorno de Prompts?",
        "en": "What are the five available selectors in the Prompt Environment?",
        "val": "Quins són els cinc selectors disponibles a l'Entorn de Prompts?"
      },
      "options": {
        "es": [
          "Rol, formato, tono, audiencia y extensión",
          "Velocidad, precisión, creatividad, profundidad y brevedad",
          "Idioma, estilo, longitud, complejidad y target",
          "Persona, contexto, ejemplo, restricción y salida"
        ],
        "en": [
          "Role, format, tone, audience and length",
          "Speed, accuracy, creativity, depth and brevity",
          "Language, style, length, complexity and target",
          "Persona, context, example, constraint and output"
        ],
        "val": [
          "Rol, format, to, audiència i extensió",
          "Velocitat, precisió, creativitat, profunditat i brevetat",
          "Idioma, estil, llargària, complexitat i destinatari",
          "Persona, context, exemple, restricció i eixida"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El Entorno de Prompts ofrece cinco selectores: rol, formato, tono, audiencia y extensión.",
        "en": "The Prompt Environment offers five selectors: role, format, tone, audience and length.",
        "val": "L'Entorn de Prompts ofereix cinc selectors: rol, format, to, audiència i extensió."
      }
    },
    {
      "q": {
        "es": "¿Qué patrón de prompt se utiliza para obtener una explicación paso a paso?",
        "en": "Which prompt pattern is used to get a step-by-step explanation?",
        "val": "Quin patró de prompt s'utilitza per a obtindre una explicació pas a pas?"
      },
      "options": {
        "es": [
          "El patrón de cadena de pensamiento (chain of thought)",
          "El patrón few-shot",
          "El patrón de plantilla (template pattern)",
          "El patrón de persona (persona pattern)"
        ],
        "en": [
          "The chain of thought pattern",
          "The few-shot pattern",
          "The template pattern",
          "The persona pattern"
        ],
        "val": [
          "El patró de cadena de pensament",
          "El patró few-shot",
          "El patró de plantilla",
          "El patró de persona"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El patrón cadena de pensamiento pide a la IA que explique un tema paso a paso, usando la estructura primero, luego, finalmente.",
        "en": "The chain of thought pattern asks the AI to explain a topic step by step, using the structure first, then, finally.",
        "val": "El patró de cadena de pensament demana a la IA que explique un tema pas a pas, emprant l'estructura primer, després, finalment."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es el primer paso para crear un prompt optimizado?",
        "en": "According to the lesson, what is the first step to create an optimised prompt?",
        "val": "Segons la lliçó, quin és el primer pas per a crear un prompt optimitzat?"
      },
      "options": {
        "es": [
          "Definir el objetivo: qué quiero conseguir antes de escribir",
          "Seleccionar el tono adecuado para la audiencia",
          "Escribir el prompt y probarlo directamente",
          "Elegir el formato de respuesta más largo posible"
        ],
        "en": [
          "Define the goal: what I want to achieve before writing",
          "Select the appropriate tone for the audience",
          "Write the prompt and test it directly",
          "Choose the longest possible answer format"
        ],
        "val": [
          "Definir l'objectiu: què vull aconseguir abans d'escriure",
          "Seleccionar el to adequat per a l'audiència",
          "Escriure el prompt i provar-lo directament",
          "Trieu el format de resposta més llarg possible"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección establece que un buen prompt nace de un objetivo claro: antes de escribir hay que preguntarse qué se quiere conseguir.",
        "en": "The lesson establishes that a good prompt is born from a clear goal: before writing you must ask yourself what you want to achieve.",
        "val": "La lliçó estableix que un bon prompt naix d'un objectiu clar: abans d'escriure has de preguntar-te què vols aconseguir."
      }
    },
    {
      "q": {
        "es": "¿Qué combina el patrón few-shot en un prompt?",
        "en": "What does the few-shot pattern combine in a prompt?",
        "val": "Què combina el patró few-shot en un prompt?"
      },
      "options": {
        "es": [
          "Un ejemplo dado seguido de una petición para replicar el mismo patrón con un nuevo caso",
          "Un rol definido seguido de una audiencia y un formato de salida",
          "Una serie de pasos numerados que describen un proceso",
          "Una plantilla con campos vacíos que se rellenan dinámicamente"
        ],
        "en": [
          "A given example followed by a request to replicate the same pattern with a new case",
          "A defined role followed by an audience and an output format",
          "A series of numbered steps describing a process",
          "A template with empty fields that are filled in dynamically"
        ],
        "val": [
          "Un exemple donat seguit d'una sol·licitud per a replicar el mateix patró amb un nou cas",
          "Un rol definit seguit d'una audiència i un format d'eixida",
          "Una sèrie de passos numerats que descriuen un procés",
          "Una plantilla amb camps buits que s'omplen dinàmicament"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El patrón few-shot presenta un ejemplo al modelo y luego le pide que haga lo mismo con un caso nuevo, guíando la respuesta con una demostración previa.",
        "en": "The few-shot pattern presents an example to the model and then asks it to do the same with a new case, guiding the response with a prior demonstration.",
        "val": "El patró few-shot presenta un exemple al model i després li demana que faça el mateix amb un cas nou, guiant la resposta amb una demostració prèvia."
      }
    }
  ],
  "laboratorio/04-agentes-flujos": [
    {
      "q": {
        "es": "¿Qué ventaja tiene añadir un nodo RAG antes del LLM en un flujo?",
        "en": "What is the advantage of adding a RAG node before the LLM in a flow?",
        "val": "Quin avantatge té afegir un node RAG abans del LLM en un flux?"
      },
      "options": {
        "es": [
          "El modelo recupera información relevante de una base de conocimiento antes de generar su respuesta",
          "El flujo se ejecuta más rápido al reducir el número de nodos",
          "El LLM puede generar imágenes a partir del texto recuperado",
          "Se eliminan los errores de gramática en la respuesta final"
        ],
        "en": [
          "The model retrieves relevant information from a knowledge base before generating its answer",
          "The flow runs faster by reducing the number of nodes",
          "The LLM can generate images from the retrieved text",
          "Grammar errors are eliminated in the final answer"
        ],
        "val": [
          "El model recupera informació rellevant d'una base de coneixement abans de generar la seua resposta",
          "El flux s'executa més ràpid en reduir el nombre de nodes",
          "El LLM pot generar imatges a partir del text recuperat",
          "S'eliminen els errors de gramàtica en la resposta final"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El nodo RAG consulta una base de conocimiento externa para enriquecer el contexto antes de que el LLM genere la respuesta, mejorando la información disponible.",
        "en": "The RAG node queries an external knowledge base to enrich the context before the LLM generates the answer, improving the available information.",
        "val": "El node RAG consulta una base de coneixement externa per a enriquir el context abans que el LLM genere la resposta, millorant la informació disponible."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son los cinco tipos de nodo disponibles en Flujo de Agentes?",
        "en": "What are the five node types available in Agent Flow?",
        "val": "Quins són els cinc tipus de node disponibles a Flux d'Agents?"
      },
      "options": {
        "es": [
          "Input, LLM, RAG, Tool y Output",
          "Start, Process, Query, Action y End",
          "Reader, Thinker, Searcher, Executor y Writer",
          "Source, Model, Database, Service y Sink"
        ],
        "en": [
          "Input, LLM, RAG, Tool and Output",
          "Start, Process, Query, Action and End",
          "Reader, Thinker, Searcher, Executor and Writer",
          "Source, Model, Database, Service and Sink"
        ],
        "val": [
          "Input, LLM, RAG, Tool i Output",
          "Start, Process, Query, Action i End",
          "Reader, Thinker, Searcher, Executor i Writer",
          "Source, Model, Database, Service i Sink"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Flujo de Agentes dispone de cinco tipos de nodo: Input (entrada), LLM (modelo de lenguaje), RAG (recuperación), Tool (acción externa) y Output (salida).",
        "en": "Agent Flow has five node types: Input (entry), LLM (language model), RAG (retrieval), Tool (external action) and Output (exit).",
        "val": "Flux d'Agents disposa de cinc tipus de node: Input (entrada), LLM (model de llenguatge), RAG (recuperació), Tool (acció externa) i Output (eixida)."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿por qué es importante configurar prompts específicos por nodo LLM?",
        "en": "According to the lesson, why is it important to configure specific prompts per LLM node?",
        "val": "Segons la lliçó, per què és important configurar prompts específics per node LLM?"
      },
      "options": {
        "es": [
          "Porque cada nodo actúa como un especialista y un prompt enfocado rinde mejor que uno genérico",
          "Porque los nodos no pueden compartir el mismo prompt entre sí",
          "Porque el sistema obliga a usar un prompt diferente en cada nodo obligatoriamente",
          "Porque los prompts genéricos siempre producen respuestas erróneas"
        ],
        "en": [
          "Because each node acts as a specialist and a focused prompt performs better than a generic one",
          "Because nodes cannot share the same prompt with each other",
          "Because the system forces you to use a different prompt in each node necessarily",
          "Because generic prompts always produce wrong answers"
        ],
        "val": [
          "Perquè cada node actua com un especialista i un prompt enfocat rendeix millor que un de genèric",
          "Perquè els nodes no poden compartir el mateix prompt entre si",
          "Perquè el sistema obliga a usar un prompt diferent en cada node obligatòriament",
          "Perquè els prompts genèrics sempre produïxen respostes errònies"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección recomienda pensar en cada nodo LLM como un especialista: un prompt específico para su tarea rinde mejor que uno genérico.",
        "en": "The lesson recommends thinking of each LLM node as a specialist: a prompt specific to its task performs better than a generic one.",
        "val": "La lliçó recomana pensar en cada node LLM com un especialista: un prompt específic per a la seua tasca rendeix millor que un de genèric."
      }
    },
    {
      "q": {
        "es": "¿Qué flujo representa a un agente autónomo en Flujo de Agentes?",
        "en": "Which flow represents an autonomous agent in Agent Flow?",
        "val": "Quin flux representa un agent autònom a Flux d'Agents?"
      },
      "options": {
        "es": [
          "Input, LLM, Tool, LLM, Output",
          "Input, LLM, Output",
          "Input, RAG, LLM, Output",
          "Input, Tool, RAG, Output"
        ],
        "en": [
          "Input, LLM, Tool, LLM, Output",
          "Input, LLM, Output",
          "Input, RAG, LLM, Output",
          "Input, Tool, RAG, Output"
        ],
        "val": [
          "Input, LLM, Tool, LLM, Output",
          "Input, LLM, Output",
          "Input, RAG, LLM, Output",
          "Input, Tool, RAG, Output"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El flujo avanzado de agente autónomo sigue la cadena Input, LLM, Tool, LLM, Output: el modelo decide qué herramienta usar, ejecuta la acción y luego procesa el resultado.",
        "en": "The advanced autonomous agent flow follows the chain Input, LLM, Tool, LLM, Output: the model decides which tool to use, executes the action and then processes the result.",
        "val": "El flux avançat d'agent autònom segueix la cadena Input, LLM, Tool, LLM, Output: el model decideix quina eina usar, executa l'acció i després processa el resultat."
      }
    }
  ],
  "laboratorio/05-proyectos-integrados": [
    {
      "q": {
        "es": "Según la lección, ¿qué define el verdadero dominio de la IA?",
        "en": "According to the lesson, what defines true mastery of AI?",
        "val": "Segons la lliçó, què defineix el veritable domini de la IA?"
      },
      "options": {
        "es": [
          "Saber qué herramienta usar para cada problema y cómo combinarlas para obtener resultados superiores",
          "Conocer a memoria todas las funcionalidades de cada herramienta del laboratorio",
          "Usar únicamente el modelo más potente disponible en el Comparador",
          "Completar todos los proyectos en el menor tiempo posible"
        ],
        "en": [
          "Knowing which tool to use for each problem and how to combine them to get superior results",
          "Knowing by heart all the features of each laboratory tool",
          "Using only the most powerful model available in the Comparator",
          "Completing all projects in the shortest possible time"
        ],
        "val": [
          "Saber quina eina usar per a cada problema i com combinar-les per a obtindre resultats superiors",
          "Conéixer de memòria totes les funcionalitats de cada eina del laboratori",
          "Usar únicament el model més potent disponible al Comparador",
          "Completar tots els projectes en el menor temps possible"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El callout de la lección establece que el verdadero dominio no está en usar una herramienta bien, sino en saber cuál usar para cada problema y cómo combinarlas.",
        "en": "The lesson callout states that true mastery is not about using one tool well, but about knowing which to use for each problem and how to combine them.",
        "val": "El callout de la lliçó estableix que el veritable domini no està a usar bé una eina, sinó a saber quina usar per a cada problema i com combinar-les."
      }
    },
    {
      "q": {
        "es": "¿Cuántas herramientas del laboratorio como mínimo debe usar un proyecto integrado según el reto final?",
        "en": "How many laboratory tools at minimum must an integrated project use according to the final challenge?",
        "val": "Quantes eines del laboratori com a mínim ha d'usar un projecte integrat segons el repte final?"
      },
      "options": {
        "es": [
          "Al menos 3 herramientas",
          "Las 5 herramientas del laboratorio",
          "Solo 1 herramienta pero bien configurada",
          "Al menos 2 herramientas"
        ],
        "en": [
          "At least 3 tools",
          "All 5 laboratory tools",
          "Only 1 tool but well configured",
          "At least 2 tools"
        ],
        "val": [
          "Almenys 3 eines",
          "Les 5 eines del laboratori",
          "Només 1 eina però ben configurada",
          "Almenys 2 eines"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El reto final pide que el proyecto integrado use al menos 3 herramientas del laboratorio, resuelva un problema real e incluya un flujo de al menos 3 nodos.",
        "en": "The final challenge requires the integrated project to use at least 3 laboratory tools, solve a real problem and include a flow of at least 3 nodes.",
        "val": "El repte final demana que el projecte integrat use almenys 3 eines del laboratori, resolga un problema real i incloga un flux d'almenys 3 nodes."
      }
    },
    {
      "q": {
        "es": "¿Cuáles son las cinco fases de la metodología para desarrollar un proyecto integrado?",
        "en": "What are the five phases of the methodology for developing an integrated project?",
        "val": "Quines són les cinc fases de la metodologia per a desenvolupar un projecte integrat?"
      },
      "options": {
        "es": [
          "Definición, prototipado, integración, optimización y documentación",
          "Análisis, diseño, codificación, pruebas y despliegue",
          "Planificación, ejecución, control, cierre y evaluación",
          "Investigación, experimentación, validación, publicación y difusión"
        ],
        "en": [
          "Definition, prototyping, integration, optimisation and documentation",
          "Analysis, design, coding, testing and deployment",
          "Planning, execution, control, closing and evaluation",
          "Research, experimentation, validation, publication and dissemination"
        ],
        "val": [
          "Definició, prototipatge, integració, optimització i documentació",
          "Anàlisi, disseny, codificació, proves i desplegament",
          "Planificació, execució, control, tancament i avaluació",
          "Investigació, experimentació, validació, publicació i difusió"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La metodología propuesta en la lección comprende cinco fases: definición del problema, prototipado de componentes, integración, optimización y documentación.",
        "en": "The methodology proposed in the lesson comprises five phases: problem definition, component prototyping, integration, optimisation and documentation.",
        "val": "La metodologia proposada en la lliçó comprén cinc fases: definició del problema, prototipatge de components, integració, optimització i documentació."
      }
    },
    {
      "q": {
        "es": "¿Qué consejo da la lección sobre el uso de herramientas en los proyectos integrados?",
        "en": "What advice does the lesson give about using tools in integrated projects?",
        "val": "Quin consell dona la lliçó sobre l'ús d'eines en els projectes integrats?"
      },
      "options": {
        "es": [
          "Un proyecto con 2 herramientas bien usadas es mejor que uno con 5 herramientas mal integradas",
          "Siempre hay que usar las 5 herramientas para que el proyecto esté completo",
          "Las herramientas solo aportan valor si se usan todas en cada fase del proyecto",
          "Lo importante es usar la herramienta más cara del Comparador"
        ],
        "en": [
          "A project with 2 well-used tools is better than one with 5 poorly integrated tools",
          "You should always use all 5 tools for the project to be complete",
          "Tools only add value if all are used in each project phase",
          "The important thing is to use the most expensive tool in the Comparator"
        ],
        "val": [
          "Un projecte amb 2 eines ben usades és millor que un amb 5 eines mal integrades",
          "Cal usar sempre les 5 eines perquè el projecte estiga complet",
          "Les eines només aporten valor si s'usen totes en cada fase del projecte",
          "El més important és usar l'eina més cara del Comparador"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "El callout de consejo indica que no hay que intentar usar todas las herramientas: selecciona las que aporten valor real al objetivo del proyecto.",
        "en": "The tip callout indicates you should not try to use every tool: select the ones that add real value to the project goal.",
        "val": "El callout de consell indica que no has d'intentar usar totes les eines: selecciona les que aporten valor real a l'objectiu del projecte."
      }
    }
  ],
  "novedades/01-modelos-recientes": [
    {
      "q": {
        "es": "Según la tabla comparativa de la lección, ¿qué puntuación obtuvo Claude Fable 5.1 en el índice de inteligencia de Artificial Analysis?",
        "en": "According to the lesson's comparative table, what score did Claude Fable 5.1 achieve on the Artificial Analysis intelligence index?",
        "val": "Segons la taula comparativa de la lliçó, quina puntuació va obtindre Claude Fable 5.1 en l'índex d'intel·ligència d'Artificial Analysis?"
      },
      "options": {
        "es": [
          "66 puntos",
          "59 puntos",
          "62 puntos",
          "63 puntos"
        ],
        "en": [
          "66 points",
          "59 points",
          "62 points",
          "63 points"
        ],
        "val": [
          "66 punts",
          "59 punts",
          "62 punts",
          "63 punts"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Claude Fable 5.1 encabeza la clasificación de Artificial Analysis con 66 puntos, según la tabla comparativa.",
        "en": "Claude Fable 5.1 tops the Artificial Analysis ranking with 66 points, according to the comparative table.",
        "val": "Claude Fable 5.1 encapçala la classificació d'Artificial Analysis amb 66 punts, segons la taula comparativa."
      }
    },
    {
      "q": {
        "es": "¿Cuál es el precio de entrada y salida de Muse Spark 1.3 de Meta por millón de tokens?",
        "en": "What is the input and output price per million tokens of Meta's Muse Spark 1.3?",
        "val": "Quin és el preu d'entrada i sortida de Muse Spark 1.3 de Meta per milió de tokens?"
      },
      "options": {
        "es": [
          "10 $/50 $",
          "0,75 $/3,75 $",
          "1,25 $/4,25 $",
          "2 $/6 $"
        ],
        "en": [
          "$10/$50",
          "$0.75/$3.75",
          "$1.25/$4.25",
          "$2/$6"
        ],
        "val": [
          "10 $/50 $",
          "0,75 $/3,75 $",
          "1,25 $/4,25 $",
          "2 $/6 $"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Muse Spark 1.3 iguala el rendimiento de la familia Opus por solo 1,25 $/4,25 $ por millón de tokens, una fracción del precio de los modelos propietarios.",
        "en": "Muse Spark 1.3 matches Opus-class performance at just $1.25/$4.25 per million tokens, a fraction of the price of proprietary models.",
        "val": "Muse Spark 1.3 iguala el rendiment de la família Opus per només 1,25 $/4,25 $ per milió de tokens, una fracció del preu dels models propietaris."
      }
    },
    {
      "q": {
        "es": "¿Qué característica de seguridad tiene GPT-6 Astra que ningún modelo anterior había alcanzado?",
        "en": "What security characteristic does GPT-6 Astra have that no previous model had achieved?",
        "val": "Quina característica de seguretat té GPT-6 Astra que cap model anterior havia aconseguit?"
      },
      "options": {
        "es": [
          "Primer modelo con encriptación de extremo a extremo",
          "Primer modelo clasificado en nivel crítico del Preparedness Framework",
          "Primer modelo certificado por la Unión Europea",
          "Primer modelo con código abierto"
        ],
        "en": [
          "First model with end-to-end encryption",
          "First model classified at the critical level of the Preparedness Framework",
          "First model certified by the European Union",
          "First model with open source"
        ],
        "val": [
          "Primer model amb encriptació de punta a punta",
          "Primer model classificat en el nivell crític del Preparedness Framework",
          "Primer model certificat per la Unió Europea",
          "Primer model amb codi obert"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "GPT-6 Astra es el primer modelo clasificado en el nivel crítico de su Preparedness Framework, lo que condiciona su acceso por ciberseguridad.",
        "en": "GPT-6 Astra is the first model classified at the critical level of its Preparedness Framework, which conditions its access due to cybersecurity.",
        "val": "GPT-6 Astra és el primer model classificat en el nivell crític del seu Preparedness Framework, la qual cosa condiciona el seu accés per ciberseguretat."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuáles son las cinco tendencias clave que definen la evolución de los LLM en septiembre de 2026?",
        "en": "According to the lesson, what are the five key trends defining LLM evolution in September 2026?",
        "val": "Segons la lliçó, quines són les cinc tendències clau que defineixen l'evolució dels LLM el setembre de 2026?"
      },
      "options": {
        "es": [
          "Ciclos densos de lanzamiento, colapso de precios, agentes por defecto, seguridad como factor de lanzamiento y especialización",
          "Nuevas arquitecturas, mayor contexto, multimodalidad, reducción de costes y regulación",
          "Código abierto, modelos más pequeños, ejecución local, traducción automática y asistentes de voz",
          "Investigación básica, publicaciones académicas, benchmarks, competiciones y premios"
        ],
        "en": [
          "Dense release cycles, price collapse, agents by default, security as a launch factor and specialisation",
          "New architectures, larger context, multimodality, cost reduction and regulation",
          "Open source, smaller models, local execution, automatic translation and voice assistants",
          "Basic research, academic publications, benchmarks, competitions and awards"
        ],
        "val": [
          "Cicles de llançament densos, col·lapse de preus, agents per defecte, seguretat com a factor de llançament i especialització",
          "Noves arquitectures, major context, multimodalitat, reducció de costos i regulació",
          "Codi obert, models més xicotets, execució local, traducció automàtica i assistents de veu",
          "Investigació bàsica, publicacions acadèmiques, benchmarks, competicions i premis"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Las cinco tendencias clave son: ciclos de lanzamiento cada vez más densos, colapso de precios, agentes por defecto, seguridad como factor de lanzamiento y especialización con variantes endurecidas.",
        "en": "The five key trends are: increasingly dense release cycles, price collapse, agents by default, security as a launch factor and specialisation with hardened variants.",
        "val": "Les cinc tendències clau són: cicles de llançament cada vegada més densos, col·lapse de preus, agents per defecte, seguretat com a factor de llançament i especialització amb variants endureïdes."
      }
    }
  ],
  "novedades/02-tendencias-ecosistema": [
    {
      "q": {
        "es": "Según la lección, ¿cuántas descargas semanales del SDK de MCP se registraron y cuántos servidores públicos había en 2026?",
        "en": "According to the lesson, how many weekly SDK downloads of MCP were recorded and how many public servers were there in 2026?",
        "val": "Segons la lliçó, quantes descàrregues setmanals del SDK de MCP es van registrar i quants servidors públics hi havia el 2026?"
      },
      "options": {
        "es": [
          "Más de 500 millones de descargas y 5.000 servidores",
          "98 millones de descargas y 20.000 servidores",
          "Alrededor de 250 millones de descargas semanales y más de 10.000 servidores públicos",
          "100 millones de descargas y 50.000 servidores"
        ],
        "en": [
          "Over 500 million downloads and 5,000 servers",
          "98 million downloads and 20,000 servers",
          "Around 250 million weekly SDK downloads and more than 10,000 public servers",
          "100 million downloads and 50,000 servers"
        ],
        "val": [
          "Més de 500 milions de descàrregues i 5.000 servidors",
          "98 milions de descàrregues i 20.000 servidors",
          "Al voltant de 250 milions de descàrregues setmanals del SDK i més de 10.000 servidors públics",
          "100 milions de descàrregues i 50.000 servidors"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "La lección indica que MCP alcanzó alrededor de 250 millones de descargas semanales del SDK y más de 10.000 servidores públicos en 2026.",
        "en": "The lesson states that MCP reached around 250 million weekly SDK downloads and more than 10,000 public servers in 2026.",
        "val": "La lliçó indica que MCP va assolir al voltant de 250 milions de descàrregues setmanals del SDK i més de 10.000 servidors públics el 2026."
      }
    },
    {
      "q": {
        "es": "¿Qué cambio introdujo la especificación MCP 2026-07-28 en su núcleo (core)?",
        "en": "What change did the MCP 2026-07-28 specification introduce in its core?",
        "val": "Quin canvi va introduir l'especificació MCP 2026-07-28 en el seu nucli?"
      },
      "options": {
        "es": [
          "Se añadió cifrado de extremo a extremo obligatorio",
          "Se hizo sin estado (stateless), eliminando las conexiones persistentes",
          "Se implementó un sistema de autenticación OAuth integrado",
          "Se reemplazó el protocolo HTTP por uno propio"
        ],
        "en": [
          "End-to-end encryption was made mandatory",
          "It became stateless, eliminating persistent connections",
          "An integrated OAuth authentication system was implemented",
          "HTTP was replaced with a proprietary protocol"
        ],
        "val": [
          "Es va fer obligatori el xifratge de punta a punta",
          "Es va fer sense estat, eliminant les connexions persistents",
          "Es va implementar un sistema d'autenticació OAuth integrat",
          "Es va substituir el protocol HTTP per un de propi"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La revisión 2026-07-28 de MCP hizo el core sin estado, eliminando las conexiones persistentes y permitiendo despliegue detrás de balanceadores de carga y serverless.",
        "en": "The 2026-07-28 revision of MCP made the core stateless, eliminating persistent connections and enabling deployment behind load balancers and serverless.",
        "val": "La revisió 2026-07-28 de MCP va fer el nucli sense estat, eliminant les connexions persistents i permetent el desplegament darrere de balancejadors de càrrega i serverless."
      }
    },
    {
      "q": {
        "es": "¿Qué porcentaje de servidores remotos de MCP implementaban OAuth 2.1 en 2026 según la lección?",
        "en": "What percentage of MCP remote servers implemented OAuth 2.1 in 2026 according to the lesson?",
        "val": "Quin percentatge de servidors remots de MCP implementaven OAuth 2.1 el 2026 segons la lliçó?"
      },
      "options": {
        "es": [
          "El 50%",
          "Solo el 8,5%",
          "El 25%",
          "El 65%"
        ],
        "en": [
          "50%",
          "Only 8.5%",
          "25%",
          "65%"
        ],
        "val": [
          "El 50%",
          "Només el 8,5%",
          "El 25%",
          "El 65%"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "En 2026 solo el 8,5% de los servidores remotos implementaban el estándar de autenticación obligatorio OAuth 2.1, según la lección.",
        "en": "In 2026 only 8.5% of remote servers implemented the mandatory OAuth 2.1 authentication standard, according to the lesson.",
        "val": "El 2026 només el 8,5% dels servidors remots implementaven l'estàndard d'autenticació obligatori OAuth 2.1, segons la lliçó."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es la diferencia entre MCP y A2A?",
        "en": "According to the lesson, what is the difference between MCP and A2A?",
        "val": "Segons la lliçó, quina és la diferència entre MCP i A2A?"
      },
      "options": {
        "es": [
          "MCP es para modelos de texto; A2A es para modelos multimodales",
          "MCP funciona solo en local; A2A funciona solo en la nube",
          "MCP conecta el agente con las herramientas (vertical); A2A conecta agentes entre sí (horizontal)",
          "MCP es propietario; A2A es de código abierto"
        ],
        "en": [
          "MCP is for text models; A2A is for multimodal models",
          "MCP works only locally; A2A works only in the cloud",
          "MCP connects the agent with tools (vertical); A2A connects agents with each other (horizontal)",
          "MCP is proprietary; A2A is open source"
        ],
        "val": [
          "MCP és per a models de text; A2A és per a models multimodals",
          "MCP funciona només en local; A2A funciona només al núvol",
          "MCP connecta l'agent amb les eines (vertical); A2A connecta agents entre si (horitzontal)",
          "MCP és propietari; A2A és de codi obert"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "MCP establece la conexión vertical del agente con las herramientas, mientras que A2A coordina la comunicación horizontal entre agentes de distintos fabricantes.",
        "en": "MCP establishes the vertical connection between agent and tools, while A2A coordinates horizontal communication between agents from different vendors.",
        "val": "MCP estableix la connexió vertical de l'agent amb les eines, mentre que A2A coordina la comunicació horitzontal entre agents de diferents fabricants."
      }
    }
  ],
  "novedades/03-multimodal-avances": [
    {
      "q": {
        "es": "Según la lección, ¿qué característica clave distingue a Veo 3.1 de Google en generación de vídeo?",
        "en": "According to the lesson, what key feature distinguishes Google's Veo 3.1 in video generation?",
        "val": "Segons la lliçó, quina característica clau distingeix Veo 3.1 de Google en la generació de vídeo?"
      },
      "options": {
        "es": [
          "Audio nativo sincronizado generado en la misma pasada que la imagen",
          "Capacidad de generar vídeos de más de 10 minutos",
          "Soporte para resolución 8K",
          "Compatibilidad con todos los navegadores"
        ],
        "en": [
          "Synchronised native audio generated in the same pass as the image",
          "Ability to generate videos longer than 10 minutes",
          "8K resolution support",
          "Compatibility with all browsers"
        ],
        "val": [
          "Àudio natiu sincronitzat generat en la mateixa passada que la imatge",
          "Capacitat de generar vídeos de més de 10 minuts",
          "Compatibilitat amb resolució 8K",
          "Compatibilitat amb tots els navegadors"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "Veo 3.1 destaca por generar audio nativo sincronizado (diálogo, efectos y ambiente) en la misma pasada que la imagen, con física realista.",
        "en": "Veo 3.1 stands out for generating synchronised native audio (dialogue, effects and ambience) in the same pass as the image, with realistic physics.",
        "val": "Veo 3.1 destaca per generar àudio natiu sincronitzat (diàleg, efectes i ambient) en la mateixa passada que la imatge, amb física realista."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué hizo OpenAI con Sora 2 en 2026?",
        "en": "According to the lesson, what did OpenAI do with Sora 2 in 2026?",
        "val": "Segons la lliçó, què va fer OpenAI amb Sora 2 el 2026?"
      },
      "options": {
        "es": [
          "Retiró la aplicación de consumo y concentró el modelo en su API",
          "Lanzó una versión gratuita para todo el público",
          "Lo integró en ChatGPT como función predeterminada",
          "Lo publicó como código abierto"
        ],
        "en": [
          "Retired the consumer app and focused the model on its API",
          "Launched a free version for the general public",
          "Integrated it into ChatGPT as a default function",
          "Published it as open source"
        ],
        "val": [
          "Va retirar l'aplicació de consum i va concentrar el model en la seua API",
          "Va llançar una versió gratuïta per al públic general",
          "El va integrar en ChatGPT com a funció predeterminada",
          "El va publicar com a codi obert"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "OpenAI retiró la aplicación de consumo de Sora en 2026 y concentró el modelo en su API, según la lección.",
        "en": "OpenAI retired Sora's consumer app in 2026 and focused the model on its API, according to the lesson.",
        "val": "OpenAI va retirar l'aplicació de consum de Sora el 2026 i va concentrar el model en la seua API, segons la lliçó."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es la ventaja principal de los modelos unificados frente a modelos separados por modalidad?",
        "en": "According to the lesson, what is the main advantage of unified models over separate models per modality?",
        "val": "Segons la lliçó, quin és l'avantatge principal dels models unificats davant dels models separats per modalitat?"
      },
      "options": {
        "es": [
          "Son más baratos de entrenar",
          "Un mismo razonamiento subyace a todas las modalidades, permitiendo coherencia y razonamiento cruzado",
          "Soportan más idiomas simultáneos",
          "Requieren menos potencia de cómputo"
        ],
        "en": [
          "They are cheaper to train",
          "A single line of reasoning underlies all modalities, enabling coherence and cross-modal reasoning",
          "They support more languages simultaneously",
          "They require less computing power"
        ],
        "val": [
          "Són més barats d'entrenar",
          "Un mateix raonament subjau en totes les modalitats, permetent coherència i raonament creuat",
          "Suporten més idiomes simultàniament",
          "Requereixen menys potència de còmput"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los modelos unificados permiten coherencia, eficiencia y razonamiento cruzado entre modalidades, algo que modelos separados no pueden captar.",
        "en": "Unified models enable coherence, efficiency and cross-modal reasoning, which separate models cannot capture.",
        "val": "Els models unificats permeten coherència, eficiència i raonament creuat entre modalitats, cosa que els models separats no poden captar."
      }
    },
    {
      "q": {
        "es": "¿Qué modelos de primera línea procesan audio directamente sin transcripción intermedia, según la lección?",
        "en": "Which frontier models process audio directly without intermediate transcription, according to the lesson?",
        "val": "Quins models de primera línia processen àudio directament sense transcripció intermèdia, segons la lliçó?"
      },
      "options": {
        "es": [
          "Gemini 3.8 y Claude 5.1",
          "GPT-6 y Gemini 3.8",
          "Muse Spark 1.3 y DeepSeek V4",
          "Qwen 3.8 y Grok 4.6"
        ],
        "en": [
          "Gemini 3.8 and Claude 5.1",
          "GPT-6 and Gemini 3.8",
          "Muse Spark 1.3 and DeepSeek V4",
          "Qwen 3.8 and Grok 4.6"
        ],
        "val": [
          "Gemini 3.8 i Claude 5.1",
          "GPT-6 i Gemini 3.8",
          "Muse Spark 1.3 i DeepSeek V4",
          "Qwen 3.8 i Grok 4.6"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los modelos de vanguardia GPT-6 y Gemini 3.8 procesan audio directamente sin transcripción intermedia, con detección de tono e interrupción natural.",
        "en": "Frontier models GPT-6 and Gemini 3.8 process audio directly without intermediate transcription, with tone detection and natural interruption.",
        "val": "Els models de primera línia GPT-6 i Gemini 3.8 processen àudio directament sense transcripció intermèdia, amb detecció de to i interrupció natural."
      }
    }
  ],
  "novedades/04-ia-aplicada": [
    {
      "q": {
        "es": "Según la lección, ¿qué Premios Nobel de 2024 reconocieron contribuciones de IA?",
        "en": "According to the lesson, which 2024 Nobel Prizes recognised AI contributions?",
        "val": "Segons la lliçó, quins Premis Nobel de 2024 van reconéixer contribucions d'IA?"
      },
      "options": {
        "es": [
          "Química a Hassabis y Jumper por AlphaFold, y Física a Hinton y Hopfield por las redes neuronales",
          "Medicina a los creadores de AlphaFold, y Química a los inventores de los transformers",
          "Física a los creadores de ChatGPT, y Literatura a los investigadores de AlphaFold",
          "Química a Geoffrey Hinton, y Física a Demis Hassabis"
        ],
        "en": [
          "Chemistry to Hassabis and Jumper for AlphaFold, and Physics to Hinton and Hopfield for neural networks",
          "Medicine to the creators of AlphaFold, and Chemistry to the inventors of transformers",
          "Physics to the creators of ChatGPT, and Literature to the researchers of AlphaFold",
          "Chemistry to Geoffrey Hinton, and Physics to Demis Hassabis"
        ],
        "val": [
          "Química a Hassabis i Jumper per AlphaFold, i Física a Hinton i Hopfield per les xarxes neuronals",
          "Medicina als creadors d'AlphaFold, i Química als inventors dels transformers",
          "Física als creadors de ChatGPT, i Literatura als investigadors d'AlphaFold",
          "Química a Geoffrey Hinton, i Física a Demis Hassabis"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "En 2024, el Nobel de Química reconoció a Hassabis y Jumper por AlphaFold, y el de Física a Hinton y Hopfield por las redes neuronales.",
        "en": "In 2024, the Nobel Prize in Chemistry recognised Hassabis and Jumper for AlphaFold, and the one in Physics went to Hinton and Hopfield for neural networks.",
        "val": "El 2024, el Nobel de Química va reconéixer Hassabis i Jumper per AlphaFold, i el de Física va ser per Hinton i Hopfield per les xarxes neuronals."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué capacidades tienen los asistentes de codificación como Cursor, Copilot y Claude Code en 2026?",
        "en": "According to the lesson, what capabilities do coding assistants like Cursor, Copilot and Claude Code have in 2026?",
        "val": "Segons la lliçó, quines capacitats tenen els assistents de codificació com Cursor, Copilot i Claude Code el 2026?"
      },
      "options": {
        "es": [
          "Solo completan código y sugieren líneas",
          "Ejecutan tareas completas, desde escribir una función hasta desplegar una aplicación",
          "Solo funcionan como autocompletado en el editor",
          "Solo generan documentación de código"
        ],
        "en": [
          "They only complete code and suggest lines",
          "They run complete tasks, from writing a function to deploying an application",
          "They only work as autocomplete in the editor",
          "They only generate code documentation"
        ],
        "val": [
          "Només completen codi i suggereixen línies",
          "Executen tasques completes, des d'escriure una funció fins a desplegar una aplicació",
          "Només funcionen com a autocompletat a l'editor",
          "Només generen documentació de codi"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "En 2026 los asistentes de codificación ya no solo completan código: ejecutan tareas completas, desde escribir una función hasta desplegar una aplicación.",
        "en": "In 2026 coding assistants no longer just complete code: they run complete tasks, from writing a function to deploying an application.",
        "val": "El 2026 els assistents de codificació ja només completen codi: executen tasques completes, des d'escriure una funció fins a desplegar una aplicació."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué son los agentes tutores en educación y por qué son prometedores?",
        "en": "According to the lesson, what are tutor agents in education and why are they promising?",
        "val": "Segons la lliçó, quins són els agents tutors en educació i per què són prometedors?"
      },
      "options": {
        "es": [
          "Sustituyen al profesorado dando las respuestas directamente a las personas estudiantes",
          "Guias el aprendizaje sin dar la respuesta directamente, algo que antes solo era posible con tutores humanos uno a uno",
          "Son exámenes automáticos que evalúan el conocimiento",
          "Son plataformas que solo enseñan programación"
        ],
        "en": [
          "They replace teachers by giving answers directly to students",
          "They guide learning without giving the answer directly, something previously only possible with one-to-one human tutors",
          "They are automatic exams that evaluate knowledge",
          "They are platforms that only teach programming"
        ],
        "val": [
          "Substitueixen el professorat donant les respostes directament a les persones estudiants",
          "Guia l'aprenentatge sense donar la resposta directament, cosa que abans només era possible amb tutors humans un a un",
          "Són exàmens automàtics que avaluen el coneixement",
          "Són plataformes que només ensenyen programació"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Los agentes tutores son capaces de guiar el aprendizaje sin dar la respuesta directamente, algo que antes solo era posible con tutores humanos uno a uno.",
        "en": "Tutor agents are capable of guiding learning without giving the answer directly, something previously only possible with one-to-one human tutors.",
        "val": "Els agents tutors són capaços de guiar l'aprenentatge sense donar la resposta directament, cosa que abans només era possible amb tutors humans un a un."
      }
    },
    {
      "q": {
        "es": "Según la tabla de impacto de la lección, ¿cuál es el potencial futuro de la salud con IA según la lección?",
        "en": "According to the lesson's impact table, what is the future potential of health with AI?",
        "val": "Segons la taula d'impacte de la lliçó, quin és el potencial futur de la salut amb IA?"
      },
      "options": {
        "es": [
          "Asistentes ejecutivos IA",
          "Investigación autónoma",
          "Medicina personalizada total",
          "Aprendizaje continuo asistido"
        ],
        "en": [
          "AI executive assistants",
          "Autonomous research",
          "Full personalised medicine",
          "Assisted continuous learning"
        ],
        "val": [
          "Assistents executius d'IA",
          "Investigació autònoma",
          "Medicina personalitzada total",
          "Aprenentatge continu assistit"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "Según la tabla comparativa de la lección, el potencial futuro de la salud con IA es la medicina personalizada total, mientras que su impacto actual es el diagnóstico asistido.",
        "en": "According to the lesson's comparative table, the future potential of health with AI is full personalised medicine, while its current impact is assisted diagnosis.",
        "val": "Segons la taula comparativa de la lliçó, el potencial futur de la salut amb IA és la medicina personalitzada total, mentre que el seu impacte actual és el diagnòstic assistit."
      }
    }
  ],
  "novedades/05-regulacion-actualidad": [
    {
      "q": {
        "es": "Según la lección, ¿qué obligaciones del AI Act entraron en aplicación plena el 2 de agosto de 2026?",
        "en": "According to the lesson, which AI Act obligations entered full application on 2 August 2026?",
        "val": "Segons la lliçó, quines obligacions de l'AI Act van entrar en aplicació plena el 2 d'agost de 2026?"
      },
      "options": {
        "es": [
          "Las prohibiciones de riesgo inaceptable",
          "Las obligaciones de transparencia (Art. 50) y los poderes de supervisión",
          "Las obligaciones para modelos GPAI",
          "Los sistemas de alto riesgo del Anexo III"
        ],
        "en": [
          "Prohibitions on unacceptable risk",
          "Transparency obligations (Art. 50) and supervisory powers",
          "Obligations for GPAI models",
          "High-risk systems under Annex III"
        ],
        "val": [
          "Les prohibicions de risc inacceptable",
          "Les obligacions de transparència (Art. 50) i els poders de supervisió",
          "Les obligacions per als models GPAI",
          "Els sistemes d'alt risc de l'Annex III"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "El 2 de agosto de 2026 entraron en aplicación plena las obligaciones de transparencia del Art. 50 y los poderes de supervisión del AI Act europeo.",
        "en": "On 2 August 2026, the transparency obligations of Art. 50 and the supervisory powers of the European AI Act entered full application.",
        "val": "El 2 d'agost de 2026 van entrar en aplicació plena les obligacions de transparència de l'Art. 50 i els poders de supervisió de l'AI Act europeu."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué es el Digital Omnibus y qué reglamento se convirtió?",
        "en": "According to the lesson, what is the Digital Omnibus and what regulation did it become?",
        "val": "Segons la lliçó, què és el Digital Omnibus i quin reglament es va convertir?"
      },
      "options": {
        "es": [
          "Una directiva europea de 2024 sobre protección de datos",
          "Un acuerdo internacional entre EE.UU. y la UE sobre IA",
          "Una propuesta de 2025 que se convirtió en el Reglamento (UE) 2026/1744, en vigor desde el 27 de julio de 2026",
          "Un estándar técnico del IEEE para modelos de IA"
        ],
        "en": [
          "A 2024 European directive on data protection",
          "An international agreement between the US and the EU on AI",
          "A 2025 proposal that became Regulation (EU) 2026/1744, in force since 27 July 2026",
          "An IEEE technical standard for AI models"
        ],
        "val": [
          "Una directiva europea de 2024 sobre protecció de dades",
          "Un acord internacional entre EE.UU. i la UE sobre IA",
          "Una proposta de 2025 que es va convertir en el Reglament (UE) 2026/1744, en vigor des del 27 de juliol de 2026",
          "Un estàndard tècnic del IEEE per a models d'IA"
        ]
      },
      "correct": 2,
      "explain": {
        "es": "El Digital Omnibus, propuesta en 2025, se convirtió en el Reglamento (UE) 2026/1744 en vigor desde el 27 de julio de 2026, retrasando las obligaciones de alto riesgo hasta diciembre de 2027.",
        "en": "The Digital Omnibus, a proposal in 2025, became Regulation (EU) 2026/1744 in force since 27 July 2026, postponing high-risk obligations until December 2027.",
        "val": "El Digital Omnibus, una proposta de 2025, es va convertir en el Reglament (UE) 2026/1744 en vigor des del 27 de juliol de 2026, retardant les obligacions d'alt risc fins al desembre de 2027."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es el estado del cumplimiento del AI Act a finales de agosto de 2026?",
        "en": "According to the lesson, what is the state of AI Act compliance by late August 2026?",
        "val": "Segons la lliçó, quin és l'estat del compliment de l'AI Act a finals d'agost de 2026?"
      },
      "options": {
        "es": [
          "Se habían emitido 5 multas y 20 estados tenían autoridades",
          "No se había emitido ninguna multa y solo 9 de 27 estados miembros tenían autoridades designadas",
          "Todos los estados miembros estaban preparados",
          "La Unión Europea había publicado todos los estándares armonizados"
        ],
        "en": [
          "5 fines had been issued and 20 states had authorities",
          "No public fines had been issued and only 9 of 27 member states had designated authorities",
          "All member states were prepared",
          "The European Union had published all harmonised standards"
        ],
        "val": [
          "S'havien emès 5 multes i 20 estats tenien autoritats",
          "No s'havia emès cap multa i només 9 dels 27 estats membres tenien autoritats designades",
          "Tots els estats membres estaven preparats",
          "La Unió Europea havia publicat tots els estàndards harmonitzats"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "A finales de agosto de 2026 no se había emitido ninguna multa bajo el AI Act y solo 9 de 27 estados miembros tenían plenamente designadas sus autoridades competentes.",
        "en": "By late August 2026 no fine had been issued under the AI Act and only 9 of 27 member states had fully designated their competent authorities.",
        "val": "A finals d'agost de 2026 no s'havia emès cap multa sota l'AI Act i només 9 dels 27 estats membres tenien plenament designades les seues autoritats competents."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es el importe máximo de las multas del AI Act en los casos más graves?",
        "en": "According to the lesson, what is the maximum fine under the AI Act in the most serious cases?",
        "val": "Segons la lliçó, quin és l'import màxim de les multes de l'AI Act en els casos més greus?"
      },
      "options": {
        "es": [
          "10 millones de euros o el 3% del volumen de negocio",
          "35 millones de euros o el 7% del volumen de negocio global",
          "50 millones de euros o el 10% del volumen de negocio",
          "20 millones de euros o el 5% del volumen de negocio"
        ],
        "en": [
          "10 million euros or 3% of turnover",
          "35 million euros or 7% of global turnover",
          "50 million euros or 10% of turnover",
          "20 million euros or 5% of turnover"
        ],
        "val": [
          "10 milions d'euros o el 3% del volum de negoci",
          "35 milions d'euros o el 7% del volum de negoci global",
          "50 milions d'euros o el 10% del volum de negoci",
          "20 milions d'euros o el 5% del volum de negoci"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "Las multas del AI Act pueden alcanzar los 35 millones de euros o el 7% del volumen de negocio global en los casos más graves.",
        "en": "AI Act fines can reach 35 million euros or 7% of global turnover in the most serious cases.",
        "val": "Les multes de l'AI Act poden assolir els 35 milions d'euros o el 7% del volum de negoci global en els casos més greus."
      }
    }
  ],
  "novedades/06-recursos-actualizarse": [
    {
      "q": {
        "es": "Según la lección, ¿cuáles son las categorías de arXiv recomendadas para seguir investigación en IA?",
        "en": "According to the lesson, which arXiv categories are recommended for following AI research?",
        "val": "Segons la lliçó, quines categories d'arXiv es recomanen per a seguir la investigació en IA?"
      },
      "options": {
        "es": [
          "cs.CL (lenguaje), cs.CV (visión), cs.LG (aprendizaje)",
          "cs.AI (inteligencia general), cs.RO (robótica), cs.SE (ingeniería de software)",
          "cs.CL (lenguaje), cs.AI (inteligencia general), cs.CV (visión)",
          "cs.ML (aprendizaje automático), cs.CL (lenguaje), cs.IR (recuperación de información)"
        ],
        "en": [
          "cs.CL (language), cs.CV (vision), cs.LG (learning)",
          "cs.AI (general intelligence), cs.RO (robotics), cs.SE (software engineering)",
          "cs.CL (language), cs.AI (general intelligence), cs.CV (vision)",
          "cs.ML (machine learning), cs.CL (language), cs.IR (information retrieval)"
        ],
        "val": [
          "cs.CL (llenguatge), cs.CV (visió), cs.LG (aprenentatge)",
          "cs.AI (intel·ligència general), cs.RO (robòtica), cs.SE (enginyeria de programari)",
          "cs.CL (llenguatge), cs.AI (intel·ligència general), cs.CV (visió)",
          "cs.ML (aprenentatge automàtic), cs.CL (llenguatge), cs.IR (recuperació d'informació)"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección recomienda cs.CL para lenguaje, cs.CV para visión y cs.LG para aprendizaje como categorías de arXiv para seguir investigación en IA.",
        "en": "The lesson recommends cs.CL for language, cs.CV for vision and cs.LG for learning as arXiv categories for following AI research.",
        "val": "La lliçó recomana cs.CL per a llenguatge, cs.CV per a visió i cs.LG per a aprenentatge com a categories d'arXiv per a seguir la investigació en IA."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuál es la recomendación sobre la regla del 80/20 para mantenerse actualizado en IA?",
        "en": "According to the lesson, what is the 80/20 rule recommendation for staying up to date in AI?",
        "val": "Segons la lliçó, quina és la recomanació sobre la regla del 80/20 per a mantindre's actualitzat en IA?"
      },
      "options": {
        "es": [
          "El 80% del valor está en el 20% de la información: centrarse en tendencias generales, conceptos fundamentales y herramientas prácticas",
          "Leer el 80% de los artículos publicados cada semana",
          "Invertir el 80% del tiempo en un solo modelo de IA",
          "Seguir solo el 20% de las fuentes de información disponibles"
        ],
        "en": [
          "80% of the value lies in 20% of the information: focus on general trends, fundamental concepts and practical tools",
          "Read 80% of the papers published each week",
          "Invest 80% of the time in a single AI model",
          "Follow only 20% of the available information sources"
        ],
        "val": [
          "El 80% del valor està en el 20% de la informació: centrar-se en tendències generals, conceptes fonamentals i eines pràctiques",
          "Llegir el 80% dels articles publicats cada setmana",
          "Invertir el 80% del temps en un sol model d'IA",
          "Seguir només el 20% de les fonts d'informació disponibles"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La regla del 80/20 recomienda centrarse en tendencias generales, conceptos fundamentales que no cambian, herramientas prácticas y artículos más citados.",
        "en": "The 80/20 rule recommends focusing on general trends, fundamental concepts that do not change, practical tools and most cited papers.",
        "val": "La regla del 80/20 recomana centrar-se en tendències generals, conceptes fonamentals que no canvien, eines pràctiques i articles més citats."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿cuáles son las conferencias importantes recomendadas para mantenerse actualizado en IA?",
        "en": "According to the lesson, which important conferences are recommended for staying up to date in AI?",
        "val": "Segons la lliçó, quines conferències importants es recomanen per a mantindre's actualitzat en IA?"
      },
      "options": {
        "es": [
          "CES, SXSW, Web Summit, Dreamforce y TechCrunch Disrupt",
          "NeurIPS en diciembre, ICML en julio, CVPR en junio y ACL en agosto",
          "ICLR en mayo, EMNLP en noviembre, AAAI en febrero y KDD en agosto",
          "NeurIPS en julio, ICML en diciembre, CVPR en marzo y ACL en octubre"
        ],
        "en": [
          "CES, SXSW, Web Summit, Dreamforce and TechCrunch Disrupt",
          "NeurIPS in December, ICML in July, CVPR in June and ACL in August",
          "ICLR in May, EMNLP in November, AAAI in February and KDD in August",
          "NeurIPS in July, ICML in December, CVPR in March and ACL in October"
        ],
        "val": [
          "CES, SXSW, Web Summit, Dreamforce i TechCrunch Disrupt",
          "NeurIPS al desembre, ICML al juliol, CVPR al juny i ACL a l'agost",
          "ICLR al maig, EMNLP al novembre, AAAI al febrer i KDD a l'agost",
          "NeurIPS al juliol, ICML al desembre, CVPR al març i ACL a l'octubre"
        ]
      },
      "correct": 1,
      "explain": {
        "es": "La lección recomienda NeurIPS (diciembre) para investigación académica, ICML (julio) para aprendizaje automático, CVPR (junio) para visión por ordenador y ACL (agosto) para procesamiento de lenguaje.",
        "en": "The lesson recommends NeurIPS (December) for academic research, ICML (July) for machine learning, CVPR (June) for computer vision and ACL (August) for language processing.",
        "val": "La lliçó recomana NeurIPS (desembre) per a investigació acadèmica, ICML (juliol) per a aprenentatge automàtic, CVPR (juny) per a visió per ordinador i ACL (agost) per a processament del llenguatge."
      }
    },
    {
      "q": {
        "es": "Según la lección, ¿qué cursos actualizados se recomiendan para aprender IA de forma práctica?",
        "en": "According to the lesson, which updated courses are recommended for learning AI practically?",
        "val": "Segons la lliçó, quins cursos actualitzats es recomanen per a aprendre IA de manera pràctica?"
      },
      "options": {
        "es": [
          "DeepLearning.AI, Fast.ai, Hugging Face Course y Full Stack Deep Learning",
          "Coursera AI Specialization, Udacity AI Nanodegree, edX MIT AI y Khan Academy",
          "MIT OpenCourseWare AI, Stanford CS229, Berkeley AI y CMU ML",
          "Google AI Essentials, AWS Machine Learning, Azure AI Fundamentals y IBM AI Engineering"
        ],
        "en": [
          "DeepLearning.AI, Fast.ai, Hugging Face Course and Full Stack Deep Learning",
          "Coursera AI Specialization, Udacity AI Nanodegree, edX MIT AI and Khan Academy",
          "MIT OpenCourseWare AI, Stanford CS229, Berkeley AI and CMU ML",
          "Google AI Essentials, AWS Machine Learning, Azure AI Fundamentals and IBM AI Engineering"
        ],
        "val": [
          "DeepLearning.AI, Fast.ai, Hugging Face Course i Full Stack Deep Learning",
          "Coursera AI Specialization, Udacity AI Nanodegree, edX MIT AI i Khan Academy",
          "MIT OpenCourseWare AI, Stanford CS229, Berkeley AI i CMU ML",
          "Google AI Essentials, AWS Machine Learning, Azure AI Fundamentals i IBM AI Engineering"
        ]
      },
      "correct": 0,
      "explain": {
        "es": "La lección recomienda DeepLearning.AI (Andrew Ng) para cursos cortos y prácticos, Fast.ai para aprendizaje profundo aplicado, Hugging Face Course para NLP con transformers y Full Stack Deep Learning para despliegue de modelos.",
        "en": "The lesson recommends DeepLearning.AI (Andrew Ng) for short practical courses, Fast.ai for applied deep learning, Hugging Face Course for NLP with transformers and Full Stack Deep Learning for model deployment.",
        "val": "La lliçó recomana DeepLearning.AI (Andrew Ng) per a cursos curts i pràctics, Fast.ai per a aprenentatge profund aplicat, Hugging Face Course per a NLP amb transformers i Full Stack Deep Learning per a desplegament de models."
      }
    }
  ]
};

export function getLeccionQuiz(
  lessonId: string,
  locale: Locale = "es"
): LessonQuiz | null {
  const variants = QUIZZES[lessonId];
  if (!variants) return null;

  return {
    id: lessonId,
    questions: variants.map((v) => ({
      q: v.q[locale],
      options: v.options[locale],
      correct: v.correct,
      explain: v.explain[locale],
    })),
  };
}

export const QUIZ_COUNT = Object.keys(QUIZZES).length;
