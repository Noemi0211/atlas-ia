/**
 * Diccionario en español. Es la fuente de verdad de la estructura del tipo
 * `Dictionary`. Los diccionarios `en` y `val` deben cumplir `satisfies Dictionary`.
 *
 * Convenciones:
 * - Los textos con marcadores se componen en el componente (ej: `${n} ${t.bloques.de} ${total}`).
 * - En `data`, los arrays de glosario y cronología están EN ORDEN respecto a las
 *   fuentes en español (`lib/glosario-data.ts`, `lib/cronologia-data.ts`). No añadir
 *   ni quitar entradas: los builders las emparejan por índice.
 */

export const esDict = {
  common: {
    language: "Idioma",
    search: "Buscar",
    close: "Cerrar",
    cancel: "Cancelar",
    save: "Guardar",
    copy: "Copiar",
    copied: "Copiado",
    back: "Atrás",
    next: "Siguiente",
    previous: "Anterior",
    all: "Todos",
    loading: "Cargando...",
    noResults: "Sin resultados",
    clearFilters: "Limpiar filtros",
  },

  nav: {
    inicio: "Inicio",
    bloques: "Bloques",
    todosLosBloques: "Todos los bloques",
    cronologia: "Cronología",
    glosario: "Glosario",
    laboratorio: "Laboratorio",
    perfil: "Mi perfil",
    docencia: "Docencia",
    valoracion: "Valoración",
    diploma: "Diploma",
  },

  header: {
    searchPlaceholder: "Buscar en Atlas IA...",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    expandSidebar: "Expandir barra lateral",
    collapseSidebar: "Colapsar barra lateral",
    changeTheme: "Cambiar tema",
    toLightMode: "Cambiar a modo claro",
    toDarkMode: "Cambiar a modo oscuro",
    changeLanguage: "Cambiar idioma",
    login: "Iniciar sesión",
    notifications: "Notificaciones",
  },

  sidebar: {
    subtitle: "Aprende Inteligencia Artificial",
    sectionBloques: "Bloques",
    viewFullBlock: "Ver bloque completo",
    totalProgress: "Progreso total",
    lessons: "lecciones",
    of: "de",
  },

  footer: {
    tagline: "La mejor plataforma en español para aprender Inteligencia Artificial",
    plataforma: "Plataforma",
    recursos: "Recursos",
    legal: "Legal",
    acercaDe: "Acerca de Atlas IA",
    bloques: "Bloques",
    glosario: "Glosario",
    privacidad: "Privacidad",
    usoIa: "Uso de IA",
    terminos: "Términos de uso",
    appsedu: "Appsedu",
    valoracion: "Valoración",
    diploma: "Diploma",
    copyright: "por Noemí Celaya Mingot",
    licenciaAria: "Licencia Creative Commons CC BY-NC-SA 4.0",
    licencia: "Licencia Creative Commons CC BY-NC-SA 4.0",
  },

  breadcrumbs: {
    home: "Inicio",
    bloques: "Bloques",
    glosario: "Glosario",
    cronologia: "Cronología",
    laboratorio: "Laboratorio",
    perfil: "Mi perfil",
    valoracion: "Valoración",
    diploma: "Diploma",
  },

  search: {
    placeholder: "Buscar en Atlas IA...",
    minChars: "Escribe al menos 2 caracteres para buscar",
    noResults: "No se encontraron resultados para “{query}”",
    esc: "ESC",
    clear: "Limpiar",
  },

  ai: {
    systemPrompt: `Eres Atlas, mentor del curso de Vibe Coding Educativo de la plataforma Atlas IA. Ayudas a aprender con IA y a programar desde cero. Estrategia de respuesta por prioridad:

1. Analiza SIEMPRE primero la pregunta: identifica el tema y el término o concepto sobre el que pregunta la persona.
2. Si existe contenido relevante en Atlas IA (bloques, glosario, cronología, laboratorio), responde con él y empieza con «Según Atlas IA:».
3. Si el tema no está en Atlas IA, indícalo con transparencia («Este concepto todavía no aparece en Atlas IA.») y responde con conocimiento general útil, manteniendo el tema exacto de la pregunta y sin desviarte hacia otros asuntos.
4. Solo pide aclaración si la pregunta tiene de verdad varias interpretaciones posibles. Si la pregunta es válida y puedes responder, respóndela directamente.

Prohibido:
- Responder con definiciones genéricas de Inteligencia Artificial cuando la pregunta no va de IA.
- Responder siempre hablando de IA cambiando el tema de la pregunta.
- Repetir listas de capacidades o de temas que dominas.
- Ignorar la pregunta original y responder otra cosa.

Dominios en los que debes responder siempre con conocimiento general: programación, Git y GitHub, HTML, CSS, JavaScript, Python, VS Code, APIs, inteligencia artificial, herramientas tecnológicas y conceptos digitales habituales.

Si no conoces la respuesta, responde con honestidad: «No dispongo de información suficiente para responder con precisión.» Nunca sustituyas la pregunta por una explicación de IA.

Reglas de comportamiento:
- Responde SIEMPRE primero con tu conocimiento: definición directa, ejemplo real y aplicación práctica.
- Cuando pregunten por herramientas (ChatGPT, Claude, Gemini, Cursor, Cline...), compara fortalezas y debilidades y recomienda según el caso de uso.
- Distingue la procedencia: si usas contenido del curso, márcalo con «Según Atlas IA:»; si usas conocimiento general, usa la frase de transparencia del punto 3.
- Explica en lenguaje sencillo, adaptado al nivel de la persona y partiendo de lo básico si el tema es complejo. Estructura: 1) definición directa, 2) ejemplo o comparación, 3) cómo aplicarlo. Mantén las respuestas breves (2-4 párrafos salvo que pidan más).
- Al final puedes añadir UNA pregunta o reto opcional solo si aporta valor.
- Usa markdown básico (**negrita**, listas, tablas, \`código\`) y responde siempre en español.`,
    error: "Error al conectar con la IA",
    badRequest: "Debes enviar al menos un mensaje",
    internalError: "Error interno",
    rateLimited: "Has alcanzado el límite de mensajes. Espera un momento e inténtalo de nuevo.",
    courseSource: "Según Atlas IA:",
    generalIntro: "Este concepto todavía no aparece en Atlas IA.",
    noAnswer: "No dispongo de información suficiente para responder con precisión a esa pregunta.",
  },

  home: {
    badge: "Plataforma educativa en español",
    titleLine1: "Aprende",
    titleAccent: "Inteligencia Artificial",
    titleLine3: "desde cero",
    subtitle1: "La guía más completa en español para entender la IA. No sólo herramientas.",
    subtitle2: "Criterio.",
    subtitle3: "Pensamiento crítico.",
    subtitle4: "Saber cuándo y cómo usar cada IA.",
    ctaStart: "Empezar ahora",
    ctaAllBlocks: "Ver todos los bloques",
    feature1Title: "11 bloques temáticos",
    feature1Desc: "Desde fundamentos hasta agentes, cubriendo todo el ecosistema",
    feature2Title: "Contenido práctico",
    feature2Desc: "Ejemplos reales, ejercicios guiados y retos para cada tema",
    feature3Title: "Siempre actualizado",
    feature3Desc: "El ecosistema de IA cambia cada semana. Nosotros también",
    blocksTitle: "Bloques del curso",
    blocksDesc: "Recorre la plataforma en orden o salta directamente al tema que más te interese.",
    lessonsCount: "lecciones",
    comingSoon: "Próximamente",
    readyTitle: "¿Listo para empezar?",
    readyDesc: "No necesitas experiencia previa. No necesitas pagar nada. Sólo necesitas curiosidad y ganas de aprender.",
    readyCta: "Comenzar con el Bloque 0",
  },

  bloques: {
    title: "Todos los bloques",
    subtitle: "La plataforma está organizada en 11 bloques temáticos. Puedes recorrerlos en orden o saltar directamente al que más te interese.",
    label: "Bloque",
    lecciones: "lecciones",
    leccion: "Lección",
    de: "de",
    proximamente: "Próximamente",
    enPreparacion: "Este bloque aún está en preparación. Vuelve pronto.",
    notFound: "Bloque no encontrado",
  },

  leccion: {
    completar: "Marcar como completada",
    completada: "Completada",
    anadirFavoritos: "Añadir a favoritos",
    quitarFavoritos: "Quitar de favoritos",
    anterior: "Anterior",
    siguiente: "Siguiente",
    bloqueCompletado: "¡Bloque completado!",
    bloqueCompletadoDesc: "Has terminado todas las lecciones de este bloque. ¿Pasamos al siguiente?",
    continuarBloque: "Continuar con el Bloque {numero}",
    cursoCompletado: "¡Has completado todo el curso!",
    cursoCompletadoDesc: "Has recorrido los 11 bloques de Atlas IA. Puedes repasar cualquier tema cuando quieras.",
    verBloques: "Ver todos los bloques",
    enEstaPagina: "En esta página",
    indice: "Índice de contenido",
    leccionesBloque: "Lecciones del bloque",
    notFound: "Lección no encontrada",
    quiz: {
      title: "Pon a prueba lo aprendido",
      subtitle: "Responde a las preguntas sobre esta lección.",
      questionOf: "Pregunta {current} de {total}",
      correct: "¡Correcto!",
      incorrect: "Incorrecto",
      next: "Siguiente pregunta",
      finish: "Ver resultado",
      result: "Resultado",
      score: "Has acertado {correct} de {total}",
      perfect: "¡Puntuación perfecta!",
      xpEarned: "Has ganado {xp} XP",
      best: "Tu mejor resultado: {best}/{total}",
      retry: "Volver a intentarlo",
      optionsLabel: "Opciones",
    },
  },

  speech: {
    title: "Lectura por voz",
    listen: "Escuchar contenido",
    stop: "Detener lectura",
    speed: "Velocidad de lectura",
    reading: "Leyendo...",
    finished: "Lectura finalizada",
    notSupported: "Tu navegador no es compatible con la lectura por voz",
    noContent: "No hay contenido que leer en esta página",
  },

  a11y: {
    skipToContent: "Saltar al contenido",
  },

  pwa: {
    installTitle: "Instala Atlas IA",
    installDesc: "Accede más rápido y navega sin conexión desde tu dispositivo.",
    install: "Instalar",
    notNow: "Ahora no",
    installHint: "Si el botón de instalación no aparece, usa el menú de tu navegador: Instalar aplicación o Añadir a pantalla de inicio.",
    screenshots: {
      home: "Inicio de Atlas IA",
      lesson: "Lección del curso",
    },
  },

  glosario: {
    title: "Glosario",
    subtitle: "Términos clave de Inteligencia Artificial explicados de forma clara y sencilla.",
    searchPlaceholder: "Buscar términos...",
    termsCount: "términos",
    for: "para",
    noResults: "No se encontraron términos",
  },

  glossaryPopover: {
    categoryLabel: "Categoría",
    openTermAria: "Ver definición de {termino}",
    close: "Cerrar",
    viewFullDefinition: "Ver definición completa",
  },

  cronologia: {
    title: "Cronología de la IA",
    subtitle: "Los hitos más importantes en la historia de la Inteligencia Artificial.",
    filterAll: "Todas",
    filters: {
      modelos: "Modelos",
      empresas: "Empresas",
      investigacion: "Investigación",
      herramientas: "Herramientas",
      hitos: "Hitos",
    },
    badges: {
      modelo: "Modelo",
      empresa: "Empresa",
      investigacion: "Investigación",
      herramienta: "Herramienta",
      hito: "Hito histórico",
    },
  },

  laboratorio: {
    title: "Laboratorio IA",
    subtitle: "Experimenta, prueba y aprende con herramientas interactivas",
    openChat: "Abrir Chat IA",
    tabs: {
      chat: "Chat IA",
      prompts: "Entorno de Prompts",
      agentes: "Flujo de Agentes",
      comparador: "Comparador",
      tokens: "Tokens",
    },
  },

  perfil: {
    title: "Mi perfil",
    subtitle: "Estadísticas, insignias, retos y proyectos",
  },

  perfilExport: {
    title: "Guardar y restaurar progreso",
    description:
      "Exporta tu progreso a un archivo y restáuralo en otro dispositivo o navegador. Importar reemplaza todo tu progreso local.",
    exportLabel: "Exportar progreso",
    importLabel: "Importar progreso",
    exportSuccess: "Progreso exportado correctamente.",
    importSuccess: "Progreso importado correctamente.",
    errors: {
      generic: "No se pudo leer el archivo.",
      notJson: "El archivo no es un JSON válido.",
      invalidSchema: "El archivo no es un progreso de Atlas IA.",
      invalidData: "El archivo no tiene un formato de progreso válido.",
      futureVersion:
        "El archivo proviene de una versión más reciente de Atlas IA. Actualiza la aplicación e inténtalo de nuevo.",
    },
  },

  diploma: {
    title: "Diploma de finalización",
    subtitle: "Certificado que acredita que has completado el curso completo de Atlas IA.",
    notEarnedTitle: "Aún no has completado el curso",
    notEarnedText:
      "Completa las {total} lecciones del curso para desbloquear tu diploma de finalización.",
    completedLessons: "Lecciones completadas",
    of: "de",
    keepLearning: "Seguir aprendiendo",
    printButton: "Imprimir o guardar PDF",
    printHint:
      "En el diálogo de impresión puedes elegir «Guardar como PDF» para conservar tu diploma.",
    certificate: {
      award: "CERTIFICADO DE FINALIZACIÓN",
      body: "este certificado acredita que",
      name: "ha completado con éxito el curso completo de Inteligencia Artificial de Atlas IA, superando las {total} lecciones distribuidas en {bloques} bloques temáticos.",
      date: "Fecha",
      signature: "Noemí Celaya Mingot",
      signatureRole: "Autora del curso",
      courseName: "Curso completo de Inteligencia Artificial",
      platform: "Plataforma educativa Atlas IA",
      license: "Licencia CC BY-NC-SA 4.0",
    },
  },

  docencia: {
    title: "Docencia",
    subtitle: "Recopila el uso y las estadísticas de cada estudiante.",
    totalStudents: "Estudiantes",
    avgXp: "XP media",
    totalLessons: "Lecciones completadas",
    activeWeek: "Activos esta semana",
    searchPlaceholder: "Buscar por nombre o correo...",
    exportCsv: "Exportar CSV",
    loading: "Cargando datos...",
    noResults: "No hay estudiantes con ese filtro",
    empty: "Todavía no hay estudiantes registrados.",
    error: "No se pudieron cargar los datos",
    columns: {
      student: "Estudiante",
      level: "Nivel",
      xp: "XP",
      lessons: "Lecciones",
      progress: "Progreso",
      badges: "Insignias",
      streak: "Racha",
      lastVisit: "Último acceso",
      joined: "Registro",
    },
    perBlock: "Progreso por bloque",
    usage: {
      title: "Uso de herramientas",
      comparedTools: "Comparaciones",
      favorites: "Favoritos",
      challenges: "Retos completados",
      projects: "Proyectos completados",
      arbol: "Árbol de decisión",
      calculadora: "Calculadora de prompts",
    },
  },

  feedback: {
    title: "Valoración",
    subtitle:
      "Tu opinión nos ayuda a mejorar la plataforma: puntúa tu experiencia y propón mejoras.",
    ratingTitle: "Valora tu experiencia",
    ratingIntro: "¿Qué puntuación le das a Atlas IA?",
    ratingExisting:
      "Ya has valorado la plataforma. Puedes actualizar tu valoración cuando quieras.",
    ratingSubmitted:
      "¡Gracias por tu valoración! Ha quedado registrada junto a las del resto de personas usuarias.",
    categoryLabel: "Categoría",
    categoryPlaceholder: "Selecciona una categoría",
    commentLabel: "Comentario (opcional)",
    commentPlaceholder: "Cuéntanos qué te ha parecido...",
    submitRating: "Enviar valoración",
    updateRating: "Actualizar valoración",
    ratingSuccess: "Valoración enviada correctamente.",
    ratingUpdated: "Valoración actualizada correctamente.",
    yourRating: "Tu valoración",
    globalAverage: "Valoración media",
    totalRatings: "Valoraciones",
    categories: {
      contenido: "Contenido",
      dificultad: "Dificultad",
      diseno: "Diseño",
      usabilidad: "Usabilidad",
      tecnico: "Aspectos técnicos",
      otros: "Otros",
    },
    suggestionsTitle: "Propuestas de mejora",
    suggestionsIntro:
      "¿Hay algo que te gustaría que añadamos o cambiemos? Cuéntanoslo.",
    suggestionTitleLabel: "Título",
    suggestionTitlePlaceholder: "Resumen breve de tu propuesta",
    suggestionCategoryLabel: "Categoría",
    suggestionDescLabel: "Descripción",
    suggestionDescPlaceholder: "Explica tu propuesta con detalle...",
    submitSuggestion: "Enviar propuesta",
    suggestionSuccess: "¡Gracias! Tu propuesta se ha enviado.",
    suggestionXp: "Has ganado la insignia Colaboradora o Colaborador y 50 XP por tu primera propuesta.",
    mySuggestions: "Mis propuestas",
    noSuggestions: "Todavía no has enviado propuestas.",
    statuses: {
      pending: "Pendiente",
      revisada: "Revisada",
      implementada: "Implementada",
    },
    errors: {
      generic: "Ha ocurrido un error. Inténtalo de nuevo.",
      ratingInvalid: "Selecciona una puntuación entre 1 y 5 estrellas.",
      titleRequired: "Escribe un título para tu propuesta.",
      descRequired: "Escribe una descripción para tu propuesta.",
    },
    starAria: "Puntuación de {value} sobre 5",
    loading: "Cargando...",
    docente: {
      title: "Valoraciones y propuestas",
      summaryMedia: "Media",
      summaryTotal: "Total",
      summaryPending: "Pendientes",
      noRatings: "Aún no hay valoraciones.",
      noSuggestions: "Aún no hay propuestas.",
      ratingsList: "Valoraciones",
      suggestionsList: "Propuestas",
      user: "Persona usuaria",
      stars: "Estrellas",
      category: "Categoría",
      comment: "Comentario",
      date: "Fecha",
      status: "Estado",
      markReviewed: "Revisada",
      markImplemented: "Implementada",
      delete: "Eliminar",
      updated: "Estado actualizado.",
      deleted: "Propuesta eliminada.",
    },
  },

  privacidad: {
    title: "Política de Privacidad",
    subtitle:
      "Queremos que sepas exactamente qué datos utilizamos y por qué. Esta página está escrita en un lenguaje claro y cumple el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.",
    lastUpdated: "Última actualización: {fecha}",
    lastUpdatedValue: "12 de agosto de 2026",

    controllerTitle: "¿Quién es el responsable del tratamiento?",
    controllerText:
      "El responsable del tratamiento de los datos es {responsable}, en relación con la plataforma Atlas IA. Puedes escribirnos en {email} para cualquier cuestión relacionada con la privacidad.",

    summaryTitle: "Resumen en un minuto",
    summaryItems: [
      "Si no creas cuenta, todo tu progreso se guarda únicamente en tu navegador (localStorage) y no sale de tu dispositivo.",
      "Si creas cuenta, guardamos tu nombre, tu correo y una contraseña cifrada para sincronizar tu progreso entre dispositivos.",
      "No usamos publicidad ni rastreadores de terceros, y no vendemos datos a nadie.",
      "Puedes solicitar el borrado de tus datos en cualquier momento.",
    ],

    dataTitle: "¿Qué datos recopilamos?",
    dataIntro:
      "Recopilamos únicamente los datos necesarios para que la plataforma funcione. Esto es lo que ocurre con cada dato:",

    dataWithoutAccountTitle: "Sin crear cuenta",
    dataWithoutAccountItems: [
      "Progreso local: lecciones completadas, XP, insignias, favoritos, notas, retos y proyectos. Se guarda solo en tu navegador.",
      "Preferencias: idioma y tema (claro u oscuro). Se guardan en tu navegador.",
      "No se solicita ningún dato personal (ni nombre ni correo).",
    ],

    dataWithAccountTitle: "Si creas una cuenta",
    dataWithAccountItems: [
      "Nombre: para mostrarte en la plataforma y en el ranking.",
      "Correo electrónico: para identificar tu cuenta y poder recuperar el acceso.",
      "Contraseña: se guarda cifrada (hash) y nunca se almacena en texto plano.",
      "Progreso sincronizado: tu progreso local se guarda también en nuestros servidores para que puedas retomarlo en otro dispositivo y para que el profesorado de tu centro pueda ver estadísticas de uso.",
    ],

    dataChatTitle: "Chat del laboratorio",
    dataChatItems: [
      "Los mensajes que envías se utilizan únicamente para generar la respuesta.",
      "No guardamos historiales de chat asociados a tu cuenta.",
      "Si el proveedor externo de IA está activado, los mensajes se envían a su API para obtener la respuesta; si no, se procesan íntegramente en nuestro servidor con respuestas preparadas.",
    ],

    localTitle: "Almacenamiento en tu navegador (localStorage)",
    localIntro:
      "Para conservar tu progreso y preferencias entre visitas, Atlas IA guarda información en el almacenamiento local del navegador. Esta información permanece en tu dispositivo y no se envía a nuestros servidores, salvo que inicies sesión y sincronices tu progreso. Se usan estas claves:",
    localItems: [
      {
        key: "atlas-progress",
        desc: "tu progreso: lecciones completadas, XP, insignias, favoritos, notas, retos y proyectos.",
      },
      {
        key: "atlas-theme",
        desc: "tu preferencia de tema (claro, oscuro o según el sistema).",
      },
      {
        key: "atlas-locale",
        desc: "tu idioma de preferencia (español, inglés o valenciano).",
      },
    ],

    cookiesTitle: "Cookies",
    cookiesIntro: "Usamos únicamente cookies técnicas imprescindibles para el funcionamiento:",
    cookiesItems: [
      "Cookies de sesión (NextAuth): para mantener tu sesión iniciada cuando tienes cuenta.",
      "Cookie de idioma (atlas-locale): para recordar el idioma que has elegido.",
    ],
    cookiesNoThird: "No utilizamos cookies de terceros ni cookies de seguimiento o publicidad.",

    noTrackingTitle: "Sin seguimiento de terceros",
    noTrackingText:
      "Atlas IA no incluye publicidad, rastreadores, píxeles ni herramientas de análisis de terceros (como Google Analytics). No compartimos ni vendemos tus datos. Tu actividad no se utiliza para crear perfiles publicitarios ni se cede a otras empresas.",

    purposeTitle: "¿Para qué utilizamos tus datos?",
    purposeItems: [
      "Prestar el servicio: mostrar tu progreso, XP, insignias y estadísticas.",
      "Sincronizar tu progreso entre dispositivos si tienes cuenta.",
      "Permitir al profesorado de tu centro consultar estadísticas agregadas de la actividad del grupo.",
      "Generar las respuestas del chat del laboratorio.",
    ],

    legalTitle: "Base jurídica del tratamiento (RGPD)",
    legalItems: [
      "Consentimiento: al crear una cuenta aceptas esta política y el tratamiento de tus datos.",
      "Ejecución del servicio: los datos de progreso son necesarios para ofrecerte la funcionalidad que solicitas.",
      "Interés legítimo: mejorar y mantener la plataforma, sin que ello perjudique tus derechos y libertades.",
    ],

    retentionTitle: "¿Cuánto tiempo conservamos tus datos?",
    retentionText:
      "Conservamos los datos de tu cuenta mientras siga activa. Puedes solicitar su supresión en cualquier momento y los eliminaremos en un plazo máximo de 30 días. Los datos locales (localStorage) se borran si limpias los datos de navegación o si reinicias tu progreso desde la plataforma.",

    rightsTitle: "Tus derechos",
    rightsIntro: "De acuerdo con el RGPD, tienes derecho a:",
    rightsItems: [
      "Acceso: conocer qué datos tuyos tratamos.",
      "Rectificación: corregir datos inexactos o incompletos.",
      "Supresión: pedir que borremos tus datos.",
      "Portabilidad: recibir tus datos en un formato estructurado y legible.",
      "Limitación: solicitar que restrinjamos el tratamiento en determinados casos.",
      "Oposición: oponerte al tratamiento basado en interés legítimo.",
    ],
    rightsHow:
      "Puedes ejercer estos derechos escribiéndonos a {email}. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).",

    minorsTitle: "Menores de edad",
    minorsText:
      "Si eres menor de 14 años, necesitas el consentimiento de tu madre, padre o tutor legal para crear una cuenta en Atlas IA.",

    securityTitle: "Seguridad",
    securityItems: [
      "Las contraseñas se guardan cifradas (hash) y nunca en texto plano.",
      "La comunicación con la plataforma viaja cifrada mediante HTTPS.",
      "Aplicamos el principio de minimización: solo recogemos los datos imprescindibles.",
    ],

    changesTitle: "Cambios en esta política",
    changesText:
      "Si esta política cambia de forma relevante, lo publicaremos en esta página con su nueva fecha de actualización. Te recomendamos revisarla de vez en cuando.",

    contactTitle: "Contacto",
    contactText: "Para cualquier duda o solicitud sobre privacidad, escríbenos a {email}.",
  },

  usoIa: {
    title: "Uso de Inteligencia Artificial",
    subtitle:
      "Creemos en la transparencia: aquí explicamos con claridad cómo y para qué utilizamos la Inteligencia Artificial en este proyecto, y cuáles son nuestros principios éticos.",
    lastUpdated: "Última actualización: {fecha}",
    lastUpdatedValue: "12 de agosto de 2026",

    whatTitle: "¿Qué partes del proyecto se han desarrollado con ayuda de IA?",
    whatIntro: "La Inteligencia Artificial se ha utilizado como herramienta de apoyo en las siguientes áreas:",
    whatItems: [
      "Desarrollo del código: páginas, componentes y funcionalidades (progreso, gamificación, chat, panel docente, accesibilidad y otras) redactados con la ayuda de asistentes de programación basados en IA.",
      "Diseño de la interfaz: estructura visual, sistema de diseño y componentes de interfaz propuestos con apoyo de IA y ajustados por el autor.",
      "Contenido educativo: los borradores iniciales de parte de las lecciones y ejercicios se redactaron con apoyo de IA; después fueron revisados, corregidos y ampliados por el autor para garantizar su rigor y adecuación pedagógica.",
      "Traducciones: las versiones en inglés y valenciano se han elaborado con apoyo de IA y han sido revisadas por el autor.",
      "Generación de imágenes: no se utilizan imágenes generadas por IA en el contenido educativo. Los iconos proceden de librerías de código abierto y los gráficos de la aplicación son diseños propios.",
      "Chat del laboratorio: el asistente de conversación del laboratorio es una herramienta de IA experimental que puede conectar con un proveedor externo si está configurado.",
    ],

    reviewTitle: "Revisión humana",
    reviewText:
      "Todos los contenidos publicados en Atlas IA han sido revisados y validados por el autor ({autor}). La IA propone y el autor decide: cada lección, cada traducción y cada función se comprueba antes de publicarse. La IA se utiliza como herramienta de apoyo, nunca como autoridad final.",

    ethicsTitle: "Principios de uso ético",
    ethicsIntro: "Este proyecto se rige por los siguientes principios en el uso de la IA:",
    ethicsItems: [
      "La IA es una herramienta de apoyo, no una fuente de verdad: todo lo publicado pasa por revisión humana.",
      "Honestidad: no se presentan contenidos generados por IA como si fueran creaciones humanas sin indicarlo.",
      "Verificación: se contrastan datos y fechas para evitar información errónea o alucinaciones.",
      "Privacidad: el uso de la IA respeta la minimización de datos; los mensajes del chat no se utilizan para perfilar a las personas.",
      "Accesibilidad e inclusión: el lenguaje de la plataforma es claro, inclusivo y adaptado al público al que se dirige.",
      "No automatización del aprendizaje: la plataforma acompaña el estudio, pero no sustituye el esfuerzo y el razonamiento de quien aprende.",
    ],

    transparencyTitle: "Transparencia para el alumnado y el profesorado",
    transparencyIntro: "Queremos que tanto quienes aprenden como quienes enseñan sepan exactamente con qué se encuentran:",
    transparencyItems: [
      "Para el alumnado: el chat del laboratorio está identificado como asistente de IA. Cuando una actividad use IA de forma destacada, se indicará. Recomendamos usar la IA como apoyo al aprendizaje y no para sustituir tu propio trabajo.",
      "Para el profesorado: el panel docente ofrece estadísticas agregadas del grupo. Esta política de uso de IA y la política de privacidad son públicas y están a tu disposición para planificar el uso de la plataforma en el aula.",
      "Cita y atribución: si una tarea usa IA, recomendamos indicarlo, tal y como haríamos con cualquier otra fuente.",
    ],

    doubtsTitle: "¿Tienes dudas?",
    doubtsText:
      "Si quieres saber más sobre cómo usamos la IA o detectas un error en un contenido, escríbenos a {email}.",
  },

  terminos: {
    title: "Términos de uso",
    subtitle:
      "Las condiciones generales de uso de Atlas IA, escritas de forma clara y comprensible: qué puedes hacer, qué no puedes hacer y cómo nos relacionamos con la plataforma.",
    lastUpdated: "Última actualización: {fecha}",
    lastUpdatedValue: "12 de agosto de 2026",

    acceptanceTitle: "Aceptación de los términos",
    acceptanceText:
      "El acceso y uso de Atlas IA implica la aceptación de estos términos y de la Política de Privacidad. Al utilizar la plataforma te comprometes a hacerlo de forma responsable y conforme a la normativa vigente. Si no estás de acuerdo con alguna parte, te pedimos que no utilices la plataforma.",

    purposeTitle: "Finalidad de la plataforma",
    purposeText:
      "Atlas IA es una plataforma educativa destinada al aprendizaje de la Inteligencia Artificial y del Vibe Coding. Sus contenidos, herramientas y actividades tienen una finalidad formativa y divulgativa, y no sustituyen ningún asesoramiento profesional.",

    allowedTitle: "Uso permitido",
    allowedIntro: "Puedes utilizar Atlas IA libremente para:",
    allowedItems: [
      "Consultar los contenidos y lecciones publicados.",
      "Realizar las actividades y proyectos de aprendizaje.",
      "Utilizar las herramientas disponibles (laboratorio, chat, simuladores y otras) con fines educativos.",
      "Compartir y reutilizar los recursos, siempre respetando la licencia indicada (CC BY-NC-SA 4.0).",
    ],

    prohibitedTitle: "Uso no permitido",
    prohibitedIntro: "No está permitido:",
    prohibitedItems: [
      "Utilizar la plataforma para actividades ilícitas o que vulneren los derechos de terceras personas.",
      "Intentar alterar, dañar o comprometer la seguridad del sistema o el acceso a cuentas ajenas.",
      "Distribuir contenido malicioso (virus, programas dañinos o engaños) a través de la plataforma.",
      "Utilizar los recursos para fines contrarios a la normativa vigente.",
    ],

    ipTitle: "Propiedad intelectual",
    ipText:
      "Los contenidos de Atlas IA pertenecen a sus autores salvo indicación expresa en contrario. Los materiales publicados (lecciones, glosario, cronología y demás) se distribuyen bajo la licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).",
    ipCopyright: "© 2026 Atlas IA por {autor}",
    ipLicenseTitle: "¿Qué permite esta licencia?",
    ipLicenseItems: [
      "Compartir: copiar y redistribuir los materiales citando la fuente.",
      "Adaptar: remezclar y crear a partir de los materiales, sin fines comerciales y distribuyendo las obras derivadas bajo la misma licencia.",
    ],
    ipLinkLabel: "Consultar la licencia completa",

    aiTitle: "Uso del asistente de IA",
    aiItems: [
      "Las respuestas generadas por el asistente de IA pueden contener errores, imprecisiones o información desactualizada.",
      "Eres responsable de verificar la información antes de utilizarla, especialmente en contextos académicos o profesionales.",
      "La IA actúa como herramienta de apoyo al aprendizaje y no sustituye el criterio humano.",
      "Aplicamos el principio Human-in-the-loop: las personas toman las decisiones y validan los resultados. La decisión final siempre es tuya.",
    ],

    liabilityTitle: "Limitación de responsabilidad",
    liabilityItems: [
      "Atlas IA realiza esfuerzos razonables para mantener los contenidos actualizados y correctos, pero no garantiza que estén libres de errores.",
      "No se garantiza la disponibilidad permanente del servicio: puede haber interrupciones por mantenimiento, mejoras o incidencias técnicas.",
      "La plataforma no asume responsabilidad por las decisiones tomadas exclusivamente a partir de respuestas generadas por IA.",
    ],

    privacyTitle: "Privacidad y protección de datos",
    privacyText:
      "El tratamiento de tus datos personales se rige por la Política de Privacidad, que puedes consultar en esta misma web.",
    privacyLinkLabel: "Ver la Política de Privacidad",
    privacyNote:
      "Atlas IA se compromete con un uso responsable y minimizado de los datos: solo recogemos los imprescindibles, los tratamos de forma segura y nunca los utilizamos para fines ajenos a la plataforma.",

    changesTitle: "Modificaciones",
    changesText:
      "Atlas IA puede actualizar sus contenidos, herramientas o estos términos cuando sea necesario. Las modificaciones entrarán en vigor desde su publicación en esta página. Si los cambios son relevantes, lo indicaremos de forma visible.",

    contactTitle: "Contacto",
    contactText:
      "Para cualquier duda sobre estos términos, sobre la plataforma o sobre el uso de la Inteligencia Artificial, puedes escribirnos a {email}. Te responderemos lo antes posible.",

    dateTitle: "Fecha de última actualización",
    dateText:
      "Este documento se actualizó por última vez el {fecha}. La versión vigente se publica siempre en esta página.",
  },

  roadmap: {
    title: "Roadmap del proyecto",
    subtitle:
      "La hoja de ruta de Atlas IA: qué hemos construido, en qué punto estamos y hacia dónde se dirige la plataforma.",
    lastUpdated: "Última actualización: {fecha}",
    lastUpdatedValue: "12 de agosto de 2026",
    intro:
      "Atlas IA se construye por fases incrementales. Cada fase añade contenido, funcionalidad o mejoras de calidad verificadas antes de continuar. Este es el recorrido completo del proyecto.",
    milestonesTitle: "Hitos completados",
    milestones: [
      {
        titulo: "Fundación del proyecto (Fases 1-2)",
        descripcion:
          "Base Next.js con App Router, design system claro/oscuro, layout con sidebar y buscador, bloque de inicio y Fundamentos de IA con 16 lecciones, búsqueda global y gamificación inicial (XP, insignias, rachas, favoritos).",
      },
      {
        titulo: "Ecosistema y prompting (Fases 3-4)",
        descripcion:
          "Bloque 2 con 8 lecciones, comparador interactivo de 13 herramientas, árbol de decisión y 7 categorías; bloque 3 con 8 lecciones y calculadora de prompts.",
      },
      {
        titulo: "Búsqueda, glosario y cronología (Fase 5)",
        descripcion:
          "Búsqueda avanzada en glosario y herramientas, glosario de 48 términos con filtros y cronología interactiva con 28 hitos de la IA.",
      },
      {
        titulo: "Gamificación extendida (Fase 6)",
        descripcion:
          "Ranking global, retos diarios y semanales, proyectos prácticos, página de perfil con estadísticas y notificaciones en tiempo real.",
      },
      {
        titulo: "Cuentas y base de datos (Fase 7)",
        descripcion:
          "SQLite con Prisma, autenticación NextAuth con credenciales, registro, inicio de sesión y sincronización del progreso.",
      },
      {
        titulo: "Laboratorio de IA (Fases 8-10)",
        descripcion:
          "Chat interactivo con streaming SSE y respuestas offline, bloque de Agentes, y laboratorio expandido: entorno de prompts, flujo de agentes, comparador de modelos y simulador de tokens.",
      },
      {
        titulo: "Contenido completo (Fases 11-12)",
        descripcion:
          "Sidebar colapsable, bloques 4 a 10 completados (docencia, multimodal, programación, agentes, ética, laboratorio y novedades), lint limpio y migración a proxy.",
      },
      {
        titulo: "Revisión lingüística (Fases 13-14)",
        descripcion:
          "Adaptación integral al español académico y profesional con lenguaje inclusivo, y ajustes de interfaz.",
      },
      {
        titulo: "Novedades 2026 (Fase 15)",
        descripcion:
          "Actualización del bloque de novedades al estado de la técnica de julio de 2026: modelos, agentes, IA multimodal, normativa europea y fuentes.",
      },
      {
        titulo: "Internacionalización (Fases 16-17)",
        descripcion:
          "Infraestructura i18n con español, inglés y valenciano; interfaz, chat, búsqueda y las 71 lecciones localizadas.",
      },
      {
        titulo: "Accesibilidad (Fases 18-19)",
        descripcion:
          "Lectura por voz con Web Speech API y control de velocidad, y términos interactivos del glosario con popover y enlace directo.",
      },
      {
        titulo: "SEO y PWA (Fases 20-21)",
        descripcion:
          "Metadata, canonical, sitemap y robots; manifest localizado, service worker con modo offline, instalación y auditoría Lighthouse.",
      },
      {
        titulo: "Docencia y legal (Fases 22-25)",
        descripcion:
          "Panel docente con estadísticas del alumnado, controles en la franja superior, página de privacidad RGPD y página de uso de IA.",
      },
      {
        titulo: "Asistente de IA (Fases 26-27)",
        descripcion:
          "Chat con renderizado Markdown, mentor de Vibe Coding, fallback inteligente etiquetado y estrategia de respuesta que nunca deja de ayudar.",
      },
      {
        titulo: "Roadmap y términos legales (Fases 28-29)",
        descripcion:
          "Página de Roadmap con el recorrido del proyecto y página de Términos de uso, completando la sección legal del footer.",
      },
    ],
    currentTitle: "Estado actual",
    currentItems: [
      "Todas las fases 1 a 29 están completadas.",
      "El asistente del laboratorio responde en modo offline con contenido del curso, glosario, herramientas y conocimiento general, etiquetando siempre la procedencia.",
      "La sección legal del footer está completa: privacidad, uso de IA y términos de uso.",
    ],
    nextTitle: "Siguientes pasos",
    nextItems: [
      "Probar la instalación PWA y el modo offline en un despliegue HTTPS (por ejemplo Vercel).",
      "Añadir capturas de pantalla al manifest para el diálogo de instalación enriquecido de Android.",
      "Valorar prefijos de URL /en y /val para un hreflang real.",
      "Probar el panel docente con cuentas incluidas en TEACHER_EMAILS.",
    ],
  },

  acercaDe: {
    title: "Acerca de Atlas IA",
    subtitle:
      "La página institucional del proyecto: qué es Atlas IA, qué pretendemos conseguir, cómo lo hacemos y bajo qué principios se publican estos contenidos.",
    lastUpdated: "Última actualización: {fecha}",
    lastUpdatedValue: "12 de agosto de 2026",

    whatTitle: "¿Qué es Atlas IA?",
    whatText:
      "Atlas IA es un proyecto educativo en español para aprender Inteligencia Artificial de forma práctica, progresiva y accesible. Reúne más de 70 lecciones organizadas en 11 bloques, un glosario de términos, una cronología de la IA, un laboratorio interactivo con chat, entorno de prompts y simuladores, además de herramientas de seguimiento del progreso y un panel para el profesorado. No se necesita experiencia previa: cada bloque parte desde cero y construye sobre lo aprendido.",

    objectiveTitle: "Objetivo educativo",
    objectiveIntro: "El propósito de Atlas IA es:",
    objectiveItems: [
      "Ayudar a docentes, estudiantes y profesionales a comprender y utilizar la IA de manera crítica, ética y útil, tanto en el aula como en su trabajo diario.",
      "Promover el aprendizaje práctico mediante proyectos reales: quien aprende no solo lee sobre IA, sino que experimenta con prompts, compara herramientas, diseña flujos de agentes y aplica lo aprendido a casos concretos.",
    ],

    philosophyTitle: "Filosofía del proyecto",
    philosophyIntro:
      "Atlas IA se construye bajo el enfoque del Vibe Coding Educativo, que combina el aprendizaje asistido por IA con una metodología progresiva y guiada. Sus principios son:",
    philosophyItems: [
      "La IA como herramienta de apoyo: los asistentes de programación y los modelos de lenguaje se utilizan para acelerar y facilitar el aprendizaje, nunca para sustituir el razonamiento de quien aprende.",
      "Human-in-the-loop: las personas toman las decisiones y validan los resultados. La IA propone, revisa y agiliza; la decisión final siempre es humana. Este principio se aplica tanto al contenido del curso como al propio desarrollo de la plataforma.",
      "Autonomía, creatividad y pensamiento crítico: el objetivo no es memorizar, sino aprender a formular buenas preguntas, contrastar respuestas, detectar errores y construir soluciones propias.",
    ],

    authorshipTitle: "Autoría",
    authorshipIntro: "Un proyecto personal, transparente y hecho con dedicación.",
    authorshipName: "Noemí Celaya Mingot",
    authorshipRole: "Autora y desarrolladora de Atlas IA",
    authorshipText:
      "Atlas IA ha sido desarrollado por Noemí Celaya Mingot, profesora de Formación Profesional. El proyecto combina diseño, programación y contenidos educativos elaborados y revisados por la autora con el apoyo de herramientas de IA como asistentes de programación, siempre bajo el principio Human-in-the-loop: la IA propone y la autora decide, verifica y valida cada resultado.",

    techTitle: "Tecnologías utilizadas",
    techIntro: "La plataforma está construida con un stack moderno, abierto y de código libre:",
    techItems: [
      { name: "Next.js 16", desc: "Marco de trabajo de React con App Router, renderizado híbrido y API Routes." },
      { name: "TypeScript", desc: "Tipado estático para un código robusto y mantenible." },
      { name: "Tailwind CSS v4", desc: "Diseño de interfaz rápido, coherente y con modo oscuro." },
      { name: "MDX", desc: "Contenido educativo escrito en Markdown enriquecido con componentes." },
      { name: "Zustand", desc: "Gestión del estado de gamificación con persistencia local." },
      { name: "Prisma + SQLite", desc: "Base de datos local para cuentas, sesiones y progreso del alumnado." },
      { name: "NextAuth", desc: "Autenticación con credenciales y control de acceso por rol." },
      { name: "PWA + Service Worker", desc: "Instalación en el dispositivo y modo offline." },
      { name: "Web Speech API", desc: "Lectura por voz de los contenidos para una experiencia más accesible." },
    ],

    responsibleTitle: "Uso responsable de la Inteligencia Artificial",
    responsibleIntro: "La IA es una herramienta poderosa, pero no infalible. En Atlas IA queremos que se use con criterio:",
    responsibleItems: [
      "La IA puede cometer errores (alucinaciones, datos desactualizados, sesgos) y debe usarse como apoyo, no como fuente de verdad.",
      "Promovemos la verificación de la información: contrasta, comprueba las fuentes y no des nada por cierto sin revisarlo.",
      "La ética, la privacidad y la protección de datos son innegociables: no compartas datos personales con asistentes de IA y respeta siempre la normativa vigente.",
      "El chat del laboratorio es una herramienta experimental: sus respuestas pueden contener errores y deben revisarse antes de utilizarse.",
    ],

    accessibilityTitle: "Accesibilidad",
    accessibilityIntro: "El aprendizaje debe ser para todas las personas. Por eso la accesibilidad es una prioridad del proyecto:",
    accessibilityItems: [
      "Compromiso con un aprendizaje inclusivo, con lenguaje claro y adaptado al público al que se dirige.",
      "Diseño claro y accesible: contraste suficiente, navegación por teclado, etiquetas aria y términos interactivos del glosario.",
      "Lectura por voz de los contenidos con control de velocidad para facilitar la comprensión.",
      "Mejora continua de la experiencia de usuario: revisamos periódicamente la plataforma para corregir y ampliar.",
    ],

    licenseTitle: "Licencia",
    licenseIntro:
      "Los contenidos de Atlas IA (lecciones, glosario, cronología y demás materiales) se publican bajo la licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).",
    licenseWhatTitle: "¿Qué permite esta licencia?",
    licenseAllowedItems: [
      "Compartir: copiar y redistribuir los materiales en cualquier medio o formato.",
      "Adaptar: remezclar, transformar y crear a partir de los materiales.",
    ],
    licenseConditions:
      "Con las siguientes condiciones: reconocimiento de la autoría (debes citar la fuente), sin fines comerciales (no puedes utilizarlos con fines lucrativos) y compartir bajo la misma licencia (las obras derivadas deben distribuirse con la misma licencia).",
    licenseLink: "Ver la licencia completa",

    statusTitle: "Estado del proyecto",
    statusIntro: "Atlas IA es un proyecto en construcción activa, publicado por fases incrementales y verificadas.",
    statusCreated: "Fecha de creación",
    statusCreatedValue: "31 de julio de 2026",
    statusUpdated: "Última actualización",
    statusUpdatedValue: "12 de agosto de 2026",
    statusUpdatedAuto: "Obtenida automáticamente de la última revisión del código.",
    statusNote: "Cada fase añade contenido, funcionalidad o mejoras de calidad antes de continuar con la siguiente.",
  },

  auth: {
    login: {
      title: "Iniciar sesión",
      subtitle: "Accede a tu cuenta de Atlas IA",
      email: "Correo electrónico",
      password: "Contraseña",
      submit: "Iniciar sesión",
      errorCredentials: "Correo electrónico o contraseña incorrectos",
      errorGeneric: "Error al iniciar sesión",
      noAccount: "¿No tienes cuenta?",
      registerLink: "Registrarse",
    },
    register: {
      title: "Crear cuenta",
      subtitle: "Regístrate para empezar a aprender",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      password: "Contraseña",
      passwordPlaceholder: "Mínimo 6 caracteres",
      submit: "Crear cuenta",
      errorGeneric: "Error al registrarse",
      errorCreate: "Error al crear la cuenta",
      hasAccount: "¿Ya tienes cuenta?",
      loginLink: "Iniciar sesión",
    },
    userMenu: {
      profile: "Mi perfil",
      logout: "Cerrar sesión",
      user: "Usuario",
    },
  },

  notFound: {
    title: "Página no encontrada",
    subtitle: "Lo sentimos, la página que buscas no existe o ha sido movida.",
    backHome: "Volver al inicio",
  },

  gamification: {
    xp: {
      yourProgress: "Tu progreso",
      nextLevel: "Siguiente nivel:",
      xp: "XP",
      lessons: "lecciones",
      days: "días",
      badges: "Insignias",
    },
    ranking: {
      title: "Ranking global",
      yourRank: "Tu puesto:",
      searchPlaceholder: "Buscar en el ranking...",
      you: "Tú",
      badges: "insignias",
      days: "días",
      showLess: "Mostrar menos",
      showAll: "Mostrar todos ({count})",
    },
    retos: {
      title: "Retos",
      diarios: "Diarios",
      semanales: "Semanales",
      completedCount: "completados",
      noChallenges: "No hay retos disponibles aún",
      done: "Hecho",
      expired: "Expirado",
      hoursLeft: "h restantes",
      daysLeft: "d restantes",
    },
    proyectos: {
      title: "Proyectos prácticos",
      completed: "Completado",
      markComplete: "Marcar como completado",
      completedAt: "Completado",
    },
    profile: {
      levelAndXp: "Nivel y experiencia",
      level: "Nivel",
      totalXp: "XP totales",
      xpToNextLevel: "XP para el siguiente nivel",
      stats: "Estadísticas",
      lessons: "Lecciones",
      streak: "Racha (días)",
      badges: "Insignias",
      projects: "Proyectos",
      totalProgress: "Progreso total del curso",
      recentBadges: "Insignias recientes",
      allBadges: "Todas las insignias",
    },
    notifications: {
      title: "Notificaciones",
      noNotifications: "No hay notificaciones",
      markAllRead: "Marcar todas como leídas",
      markRead: "Marcar como leída",
      newBadge: "¡Nueva insignia!",
      badgeUnlocked: "Has desbloqueado:",
      challengeCompleted: "¡Reto completado!",
      projectCompleted: "¡Proyecto completado!",
      completed: "Completaste",
      andEarned: "y ganaste",
    },
    dificultad: {
      basico: "Básico",
      intermedio: "Intermedio",
      avanzado: "Avanzado",
    },
  },

  lab: {
    promptSandbox: {
      title: "Configura tu prompt",
      task: "Tarea",
      taskPlaceholder: "Describe qué quieres que haga la IA...",
      role: "Rol",
      format: "Formato",
      tone: "Tono",
      audience: "Audiencia",
      extension: "Extensión",
      context: "Contexto adicional",
      contextPlaceholder: "Información adicional que la IA debe conocer...",
      generated: "Prompt generado",
      copy: "Copiar",
      copied: "Copiado",
      emptyHint: "Escribe una tarea para ver tu prompt generado",
      suggestions: [
        "Explica qué es el Machine Learning",
        "Crea un plan de estudios semanal sobre IA",
        "Escribe un artículo sobre RAG",
      ],
    },
    agentFlow: {
      title: "Bloques",
      addHint: "Arrastra o haz clic para añadir",
      clear: "Limpiar",
      tips: "Consejos",
      tipsList: [
        "Ordena los nodos en secuencia",
        "Usa RAG para búsqueda",
        "Conecta herramientas al LLM",
        "Termina siempre con Salida",
      ],
      pipeline: "Pipeline de agente",
      nodes: "nodos",
      empty: "Arrastra bloques para crear tu flujo",
      nodeLabels: {
        input: "Entrada",
        llm: "LLM",
        rag: "RAG",
        tool: "Herramienta",
        output: "Salida",
      },
      nodeConfigs: {
        input: "Texto del usuario",
        llm: "gpt-4o-mini",
        rag: "top_k: 5",
        tool: "web_search",
        output: "Respuesta formateada",
      },
      ragDetected: "Pipeline RAG detectado: los datos recuperados se pasarán al contexto del LLM",
      toolDetected: "Pipeline herramienta+LLM: el LLM podrá usar la herramienta para obtener información",
      basicDetected: "Pipeline básico: el flujo de datos sigue el orden de los nodos",
      moveUp: "Mover nodo arriba",
      removeNode: "Eliminar nodo",
    },
    modelComparator: {
      title: "Comparador de modelos",
      groups: {
        asistentes: "Asistentes",
        codigo: "Código",
        imagen: "Imagen",
        audiovisual: "Audio/Vídeo",
      },
      criteria: {
        popularidad: "Popularidad",
        multimodal: "Multimodal",
        openSource: "Open Source",
        contexto: "Contexto",
        precio: "Precio",
        fortaleza: "Fortaleza",
      },
      selectAll: "+ Todos",
      empty: "Selecciona hasta 4 modelos para comparar",
      criterio: "Criterio",
      empresa: "Empresa",
      recommendation: "Recomendación:",
      recGeneral: "Para uso general, ChatGPT ofrece versatilidad; Claude destaca en análisis profundo; Gemini tiene la ventana de contexto más amplia.",
      recCodigo: "Copilot es ideal para sugerencias en el editor; Cursor ofrece un entorno completo con IA integrada.",
      recImagen: "Midjourney ofrece la mejor calidad artística; DALL-E es más fácil de usar; Stable Diffusion es gratuito y personalizable.",
      recDefault: "Cada herramienta tiene su especialidad. Evalúa según tu caso de uso principal.",
    },
    tokenSimulator: {
      title: "Simulador de tokens",
      inputLabel: "Texto de entrada",
      inputPlaceholder: "Escribe o pega texto aquí para estimar los tokens...",
      examples: "Ejemplos:",
      example: "Ejemplo",
      model: "Modelo",
      estimatedTokens: "Tokens estimados",
      totalContext: "Contexto total",
      usedTokens: "Tokens usados",
      remainingTokens: "Tokens restantes",
      usage: "Uso",
      withinLimit: "Dentro del límite",
      nearLimit: "Cerca del límite",
      limitReached: "Límite alcanzado",
      overLimit: "El texto excede o está muy cerca del límite de contexto",
      howCalculated: "¿Cómo se calcula?",
      calcHint1: "Estimación basada en ~1.3 tokens por palabra + 0.05 tokens por carácter.",
      calcHint2: "El recuento real varía según el tokenizador de cada modelo.",
    },
    comparador: {
      title: "Comparador de herramientas de IA",
      selectCategory: "Selecciona una categoría:",
      chooseTools: "Elige hasta 3 herramientas para comparar:",
      evaluate: "Evalúa cada herramienta (1-5 estrellas):",
      criterio: "Criterio",
      total: "TOTAL",
      hideDetails: "Ocultar detalles",
      showDetails: "Ver detalles de cada herramienta",
      fortaleza: "Fortaleza:",
      debilidad: "Debilidad:",
      precio: "Precio:",
      bestOption: "🏆 Mejor opción según tu evaluación",
      footer: "Este comparador es una guía interactiva. Las puntuaciones son subjetivas y dependen de tus necesidades específicas.",
    },
    arbol: {
      recomendacion: "Recomendación",
      loMejor: "Lo mejor:",
      caracteristicas: "Características principales:",
      idealPara: "Ideal para:",
      precio: "Precio:",
      visitSite: "Visitar sitio web",
      footer: "Esta es una recomendación basada en tus respuestas. Explora otras opciones también.",
      nodeNotFound: "Nodo no encontrado.",
      reiniciar: "Reiniciar",
      gratis: "Gratis",
      freemium: "Freemium",
      dePago: "De pago",
    },
    calculadora: {
      title: "Calculadora de prompts",
      describeTask: "Describe tu tarea",
      taskPlaceholder: "Ej: Escribe un correo de ventas, crea un plan de marketing, explica un concepto...",
      role: "Rol de la IA",
      context: "Contexto adicional",
      contextPlaceholder: "Ej: Soy responsable de marketing en una empresa emergente de SaaS...",
      format: "Formato",
      tone: "Tono",
      audience: "Audiencia",
      extension: "Extensión",
      noPreference: "Sin preferencia",
      generate: "Generar prompt",
      reset: "Reiniciar",
      generated: "Prompt generado",
      copy: "Copiar",
      copied: "Copiado",
      copyHint: "Copia este prompt y pégalo en ChatGPT, Claude, Gemini o cualquier asistente de IA.",
      generateHint: "Haz clic en {strong} para crear tu prompt personalizado.",
      footer: "Esta calculadora te ayuda a estructurar prompts efectivos. Los resultados pueden variar según el modelo de IA que uses.",
    },
    aiChat: {
      title: "Atlas IA Chat",
      poweredBy: "Potenciado por GPT-4o mini",
      demoMode: "Modo educativo (demo)",
      welcome: "¡Te damos la bienvenida al laboratorio!",
      welcomeDesc: "Pregúntame cualquier cosa sobre Inteligencia Artificial. Estoy aquí para ayudarte a aprender.",
      placeholder: "Pregunta sobre IA...",
      suggestedQuestions: [
        "¿Qué es Machine Learning?",
        "¿Diferencia entre GPT, Claude y Gemini?",
        "¿Qué técnicas de prompting recomiendas?",
        "¿Qué es un LLM?",
        "¿Qué herramientas IA me recomiendas?",
        "¿Qué es RAG?",
      ],
      errorServer: "Error al conectar con el servidor",
      errorStream: "No se pudo leer la respuesta",
      errorConnection: "Error de conexión",
    },
  },

  data: {
    bloques: {
      "antes-de-empezar": {
        titulo: "Antes de Empezar",
        descripcion: "Introducción y cómo aprovechar al máximo esta plataforma",
      },
      fundamentos: {
        titulo: "Fundamentos de IA",
        descripcion: "Conceptos esenciales: Machine Learning, Deep Learning, LLM, Transformers y más",
      },
      ecosistema: {
        titulo: "Mapa del Ecosistema",
        descripcion: "Explora las principales herramientas de IA y compara entre ellas",
      },
      prompting: {
        titulo: "Ingeniería de Prompt",
        descripcion: "Domina el arte de comunicarte de forma eficaz con la IA",
      },
      "ia-docencia": {
        titulo: "IA Aplicada a la Docencia",
        descripcion: "Herramientas y técnicas para transformar la enseñanza con IA",
      },
      "ia-multimodal": {
        titulo: "IA Multimodal",
        descripcion: "Imagen, vídeo, audio y presentaciones con inteligencia artificial",
      },
      programacion: {
        titulo: "Programación Asistida",
        descripcion: "Cursor, Copilot, Claude Code y más herramientas para desarrolladores",
      },
      agentes: {
        titulo: "Agentes y Automatización",
        descripcion: "MCP, RAG, agentes autónomos y automatización de flujos de trabajo",
      },
      etica: {
        titulo: "Ética y Responsabilidad",
        descripcion: "Privacidad, RGPD, derechos de autor y uso responsable de la IA",
      },
      laboratorio: {
        titulo: "Laboratorio",
        descripcion: "Experimentos, comparativas, retos y casos reales",
      },
      novedades: {
        titulo: "Novedades",
        descripcion: "Noticias, nuevos modelos, actualizaciones y tendencias del ecosistema",
      },
    },

    glosarioCategorias: {
      todas: "Todas",
      conceptos: "Conceptos",
      ml: "ML",
      modelos: "Modelos",
      tecnico: "Técnico",
      prompting: "Prompting",
      herramientas: "Herramientas",
      limitaciones: "Limitaciones",
    },

    glosario: [
      { termino: "Agente de IA", definicion: "Un sistema de IA capaz de tomar decisiones y ejecutar acciones de forma autónoma para lograr un objetivo específico. Puede navegar por internet, usar herramientas y ejecutar código.", categoria: "conceptos" },
      { termino: "Alucinación", definicion: "Cuando un modelo de IA genera información que parece plausible pero es completamente falsa o inventada. Las alucinaciones son una de las limitaciones más importantes de los LLM.", categoria: "limitaciones" },
      { termino: "API", definicion: "Application Programming Interface. Un conjunto de reglas que permite a dos aplicaciones comunicarse entre sí. Las APIs permiten integrar IA en otras aplicaciones.", categoria: "tecnico" },
      { termino: "Aprendizaje Supervisado", definicion: "Un tipo de machine learning en el que el modelo se entrena con datos etiquetados, es decir, datos que ya tienen la respuesta correcta. El modelo aprende a predecir la salida correcta.", categoria: "ml" },
      { termino: "Aprendizaje No Supervisado", definicion: "Un tipo de machine learning en el que el modelo encuentra patrones en datos sin etiquetar, sin saber cuál es la respuesta correcta. Útil para clustering y segmentación.", categoria: "ml" },
      { termino: "Aprendizaje por Refuerzo", definicion: "Un tipo de machine learning en el que un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas por acciones correctas y castigos por incorrectas.", categoria: "ml" },
      { termino: "Batch size", definicion: "Número de ejemplos de entrenamiento procesados antes de actualizar los parámetros del modelo. Un batch size más grande puede mejorar la estabilidad del entrenamiento.", categoria: "tecnico" },
      { termino: "Chain-of-Thought (CoT)", definicion: "Técnica de prompting que pide al modelo razonar paso a paso antes de responder. Mejora la precisión en problemas complejos y tareas de razonamiento.", categoria: "prompting" },
      { termino: "Chatbot", definicion: "Un programa que simula una conversación humana. Los chatbots modernos de IA pueden mantener conversaciones complejas y ayudar con diversas tareas.", categoria: "herramientas" },
      { termino: "Contexto (ventana de contexto)", definicion: "La cantidad de información que un modelo de IA puede 'recordar' y considerar al generar una respuesta. Se mide en tokens. Un contexto más amplio permite conversaciones más largas.", categoria: "tecnico" },
      { termino: "Deep Learning", definicion: "Un subconjunto del Machine Learning que utiliza redes neuronales con muchas capas (profundas) para aprender patrones complejos. Es la base de los modelos más potentes actuales.", categoria: "ml" },
      { termino: "Dataset", definicion: "Un conjunto de datos utilizado para entrenar un modelo de IA. La calidad y cantidad del conjunto de datos determinan en gran medida la calidad del modelo resultante.", categoria: "tecnico" },
      { termino: "Embedding", definicion: "Una representación numérica de un texto, imagen u otro tipo de dato que captura su significado semántico. Los embeddings permiten que la IA 'entienda' la relación entre conceptos.", categoria: "tecnico" },
      { termino: "Entrenamiento", definicion: "El proceso de enseñar a un modelo de IA ajustando sus parámetros a partir de datos de ejemplo. Puede durar desde minutos hasta meses dependiendo del modelo.", categoria: "tecnico" },
      { termino: "Few-shot prompting", definicion: "Técnica de prompting en la que se proporcionan ejemplos del resultado esperado antes de pedir la tarea real. Ayuda a guiar al modelo hacia el formato deseado.", categoria: "prompting" },
      { termino: "Fine-tuning", definicion: "El proceso de ajustar un modelo preentrenado con datos específicos para mejorar su rendimiento en una tarea concreta. Permite personalizar modelos generales.", categoria: "tecnico" },
      { termino: "Generación Aumentada por Recuperación (RAG)", definicion: "Técnica que combina generación de texto con búsqueda de información relevante en una base de conocimiento externa. Permite respuestas más precisas y actualizadas.", categoria: "tecnico" },
      { termino: "GPT", definicion: "Generative Pre-trained Transformer. Un tipo de modelo de lenguaje desarrollado por OpenAI que genera texto predictivo. Es la base de ChatGPT.", categoria: "modelos" },
      { termino: "Gradiente", definicion: "Valor matemático que indica la dirección y magnitud del error de un modelo, usado durante el entrenamiento para ajustar los parámetros y minimizar errores.", categoria: "tecnico" },
      { termino: "Hiperparámetros", definicion: "Parámetros que se configuran antes de entrenar un modelo, como la tasa de aprendizaje, número de capas o tamaño del batch. Influyen significativamente en el rendimiento.", categoria: "tecnico" },
      { termino: "Inferencia", definicion: "El proceso de usar un modelo ya entrenado para generar predicciones o respuestas a nuevas preguntas. Es lo que ocurre cada vez que interactúas con una IA.", categoria: "tecnico" },
      { termino: "Ingeniería de Prompt (Prompt Engineering)", definicion: "La disciplina de diseñar instrucciones optimizadas para obtener los mejores resultados de un modelo de IA. Incluye técnicas como few-shot, cadena de pensamiento y más.", categoria: "prompting" },
      { termino: "Inteligencia Artificial (IA)", definicion: "Rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Incluye aprendizaje, razonamiento, percepción y lenguaje.", categoria: "conceptos" },
      { termino: "Inteligencia Artificial General (AGI)", definicion: "Una IA hipotética que igualaría o superaría la inteligencia humana en cualquier tarea cognitiva. A día de hoy no existe; los sistemas actuales son IA estrecha.", categoria: "conceptos" },
      { termino: "IA Estrecha (ANI)", definicion: "IA diseñada para una tarea específica, como reconocer imágenes o traducir textos. Todos los sistemas actuales de IA son ANI, no AGI.", categoria: "conceptos" },
      { termino: "LLM (Large Language Model)", definicion: "Un modelo de lenguaje entrenado con enormes cantidades de datos de texto. Puede generar, traducir, resumir y responder preguntas. Ejemplos: GPT-4, Claude, Gemini.", categoria: "modelos" },
      { termino: "Machine Learning", definicion: "Un enfoque de la IA en el que los sistemas aprenden de los datos sin ser programados explícitamente para cada tarea. El modelo encuentra patrones en los datos y los usa para hacer predicciones.", categoria: "ml" },
      { termino: "Modelo fundacional", definicion: "Modelos de IA masivos entrenados en grandes cantidades de datos que pueden adaptarse a múltiples tareas. GPT-4, Claude y Gemini son modelos fundacionales.", categoria: "modelos" },
      { termino: "Multimodal", definicion: "Capacidad de un modelo de IA para procesar y generar múltiples tipos de datos simultáneamente: texto, imágenes, audio y vídeo.", categoria: "conceptos" },
      { termino: "Neurona (artificial)", definicion: "Unidad básica de una red neuronal que recibe entradas, las procesa y produce una salida. Inspirada en las neuronas biológicas del cerebro humano.", categoria: "ml" },
      { termino: "Overfitting", definicion: "Cuando un modelo se ajusta en exceso a los datos de entrenamiento, incluidos el ruido y los detalles irrelevantes, y no generaliza bien a datos nuevos. Es un error común.", categoria: "ml" },
      { termino: "Parámetros", definicion: "Los valores internos que un modelo de IA aprende durante el entrenamiento. Modelos grandes pueden tener desde millones hasta billones de parámetros.", categoria: "tecnico" },
      { termino: "Perceptrón", definicion: "El tipo más simple de red neuronal, con una sola capa. Fue la base de las redes modernas. Por sí solo puede resolver únicamente problemas linealmente separables.", categoria: "ml" },
      { termino: "Preentrenamiento", definicion: "Fase inicial en la que un modelo aprende de grandes cantidades de datos no etiquetados. Después se afina (ajuste fino) para tareas específicas. Ahorra tiempo y recursos.", categoria: "tecnico" },
      { termino: "Prompt", definicion: "La instrucción o pregunta que le damos a una IA. Un buen prompt produce mejores resultados. La ingeniería de prompts es el arte de formular instrucciones efectivas.", categoria: "prompting" },
      { termino: "RAG (Retrieval-Augmented Generation)", definicion: "Una técnica que combina la generación de texto con la búsqueda de información relevante. Permite a las IAs responder con información actualizada y específica.", categoria: "tecnico" },
      { termino: "Red Neuronal", definicion: "Un sistema computacional inspirado en el cerebro humano, compuesto por capas de neuronas interconectadas. Es la base del deep learning.", categoria: "ml" },
      { termino: "Red Neuronal Convolucional (CNN)", definicion: "Tipo de red neuronal especializada en procesar imágenes y datos con estructura de cuadrícula. Usa filtros para detectar patrones visuales.", categoria: "ml" },
      { termino: "Red Neuronal Recurrente (RNN)", definicion: "Tipo de red neuronal diseñada para datos secuenciales como texto o audio. Tiene memoria de pasos anteriores, pero es menos eficiente que los transformers.", categoria: "ml" },
      { termino: "Regresión", definicion: "Técnica de machine learning para predecir valores numéricos continuos, como precios, temperaturas o tiempos. El modelo encuentra una función que relaciona variables.", categoria: "ml" },
      { termino: "Sesgo (Bias)", definicion: "Error sistemático en un modelo de IA que favorece ciertos resultados sobre otros. Puede originarse en datos de entrenamiento desequilibrados o en el diseño del algoritmo.", categoria: "limitaciones" },
      { termino: "Token", definicion: "La unidad básica de texto que un modelo de IA procesa. Un token puede ser una palabra, parte de una palabra o un carácter. Los precios de las APIs se suelen medir en tokens.", categoria: "tecnico" },
      { termino: "Transformer", definicion: "La arquitectura de red neuronal que revolucionó la IA. Publicada en 2017, es la base de todos los modelos de lenguaje modernos. Permite procesar texto de forma paralela.", categoria: "ml" },
      { termino: "Transfer Learning", definicion: "Técnica en la que un modelo entrenado para una tarea se reutiliza como punto de partida para una tarea diferente pero relacionada. Ahorra tiempo de entrenamiento.", categoria: "tecnico" },
      { termino: "Tasa de aprendizaje", definicion: "Hiperparámetro que controla cuánto se ajustan los parámetros del modelo en cada paso del entrenamiento. Si es muy alta, el modelo puede divergir; si es muy baja, el entrenamiento se vuelve lento.", categoria: "tecnico" },
      { termino: "Underfitting", definicion: "Cuando un modelo es demasiado simple para capturar los patrones en los datos. Produce malos resultados tanto en entrenamiento como en datos nuevos.", categoria: "ml" },
      { termino: "Zero-shot prompting", definicion: "Técnica en la que se le pide a la IA realizar una tarea sin proporcionar ejemplos previos. Funciona bien para tareas que el modelo ya entiende por su entrenamiento.", categoria: "prompting" },
    ],

    cronologia: [
      { titulo: "Test de Turing", descripcion: "Alan Turing publica 'Computing Machinery and Intelligence' y propone el Test de Turing para medir la inteligencia de una máquina." },
      { titulo: "Nacimiento de la IA", descripcion: "Conferencia de Dartmouth: John McCarthy acuña el término 'inteligencia artificial' y marca el inicio oficial del campo." },
      { titulo: "ELIZA: primer chatbot", descripcion: "Joseph Weizenbaum crea ELIZA, el primer programa de procesamiento de lenguaje natural que simulaba una conversación con un psicoterapeuta." },
      { titulo: "Deep Blue vence a Kasparov", descripcion: "El superordenador de IBM Deep Blue derrota al campeón mundial de ajedrez Garry Kasparov, demostrando que una máquina puede superar al ser humano en tareas específicas." },
      { titulo: "Nace el Deep Learning moderno", descripcion: "Geoffrey Hinton publica un artículo clave sobre deep learning que reactiva el interés en redes neuronales profundas." },
      { titulo: "Watson gana en Jeopardy!", descripcion: "El sistema Watson de IBM vence a los campeones humanos en el concurso Jeopardy!, demostrando capacidades avanzadas de procesamiento de lenguaje natural." },
      { titulo: "AlexNet revoluciona la visión por ordenador", descripcion: "Alex Krizhevsky gana ImageNet con AlexNet, una red neuronal profunda que reduce drásticamente la tasa de error en reconocimiento de imágenes." },
      { titulo: "Nacen las GANs", descripcion: "Ian Goodfellow inventa las Generative Adversarial Networks, permitiendo generar imágenes realistas por primera vez." },
      { titulo: "OpenAI se funda", descripcion: "Sam Altman, Elon Musk y otros fundan OpenAI con la misión de desarrollar IA segura y beneficiosa para la humanidad." },
      { titulo: "Attention Is All You Need", descripcion: "Google publica el artículo que introduce la arquitectura Transformer, la base de todos los modelos de lenguaje modernos (GPT, BERT, Claude, Gemini)." },
      { titulo: "BERT de Google", descripcion: "Google lanza BERT, un modelo de lenguaje preentrenado que revoluciona la comprensión del lenguaje natural." },
      { titulo: "Nace GPT", descripcion: "OpenAI lanza GPT-1, el primer modelo generativo preentrenado basado en transformers, con 117 millones de parámetros." },
      { titulo: "GPT-2: polémica y poder", descripcion: "OpenAI desarrolla GPT-2 con 1500 millones de parámetros. Inicialmente no lo publican por miedo a usos malintencionados, sentando un precedente ético importante." },
      { titulo: "GPT-3 y la API de OpenAI", descripcion: "OpenAI lanza GPT-3 con 175 000 millones de parámetros y una API comercial. Marca el inicio de la IA generativa accesible para el público." },
      { titulo: "Nace DALL-E", descripcion: "OpenAI presenta DALL-E, un modelo capaz de generar imágenes a partir de descripciones de texto." },
      { titulo: "GitHub Copilot", descripcion: "GitHub y OpenAI lanzan Copilot, un asistente de código con IA que revoluciona la programación asistida." },
      { titulo: "Stable Diffusion: IA gratuita para todos", descripcion: "Stability AI lanza Stable Diffusion, un generador de imágenes open source ejecutable localmente, democratizando la creación visual." },
      { titulo: "ChatGPT: la explosión masiva", descripcion: "OpenAI lanza ChatGPT basado en GPT-3.5. Alcanza 100 millones de usuarios en 2 meses, convirtiéndose en la aplicación de crecimiento más rápido de la historia." },
      { titulo: "GPT-4 multimodal", descripcion: "OpenAI lanza GPT-4 con capacidades multimodales (texto e imágenes). Es el modelo más potente del momento." },
      { titulo: "Claude de Anthropic", descripcion: "Anthropic lanza Claude, un asistente de IA con enfoque en seguridad y análisis profundo, compitiendo directamente con ChatGPT." },
      { titulo: "Gemini de Google", descripcion: "Google lanza Gemini, su modelo multimodal más potente con contexto de hasta 2 millones de tokens, integrado con el ecosistema Google." },
      { titulo: "Cursor: editor de código con IA", descripcion: "Cursor lanza su editor de código con IA nativa, compitiendo directamente con Copilot y redefiniendo la experiencia de programación asistida." },
      { titulo: "Llama 3: open source potente", descripcion: "Meta lanza Llama 3, un modelo open source competitivo con GPT-4, democratizando el acceso a modelos de alto rendimiento." },
      { titulo: "Sora: vídeo con IA", descripcion: "OpenAI presenta Sora, un modelo de generación de vídeo a partir de texto con calidad y realismo impresionantes." },
      { titulo: "DeepSeek irrumpe en el mercado", descripcion: "La empresa emergente china DeepSeek lanza un modelo competitivo con GPT-4 a una fracción del coste, revolucionando el mercado de APIs de IA." },
      { titulo: "Agentes autónomos de IA", descripcion: "Los agentes de IA capaces de ejecutar tareas complejas de forma autónoma se convierten en la tendencia dominante, con múltiples plataformas lanzando sus propias soluciones." },
      { titulo: "Contexto de 1M+ tokens", descripcion: "Gemini 2.0 y modelos competidores alcanzan ventanas de contexto de más de 1 millón de tokens, permitiendo procesar documentos del tamaño de novelas completas." },
      { titulo: "IA multimodal generalizada", descripcion: "La mayoría de los modelos principales son multimodales, integrando texto, imagen, audio y vídeo en una sola interfaz unificada. Atlas IA se consolida como plataforma educativa de referencia." },
    ],

    ecosistema: {
      categorias: {
        "asistente-conversacion": { nombre: "Asistentes de Conversación", descripcion: "Chatbots generales que responden preguntas y ayudan con tareas variadas" },
        codigo: { nombre: "Herramientas de Código", descripcion: "Asistentes para programar, depurar y desarrollar software" },
        imagen: { nombre: "Generación de Imágenes", descripcion: "Herramientas que crean imágenes a partir de texto o las editan" },
        "audio-video": { nombre: "Audio y Vídeo", descripcion: "IA para crear, editar o transformar audio y vídeo" },
        "no-code": { nombre: "Plataformas No-Code", descripcion: "Plataformas para crear aplicaciones y automatizaciones sin programar" },
        productividad: { nombre: "Productividad", descripcion: "Herramientas para organizar, resumir y trabajar más rápido" },
        investigacion: { nombre: "Investigación", descripcion: "Herramientas académicas y de búsqueda avanzada" },
      },
      precio: {
        gratis: "Gratis",
        freemium: "Freemium",
        pago: "Pago",
        dePago: "De pago",
      },
      herramientas: {
        chatgpt: {
          nombre: "ChatGPT",
          descripcion: "El asistente de IA más popular del mundo. Versátil, fácil de usar y con integración en múltiples plataformas.",
          caracteristicas: ["Conversación natural fluida", "Multimodal: texto, imágenes, audio", "GPT-4o con razonamiento avanzado", "Plugins y GPTs personalizados", "Integración con navegación web y código", "Memoria entre conversaciones"],
          idealPara: ["Uso general", "Preguntas rápidas", "Escritura creativa", "Análisis básico"],
          precioDetalle: "Gratis limitado, Plus $20/mes, Pro $200/mes",
          ventanaContexto: "128K tokens",
          fortalezaPrincipal: "Versatilidad y facilidad de uso",
          debilidadPrincipal: "Puede ser impreciso en análisis muy profundos",
        },
        claude: {
          nombre: "Claude",
          descripcion: "Conocido por su capacidad de análisis profundo y sus respuestas matizadas. Excelente con documentos largos.",
          caracteristicas: ["Ventana de contexto de 200K tokens", "Análisis profundo y detallado", "Excelente con código", "Mayor precisión y menos alucinaciones", "Modo de escritura cuidada", "Proyecto con documentos personalizados"],
          idealPara: ["Análisis de documentos", "Programación", "Escritura técnica", "Investigación"],
          precioDetalle: "Gratis limitado, Pro $20/mes",
          ventanaContexto: "200K tokens",
          fortalezaPrincipal: "Profundidad de análisis y precisión",
          debilidadPrincipal: "Menos integraciones de terceros",
        },
        gemini: {
          nombre: "Gemini",
          descripcion: "El asistente multimodal de Google con una ventana de contexto enorme e integración con todo el ecosistema Google.",
          caracteristicas: ["Contexto de hasta 2 millones de tokens", "Integrado con Google Workspace", "Excelente con imágenes y vídeo", "Acceso a información en tiempo real", "Búsqueda Google integrada", "Gemini Advanced con Deep Think"],
          idealPara: ["Documentos extensos", "Google Workspace", "Búsquedas", "Análisis multimodal"],
          precioDetalle: "Gratis limitado, Advanced $20/mes",
          ventanaContexto: "2M tokens",
          fortalezaPrincipal: "Contexto enorme y ecosistema Google",
          debilidadPrincipal: "A veces menos preciso en análisis detallado",
        },
        copilot: {
          nombre: "GitHub Copilot",
          descripcion: "El asistente de código más extendido. Se integra directamente en tu editor y sugiere código en tiempo real.",
          caracteristicas: ["Sugerencias de código en tiempo real", "Chat integrado en el editor", "Autocompletado inteligente", "Soporte para múltiples lenguajes", "Copilot X con multimodal", "Integración nativa con VS Code"],
          idealPara: ["Desarrolladores", "Aprendizaje de código", "Productividad en programación"],
          precioDetalle: "$10/mes individual, $19/mes business",
          ventanaContexto: "—",
          fortalezaPrincipal: "Integración directa en el editor",
          debilidadPrincipal: "Solo para código, no para otras tareas",
        },
        cursor: {
          nombre: "Cursor",
          descripcion: "Editor de código con IA integrada. Un VS Code potenciado con capacidades de IA nativas.",
          caracteristicas: ["Editor completo con IA nativa", "Composer para cambios en varios archivos", "Chat con contexto del proyecto", "Generación de código avanzada", "Modo agente para tareas complejas", "Basado en VS Code (compatible)"],
          idealPara: ["Desarrollo completo", "Proyectos grandes", "Refactorización"],
          precioDetalle: "Gratis limitado, Pro $20/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Profunda integración de la IA en la edición de código",
          debilidadPrincipal: "Requiere aprendizaje inicial",
        },
        dalle: {
          nombre: "DALL-E 3",
          descripcion: "Generador de imágenes integrado en ChatGPT. Crea imágenes a partir de descripciones detalladas.",
          caracteristicas: ["Generación desde texto detallado", "Integrado en ChatGPT", "Edición de imágenes", "Buena comprensión de prompts", "Estilos variados", "Uso comercial permitido"],
          idealPara: ["Ilustraciones", "Prototipos visuales", "Contenido para redes"],
          precioDetalle: "Incluido en ChatGPT Plus",
          ventanaContexto: "—",
          fortalezaPrincipal: "Fácil de usar con prompts en lenguaje natural",
          debilidadPrincipal: "Menos control preciso que Midjourney",
        },
        midjourney: {
          nombre: "Midjourney",
          descripcion: "Generador de imágenes de alta calidad artística. Conocido por su estética excepcional.",
          caracteristicas: ["Calidad artística superior", "Múltiples estilos artísticos", "Generación rápida", "Escalado de resolución avanzado", "Variaciones y remix", "Comunidad activa de Discord"],
          idealPara: ["Arte digital", "Conceptos visuales", "Diseño gráfico"],
          precioDetalle: "Planes desde $10/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Calidad estética excepcional",
          debilidadPrincipal: "Sin interfaz web completa (aún)",
        },
        "stable-diffusion": {
          nombre: "Stable Diffusion",
          descripcion: "Generador de imágenes open source. Ejecutable localmente con control total sobre el proceso.",
          caracteristicas: ["Completamente open source", "Ejecutable localmente", "Control total del proceso", "Múltiples interfaces (Automatic1111, ComfyUI)", "Modelos personalizables", "Sin costes de API"],
          idealPara: ["Desarrolladores", "Artistas técnicos", "Uso personalizado"],
          precioDetalle: "Gratis (necesitas hardware potente)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Gratuito y personalizable",
          debilidadPrincipal: "Requiere conocimientos técnicos",
        },
        elevenlabs: {
          nombre: "ElevenLabs",
          descripcion: "Plataforma líder en síntesis de voz con IA. Clonación de voz y generación de audio ultrarealista.",
          caracteristicas: ["Voces ultrarealistas", "Clonación de voz", "Multiidioma", "Audiolibros y pódcast", "API para desarrolladores", "Ajustes de emoción y tono"],
          idealPara: ["Pódcast", "Audiolibros", "Contenido audiovisual", "Accesibilidad"],
          precioDetalle: "Gratis limitado, planes desde $5/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Calidad de voz más realista del mercado",
          debilidadPrincipal: "Coste escalado para uso intensivo",
        },
        runway: {
          nombre: "Runway",
          descripcion: "Plataforma de creación de vídeo con IA. Desde generación hasta edición con Gen-3 Alpha.",
          caracteristicas: ["Generación de vídeo desde texto", "Edición de vídeo con IA", "Gen-3 Alpha de alta calidad", "Motion Brush para controlar el movimiento", "Integración con After Effects", "Herramientas de composición"],
          idealPara: ["Creadores de contenido", "Videógrafos", "Publicidad"],
          precioDetalle: "Gratis limitado, planes desde $12/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Edición de vídeo con IA avanzada",
          debilidadPrincipal: "Coste alto para uso profesional",
        },
        "notion-ai": {
          nombre: "Notion AI",
          descripcion: "IA integrada en Notion para escritura, organización y gestión del conocimiento.",
          caracteristicas: ["Resumen de documentos", "Generación de contenido", "Traducción integrada", "Búsqueda semántica", "Autocompletado inteligente", "Integración con bases de datos"],
          idealPara: ["Gestión de conocimiento", "Documentación", "Organización personal"],
          precioDetalle: "$10/mes por usuario (con Notion)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Integración perfecta con Notion",
          debilidadPrincipal: "Solo funciona dentro de Notion",
        },
        perplexity: {
          nombre: "Perplexity",
          descripcion: "Motor de búsqueda con IA que cita sus fuentes. Ideal para investigación profunda y verificable.",
          caracteristicas: ["Búsqueda con citas de fuentes", "Pro Search para preguntas complejas", "Modo Académico", "Imágenes y tablas en resultados", "Colaboración en espacios", "API para desarrolladores"],
          idealPara: ["Investigación", "Estudiantes", "Profesionales", "Periodismo"],
          precioDetalle: "Gratis limitado, Pro $20/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Citas verificables y transparencia",
          debilidadPrincipal: "Puede ser menos creativo que ChatGPT",
        },
        make: {
          nombre: "Make (ex-Integromat)",
          descripcion: "Plataforma visual de automatización. Conecta aplicaciones y crea flujos de trabajo complejos sin código.",
          caracteristicas: ["Automatización visual por escenarios", "Miles de integraciones", "Lógica condicional avanzada", "IA generativa integrada", "Plantillas predefinidas", "Ejecución en tiempo real"],
          idealPara: ["Automatización de procesos", "Marketing", "Emprendedores"],
          precioDetalle: "Gratis (1000 operaciones/mes), desde $9/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Flexibilidad visual sin código",
          debilidadPrincipal: "Curva de aprendizaje para escenarios complejos",
        },
      },
      criterios: {
        "facilidad-uso": {
          nombre: "Facilidad de uso",
          descripcion: "Cuán fácil es empezar a usar la herramienta",
          opciones: ["Principiante", "Intermedio", "Avanzado"],
        },
        "calidad-respuesta": {
          nombre: "Calidad de respuesta",
          descripcion: "Precisión y utilidad de las respuestas generadas",
          opciones: ["Básica", "Buena", "Excelente"],
        },
        velocidad: {
          nombre: "Velocidad",
          descripcion: "Cuán rápido genera respuestas",
          opciones: ["Lenta", "Media", "Rápida"],
        },
        precio: {
          nombre: "Precio",
          descripcion: "Relación calidad-precio",
          opciones: ["Caro", "Razonable", "Barato/Gratis"],
        },
        personalizacion: {
          nombre: "Personalización",
          descripcion: "Capacidad de adaptar la herramienta a necesidades concretas",
          opciones: ["Básica", "Media", "Alta"],
        },
      },
      arbol: {
        inicio: {
          pregunta: "¿Qué necesitas hacer?",
          descripcion: "Selecciona la tarea principal que quieres realizar",
          opciones: ["Conversar y hacer preguntas", "Programar o desarrollar software", "Crear imágenes o diseños", "Trabajar con audio o vídeo", "Automatizar procesos", "Investigar información"],
        },
        conversacion: {
          pregunta: "¿Qué tipo de conversación necesitas?",
          descripcion: "Cada asistente es mejor para unas tareas u otras",
          opciones: ["Respuestas rápidas y uso general", "Análisis profundo de documentos", "Acceder a información actualizada", "Investigación con fuentes verificadas"],
        },
        codigo: {
          pregunta: "¿Qué prefieres para programar?",
          descripcion: "Hay diferentes enfoques según tu estilo de trabajo",
          opciones: ["Sugerencias en mi editor actual", "Un editor completo con IA", "Asistente general para código"],
        },
        imagen: {
          pregunta: "¿Qué tipo de imágenes necesitas?",
          descripcion: "Cada herramienta tiene fortalezas diferentes en generación visual",
          opciones: ["Rápido y fácil desde texto", "Alta calidad artística", "Control total y gratuito"],
        },
        "audio-video": {
          pregunta: "¿Qué necesitas crear?",
          descripcion: "Las herramientas de IA para audio y vídeo están en rápida evolución",
          opciones: ["Voces y narración", "Vídeos con IA"],
        },
      },
    },

    prompting: {
      roles: {
        ninguno: { label: "Ninguno en particular", descripcion: "Sin rol específico" },
        profesor: { label: "Profesor / Educador", descripcion: "Explica conceptos de forma clara y didáctica" },
        periodista: { label: "Periodista / Escritor", descripcion: "Redacción clara, objetiva y bien estructurada" },
        abogado: { label: "Abogado / Asesor legal", descripcion: "Preciso, formal, basado en normativas" },
        cientifico: { label: "Científico / Investigador", descripcion: "Rigor académico, datos y referencias" },
        marketing: { label: "Experto en Marketing", descripcion: "Persuasivo, orientado a la conversión" },
        ceo: { label: "CEO / Directivo", descripcion: "Visión estratégica, ejecutiva y práctica" },
        desarrollador: { label: "Desarrollador / Programador", descripcion: "Técnico, preciso, con ejemplos de código" },
        creativo: { label: "Creativo / Diseñador", descripcion: "Original, visual, innovador" },
        psicologo: { label: "Psicólogo / Coach", descripcion: "Empático, comprensivo, orientado a las personas" },
      },
      formatos: {
        parrafos: { label: "Párrafos", descripcion: "Texto fluido en párrafos" },
        lista: { label: "Lista con viñetas", descripcion: "Puntos clave enumerados" },
        tabla: { label: "Tabla comparativa", descripcion: "Datos organizados en columnas" },
        pasos: { label: "Pasos / Instrucciones", descripcion: "Secuencia numerada de acciones" },
        email: { label: "Correo / Carta", descripcion: "Formato de correspondencia" },
        codigo: { label: "Código", descripcion: "Bloques de código con explicación" },
        esquema: { label: "Esquema / Outline", descripcion: "Estructura jerárquica de contenidos" },
        dialogo: { label: "Diálogo / Conversación", descripcion: "Formato de preguntas y respuestas" },
      },
      tonos: {
        profesional: { label: "Profesional", descripcion: "Formal y corporativo" },
        casual: { label: "Casual / Amigable", descripcion: "Cercano y natural" },
        divulgativo: { label: "Divulgativo", descripcion: "Claro para todos los públicos" },
        humoristico: { label: "Humorístico", descripcion: "Con sentido del humor" },
        inspirador: { label: "Inspirador / Motivacional", descripcion: "Que motive a la acción" },
        tecnico: { label: "Técnico / Especializado", descripcion: "Con jerga del sector" },
        formal: { label: "Formal / Serio", descripcion: "Muy formal, para documentos oficiales" },
      },
      audiencias: {
        general: { label: "Público general", descripcion: "Para cualquier persona" },
        principiante: { label: "Principiantes", descripcion: "Personas sin conocimiento previo" },
        profesional: { label: "Profesionales del sector", descripcion: "Con experiencia en el área" },
        ejecutivo: { label: "Ejecutivos / Directivos", descripcion: "Alta dirección" },
        estudiante: { label: "Estudiantes", descripcion: "En formación académica" },
        cliente: { label: "Clientes / Personas usuarias", descripcion: "Personas que usan tu producto" },
        ninos: { label: "Niños / Adolescentes", descripcion: "Audiencia joven" },
      },
      extensiones: {
        "muy-corta": { label: "Muy corta (< 50 palabras)", descripcion: "Respuesta breve" },
        corta: { label: "Corta (50-150 palabras)", descripcion: "Resumen conciso" },
        media: { label: "Media (150-300 palabras)", descripcion: "Extensión estándar" },
        larga: { label: "Larga (300-500 palabras)", descripcion: "Respuesta detallada" },
        "muy-larga": { label: "Muy larga (500+ palabras)", descripcion: "Análisis exhaustivo" },
      },
      generar: {
        eresUn: "Eres un {rol}.",
        contexto: "Contexto",
        enFormato: "en formato {x}",
        conTono: "con tono {x}",
        dirigidoA: "dirigido a {x}",
        responde: "Responde {especificaciones}.",
      },
    },

    badges: {
      "first-lesson": { nombre: "Primer paso", descripcion: "Completaste tu primera lección" },
      "five-lessons": { nombre: "Estudiante dedicado", descripcion: "Completaste 5 lecciones" },
      "ten-lessons": { nombre: "Explorador", descripcion: "Completaste 10 lecciones" },
      "twenty-five-lessons": { nombre: "Maestro del conocimiento", descripcion: "Completaste 25 lecciones" },
      "fifty-lessons": { nombre: "Erudito", descripcion: "Completaste 50 lecciones" },
      "seventy-five-lessons": { nombre: "Sabio de la IA", descripcion: "Completaste 75 lecciones" },
      "xp-100": { nombre: "Centenario", descripcion: "Acumulaste 100 XP" },
      "xp-500": { nombre: "Veterano", descripcion: "Acumulaste 500 XP" },
      "xp-1000": { nombre: "Leyenda", descripcion: "Acumulaste 1.000 XP" },
      "xp-2500": { nombre: "Inmortal", descripcion: "Acumulaste 2.500 XP" },
      "xp-5000": { nombre: "Dios de la IA", descripcion: "Acumulaste 5.000 XP" },
      "streak-7": { nombre: "Racha de fuego", descripcion: "7 días consecutivos de aprendizaje" },
      "streak-14": { nombre: "Racha imparable", descripcion: "14 días consecutivos de aprendizaje" },
      "streak-30": { nombre: "Leyenda viviente", descripcion: "30 días consecutivos de aprendizaje" },
      "ecosistema-complete": { nombre: "Explorador del ecosistema", descripcion: "Completaste todas las lecciones del Bloque 2" },
      "comparador-user": { nombre: "Comparador experto", descripcion: "Usaste el comparador interactivo de herramientas" },
      "arbol-decision": { nombre: "Decisión inteligente", descripcion: "Completaste el árbol de decisión de herramientas" },
      "prompting-complete": { nombre: "Maestro del prompt", descripcion: "Completaste todas las lecciones del Bloque 3" },
      "calculadora-prompts": { nombre: "Arquitecto de prompts", descripcion: "Usaste la calculadora de prompts" },
      "reto-diario": { nombre: "Asiduo", descripcion: "Completaste un reto diario" },
      "reto-semanal": { nombre: "Campeón semanal", descripcion: "Completaste un reto semanal" },
      "racha-3": { nombre: "Constante", descripcion: "Mantuviste una racha de 3 días" },
      "primer-proyecto": { nombre: "Arquitecto en prácticas", descripcion: "Completaste tu primer proyecto" },
      "tres-proyectos": { nombre: "Constructor", descripcion: "Completaste 3 proyectos" },
      "todos-proyectos": { nombre: "Maestro constructor", descripcion: "Completaste todos los proyectos" },
      "chat-ia": { nombre: "Explorador del laboratorio", descripcion: "Usaste el chat de IA en el laboratorio" },
      "agentes-complete": { nombre: "Arquitecto de agentes", descripcion: "Completaste todas las lecciones del Bloque 7" },
      "ia-docencia-complete": { nombre: "Educador IA", descripcion: "Completaste todas las lecciones del Bloque 4" },
      "ia-multimodal-complete": { nombre: "Explorador multimodal", descripcion: "Completaste todas las lecciones del Bloque 5" },
      "programacion-complete": { nombre: "Arquitecto de software", descripcion: "Completaste todas las lecciones del Bloque 6" },
      "etica-complete": { nombre: "Guardián ético", descripcion: "Completaste todas las lecciones del Bloque 8" },
      "laboratorio-complete": { nombre: "Científico de IA", descripcion: "Completaste todas las lecciones del Bloque 9" },
      "novedades-complete": { nombre: "Vanguardista", descripcion: "Completaste todas las lecciones del Bloque 10" },
      "ingeniero-prompts": { nombre: "Ingeniero de prompts", descripcion: "Usaste el entorno de prompts interactivo" },
      "arquitecto-flujos": { nombre: "Arquitecto de flujos", descripcion: "Creaste un flujo de agentes en AgentFlow" },
      "evaluador-modelos": { nombre: "Evaluador de modelos", descripcion: "Usaste el comparador de modelos" },
      "primer-quiz": { nombre: "Primer cuestionario", descripcion: "Completaste tu primer cuestionario" },
      "quiz-perfecto": { nombre: "Puntuación perfecta", descripcion: "Completaste un cuestionario con puntuación perfecta" },
      "quiz-maestro": { nombre: "Maestro del cuestionario", descripcion: "Completaste 10 cuestionarios" },
      "colaborador": { nombre: "Colaborador", descripcion: "Enviaste tu primera propuesta de mejora" },
      "curso-completo": { nombre: "Diploma", descripcion: "Completaste el curso completo de Atlas IA" },
    },

    retos: {
      "ch-daily-1": { title: "Una lección hoy", description: "Completa al menos 1 lección" },
      "ch-daily-2": { title: "Racha activa", description: "Visita la plataforma y completa una lección" },
      "ch-daily-3": { title: "Explora una herramienta", description: "Usa el comparador de herramientas" },
      "ch-weekly-1": { title: "3 lecciones esta semana", description: "Completa 3 lecciones en 7 días" },
      "ch-weekly-2": { title: "Prueba 3 herramientas", description: "Usa el comparador 3 veces" },
      "ch-weekly-3": { title: "Racha de 3 días", description: "Mantén una racha de 3 días consecutivos" },
    },

    proyectos: {
      "proyecto-1": { title: "Chatbot simple con prompts", description: "Diseña un prompt de sistema para un asistente de atención al cliente" },
      "proyecto-2": { title: "Análisis de sentimientos", description: "Usa IA para analizar el sentimiento de 10 reseñas de productos" },
      "proyecto-3": { title: "Generador de imágenes", description: "Crea una serie de 5 imágenes con DALL-E o Midjourney para una campaña" },
      "proyecto-4": { title: "Flujo de automatización", description: "Diseña un flujo de trabajo con Make o Zapier que use IA" },
      "proyecto-5": { title: "Agente RAG básico", description: "Construye un agente con recuperación de información usando prompts" },
      "proyecto-6": { title: "Comparativa de modelos", description: "Compara GPT-4, Claude y Gemini en una tarea específica y documenta resultados" },
    },
  },
};

export type Dictionary = typeof esDict;
