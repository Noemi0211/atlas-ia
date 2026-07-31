# Informe de revisión lingüística de Atlas IA

**Fecha:** 31/07/2026
**Alcance:** todos los textos visibles de la plataforma (contenido MDX, metadatos, interfaz, datos de librerías)
**Resultado:** 106 archivos modificados · 542 sustituciones · verificación limpia (lint 0, tsc 0, build OK)

---

## 1. Criterios aplicados

- Español de España académico y profesional, apto para Formación Profesional.
- Sustitución de anglicismos y calcos por equivalentes españoles.
- Lenguaje inclusivo natural mediante colectivos (prohibido el desdoblamiento sistemático "los y las").
- Sin tocar: código, JSX, bloques de código, URLs, slugs, ids, nombres de productos/herramientas (ChatGPT, Claude, Gemini, Copilot, Cursor, LangChain, CrewAI, n8n, Make, Zapier…), acrónimos técnicos (LLM, RAG, MCP, API, GPT, TDD) y términos técnicos asentados (prompt, prompting, token, agente, Machine Learning, Deep Learning, transformers, fine-tuning como glosa).
- Ediciones quirúrgicas: no se añade ni elimina información; 542 inserciones / 542 borrados (cambios 1:1).

## 2. Tabla de sustituciones principales

| Anglicismo / calco | Sustitución | Aprox. cambios |
|-------------------|-------------|----------------|
| feedback | retroalimentación | 14 |
| overfitting | sobreajuste | 5 |
| fine-tuning | ajuste fino (se conserva "Ajuste fino (fine-tuning)" como glosa en fundamentos/05) | 7 |
| dataset | conjunto de datos | 5 |
| framework / frameworks | marco de trabajo / marcos de trabajo | 19 |
| checklist | lista de comprobación | 2 |
| roadmap | hoja de ruta | 1 |
| insights | conclusiones de valor | 1 |
| workflow / workflows | flujo de trabajo / flujos de trabajo | 1 |
| startup | empresa emergente | 4 |
| self-hosted / auto-alojado | autoalojado | 6 |
| monitorizar / monitorea | supervisar / supervisa | 2 |
| computadora | ordenador | 7 |
| "humano en el loop" / human-in-the-loop | persona en el circuito | 4 |
| paper / papers | artículo / artículos | 15 |
| pipeline / pipelines | flujo / flujos (laboratorio y agentes) | 23 |
| sandbox | entorno / Entorno de Prompts (laboratorio) | 17 |
| Agent Flow (nombre de pestaña) | Flujo de Agentes | 12 |
| code review | revisión de código | 4 |
| debugging / debug | depuración / depurar | 7 |
| code smells | malos olores de código | 1 |
| edge cases | casos límite | 2 |
| end-to-end | de extremo a extremo | 1 |
| bugs | errores | 3 |
| logs | registros | 2 |
| Boilerplate | Código repetitivo | 1 |
| tester | persona de pruebas / de pruebas | 1 |
| testing | pruebas | 11 |
| project manager | persona gestora de proyectos | 2 |
| stakeholders | partes interesadas | 1 |
| ranking | orden de los resultados | 2 |
| IF-THEN | SI-ENTONCES | 1 |
| "bala de plata" | "solución milagrosa" | 1 |
| enterprise | corporativos | 1 |
| chunks | fragmentos | 1 |
| Faithfulness / Answer Relevance / re-ranking | Fidelidad / Relevancia de la respuesta / reordenación de resultados | 3 |
| app / apps (calco de aplicación) | aplicación / aplicaciones | 11 |
| CEO / CTO | dirección, persona directiva, equipo directivo (según contexto) | varias |
| SaaS, NLP, chatbot, affordance, prompting (glosas) | mantenidos como términos asentados | — |

## 3. Lenguaje inclusivo y colectivos

- "el usuario / los usuarios" → "la persona usuaria / las personas usuarias" (11 casos).
- "el alumno / los alumnos / los estudiantes" → "el alumnado / el estudiantado" (52 líneas con formas colectivas: alumnado, estudiantado, profesorado, personas desarrolladoras, persona que programa, persona gestora…).
- "el docente" → "el profesorado" (genérico); se conserva la categoría propia "Asistente del docente" (concepto definido en el Bloque 4, y su descripción ya usa "al profesorado").
- Uso natural, sin desdoblamientos sistemáticos.

## 4. Gramática, ortografía y claridad pedagógica

- Corrección de erratas y calcos sintácticos (p. ej. "se invisible" → "es invisible", "elpaper" → "el paper"→"el artículo", "audio" chino, "number" → "número", "Agent mode" → "Modo agente", "Escribe tests" → "Escribe pruebas", "vs." → "y cuál" cuando comparaba, "exitoso" → "eficaz").
- "vídeo" con tilde en todo el contenido (91 ocurrencias).
- Separadores de miles con espacio fino: "10,000" → "10 000".
- Claridad pedagógica: se reformularon frases ambiguas o con calcos (sin cambiar el sentido).
- Uniformidad de nombres del laboratorio: "Sandbox de Prompts" → "Entorno de Prompts", "Agent Flow" → "Flujo de Agentes", "pipeline" → "flujo" en todas las lecciones (coherente con las pestañas de `app/laboratorio/page.tsx`).

## 5. Archivos modificados

### Contenido MDX y metadatos (84 archivos)
| Bloque | Lecciones modificadas |
|--------|----------------------|
| 0. Antes de empezar (6) | 02, 03, 04, 05, 06 + meta.json |
| 1. Fundamentos (11) | las 10 + meta.json |
| 2. Ecosistema (9) | las 8 + meta.json |
| 3. Prompting (8) | 01, 02, 03, 04, 06, 07, 08 + meta.json |
| 4. IA Docencia (8) | las 7 + meta.json |
| 5. IA Multimodal (7) | las 6 + meta.json |
| 6. Programación (7) | las 6 + meta.json |
| 7. Agentes (9) | las 8 + meta.json |
| 8. Ética (7) | las 6 + meta.json |
| 9. Laboratorio (6) | las 5 + meta.json |
| 10. Novedades (7) | las 6 + meta.json |

### Datos de librerías (6 archivos)
- `lib/glosario-data.ts` — 48 definiciones revisadas (papers→artículos, NLP, LLM, overfitting→sobreajuste, framework→marco de trabajo, etc.).
- `lib/ecosistema-data.ts` — descripciones y usos de las 13 herramientas (startup→empresa emergente, enterprise→corporativos…).
- `lib/prompting-data.ts` — roles/formatos/tonos/audiencias adaptados.
- `lib/cronologia-data.ts` — 28 hitos revisados.
- `lib/constants.ts` — textos de navegación y configuración.
- `lib/ai.ts` — respuestas del modo offline del chat (ajustadas al mismo criterio).

### Interfaz, páginas y estado (16 archivos)
- `app/page.tsx`, `app/layout.tsx`, `app/laboratorio/page.tsx` (pestañas "Entorno de Prompts" y "Flujo de Agentes"), `app/api/chat/route.ts`, `app/api/register/route.ts`.
- `components/`: `layout/Header.tsx`, `auth/LoginForm.tsx`, `auth/RegisterForm.tsx`, `gamification/NotificationBell.tsx`, `interactive/AIChat.tsx`, `interactive/AgentFlow.tsx`, `interactive/CalculadoraPrompts.tsx`, `interactive/ComparadorHerramientas.tsx`, `interactive/ModelComparator.tsx`, `interactive/TokenSimulator.tsx`.
- `stores/progress.ts` — descripciones de badges y notificaciones (p. ej. "Creaste un flujo de agentes en AgentFlow").

## 6. Decisiones y conservaciones

- Se conservan como términos técnicos asentados: prompt, prompting, token, agente, LLM, RAG, MCP, transformer, Machine Learning, Deep Learning, chunking semántico, chatbot, affordance, workflow→flujo (sustituido), etc.
- Se conserva "Ajuste fino (fine-tuning)" como glosa didáctica (término + término original entre paréntesis).
- No se tocó contenido dentro de bloques de código (p. ej. "Prompt para code review:", árbol ASCII de Machine Learning, ejemplos Input→LLM).
- Las URLs (p. ej. roadmap.sh en el footer) no se traducen.
- Se conserva "Asistente del docente" como categoría conceptual del Bloque 4.

## 7. Verificación

| Comando | Resultado |
|---------|-----------|
| `npm run lint` | 0 errores, 0 warnings |
| `npx tsc --noEmit` | sin errores |
| `npm run build` | compilación y SSG de 102 páginas correctas |
