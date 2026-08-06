import type { Dictionary } from "./es";

export const enDict = {
  common: {
    language: "Language",
    search: "Search",
    close: "Close",
    cancel: "Cancel",
    save: "Save",
    copy: "Copy",
    copied: "Copied",
    back: "Back",
    next: "Next",
    previous: "Previous",
    all: "All",
    loading: "Loading...",
    noResults: "No results",
    clearFilters: "Clear filters",
  },

  nav: {
    inicio: "Home",
    bloques: "Blocks",
    todosLosBloques: "All blocks",
    cronologia: "Timeline",
    glosario: "Glossary",
    laboratorio: "Laboratory",
    perfil: "My profile",
    docencia: "Teaching",
  },

  header: {
    searchPlaceholder: "Search Atlas IA...",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    expandSidebar: "Expand sidebar",
    collapseSidebar: "Collapse sidebar",
    changeTheme: "Change theme",
    toLightMode: "Switch to light mode",
    toDarkMode: "Switch to dark mode",
    changeLanguage: "Change language",
    login: "Log in",
    notifications: "Notifications",
  },

  sidebar: {
    subtitle: "Learn Artificial Intelligence",
    sectionBloques: "Blocks",
    viewFullBlock: "View full block",
    totalProgress: "Total progress",
    lessons: "lessons",
    of: "of",
  },

  footer: {
    tagline: "The best platform for learning Artificial Intelligence",
    plataforma: "Platform",
    recursos: "Resources",
    legal: "Legal",
    bloques: "Blocks",
    glosario: "Glossary",
    privacidad: "Privacy",
    usoIa: "AI Usage",
    terminos: "Terms",
    copyright: "by Noemí Celaya Mingot",
    licenciaAria: "Creative Commons license CC BY-NC-SA 4.0",
    licencia: "Creative Commons license CC BY-NC-SA 4.0",
  },

  breadcrumbs: {
    home: "Home",
    bloques: "Blocks",
    glosario: "Glossary",
    cronologia: "Timeline",
    laboratorio: "Laboratory",
    perfil: "My profile",
  },

  search: {
    placeholder: "Search Atlas IA...",
    minChars: "Type at least 2 characters to search",
    noResults: "No results found for “{query}”",
    esc: "ESC",
    clear: "Clear",
  },

  ai: {
    systemPrompt: `You are Atlas, mentor of the Vibe Coding Educativo course on the Atlas IA platform. You help people learn with AI and code from scratch. Answering strategy, by priority:

1. Priority 1: Atlas IA content. If the question has relevant information on the platform (blocks, glossary, timeline, lab), answer with it and start with «According to Atlas IA:».
2. If the topic is not in Atlas IA, state it transparently («This concept doesn't yet appear in Atlas IA.») and still answer with useful general knowledge of the field. Never stop helping the student.
3. Never end an answer with «I don't have a prepared answer for that», «That topic is not covered» or «Tell me more» without having tried to answer first.

Behaviour rules:
- ALWAYS answer first with your knowledge: a direct definition, a real example and a practical application. Never reply "could you be more specific?" or ask for clarification when you can answer.
- Do not reject basic questions such as what is commitear, what is Git, what is an API, what is HTML, what is an LLM or where AI models run: always answer them.
- Master these topics: Artificial Intelligence (fundamentals, ML, Deep Learning, LLM, prompting, RAG, agents, MCP, ethics, history, tools), programming for beginners (HTML, CSS, JavaScript, Git and GitHub, VS Code and extensions, coding agents like Cline, deploying projects, good practices, educational digital resources) and Vibe Coding.
- When asked about tools (ChatGPT, Claude, Gemini, Cursor, Cline...), compare strengths and weaknesses and recommend based on the use case.
- Distinguish the source: if you use course content, mark it with «According to Atlas IA:»; if you use general knowledge, use the transparency phrase from point 2.
- Explain in simple language, adapted to each person's level and starting from the basics if the topic is complex. Structure: 1) direct definition, 2) example or comparison, 3) how to apply it. Keep answers brief (2-4 paragraphs unless asked for more).
- If you don't know something, admit it and suggest where to look in Atlas IA (blocks, glossary, timeline, lab), but always offer a general explanation of the topic.
- You may end with ONE optional question or challenge only if it adds value.
- Use basic markdown for formatting (**bold**, lists, tables, \`code\`) and always answer in English.`,
    error: "Error connecting to the AI",
    badRequest: "You must send at least one message",
    internalError: "Internal error",
    courseSource: "According to Atlas IA:",
    generalIntro: "This concept doesn't yet appear in Atlas IA.",
    noAnswer: "This concept doesn't yet appear in Atlas IA, but I can explain it to you.\n\n**Artificial Intelligence** is the branch of computer science that builds systems able to carry out tasks that normally require human intelligence: understanding language, recognizing images, recommending content or generating code. It relies on **Machine Learning** (learning from data) and on **language models (LLMs)** such as ChatGPT or Claude.\n\nI can also help you with programming (HTML, CSS, JavaScript), Git and GitHub, VS Code, web development, deploying projects, Vibe Coding and educational digital tools. If you tell me the specific topic you are interested in, I will give you simple examples.",
  },

  home: {
    badge: "Educational platform",
    titleLine1: "Learn",
    titleAccent: "Artificial Intelligence",
    titleLine3: "from scratch",
    subtitle1: "The most complete guide to understanding AI. Not just tools.",
    subtitle2: "Judgment.",
    subtitle3: "Critical thinking.",
    subtitle4: "Knowing when and how to use each AI.",
    ctaStart: "Start now",
    ctaAllBlocks: "View all blocks",
    feature1Title: "11 thematic blocks",
    feature1Desc: "From fundamentals to agents, covering the whole ecosystem",
    feature2Title: "Hands-on content",
    feature2Desc: "Real examples, guided exercises and challenges for every topic",
    feature3Title: "Always up to date",
    feature3Desc: "The AI ecosystem changes every week. So do we",
    blocksTitle: "Course blocks",
    blocksDesc: "Work through the platform in order or jump straight to the topic that interests you most.",
    lessonsCount: "lessons",
    comingSoon: "Coming soon",
    readyTitle: "Ready to get started?",
    readyDesc: "You don't need any prior experience. You don't need to pay anything. You just need curiosity and a willingness to learn.",
    readyCta: "Start with Block 0",
  },

  bloques: {
    title: "All blocks",
    subtitle: "The platform is organised into 11 thematic blocks. You can work through them in order or jump straight to the one that interests you most.",
    label: "Block",
    lecciones: "lessons",
    leccion: "Lesson",
    de: "of",
    proximamente: "Coming soon",
    enPreparacion: "This block is still being prepared. Come back soon.",
    notFound: "Block not found",
  },

  leccion: {
    completar: "Mark as completed",
    completada: "Completed",
    anadirFavoritos: "Add to favourites",
    quitarFavoritos: "Remove from favourites",
    anterior: "Previous",
    siguiente: "Next",
    bloqueCompletado: "Block completed!",
    bloqueCompletadoDesc: "You've finished every lesson in this block. Shall we move on to the next one?",
    continuarBloque: "Continue with Block {numero}",
    cursoCompletado: "You've completed the whole course!",
    cursoCompletadoDesc: "You've gone through all 11 blocks of Atlas IA. You can review any topic whenever you want.",
    verBloques: "See all blocks",
    enEstaPagina: "On this page",
    indice: "Table of contents",
    leccionesBloque: "Lessons in this block",
    notFound: "Lesson not found",
  },

  speech: {
    title: "Read aloud",
    listen: "Listen to content",
    stop: "Stop reading",
    speed: "Reading speed",
    reading: "Reading...",
    finished: "Reading finished",
    notSupported: "Your browser does not support text-to-speech",
    noContent: "There is no content to read on this page",
  },

  pwa: {
    installTitle: "Install Atlas IA",
    installDesc: "Open it faster and browse offline from your device.",
    install: "Install",
    notNow: "Not now",
    installHint: "If the install button is not available, use your browser menu: Install app or Add to home screen.",
  },

  glosario: {
    title: "Glossary",
    subtitle: "Key Artificial Intelligence terms explained clearly and simply.",
    searchPlaceholder: "Search terms...",
    termsCount: "terms",
    for: "for",
    noResults: "No terms found",
  },

  glossaryPopover: {
    categoryLabel: "Category",
    openTermAria: "See definition of {termino}",
    close: "Close",
    viewFullDefinition: "View full definition",
  },

  cronologia: {
    title: "The history of AI",
    subtitle: "The most important milestones in the history of Artificial Intelligence.",
    filterAll: "All",
    filters: {
      modelos: "Models",
      empresas: "Companies",
      investigacion: "Research",
      herramientas: "Tools",
      hitos: "Milestones",
    },
    badges: {
      modelo: "Model",
      empresa: "Company",
      investigacion: "Research",
      herramienta: "Tool",
      hito: "Historical milestone",
    },
  },

  laboratorio: {
    title: "AI Laboratory",
    subtitle: "Experiment, try and learn with interactive tools",
    openChat: "Open AI Chat",
    tabs: {
      chat: "AI Chat",
      prompts: "Prompt Studio",
      agentes: "Agent Flow",
      comparador: "Comparator",
      tokens: "Tokens",
    },
  },

  perfil: {
    title: "My profile",
    subtitle: "Stats, badges, challenges and projects",
  },

  docencia: {
    title: "Teaching",
    subtitle: "Collect usage and statistics for each student.",
    totalStudents: "Students",
    avgXp: "Average XP",
    totalLessons: "Completed lessons",
    activeWeek: "Active this week",
    searchPlaceholder: "Search by name or email...",
    exportCsv: "Export CSV",
    loading: "Loading data...",
    noResults: "No students match that filter",
    empty: "No students registered yet.",
    error: "Could not load the data",
    columns: {
      student: "Student",
      level: "Level",
      xp: "XP",
      lessons: "Lessons",
      progress: "Progress",
      badges: "Badges",
      streak: "Streak",
      lastVisit: "Last visit",
      joined: "Joined",
    },
    perBlock: "Progress by block",
    usage: {
      title: "Tool usage",
      comparedTools: "Comparisons",
      favorites: "Favorites",
      challenges: "Completed challenges",
      projects: "Completed projects",
      arbol: "Decision tree",
      calculadora: "Prompt calculator",
    },
  },

  privacidad: {
    title: "Privacy Policy",
    subtitle:
      "We want you to know exactly what data we use and why. This page is written in plain language and complies with the European Union's General Data Protection Regulation (GDPR).",
    lastUpdated: "Last updated: August 2026",

    controllerTitle: "Who is the data controller?",
    controllerText:
      "The data controller is {responsable}, in relation to the Atlas IA platform. You can contact us at {email} about anything related to privacy.",

    summaryTitle: "A one-minute summary",
    summaryItems: [
      "If you do not create an account, all your progress is stored only in your browser (localStorage) and never leaves your device.",
      "If you create an account, we store your name, email and an encrypted password so your progress can be synced between devices.",
      "We do not use advertising or third-party trackers, and we never sell data to anyone.",
      "You can request deletion of your data at any time.",
    ],

    dataTitle: "What data do we collect?",
    dataIntro:
      "We only collect the data needed for the platform to work. Here is what happens to each piece of data:",

    dataWithoutAccountTitle: "Without an account",
    dataWithoutAccountItems: [
      "Local progress: completed lessons, XP, badges, favourites, notes, challenges and projects. Stored only in your browser.",
      "Preferences: language and theme (light or dark). Stored in your browser.",
      "No personal data is requested (neither name nor email).",
    ],

    dataWithAccountTitle: "If you create an account",
    dataWithAccountItems: [
      "Name: to display it on the platform and in the leaderboard.",
      "Email address: to identify your account and recover access if needed.",
      "Password: stored as an encrypted hash, never in plain text.",
      "Synced progress: your local progress is also stored on our servers so you can resume it on another device, and so your school's teachers can see usage statistics.",
    ],

    dataChatTitle: "Laboratory chat",
    dataChatItems: [
      "The messages you send are used only to generate the reply.",
      "We do not store chat histories linked to your account.",
      "If the external AI provider is enabled, messages are sent to its API to get a reply; otherwise they are processed entirely on our server with prepared answers.",
    ],

    localTitle: "Browser storage (localStorage)",
    localIntro:
      "To keep your progress and preferences between visits, Atlas IA stores information in your browser's local storage. This data stays on your device and is not sent to our servers, except when you sign in and sync your progress. The following keys are used:",
    localItems: [
      {
        key: "atlas-progress",
        desc: "your progress: completed lessons, XP, badges, favourites, notes, challenges and projects.",
      },
      {
        key: "atlas-theme",
        desc: "your theme preference (light, dark or system).",
      },
      {
        key: "atlas-locale",
        desc: "your preferred language (Spanish, English or Valencian).",
      },
    ],

    cookiesTitle: "Cookies",
    cookiesIntro: "We only use the essential technical cookies required for the platform to work:",
    cookiesItems: [
      "Session cookies (NextAuth): to keep you signed in when you have an account.",
      "Language cookie (atlas-locale): to remember the language you have chosen.",
    ],
    cookiesNoThird: "We do not use third-party cookies or tracking or advertising cookies.",

    noTrackingTitle: "No third-party tracking",
    noTrackingText:
      "Atlas IA does not include advertising, trackers, pixels or third-party analytics tools (such as Google Analytics). We do not share or sell your data. Your activity is not used to build advertising profiles and is not given to other companies.",

    purposeTitle: "What do we use your data for?",
    purposeItems: [
      "To provide the service: show your progress, XP, badges and statistics.",
      "To sync your progress between devices if you have an account.",
      "To let your school's teachers view aggregated statistics about group activity.",
      "To generate the laboratory chat replies.",
    ],

    legalTitle: "Legal basis for processing (GDPR)",
    legalItems: [
      "Consent: by creating an account you accept this policy and the processing of your data.",
      "Performance of the service: progress data is needed to provide the functionality you request.",
      "Legitimate interest: to improve and maintain the platform, without harming your rights and freedoms.",
    ],

    retentionTitle: "How long do we keep your data?",
    retentionText:
      "We keep your account data while your account is active. You can request deletion at any time and we will remove it within 30 days. Local data (localStorage) is deleted if you clear your browsing data or reset your progress from the platform.",

    rightsTitle: "Your rights",
    rightsIntro: "Under the GDPR, you have the right to:",
    rightsItems: [
      "Access: know what data of yours we process.",
      "Rectification: correct inaccurate or incomplete data.",
      "Erasure: ask us to delete your data.",
      "Portability: receive your data in a structured, readable format.",
      "Restriction: ask us to limit the processing in certain cases.",
      "Objection: object to processing based on legitimate interest.",
    ],
    rightsHow:
      "You can exercise these rights by emailing {email}. You also have the right to lodge a complaint with the Spanish Data Protection Agency (aepd.es).",

    minorsTitle: "Minors",
    minorsText:
      "If you are under 14, you need the consent of your parent or legal guardian to create an Atlas IA account.",

    securityTitle: "Security",
    securityItems: [
      "Passwords are stored encrypted (hashed) and never in plain text.",
      "Communication with the platform is encrypted via HTTPS.",
      "We apply the principle of data minimisation: we only collect the essential data.",
    ],

    changesTitle: "Changes to this policy",
    changesText:
      "If this policy changes in a relevant way, we will publish it on this page with its new update date. We recommend checking it from time to time.",

    contactTitle: "Contact",
    contactText: "For any question or request about privacy, email {email}.",
  },

  usoIa: {
    title: "Use of Artificial Intelligence",
    subtitle:
      "We believe in transparency: here we explain clearly how and why we use Artificial Intelligence in this project, and what our ethical principles are.",
    lastUpdated: "Last updated: August 2026",

    whatTitle: "Which parts of the project were developed with the help of AI?",
    whatIntro: "Artificial Intelligence has been used as a support tool in the following areas:",
    whatItems: [
      "Code development: pages, components and features (progress, gamification, chat, teacher dashboard, accessibility and others) written with the help of AI-based programming assistants.",
      "Interface design: visual structure, design system and UI components proposed with AI support and adjusted by the author.",
      "Educational content: the initial drafts of part of the lessons and exercises were written with AI support; they were then reviewed, corrected and expanded by the author to guarantee their rigour and pedagogical suitability.",
      "Translations: the English and Valencian versions were drafted with AI support and reviewed by the author.",
      "Image generation: AI-generated images are not used in the educational content. Icons come from open-source libraries and the app graphics are original designs.",
      "Laboratory chat: the laboratory conversation assistant is an experimental AI tool that can connect to an external provider if configured.",
    ],

    reviewTitle: "Human review",
    reviewText:
      "All content published on Atlas IA has been reviewed and validated by the author ({autor}). AI proposes and the author decides: every lesson, every translation and every feature is checked before publishing. AI is used as a support tool, never as the final authority.",

    ethicsTitle: "Ethical principles",
    ethicsIntro: "This project is governed by the following principles in its use of AI:",
    ethicsItems: [
      "AI is a support tool, not a source of truth: everything published goes through human review.",
      "Honesty: AI-generated content is not presented as a human creation without saying so.",
      "Verification: data and dates are cross-checked to avoid misinformation or hallucinations.",
      "Privacy: the use of AI respects data minimisation; chat messages are not used to profile people.",
      "Accessibility and inclusion: the platform's language is clear, inclusive and adapted to its audience.",
      "No learning automation: the platform supports study but does not replace the effort and reasoning of the learner.",
    ],

    transparencyTitle: "Transparency for students and teachers",
    transparencyIntro: "We want both learners and teachers to know exactly what to expect:",
    transparencyItems: [
      "For students: the laboratory chat is identified as an AI assistant. When an activity makes significant use of AI, this will be indicated. We recommend using AI as a learning aid and not to replace your own work.",
      "For teachers: the teacher dashboard offers aggregated group statistics. This AI usage policy and the privacy policy are public and available to help you plan the use of the platform in the classroom.",
      "Citation and attribution: if a task uses AI, we recommend indicating it, as you would with any other source.",
    ],

    doubtsTitle: "Questions?",
    doubtsText:
      "If you want to know more about how we use AI or you find an error in a piece of content, email {email}.",
  },

  terminos: {
    title: "Terms and Conditions",
    subtitle:
      "These terms govern the use of Atlas IA. They are written in clear language so you know what you can do, what we expect of you and how doubts are resolved.",
    lastUpdated: "Last updated: August 2026",

    acceptanceTitle: "Acceptance of these terms",
    acceptanceText:
      "By accessing or using Atlas IA you accept these terms and the privacy policy. If you disagree with any part, please do not use the platform. Continued use of the platform implies acceptance of the current version of these terms.",

    serviceTitle: "Description of the service",
    serviceItems: [
      "Atlas IA is a free online educational platform for learning Artificial Intelligence: lesson blocks, glossary, timeline, interactive lab, gamification and teacher dashboard.",
      "The content is educational and informative and does not replace any professional advice.",
      "The platform may evolve: content and features may be added, modified or removed without prior notice.",
    ],

    accountsTitle: "User accounts",
    accountsItems: [
      "To create an account you must provide a real name and email address and a password.",
      "You are responsible for keeping your password confidential and for all activity carried out with your account.",
      "If you are under 14, you need the consent of your parent or legal guardian to create an account.",
      "The account is personal and non-transferable; teachers may view aggregated statistics of their group's activity.",
    ],

    contentTitle: "Content and licence",
    contentItems: [
      "The platform content (lessons, glossary, timeline and other materials) is published under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) licence.",
      "You may share and adapt the materials citing the source, for non-commercial purposes and under the same licence.",
      "Trademarks and third-party product names mentioned in the content belong to their respective owners.",
    ],

    conductTitle: "Responsible use",
    conductItems: [
      "You must not use the platform for unlawful purposes, to harass or harm other people, or to impersonate them.",
      "You must not attempt to access other people's accounts, alter other people's data or interfere with the operation of the service.",
      "You must not reuse the content for commercial purposes without authorisation.",
    ],

    chatTitle: "Laboratory chat",
    chatText:
      "The laboratory chat is an experimental AI tool for educational purposes. Its answers may contain errors or incomplete information and must not be used as the only source of truth. Your use of the chat is voluntary and at your own risk.",

    teacherTitle: "Teacher dashboard",
    teacherText:
      "Teacher accounts (identified by their institutional email) allow access to aggregated group statistics with the aim of guiding learning. Teachers undertake to use this data solely for educational purposes and to comply with data protection regulations.",

    liabilityTitle: "Limitation of liability",
    liabilityItems: [
      "We take the utmost care with the quality of the content, but we do not guarantee that it is free of errors or its suitability for a particular use.",
      "We shall not be liable for damages arising from the use of the platform or the impossibility of using it, except in cases where the law does not allow it.",
      "Links to external sites are offered as a resource; we are not responsible for their content.",
    ],

    suspensionTitle: "Suspension or closure of the account",
    suspensionText:
      "We may suspend or close an account if these terms or applicable regulations are breached. You may stop using the platform and request the deletion of your account at any time by writing to us.",

    changesTitle: "Changes to these terms",
    changesText:
      "These terms may be updated. The current version is always published on this page with its update date. If the changes are significant, we will indicate it on the page itself.",

    lawTitle: "Applicable law",
    lawText:
      "These terms are governed by Spanish law. For any dispute, the parties submit to the courts corresponding to the address of {responsable}, unless a mandatory provision provides otherwise.",

    contactTitle: "Contact",
    contactText: "For any questions about these terms, email {email}.",
  },

  roadmap: {
    title: "Project roadmap",
    subtitle:
      "The Atlas IA roadmap: what we have built, where we are and where the platform is heading.",
    lastUpdated: "Last updated: August 2026",
    intro:
      "Atlas IA is built in incremental phases. Each phase adds content, features or quality improvements verified before moving on. This is the complete journey of the project.",
    milestonesTitle: "Completed milestones",
    milestones: [
      {
        titulo: "Project foundation (Phases 1-2)",
        descripcion:
          "Next.js base with App Router, light/dark design system, sidebar layout with search, starting block and AI Fundamentals with 16 lessons, global search and initial gamification (XP, badges, streaks, favourites).",
      },
      {
        titulo: "Ecosystem and prompting (Phases 3-4)",
        descripcion:
          "Block 2 with 8 lessons, interactive comparator of 13 tools, decision tree and 7 categories; block 3 with 8 lessons and a prompt calculator.",
      },
      {
        titulo: "Search, glossary and timeline (Phase 5)",
        descripcion:
          "Advanced search in glossary and tools, 48-term glossary with filters and an interactive timeline with 28 AI milestones.",
      },
      {
        titulo: "Extended gamification (Phase 6)",
        descripcion:
          "Global ranking, daily and weekly challenges, hands-on projects, profile page with stats and real-time notifications.",
      },
      {
        titulo: "Accounts and database (Phase 7)",
        descripcion:
          "SQLite with Prisma, NextAuth authentication with credentials, registration, login and progress sync.",
      },
      {
        titulo: "AI Lab (Phases 8-10)",
        descripcion:
          "Interactive chat with SSE streaming and offline answers, Agents block, and an expanded lab: prompt sandbox, agent flow, model comparator and token simulator.",
      },
      {
        titulo: "Complete content (Phases 11-12)",
        descripcion:
          "Collapsible sidebar, blocks 4 to 10 completed (teaching, multimodal, programming, agents, ethics, lab and news), clean lint and migration to proxy.",
      },
      {
        titulo: "Language review (Phases 13-14)",
        descripcion:
          "Full adaptation to academic and professional Spanish with inclusive language, plus UI tweaks.",
      },
      {
        titulo: "2026 news (Phase 15)",
        descripcion:
          "News block updated to the state of the art in July 2026: models, agents, multimodal AI, European regulations and sources.",
      },
      {
        titulo: "Internationalisation (Phases 16-17)",
        descripcion:
          "i18n infrastructure with Spanish, English and Valencian; localised UI, chat, search and all 71 lessons.",
      },
      {
        titulo: "Accessibility (Phases 18-19)",
        descripcion:
          "Read-aloud with the Web Speech API and speed control, and interactive glossary terms with popover and deep link.",
      },
      {
        titulo: "SEO and PWA (Phases 20-21)",
        descripcion:
          "Metadata, canonical, sitemap and robots; localised manifest, service worker with offline mode, installation and Lighthouse audit.",
      },
      {
        titulo: "Teaching and legal (Phases 22-25)",
        descripcion:
          "Teacher dashboard with student statistics, controls in the top bar, GDPR privacy page and AI usage page.",
      },
      {
        titulo: "AI assistant (Phases 26-27)",
        descripcion:
          "Chat with Markdown rendering, Vibe Coding mentor, labelled smart fallback and an answering strategy that never stops helping.",
      },
      {
        titulo: "Roadmap and legal terms (Phases 28-29)",
        descripcion:
          "Roadmap page with the project journey and a Terms and Conditions page, completing the legal section of the footer.",
      },
    ],
    currentTitle: "Current status",
    currentItems: [
      "All phases 1 to 29 are completed.",
      "The lab assistant answers offline with course content, glossary, tools and general knowledge, always labelling the source.",
      "The footer legal section is complete: privacy, AI usage and terms and conditions.",
    ],
    nextTitle: "Next steps",
    nextItems: [
      "Test PWA installation and offline mode in an HTTPS deployment (for example Vercel).",
      "Add screenshots to the manifest for the enriched Android install dialog.",
      "Consider /en and /val URL prefixes for real hreflang.",
      "Test the teacher dashboard with accounts included in TEACHER_EMAILS.",
    ],
  },

  auth: {
    login: {
      title: "Log in",
      subtitle: "Access your Atlas IA account",
      email: "Email address",
      password: "Password",
      submit: "Log in",
      errorCredentials: "Incorrect email or password",
      errorGeneric: "Error logging in",
      noAccount: "Don't have an account?",
      registerLink: "Sign up",
    },
    register: {
      title: "Create account",
      subtitle: "Sign up to start learning",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email address",
      password: "Password",
      passwordPlaceholder: "Minimum 6 characters",
      submit: "Create account",
      errorGeneric: "Error signing up",
      errorCreate: "Error creating the account",
      hasAccount: "Already have an account?",
      loginLink: "Log in",
    },
    userMenu: {
      profile: "My profile",
      logout: "Log out",
      user: "User",
    },
  },

  notFound: {
    title: "Page not found",
    subtitle: "Sorry, the page you are looking for does not exist or has been moved.",
    backHome: "Back to home",
  },

  gamification: {
    xp: {
      yourProgress: "Your progress",
      nextLevel: "Next level:",
      xp: "XP",
      lessons: "lessons",
      days: "days",
      badges: "Badges",
    },
    ranking: {
      title: "Global ranking",
      yourRank: "Your position:",
      searchPlaceholder: "Search the ranking...",
      you: "You",
      badges: "badges",
      days: "days",
      showLess: "Show less",
      showAll: "Show all ({count})",
    },
    retos: {
      title: "Challenges",
      diarios: "Daily",
      semanales: "Weekly",
      completedCount: "completed",
      noChallenges: "No challenges available yet",
      done: "Done",
      expired: "Expired",
      hoursLeft: "h left",
      daysLeft: "d left",
    },
    proyectos: {
      title: "Hands-on projects",
      completed: "Completed",
      markComplete: "Mark as completed",
      completedAt: "Completed",
    },
    profile: {
      levelAndXp: "Level and experience",
      level: "Level",
      totalXp: "Total XP",
      xpToNextLevel: "XP to next level",
      stats: "Stats",
      lessons: "Lessons",
      streak: "Streak (days)",
      badges: "Badges",
      projects: "Projects",
      totalProgress: "Overall course progress",
      recentBadges: "Recent badges",
      allBadges: "All badges",
    },
    notifications: {
      title: "Notifications",
      noNotifications: "No notifications",
      markAllRead: "Mark all as read",
      markRead: "Mark as read",
      newBadge: "New badge!",
      badgeUnlocked: "You have unlocked:",
      challengeCompleted: "Challenge completed!",
      projectCompleted: "Project completed!",
      completed: "You completed",
      andEarned: "and earned",
    },
    dificultad: {
      basico: "Beginner",
      intermedio: "Intermediate",
      avanzado: "Advanced",
    },
  },

  lab: {
    promptSandbox: {
      title: "Configure your prompt",
      task: "Task",
      taskPlaceholder: "Describe what you want the AI to do...",
      role: "Role",
      format: "Format",
      tone: "Tone",
      audience: "Audience",
      extension: "Length",
      context: "Additional context",
      contextPlaceholder: "Extra information the AI should know...",
      generated: "Generated prompt",
      copy: "Copy",
      copied: "Copied",
      emptyHint: "Write a task to see your generated prompt",
      suggestions: [
        "Explain what Machine Learning is",
        "Create a weekly AI study plan",
        "Write an article about RAG",
      ],
    },
    agentFlow: {
      title: "Blocks",
      addHint: "Drag or click to add",
      clear: "Clear",
      tips: "Tips",
      tipsList: [
        "Order the nodes in sequence",
        "Use RAG for retrieval",
        "Connect tools to the LLM",
        "Always finish with Output",
      ],
      pipeline: "Agent pipeline",
      nodes: "nodes",
      empty: "Drag blocks to build your flow",
      nodeLabels: {
        input: "Input",
        llm: "LLM",
        rag: "RAG",
        tool: "Tool",
        output: "Output",
      },
      nodeConfigs: {
        input: "User text",
        llm: "gpt-4o-mini",
        rag: "top_k: 5",
        tool: "web_search",
        output: "Formatted response",
      },
      ragDetected: "RAG pipeline detected: the retrieved data will be passed to the LLM context",
      toolDetected: "Tool+LLM pipeline: the LLM will be able to use the tool to fetch information",
      basicDetected: "Basic pipeline: the data flows through the nodes in order",
    },
    modelComparator: {
      title: "Model comparator",
      groups: {
        asistentes: "Assistants",
        codigo: "Code",
        imagen: "Image",
        audiovisual: "Audio/Video",
      },
      criteria: {
        popularidad: "Popularity",
        multimodal: "Multimodal",
        openSource: "Open Source",
        contexto: "Context",
        precio: "Price",
        fortaleza: "Strength",
      },
      selectAll: "+ All",
      empty: "Select up to 4 models to compare",
      criterio: "Criterion",
      empresa: "Company",
      recommendation: "Recommendation:",
      recGeneral: "For general use, ChatGPT offers versatility; Claude excels at deep analysis; Gemini has the largest context window.",
      recCodigo: "Copilot is ideal for editor suggestions; Cursor offers a complete environment with built-in AI.",
      recImagen: "Midjourney offers the best artistic quality; DALL-E is easier to use; Stable Diffusion is free and customisable.",
      recDefault: "Each tool has its speciality. Evaluate them according to your main use case.",
    },
    tokenSimulator: {
      title: "Token simulator",
      inputLabel: "Input text",
      inputPlaceholder: "Type or paste text here to estimate the tokens...",
      examples: "Examples:",
      example: "Example",
      model: "Model",
      estimatedTokens: "Estimated tokens",
      totalContext: "Total context",
      usedTokens: "Tokens used",
      remainingTokens: "Tokens remaining",
      usage: "Usage",
      withinLimit: "Within the limit",
      nearLimit: "Close to the limit",
      limitReached: "Limit reached",
      overLimit: "The text exceeds or is very close to the context limit",
      howCalculated: "How is it calculated?",
      calcHint1: "Estimate based on ~1.3 tokens per word + 0.05 tokens per character.",
      calcHint2: "The real count varies depending on each model's tokenizer.",
    },
    comparador: {
      title: "AI tools comparator",
      selectCategory: "Select a category:",
      chooseTools: "Choose up to 3 tools to compare:",
      evaluate: "Rate each tool (1-5 stars):",
      criterio: "Criterion",
      total: "TOTAL",
      hideDetails: "Hide details",
      showDetails: "View details of each tool",
      fortaleza: "Strength:",
      debilidad: "Weakness:",
      precio: "Price:",
      bestOption: "🏆 Best option according to your rating",
      footer: "This comparator is an interactive guide. The scores are subjective and depend on your specific needs.",
    },
    arbol: {
      recomendacion: "Recommendation",
      loMejor: "Best:",
      caracteristicas: "Main features:",
      idealPara: "Best for:",
      precio: "Price:",
      visitSite: "Visit website",
      footer: "This is a recommendation based on your answers. Explore other options too.",
      nodeNotFound: "Node not found.",
      reiniciar: "Restart",
      gratis: "Free",
      freemium: "Freemium",
      dePago: "Paid",
    },
    calculadora: {
      title: "Prompt calculator",
      describeTask: "Describe your task",
      taskPlaceholder: "E.g. write a sales email, create a marketing plan, explain a concept...",
      role: "AI role",
      context: "Additional context",
      contextPlaceholder: "E.g. I am a marketing manager at a SaaS startup...",
      format: "Format",
      tone: "Tone",
      audience: "Audience",
      extension: "Length",
      noPreference: "No preference",
      generate: "Generate prompt",
      reset: "Restart",
      generated: "Generated prompt",
      copy: "Copy",
      copied: "Copied",
      copyHint: "Copy this prompt and paste it into ChatGPT, Claude, Gemini or any AI assistant.",
      generateHint: "Click {strong} to create your personalised prompt.",
      footer: "This calculator helps you structure effective prompts. Results may vary depending on the AI model you use.",
    },
    aiChat: {
      title: "Atlas IA Chat",
      poweredBy: "Powered by GPT-4o mini",
      demoMode: "Educational mode (demo)",
      welcome: "Welcome to the laboratory!",
      welcomeDesc: "Ask me anything about Artificial Intelligence. I'm here to help you learn.",
      placeholder: "Ask about AI...",
      suggestedQuestions: [
        "What is Machine Learning?",
        "What's the difference between GPT, Claude and Gemini?",
        "What prompting techniques do you recommend?",
        "What is an LLM?",
        "Which AI tools do you recommend?",
        "What is RAG?",
      ],
      errorServer: "Error connecting to the server",
      errorStream: "Could not read the response",
      errorConnection: "Connection error",
    },
  },

  data: {
    bloques: {
      "antes-de-empezar": {
        titulo: "Before You Start",
        descripcion: "Introduction and how to get the most out of this platform",
      },
      fundamentos: {
        titulo: "AI Fundamentals",
        descripcion: "Essential concepts: Machine Learning, Deep Learning, LLM, Transformers and more",
      },
      ecosistema: {
        titulo: "Ecosystem Map",
        descripcion: "Explore the main AI tools and compare them",
      },
      prompting: {
        titulo: "Prompt Engineering",
        descripcion: "Master the art of communicating effectively with AI",
      },
      "ia-docencia": {
        titulo: "AI Applied to Teaching",
        descripcion: "Tools and techniques to transform education with AI",
      },
      "ia-multimodal": {
        titulo: "Multimodal AI",
        descripcion: "Images, video, audio and presentations with artificial intelligence",
      },
      programacion: {
        titulo: "Assisted Programming",
        descripcion: "Cursor, Copilot, Claude Code and more tools for developers",
      },
      agentes: {
        titulo: "Agents and Automation",
        descripcion: "MCP, RAG, autonomous agents and workflow automation",
      },
      etica: {
        titulo: "Ethics and Responsibility",
        descripcion: "Privacy, GDPR, copyright and responsible use of AI",
      },
      laboratorio: {
        titulo: "Laboratory",
        descripcion: "Experiments, comparisons, challenges and real-world cases",
      },
      novedades: {
        titulo: "What's New",
        descripcion: "News, new models, updates and ecosystem trends",
      },
    },

    glosarioCategorias: {
      todas: "All",
      conceptos: "Concepts",
      ml: "ML",
      modelos: "Models",
      tecnico: "Technical",
      prompting: "Prompting",
      herramientas: "Tools",
      limitaciones: "Limitations",
    },

    glosario: [
      { termino: "AI agent", definicion: "An AI system capable of making decisions and carrying out actions autonomously to achieve a specific goal. It can browse the internet, use tools and run code.", categoria: "conceptos" },
      { termino: "Hallucination", definicion: "When an AI model generates information that seems plausible but is completely false or invented. Hallucinations are one of the most important limitations of LLMs.", categoria: "limitaciones" },
      { termino: "API", definicion: "Application Programming Interface. A set of rules that allows two applications to communicate with each other. APIs make it possible to integrate AI into other applications.", categoria: "tecnico" },
      { termino: "Supervised Learning", definicion: "A type of machine learning in which the model is trained with labelled data, that is, data that already has the correct answer. The model learns to predict the correct output.", categoria: "ml" },
      { termino: "Unsupervised Learning", definicion: "A type of machine learning in which the model finds patterns in unlabelled data without knowing the correct answer. Useful for clustering and segmentation.", categoria: "ml" },
      { termino: "Reinforcement Learning", definicion: "A type of machine learning in which an agent learns to make decisions through trial and error, receiving rewards for correct actions and penalties for incorrect ones.", categoria: "ml" },
      { termino: "Batch size", definicion: "Number of training examples processed before updating the model's parameters. A larger batch size can improve training stability.", categoria: "tecnico" },
      { termino: "Chain-of-Thought (CoT)", definicion: "A prompting technique that asks the model to reason step by step before answering. It improves accuracy on complex problems and reasoning tasks.", categoria: "prompting" },
      { termino: "Chatbot", definicion: "A program that simulates human conversation. Modern AI chatbots can hold complex conversations and help with a wide range of tasks.", categoria: "herramientas" },
      { termino: "Context (context window)", definicion: "The amount of information an AI model can 'remember' and consider when generating a response. It is measured in tokens. A larger context allows longer conversations.", categoria: "tecnico" },
      { termino: "Deep Learning", definicion: "A subset of Machine Learning that uses neural networks with many (deep) layers to learn complex patterns. It is the foundation of today's most powerful models.", categoria: "ml" },
      { termino: "Dataset", definicion: "A set of data used to train an AI model. The quality and quantity of the dataset largely determine the quality of the resulting model.", categoria: "tecnico" },
      { termino: "Embedding", definicion: "A numerical representation of text, an image or another type of data that captures its semantic meaning. Embeddings allow AI to 'understand' the relationship between concepts.", categoria: "tecnico" },
      { termino: "Training", definicion: "The process of teaching an AI model by adjusting its parameters using example data. It can last from minutes to months depending on the model.", categoria: "tecnico" },
      { termino: "Few-shot prompting", definicion: "A prompting technique in which examples of the expected result are provided before asking for the real task. It helps guide the model towards the desired format.", categoria: "prompting" },
      { termino: "Fine-tuning", definicion: "The process of adjusting a pre-trained model with specific data to improve its performance on a particular task. It allows general models to be customised.", categoria: "tecnico" },
      { termino: "Retrieval-Augmented Generation (RAG)", definicion: "A technique that combines text generation with searching for relevant information in an external knowledge base. It enables more accurate and up-to-date answers.", categoria: "tecnico" },
      { termino: "GPT", definicion: "Generative Pre-trained Transformer. A type of language model developed by OpenAI that generates predictive text. It is the foundation of ChatGPT.", categoria: "modelos" },
      { termino: "Gradient", definicion: "A mathematical value that indicates the direction and magnitude of a model's error, used during training to adjust the parameters and minimise errors.", categoria: "tecnico" },
      { termino: "Hyperparameters", definicion: "Parameters that are configured before training a model, such as the learning rate, number of layers or batch size. They significantly influence performance.", categoria: "tecnico" },
      { termino: "Inference", definicion: "The process of using an already trained model to generate predictions or answers to new questions. It is what happens every time you interact with an AI.", categoria: "tecnico" },
      { termino: "Prompt Engineering", definicion: "The discipline of designing optimised instructions to get the best results from an AI model. It includes techniques such as few-shot, chain of thought and more.", categoria: "prompting" },
      { termino: "Artificial Intelligence (AI)", definicion: "A branch of computer science that creates systems capable of performing tasks that normally require human intelligence. It includes learning, reasoning, perception and language.", categoria: "conceptos" },
      { termino: "Artificial General Intelligence (AGI)", definicion: "A hypothetical AI that would match or surpass human intelligence on any cognitive task. It does not exist today; current systems are narrow AI.", categoria: "conceptos" },
      { termino: "Narrow AI (ANI)", definicion: "AI designed for a specific task, such as recognising images or translating texts. All current AI systems are ANI, not AGI.", categoria: "conceptos" },
      { termino: "LLM (Large Language Model)", definicion: "A language model trained on enormous amounts of text data. It can generate, translate, summarise and answer questions. Examples: GPT-4, Claude, Gemini.", categoria: "modelos" },
      { termino: "Machine Learning", definicion: "An approach to AI in which systems learn from data without being explicitly programmed for each task. The model finds patterns in the data and uses them to make predictions.", categoria: "ml" },
      { termino: "Foundation model", definicion: "Massive AI models trained on large amounts of data that can be adapted to multiple tasks. GPT-4, Claude and Gemini are foundation models.", categoria: "modelos" },
      { termino: "Multimodal", definicion: "An AI model's ability to process and generate several types of data at the same time: text, images, audio and video.", categoria: "conceptos" },
      { termino: "Neuron (artificial)", definicion: "The basic unit of a neural network that receives inputs, processes them and produces an output. Inspired by the biological neurons of the human brain.", categoria: "ml" },
      { termino: "Overfitting", definicion: "When a model fits the training data too closely, including noise and irrelevant details, and does not generalise well to new data. It is a common mistake.", categoria: "ml" },
      { termino: "Parameters", definicion: "The internal values that an AI model learns during training. Large models can have anywhere from millions to billions of parameters.", categoria: "tecnico" },
      { termino: "Perceptron", definicion: "The simplest type of neural network, with a single layer. It was the foundation of modern networks. On its own, it can only solve linearly separable problems.", categoria: "ml" },
      { termino: "Pre-training", definicion: "The initial phase in which a model learns from large amounts of unlabelled data. It is later fine-tuned for specific tasks. It saves time and resources.", categoria: "tecnico" },
      { termino: "Prompt", definicion: "The instruction or question we give to an AI. A good prompt produces better results. Prompt engineering is the art of writing effective instructions.", categoria: "prompting" },
      { termino: "RAG (Retrieval-Augmented Generation)", definicion: "A technique that combines text generation with searching for relevant information. It allows AIs to answer with up-to-date and specific information.", categoria: "tecnico" },
      { termino: "Neural Network", definicion: "A computational system inspired by the human brain, made up of layers of interconnected neurons. It is the basis of deep learning.", categoria: "ml" },
      { termino: "Convolutional Neural Network (CNN)", definicion: "A type of neural network specialised in processing images and data with a grid-like structure. It uses filters to detect visual patterns.", categoria: "ml" },
      { termino: "Recurrent Neural Network (RNN)", definicion: "A type of neural network designed for sequential data such as text or audio. It has memory of previous steps, but is less efficient than transformers.", categoria: "ml" },
      { termino: "Regression", definicion: "A machine learning technique used to predict continuous numerical values, such as prices, temperatures or times. The model finds a function that relates variables.", categoria: "ml" },
      { termino: "Bias", definicion: "A systematic error in an AI model that favours certain results over others. It can come from unbalanced training data or from the design of the algorithm.", categoria: "limitaciones" },
      { termino: "Token", definicion: "The basic unit of text that an AI model processes. A token can be a word, part of a word or a character. API prices are usually measured in tokens.", categoria: "tecnico" },
      { termino: "Transformer", definicion: "The neural network architecture that revolutionised AI. Published in 2017, it is the basis of all modern language models. It allows text to be processed in parallel.", categoria: "ml" },
      { termino: "Transfer Learning", definicion: "A technique in which a model trained for one task is reused as a starting point for a different but related task. It saves training time.", categoria: "tecnico" },
      { termino: "Learning rate", definicion: "A hyperparameter that controls how much the model's parameters are adjusted at each step of training. If it is too high, the model can diverge; if it is too low, training becomes slow.", categoria: "tecnico" },
      { termino: "Underfitting", definicion: "When a model is too simple to capture the patterns in the data. It produces poor results both on training data and on new data.", categoria: "ml" },
      { termino: "Zero-shot prompting", definicion: "A technique in which the AI is asked to perform a task without providing prior examples. It works well for tasks the model already understands from its training.", categoria: "prompting" },
    ],

    cronologia: [
      { titulo: "Turing Test", descripcion: "Alan Turing publishes 'Computing Machinery and Intelligence' and proposes the Turing Test to measure a machine's intelligence." },
      { titulo: "The birth of AI", descripcion: "Dartmouth Conference: John McCarthy coins the term 'artificial intelligence' and marks the official start of the field." },
      { titulo: "ELIZA: the first chatbot", descripcion: "Joseph Weizenbaum creates ELIZA, the first natural language processing program that simulated a conversation with a psychotherapist." },
      { titulo: "Deep Blue defeats Kasparov", descripcion: "IBM's Deep Blue supercomputer defeats world chess champion Garry Kasparov, proving that a machine can outperform a human on specific tasks." },
      { titulo: "Modern Deep Learning is born", descripcion: "Geoffrey Hinton publishes a key paper on deep learning that revives interest in deep neural networks." },
      { titulo: "Watson wins on Jeopardy!", descripcion: "IBM's Watson system beats the human champions on the quiz show Jeopardy!, demonstrating advanced natural language processing capabilities." },
      { titulo: "AlexNet revolutionises computer vision", descripcion: "Alex Krizhevsky wins ImageNet with AlexNet, a deep neural network that drastically reduces the error rate in image recognition." },
      { titulo: "The birth of GANs", descripcion: "Ian Goodfellow invents Generative Adversarial Networks, making it possible to generate realistic images for the first time." },
      { titulo: "OpenAI is founded", descripcion: "Sam Altman, Elon Musk and others found OpenAI with the mission of developing AI that is safe and beneficial to humanity." },
      { titulo: "Attention Is All You Need", descripcion: "Google publishes the paper that introduces the Transformer architecture, the foundation of all modern language models (GPT, BERT, Claude, Gemini)." },
      { titulo: "Google's BERT", descripcion: "Google launches BERT, a pre-trained language model that revolutionises natural language understanding." },
      { titulo: "GPT is born", descripcion: "OpenAI launches GPT-1, the first generative pre-trained model based on transformers, with 117 million parameters." },
      { titulo: "GPT-2: controversy and power", descripcion: "OpenAI develops GPT-2 with 1.5 billion parameters. They initially do not publish it for fear of misuse, setting an important ethical precedent." },
      { titulo: "GPT-3 and the OpenAI API", descripcion: "OpenAI launches GPT-3 with 175 billion parameters and a commercial API. It marks the beginning of generative AI accessible to the public." },
      { titulo: "DALL-E is born", descripcion: "OpenAI presents DALL-E, a model capable of generating images from text descriptions." },
      { titulo: "GitHub Copilot", descripcion: "GitHub and OpenAI launch Copilot, an AI code assistant that revolutionises assisted programming." },
      { titulo: "Stable Diffusion: free AI for everyone", descripcion: "Stability AI launches Stable Diffusion, an open source image generator that runs locally, democratising visual creation." },
      { titulo: "ChatGPT: the massive explosion", descripcion: "OpenAI launches ChatGPT based on GPT-3.5. It reaches 100 million users in 2 months, becoming the fastest-growing application in history." },
      { titulo: "GPT-4 is multimodal", descripcion: "OpenAI launches GPT-4 with multimodal capabilities (text and images). It is the most powerful model of its time." },
      { titulo: "Anthropic's Claude", descripcion: "Anthropic launches Claude, an AI assistant focused on safety and deep analysis, competing directly with ChatGPT." },
      { titulo: "Google's Gemini", descripcion: "Google launches Gemini, its most powerful multimodal model with a context of up to 2 million tokens, integrated with the Google ecosystem." },
      { titulo: "Cursor: AI code editor", descripcion: "Cursor launches its code editor with native AI, competing directly with Copilot and redefining the assisted programming experience." },
      { titulo: "Llama 3: powerful open source", descripcion: "Meta launches Llama 3, an open source model that competes with GPT-4, democratising access to high-performance models." },
      { titulo: "Sora: AI video", descripcion: "OpenAI presents Sora, a text-to-video generation model with impressive quality and realism." },
      { titulo: "DeepSeek breaks into the market", descripcion: "The Chinese startup DeepSeek launches a model that competes with GPT-4 at a fraction of the cost, revolutionising the AI API market." },
      { titulo: "Autonomous AI agents", descripcion: "AI agents capable of carrying out complex tasks autonomously become the dominant trend, with multiple platforms launching their own solutions." },
      { titulo: "1M+ token context", descripcion: "Gemini 2.0 and competing models reach context windows of more than 1 million tokens, making it possible to process documents the size of entire novels." },
      { titulo: "Generalised multimodal AI", descripcion: "Most leading models are multimodal, integrating text, image, audio and video into a single unified interface. Atlas IA becomes established as a leading educational platform." },
    ],

    ecosistema: {
      categorias: {
        "asistente-conversacion": { nombre: "Conversational Assistants", descripcion: "General chatbots that answer questions and help with a variety of tasks" },
        codigo: { nombre: "Coding Tools", descripcion: "Assistants for programming, debugging and developing software" },
        imagen: { nombre: "Image Generation", descripcion: "Tools that create or edit images from text" },
        "audio-video": { nombre: "Audio and Video", descripcion: "AI for creating, editing or transforming audio and video" },
        "no-code": { nombre: "No-Code Platforms", descripcion: "Platforms for building applications and automations without coding" },
        productividad: { nombre: "Productivity", descripcion: "Tools for organising, summarising and working faster" },
        investigacion: { nombre: "Research", descripcion: "Academic tools and advanced search" },
      },
      precio: {
        gratis: "Free",
        freemium: "Freemium",
        pago: "Paid",
        dePago: "Paid",
      },
      herramientas: {
        chatgpt: {
          nombre: "ChatGPT",
          descripcion: "The world's most popular AI assistant. Versatile, easy to use and integrated across multiple platforms.",
          caracteristicas: ["Natural, fluid conversation", "Multimodal: text, images, audio", "GPT-4o with advanced reasoning", "Custom plugins and GPTs", "Web browsing and code integration", "Memory across conversations"],
          idealPara: ["General use", "Quick questions", "Creative writing", "Basic analysis"],
          precioDetalle: "Limited free plan, Plus $20/month, Pro $200/month",
          ventanaContexto: "128K tokens",
          fortalezaPrincipal: "Versatility and ease of use",
          debilidadPrincipal: "Can be imprecise on very deep analysis",
        },
        claude: {
          nombre: "Claude",
          descripcion: "Known for its deep analysis capabilities and nuanced answers. Excellent with long documents.",
          caracteristicas: ["200K token context window", "Deep, detailed analysis", "Excellent with code", "Greater accuracy and fewer hallucinations", "Careful writing mode", "Projects with custom documents"],
          idealPara: ["Document analysis", "Programming", "Technical writing", "Research"],
          precioDetalle: "Limited free plan, Pro $20/month",
          ventanaContexto: "200K tokens",
          fortalezaPrincipal: "Depth of analysis and accuracy",
          debilidadPrincipal: "Fewer third-party integrations",
        },
        gemini: {
          nombre: "Gemini",
          descripcion: "Google's multimodal assistant with a huge context window and integration with the entire Google ecosystem.",
          caracteristicas: ["Context of up to 2 million tokens", "Integrated with Google Workspace", "Excellent with images and video", "Access to real-time information", "Built-in Google Search", "Gemini Advanced with Deep Think"],
          idealPara: ["Long documents", "Google Workspace", "Searches", "Multimodal analysis"],
          precioDetalle: "Limited free plan, Advanced $20/month",
          ventanaContexto: "2M tokens",
          fortalezaPrincipal: "Huge context and Google ecosystem",
          debilidadPrincipal: "Sometimes less precise in detailed analysis",
        },
        copilot: {
          nombre: "GitHub Copilot",
          descripcion: "The most widely used code assistant. It integrates directly into your editor and suggests code in real time.",
          caracteristicas: ["Real-time code suggestions", "In-editor chat", "Intelligent autocomplete", "Support for multiple languages", "Copilot X with multimodal", "Native integration with VS Code"],
          idealPara: ["Developers", "Learning to code", "Programming productivity"],
          precioDetalle: "$10/month individual, $19/month business",
          ventanaContexto: "—",
          fortalezaPrincipal: "Direct integration into the editor",
          debilidadPrincipal: "Code only, not for other tasks",
        },
        cursor: {
          nombre: "Cursor",
          descripcion: "Code editor with built-in AI. A VS Code supercharged with native AI capabilities.",
          caracteristicas: ["Full editor with native AI", "Composer for changes across multiple files", "Chat with project context", "Advanced code generation", "Agent mode for complex tasks", "Based on VS Code (compatible)"],
          idealPara: ["Full development", "Large projects", "Refactoring"],
          precioDetalle: "Limited free plan, Pro $20/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "Deep integration of AI into code editing",
          debilidadPrincipal: "Requires an initial learning curve",
        },
        dalle: {
          nombre: "DALL-E 3",
          descripcion: "Image generator integrated into ChatGPT. Creates images from detailed descriptions.",
          caracteristicas: ["Generation from detailed text", "Integrated into ChatGPT", "Image editing", "Good understanding of prompts", "Varied styles", "Commercial use allowed"],
          idealPara: ["Illustrations", "Visual prototypes", "Social media content"],
          precioDetalle: "Included with ChatGPT Plus",
          ventanaContexto: "—",
          fortalezaPrincipal: "Easy to use with natural language prompts",
          debilidadPrincipal: "Less precise control than Midjourney",
        },
        midjourney: {
          nombre: "Midjourney",
          descripcion: "High artistic quality image generator. Known for its exceptional aesthetics.",
          caracteristicas: ["Superior artistic quality", "Multiple artistic styles", "Fast generation", "Advanced resolution upscaling", "Variations and remix", "Active Discord community"],
          idealPara: ["Digital art", "Visual concepts", "Graphic design"],
          precioDetalle: "Plans from $10/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "Exceptional aesthetic quality",
          debilidadPrincipal: "No full web interface (yet)",
        },
        "stable-diffusion": {
          nombre: "Stable Diffusion",
          descripcion: "Open source image generator. Runs locally with full control over the process.",
          caracteristicas: ["Completely open source", "Runs locally", "Full control over the process", "Multiple interfaces (Automatic1111, ComfyUI)", "Customisable models", "No API costs"],
          idealPara: ["Developers", "Technical artists", "Custom use"],
          precioDetalle: "Free (requires powerful hardware)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Free and customisable",
          debilidadPrincipal: "Requires technical knowledge",
        },
        elevenlabs: {
          nombre: "ElevenLabs",
          descripcion: "Leading AI speech synthesis platform. Voice cloning and ultra-realistic audio generation.",
          caracteristicas: ["Ultra-realistic voices", "Voice cloning", "Multilingual", "Audiobooks and podcasts", "API for developers", "Emotion and tone control"],
          idealPara: ["Podcasts", "Audiobooks", "Audio-visual content", "Accessibility"],
          precioDetalle: "Limited free plan, plans from $5/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "The most realistic voice quality on the market",
          debilidadPrincipal: "Cost scales up for intensive use",
        },
        runway: {
          nombre: "Runway",
          descripcion: "AI video creation platform. From generation to editing with Gen-3 Alpha.",
          caracteristicas: ["Text-to-video generation", "AI video editing", "High-quality Gen-3 Alpha", "Motion Brush to control movement", "After Effects integration", "Compositing tools"],
          idealPara: ["Content creators", "Videographers", "Advertising"],
          precioDetalle: "Limited free plan, plans from $12/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "Advanced AI video editing",
          debilidadPrincipal: "High cost for professional use",
        },
        "notion-ai": {
          nombre: "Notion AI",
          descripcion: "AI built into Notion for writing, organisation and knowledge management.",
          caracteristicas: ["Document summarisation", "Content generation", "Built-in translation", "Semantic search", "Smart autocomplete", "Database integration"],
          idealPara: ["Knowledge management", "Documentation", "Personal organisation"],
          precioDetalle: "$10/month per user (with Notion)",
          ventanaContexto: "—",
          fortalezaPrincipal: "Perfect integration with Notion",
          debilidadPrincipal: "Only works within Notion",
        },
        perplexity: {
          nombre: "Perplexity",
          descripcion: "AI search engine that cites its sources. Ideal for deep, verifiable research.",
          caracteristicas: ["Search with source citations", "Pro Search for complex questions", "Academic mode", "Images and tables in results", "Collaboration in spaces", "API for developers"],
          idealPara: ["Research", "Students", "Professionals", "Journalism"],
          precioDetalle: "Limited free plan, Pro $20/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "Verifiable citations and transparency",
          debilidadPrincipal: "Can be less creative than ChatGPT",
        },
        make: {
          nombre: "Make (ex-Integromat)",
          descripcion: "Visual automation platform. Connects applications and creates complex workflows without code.",
          caracteristicas: ["Visual automation through scenarios", "Thousands of integrations", "Advanced conditional logic", "Built-in generative AI", "Predefined templates", "Real-time execution"],
          idealPara: ["Process automation", "Marketing", "Entrepreneurs"],
          precioDetalle: "Free (1,000 operations/month), from $9/month",
          ventanaContexto: "—",
          fortalezaPrincipal: "Visual flexibility without code",
          debilidadPrincipal: "Learning curve for complex scenarios",
        },
      },
      criterios: {
        "facilidad-uso": {
          nombre: "Ease of use",
          descripcion: "How easy it is to start using the tool",
          opciones: ["Beginner", "Intermediate", "Advanced"],
        },
        "calidad-respuesta": {
          nombre: "Response quality",
          descripcion: "Accuracy and usefulness of the generated responses",
          opciones: ["Basic", "Good", "Excellent"],
        },
        velocidad: {
          nombre: "Speed",
          descripcion: "How fast it generates responses",
          opciones: ["Slow", "Average", "Fast"],
        },
        precio: {
          nombre: "Price",
          descripcion: "Value for money",
          opciones: ["Expensive", "Reasonable", "Cheap/Free"],
        },
        personalizacion: {
          nombre: "Customisation",
          descripcion: "Ability to adapt the tool to specific needs",
          opciones: ["Basic", "Medium", "High"],
        },
      },
      arbol: {
        inicio: {
          pregunta: "What do you need to do?",
          descripcion: "Select the main task you want to carry out",
          opciones: ["Chat and ask questions", "Program or develop software", "Create images or designs", "Work with audio or video", "Automate processes", "Research information"],
        },
        conversacion: {
          pregunta: "What kind of conversation do you need?",
          descripcion: "Each assistant is better at certain tasks",
          opciones: ["Quick answers and general use", "Deep analysis of documents", "Access to up-to-date information", "Research with verified sources"],
        },
        codigo: {
          pregunta: "What do you prefer for programming?",
          descripcion: "There are different approaches depending on your work style",
          opciones: ["Suggestions in my current editor", "A full editor with AI", "General code assistant"],
        },
        imagen: {
          pregunta: "What kind of images do you need?",
          descripcion: "Each tool has different strengths in visual generation",
          opciones: ["Fast and easy from text", "High artistic quality", "Full control and free"],
        },
        "audio-video": {
          pregunta: "What do you need to create?",
          descripcion: "AI tools for audio and video are evolving fast",
          opciones: ["Voices and narration", "AI videos"],
        },
      },
    },

    prompting: {
      roles: {
        ninguno: { label: "None in particular", descripcion: "No specific role" },
        profesor: { label: "Teacher / Educator", descripcion: "Explains concepts clearly and didactically" },
        periodista: { label: "Journalist / Writer", descripcion: "Clear, objective and well-structured writing" },
        abogado: { label: "Lawyer / Legal advisor", descripcion: "Precise, formal, based on regulations" },
        cientifico: { label: "Scientist / Researcher", descripcion: "Academic rigour, data and references" },
        marketing: { label: "Marketing Expert", descripcion: "Persuasive, focused on conversion" },
        ceo: { label: "CEO / Executive", descripcion: "Strategic, executive and practical vision" },
        desarrollador: { label: "Developer / Programmer", descripcion: "Technical, precise, with code examples" },
        creativo: { label: "Creative / Designer", descripcion: "Original, visual, innovative" },
        psicologo: { label: "Psychologist / Coach", descripcion: "Empathetic, understanding, people-oriented" },
      },
      formatos: {
        parrafos: { label: "Paragraphs", descripcion: "Flowing text in paragraphs" },
        lista: { label: "Bullet list", descripcion: "Key points listed" },
        tabla: { label: "Comparison table", descripcion: "Data organised in columns" },
        pasos: { label: "Steps / Instructions", descripcion: "Numbered sequence of actions" },
        email: { label: "Email / Letter", descripcion: "Correspondence format" },
        codigo: { label: "Code", descripcion: "Code blocks with explanation" },
        esquema: { label: "Outline", descripcion: "Hierarchical structure of content" },
        dialogo: { label: "Dialogue / Conversation", descripcion: "Question and answer format" },
      },
      tonos: {
        profesional: { label: "Professional", descripcion: "Formal and corporate" },
        casual: { label: "Casual / Friendly", descripcion: "Warm and natural" },
        divulgativo: { label: "Accessible", descripcion: "Clear for all audiences" },
        humoristico: { label: "Humorous", descripcion: "With a sense of humour" },
        inspirador: { label: "Inspirational / Motivational", descripcion: "Motivates to action" },
        tecnico: { label: "Technical / Specialised", descripcion: "With industry jargon" },
        formal: { label: "Formal / Serious", descripcion: "Very formal, for official documents" },
      },
      audiencias: {
        general: { label: "General public", descripcion: "For anyone" },
        principiante: { label: "Beginners", descripcion: "People with no prior knowledge" },
        profesional: { label: "Industry professionals", descripcion: "With experience in the field" },
        ejecutivo: { label: "Executives / Managers", descripcion: "Senior management" },
        estudiante: { label: "Students", descripcion: "In academic training" },
        cliente: { label: "Customers / Users", descripcion: "People who use your product" },
        ninos: { label: "Children / Teenagers", descripcion: "Young audience" },
      },
      extensiones: {
        "muy-corta": { label: "Very short (< 50 words)", descripcion: "Brief answer" },
        corta: { label: "Short (50-150 words)", descripcion: "Concise summary" },
        media: { label: "Medium (150-300 words)", descripcion: "Standard length" },
        larga: { label: "Long (300-500 words)", descripcion: "Detailed answer" },
        "muy-larga": { label: "Very long (500+ words)", descripcion: "In-depth analysis" },
      },
      generar: {
        eresUn: "You are a {rol}.",
        contexto: "Context",
        enFormato: "in {x} format",
        conTono: "with a {x} tone",
        dirigidoA: "aimed at {x}",
        responde: "Respond {especificaciones}.",
      },
    },

    badges: {
      "first-lesson": { nombre: "First step", descripcion: "You completed your first lesson" },
      "five-lessons": { nombre: "Dedicated learner", descripcion: "You completed 5 lessons" },
      "ten-lessons": { nombre: "Explorer", descripcion: "You completed 10 lessons" },
      "twenty-five-lessons": { nombre: "Master of knowledge", descripcion: "You completed 25 lessons" },
      "fifty-lessons": { nombre: "Scholar", descripcion: "You completed 50 lessons" },
      "seventy-five-lessons": { nombre: "AI Sage", descripcion: "You completed 75 lessons" },
      "xp-100": { nombre: "Centurion", descripcion: "You earned 100 XP" },
      "xp-500": { nombre: "Veteran", descripcion: "You earned 500 XP" },
      "xp-1000": { nombre: "Legend", descripcion: "You earned 1,000 XP" },
      "xp-2500": { nombre: "Immortal", descripcion: "You earned 2,500 XP" },
      "xp-5000": { nombre: "AI God", descripcion: "You earned 5,000 XP" },
      "streak-7": { nombre: "Fire streak", descripcion: "7 consecutive days of learning" },
      "streak-14": { nombre: "Unstoppable streak", descripcion: "14 consecutive days of learning" },
      "streak-30": { nombre: "Living legend", descripcion: "30 consecutive days of learning" },
      "ecosistema-complete": { nombre: "Ecosystem explorer", descripcion: "You completed all the lessons in Block 2" },
      "comparador-user": { nombre: "Expert comparator", descripcion: "You used the interactive tool comparator" },
      "arbol-decision": { nombre: "Smart decision", descripcion: "You completed the tool decision tree" },
      "prompting-complete": { nombre: "Prompt master", descripcion: "You completed all the lessons in Block 3" },
      "calculadora-prompts": { nombre: "Prompt architect", descripcion: "You used the prompt calculator" },
      "reto-diario": { nombre: "Regular", descripcion: "You completed a daily challenge" },
      "reto-semanal": { nombre: "Weekly champion", descripcion: "You completed a weekly challenge" },
      "racha-3": { nombre: "Consistent", descripcion: "You kept a 3-day streak" },
      "primer-proyecto": { nombre: "Architect in training", descripcion: "You completed your first project" },
      "tres-proyectos": { nombre: "Builder", descripcion: "You completed 3 projects" },
      "todos-proyectos": { nombre: "Master builder", descripcion: "You completed all the projects" },
      "chat-ia": { nombre: "Laboratory explorer", descripcion: "You used the AI chat in the laboratory" },
      "agentes-complete": { nombre: "Agent architect", descripcion: "You completed all the lessons in Block 7" },
      "ia-docencia-complete": { nombre: "AI educator", descripcion: "You completed all the lessons in Block 4" },
      "ia-multimodal-complete": { nombre: "Multimodal explorer", descripcion: "You completed all the lessons in Block 5" },
      "programacion-complete": { nombre: "Software architect", descripcion: "You completed all the lessons in Block 6" },
      "etica-complete": { nombre: "Ethical guardian", descripcion: "You completed all the lessons in Block 8" },
      "laboratorio-complete": { nombre: "AI scientist", descripcion: "You completed all the lessons in Block 9" },
      "novedades-complete": { nombre: "Trendsetter", descripcion: "You completed all the lessons in Block 10" },
      "ingeniero-prompts": { nombre: "Prompt engineer", descripcion: "You used the interactive prompt studio" },
      "arquitecto-flujos": { nombre: "Flow architect", descripcion: "You created an agent flow in AgentFlow" },
      "evaluador-modelos": { nombre: "Model evaluator", descripcion: "You used the model comparator" },
    },

    retos: {
      "ch-daily-1": { title: "One lesson today", description: "Complete at least 1 lesson" },
      "ch-daily-2": { title: "Active streak", description: "Visit the platform and complete a lesson" },
      "ch-daily-3": { title: "Explore a tool", description: "Use the tool comparator" },
      "ch-weekly-1": { title: "3 lessons this week", description: "Complete 3 lessons in 7 days" },
      "ch-weekly-2": { title: "Try 3 tools", description: "Use the comparator 3 times" },
      "ch-weekly-3": { title: "3-day streak", description: "Keep a 3-day consecutive streak" },
    },

    proyectos: {
      "proyecto-1": { title: "Simple chatbot with prompts", description: "Design a system prompt for a customer support assistant" },
      "proyecto-2": { title: "Sentiment analysis", description: "Use AI to analyse the sentiment of 10 product reviews" },
      "proyecto-3": { title: "Image generator", description: "Create a series of 5 images with DALL-E or Midjourney for a campaign" },
      "proyecto-4": { title: "Automation flow", description: "Design a workflow with Make or Zapier that uses AI" },
      "proyecto-5": { title: "Basic RAG agent", description: "Build an agent with information retrieval using prompts" },
      "proyecto-6": { title: "Model comparison", description: "Compare GPT-4, Claude and Gemini on a specific task and document the results" },
    },
  },
} satisfies Dictionary;
