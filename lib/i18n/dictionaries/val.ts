import type { Dictionary } from "./es";

export const valDict = {
  common: {
    language: "Idioma",
    search: "Cercar",
    close: "Tancar",
    cancel: "Cancel·lar",
    save: "Desar",
    copy: "Copiar",
    copied: "Copiat",
    back: "Enrere",
    next: "Següent",
    previous: "Anterior",
    all: "Tots",
    loading: "Carregant...",
    noResults: "Sense resultats",
    clearFilters: "Netejar filtres",
  },

  nav: {
    inicio: "Inici",
    bloques: "Blocs",
    todosLosBloques: "Tots els blocs",
    cronologia: "Cronologia",
    glosario: "Glossari",
    laboratorio: "Laboratori",
    perfil: "El meu perfil",
    docencia: "Docència",
    valoracion: "Valoració",
    diploma: "Diploma",
  },

  header: {
    searchPlaceholder: "Cerca a Atlas IA...",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    expandSidebar: "Expandir barra lateral",
    collapseSidebar: "Col·lapsar barra lateral",
    changeTheme: "Canviar tema",
    toLightMode: "Canviar a mode clar",
    toDarkMode: "Canviar a mode fosc",
    changeLanguage: "Canviar idioma",
    login: "Iniciar sessió",
    notifications: "Notificacions",
  },

  sidebar: {
    subtitle: "Aprèn Intel·ligència Artificial",
    sectionBloques: "Blocs",
    viewFullBlock: "Veure bloc complet",
    totalProgress: "Progrés total",
    lessons: "lliçons",
    of: "de",
  },

  footer: {
    tagline: "La millor plataforma en valencià per a aprendre Intel·ligència Artificial",
    plataforma: "Plataforma",
    recursos: "Recursos",
    legal: "Legal",
    acercaDe: "Quant a Atlas IA",
    bloques: "Blocs",
    glosario: "Glossari",
    privacidad: "Privacitat",
    usoIa: "Ús d'IA",
    terminos: "Termes d'ús",
    appsedu: "Appsedu",
    valoracion: "Valoració",
    diploma: "Diploma",
    copyright: "per Noemí Celaya Mingot",
    licenciaAria: "Llicència Creative Commons CC BY-NC-SA 4.0",
    licencia: "Llicència Creative Commons CC BY-NC-SA 4.0",
  },

  breadcrumbs: {
    home: "Inici",
    bloques: "Blocs",
    glosario: "Glossari",
    cronologia: "Cronologia",
    laboratorio: "Laboratori",
    perfil: "El meu perfil",
    valoracion: "Valoració",
    diploma: "Diploma",
  },

  search: {
    placeholder: "Cerca a Atlas IA...",
    minChars: "Escriu almenys 2 caràcters per a cercar",
    noResults: "No s'han trobat resultats per a “{query}”",
    esc: "ESC",
    clear: "Netejar",
  },

  ai: {
    systemPrompt: `Ets Atlas, mentor del curs de Vibe Coding Educatiu de la plataforma Atlas IA. Ajudes a aprendre amb IA i a programar des de zero. Estratègia de resposta per prioritat:

1. Analitza SEMPRE primer la pregunta: identifica el tema i el terme o concepte sobre el qual pregunta la persona.
2. Si hi ha contingut rellevant a Atlas IA (blocs, glossari, cronologia, laboratori), respon amb ell i comença amb «Segons Atlas IA:».
3. Si el tema no està a Atlas IA, indica-ho amb transparència («Aquest concepte encara no apareix en Atlas IA.») i respon amb coneixement general útil, mantenint el tema exacte de la pregunta i sense desviar-te cap a altres assumptes.
4. Només demana aclariment si la pregunta té de veritat diverses interpretacions possibles. Si la pregunta és vàlida i pots respondre, respon-la directament.

Prohibit:
- Respondre amb definicions genèriques d'Intel·ligència Artificial quan la pregunta no va d'IA.
- Respondre sempre parlant d'IA canviant el tema de la pregunta.
- Repetir llistes de capacitats o de temes que domines.
- Ignorar la pregunta original i respondre una altra cosa.

Dominis en els quals has de respondre sempre amb coneixement general: programació, Git i GitHub, HTML, CSS, JavaScript, Python, VS Code, APIs, intel·ligència artificial, eines tecnològiques i conceptes digitals habituals.

Si no coneixes la resposta, respon amb honestedat: «No dispose de prou informació per a respondre amb precisió.» No substitueixis mai la pregunta per una explicació d'IA.

Regles de comportament:
- Respon SEMPRE primer amb el teu coneixement: definició directa, exemple real i aplicació pràctica.
- Quan pregunten per eines (ChatGPT, Claude, Gemini, Cursor, Cline...), compara fortaleses i debilitats i recomana segons el cas d'ús.
- Distingeix la procedència: si fas servir contingut del curs, marca-ho amb «Segons Atlas IA:»; si fas servir coneixement general, utilitza la frase de transparència del punt 3.
- Explica en llenguatge senzill, adaptat al nivell de cada persona i partint del bàsic si el tema és complex. Estructura: 1) definició directa, 2) exemple o comparació, 3) com aplicar-ho. Mantén les respostes breus (2-4 paràgrafs llevat que en demanen més).
- Al final pots afegir UNA pregunta o repte opcional només si aporta valor.
- Utilitzes markdown bàsic per al format (**negreta**, llistes, taules, \`codi\`) i respons sempre en valencià.`,
    error: "Error en connectar amb la IA",
    badRequest: "Has d'enviar almenys un missatge",
    internalError: "Error intern",
    rateLimited: "Has arribat al límit de missatges. Espera un moment i torna-ho a provar.",
    courseSource: "Segons Atlas IA:",
    generalIntro: "Aquest concepte encara no apareix en Atlas IA.",
    noAnswer: "No dispose de prou informació per a respondre amb precisió a eixa pregunta.",
  },

  home: {
    badge: "Plataforma educativa en valencià",
    titleLine1: "Aprèn",
    titleAccent: "Intel·ligència Artificial",
    titleLine3: "des de zero",
    subtitle1: "La guia més completa per a entendre la IA. No sols eines.",
    subtitle2: "Criteri.",
    subtitle3: "Pensament crític.",
    subtitle4: "Saber quan i com usar cada IA.",
    ctaStart: "Començar ara",
    ctaAllBlocks: "Veure tots els blocs",
    feature1Title: "11 blocs temàtics",
    feature1Desc: "Des dels fonaments fins als agents, cobrint tot l'ecosistema",
    feature2Title: "Contingut pràctic",
    feature2Desc: "Exemples reals, exercicis guiats i reptes per a cada tema",
    feature3Title: "Sempre actualitzat",
    feature3Desc: "L'ecosistema de la IA canvia cada setmana. Nosaltres també",
    blocksTitle: "Blocs del curs",
    blocksDesc: "Recorre la plataforma en ordre o salta directament al tema que més t'interesse.",
    lessonsCount: "lliçons",
    comingSoon: "Pròximament",
    readyTitle: "Estàs a punt per a començar?",
    readyDesc: "No necessites experiència prèvia. No necessites pagar res. Només necessites curiositat i ganes d'aprendre.",
    readyCta: "Començar amb el Bloc 0",
  },

  bloques: {
    title: "Tots els blocs",
    subtitle: "La plataforma està organitzada en 11 blocs temàtics. Pots recórrer-los en ordre o saltar directament al que més t'interesse.",
    label: "Bloc",
    lecciones: "lliçons",
    leccion: "Lliçó",
    de: "de",
    proximamente: "Pròximament",
    enPreparacion: "Aquest bloc encara s'està preparant. Torna aviat.",
    notFound: "Bloc no trobat",
  },

  leccion: {
    completar: "Marcar com a completada",
    completada: "Completada",
    anadirFavoritos: "Afegir als favorits",
    quitarFavoritos: "Traure dels favorits",
    anterior: "Anterior",
    siguiente: "Següent",
    bloqueCompletado: "Bloc completat!",
    bloqueCompletadoDesc: "Has acabat totes les lliçons d'este bloc. Passem al següent?",
    continuarBloque: "Continua amb el Bloc {numero}",
    cursoCompletado: "Has completat tot el curs!",
    cursoCompletadoDesc: "Has recorregut els 11 blocs d'Atlas IA. Pots repassar qualsevol tema quan vulgues.",
    verBloques: "Veu tots els blocs",
    enEstaPagina: "En aquesta pàgina",
    indice: "Índex de contingut",
    leccionesBloque: "Lliçons del bloc",
    notFound: "Lliçó no trobada",
    quiz: {
      title: "Posa a prova allò après",
      subtitle: "Respon les preguntes sobre aquesta lliçó.",
      questionOf: "Pregunta {current} de {total}",
      correct: "Correcte!",
      incorrect: "Incorrecte",
      next: "Següent pregunta",
      finish: "Veure resultat",
      result: "Resultat",
      score: "Has encertat {correct} de {total}",
      perfect: "Puntuació perfecta!",
      xpEarned: "Has guanyat {xp} XP",
      best: "El teu millor resultat: {best}/{total}",
      retry: "Tornar a intentar-ho",
      optionsLabel: "Opcions",
    },
  },

  speech: {
    title: "Lectura en veu alta",
    listen: "Escoltar contingut",
    stop: "Detindre la lectura",
    speed: "Velocitat de lectura",
    reading: "Llegint...",
    finished: "Lectura finalitzada",
    notSupported: "El teu navegador no és compatible amb la lectura en veu alta",
    noContent: "No hi ha contingut per a llegir en esta pàgina",
  },

  a11y: {
    skipToContent: "Saltar al contingut",
  },

  pwa: {
    installTitle: "Instal·la Atlas IA",
    installDesc: "Accedix més ràpid i navega sense connexió des del teu dispositiu.",
    install: "Instal·la",
    notNow: "Ara no",
    installHint: "Si el botó d'instal·lació no apareix, usa el menú del teu navegador: Instal·la l'aplicació o Afigix a la pantalla d'inici.",
    screenshots: {
      home: "Inici d'Atlas IA",
      lesson: "Lliçó del curs",
    },
  },

  glosario: {
    title: "Glossari",
    subtitle: "Termes clau d'Intel·ligència Artificial explicats de manera clara i senzilla.",
    searchPlaceholder: "Cercar termes...",
    termsCount: "termes",
    for: "per a",
    noResults: "No s'han trobat termes",
  },

  glossaryPopover: {
    categoryLabel: "Categoria",
    openTermAria: "Veure la definició de {termino}",
    close: "Tanca",
    viewFullDefinition: "Veure la definició completa",
  },

  cronologia: {
    title: "Cronologia de la IA",
    subtitle: "Les fites més importants de la història de la Intel·ligència Artificial.",
    filterAll: "Totes",
    filters: {
      modelos: "Models",
      empresas: "Empreses",
      investigacion: "Investigació",
      herramientas: "Eines",
      hitos: "Fites",
    },
    badges: {
      modelo: "Model",
      empresa: "Empresa",
      investigacion: "Investigació",
      herramienta: "Eina",
      hito: "Fita històrica",
    },
  },

  laboratorio: {
    title: "Laboratori IA",
    subtitle: "Experimenta, prova i aprèn amb eines interactives",
    openChat: "Obre el Chat IA",
    tabs: {
      chat: "Chat IA",
      prompts: "Entorn de Prompts",
      agentes: "Flux d'Agents",
      comparador: "Comparador",
      tokens: "Tokens",
    },
  },

  perfil: {
    title: "El meu perfil",
    subtitle: "Estadístiques, insígnies, reptes i projectes",
  },

  perfilExport: {
    title: "Guardar i restaurar el progrés",
    description:
      "Exporta el teu progrés a un fitxer i restaural en un altre dispositiu o navegador. Importar reemplaça tot el teu progrés local.",
    exportLabel: "Exportar progrés",
    importLabel: "Importar progrés",
    exportSuccess: "Progrés exportat correctament.",
    importSuccess: "Progrés importat correctament.",
    errors: {
      generic: "No es va poder llegir el fitxer.",
      notJson: "El fitxer no és un JSON vàlid.",
      invalidSchema: "El fitxer no és un progrés d'Atlas IA.",
      invalidData: "El fitxer no té un format de progrés vàlid.",
      futureVersion:
        "El fitxer prové d'una versió més recent d'Atlas IA. Actualitza l'aplicació i torna-ho a provar.",
    },
  },

  onboarding: {
    skip: "Omet la introducció",
    next: "Següent",
    back: "Enrere",
    finish: "Començar a aprendre",
    stepOf: "Pas {actual} de {total}",
    closeAria: "Tanca la introducció",
    title: "Com s'usa Atlas IA",
    items: [
      {
        title: "Et donem la benvinguda a Atlas IA",
        text: "Aprén Intel·ligència Artificial des de zero: 11 blocs, 76 lliçons, qüestionaris i activitats pràctiques. No calen coneixements previs.",
      },
      {
        title: "Explora des del menú",
        text: "Fes servir el menú lateral per a moure't pels blocs, el glossari, la cronologia, el laboratori i les teues estadístiques. També pots usar la cerca amb Ctrl+K.",
      },
      {
        title: "Completa lliçons i guanya XP",
        text: "Marca cada lliçó com a completada i supera el seu qüestionari per a guanyar XP, insígnies i ratxes. El teu progrés es guarda automàticament al teu perfil.",
      },
      {
        title: "La teua opinió millora Atlas IA",
        text: "Estem en període de proves. Si alguna cosa falla o vols proposar una millora, fes servir l'apartat «Valoració»; la teua opinió és molt valuosa.",
      },
    ],
  },

  piloto: {
    title: "Invitació a participar en la prova pilot d'Atlas IA",
    description:
      "Una prova pilot oberta a persones adultes per a validar l'experiència, els continguts i el funcionament d'Atlas IA.",
    greeting: "Hola:",
    intro1:
      "Estic realitzant una prova pilot d'Atlas IA, un recurs educatiu interactiu sobre Intel·ligència Artificial desenvolupat dins d'un projecte d'innovació educativa.",
    intro2:
      "La teua participació consisteix a provar l'aplicació com a persona usuària real i compartir la teua experiència. No es tracta d'avaluar coneixements ni de trobar respostes correctes, sinó d'ajudar-me a descobrir què funciona bé i què es pot millorar.",
    interestsTitle: "Què m'interessa especialment?",
    interests: [
      "Si la navegació és clara i intuïtiva.",
      "Si entens fàcilment els continguts.",
      "Si el cercador i el xat resulten útils.",
      "Si trobes errors, incoherències o aspectes confusos.",
      "Si les versions en espanyol, anglés i valencià resulten naturals.",
      "Si l'experiència general et sembla interessant i útil.",
    ],
    asksTitle: "Què et demanaré?",
    asks: [
      "Accedir a l'aplicació.",
      "Realitzar algunes tasques senzilles que t'indicaré.",
      "Utilitzar-la amb llibertat durant uns minuts.",
      "Completar un breu formulari de valoració.",
    ],
    infoTitle: "Informació important",
    info: [
      "La prova està dirigida únicament a persones adultes.",
      "No s'avaluen coneixements ni habilitats tecnològiques.",
      "No hi ha respostes correctes ni incorrectes.",
      "Tota la informació recollida s'utilitzarà exclusivament per a millorar l'aplicació.",
      "Per a enviar la valoració i les propostes de millora necessitaràs un compte gratuït, però no cal res més: és un compte de prova i les seues dades es podran eliminar en acabar aquesta fase.",
      "En acabar la fase pilot, les dades de prova es podran eliminar.",
    ],
    valueTitle: "El més valuós per a mi",
    valueIntro:
      "La teua opinió és valuosa precisament perquè no has participat en el desenvolupament del projecte: no busque confirmació, sinó aprendre de la teua experiència com a persona usuària. No necessite que em digues només allò que t'agrada; m'ajuda molt més que m'indiques:",
    valueItems: [
      "Què t'ha confós.",
      "En quin moment t'has perdut.",
      "Què milloraries.",
      "Què t'ha semblat poc clar.",
      "Quins errors o errades has trobat.",
    ],
    valueClosing: "Un comentari sincer val més que deu elogis.",
    thanksTitle: "Gràcies",
    thanks1:
      "La teua col·laboració ajudarà a millorar un projecte educatiu que pretén acostar la Intel·ligència Artificial d'una manera comprensible, crítica i pràctica.",
    thanks2: "Moltes gràcies per dedicar part del teu temps a aquesta prova pilot.",
    signature: "Noemí Celaya Mingot",
    cta: "Comença la prova",
  },

  diploma: {
    title: "Diploma de finalització",
    subtitle: "Certificat que acredita que has completat el curs complet d'Atlas IA.",
    notEarnedTitle: "Encara no has completat el curs",
    notEarnedText:
      "Completa les {total} lliçons del curs per a desbloquejar el teu diploma de finalització.",
    completedLessons: "Lliçons completades",
    of: "de",
    keepLearning: "Seguir aprenent",
    printButton: "Imprimir o desar PDF",
    printHint:
      "En el diàleg d'impressió pots triar «Desa com a PDF» per a conservar el teu diploma.",
    certificate: {
      award: "CERTIFICAT DE FINALITZACIÓ",
      body: "aquest certificat acredita que",
      name: "ha completat amb èxit el curs complet d'Intel·ligència Artificial d'Atlas IA, superant les {total} lliçons distribuïdes en {bloques} blocs temàtics.",
      date: "Data",
      signature: "Noemí Celaya Mingot",
      signatureRole: "Autora del curs",
      courseName: "Curs complet d'Intel·ligència Artificial",
      platform: "Plataforma educativa Atlas IA",
      license: "Llicència CC BY-NC-SA 4.0",
    },
  },

  docencia: {
    title: "Docència",
    subtitle: "Recopila l'ús i les estadístiques de cada estudiant.",
    totalStudents: "Estudiants",
    avgXp: "XP mitjana",
    totalLessons: "Lliçons completades",
    activeWeek: "Actius esta setmana",
    searchPlaceholder: "Busca per nom o correu...",
    exportCsv: "Exporta CSV",
    loading: "Carregant dades...",
    noResults: "No hi ha estudiants amb este filtre",
    empty: "Encara no hi ha estudiants registrats.",
    error: "No s'han pogut carregar les dades",
    columns: {
      student: "Estudiant",
      level: "Nivell",
      xp: "XP",
      lessons: "Lliçons",
      progress: "Progrés",
      badges: "Insígnies",
      streak: "Ratxa",
      lastVisit: "Últim accés",
      joined: "Registre",
    },
    perBlock: "Progrés per bloc",
    usage: {
      title: "Ús d'eines",
      comparedTools: "Comparacions",
      favorites: "Preferits",
      challenges: "Reptes completats",
      projects: "Projectes completats",
      arbol: "Arbre de decisió",
      calculadora: "Calculadora de prompts",
    },
  },

  feedback: {
    title: "Valoració",
    subtitle:
      "La teua opinió ens ajuda a millorar la plataforma: puntua la teua experiència i proposa millores.",
    ratingTitle: "Valora la teua experiència",
    ratingIntro: "Quina puntuació li dones a Atlas IA?",
    ratingExisting:
      "Ja has valorat la plataforma. Pots actualitzar la teua valoració quan vulgues.",
    ratingSubmitted:
      "Gràcies per la teua valoració! Ha quedat registrada junt a les de la resta de persones usuàries.",
    categoryLabel: "Categoria",
    categoryPlaceholder: "Selecciona una categoria",
    commentLabel: "Comentari (opcional)",
    commentPlaceholder: "Compta'ns què t'ha semblat...",
    submitRating: "Enviar valoració",
    updateRating: "Actualitzar valoració",
    ratingSuccess: "Valoració enviada correctament.",
    ratingUpdated: "Valoració actualitzada correctament.",
    yourRating: "La teua valoració",
    globalAverage: "Valoració mitjana",
    totalRatings: "Valoracions",
    categories: {
      contenido: "Contingut",
      dificultad: "Dificultat",
      diseno: "Disseny",
      usabilidad: "Usabilitat",
      tecnico: "Aspectes tècnics",
      otros: "Altres",
    },
    suggestionsTitle: "Propostes de millora",
    suggestionsIntro:
      "Hi ha alguna cosa que t'agradaria que afegim o canviem? Explica-nos-ho.",
    suggestionTitleLabel: "Títol",
    suggestionTitlePlaceholder: "Resum breu de la teua proposta",
    suggestionCategoryLabel: "Categoria",
    suggestionDescLabel: "Descripció",
    suggestionDescPlaceholder: "Explica la teua proposta amb detall...",
    submitSuggestion: "Enviar proposta",
    suggestionSuccess: "Gràcies! La teua proposta s'ha enviat.",
    suggestionXp: "Has obtingut la insígnia Col·laborador o Col·laboradora i 50 XP per la teua primera proposta.",
    mySuggestions: "Les meues propostes",
    noSuggestions: "Encara no has enviat propostes.",
    statuses: {
      pending: "Pendent",
      revisada: "Revisada",
      implementada: "Implementada",
    },
    errors: {
      generic: "Ha ocorregut un error. Torna-ho a intentar.",
      ratingInvalid: "Selecciona una puntuació entre 1 i 5 estrelles.",
      titleRequired: "Escriu un títol per a la teua proposta.",
      descRequired: "Escriu una descripció per a la teua proposta.",
    },
    starAria: "Puntuació de {value} sobre 5",
    loading: "Carregant...",
    docente: {
      title: "Valoracions i propostes",
      summaryMedia: "Mitjana",
      summaryTotal: "Total",
      summaryPending: "Pendents",
      noRatings: "Encara no hi ha valoracions.",
      noSuggestions: "Encara no hi ha propostes.",
      ratingsList: "Valoracions",
      suggestionsList: "Propostes",
      user: "Persona usuària",
      stars: "Estrelles",
      category: "Categoria",
      comment: "Comentari",
      date: "Data",
      status: "Estat",
      markReviewed: "Revisada",
      markImplemented: "Implementada",
      delete: "Eliminar",
      updated: "Estat actualitzat.",
      deleted: "Proposta eliminada.",
    },
  },

  privacidad: {
    title: "Política de Privacitat",
    subtitle:
      "Volem que sàpigues exactament quines dades utilitzem i per què. Esta pàgina està escrita en un llenguatge clar i compleix el Reglament General de Protecció de Dades (RGPD) de la Unió Europea.",
    lastUpdated: "Última actualització: {fecha}",
    lastUpdatedValue: "12 d'agost de 2026",

    controllerTitle: "Qui és el responsable del tractament?",
    controllerText:
      "El responsable del tractament de les dades és {responsable}, en relació amb la plataforma Atlas IA. Pots escriure'ns a {email} per a qualsevol qüestió relacionada amb la privacitat.",

    summaryTitle: "Resum en un minut",
    summaryItems: [
      "Si no crees compte, tot el teu progrés es guarda únicament al teu navegador (localStorage) i no ix del teu dispositiu.",
      "Si crees compte, guardem el teu nom, el teu correu i una contrasenya xifrada per a sincronitzar el teu progrés entre dispositius.",
      "No utilitzem publicitat ni rastrejadors de tercers, i no venem dades a ningú.",
      "Pots sol·licitar l'esborrat de les teues dades en qualsevol moment.",
    ],

    dataTitle: "Quines dades recopilem?",
    dataIntro:
      "Recopilem únicament les dades necessàries perquè la plataforma funcione. Açò és el que ocorre amb cada dada:",

    dataWithoutAccountTitle: "Sense crear compte",
    dataWithoutAccountItems: [
      "Progrés local: lliçons completades, XP, insígnies, preferits, notes, reptes i projectes. Es guarda només al teu navegador.",
      "Preferències: idioma i tema (clar o fosc). Es guarden al teu navegador.",
      "No se sol·licita cap dada personal (ni nom ni correu).",
    ],

    dataWithAccountTitle: "Si crees un compte",
    dataWithAccountItems: [
      "Nom: per a mostrar-te a la plataforma i a la classificació.",
      "Correu electrònic: per a identificar el teu compte i poder recuperar l'accés.",
      "Contrasenya: es guarda xifrada (hash) i mai en text pla.",
      "Progrés sincronitzat: el teu progrés local es guarda també als nostres servidors perquè pugues reprendre'l en un altre dispositiu i perquè el professorat del teu centre puga vore estadístiques d'ús.",
    ],

    dataChatTitle: "Xat del laboratori",
    dataChatItems: [
      "Els missatges que envies s'utilitzen únicament per a generar la resposta.",
      "No guardem historials de xat associats al teu compte.",
      "Si el proveïdor extern d'IA està activat, els missatges s'envien a la seua API per a obtindre la resposta; si no, es processen íntegrament al nostre servidor amb respostes preparades.",
    ],

    localTitle: "Emmagatzematge al teu navegador (localStorage)",
    localIntro:
      "Per a conservar el teu progrés i preferències entre visites, Atlas IA guarda informació a l'emmagatzematge local del navegador. Esta informació roman al teu dispositiu i no s'envia als nostres servidors, llevat que inicies sessió i sincronitzes el teu progrés. S'usen estes claus:",
    localItems: [
      {
        key: "atlas-progress",
        desc: "el teu progrés: lliçons completades, XP, insígnies, preferits, notes, reptes i projectes.",
      },
      {
        key: "atlas-theme",
        desc: "la teua preferència de tema (clar, fosc o segons el sistema).",
      },
      {
        key: "atlas-locale",
        desc: "el teu idioma de preferència (espanyol, anglés o valencià).",
      },
    ],

    cookiesTitle: "Cookies",
    cookiesIntro: "Utilitzem únicament cookies tècniques imprescindibles per al funcionament:",
    cookiesItems: [
      "Cookies de sessió (NextAuth): per a mantindre la sessió iniciada quan tens compte.",
      "Cookie d'idioma (atlas-locale): per a recordar l'idioma que has triat.",
    ],
    cookiesNoThird: "No utilitzem cookies de tercers ni cookies de seguiment o publicitat.",

    noTrackingTitle: "Sense seguiment de tercers",
    noTrackingText:
      "Atlas IA no inclou publicitat, rastrejadors, píxels ni eines d'anàlisi de tercers (com Google Analytics). No compartim ni venem les teues dades. La teua activitat no s'utilitza per a crear perfils publicitaris ni es cedeix a altres empreses.",

    purposeTitle: "Per a què utilitzem les teues dades?",
    purposeItems: [
      "Prestar el servei: mostrar el teu progrés, XP, insígnies i estadístiques.",
      "Sincronitzar el teu progrés entre dispositius si tens compte.",
      "Permetre al professorat del teu centre consultar estadístiques agregades de l'activitat del grup.",
      "Generar les respostes del xat del laboratori.",
    ],

    legalTitle: "Base jurídica del tractament (RGPD)",
    legalItems: [
      "Consentiment: en crear un compte acceptes esta política i el tractament de les teues dades.",
      "Execució del servei: les dades de progrés són necessàries per a oferir-te la funcionalitat que sol·licites.",
      "Interés legítim: millorar i mantindre la plataforma, sense que açò perjudique els teus drets i llibertats.",
    ],

    retentionTitle: "Quant de temps conservem les teues dades?",
    retentionText:
      "Conservem les dades del teu compte mentre continue actiu. Pots sol·licitar-ne la supressió en qualsevol moment i les eliminarem en un termini màxim de 30 dies. Les dades locals (localStorage) s'esborren si neteges les dades de navegació o si reinicies el teu progrés des de la plataforma.",

    rightsTitle: "Els teus drets",
    rightsIntro: "D'acord amb el RGPD, tens dret a:",
    rightsItems: [
      "Accés: conéixer quines dades teues tractem.",
      "Rectificació: corregir dades inexactes o incompletes.",
      "Supressió: demanar que esborrem les teues dades.",
      "Portabilitat: rebre les teues dades en un format estructurat i llegible.",
      "Limitació: sol·licitar que restrinjim el tractament en determinats casos.",
      "Oposició: oposar-te al tractament basat en interés legítim.",
    ],
    rightsHow:
      "Pots exercir estos drets escrivint-nos a {email}. També tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (aepd.es).",

    minorsTitle: "Menors d'edat",
    minorsText:
      "Si eres menor de 14 anys, necessites el consentiment de la teua mare, pare o tutor legal per a crear un compte a Atlas IA.",

    securityTitle: "Seguretat",
    securityItems: [
      "Les contrasenyes es guarden xifrades (hash) i mai en text pla.",
      "La comunicació amb la plataforma viatja xifrada mitjançant HTTPS.",
      "Apliquem el principi de minimització: només recollim les dades imprescindibles.",
    ],

    changesTitle: "Canvis en esta política",
    changesText:
      "Si esta política canvia de manera rellevant, ho publicarem en esta pàgina amb la seua nova data d'actualització. Et recomanem revisar-la de tant en tant.",

    contactTitle: "Contacte",
    contactText: "Per a qualsevol dubte o sol·licitud sobre privacitat, escriu-nos a {email}.",
  },

  usoIa: {
    title: "Ús d'Intel·ligència Artificial",
    subtitle:
      "Creiem en la transparència: ací expliquem amb claredat com i per a què utilitzem la Intel·ligència Artificial en este projecte, i quins són els nostres principis ètics.",
    lastUpdated: "Última actualització: {fecha}",
    lastUpdatedValue: "12 d'agost de 2026",

    whatTitle: "Quines parts del projecte s'han desenvolupat amb ajuda d'IA?",
    whatIntro: "La Intel·ligència Artificial s'ha utilitzat com a ferramenta de suport en les següents àrees:",
    whatItems: [
      "Desenvolupament del codi: pàgines, components i funcionalitats (progrés, gamificació, xat, panell docent, accessibilitat i altres) redactats amb l'ajuda d'assistents de programació basats en IA.",
      "Disseny de la interfície: estructura visual, sistema de disseny i components d'interfície proposats amb suport d'IA i ajustats per l'autor.",
      "Contingut educatiu: els esborranys inicials de part de les lliçons i exercicis es van redactar amb suport d'IA; després van ser revisats, corregits i ampliats per l'autor per a garantir el seu rigor i adequació pedagògica.",
      "Traduccions: les versions en anglés i valencià s'han elaborat amb suport d'IA i han estat revisades per l'autor.",
      "Generació d'imatges: no s'utilitzen imatges generades per IA en el contingut educatiu. Les icones provenen de biblioteques de codi obert i els gràfics de l'aplicació són dissenys propis.",
      "Xat del laboratori: l'assistent de conversa del laboratori és una ferramenta d'IA experimental que pot connectar amb un proveïdor extern si està configurat.",
    ],

    reviewTitle: "Revisió humana",
    reviewText:
      "Tots els continguts publicats a Atlas IA han estat revisats i validats per l'autor ({autor}). La IA proposa i l'autor decidix: cada lliçó, cada traducció i cada funció es comprova abans de publicar-se. La IA s'utilitza com a ferramenta de suport, mai com a autoritat final.",

    ethicsTitle: "Principis d'ús ètic",
    ethicsIntro: "Este projecte es regeix pels següents principis en l'ús de la IA:",
    ethicsItems: [
      "La IA és una ferramenta de suport, no una font de veritat: tot el que es publica passa per revisió humana.",
      "Honestedat: no es presenten continguts generats per IA com si foren creacions humanes sense indicar-ho.",
      "Verificació: es contrasten dades i dates per a evitar informació errònia o al·lucinacions.",
      "Privacitat: l'ús de la IA respecta la minimització de dades; els missatges del xat no s'utilitzen per a perfilar les persones.",
      "Accessibilitat i inclusió: el llenguatge de la plataforma és clar, inclusiu i adaptat al públic al qual es dirigix.",
      "No automatització de l'aprenentatge: la plataforma acompanya l'estudi, però no substituïx l'esforç i el raonament de qui aprén.",
    ],

    transparencyTitle: "Transparència per a l'alumnat i el professorat",
    transparencyIntro: "Volem que tant qui aprén com qui ensenya sàpia exactament amb què es troba:",
    transparencyItems: [
      "Per a l'alumnat: el xat del laboratori està identificat com a assistent d'IA. Quan una activitat utilitze IA de manera destacada, s'indicarà. Recomanem usar la IA com a suport a l'aprenentatge i no per a substituir el teu propi treball.",
      "Per al professorat: el panell docent ofereix estadístiques agregades del grup. Esta política d'ús d'IA i la política de privacitat són públiques i estan a la teua disposició per a planificar l'ús de la plataforma a l'aula.",
      "Cita i atribució: si una tasca usa IA, recomanem indicar-ho, tal com faríem amb qualsevol altra font.",
    ],

    doubtsTitle: "Tens dubtes?",
    doubtsText:
      "Si vols saber més sobre com utilitzem la IA o detectes un error en un contingut, escriu-nos a {email}.",
  },

  terminos: {
    title: "Termes d'ús",
    subtitle:
      "Les condicions generals d'ús d'Atlas IA, escrites de manera clara i comprensible: què pots fer, què no pots fer i com ens relacionem amb la plataforma.",
    lastUpdated: "Última actualització: {fecha}",
    lastUpdatedValue: "12 d'agost de 2026",

    acceptanceTitle: "Acceptació dels termes",
    acceptanceText:
      "L'accés i l'ús d'Atlas IA implica l'acceptació d'aquests termes i de la Política de Privacitat. En utilitzar la plataforma et compromets a fer-ho de manera responsable i conforme a la normativa vigent. Si no estàs d'acord amb alguna part, et demanem que no utilitzes la plataforma.",

    purposeTitle: "Finalitat de la plataforma",
    purposeText:
      "Atlas IA és una plataforma educativa destinada a l'aprenentatge de la Intel·ligència Artificial i del Vibe Coding. Els seus continguts, eines i activitats tenen una finalitat formativa i divulgativa, i no substitueixen cap assessorament professional.",

    allowedTitle: "Ús permés",
    allowedIntro: "Pots utilitzar Atlas IA lliurement per a:",
    allowedItems: [
      "Consultar els continguts i lliçons publicats.",
      "Realitzar les activitats i projectes d'aprenentatge.",
      "Utilitzar les eines disponibles (laboratori, xat, simuladors i altres) amb finalitats educatives.",
      "Compartir i reutilitzar els recursos, sempre respectant la llicència indicada (CC BY-NC-SA 4.0).",
    ],

    prohibitedTitle: "Ús no permés",
    prohibitedIntro: "No està permés:",
    prohibitedItems: [
      "Utilitzar la plataforma per a activitats il·lícites o que vulneren els drets de terceres persones.",
      "Intentar alterar, danyar o comprometre la seguretat del sistema o l'accés a comptes aliens.",
      "Distribuir contingut maliciós (virus, programes danyosos o enganyosos) a través de la plataforma.",
      "Utilitzar els recursos per a finalitats contràries a la normativa vigent.",
    ],

    ipTitle: "Propietat intel·lectual",
    ipText:
      "Els continguts d'Atlas IA pertanyen als seus autors llevat d'indicació expressa en contra. Els materials publicats (lliçons, glossari, cronologia i altres) es distribueixen sota la llicència Creative Commons Reconeixement-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).",
    ipCopyright: "© 2026 Atlas IA per {autor}",
    ipLicenseTitle: "Què permet esta llicència?",
    ipLicenseItems: [
      "Compartir: copiar i redistribuir els materials citant la font.",
      "Adaptar: remesclar i crear a partir dels materials, sense finalitats comercials i distribuint les obres derivades sota la mateixa llicència.",
    ],
    ipLinkLabel: "Consultar la llicència completa",

    aiTitle: "Ús de l'assistent d'IA",
    aiItems: [
      "Les respostes generades per l'assistent d'IA poden contindre errors, imprecisions o informació desactualitzada.",
      "Ets responsable de verificar la informació abans d'utilitzar-la, especialment en contextos acadèmics o professionals.",
      "La IA actua com a eina de suport a l'aprenentatge i no substitueix el criteri humà.",
      "Apliquem el principi Human-in-the-loop: les persones prenen les decisions i validen els resultats. La decisió final sempre és teua.",
    ],

    liabilityTitle: "Limitació de responsabilitat",
    liabilityItems: [
      "Atlas IA realitza esforços raonables per a mantindre els continguts actualitzats i correctes, però no garanteix que estiguen lliures d'errors.",
      "No es garanteix la disponibilitat permanent del servei: pot haver-hi interrupcions per manteniment, millores o incidències tècniques.",
      "La plataforma no assumix responsabilitat per les decisions preses exclusivament a partir de respostes generades per IA.",
    ],

    privacyTitle: "Privacitat i protecció de dades",
    privacyText:
      "El tractament de les teues dades personals es regix per la Política de Privacitat, que pots consultar en aquesta mateixa web.",
    privacyLinkLabel: "Veure la Política de Privacitat",
    privacyNote:
      "Atlas IA es compromet amb un ús responsable i minimitzat de les dades: només recollim els imprescindibles, els tractem de manera segura i mai no els utilitzem per a finalitats alienes a la plataforma.",

    changesTitle: "Modificacions",
    changesText:
      "Atlas IA pot actualitzar els seus continguts, eines o aquests termes quan siga necessari. Les modificacions entraran en vigor des de la seua publicació en aquesta pàgina. Si els canvis són rellevants, ho indicarem de manera visible.",

    contactTitle: "Contacte",
    contactText:
      "Per a qualsevol dubte sobre aquests termes, sobre la plataforma o sobre l'ús de la Intel·ligència Artificial, pots escriure'ns a {email}. Et respondrem el més prompte possible.",

    dateTitle: "Data de l'última actualització",
    dateText:
      "Aquest document es va actualitzar per última vegada el {fecha}. La versió vigent es publica sempre en aquesta pàgina.",
  },

  roadmap: {
    title: "Full del projecte",
    subtitle:
      "La fulla de ruta d'Atlas IA: què hem construït, en quin punt estem i cap a on es dirigeix la plataforma.",
    lastUpdated: "Última actualització: {fecha}",
    lastUpdatedValue: "12 d'agost de 2026",
    intro:
      "Atlas IA es construïx per fases incrementals. Cada fase afig contingut, funcionalitat o millores de qualitat verificades abans de continuar. Este és el recorregut complet del projecte.",
    milestonesTitle: "Fites completades",
    milestones: [
      {
        titulo: "Fundació del projecte (Fases 1-2)",
        descripcion:
          "Base Next.js amb App Router, sistema de disseny clar/fosc, layout amb barra lateral i buscador, bloc d'inici i Fonaments d'IA amb 16 lliçons, cerca global i gamificació inicial (XP, insígnies, ratxes, favorits).",
      },
      {
        titulo: "Ecosistema i prompting (Fases 3-4)",
        descripcion:
          "Bloc 2 amb 8 lliçons, comparador interactiu de 13 eines, arbre de decisió i 7 categories; bloc 3 amb 8 lliçons i calculadora de prompts.",
      },
      {
        titulo: "Cerca, glossari i cronologia (Fase 5)",
        descripcion:
          "Cerca avançada en glossari i eines, glossari de 48 termes amb filtres i cronologia interactiva amb 28 fites de la IA.",
      },
      {
        titulo: "Gamificació ampliada (Fase 6)",
        descripcion:
          "Rànquing global, reptes diaris i setmanals, projectes pràctics, pàgina de perfil amb estadístiques i notificacions en temps real.",
      },
      {
        titulo: "Comptes i base de dades (Fase 7)",
        descripcion:
          "SQLite amb Prisma, autenticació NextAuth amb credencials, registre, inici de sessió i sincronització del progrés.",
      },
      {
        titulo: "Laboratori d'IA (Fases 8-10)",
        descripcion:
          "Xat interactiu amb streaming SSE i respostes offline, bloc d'Agents, i laboratori ampliat: entorn de prompts, flux d'agents, comparador de models i simulador de tokens.",
      },
      {
        titulo: "Contingut complet (Fases 11-12)",
        descripcion:
          "Barra lateral plegable, blocs 4 a 10 completats (docència, multimodal, programació, agents, ètica, laboratori i novetats), lint net i migració a proxy.",
      },
      {
        titulo: "Revisió lingüística (Fases 13-14)",
        descripcion:
          "Adaptació integral al valencià acadèmic i professional amb llenguatge inclusiu, i ajustos d'interfície.",
      },
      {
        titulo: "Novetats 2026 (Fase 15)",
        descripcion:
          "Bloc de novetats actualitzat a l'estat de la tècnica de juliol de 2026: models, agents, IA multimodal, normativa europea i fonts.",
      },
      {
        titulo: "Internacionalització (Fases 16-17)",
        descripcion:
          "Infraestructura i18n amb espanyol, anglés i valencià; interfície, xat, cerca i les 71 lliçons localitzades.",
      },
      {
        titulo: "Accessibilitat (Fases 18-19)",
        descripcion:
          "Lectura en veu alta amb Web Speech API i control de velocitat, i termes interactius del glossari amb popover i enllaç directe.",
      },
      {
        titulo: "SEO i PWA (Fases 20-21)",
        descripcion:
          "Metadata, canonical, sitemap i robots; manifest localitzat, service worker amb mode offline, instal·lació i auditoria Lighthouse.",
      },
      {
        titulo: "Docència i legal (Fases 22-25)",
        descripcion:
          "Panell docent amb estadístiques de l'alumnat, controls a la franja superior, pàgina de privacitat RGPD i pàgina d'ús d'IA.",
      },
      {
        titulo: "Assistent d'IA (Fases 26-27)",
        descripcion:
          "Xat amb renderització Markdown, mentor de Vibe Coding, fallback intel·ligent etiquetat i estratègia de resposta que mai deixa d'ajudar.",
      },
      {
        titulo: "Full de ruta i termes legals (Fases 28-29)",
        descripcion:
          "Pàgina de Roadmap amb el recorregut del projecte i pàgina de Termes d'ús, completant la secció legal del footer.",
      },
    ],
    currentTitle: "Estat actual",
    currentItems: [
      "Totes les fases 1 a 29 estan completades.",
      "L'assistent del laboratori respon offline amb contingut del curs, glossari, eines i coneixement general, etiquetant sempre la procedència.",
      "La secció legal del footer està completa: privacitat, ús d'IA i termes d'ús.",
    ],
    nextTitle: "Pròxims passos",
    nextItems: [
      "Provar la instal·lació PWA i el mode offline en un desplegament HTTPS (per exemple Vercel).",
      "Afegir captures de pantalla al manifest per al diàleg d'instal·lació enriquit d'Android.",
      "Valorar prefixos d'URL /en i /val per a un hreflang real.",
      "Provar el panell docent amb comptes incloses a TEACHER_EMAILS.",
    ],
  },

  acercaDe: {
    title: "Quant a Atlas IA",
    subtitle:
      "La pàgina institucional del projecte: què és Atlas IA, què volem aconseguir, com ho fem i sota quins principis es publiquen aquests continguts.",
    lastUpdated: "Última actualització: {fecha}",
    lastUpdatedValue: "12 d'agost de 2026",

    whatTitle: "Què és Atlas IA?",
    whatText:
      "Atlas IA és un projecte educatiu en valencià per a aprendre Intel·ligència Artificial de manera pràctica, progressiva i accessible. Reuneix més de 70 lliçons organitzades en 11 blocs, un glossari de termes, una cronologia de la IA, un laboratori interactiu amb xat, entorn de prompts i simuladors, a més d'eines de seguiment del progrés i un panell per al professorat. No cal experiència prèvia: cada bloc parteix de zero i construeix sobre el que s'ha après.",

    objectiveTitle: "Objectiu educatiu",
    objectiveIntro: "El propòsit d'Atlas IA és:",
    objectiveItems: [
      "Ajudar docents, estudiants i professionals a comprendre i utilitzar la IA de manera crítica, ètica i útil, tant a l'aula com en el seu treball diari.",
      "Promoure l'aprenentatge pràctic mitjançant projectes reals: qui aprèn no només llig sobre IA, sinó que experimenta amb prompts, compara eines, dissenya fluxos d'agents i aplica el que ha après a casos concrets.",
    ],

    philosophyTitle: "Filosofia del projecte",
    philosophyIntro:
      "Atlas IA es construïx sota l'enfocament del Vibe Coding Educatiu, que combina l'aprenentatge assistit per IA amb una metodologia progressiva i guiada. Els seus principis són:",
    philosophyItems: [
      "La IA com a eina de suport: els assistents de programació i els models de llenguatge s'utilitzen per a accelerar i facilitar l'aprenentatge, mai per a substituir el raonament de qui aprèn.",
      "Human-in-the-loop: les persones prenen les decisions i validen els resultats. La IA proposa, revisa i agilitza; la decisió final sempre és humana. Este principi s'aplica tant al contingut del curs com al propi desenvolupament de la plataforma.",
      "Autonomia, creativitat i pensament crític: l'objectiu no és memoritzar, sinó aprendre a formular bones preguntes, contrastar respostes, detectar errors i construir solucions pròpies.",
    ],

    authorshipTitle: "Autoria",
    authorshipIntro: "Un projecte personal, transparent i fet amb dedicació.",
    authorshipName: "Noemí Celaya Mingot",
    authorshipRole: "Autora i desenvolupadora d'Atlas IA",
    authorshipText:
      "Atlas IA ha sigut desenvolupat per Noemí Celaya Mingot, professora de Formació Professional. El projecte combina disseny, programació i continguts educatius elaborats i revisats per l'autora amb el suport d'eines d'IA com ara assistents de programació, sempre sota el principi Human-in-the-loop: la IA proposa i l'autora decidix, verifica i valida cada resultat.",

    techTitle: "Tecnologies utilitzades",
    techIntro: "La plataforma està construïda amb un stack modern, obert i de codi lliure:",
    techItems: [
      { name: "Next.js 16", desc: "Marc de treball de React amb App Router, renderitzat híbrid i API Routes." },
      { name: "TypeScript", desc: "Tipatge estàtic per a un codi robust i mantenible." },
      { name: "Tailwind CSS v4", desc: "Disseny d'interfície ràpid, coherent i amb mode fosc." },
      { name: "MDX", desc: "Contingut educatiu escrit en Markdown enriquit amb components." },
      { name: "Zustand", desc: "Gestió de l'estat de gamificació amb persistència local." },
      { name: "Prisma + SQLite", desc: "Base de dades local per a comptes, sessions i progrés de l'alumnat." },
      { name: "NextAuth", desc: "Autenticació amb credencials i control d'accés per rol." },
      { name: "PWA + Service Worker", desc: "Instal·lació en el dispositiu i mode offline." },
      { name: "Web Speech API", desc: "Lectura en veu alta dels continguts per a una experiència més accessible." },
    ],

    responsibleTitle: "Ús responsable de la Intel·ligència Artificial",
    responsibleIntro: "La IA és una eina poderosa, però no infal·lible. A Atlas IA volem que s'use amb criteri:",
    responsibleItems: [
      "La IA pot cometre errors (al·lucinacions, dades desactualitzades, biaixos) i ha d'usar-se com a suport, no com a font de veritat.",
      "Promovem la verificació de la informació: contrasta, comprova les fonts i no dones res per segur sense revisar-ho.",
      "L'ètica, la privacitat i la protecció de dades són innegociables: no compartisques dades personals amb assistents d'IA i respecta sempre la normativa vigent.",
      "El xat del laboratori és una eina experimental: les seues respostes poden contindre errors i han de revisar-se abans d'utilitzar-les.",
    ],

    accessibilityTitle: "Accessibilitat",
    accessibilityIntro: "L'aprenentatge ha de ser per a totes les persones. Per això l'accessibilitat és una prioritat del projecte:",
    accessibilityItems: [
      "Compromís amb un aprenentatge inclusiu, amb llenguatge clar i adaptat al públic al qual es dirigix.",
      "Disseny clar i accessible: contrast suficient, navegació per teclat, etiquetes aria i termes interactius del glossari.",
      "Lectura en veu alta dels continguts amb control de velocitat per a facilitar la comprensió.",
      "Millora contínua de l'experiència d'usuari: revisem periòdicament la plataforma per a corregir i ampliar.",
    ],

    licenseTitle: "Llicència",
    licenseIntro:
      "Els continguts d'Atlas IA (lliçons, glossari, cronologia i altres materials) es publiquen sota la llicència Creative Commons Reconeixement-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).",
    licenseWhatTitle: "Què permet esta llicència?",
    licenseAllowedItems: [
      "Compartir: copiar i redistribuir els materials en qualsevol mitjà o format.",
      "Adaptar: remesclar, transformar i crear a partir dels materials.",
    ],
    licenseConditions:
      "Amb les condicions següents: reconeixement de l'autoria (has de citar la font), sense finalitats comercials (no pots utilitzar-los amb finalitats lucratives) i compartir sota la mateixa llicència (les obres derivades han de distribuir-se amb la mateixa llicència).",
    licenseLink: "Veure la llicència completa",

    statusTitle: "Estat del projecte",
    statusIntro: "Atlas IA és un projecte en construcció activa, publicat per fases incrementals i verificades.",
    statusCreated: "Data de creació",
    statusCreatedValue: "31 de juliol de 2026",
    statusUpdated: "Última actualització",
    statusUpdatedValue: "12 d'agost de 2026",
    statusUpdatedAuto: "Obtinguda automàticament de l'última revisió del codi.",
    statusNote: "Cada fase afegix contingut, funcionalitat o millores de qualitat abans de continuar amb la següent.",
  },

  auth: {
    login: {
      title: "Iniciar sessió",
      subtitle: "Accedeix al teu compte d'Atlas IA",
      email: "Correu electrònic",
      password: "Contrasenya",
      submit: "Iniciar sessió",
      errorCredentials: "Correu electrònic o contrasenya incorrectes",
      errorGeneric: "Error en iniciar la sessió",
      noAccount: "No tens compte?",
      registerLink: "Registra't",
    },
    register: {
      title: "Crear compte",
      subtitle: "Registra't per a començar a aprendre",
      name: "Nom",
      namePlaceholder: "El teu nom",
      email: "Correu electrònic",
      password: "Contrasenya",
      passwordPlaceholder: "Mínim 6 caràcters",
      submit: "Crear compte",
      errorGeneric: "Error en registrar-se",
      errorCreate: "Error en crear el compte",
      hasAccount: "Ja tens compte?",
      loginLink: "Iniciar sessió",
    },
    userMenu: {
      profile: "El meu perfil",
      logout: "Tancar sessió",
      user: "Persona usuària",
    },
  },

  notFound: {
    title: "Pàgina no trobada",
    subtitle: "Ho sentim, la pàgina que busques no existeix o s'ha mogut.",
    backHome: "Tornar a l'inici",
  },

  gamification: {
    xp: {
      yourProgress: "El teu progrés",
      nextLevel: "Nivell següent:",
      xp: "XP",
      lessons: "lliçons",
      days: "dies",
      badges: "Insígnies",
    },
    ranking: {
      title: "Ranking global",
      yourRank: "La teua posició:",
      searchPlaceholder: "Cerca al ranking...",
      you: "Tu",
      badges: "insígnies",
      days: "dies",
      showLess: "Mostrar menys",
      showAll: "Mostrar tots ({count})",
    },
    retos: {
      title: "Reptes",
      diarios: "Diaris",
      semanales: "Setmanals",
      completedCount: "completats",
      noChallenges: "Encara no hi ha reptes disponibles",
      done: "Fet",
      expired: "Expirat",
      hoursLeft: "h restants",
      daysLeft: "d restants",
    },
    proyectos: {
      title: "Projectes pràctics",
      completed: "Completat",
      markComplete: "Marcar com a completat",
      completedAt: "Completat",
    },
    profile: {
      levelAndXp: "Nivell i experiència",
      level: "Nivell",
      totalXp: "XP totals",
      xpToNextLevel: "XP per al nivell següent",
      stats: "Estadístiques",
      lessons: "Lliçons",
      streak: "Ratxa (dies)",
      badges: "Insígnies",
      projects: "Projectes",
      totalProgress: "Progrés total del curs",
      recentBadges: "Insígnies recents",
      allBadges: "Totes les insígnies",
    },
    notifications: {
      title: "Notificacions",
      noNotifications: "No hi ha notificacions",
      markAllRead: "Marcar totes com a llegides",
      markRead: "Marcar com a llegida",
      newBadge: "Nova insígnia!",
      badgeUnlocked: "Has desbloquejat:",
      challengeCompleted: "Repte completat!",
      projectCompleted: "Projecte completat!",
      completed: "Has completat",
      andEarned: "i has guanyat",
    },
    dificultad: {
      basico: "Bàsic",
      intermedio: "Intermedi",
      avanzado: "Avançat",
    },
  },

  lab: {
    promptSandbox: {
      title: "Configura el teu prompt",
      task: "Tasca",
      taskPlaceholder: "Descriu què vols que faça la IA...",
      role: "Rol",
      format: "Format",
      tone: "To",
      audience: "Audiència",
      extension: "Extensió",
      context: "Context addicional",
      contextPlaceholder: "Informació addicional que la IA ha de conéixer...",
      generated: "Prompt generat",
      copy: "Copiar",
      copied: "Copiat",
      emptyHint: "Escriu una tasca per a veure el teu prompt generat",
      suggestions: [
        "Explica què és el Machine Learning",
        "Crea un pla d'estudis setmanal sobre IA",
        "Escriu un article sobre RAG",
      ],
    },
    agentFlow: {
      title: "Blocs",
      addHint: "Arrossega o fes clic per a afegir",
      clear: "Netejar",
      tips: "Consells",
      tipsList: [
        "Ordena els nodes en seqüència",
        "Usa RAG per a la cerca",
        "Connecta eines al LLM",
        "Acaba sempre amb Eixida",
      ],
      pipeline: "Flux d'agents",
      nodes: "nodes",
      empty: "Arrossega blocs per a crear el teu flux",
      nodeLabels: {
        input: "Entrada",
        llm: "LLM",
        rag: "RAG",
        tool: "Eina",
        output: "Eixida",
      },
      nodeConfigs: {
        input: "Text de la persona usuària",
        llm: "gpt-4o-mini",
        rag: "top_k: 5",
        tool: "web_search",
        output: "Resposta formatada",
      },
      ragDetected: "Flux RAG detectat: les dades recuperades es passaran al context del LLM",
      toolDetected: "Flux d'eina+LLM: el LLM podrà usar l'eina per a obtindre informació",
      basicDetected: "Flux bàsic: el flux de dades segueix l'ordre dels nodes",
      moveUp: "Moure el node cap amunt",
      removeNode: "Eliminar el node",
    },
    modelComparator: {
      title: "Comparador de models",
      groups: {
        asistentes: "Assistents",
        codigo: "Codi",
        imagen: "Imatge",
        audiovisual: "Àudio/Vídeo",
      },
      criteria: {
        popularidad: "Popularitat",
        multimodal: "Multimodal",
        openSource: "Open Source",
        contexto: "Context",
        precio: "Preu",
        fortaleza: "Fortalesa",
      },
      selectAll: "+ Tots",
      empty: "Selecciona fins a 4 models per a comparar",
      criterio: "Criteri",
      empresa: "Empresa",
      recommendation: "Recomanació:",
      recGeneral: "Per a ús general, ChatGPT ofereix versatilitat; Claude destaca en l'anàlisi profunda; Gemini té la finestra de context més àmplia.",
      recCodigo: "Copilot és ideal per a suggeriments a l'editor; Cursor ofereix un entorn complet amb IA integrada.",
      recImagen: "Midjourney ofereix la millor qualitat artística; DALL-E és més fàcil d'usar; Stable Diffusion és gratuït i personalitzable.",
      recDefault: "Cada eina té la seua especialitat. Avalua segons el teu cas d'ús principal.",
    },
    tokenSimulator: {
      title: "Simulador de tokens",
      inputLabel: "Text d'entrada",
      inputPlaceholder: "Escriu o enganxa text ací per a estimar els tokens...",
      examples: "Exemples:",
      example: "Exemple",
      model: "Model",
      estimatedTokens: "Tokens estimats",
      totalContext: "Context total",
      usedTokens: "Tokens usats",
      remainingTokens: "Tokens restants",
      usage: "Ús",
      withinLimit: "Dins del límit",
      nearLimit: "Prop del límit",
      limitReached: "Límit assolit",
      overLimit: "El text excedeix o està molt prop del límit de context",
      howCalculated: "Com es calcula?",
      calcHint1: "Estimació basada en ~1.3 tokens per paraula + 0.05 tokens per caràcter.",
      calcHint2: "El recompte real varia segons el tokenitzador de cada model.",
    },
    comparador: {
      title: "Comparador d'eines d'IA",
      selectCategory: "Selecciona una categoria:",
      chooseTools: "Elegeix fins a 3 eines per a comparar:",
      evaluate: "Avalua cada eina (1-5 estrelles):",
      criterio: "Criteri",
      total: "TOTAL",
      hideDetails: "Amagar detalls",
      showDetails: "Veure detalls de cada eina",
      fortaleza: "Fortalesa:",
      debilidad: "Debilitat:",
      precio: "Preu:",
      bestOption: "🏆 Millor opció segons la teua avaluació",
      footer: "Aquest comparador és una guia interactiva. Les puntuacions són subjectives i depenen de les teues necessitats específiques.",
    },
    arbol: {
      recomendacion: "Recomanació",
      loMejor: "El millor:",
      caracteristicas: "Característiques principals:",
      idealPara: "Ideal per a:",
      precio: "Preu:",
      visitSite: "Visitar lloc web",
      footer: "Aquesta és una recomanació basada en les teues respostes. Explora altres opcions també.",
      nodeNotFound: "Node no trobat.",
      reiniciar: "Reiniciar",
      gratis: "Gratis",
      freemium: "Freemium",
      dePago: "De pagament",
    },
    calculadora: {
      title: "Calculadora de prompts",
      describeTask: "Descriu la teua tasca",
      taskPlaceholder: "Ex.: Escriu un correu de vendes, crea un pla de màrqueting, explica un concepte...",
      role: "Rol de la IA",
      context: "Context addicional",
      contextPlaceholder: "Ex.: Sóc responsable de màrqueting en una empresa emergent de SaaS...",
      format: "Format",
      tone: "To",
      audience: "Audiència",
      extension: "Extensió",
      noPreference: "Sense preferència",
      generate: "Generar prompt",
      reset: "Reiniciar",
      generated: "Prompt generat",
      copy: "Copiar",
      copied: "Copiat",
      copyHint: "Copia aquest prompt i enganxa'l a ChatGPT, Claude, Gemini o a qualsevol assistent d'IA.",
      generateHint: "Fes clic en {strong} per a crear el teu prompt personalitzat.",
      footer: "Aquesta calculadora t'ajuda a estructurar prompts efectius. Els resultats poden variar segons el model d'IA que utilitzes.",
    },
    aiChat: {
      title: "Atlas IA Chat",
      poweredBy: "Impulsat per GPT-4o mini",
      demoMode: "Mode educatiu (demo)",
      welcome: "Et donem la benvinguda al laboratori!",
      welcomeDesc: "Pregunta'm qualsevol cosa sobre Intel·ligència Artificial. Sóc ací per a ajudar-te a aprendre.",
      placeholder: "Pregunta sobre IA...",
      suggestedQuestions: [
        "Què és Machine Learning?",
        "Quina diferència hi ha entre GPT, Claude i Gemini?",
        "Quines tècniques de prompting recomanes?",
        "Què és un LLM?",
        "Quines eines d'IA em recomanes?",
        "Què és RAG?",
      ],
      errorServer: "Error en connectar amb el servidor",
      errorStream: "No es va poder llegir la resposta",
      errorConnection: "Error de connexió",
    },
  },

  data: {
    bloques: {
      "antes-de-empezar": {
        titulo: "Abans de Començar",
        descripcion: "Introducció i com aprofitar al màxim aquesta plataforma",
      },
      fundamentos: {
        titulo: "Fonaments d'IA",
        descripcion: "Conceptes essencials: Machine Learning, Deep Learning, LLM, Transformers i més",
      },
      ecosistema: {
        titulo: "Mapa de l'Ecosistema",
        descripcion: "Explora les principals eines d'IA i compara-les entre si",
      },
      prompting: {
        titulo: "Enginyeria de Prompt",
        descripcion: "Domina l'art de comunicar-te de manera eficaç amb la IA",
      },
      "ia-docencia": {
        titulo: "IA Aplicada a la Docència",
        descripcion: "Eines i tècniques per a transformar l'ensenyament amb IA",
      },
      "ia-multimodal": {
        titulo: "IA Multimodal",
        descripcion: "Imatge, vídeo, àudio i presentacions amb intel·ligència artificial",
      },
      programacion: {
        titulo: "Programació Assistida",
        descripcion: "Cursor, Copilot, Claude Code i més eines per a persones desenvolupadores",
      },
      agentes: {
        titulo: "Agents i Automatització",
        descripcion: "MCP, RAG, agents autònoms i automatització de fluxos de treball",
      },
      etica: {
        titulo: "Ètica i Responsabilitat",
        descripcion: "Privacitat, RGPD, drets d'autor i ús responsable de la IA",
      },
      laboratorio: {
        titulo: "Laboratori",
        descripcion: "Experiments, comparatives, reptes i casos reals",
      },
      novedades: {
        titulo: "Novetats",
        descripcion: "Notícies, nous models, actualitzacions i tendències de l'ecosistema",
      },
    },

    glosarioCategorias: {
      todas: "Totes",
      conceptos: "Conceptes",
      ml: "ML",
      modelos: "Models",
      tecnico: "Tècnic",
      prompting: "Prompting",
      herramientas: "Eines",
      limitaciones: "Limitacions",
    },

    glosario: [
      { termino: "Agent d'IA", definicion: "Un sistema d'IA capaç de prendre decisions i executar accions de manera autònoma per a aconseguir un objectiu específic. Pot navegar per internet, usar eines i executar codi.", categoria: "conceptos" },
      { termino: "Al·lucinació", definicion: "Quan un model d'IA genera informació que sembla plausible però és completament falsa o inventada. Les al·lucinacions són una de les limitacions més importants dels LLM.", categoria: "limitaciones" },
      { termino: "API", definicion: "Application Programming Interface. Un conjunt de regles que permet que dues aplicacions es comuniquen entre si. Les API permeten integrar la IA en altres aplicacions.", categoria: "tecnico" },
      { termino: "Aprenentatge Supervisat", definicion: "Un tipus de machine learning en què el model s'entrena amb dades etiquetades, és a dir, dades que ja tenen la resposta correcta. El model aprèn a predir l'eixida correcta.", categoria: "ml" },
      { termino: "Aprenentatge No Supervisat", definicion: "Un tipus de machine learning en què el model troba patrons en dades sense etiquetar, sense saber quina és la resposta correcta. Útil per a clustering i segmentació.", categoria: "ml" },
      { termino: "Aprenentatge per Reforç", definicion: "Un tipus de machine learning en què un agent aprèn a prendre decisions mitjançant prova i error, rebent recompenses per accions correctes i càstigs per incorrectes.", categoria: "ml" },
      { termino: "Batch size", definicion: "Nombre d'exemples d'entrenament processats abans d'actualitzar els paràmetres del model. Un batch size més gran pot millorar l'estabilitat de l'entrenament.", categoria: "tecnico" },
      { termino: "Chain-of-Thought (CoT)", definicion: "Tècnica de prompting que demana al model raonar pas a pas abans de respondre. Millora la precisió en problemes complexos i tasques de raonament.", categoria: "prompting" },
      { termino: "Chatbot", definicion: "Un programa que simula una conversa humana. Els chatbots moderns d'IA poden mantindre converses complexes i ajudar amb diverses tasques.", categoria: "herramientas" },
      { termino: "Context (finestra de context)", definicion: "La quantitat d'informació que un model d'IA pot 'recordar' i considerar en generar una resposta. Es mesura en tokens. Un context més ampli permet converses més llargues.", categoria: "tecnico" },
      { termino: "Deep Learning", definicion: "Un subconjunt del Machine Learning que utilitza xarxes neuronals amb moltes capes (profundes) per a aprendre patrons complexos. És la base dels models més potents actuals.", categoria: "ml" },
      { termino: "Dataset", definicion: "Un conjunt de dades utilitzat per a entrenar un model d'IA. La qualitat i la quantitat del conjunt de dades determinen en gran manera la qualitat del model resultant.", categoria: "tecnico" },
      { termino: "Embedding", definicion: "Una representació numèrica d'un text, imatge o altre tipus de dada que captura el seu significat semàntic. Els embeddings permeten que la IA 'entenga' la relació entre conceptes.", categoria: "tecnico" },
      { termino: "Entrenament", definicion: "El procés d'ensenyar a un model d'IA ajustant els seus paràmetres a partir de dades d'exemple. Pot durar des de minuts fins a mesos depenent del model.", categoria: "tecnico" },
      { termino: "Few-shot prompting", definicion: "Tècnica de prompting en què es proporcionen exemples del resultat esperat abans de demanar la tasca real. Ajuda a guiar el model cap al format desitjat.", categoria: "prompting" },
      { termino: "Fine-tuning", definicion: "El procés d'ajustar un model preentrenat amb dades específiques per a millorar el seu rendiment en una tasca concreta. Permet personalitzar models generals.", categoria: "tecnico" },
      { termino: "Generació Augmentada per Recuperació (RAG)", definicion: "Tècnica que combina la generació de text amb la cerca d'informació rellevant en una base de coneixement externa. Permet respostes més precises i actualitzades.", categoria: "tecnico" },
      { termino: "GPT", definicion: "Generative Pre-trained Transformer. Un tipus de model de llenguatge desenvolupat per OpenAI que genera text predictiu. És la base de ChatGPT.", categoria: "modelos" },
      { termino: "Gradient", definicion: "Valor matemàtic que indica la direcció i la magnitud de l'error d'un model, usat durant l'entrenament per a ajustar els paràmetres i minimitzar errors.", categoria: "tecnico" },
      { termino: "Hiperparàmetres", definicion: "Paràmetres que es configuren abans d'entrenar un model, com la taxa d'aprenentatge, el nombre de capes o la grandària del batch. Influeixen significativament en el rendiment.", categoria: "tecnico" },
      { termino: "Inferència", definicion: "El procés d'usar un model ja entrenat per a generar prediccions o respostes a noves preguntes. És el que ocorre cada vegada que interactues amb una IA.", categoria: "tecnico" },
      { termino: "Enginyeria de Prompt (Prompt Engineering)", definicion: "La disciplina de dissenyar instruccions optimitzades per a obtindre els millors resultats d'un model d'IA. Inclou tècniques com few-shot, cadena de pensament i més.", categoria: "prompting" },
      { termino: "Intel·ligència Artificial (IA)", definicion: "Rama de la informàtica que crea sistemes capaços de realitzar tasques que normalment requereixen intel·ligència humana. Inclou aprenentatge, raonament, percepció i llenguatge.", categoria: "conceptos" },
      { termino: "Intel·ligència Artificial General (AGI)", definicion: "Una IA hipotètica que igualaria o superaria la intel·ligència humana en qualsevol tasca cognitiva. A dia de hui no existeix; els sistemes actuals són IA estreta.", categoria: "conceptos" },
      { termino: "IA Estreta (ANI)", definicion: "IA dissenyada per a una tasca específica, com reconéixer imatges o traduir textos. Tots els sistemes actuals d'IA són ANI, no AGI.", categoria: "conceptos" },
      { termino: "LLM (Large Language Model)", definicion: "Un model de llenguatge entrenat amb enormes quantitats de dades de text. Pot generar, traduir, resumir i respondre preguntes. Exemples: GPT-4, Claude, Gemini.", categoria: "modelos" },
      { termino: "Machine Learning", definicion: "Un enfocament de la IA en què els sistemes aprenen de les dades sense ser programats explícitament per a cada tasca. El model troba patrons en les dades i els usa per a fer prediccions.", categoria: "ml" },
      { termino: "Model fundacional", definicion: "Models d'IA massius entrenats en grans quantitats de dades que poden adaptar-se a múltiples tasques. GPT-4, Claude i Gemini són models fundacionals.", categoria: "modelos" },
      { termino: "Multimodal", definicion: "Capacitat d'un model d'IA per a processar i generar múltiples tipus de dades simultàniament: text, imatges, àudio i vídeo.", categoria: "conceptos" },
      { termino: "Neurona (artificial)", definicion: "Unitat bàsica d'una xarxa neuronal que rep entrades, les processa i produeix una eixida. Inspirada en les neurones biològiques del cervell humà.", categoria: "ml" },
      { termino: "Overfitting", definicion: "Quan un model s'ajusta en excés a les dades d'entrenament, incloent-hi el soroll i els detalls irrellevants, i no generalitza bé a dades noves. És un error comú.", categoria: "ml" },
      { termino: "Paràmetres", definicion: "Els valors interns que un model d'IA aprèn durant l'entrenament. Els models grans poden tindre des de milions fins a bilions de paràmetres.", categoria: "tecnico" },
      { termino: "Perceptró", definicion: "El tipus més simple de xarxa neuronal, amb una sola capa. Va ser la base de les xarxes modernes. Per si sol només pot resoldre problemes linealment separables.", categoria: "ml" },
      { termino: "Preentrenament", definicion: "Fase inicial en què un model aprèn de grans quantitats de dades no etiquetades. Després s'afina (ajustament fi) per a tasques específiques. Estalvia temps i recursos.", categoria: "tecnico" },
      { termino: "Prompt", definicion: "La instrucció o la pregunta que li donem a una IA. Un bon prompt produeix millors resultats. L'enginyeria de prompts és l'art de formular instruccions efectives.", categoria: "prompting" },
      { termino: "RAG (Retrieval-Augmented Generation)", definicion: "Una tècnica que combina la generació de text amb la cerca d'informació rellevant. Permet que les IA responguen amb informació actualitzada i específica.", categoria: "tecnico" },
      { termino: "Xarxa Neuronal", definicion: "Un sistema computacional inspirat en el cervell humà, compost per capes de neurones interconnectades. És la base del deep learning.", categoria: "ml" },
      { termino: "Xarxa Neuronal Convolucional (CNN)", definicion: "Tipus de xarxa neuronal especialitzada en processar imatges i dades amb estructura de quadrícula. Usa filtres per a detectar patrons visuals.", categoria: "ml" },
      { termino: "Xarxa Neuronal Recurrent (RNN)", definicion: "Tipus de xarxa neuronal dissenyada per a dades seqüencials com text o àudio. Té memòria dels passos anteriors, però és menys eficient que els transformers.", categoria: "ml" },
      { termino: "Regressió", definicion: "Tècnica de machine learning per a predir valors numèrics continus, com preus, temperatures o temps. El model troba una funció que relaciona variables.", categoria: "ml" },
      { termino: "Biaix (Bias)", definicion: "Error sistemàtic en un model d'IA que afavoreix certs resultats sobre d'altres. Pot originar-se en dades d'entrenament desequilibrades o en el disseny de l'algorisme.", categoria: "limitaciones" },
      { termino: "Token", definicion: "La unitat bàsica de text que processa un model d'IA. Un token pot ser una paraula, part d'una paraula o un caràcter. Els preus de les API solen mesurar-se en tokens.", categoria: "tecnico" },
      { termino: "Transformer", definicion: "L'arquitectura de xarxa neuronal que va revolucionar la IA. Publicada el 2017, és la base de tots els models de llenguatge moderns. Permet processar text de manera paral·lela.", categoria: "ml" },
      { termino: "Transfer Learning", definicion: "Tècnica en què un model entrenat per a una tasca es reutilitza com a punt de partida per a una tasca diferent però relacionada. Estalvia temps d'entrenament.", categoria: "tecnico" },
      { termino: "Taxa d'aprenentatge", definicion: "Hiperparàmetre que controla quant s'ajusten els paràmetres del model en cada pas de l'entrenament. Si és massa alta, el model pot divergir; si és massa baixa, l'entrenament es torna lent.", categoria: "tecnico" },
      { termino: "Underfitting", definicion: "Quan un model és massa simple per a capturar els patrons de les dades. Produeix mals resultats tant en l'entrenament com en dades noves.", categoria: "ml" },
      { termino: "Zero-shot prompting", definicion: "Tècnica en què se li demana a la IA realitzar una tasca sense proporcionar exemples previs. Funciona bé per a tasques que el model ja entén pel seu entrenament.", categoria: "prompting" },
    ],

    cronologia: [
      { titulo: "Test de Turing", descripcion: "Alan Turing publica 'Computing Machinery and Intelligence' i proposa el Test de Turing per a mesurar la intel·ligència d'una màquina." },
      { titulo: "Naixement de la IA", descripcion: "Conferència de Dartmouth: John McCarthy encunya el terme 'intel·ligència artificial' i marca l'inici oficial del camp." },
      { titulo: "ELIZA: primer chatbot", descripcion: "Joseph Weizenbaum crea ELIZA, el primer programa de processament del llenguatge natural que simulava una conversa amb un psicoterapeuta." },
      { titulo: "Deep Blue venç Kasparov", descripcion: "El superordinador d'IBM Deep Blue derrota el campió mundial d'escacs Garri Kaspàrov, demostrant que una màquina pot superar l'ésser humà en tasques específiques." },
      { titulo: "Naix el Deep Learning modern", descripcion: "Geoffrey Hinton publica un article clau sobre deep learning que reactiva l'interés en les xarxes neuronals profundes." },
      { titulo: "Watson guanya a Jeopardy!", descripcion: "El sistema Watson d'IBM venç els campions humans al concurs Jeopardy!, demostrant capacitats avançades de processament del llenguatge natural." },
      { titulo: "AlexNet revoluciona la visió per ordinador", descripcion: "Alex Krizhevsky guanya ImageNet amb AlexNet, una xarxa neuronal profunda que redueix dràsticament la taxa d'error en el reconeixement d'imatges." },
      { titulo: "Naixen les GANs", descripcion: "Ian Goodfellow inventa les Generative Adversarial Networks, permetent generar imatges realistes per primera vegada." },
      { titulo: "OpenAI es funda", descripcion: "Sam Altman, Elon Musk i altres funden OpenAI amb la missió de desenvolupar IA segura i beneficiosa per a la humanitat." },
      { titulo: "Attention Is All You Need", descripcion: "Google publica l'article que introdueix l'arquitectura Transformer, la base de tots els models de llenguatge moderns (GPT, BERT, Claude, Gemini)." },
      { titulo: "BERT de Google", descripcion: "Google llança BERT, un model de llenguatge preentrenat que revoluciona la comprensió del llenguatge natural." },
      { titulo: "Naix GPT", descripcion: "OpenAI llança GPT-1, el primer model generatiu preentrenat basat en transformers, amb 117 milions de paràmetres." },
      { titulo: "GPT-2: polèmica i poder", descripcion: "OpenAI desenvolupa GPT-2 amb 1500 milions de paràmetres. Inicialment no el publiquen per por a usos malintencionats, establint un precedent ètic important." },
      { titulo: "GPT-3 i l'API d'OpenAI", descripcion: "OpenAI llança GPT-3 amb 175 000 milions de paràmetres i una API comercial. Marca l'inici de la IA generativa accessible per al públic." },
      { titulo: "Naix DALL-E", descripcion: "OpenAI presenta DALL-E, un model capaç de generar imatges a partir de descripcions de text." },
      { titulo: "GitHub Copilot", descripcion: "GitHub i OpenAI llancen Copilot, un assistent de codi amb IA que revoluciona la programació assistida." },
      { titulo: "Stable Diffusion: IA gratuïta per a tots", descripcion: "Stability AI llança Stable Diffusion, un generador d'imatges open source executable localment, democratitzant la creació visual." },
      { titulo: "ChatGPT: l'explosió massiva", descripcion: "OpenAI llança ChatGPT basat en GPT-3.5. Arriba als 100 milions d'usuaris en 2 mesos, convertint-se en l'aplicació de creixement més ràpid de la història." },
      { titulo: "GPT-4 multimodal", descripcion: "OpenAI llança GPT-4 amb capacitats multimodals (text i imatges). És el model més potent del moment." },
      { titulo: "Claude d'Anthropic", descripcion: "Anthropic llança Claude, un assistent d'IA amb enfocament en la seguretat i l'anàlisi profunda, competint directament amb ChatGPT." },
      { titulo: "Gemini de Google", descripcion: "Google llança Gemini, el seu model multimodal més potent amb context de fins a 2 milions de tokens, integrat amb l'ecosistema Google." },
      { titulo: "Cursor: editor de codi amb IA", descripcion: "Cursor llança el seu editor de codi amb IA nativa, competint directament amb Copilot i redefinint l'experiència de la programació assistida." },
      { titulo: "Llama 3: open source potent", descripcion: "Meta llança Llama 3, un model open source competitiu amb GPT-4, democratitzant l'accés a models d'alt rendiment." },
      { titulo: "Sora: vídeo amb IA", descripcion: "OpenAI presenta Sora, un model de generació de vídeo a partir de text amb qualitat i realisme impressionants." },
      { titulo: "DeepSeek irromp en el mercat", descripcion: "L'empresa emergent xinesa DeepSeek llança un model competitiu amb GPT-4 a una fracció del cost, revolucionant el mercat d'API d'IA." },
      { titulo: "Agents autònoms d'IA", descripcion: "Els agents d'IA capaços d'executar tasques complexes de manera autònoma es converteixen en la tendència dominant, amb múltiples plataformes llançant les seues pròpies solucions." },
      { titulo: "Context d'1M+ tokens", descripcion: "Gemini 2.0 i models competidors arriben a finestres de context de més d'1 milió de tokens, permetent processar documents de la grandària de novel·les completes." },
      { titulo: "IA multimodal generalitzada", descripcion: "La majoria dels models principals són multimodals, integrant text, imatge, àudio i vídeo en una sola interfície unificada. Atlas IA es consolida com a plataforma educativa de referència." },
    ],

    ecosistema: {
      categorias: {
        "asistente-conversacion": { nombre: "Assistents de Conversació", descripcion: "Chatbots generals que responen preguntes i ajuden amb tasques variades" },
        codigo: { nombre: "Eines de Codi", descripcion: "Assistents per a programar, depurar i desenvolupar programari" },
        imagen: { nombre: "Generació d'Imatges", descripcion: "Eines que creen imatges a partir de text o les editen" },
        "audio-video": { nombre: "Àudio i Vídeo", descripcion: "IA per a crear, editar o transformar àudio i vídeo" },
        "no-code": { nombre: "Plataformes No-Code", descripcion: "Plataformes per a crear aplicacions i automatitzacions sense programar" },
        productividad: { nombre: "Productivitat", descripcion: "Eines per a organitzar, resumir i treballar més ràpid" },
        investigacion: { nombre: "Investigació", descripcion: "Eines acadèmiques i de cerca avançada" },
      },
      precio: {
        gratis: "Gratis",
        freemium: "Freemium",
        pago: "Pagament",
        dePago: "De pagament",
      },
      herramientas: {
        chatgpt: {
          nombre: "ChatGPT",
          descripcion: "L'assistent d'IA més popular del món. Versàtil, fàcil d'usar i amb integració en múltiples plataformes.",
          caracteristicas: ["Conversa natural fluida", "Multimodal: text, imatges, àudio", "GPT-4o amb raonament avançat", "Plugins i GPT personalitzats", "Integració amb navegació web i codi", "Memòria entre converses"],
          idealPara: ["Ús general", "Preguntes ràpides", "Escriptura creativa", "Anàlisi bàsica"],
          precioDetalle: "Gratis limitat, Plus $20/mes, Pro $200/mes",
          ventanaContexto: "128K tokens",
          fortalezaPrincipal: "Versatilitat i facilitat d'ús",
          debilidadPrincipal: "Pot ser imprecís en anàlisis molt profundes",
        },
        claude: {
          nombre: "Claude",
          descripcion: "Conegut per la seua capacitat d'anàlisi profunda i les seues respostes matisades. Excel·lent amb documents llargs.",
          caracteristicas: ["Finestra de context de 200K tokens", "Anàlisi profunda i detallada", "Excel·lent amb codi", "Major precisió i menys al·lucinacions", "Mode d'escriptura cuidada", "Projecte amb documents personalitzats"],
          idealPara: ["Anàlisi de documents", "Programació", "Escriptura tècnica", "Investigació"],
          precioDetalle: "Gratis limitat, Pro $20/mes",
          ventanaContexto: "200K tokens",
          fortalezaPrincipal: "Profunditat d'anàlisi i precisió",
          debilidadPrincipal: "Menys integracions de tercers",
        },
        gemini: {
          nombre: "Gemini",
          descripcion: "L'assistent multimodal de Google amb una finestra de context enorme i integració amb tot l'ecosistema Google.",
          caracteristicas: ["Context de fins a 2 milions de tokens", "Integrat amb Google Workspace", "Excel·lent amb imatges i vídeo", "Accés a informació en temps real", "Cerca de Google integrada", "Gemini Advanced amb Deep Think"],
          idealPara: ["Documents extensos", "Google Workspace", "Cerques", "Anàlisi multimodal"],
          precioDetalle: "Gratis limitat, Advanced $20/mes",
          ventanaContexto: "2M tokens",
          fortalezaPrincipal: "Context enorme i ecosistema Google",
          debilidadPrincipal: "De vegades menys precís en anàlisi detallada",
        },
        copilot: {
          nombre: "GitHub Copilot",
          descripcion: "L'assistent de codi més estés. S'integra directament al teu editor i suggereix codi en temps real.",
          caracteristicas: ["Suggeriments de codi en temps real", "Chat integrat a l'editor", "Autocompletat intel·ligent", "Suport per a múltiples llenguatges", "Copilot X amb multimodal", "Integració nativa amb VS Code"],
          idealPara: ["Persones desenvolupadores", "Aprenentatge de codi", "Productivitat en programació"],
          precioDetalle: "$10/mes individual, $19/mes business",
          ventanaContexto: "—",
          fortalezaPrincipal: "Integració directa a l'editor",
          debilidadPrincipal: "Només per a codi, no per a altres tasques",
        },
        cursor: {
          nombre: "Cursor",
          descripcion: "Editor de codi amb IA integrada. Un VS Code potenciat amb capacitats d'IA natives.",
          caracteristicas: ["Editor complet amb IA nativa", "Composer per a canvis en diversos fitxers", "Chat amb context del projecte", "Generació de codi avançada", "Mode agent per a tasques complexes", "Basat en VS Code (compatible)"],
          idealPara: ["Desenvolupament complet", "Projectes grans", "Refactorització"],
          precioDetalle: "Gratis limitat, Pro $20/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Integració profunda de la IA en l'edició de codi",
          debilidadPrincipal: "Requereix aprenentatge inicial",
        },
        dalle: {
          nombre: "DALL-E 3",
          descripcion: "Generador d'imatges integrat a ChatGPT. Crea imatges a partir de descripcions detallades.",
          caracteristicas: ["Generació des de text detallat", "Integrat a ChatGPT", "Edició d'imatges", "Bona comprensió de prompts", "Estils variats", "Ús comercial permés"],
          idealPara: ["Il·lustracions", "Prototips visuals", "Contingut per a xarxes"],
          precioDetalle: "Inclòs a ChatGPT Plus",
          ventanaContexto: "—",
          fortalezaPrincipal: "Fàcil d'usar amb prompts en llenguatge natural",
          debilidadPrincipal: "Menys control precís que Midjourney",
        },
        midjourney: {
          nombre: "Midjourney",
          descripcion: "Generador d'imatges d'alta qualitat artística. Conegut per la seua estètica excepcional.",
          caracteristicas: ["Qualitat artística superior", "Múltiples estils artístics", "Generació ràpida", "Escalat de resolució avançat", "Variacions i remix", "Comunitat activa de Discord"],
          idealPara: ["Art digital", "Conceptes visuals", "Disseny gràfic"],
          precioDetalle: "Plans des de $10/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Qualitat estètica excepcional",
          debilidadPrincipal: "Sense interfície web completa (encara)",
        },
        "stable-diffusion": {
          nombre: "Stable Diffusion",
          descripcion: "Generador d'imatges open source. Executable localment amb control total sobre el procés.",
          caracteristicas: ["Completament open source", "Executable localment", "Control total del procés", "Múltiples interfícies (Automatic1111, ComfyUI)", "Models personalitzables", "Sense costos d'API"],
          idealPara: ["Persones desenvolupadores", "Artistes tècnics", "Ús personalitzat"],
          precioDetalle: "Gratis (necessites maquinari potent)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Gratuït i personalitzable",
          debilidadPrincipal: "Requereix coneixements tècnics",
        },
        elevenlabs: {
          nombre: "ElevenLabs",
          descripcion: "Plataforma líder en síntesi de veu amb IA. Clonació de veu i generació d'àudio ultrarealista.",
          caracteristicas: ["Veus ultrarealistes", "Clonació de veu", "Multillengua", "Audiollibres i pòdcast", "API per a persones desenvolupadores", "Ajustos d'emoció i to"],
          idealPara: ["Pòdcast", "Audiollibres", "Contingut audiovisual", "Accessibilitat"],
          precioDetalle: "Gratis limitat, plans des de $5/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Qualitat de veu més realista del mercat",
          debilidadPrincipal: "Cost escalat per a ús intensiu",
        },
        runway: {
          nombre: "Runway",
          descripcion: "Plataforma de creació de vídeo amb IA. Des de la generació fins a l'edició amb Gen-3 Alpha.",
          caracteristicas: ["Generació de vídeo des de text", "Edició de vídeo amb IA", "Gen-3 Alpha d'alta qualitat", "Motion Brush per a controlar el moviment", "Integració amb After Effects", "Eines de composició"],
          idealPara: ["Creadors de contingut", "Videògrafs", "Publicitat"],
          precioDetalle: "Gratis limitat, plans des de $12/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Edició de vídeo amb IA avançada",
          debilidadPrincipal: "Cost alt per a ús professional",
        },
        "notion-ai": {
          nombre: "Notion AI",
          descripcion: "IA integrada a Notion per a escriptura, organització i gestió del coneixement.",
          caracteristicas: ["Resum de documents", "Generació de contingut", "Traducció integrada", "Cerca semàntica", "Autocompletat intel·ligent", "Integració amb bases de dades"],
          idealPara: ["Gestió del coneixement", "Documentació", "Organització personal"],
          precioDetalle: "$10/mes per usuari (amb Notion)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Integració perfecta amb Notion",
          debilidadPrincipal: "Només funciona dins de Notion",
        },
        perplexity: {
          nombre: "Perplexity",
          descripcion: "Motor de cerca amb IA que cita les seues fonts. Ideal per a investigació profunda i verificable.",
          caracteristicas: ["Cerca amb cites de fonts", "Pro Search per a preguntes complexes", "Mode Acadèmic", "Imatges i taules en els resultats", "Col·laboració en espais", "API per a persones desenvolupadores"],
          idealPara: ["Investigació", "Estudiantat", "Professionals", "Periodisme"],
          precioDetalle: "Gratis limitat, Pro $20/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Cites verificables i transparència",
          debilidadPrincipal: "Pot ser menys creatiu que ChatGPT",
        },
        make: {
          nombre: "Make (ex-Integromat)",
          descripcion: "Plataforma visual d'automatització. Connecta aplicacions i crea fluxos de treball complexos sense codi.",
          caracteristicas: ["Automatització visual per escenaris", "Milers d'integracions", "Lògica condicional avançada", "IA generativa integrada", "Plantilles predefinides", "Execució en temps real"],
          idealPara: ["Automatització de processos", "Màrqueting", "Persones emprenedores"],
          precioDetalle: "Gratis (1000 operacions/mes), des de $9/mes",
          ventanaContexto: "—",
          fortalezaPrincipal: "Flexibilitat visual sense codi",
          debilidadPrincipal: "Corba d'aprenentatge per a escenaris complexos",
        },
      },
      criterios: {
        "facilidad-uso": {
          nombre: "Facilitat d'ús",
          descripcion: "Com de fàcil és començar a usar l'eina",
          opciones: ["Principiant", "Intermedi", "Avançat"],
        },
        "calidad-respuesta": {
          nombre: "Qualitat de resposta",
          descripcion: "Precisió i utilitat de les respostes generades",
          opciones: ["Bàsica", "Bona", "Excel·lent"],
        },
        velocidad: {
          nombre: "Velocitat",
          descripcion: "Com de ràpid genera respostes",
          opciones: ["Lenta", "Mitjana", "Ràpida"],
        },
        precio: {
          nombre: "Preu",
          descripcion: "Relació qualitat-preu",
          opciones: ["Car", "Raonable", "Barat/Gratis"],
        },
        personalizacion: {
          nombre: "Personalització",
          descripcion: "Capacitat d'adaptar l'eina a necessitats concretes",
          opciones: ["Bàsica", "Mitjana", "Alta"],
        },
      },
      arbol: {
        inicio: {
          pregunta: "Què necessites fer?",
          descripcion: "Selecciona la tasca principal que vols realitzar",
          opciones: ["Conversar i fer preguntes", "Programar o desenvolupar programari", "Crear imatges o dissenys", "Treballar amb àudio o vídeo", "Automatitzar processos", "Investigar informació"],
        },
        conversacion: {
          pregunta: "Quin tipus de conversa necessites?",
          descripcion: "Cada assistent és millor per a unes tasques o altres",
          opciones: ["Respostes ràpides i ús general", "Anàlisi profunda de documents", "Accedir a informació actualitzada", "Investigació amb fonts verificades"],
        },
        codigo: {
          pregunta: "Què prefereixes per a programar?",
          descripcion: "Hi ha diferents enfocaments segons el teu estil de treball",
          opciones: ["Suggeriments al meu editor actual", "Un editor complet amb IA", "Assistent general per a codi"],
        },
        imagen: {
          pregunta: "Quin tipus d'imatges necessites?",
          descripcion: "Cada eina té fortaleses diferents en la generació visual",
          opciones: ["Ràpid i fàcil des de text", "Alta qualitat artística", "Control total i gratuït"],
        },
        "audio-video": {
          pregunta: "Què necessites crear?",
          descripcion: "Les eines d'IA per a àudio i vídeo estan en ràpida evolució",
          opciones: ["Veus i narració", "Vídeos amb IA"],
        },
      },
    },

    prompting: {
      roles: {
        ninguno: { label: "Ningú en particular", descripcion: "Sense rol específic" },
        profesor: { label: "Professor / Educador", descripcion: "Explica conceptes de manera clara i didàctica" },
        periodista: { label: "Periodista / Escriptor", descripcion: "Redacció clara, objectiva i ben estructurada" },
        abogado: { label: "Advocat / Assessor legal", descripcion: "Precís, formal, basat en normatives" },
        cientifico: { label: "Científic / Investigador", descripcion: "Rigor acadèmic, dades i referències" },
        marketing: { label: "Expert en Màrqueting", descripcion: "Persuasiu, orientat a la conversió" },
        ceo: { label: "CEO / Directiu", descripcion: "Visió estratègica, executiva i pràctica" },
        desarrollador: { label: "Desenvolupador / Programador", descripcion: "Tècnic, precís, amb exemples de codi" },
        creativo: { label: "Creatiu / Dissenyador", descripcion: "Original, visual, innovador" },
        psicologo: { label: "Psicòleg / Coach", descripcion: "Empàtic, comprensiu, orientat a les persones" },
      },
      formatos: {
        parrafos: { label: "Paràgrafs", descripcion: "Text fluid en paràgrafs" },
        lista: { label: "Llista amb vinyetes", descripcion: "Punts clau enumerats" },
        tabla: { label: "Taula comparativa", descripcion: "Dades organitzades en columnes" },
        pasos: { label: "Passos / Instruccions", descripcion: "Seqüència numerada d'accions" },
        email: { label: "Correu / Carta", descripcion: "Format de correspondència" },
        codigo: { label: "Codi", descripcion: "Blocs de codi amb explicació" },
        esquema: { label: "Esquema / Outline", descripcion: "Estructura jeràrquica de continguts" },
        dialogo: { label: "Diàleg / Conversa", descripcion: "Format de preguntes i respostes" },
      },
      tonos: {
        profesional: { label: "Professional", descripcion: "Formal i corporatiu" },
        casual: { label: "Casual / Amistós", descripcion: "Proper i natural" },
        divulgativo: { label: "Divulgatiu", descripcion: "Clar per a tots els públics" },
        humoristico: { label: "Humorístic", descripcion: "Amb sentit de l'humor" },
        inspirador: { label: "Inspirador / Motivacional", descripcion: "Que motive a l'acció" },
        tecnico: { label: "Tècnic / Especialitzat", descripcion: "Amb argot del sector" },
        formal: { label: "Formal / Seriós", descripcion: "Molt formal, per a documents oficials" },
      },
      audiencias: {
        general: { label: "Públic general", descripcion: "Per a qualsevol persona" },
        principiante: { label: "Principiants", descripcion: "Persones sense coneixement previ" },
        profesional: { label: "Professionals del sector", descripcion: "Amb experiència en l'àrea" },
        ejecutivo: { label: "Executius / Directius", descripcion: "Alta direcció" },
        estudiante: { label: "Estudiantat", descripcion: "En formació acadèmica" },
        cliente: { label: "Clients / Persones usuàries", descripcion: "Persones que usen el teu producte" },
        ninos: { label: "Xiquets / Adolescents", descripcion: "Audiència jove" },
      },
      extensiones: {
        "muy-corta": { label: "Molt curta (< 50 paraules)", descripcion: "Resposta breu" },
        corta: { label: "Curta (50-150 paraules)", descripcion: "Resum concís" },
        media: { label: "Mitjana (150-300 paraules)", descripcion: "Extensió estàndard" },
        larga: { label: "Llarga (300-500 paraules)", descripcion: "Resposta detallada" },
        "muy-larga": { label: "Molt llarga (500+ paraules)", descripcion: "Anàlisi exhaustiva" },
      },
      generar: {
        eresUn: "Ets un {rol}.",
        contexto: "Context",
        enFormato: "en format {x}",
        conTono: "amb to {x}",
        dirigidoA: "dirigit a {x}",
        responde: "Respon {especificacions}.",
      },
    },

    badges: {
      "first-lesson": { nombre: "Primer pas", descripcion: "Has completat la teua primera lliçó" },
      "five-lessons": { nombre: "Estudiant dedicat", descripcion: "Has completat 5 lliçons" },
      "ten-lessons": { nombre: "Explorador", descripcion: "Has completat 10 lliçons" },
      "twenty-five-lessons": { nombre: "Mestre del coneixement", descripcion: "Has completat 25 lliçons" },
      "fifty-lessons": { nombre: "Erudit", descripcion: "Has completat 50 lliçons" },
      "seventy-five-lessons": { nombre: "Saví de la IA", descripcion: "Has completat 75 lliçons" },
      "xp-100": { nombre: "Centenari", descripcion: "Has acumulat 100 XP" },
      "xp-500": { nombre: "Veterà", descripcion: "Has acumulat 500 XP" },
      "xp-1000": { nombre: "Llegenda", descripcion: "Has acumulat 1.000 XP" },
      "xp-2500": { nombre: "Immortal", descripcion: "Has acumulat 2.500 XP" },
      "xp-5000": { nombre: "Déu de la IA", descripcion: "Has acumulat 5.000 XP" },
      "streak-7": { nombre: "Ratxa de foc", descripcion: "7 dies consecutius d'aprenentatge" },
      "streak-14": { nombre: "Ratxa imparable", descripcion: "14 dies consecutius d'aprenentatge" },
      "streak-30": { nombre: "Llegenda viva", descripcion: "30 dies consecutius d'aprenentatge" },
      "ecosistema-complete": { nombre: "Explorador de l'ecosistema", descripcion: "Has completat totes les lliçons del Bloc 2" },
      "comparador-user": { nombre: "Expert en comparadors", descripcion: "Has usat el comparador interactiu d'eines" },
      "arbol-decision": { nombre: "Decisió intel·ligent", descripcion: "Has completat l'arbre de decisió d'eines" },
      "prompting-complete": { nombre: "Mestre del prompt", descripcion: "Has completat totes les lliçons del Bloc 3" },
      "calculadora-prompts": { nombre: "Arquitecte de prompts", descripcion: "Has usat la calculadora de prompts" },
      "reto-diario": { nombre: "Assidu", descripcion: "Has completat un repte diari" },
      "reto-semanal": { nombre: "Campió setmanal", descripcion: "Has completat un repte setmanal" },
      "racha-3": { nombre: "Constant", descripcion: "Has mantingut una ratxa de 3 dies" },
      "primer-proyecto": { nombre: "Arquitecte en pràctiques", descripcion: "Has completat el teu primer projecte" },
      "tres-proyectos": { nombre: "Constructor", descripcion: "Has completat 3 projectes" },
      "todos-proyectos": { nombre: "Mestre constructor", descripcion: "Has completat tots els projectes" },
      "chat-ia": { nombre: "Explorador del laboratori", descripcion: "Has usat el chat d'IA del laboratori" },
      "agentes-complete": { nombre: "Arquitecte d'agents", descripcion: "Has completat totes les lliçons del Bloc 7" },
      "ia-docencia-complete": { nombre: "Educador IA", descripcion: "Has completat totes les lliçons del Bloc 4" },
      "ia-multimodal-complete": { nombre: "Explorador multimodal", descripcion: "Has completat totes les lliçons del Bloc 5" },
      "programacion-complete": { nombre: "Arquitecte de programari", descripcion: "Has completat totes les lliçons del Bloc 6" },
      "etica-complete": { nombre: "Guardià ètic", descripcion: "Has completat totes les lliçons del Bloc 8" },
      "laboratorio-complete": { nombre: "Científic d'IA", descripcion: "Has completat totes les lliçons del Bloc 9" },
      "novedades-complete": { nombre: "Avantguardista", descripcion: "Has completat totes les lliçons del Bloc 10" },
      "ingeniero-prompts": { nombre: "Enginyer de prompts", descripcion: "Has usat l'entorn de prompts interactiu" },
      "arquitecto-flujos": { nombre: "Arquitecte de fluxos", descripcion: "Has creat un flux d'agents a AgentFlow" },
      "evaluador-modelos": { nombre: "Avaluador de models", descripcion: "Has usat el comparador de models" },
      "primer-quiz": { nombre: "Primer qüestionari", descripcion: "Has completat el teu primer qüestionari" },
      "quiz-perfecto": { nombre: "Puntuació perfecta", descripcion: "Has completat un qüestionari amb puntuació perfecta" },
      "quiz-maestro": { nombre: "Mestre del qüestionari", descripcion: "Has completat 10 qüestionaris" },
      "colaborador": { nombre: "Col·laborador", descripcion: "Has enviat la teua primera proposta de millora" },
      "curso-completo": { nombre: "Diploma", descripcion: "Has completat el curs complet d'Atlas IA" },
    },

    retos: {
      "ch-daily-1": { title: "Una lliçó hui", description: "Completa almenys 1 lliçó" },
      "ch-daily-2": { title: "Ratxa activa", description: "Visita la plataforma i completa una lliçó" },
      "ch-daily-3": { title: "Explora una eina", description: "Usa el comparador d'eines" },
      "ch-weekly-1": { title: "3 lliçons aquesta setmana", description: "Completa 3 lliçons en 7 dies" },
      "ch-weekly-2": { title: "Prova 3 eines", description: "Usa el comparador 3 vegades" },
      "ch-weekly-3": { title: "Ratxa de 3 dies", description: "Mantín una ratxa de 3 dies consecutius" },
    },

    proyectos: {
      "proyecto-1": { title: "Chatbot simple amb prompts", description: "Dissenya un prompt de sistema per a un assistent d'atenció al client" },
      "proyecto-2": { title: "Anàlisi de sentiments", description: "Usa IA per a analitzar el sentiment de 10 ressenyes de productes" },
      "proyecto-3": { title: "Generador d'imatges", description: "Crea una sèrie de 5 imatges amb DALL-E o Midjourney per a una campanya" },
      "proyecto-4": { title: "Flux d'automatització", description: "Dissenya un flux de treball amb Make o Zapier que use IA" },
      "proyecto-5": { title: "Agent RAG bàsic", description: "Construeix un agent amb recuperació d'informació usant prompts" },
      "proyecto-6": { title: "Comparativa de models", description: "Compara GPT-4, Claude i Gemini en una tasca específica i documenta els resultats" },
    },
  },
} satisfies Dictionary;
