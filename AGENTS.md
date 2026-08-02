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

## Estado actual (para retomar la sesión)
- Último commit: `44a7bfc` (revisión lingüística, 108 archivos)
- Cambios SIN commitear al cerrar esta sesión: `components/layout/Shell.tsx`, `components/layout/Sidebar.tsx`, `content/fundamentos/01-que-es-ia.mdx` (ver Fase 14)
- Recomendado al retomar: `git status` para confirmar el árbol, y si procede commitear la Fase 14

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
  glosario/           → Búsqueda + filtros
  perfil/             → Estadísticas, ranking, retos, proyectos, badges
  laboratorio/        → Laboratorio interactivo (chat, prompts, agent flow, comparador, tokens)
  auth/               → login + register

app/api/              → API Routes
  auth/[...nextauth]  → NextAuth
  register/           → Crear usuario
  search/             → Búsqueda full-text
  sync-progress/      → Sincronizar localStorage → DB
  chat/               → Chat IA streaming (SSE)

components/
  ui/                 → Card, Button, Badge, ProgressBar, Callout, CodeBlock
  layout/             → Shell, Sidebar, Header, Footer, Breadcrumbs
  interactive/        → SearchModal, Comparador, ÁrbolDecisión, CalcPrompts, CronologiaTimeline, AIChat, PromptSandbox, AgentFlow, ModelComparator, TokenSimulator
  gamification/       → XPBar, RankingTable, RetosCard, ProjectCard, NotificationBell, ProfileStats
  content/            → MDXRenderer (usa next-mdx-remote/rsc), LessonNav, LessonSidebar, TableOfContents
  auth/               → AuthProvider, LoginForm, RegisterForm, UserMenu

proxy.ts              → Protección de rutas (Next.js 16, reemplaza middleware.ts)

lib/
  types.ts            → Interfaces (BloqueMeta, LeccionMeta, HerramientaIA, etc.)
  constants.ts        → SITE_CONFIG, BLOQUES (meta), NAV_ITEMS
  utils.ts            → cn(), slugify(), capitalize(), formatDate()
  content.ts          → Carga de MDX (getBloqueMeta, getLeccionMeta, getLeccionContent)
  ecosistema-data.ts  → 13 herramientas + categorías + criterios
  prompting-data.ts   → Roles, formatos, tonos, audiencias
  glosario-data.ts    → 48 términos con definiciones
  cronologia-data.ts  → 28 hitos históricos
  ai.ts               → Servicio de IA (OpenAI + fallback offline)
  auth.ts             → NextAuth config (Credentials)
  prisma.ts           → PrismaClient singleton
  getServerSession.ts → Helper servidor

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

## Cómo continuar
1. Abrir este archivo en la nueva sesión
2. Revisar la sección "Estado actual" (último commit, cambios pendientes)
3. El asistente leerá este archivo y sabrá exactamente el estado y qué hacer
4. `npm run dev` para desarrollo, `npx tsc --noEmit` y `npm run lint` para verificar
