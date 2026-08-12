import { spawn, execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { tmpdir } from "node:os";
import { createRequire } from "node:module";
import matter from "gray-matter";
import ts from "typescript";

const require = createRequire(import.meta.url);

const CHROME = process.env.ATLAS_CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = process.env.ATLAS_CDP_PORT || 9336;
const OUT = process.env.ATLAS_PDF_OUT || join(process.cwd(), "Atlas-IA-contenido-completo.pdf");
const USER_DATA = join(tmpdir(), "atlas-chrome-pdf");
const CONTENT_DIR = join(process.cwd(), "content");

const SITE_NAME = "Atlas IA";
const SITE_TAGLINE = "Aprende Inteligencia Artificial";
const TITLE = "Contenido completo del curso";

/* ------------------------------------------------------------------ */
/* Carga de datos TS (glosario y cronología) vía transpileModule       */
/* ------------------------------------------------------------------ */

function loadTsData(file) {
  const source = readFileSync(file, "utf8");
  const cleaned = source
    .replace(/import\s+\{[^}]*\}\s+from\s+["'][^"']+["'];?/g, "")
    .replace(/import\s+type\s+\{[^}]*\}\s+from\s+["'][^"']+["'];?/g, "");
  const out = ts.transpileModule(cleaned, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const tmpFile = join(tmpdir(), `atlas-data-${basename(file).replace(/\W/g, "_")}.cjs`);
  writeFileSync(tmpFile, out);
  return require(tmpFile);
}

/* ------------------------------------------------------------------ */
/* Contenido MDX                                                       */
/* ------------------------------------------------------------------ */

function getBloques() {
  const dirs = readFileDirs(CONTENT_DIR).filter((d) => !["en", "val"].includes(d));
  const bloques = [];
  for (const dir of dirs) {
    const metaPath = join(CONTENT_DIR, dir, "meta.json");
    if (!existsSync(metaPath)) continue;
    const meta = JSON.parse(readFileSync(metaPath, "utf8"));
    const lecciones = [];
    for (const l of meta.lecciones || []) {
      const mdxPath = join(CONTENT_DIR, dir, `${l.slug}.mdx`);
      if (!existsSync(mdxPath)) continue;
      const parsed = matter(readFileSync(mdxPath, "utf8"));
      lecciones.push({
        slug: l.slug,
        titulo: l.titulo || parsed.data.title || l.slug,
        descripcion: l.descripcion || parsed.data.description || "",
        orden: l.orden ?? 0,
        content: parsed.content,
      });
    }
    bloques.push({
      numero: meta.bloque ?? parseInt(dir, 10),
      slug: dir,
      titulo: meta.titulo,
      descripcion: meta.descripcion,
      lecciones,
    });
  }
  bloques.sort((a, b) => a.numero - b.numero);
  return bloques;
}

function readFileDirs(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

/* ------------------------------------------------------------------ */
/* Conversor MDX → HTML                                               */
/* ------------------------------------------------------------------ */

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(text) {
  const codes = [];
  text = text.replace(/`([^`\n]+)`/g, (_m, c) => {
    codes.push(c);
    return `\u0000C${codes.length - 1}\u0000`;
  });
  text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
  text = text.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>");
  text = text.replace(/\u0000C(\d+)\u0000/g, (_m, n) => `<code>${escapeHtml(codes[+n])}</code>`);
  return text;
}

const INTERACTIVE = {
  ComparadorHerramientas: "Comparador interactivo de herramientas",
  ArbolDecision: "Árbol de decisión de herramientas",
  CalculadoraPrompts: "Calculadora de prompts",
};

function interactiveNote(name) {
  return `<div class="interactive-note"><strong>${INTERACTIVE[name] || "Componente interactivo"}</strong><span>Este componente es interactivo y solo está disponible en la versión web del curso.</span></div>`;
}

function isTableSep(row) {
  const cells = row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|");
  return cells.every((c) => /^\s*:?-+:?\s*$/.test(c));
}

function tableToHtml(rows) {
  const parseRow = (r) =>
    r
      .replace(/^\s*\|/, "")
      .replace(/\|\s*$/, "")
      .split("|")
      .map((c) => c.trim());
  const header = parseRow(rows[0]);
  const bodyStart = rows.length > 1 && isTableSep(rows[1]) ? 2 : 1;
  let html = "<table><thead><tr>";
  for (const cell of header) html += `<th>${inline(cell)}</th>`;
  html += "</tr></thead><tbody>";
  for (let i = bodyStart; i < rows.length; i++) {
    const cells = parseRow(rows[i]);
    html += "<tr>";
    for (let j = 0; j < header.length; j++) html += `<td>${inline(cells[j] ?? "")}</td>`;
    html += "</tr>";
  }
  html += "</tbody></table>";
  return html;
}

function renderList(items) {
  let html = "";
  let idx = 0;
  function process() {
    while (idx < items.length) {
      const baseIndent = items[idx].indent;
      const tag = items[idx].ordered ? "ol" : "ul";
      html += `<${tag}>`;
      while (idx < items.length && items[idx].indent === baseIndent) {
        const it = items[idx];
        idx++;
        let content = it.content;
        const task = content.match(/^\[([ xX])\]\s+(.*)$/);
        let taskHtml = "";
        if (task) {
          const checked = /^[xX]$/.test(task[1]);
          taskHtml = `<span class="task-box ${checked ? "checked" : ""}">${checked ? "✓" : "·"}</span> `;
          content = task[2];
        }
        html += `<li>${taskHtml}${inline(content)}`;
        if (idx < items.length && items[idx].indent > baseIndent) process();
        html += "</li>";
      }
      html += `</${tag}>`;
    }
  }
  process();
  return html;
}

function callout(type, innerMdx) {
  return `<div class="callout callout-${type}"><span class="callout-tag">${type}</span><div class="callout-body">${mdxToHtml(innerMdx)}</div></div>`;
}

function mdxToHtml(mdx) {
  const lines = mdx.replace(/\r\n/g, "\n").split("\n");
  let out = "";
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      const lang = line.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      out += `<pre class="code-block"><code>${escapeHtml(buf.join("\n"))}${lang ? `<span class="code-lang">${escapeHtml(lang)}</span>` : ""}</code></pre>`;
      continue;
    }

    const comp = line.match(/^\s*<(ComparadorHerramientas|ArbolDecision|CalculadoraPrompts)\s*\/?>\s*$/);
    if (comp) {
      out += interactiveNote(comp[1]);
      i++;
      continue;
    }

    if (line.includes("<Callout")) {
      const type = (line.match(/type="(\w+)"/) || [null, "info"])[1];
      const rest = line.replace(/<Callout\s+type="[^"]*"\s*>/i, "");
      const buf = [];
      if (rest.trim()) buf.push(rest.trim());
      i++;
      while (i < lines.length && !lines[i].includes("</Callout>")) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        const tail = lines[i].replace(/<\/Callout>.*/, "");
        if (tail.trim()) buf.push(tail.trim());
        i++;
      }
      out += callout(type, buf.join("\n"));
      continue;
    }

    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(lines[i].trim());
        i++;
      }
      out += tableToHtml(rows);
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = Math.min(h[1].length, 4);
      out += `<h${level}>${inline(h[2])}</h${level}>`;
      i++;
      continue;
    }

    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line) && !isTableSep(line)) {
      out += "<hr />";
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out += `<blockquote>${mdxToHtml(buf.join("\n"))}</blockquote>`;
      continue;
    }

    const listItem = line.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
    if (listItem) {
      const items = [];
      while (i < lines.length) {
        const l = lines[i];
        const m = l.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
        if (!m) {
          if (/^\s*$/.test(l) && i + 1 < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i + 1])) {
            i++;
            continue;
          }
          break;
        }
        items.push({
          indent: m[1].length,
          ordered: /^\d+\./.test(m[2]),
          content: m[3],
        });
        i++;
      }
      out += renderList(items);
      continue;
    }

    if (/^\s*$/.test(line)) {
      i++;
      continue;
    }

    const para = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(\s*)([-*+]|\d+\.)\s+/.test(lines[i]) && !/^```/.test(lines[i]) && !/^\s*\|/.test(lines[i])) {
      para.push(lines[i]);
      i++;
    }
    out += `<p>${inline(para.join(" "))}</p>`;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Construcción del documento HTML                                     */
/* ------------------------------------------------------------------ */

function buildHtml(bloques, glosario, categorias, cronologia) {
  const totalLecciones = bloques.reduce((acc, b) => acc + b.lecciones.length, 0);
  const fecha = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

  let toc = "";
  for (const b of bloques) {
    toc += `<div class="toc-block"><a href="#bloque-${b.numero}"><strong>Bloque ${b.numero} · ${b.titulo}</strong></a><ul>`;
    for (const l of b.lecciones) {
      toc += `<li><a href="#leccion-${b.numero}-${l.slug}">${l.orden}. ${l.titulo}</a></li>`;
    }
    toc += "</ul></div>";
  }
  toc += `<div class="toc-block"><a href="#glosario"><strong>Glosario</strong></a></div>`;
  toc += `<div class="toc-block"><a href="#cronologia"><strong>Cronología de la IA</strong></a></div>`;

  let body = "";
  for (const b of bloques) {
    body += `<section class="block page-break" id="bloque-${b.numero}">
      <div class="block-head">
        <span class="block-num">Bloque ${b.numero}</span>
        <h1>${escapeHtml(b.titulo)}</h1>
        <p class="block-desc">${escapeHtml(b.descripcion)}</p>
        <p class="block-count">${b.lecciones.length} lecciones</p>
      </div>`;
    for (const l of b.lecciones) {
      body += `<div class="lesson page-break" id="leccion-${b.numero}-${l.slug}">
        <span class="lesson-tag">Lección ${l.orden} · Bloque ${b.numero}</span>
        <h2>${escapeHtml(l.titulo)}</h2>
        ${l.descripcion ? `<p class="lesson-desc">${escapeHtml(l.descripcion)}</p>` : ""}
        ${mdxToHtml(l.content)}
      </div>`;
    }
    body += "</section>";
  }

  // Glosario
  const cats = categorias.filter((c) => c !== "Todas");
  let glosarioHtml = "";
  for (const cat of cats) {
    const terms = glosario.filter((g) => g.categoria === cat);
    if (terms.length === 0) continue;
    glosarioHtml += `<div class="glosario-cat"><h3>${escapeHtml(cat)}</h3>`;
    for (const g of terms) {
      glosarioHtml += `<div class="glosario-term"><p><strong>${escapeHtml(g.termino)}</strong></p><p>${escapeHtml(g.definicion)}</p></div>`;
    }
    glosarioHtml += "</div>";
  }

  // Cronología
  let cronologiaHtml = "";
  for (const h of cronologia) {
    cronologiaHtml += `<div class="hito"><span class="hito-year">${h.año}${h.mes ? `-${h.mes}` : ""}</span><div class="hito-body"><p class="hito-title">${escapeHtml(h.titulo)}</p><p>${escapeHtml(h.descripcion)}</p></div></div>`;
  }

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>${SITE_NAME} — ${TITLE}</title>
<style>
  @page { size: A4; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "Segoe UI", "Inter", Arial, sans-serif; color: #1e293b; font-size: 10.5pt; line-height: 1.55; margin: 0; }
  a { color: #2563eb; text-decoration: none; }
  .page-break { break-before: page; }

  /* Portada */
  .cover { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; page-break-after: always; }
  .cover .logo { font-size: 42pt; font-weight: 800; color: #2563eb; letter-spacing: -1px; }
  .cover .tagline { font-size: 14pt; color: #475569; margin-top: 8px; }
  .cover .title { font-size: 20pt; font-weight: 700; margin-top: 42px; color: #0f172a; }
  .cover .meta { margin-top: 24px; font-size: 11pt; color: #64748b; }
  .cover .chips { margin-top: 30px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
  .cover .chip { border: 1px solid #cbd5e1; border-radius: 999px; padding: 4px 14px; font-size: 9.5pt; color: #475569; background: #f8fafc; }

  /* TOC */
  .toc { page-break-after: always; }
  .toc h2 { font-size: 18pt; color: #0f172a; border-bottom: 2px solid #2563eb; padding-bottom: 6px; }
  .toc-block { margin-top: 14px; }
  .toc-block a { color: #0f172a; }
  .toc-block ul { margin: 4px 0 0 0; padding-left: 18px; }
  .toc-block li { margin: 2px 0; }
  .toc-block li a { color: #475569; font-size: 9.5pt; }

  /* Bloques */
  .block-head { background: #eff6ff; border-left: 5px solid #2563eb; padding: 18px 22px; border-radius: 8px; margin-bottom: 22px; }
  .block-num { display: inline-block; font-size: 8.5pt; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; }
  .block-head h1 { margin: 6px 0 4px; font-size: 20pt; color: #0f172a; }
  .block-desc { margin: 0; color: #475569; font-size: 11pt; }
  .block-count { margin: 8px 0 0; font-size: 8.5pt; color: #64748b; }

  .lesson-tag { display: inline-block; font-size: 8pt; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
  .lesson h2 { font-size: 16pt; color: #0f172a; margin: 4px 0 2px; }
  .lesson-desc { color: #64748b; font-style: italic; margin-top: 0; }

  h3 { font-size: 12.5pt; color: #1e3a8a; margin-top: 20px; }
  h4 { font-size: 11pt; color: #1e40af; margin-top: 16px; }
  p { margin: 8px 0; }
  ul, ol { margin: 8px 0; padding-left: 24px; }
  li { margin: 3px 0; }
  strong { color: #0f172a; }
  hr { border: 0; border-top: 1px solid #e2e8f0; margin: 18px 0; }

  code { font-family: "Cascadia Mono", Consolas, monospace; background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-size: 8.8pt; color: #0f172a; }
  pre.code-block { background: #0f172a; color: #e2e8f0; padding: 14px 16px; border-radius: 8px; overflow-x: auto; margin: 12px 0; position: relative; }
  pre.code-block code { background: transparent; color: #e2e8f0; padding: 0; font-size: 8.5pt; line-height: 1.5; white-space: pre-wrap; }
  .code-lang { position: absolute; top: 4px; right: 10px; font-size: 7.5pt; color: #94a3b8; text-transform: uppercase; }

  blockquote { margin: 12px 0; padding: 4px 16px; border-left: 4px solid #cbd5e1; color: #475569; background: #f8fafc; border-radius: 0 8px 8px 0; }
  blockquote p { margin: 6px 0; }

  .callout { margin: 14px 0; padding: 12px 16px; border-radius: 8px; border: 1px solid; break-inside: avoid; }
  .callout .callout-tag { display: inline-block; font-size: 7.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .callout p { margin: 4px 0; }
  .callout-info { background: #eff6ff; border-color: #bfdbfe; }
  .callout-info .callout-tag { color: #2563eb; }
  .callout-tip { background: #f0fdf4; border-color: #bbf7d0; }
  .callout-tip .callout-tag { color: #16a34a; }
  .callout-warning { background: #fffbeb; border-color: #fde68a; }
  .callout-warning .callout-tag { color: #d97706; }
  .callout-error { background: #fef2f2; border-color: #fecaca; }
  .callout-error .callout-tag { color: #dc2626; }

  .interactive-note { border: 1.5px dashed #94a3b8; background: #f8fafc; border-radius: 8px; padding: 14px 18px; margin: 14px 0; display: flex; flex-direction: column; gap: 4px; color: #64748b; break-inside: avoid; }
  .interactive-note strong { color: #334155; }

  table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 9pt; break-inside: avoid; }
  th, td { border: 1px solid #e2e8f0; padding: 6px 10px; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; color: #0f172a; font-weight: 700; }
  tr:nth-child(even) td { background: #f8fafc; }
  .task-box { display: inline-block; width: 11px; text-align: center; }

  /* Glosario */
  .glosario-cat { margin-bottom: 18px; }
  .glosario-cat h3 { border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
  .glosario-term { margin: 8px 0; }
  .glosario-term p { margin: 2px 0; }

  /* Cronología */
  .hito { display: flex; gap: 14px; margin: 10px 0; break-inside: avoid; }
  .hito-year { flex: 0 0 64px; font-weight: 800; color: #2563eb; }
  .hito-title { font-weight: 700; margin: 0; color: #0f172a; }
  .hito-body p { margin: 2px 0; }
</style>
</head>
<body>
  <div class="cover">
    <div class="logo">${SITE_NAME}</div>
    <div class="tagline">${SITE_TAGLINE}</div>
    <div class="title">${TITLE}</div>
    <div class="meta">${fecha}</div>
    <div class="chips">
      <span class="chip">${bloques.length} bloques</span>
      <span class="chip">${totalLecciones} lecciones</span>
      <span class="chip">${glosario.length} términos</span>
      <span class="chip">${cronologia.length} hitos históricos</span>
    </div>
  </div>

  <div class="toc">
    <h2>Índice</h2>
    ${toc}
  </div>

  ${body}

  <section class="page-break" id="glosario">
    <div class="block-head"><span class="block-num">Referencia</span><h1>Glosario de IA</h1><p class="block-desc">${glosario.length} términos esenciales para entender la Inteligencia Artificial.</p></div>
    ${glosarioHtml}
  </section>

  <section class="page-break" id="cronologia">
    <div class="block-head"><span class="block-num">Referencia</span><h1>Cronología de la IA</h1><p class="block-desc">Los ${cronologia.length} hitos históricos que han marcado la evolución de la Inteligencia Artificial.</p></div>
    ${cronologiaHtml}
  </section>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/* Render a PDF con Chrome headless vía CDP                            */
/* ------------------------------------------------------------------ */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForCdp() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error("Chrome CDP no disponible");
}

async function connect() {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
  const tab = await res.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  return { ws, send };
}

async function main() {
  const bloques = getBloques();
  const glosarioMod = loadTsData(join(process.cwd(), "lib", "glosario-data.ts"));
  const cronoMod = loadTsData(join(process.cwd(), "lib", "cronologia-data.ts"));
  const html = buildHtml(bloques, glosarioMod.GLOSARIO, glosarioMod.CATEGORIAS_GLOSARIO, cronoMod.CRONOLOGIA);

  const htmlPath = join(tmpdir(), "atlas-contenido.html");
  writeFileSync(htmlPath, html);
  console.log(`HTML generado: ${htmlPath} (${(html.length / 1024).toFixed(0)} KB)`);
  console.log(`Contenido: ${bloques.length} bloques, ${bloques.reduce((a, b) => a + b.lecciones.length, 0)} lecciones, ${glosarioMod.GLOSARIO.length} términos, ${cronoMod.CRONOLOGIA.length} hitos`);

  const chrome = spawn(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });

  try {
    await waitForCdp();
    const { ws, send } = await connect();
    try {
      await send("Page.enable");
      await send("Page.navigate", { url: `file:///${htmlPath.replace(/\\/g, "/")}` });
      await sleep(3000);

      const result = await send("Page.printToPDF", {
        displayHeaderFooter: true,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: false,
        margin: { top: 0.55, bottom: 0.6, left: 0.45, right: 0.45 },
        headerTemplate: "<span></span>",
        footerTemplate:
          '<div style="font-size:8px; font-family:Segoe UI, Arial, sans-serif; color:#94a3b8; width:100%; text-align:center; padding:0 12mm;">Atlas IA — Contenido completo del curso · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      });

      mkdirSync(dirname(OUT), { recursive: true });
      writeFileSync(OUT, Buffer.from(result.data, "base64"));
      const sizeMb = (Buffer.from(result.data, "base64").length / (1024 * 1024)).toFixed(1);
      console.log(`PDF generado: ${OUT} (${sizeMb} MB)`);
    } finally {
      ws.close();
    }
  } finally {
    try {
      execSync(`taskkill /PID ${chrome.pid} /T /F`, { stdio: "ignore" });
    } catch {}
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
