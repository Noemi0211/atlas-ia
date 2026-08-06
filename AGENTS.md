# Atlas IA — Estado del Proyecto

## Qué es
Plataforma web educativa para aprender Inteligencia Artificial en español.
Next.js 16 + TypeScript + Tailwind CSS v4 + MDX + Zustand + Framer Motion + Prisma/SQLite + NextAuth.

## Comandos de build
```bash
npm run dev       # Desarrollo
npm run build     # Build producción
npx tsc --noEmit  # TypeScript check
npm run lint      # ESLint
```

## Fases completadas

### Fase 1 ✅
- Proyecto base Next.js con App Router
- Design system completo (colores claro/oscuro, Inter, componentes UI)
- Layout: Sidebar colapsable, Header con buscador, Breadcrumbs, Footer
- Sistema de contenido MDX con next-mdx-remote → migrado a `next-mdx-remote/rsc` para compatibilidad con Next.js 16
- Bloque 0 completo: 6 lecciones con contenido real
- Glosario, página 404, responsive, modo oscuro

### Fase 2 ✅
- Bloque 1 Fundamentos: 10 lecciones MDX con contenido real
- Búsqueda funcional (API Route /api/search + modal Ctrl+K)
- Gamificación real con Zustand + localStorage (XP, insignias, streak, favoritos)
- Componentes de motion (Framer Motion)
- LessonCompleteButton + FavoriteButton en cada lección
- Sidebar con progreso real por bloque

### Fase 3 ✅
- Bloque 2 Mapa del Ecosistema: 8 lecciones MDX con contenido real
- Comparador interactivo de herramientas IA
- Árbol de decisión de herramientas
- Datos completos de 13 herramientas IA (ChatGPT, Claude, Gemini, Copilot, Cursor, DALL-E, Midjourney, Stable Diffusion, ElevenLabs, Runway, Notion AI, Perplexity, Make)
- 7 categorías de herramientas
- Badges nuevos de ecosistema (explorador, comparador, árbol)

### Fase 4 ✅
- Bloque 3 Ingeniería de Prompt: 8 lecciones MDX con contenido real
- Calculadora de prompts interactiva
- Datos de prompting en lib/prompting-data.ts (roles, formatos, tonos, audiencias)
- Badges nuevos de prompting (maestro del prompt, arquitecto de prompts)

### Fase 5 ✅
- Búsqueda avanzada: expandida a glosario y herramientas del ecosistema
- Glosario completo: 48 términos con datos externos (lib/glosario-data.ts), búsqueda inline y filtro por categoría
- Cronología: 28 hitos históricos de IA con timeline interactivo filtrable por categoría (app/cronologia + componente CronologiaTimeline)
- Cronología añadida a NAV_ITEMS

### Fase 6 ✅
- Gamificación extendida: ranking global, retos diarios/semanales, proyectos prácticos
- Página de perfil con estadísticas, insignias y nivel
- Notificaciones en tiempo real con campana en el header
- 12 nuevos badges (rachas, retos, proyectos, hitos de lecciones y XP)

### Fase 7 ✅
- Base de datos SQLite con Prisma ORM (User, Account, Session, VerificationToken)
- Autenticación con NextAuth.js v4 + Credentials Provider
- Páginas de login (`/auth/login`) y registro (`/auth/register`)
- API de registro (`/api/register`) y sincronización de progreso (`/api/sync-progress`)
- Menú de usuario en el header con sesión y cierre
- Middleware de protección para `/perfil`
- Server session helper en `lib/getServerSession.ts`
- Tipos extendidos de NextAuth para session.user.id

### Fase 8 ✅
- Chat de IA interactivo en `/laboratorio` con streaming de tokens (SSE)
- API de chat (`/api/chat`) con soporte OpenAI SDK (gpt-4o-mini si hay API key)
- Sistema de respuestas educativo offline con 12 temas predefinidos (LLM, RAG, Transformers, etc.)
- Componente AIChat con burbujas de mensajes, sugerencias y markdown
- Nuevo badge "Explorador del laboratorio" (🔬) al usar el chat por primera vez
- Laboratorio añadido a la navegación principal (Sidebar + NavItems)

### Fase 9 ✅
- Bloque 7 Agentes y Automatización: 8 lecciones MDX con contenido real
- Contenido: agentes IA, MCP, RAG avanzado, Make/Zapier/n8n, LangChain/CrewAI, casos prácticos
- Nuevo badge "Arquitecto de agentes" (🤖) al completar las 8 lecciones
- Lógica de desbloqueo del badge añadida en `stores/progress.ts`
- Build reparado: migración de `next-mdx-remote` a API RSC (`next-mdx-remote/rsc`)
- Fix: directorios `content/bloque-N` renombrados a slugs (`antes-de-empezar`, `fundamentos`, `ecosistema`, `prompting`, `agentes`)
- Fix: `<Callout type="important">` inválido cambiado a `type="warning"` en 4 archivos del ecosistema
- Fix: `</callout>` minúscula corregida a `</Callout>` en 2 archivos MDX

### Fase 10 ✅
- Laboratorio expandido con sistema de pestañas (Chat IA, Sandbox de Prompts, Agent Flow, Comparador, Tokens)
- `PromptSandbox.tsx` — Sandbox de prompts interactivo con selectores de rol, formato, tono, audiencia, extensión y generación en vivo desde `lib/prompting-data.ts`
- `AgentFlow.tsx` — Visualizador de pipelines de agentes con nodos arrastrables (Input, LLM, RAG, Tool, Output), reordenamiento y configuración inline
- `ModelComparator.tsx` — Comparador de modelos con selección hasta 4 herramientas, filtro por categoría y tabla comparativa
- `TokenSimulator.tsx` — Simulador de tokens con estimación palabra+carácter, selector de 6 modelos y barra de uso contextual
- 3 nuevos badges: "Ingeniero de prompts" (💡), "Arquitecto de flujos" (🔀), "Evaluador de modelos" (📊)
- XP por interacciones en el laboratorio
- Fix: instalado `remark-gfm` para renderizar tablas Markdown en MDX
- Fix: corregido hydration mismatch del botón de tema en Header (estado `mounted`)
- Fix de erratas en contenido MDX: `elpaper` → `el paper`, `音频` → `audio`, `se invisible` → `es invisible`, `number` → `número`
- Footer actualizado con licencia Creative Commons CC BY-NC-SA 4.0 (icono en `public/icons/cc_by_nc_sa.png`)
- Footer movido a `Shell.tsx` para que sea global en todas las páginas

### Fase 11 ✅
- Sidebar colapsable en escritorio: estado en `Shell.tsx`, botón toggle en `Header.tsx` (icono `PanelLeftClose`/`PanelLeftOpen`), prop `collapsed` en `Sidebar.tsx` cambia a `w-[60px]` ocultando textos
- Contenido MDX completado: Bloques 4 (IA Docencia, 7 lec), 5 (Multimodal, 6 lec), 6 (Programación, 6 lec), 8 (Ética, 6 lec), 9 (Laboratorio, 5 lec), 10 (Novedades, 6 lec) con badges respectivos
- Fix legibilidad botones azules: movido CSS `a { color: var(--primary); }` y todos los estilos globales de `app/globals.css` (líneas 83–217) dentro de `@layer base` para que las utility classes de Tailwind (`text-white`, `text-slate-900`, etc.) en `@layer utilities` los sobreescriban correctamente (CSS cascade layers)
- Todos los botones con `bg-primary` usan `text-white dark:text-slate-900`

### Fase 12 ✅
- Lint limpio: 0 errores y 0 warnings
  - Fix `Header.tsx`: patrón `mounted` migrado de `useEffect(() => setMounted(true), [])` a `useSyncExternalStore` (elimina error `react-hooks/set-state-in-effect`)
  - Fix `ComparadorHerramientas.tsx`: `calcularTotal` envuelto en `useCallback` y añadido a deps de `useMemo`
  - Fix `ModelComparator.tsx`: icono lucide `Image` renombrado a `ImageIcon` (falso positivo `jsx-a11y/alt-text`)
  - Fix `Footer.tsx`: `<img>` → `next/image` (icono CC 52×45 en `public/icons/cc_by_nc_sa.png`)
- Migración `middleware.ts` → `proxy.ts` (Next.js 16 deprecó la convención `middleware`): función renombrada de `middleware` a `proxy`, misma lógica de protección de `/perfil`

### Fase 13 ✅
- Revisión lingüística integral: 106 archivos, 542 sustituciones 1:1, informe en `INFORME_REVISION_TEXTOS.md`
- Adaptación a español de España académico/profesional para FP: anglicismos → español (feedback→retroalimentación, overfitting→sobreajuste, framework→marco de trabajo, dataset→conjunto de datos, pipeline→flujo, sandbox→entorno, debugging→depuración, code review→revisión de código, startup→empresa emergente, paper→artículo…)
- Lenguaje inclusivo natural con colectivos (persona usuaria, alumnado, estudiantado, profesorado, personas desarrolladoras); prohibido el desdoblamiento "los y las"
- Nombres de pestañas del laboratorio traducidos y aplicados al contenido: "Entorno de Prompts" (antes Sandbox de Prompts) y "Flujo de Agentes" (antes Agent Flow)
- Conservados como términos técnicos asentados: prompt, prompting, token, agente, LLM, RAG, MCP, transformer, Machine Learning, Deep Learning, chunking semántico
- Sin tocar: código, JSX, bloques de código, URLs, slugs, ids, nombres de productos/herramientas
- Verificación: lint 0/0, tsc sin errores, build OK (102 páginas SSG)

### Fase 14 ✅ (ajustes de UI tras la revisión lingüística)
- Fix `Sidebar.tsx`: en modo colapsado (`w-[60px]`) los iconos se desplazaron 4px a la izquierda (`-translate-x-1` en los links) para que no queden pegados al borde de la pantalla principal
- Fix `Shell.tsx`: el `Footer` se envolvió en un contenedor con el mismo padding que el contenido principal (`lg:pl-[280px]`, `lg:pl-[60px]` colapsado) para que la columna izquierda no quede oculta bajo la barra lateral fija
- Fix contenido: en `content/fundamentos/01-que-es-ia.mdx` el guion largo de "Siri, ChatGPT, el filtro de tu cámara — todo eso es IA estrecha" se sustituyó por paréntesis: "(todo eso es IA estrecha)."
- Verificado: no existe la forma errónea "empatar" en el proyecto; solo "empatía" y "empatizar" (correctas)
- Lint y tsc limpios tras los cambios

### Fase 15 ✅ (actualización del Bloque 10 Novedades a 2026)
- Lección 01 reescrita al estado de la técnica de julio 2026: GPT-5.6 (Sol/Terra/Luna), Claude 5 (Fable 5, Sonnet 5, Opus 5), Gemini 3.5, Grok 4.5, código abierto (DeepSeek V4, Qwen 3.7, Llama 4, Mistral Large 3) + tabla comparativa actualizada
- Lección 02 actualizada: adopción real de agentes (Gartner 40% a finales de 2026), protocolos MCP ("USB-C de la IA", 97M descargas, Agentic AI Foundation en Linux Foundation), A2A/ACP, SLM en el dispositivo, retos de seguridad de MCP
- Lección 03 actualizada: vídeo con audio nativo (Veo 3.1, Sora 2, Kling 3.0, Runway Gen-4.5, Seedance, Wan), voz a voz en tiempo real, modelos unificados
- Lección 04 actualizada: laboratorios autónomos, Nobel 2024 (Hassabis/Jumper/Hinton/Hopfield), agentes tutores, asistentes de codificación agénticos
- Lección 05 actualizada: AI Act en aplicación plena desde el 2/8/2026 (Anexo III), Digital Omnibus, Oficina Europea de IA, multas hasta 35M €/7%, AI Gigafactories (30.000M €), proyecto EUROPA, Convenio Marco del Consejo de Europa en vigor desde 2025
- Lección 06: añadidas fuentes de documentación técnica (MCP/A2A) y referencia a protocolos en la rutina diaria
- `meta.json`: descripciones de las lecciones 01, 02, 03 y 05 actualizadas
- Lint y tsc limpios tras los cambios

### Fase 16 ✅ (i18n: español, inglés y valenciano)
- Infraestructura i18n nueva en `lib/i18n/`: `config.ts` (locales `es`/`en`/`val`, cookie `atlas-locale`, `localeToIntl`), `server.ts` (`getLocale` lee la cookie), `runtime.ts`, `provider.tsx` (`I18nProvider` + hook `useI18n` → `{ locale, t, setLocale }`), `dictionaries/` (`es.ts` fuente de verdad con `type Dictionary`, `en.ts` y `val.ts` con `satisfies Dictionary`), `data.ts` (builders localizados: `getBLOQUES`, `getBloqueMeta`, `getNavItems`, `getGlosario`, `getCategoriasGlosario`, `getCronologia`, `getHerramientas`, `getHerramientaPorId`, `getCategoriasHerramientas`, `getCriteriosComparacion`, `getNodoDecision`, roles/formatos/tonos/audiencias/extensiones, `generarPromptLocalizado`, `getBadgeText`, `getRetoText`, `getProyectoText`)
- Selector de idioma `components/layout/LanguageSelector.tsx` en el header (es/en/val); `setLocale` escribe localStorage + cookie `atlas-locale` y recarga la página (sin prefijo de URL)
- Patrón servidor: `getLocale()` + `getDictionary(locale)` en server components y `generateMetadata`; `app/layout.tsx` async con `html lang` dinámico y `<I18nProvider locale>`; patrón cliente: `useI18n()`
- `getBadgeText`, `getRetoText`, `getProyectoText` devuelven objetos `{ nombre, descripcion }`
- UI completa localizada: Header, Sidebar, Footer, Breadcrumbs, home, bloques (lista/bloque/lección), glosario (client), cronología, laboratorio, perfil, auth, not-found y todos los componentes client (auth, content, gamification, interactive incl. `TokenSimulator` y `ComparadorHerramientas`)
- Chat IA localizado: `lib/ai.ts` recibe `locale` (lee cookie en `/api/chat`), system prompt y respuestas generales en `t.ai.*`; el conocimiento offline (12 temas) permanece en español como contenido
- Búsqueda localizada: `searchContent(query, locale)` usa `getBLOQUES/getGlosario/getHerramientas`; `/api/search` lee la cookie; las lecciones MDX siguen en español (fase posterior)
- Recomptes reales en los diccionarios: glosario 47 (por índice), cronología 28 (por índice), badges 36, retos 6, proyectos 6, herramientas 13
- `t.lab.tokenSimulator` NO tiene clave `examplesTexts`; `localeToIntl`: en→"en", val→"ca-ES-valencia", es→"es"
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (102 páginas)

### Fase 17 ✅ (lecciones MDX localizadas)
- Infraestructura locale-aware en `lib/content.ts`: `getLeccionesBloque(bloqueSlug, locale)`, `getLeccion(bloqueSlug, leccionSlug, locale)` y `getAllLecciones(locale)` con fallback al español (lee `content/<locale>/<bloque>/` y, si no existe, `content/<bloque>/`); `searchContent(query, locale)` busca en el contenido localizado
- Callers actualizados: `app/bloques/[slug]/page.tsx` y `app/bloques/[slug]/[leccion]/page.tsx` pasan `locale` de `getLocale()`
- Las 71 lecciones traducidas a `content/en/` y `content/val/` (11 bloques × 71 = 76 mdx por idioma, incluye 5 meta.json+5 en la raíz de `content`); directorios de contenido: `content/` (es, raíz), `content/en/`, `content/val/`
- `meta.json` localizados (en/val) para los 11 bloques con títulos/descripciones traducidos
- Reglas de traducción aplicadas: frontmatter `title`/`description` traducidos; estructura MDX, `<Callout type>` (info/warning/tip/error), tablas, bloques de código y URLs intactos; términos técnicos asentados sin traducir (prompt, token, LLM, RAG, MCP, transformer, Machine Learning, AI Act…); valenciano con normativa AVL (conéixer, Eines, Avaluació, persona usuària, professorat…)
- El conteo de líneas por lección se preserva 1:1 respecto a la fuente en español (control de integridad)
- Verificación: 76 mdx por idioma en los 11 bloques, `npx tsc --noEmit` correcto, lint 0/0, build OK (102 páginas)

### Fase 18 ✅ (accesibilidad: lectura por voz con Web Speech API)
- `lib/speech.ts`: utilidad de síntesis — `MAIN_CONTENT_SELECTOR` (`[data-read-aloud]`), selectores excluidos de lectura (`pre, code, script, style, svg, nav, aside, button, select, input, textarea, [aria-hidden='true'], [data-read-aloud-exclude]`), `extractReadableText`, `splitTextForSpeech` (fragmentado por frases), `createUtterance`, `getSpeechVoices`, `getVoiceForLocale`, `isSpeechSupported`
- `components/accessibility/SpeechReader.tsx`: botones Escuchar/Detener flotantes, control de velocidad (0.5–2), avisos con `aria-live`, se detiene automáticamente al cambiar de página (fix lint: `stopReading` envuelto en `setTimeout` por `react-hooks/set-state-in-effect`)
- Integrado en `components/layout/Shell.tsx`
- Atributo `data-read-aloud` añadido a 8 páginas: home, bloques (lista/bloque/lección), glosario, cronología, laboratorio, perfil
- Sección `speech` en los tres diccionarios (`title`, `listen`, `stop`, `speed`, `reading`, `finished`, `notSupported`, `noContent`)
- Verificación: tsc correcto, lint 0/0, build OK (102 páginas)

### Fase 19 ✅ (términos interactivos del glosario)
- `lib/glossary-match.ts`: matcher de texto con **trie** — coincidencia más larga, índices originales, límites de palabra (evita "token" dentro de "tokens"), sin mayúsculas/acentos (normalización NFD). `buildGlossaryMatcher(terms)` → `GlossaryMatcher.find(text)`; pensado para cientos de términos
- `getGlosarioTerminos(t)` en `lib/i18n/data.ts` → `{ slug, termino, definicion, categoria, categoriaKey }[]` (slug estable por índice en español vía `slugify`, `categoriaKey` de los diccionarios, `categoria` label localizado)
- `components/accessibility/GlossaryProvider.tsx`: contexto `{ openTerm(slug, trigger), closeTerm }`; gestiona el toggle (re-click cierra), sincroniza `aria-expanded` y la clase `glossary-term-active` del trigger, renderiza el popover
- `components/accessibility/GlossaryPopover.tsx`: `role="dialog"` con `aria-labelledby`/`aria-describedby`; muestra nombre, categoría con icono lucide (mapa por `categoriaKey`: conceptos→BookOpen, ml→Brain, modelos→Cpu, tecnico→Settings, prompting→MessageSquare, herramientas→Boxes, limitaciones→AlertTriangle), definición y botones **Cerrar** + **Ver definición completa**. Posicionado con refs (sin setState en effects): calcula `left/top` y clamp al viewport; en móvil (<640px) bottom-sheet con backdrop; foco inicial en el botón Cerrar, retorno de foco al trigger al cerrar, Escape cierra, Tab-trap dentro, click-outside cierra, scroll cierra
- `components/accessibility/GlossaryTermLinks.tsx`: auto-detección en el DOM dentro de `[data-read-aloud]`; procesa `p, li, h1-h5, td, dt, dd, blockquote, figcaption` con TreeWalker sobre nodos de texto; salta `code/pre/a/button/kbd/samp/var/[data-glossary-term]`; **solo la 1ª aparición por término y párrafo**; envuelve cada término en `<span role="button" tabindex=0 aria-haspopup="dialog">`; `WeakSet` de bloques ya procesados; se re-ejecuta al cambiar `pathname` (cierra el popover antes)
- Montaje en `components/layout/Shell.tsx` (provider envuelve el contenido, `GlossaryTermLinks` devuelve `null`)
- Estilos `.glossary-term` en `app/globals.css` (`@layer components`): subrayado punteado `var(--primary)`, cursor pointer, hover/focus `var(--primary-light)`, `focus-visible` outline, `prefers-contrast: more` → subrayado sólido; los spans conservan el texto (no afecta a la lectura por voz)
- Deep-link: `Ver definición completa` → `/glosario?termino=<slug>` (dispatch de `CustomEvent("atlas:glossary-deeplink")` + `router.push`); la página de glosario parsea `?termino=` en el mount, pre-rellena la búsqueda, hace scroll suave (`scrollIntoView`) y resalta la tarjeta (`ring-2 ring-primary/30`); funciona también estando ya en la página de glosario
- Sección `glossaryPopover` en los tres diccionarios (`categoryLabel`, `openTermAria`, `close`, `viewFullDefinition`)
- Lint respetado: `setState` síncrono en effects envuelto en `setTimeout(0)` (deep-link del glosario); posicionamiento del popover con manipulación directa de `style` vía refs
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (102 páginas)

### Fase 20 ✅ (SEO: metadataBase, canonical, Content-Language, sitemap y robots)
- `metadataBase: new URL(SITE_CONFIG.url)` + `openGraph` (type website, locale `localeToIntl`, url, siteName, title, description) en `app/layout.tsx` → URLs absolutas para canonical/OG
- `alternates.canonical` en 8 páginas server: home `/`, bloques `/bloques`, bloque `/bloques/[slug]`, lección `/bloques/[slug]/[leccion]`, cronología `/cronologia`, perfil `/perfil`, auth `/auth/login` y `/auth/register`
- Layouts server nuevos para páginas client que no pueden exportar metadata: `app/glosario/layout.tsx` (canonical `/glosario`) y `app/laboratorio/layout.tsx` (canonical `/laboratorio`), ambos con `generateMetadata` y que devuelven `children`
- `proxy.ts`: matcher ampliado a `["/((?!_next|.*\\..*).*)"]` (excluye `_next` y archivos estáticos); lee la cookie `atlas-locale` (con `isLocale`, default `es`) y fija la cabecera `Content-Language` en todas las respuestas; conserva la protección de `/perfil`
- `app/sitemap.ts`: 92 URLs (5 estáticas + 11 bloques + 76 lecciones) con `changeFrequency: "weekly"` y prioridades 1/0.9/0.8/0.7/0.6
- `app/robots.ts`: `allow: "/"`, `disallow: ["/auth/login", "/auth/register"]`, referencia a `/sitemap.xml`
- `noindex` (`robots: { index: false, follow: false }`) en login y registro
- Decisión técnica: NO se usa `alternates.languages` (hreflang) porque el i18n es por cookie sin prefijos de URL y Google ignora hreflang hacia la misma URL; la señal correcta en este caso es `Content-Language` dinámico + `<html lang>` + canonical único
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (104 páginas, robots.txt y sitemap.xml generados), curl confirma Content-Language es/en/val según cookie, canonical absolutos y redirect de /perfil protegido

### Fase 21 ✅ (Progressive Web App: instalable, offline y auditada Lighthouse)
- `app/manifest.ts`: manifest.json completo y localizado (lee la cookie vía `getLocale()`): `id`, `name`, `short_name`, `description` (= `t.home.subtitle1`), `lang`, `dir`, `start_url` `/`, `scope` `/`, `display: "standalone"` + `display_override: ["standalone", "minimal-ui"]`, `orientation: "portrait-primary"`, `background_color: #fafafa`, `theme_color: #2563eb`, `categories`, 3 iconos (`icon-192` any, `icon-512` any, `icon-512-maskable` maskable) y 4 `shortcuts` localizados (Bloques, Glosario, Laboratorio, Cronología)
- Iconos de aplicación generados por script `scripts/generate-icons.ps1` (System.Drawing): `public/icons/icon-192.png`, `icon-512.png` (esquinas redondeadas), `icon-512-maskable.png` (fondo completo, área segura), `apple-touch-icon.png` (180, fondo completo) + `app/icon.png` (favicon del sitio) + `app/favicon.ico` reemplazado (16/32/48 con formato ICO+PNG). Diseño: gradiente azul `#2563eb→#1d4ed8`, glifo "A" blanca y punto-nodo de acento
- Meta tags en `app/layout.tsx`: export `viewport` (`width=device-width`, `initialScale: 1`, `viewportFit: "cover"`, `themeColor: "#2563eb"`) + metadata `appleWebApp` (`capable: true`, `statusBarStyle: "default"`, `title`) e `icons.apple: /icons/apple-touch-icon.png`
- Service worker `public/sw.js`: precache de `offline.html`, manifest e iconos; **navegaciones network-first** con fallback a caché y a `/offline.html`; **estáticos** (`/_next/static`, iconos, png/ico) stale-while-revalidate; **`/api/*` (GET) siempre red** y POST/SSE del chat no interceptados (el SW también los deja pasar por `request.method !== "GET"`); `skipWaiting()` + `clients.claim()`; caches versionados con limpieza de versiones antiguas
- Página offline `public/offline.html`: estática autocontenida con logo, mensaje "Estás sin conexión" y botón Reintentar (adaptada a claro/oscuro con `prefers-color-scheme`)
- `components/pwa/ServiceWorkerRegistrar.tsx`: registra `/sw.js` (`scope: "/"`, `updateViaCache: "none"`); **solo en producción** (`process.env.NODE_ENV === "production"`) para no interferir con HMR de `next dev`; registra en `load` o `ready` según haya controlador
- `components/pwa/PwaThemeColor.tsx`: actualiza el `<meta name="theme-color">` según el tema resuelto (claro `#fafafa` / oscuro `#0f172a`)
- `components/pwa/InstallPWA.tsx`: banner de instalación que escucha `beforeinstallprompt` (se omite en `display-mode: standalone` / iOS), con botón Instalar (invoca `prompt()`) y "Ahora no"; se oculta al instalar (`appinstalled`); textos localizados vía `t.pwa.*`
- Sección `pwa` en los tres diccionarios (`installTitle`, `installDesc`, `install`, `notNow`)
- `next.config.ts`: headers de caché — `/sw.js` (`no-cache, no-store, must-revalidate` + `Service-Worker-Allowed: /`), `/offline.html` (`no-cache, max-age=0`) e `/icons/:path*` (`public, max-age=31536000, immutable`)
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (106 páginas + `/manifest.webmanifest` y `/icon.png`), servidor de producción confirma manifest JSON válido (3 iconos + 4 shortcuts), `Cache-Control` y `Service-Worker-Allowed` en `/sw.js`, cache immutable en iconos, `200` en `/offline.html`, y `<head>` con `<link rel="manifest">`, `theme-color`, `viewport-fit=cover`, `mobile-web-app-capable`, `apple-mobile-web-app-title`, `apple-mobile-web-app-status-bar-style` y `apple-touch-icon`

### Fase 22 ✅ (panel docente: recopilación de datos del alumnado)
- Campo `role` en `prisma/schema.prisma` (`String @default("student")`) con `prisma db push` + `prisma generate` aplicados
- `lib/auth.ts`: constantes `ROLE_TEACHER`/`ROLE_STUDENT`, `teacherEmails()` (lee `TEACHER_EMAILS` de env, separado por comas) e `isTeacherEmail()`; el `authorize` de Credentials promueve a rol docente si el correo está en la lista; callbacks `jwt`/`session` propagan `role`
- `types/next-auth.d.ts`: `role` en `Session.user` y `JWT`, y augmentación de `User` con `role?: string | null`
- `app/api/register/route.ts`: asigna `role` (docente si el email está en `TEACHER_EMAILS`, si no estudiante)
- `app/api/docencia/students/route.ts`: GET (solo rol docente, si no `403`) que devuelve JSON `{ students: StudentStats[] }` o CSV (`?format=csv`, BOM UTF-8 + separador `;`); `StudentStats` agrega XP, lecciones completadas, insignias, racha, último acceso, uso de herramientas y progreso por bloque (derivado de los ids `bloque-slug/leccion-slug` de `JSON_PROGRESS`)
- `app/docencia/page.tsx`: server component con guard `session.user.role === ROLE_TEACHER` (redirect a `/perfil`), `generateMetadata` con canonical `/docencia`
- `app/docencia/DocenciaDashboard.tsx`: dashboard client — tarjetas resumen (total estudiantes, XP media, lecciones, activos en la última semana), buscador por nombre/correo, exportación CSV, tabla con filas expandibles (`perBlock` por cada uno de los 11 bloques + métricas de uso). Notas de implementación: `Date.now()` calculado en un `useEffect` con `setTimeout` (evita `react-hooks/purity` y `set-state-in-effect`)
- `proxy.ts`: `PROTECTED_PATHS = ["/perfil", "/docencia"]`
- `components/layout/Sidebar.tsx` y `components/auth/UserMenu.tsx`: enlace `/docencia` (icono `GraduationCap`) visible solo si `session.user.role === "teacher"`
- Claves `nav.docencia` y sección `docencia` (`title`, `subtitle`, `totalStudents`, `avgXp`, `totalLessons`, `activeWeek`, `searchPlaceholder`, `exportCsv`, `loading`, `noResults`, `empty`, `error`, `columns.*`, `perBlock`, `usage.*`) en los tres diccionarios (`es.ts` como fuente de verdad)
- `.env`: variable `TEACHER_EMAILS` para promocionar cuentas docentes (ej.: `"profesor@correo.com"`)
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (108 páginas + `/api/docencia/students` y `/docencia`)

### Fase 23 ✅ (controles fuera del área de lectura: franja superior)
- Los controles de **lectura por voz** (`SpeechReader`) y de **instalación PWA** (`InstallPWA`) ya no flotan sobre el contenido (se eliminó el contenedor `fixed bottom-4 left-4` de `components/layout/Shell.tsx`); ahora se montan en la **franja superior**, en el header junto a la barra de búsqueda (`components/layout/Header.tsx`, grupo de controles derecho, antes de `NotificationBell`)
- Ambos componentes reciben una prop `compact` (por defecto `false`): `SpeechReader compact` renderiza botones de icono h-9 (Escuchar/Detener) + selector de velocidad (oculto en móvil `hidden sm:flex`), con indicador pulsante y avisos/estado de lectura en un popover absoluto bajo el grupo; las opciones del selector usan texto azul oscuro sobre fondo blanco (`style` inline) para legibilidad del desplegable nativo en ambos temas
- `InstallPWA compact` es un botón de icono (Descargar) **siempre visible** en el header (salvo standalone/instalado); si el navegador emite `beforeinstallprompt` instala directamente y muestra punto pulsante, y si no, abre un popover con la descripción y la pista de instalación (`t.pwa.installHint`); el `title` conserva el texto de instalación
- La variante no compacta de ambos componentes (banner de instalación y lector con botones con texto) se mantiene intacta para otros usos
- Verificación: `npx tsc --noEmit` correcto, lint 0/0

### Fase 24 ✅ (página de privacidad RGPD)
- Nueva página `/privacidad` (`app/privacidad/page.tsx`): server component con `generateMetadata` (canonical `/privacidad`) y `data-read-aloud` (lectura por voz + términos interactivos del glosario)
- Contenido en lenguaje claro y conforme a RGPD: responsable del tratamiento (sección `SITE_CONFIG.contactName`/`contactEmail` en `lib/constants.ts`), resumen en un minuto, datos recopilados (sin cuenta vs con cuenta), chat del laboratorio, uso de localStorage (`atlas-progress`, `atlas-theme`, `atlas-locale`), cookies técnicas (sesión NextAuth + idioma), ausencia de seguimiento de terceros, finalidad y base jurídica, conservación, derechos RGPD, menores, seguridad y cambios
- Enlace en el footer (`components/layout/Footer.tsx`): "Privacidad" pasa de span deshabilitado a enlace `/privacidad`
- Añadida a `app/sitemap.ts` (prioridad 0.5); se indexa en `app/robots.ts` (no está en la lista de disallow)
- Textos localizados es/en/val en la sección `privacidad` de los tres diccionarios; placeholders `{responsable}` y `{email}` interpolados en el servidor
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (109 páginas)

### Fase 25 ✅ (página de uso de Inteligencia Artificial)
- Nueva página `/uso-de-ia` (`app/uso-de-ia/page.tsx`): server component con `generateMetadata` (canonical `/uso-de-ia`) y `data-read-aloud`, con la misma estructura visual que `/privacidad` (breadcrumbs, h1, secciones, listas)
- Contenido: qué partes del proyecto se han desarrollado con ayuda de IA (código, diseño de interfaz, contenido educativo, traducciones, chat del laboratorio; sin imágenes generadas por IA), revisión humana de todos los contenidos por el autor (`SITE_CONFIG.contactName`), principios de uso ético y transparencia para el alumnado y el profesorado
- Enlace en el footer (`components/layout/Footer.tsx`): nueva entrada "Uso de IA" (clave `footer.usoIa`) enlazando a `/uso-de-ia`
- Añadida a `app/sitemap.ts` (prioridad 0.5); se indexa en `app/robots.ts`
- Textos localizados es/en/val en la sección `usoIa` de los tres diccionarios; placeholders `{autor}` y `{email}` interpolados en el servidor
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (110 páginas)

### Fase 26 ✅ (chat de IA: renderizado Markdown, mentor Vibe Coding y fallback inteligente)
- **Renderizado Markdown en el chat**: nuevo `components/interactive/ChatMarkdown.tsx` que convierte las respuestas a JSX seguro (sin `dangerouslySetInnerHTML`): negrita, cursiva, `código`, enlaces, encabezados h1-h3, listas, tablas, bloques de código y citas, con los mismos estilos que `MDXRenderer`. Se aplica a mensajes y a la burbuja de streaming en `AIChat.tsx`; los mensajes del usuario se muestran como texto plano. Eliminado el `div.prose` inerte (no hay plugin de tipografía instalado)
- **Alcance ampliado a todo el curso de Vibe Coding Educativo**: `GENERAL_KNOWLEDGE` en `lib/ai.ts` con 23 temas de programación/web (Git, commitear, ramas/branch, GitHub, push/pull/clone, repositorio, VS Code, extensiones, HTML, CSS, JavaScript, frontend/backend, roadmap, Cline, agentes de código, deploy/publicar, buenas prácticas, recursos educativos, terminal, Node/npm, Markdown, .gitignore) + entradas de curso nuevas: programación asistida y Vibe Coding
- **Matcher mejorado**: `phraseMatches` permite huecos de 1-2 tokens entre palabras ("una rama de Git", "gpt vs gemini", "ética en la ia") manteniendo prioridad por especificidad (mayor número de keywords)
- **Fallback inteligente**: cadena `findBestResponse` (conocimiento del curso → herramientas → glosario) → memoria de conversación → `findTopicFallback` por categoría (git/programación/web/vs code/publicar) → `noAnswer`. Refactor a `MatchResult { text, score, source }` con `composeResult`
- **Procedencia clara**: las respuestas de conocimiento general se etiquetan con `**[Conocimiento general de tecnología]**` (clave `ai.generalSource` en es/en/val; sustituida en la Fase 27 por `courseSource`/`generalIntro`); las del curso se reconocen porque citan bloques/glosario/laboratorio
- **Prompt del sistema reescrito** (es/en/val): mentor del curso completo (IA + programación + Git/GitHub + VS Code + publicación + buenas prácticas + recursos educativos), responder primero, solo pedir aclaración si falta información, marcar procedencia, pregunta/reto opcional al final
- **`noAnswer` reescrito**: sin frases tipo "no tengo respuesta preparada"/"¿podrías concretar?"; lista capacidades e invita a plantear el objetivo con un ejemplo
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (110 páginas)

### Fase 27 ✅ (estrategia de respuesta del asistente: prioridad Atlas, transparencia y nunca dejar de ayudar)
- **Estrategia por prioridad documentada en `systemPrompt`** (es/en/val): 1) si hay información relevante en Atlas IA, responder con ella y empezar por «Según Atlas IA:»; 2) si el tema no está en Atlas IA, indicarlo con transparencia («Este tema no aparece todavía en los contenidos de Atlas IA, pero puedo explicártelo.») y responder igualmente con conocimiento general útil; 3) nunca terminar con «No tengo una respuesta preparada para eso», «Ese tema no está desarrollado» o «Cuéntame más» sin haber intentado responder antes
- **Prefijos estructurados en el fallback offline**: nuevas claves `ai.courseSource` («Según Atlas IA:») y `ai.generalIntro` (frase de transparencia) en los tres diccionarios, sustituyendo a `ai.generalSource` (eliminada). `composeResult` antepone `**[courseSource]**` a las respuestas del curso (glosario, herramientas y conocimiento del curso) y `**[generalIntro]**` a las de conocimiento general; `findTopicFallback` usa `generalIntro`; el saludo (`noPrefix: true`, propagado en `MatchResult.noPrefix`) queda sin prefijo
- **Cobertura de los 8 dominios obligatorios**: IA, Programación, Git y GitHub, VS Code, Desarrollo web, Publicación de proyectos, Vibe Coding y Herramientas educativas digitales, vía `GENERAL_KNOWLEDGE` + `TOPIC_CATEGORIES` ampliado con categorías nuevas `ia`, `vibecoding` y `educacion` (además de git/programacion/web/vscode/publicar)
- **Nuevas entradas de conocimiento general**: qué es una **API** (con analogía del restaurante) y **dónde se ejecutan los modelos de IA** (GPU/TPU/NPU, nube vs. local) para garantizar que las preguntas básicas prohibidas siempre obtienen respuesta
- **`noAnswer` reescrito**: empieza con la frase de transparencia y en lugar de rechazar lista los dominios que cubre e invita a concretar el objetivo; sin frases de callejón sin salida
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (110 páginas); probado en servidor de producción vía `/api/chat` (SSE): «que es una api»/«que es git»/«que es html»/«que es commitear» → prefijo `generalIntro` + respuesta útil, «que es un llm» → prefijo `courseSource` con contenido de Atlas, consultas sin match → `noAnswer` transparencia

### Fase 28 ✅ (página de Roadmap del proyecto)
- Nueva página `/roadmap` (`app/roadmap/page.tsx`): server component con `generateMetadata` (canonical `/roadmap`), `Breadcrumbs` y `data-read-aloud` (lectura por voz + términos interactivos del glosario)
- Contenido localizado en la sección `roadmap` de los tres diccionarios: timeline de 14 hitos completados con icono `CheckCircle2` (agrupando las Fases 1-27: fundación, ecosistema y prompting, búsqueda/glosario/cronología, gamificación, cuentas, laboratorio, contenido completo, revisión lingüística, novedades 2026, i18n, accesibilidad, SEO y PWA, docencia y legal, asistente de IA), "Estado actual" (`currentTitle`/`currentItems`) y "Siguientes pasos" (`nextTitle`/`nextItems`), con `lastUpdated`
- Footer (`components/layout/Footer.tsx`): el enlace "Roadmap.sh" de la sección Recursos ahora apunta a la página interna `/roadmap` con el título localizado (`t.roadmap.title`) en lugar de a `https://roadmap.sh`
- Añadida a `app/sitemap.ts` (prioridad 0.5) → 93 URLs; se indexa en `app/robots.ts` (no está en disallow)
- Verificación: `npx tsc --noEmit` correcto, lint 0/0, build OK (111 páginas), `/roadmap` responde 200 en runtime

## Estado actual (para retomar la sesión)
- Último commit: `890bc0f` (docs Fase 25, árbol limpio). **Cambios SIN commitear**: Fases 26 y 27 (chat: `ChatMarkdown.tsx`, `lib/ai.ts` con conocimiento general y fallback inteligente, estrategia de respuesta con prefijos `courseSource`/`generalIntro`, `AIChat.tsx`, `MDXRenderer.tsx`, `BlockCompleteCTA.tsx`, contenido de las lecciones 01/02/05 del laboratorio en es/en/val) y **Fase 28** (página `/roadmap`: `app/roadmap/`, enlace del footer, `sitemap.ts`, secciones `ai` y `roadmap` de los diccionarios)
- Siguientes pasos posibles: probar el chat en navegador (renderizado Markdown, temas de Git/VS Code/roadmap y prefijos «Según Atlas IA»/transparencia en modo offline), probar la página `/roadmap` en los tres idiomas, commitear las Fases 26, 27 y 28, probar el banner de instalación y el offline en navegador (desplegando en HTTPS, p. ej. vercel), rellenar `screenshots` del manifest para el diálogo de instalación enriquecido de Android, ampliar cobertura de términos interactivos a otros idiomas o páginas sin `data-read-aloud`, migrar a prefijos de URL `/en` `/val` si se quiere hreflang real, probar el panel docente creando cuentas con correos incluidos en `TEACHER_EMAILS`, crear la página de Términos y Condiciones (pendiente en el footer)

## Bloques de contenido (MDX)

| Bloque | Slug | Lecciones | Estado |
|--------|------|-----------|--------|
| 0. Antes de Empezar | `antes-de-empezar` | 6 | ✅ Completo |
| 1. Fundamentos de IA | `fundamentos` | 10 | ✅ Completo |
| 2. Mapa del Ecosistema | `ecosistema` | 8 | ✅ Completo |
| 3. Ingeniería de Prompt | `prompting` | 8 | ✅ Completo |
| 4. IA Aplicada a la Docencia | `ia-docencia` | 7 | ✅ Completo |
| 5. IA Multimodal | `ia-multimodal` | 6 | ✅ Completo |
| 6. Programación Asistida | `programacion` | 6 | ✅ Completo |
| 7. Agentes y Automatización | `agentes` | 8 | ✅ Completo |
| 8. Ética y Responsabilidad | `etica` | 6 | ✅ Completo |
| 9. Laboratorio | `laboratorio` | 5 | ✅ Completo |
| 10. Novedades | `novedades` | 6 | ✅ Completo (actualizable) |

## Rutas del proyecto
```
app/                  → Páginas (App Router)
  bloques/            → Lista + [slug] + [slug]/[leccion]
  cronologia/         → Timeline interactivo
  glosario/           → Búsqueda + filtros (layout.tsx con canonical)
  privacidad/         → Política de privacidad RGPD (canonical + data-read-aloud)
  uso-de-ia/          → Uso de Inteligencia Artificial: transparencia y ética (canonical + data-read-aloud)
  roadmap/            → Roadmap del proyecto: hitos, estado actual y próximos pasos (canonical + data-read-aloud)
  perfil/             → Estadísticas, ranking, retos, proyectos, badges
  laboratorio/        → Laboratorio interactivo (chat, prompts, agent flow, comparador, tokens; layout.tsx con canonical)
  auth/               → login + register
  sitemap.ts          → 93 URLs (estáticas + bloques + lecciones)
  robots.ts           → allow "/", disallow auth, sitemap.xml

app/api/              → API Routes
  auth/[...nextauth]  → NextAuth
  register/           → Crear usuario
  search/             → Búsqueda full-text
  sync-progress/      → Sincronizar localStorage → DB
  chat/               → Chat IA streaming (SSE)

components/
  ui/                 → Card, Button, Badge, ProgressBar, Callout, CodeBlock
  layout/             → Shell, Sidebar, Header, Footer, Breadcrumbs, LanguageSelector
  interactive/        → SearchModal, Comparador, ÁrbolDecisión, CalcPrompts, CronologiaTimeline, AIChat, ChatMarkdown, PromptSandbox, AgentFlow, ModelComparator, TokenSimulator
  gamification/       → XPBar, RankingTable, RetosCard, ProjectCard, NotificationBell, ProfileStats
  content/            → MDXRenderer (usa next-mdx-remote/rsc), BlockCompleteCTA, LessonNav, LessonSidebar, TableOfContents
  auth/               → AuthProvider, LoginForm, RegisterForm, UserMenu
  accessibility/      → SpeechReader (lectura por voz), GlossaryProvider, GlossaryPopover, GlossaryTermLinks (términos interactivos)

proxy.ts              → Protección de rutas + cabecera Content-Language dinámica (Next.js 16, reemplaza middleware.ts)

lib/
  types.ts            → Interfaces (BloqueMeta, LeccionMeta, HerramientaIA, etc.)
  constants.ts        → SITE_CONFIG, BLOQUES (meta), NAV_ITEMS
  utils.ts            → cn(), slugify(), capitalize(), formatDate(locale)
  content.ts          → Carga de MDX (getBloqueMeta, getLeccionMeta, getLeccionContent) + searchContent(query, locale)
  ecosistema-data.ts  → 13 herramientas + categorías + criterios
  prompting-data.ts   → Roles, formatos, tonos, audiencias
  glosario-data.ts    → 47 términos con definiciones
  glossary-match.ts   → Matcher trie para términos interactivos del glosario
  cronologia-data.ts  → 28 hitos históricos
  speech.ts           → Síntesis de voz (Web Speech API), extracción de texto legible
  ai.ts               → Servicio de IA (OpenAI + fallback offline, locale-aware)
  auth.ts             → NextAuth config (Credentials)
  prisma.ts           → PrismaClient singleton
  getServerSession.ts → Helper servidor
  i18n/
    config.ts         → Locale ("es"|"en"|"val"), cookie atlas-locale, localeToIntl
    server.ts         → getLocale() (lee la cookie, async)
    runtime.ts        → helpers de idioma en cliente
    provider.tsx      → I18nProvider + hook useI18n() → { locale, t, setLocale }
    data.ts           → Builders localizados (getBLOQUES, getGlosario, getHerramientas, getBadgeText, ...)
    dictionaries/     → es.ts (fuente de verdad, exporta Dictionary), en.ts, val.ts, index.ts

stores/
  progress.ts         → Zustand + persist localStorage (XP, badges, retos, proyectos, notificaciones)

prisma/
  schema.prisma       → User, Account, Session, VerificationToken
  dev.db              → SQLite (gitignored)
```

## Notas técnicas importantes

### next-mdx-remote v6 + Next.js 16
El proyecto usa `next-mdx-remote` v6 con Next.js 16. La API tradicional de `serialize` + `MDXRemote` (cliente) causa errores de `useState` en SSG. Se migró a la API RSC:
- `MDXRemote` importado de `next-mdx-remote/rsc` (server component)
- `MDXRenderer` es ahora un server component que recibe `source: string` (raw MDX)
- No usa `serialize` ni `MDXRemoteSerializeResult`
- Los componentes custom (Callout, CodeBlock, etc.) se pasan vía prop `components`

### Directorios de contenido
Los directorios en `content/` usan el **slug** del bloque como nombre (NO `bloque-N`):
- `content/antes-de-empezar/` en lugar de `content/bloque-0/`
- `content/fundamentos/` en lugar de `content/bloque-1/`
- etc.

### Componente Callout
Solo acepta `type`: `"tip"` | `"warning"` | `"info"` | `"error"`. NO usar `"important"`.

## Notas técnicas adicionales

### remark-gfm para tablas MDX
El proyecto usa `remark-gfm` para el renderizado de tablas Markdown en MDX. Configurado en `components/content/MDXRenderer.tsx` como `remarkPlugins: [remarkGfm]`.

### Tema oscuro (hydration)
El botón de cambio de tema en `Header.tsx` usa un estado `mounted` para evitar errores de hidratación entre servidor (siempre "light") y cliente (tema real del usuario).

### Footer global
El `Footer` se renderiza en `Shell.tsx`, no en páginas individuales, para que aparezca globalmente.

### CSS Cascade Layers (Tailwind v4)
Los estilos globales en `app/globals.css` (html, body, a, h1-h6, etc.) están envueltos en `@layer base` para que las utility classes de Tailwind en `@layer utilities` los sobreescriban correctamente. Sin esto, el CSS sin capa (`unlayered`) tendría prioridad sobre las utilities. Las variables CSS (`:root`, `.dark`) quedan fuera de capas para máxima prioridad.

### Licencia
Creative Commons CC BY-NC-SA 4.0. Icono en `public/icons/cc_by_nc_sa.png`. Enlace a https://creativecommons.org/licenses/by-nc-sa/4.0/

### i18n
- Idiomas: `es`, `en`, `val` (valenciano). Idioma persistido en cookie `atlas-locale` + localStorage (sin prefijo de URL). Cambio de idioma recarga la página.
- `es.ts` es la fuente de verdad de la estructura `Dictionary`; `en.ts` y `val.ts` usan `satisfies Dictionary` para que TypeScript avise si falta una clave.
- En `data` los arrays de glosario (47) y cronología (28) se emparejan por **índice** con las fuentes en español; los demás datos se casan por clave/slug/id. No añadir/quitar entradas de glosario o cronología sin sincronizar los tres diccionarios.
- `getBadgeText`, `getRetoText` y `getProyectoText` devuelven objetos `{ nombre, descripcion }`.
- Las lecciones MDX están localizadas (es/en/val, 71×3 en `content/`, `content/en/`, `content/val/`); si un bloque no está traducido, `lib/content.ts` hace fallback al español.

## Cómo continuar
1. Abrir este archivo en la nueva sesión
2. Revisar la sección "Estado actual" (último commit, cambios pendientes)
3. El asistente leerá este archivo y sabrá exactamente el estado y qué hacer
4. `npm run dev` para desarrollo, `npx tsc --noEmit` y `npm run lint` para verificar
