# Atlas IA

Plataforma web educativa para aprender Inteligencia Artificial en español (con versiones en inglés y valenciano). Curso progresivo de 11 bloques y 76 lecciones, laboratorio interactivo, glosario, cronología, gamificación y panel docente.

## Características

- **Curso completo**: 11 bloques y 76 lecciones en MDX desde nivel cero hasta agentes, ética y novedades de 2026.
- **Laboratorio interactivo**: chat de IA con streaming, entorno de prompts, flujo de agentes, comparador de modelos y simulador de tokens.
- **Gamificación**: XP, niveles, insignias, rachas, retos diarios/semanales, proyectos prácticos y ranking.
- **Glosario**: 47 términos con definiciones y enlaces interactivos dentro de las lecciones.
- **Cronología**: 28 hitos históricos de la IA con timeline filtrable.
- **Búsqueda**: modal global (Ctrl+K) con resultados de lecciones, glosario y herramientas.
- **Cuentas**: registro/login con NextAuth, sincronización de progreso en SQLite.
- **Panel docente**: métricas del alumnado (XP, lecciones, insignias, rachas, uso de herramientas) y exportación a CSV.
- **Accesibilidad**: lectura por voz (Web Speech API), términos interactivos del glosario, enlace "saltar al contenido" y tema oscuro.
- **PWA**: instalable, offline y auditada en Lighthouse.
- **i18n**: español, inglés y valenciano (interfaz, contenido MDX, chat y búsqueda).
- **SEO**: sitemap, robots, canonical, Open Graph, Twitter Card y `Content-Language` dinámico.

## Stack tecnológico

| Área | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router, RSC) + TypeScript |
| Estilos | Tailwind CSS v4 |
| Contenido | MDX (`next-mdx-remote/rsc`) + `remark-gfm` |
| Estado | Zustand con persistencia en localStorage |
| Animaciones | Framer Motion |
| Base de datos | Prisma + SQLite |
| Autenticación | NextAuth.js v4 (Credentials) |
| IA | OpenAI SDK (opcional, con fallback educativo offline) |
| PWA | Service Worker propio + Web App Manifest |
| Voz | Web Speech API |
| Tests | Vitest + React Testing Library |

## Contenido del curso

| Bloque | Slug | Lecciones |
|--------|------|-----------|
| 0. Antes de Empezar | `antes-de-empezar` | 6 |
| 1. Fundamentos de IA | `fundamentos` | 10 |
| 2. Mapa del Ecosistema | `ecosistema` | 8 |
| 3. Ingeniería de Prompt | `prompting` | 8 |
| 4. IA Aplicada a la Docencia | `ia-docencia` | 7 |
| 5. IA Multimodal | `ia-multimodal` | 6 |
| 6. Programación Asistida | `programacion` | 6 |
| 7. Agentes y Automatización | `agentes` | 8 |
| 8. Ética y Responsabilidad | `etica` | 6 |
| 9. Laboratorio | `laboratorio` | 5 |
| 10. Novedades | `novedades` | 6 |

## Puesta en marcha

Requisitos: Node.js 20+ y Git.

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo .env (ver el listado en "Variables de entorno")
#    .env
#    DATABASE_URL="file:./dev.db"
#    NEXTAUTH_SECRET="<genera una con: openssl rand -base64 32>"
#    NEXTAUTH_URL="http://localhost:3000"
#    TEACHER_EMAILS="profesor@correo.com"        # opcional, promueve cuentas docentes
#    OPENAI_API_KEY="..."                        # opcional, habilita respuestas con IA real

# 3. Preparar la base de datos
npx prisma db push
npx prisma generate

# 4. Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Obligatoria | Descripción |
|----------|-------------|-------------|
| `DATABASE_URL` | Sí | URL de SQLite para Prisma (`file:./dev.db`) |
| `NEXTAUTH_SECRET` | Sí | Secreto de NextAuth (genera uno con `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Sí | URL pública de la app |
| `TEACHER_EMAILS` | No | Lista separada por comas de correos que se registran con rol docente |
| `OPENAI_API_KEY` | No | Habilita respuestas reales de IA en el chat; sin ella se usa el fallback educativo offline |

## Comandos

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servir el build de producción
npm run lint         # ESLint
npm test             # Vitest (una pasada)
npm run test:watch   # Vitest (modo watch)
npx tsc --noEmit     # TypeScript check
```

### Scripts de generación

```bash
# PDF con el contenido completo del curso (requiere el servidor en marcha)
node scripts/generate-pdf.mjs

# PDF de un solo bloque, p. ej. Fundamentos de IA (por slug o número)
node scripts/generate-pdf.mjs --bloque fundamentos
node scripts/generate-pdf.mjs --bloque 1
node scripts/generate-pdf.mjs --help   # lista los bloques disponibles

# Imagen Open Graph public/og.png (no requiere servidor)
node scripts/generate-og-image.mjs

# Capturas para el manifest (requiere el servidor en marcha)
node scripts/generate-screenshots.mjs

# Iconos de la aplicación (PowerShell, System.Drawing)
powershell -ExecutionPolicy Bypass -File scripts/generate-icons.ps1
```

Los scripts de Chrome headless se configuran con variables de entorno opcionales (`ATLAS_CHROME`, `ATLAS_BASE_URL`, `ATLAS_OUT`, `ATLAS_PDF_OUT`, `ATLAS_CDP_PORT`).

## Estructura del proyecto

```
app/                → Páginas (App Router) y API Routes
components/         → UI, layout, interactivos, gamificación, auth, accesibilidad, PWA
content/            → Lecciones MDX (es) + content/en y content/val (traducciones)
lib/                → Lógica de negocio, i18n, datos y servicios
stores/             → Zustand (progreso, gamificación)
prisma/             → Esquema y base de datos SQLite
scripts/            → Generadores (PDF, OG image, screenshots, iconos)
public/             → Estáticos, service worker, manifest, iconos
proxy.ts            → Protección de rutas + cabecera Content-Language
```

## Tests

La suite de Vitest cubre la lógica pura (`lib/`), los stores, el matcher del glosario, los diccionarios i18n, el rate limiting, las API routes críticas (search y chat) y componentes interactivos clave.

```bash
npm test
```

## Licencia

Este proyecto se distribuye bajo **Creative Commons CC BY-NC-SA 4.0** (Reconocimiento-NoComercial-CompartirIgual). Eres libre de compartirlo y adaptarlo citando la autoría, sin fines comerciales y bajo la misma licencia.

Más información: https://creativecommons.org/licenses/by-nc-sa/4.0/

Autoría: Noemí Celaya Mingot · https://atlas-ia.dev
