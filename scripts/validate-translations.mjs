#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = join(process.cwd(), "content");
const LOCALES = ["es", "en", "val"];
const BLOQUE_SLUGS = [
  "antes-de-empezar",
  "fundamentos",
  "ecosistema",
  "prompting",
  "ia-docencia",
  "ia-multimodal",
  "programacion",
  "agentes",
  "etica",
  "laboratorio",
  "novedades",
];

function blockDir(locale, bloqueSlug) {
  return locale === "es" ? join(CONTENT_DIR, bloqueSlug) : join(CONTENT_DIR, locale, bloqueSlug);
}

function listMdx(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort();
}

function stripFences(raw) {
  return raw
    .split("\n")
    .filter((l) => !/^\s*```/.test(l))
    .join("\n");
}

function structuralFingerprint(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const body = stripFences(content);

  const headings = [];
  for (const line of body.split("\n")) {
    const m = line.match(/^(#{1,6})\s/);
    if (m) headings.push(`h${m[1].length}`);
  }

  const callouts = [];
  for (const m of content.matchAll(/<Callout\s+type=["']([^"']+)["']/g)) {
    callouts.push(m[1]);
  }

  const codeBlocks = [];
  for (const m of content.matchAll(/```(\w+)/g)) {
    codeBlocks.push(m[1]);
  }

  const tables = [];
  let tbl = null;
  for (const line of body.split("\n")) {
    if (/^\s*\|.*\|\s*$/.test(line)) {
      if (!tbl) tbl = [];
      tbl.push(line);
    } else if (tbl) {
      tables.push(tbl.length);
      tbl = null;
    }
  }
  if (tbl) tables.push(tbl.length);

  const linkCount = (content.match(/\[[^\]]*\]\([^)]*\)/g) || []).length;
  const imageCount = (content.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length;
  const listItems = (body.match(/^\s*[-*+]\s+/gm) || []).length;
  const orderedItems = (body.match(/^\s*\d+\.\s+/gm) || []).length;

  return {
    lines: raw.split("\n").length,
    frontmatter: { title: data.title, description: data.description },
    headings,
    callouts,
    codeBlocks,
    tables,
    linkCount: linkCount - imageCount,
    imageCount,
    listItems,
    orderedItems,
  };
}

function safeJson(filePath) {
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf-8"));
  } catch {
    return { __parseError: true };
  }
}

const errors = [];
let checkedLessons = 0;

function fail(...parts) {
  errors.push(parts.join(" · "));
}

for (const bloque of BLOQUE_SLUGS) {
  const metas = {};
  for (const loc of LOCALES) metas[loc] = safeJson(join(blockDir(loc, bloque), "meta.json"));

  if (metas.es && metas.es.__parseError) fail(bloque, "meta.json (es) no es JSON válido");
  for (const loc of ["en", "val"]) {
    if (metas[loc] === null) {
      fail(bloque, `meta.json no existe (${loc})`);
    } else if (metas[loc].__parseError) {
      fail(bloque, `meta.json no es JSON válido (${loc})`);
    }
  }

  if (metas.en && !metas.en.__parseError && metas.val && !metas.val.__parseError) {
    const es = metas.es;
    if (es.bloque !== metas.en.bloque || es.bloque !== metas.val.bloque) {
      fail(bloque, `número de bloque distinto es=${es.bloque} en=${metas.en.bloque} val=${metas.val.bloque}`);
    }
    const slugs = (m) => (m ? m.lecciones.map((l) => l.slug) : []);
    const a = slugs(es);
    const b = slugs(metas.en);
    const c = slugs(metas.val);
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      fail(bloque, `slugs/orden de lecciones distinto es vs en`);
    }
    if (JSON.stringify(a) !== JSON.stringify(c)) {
      fail(bloque, `slugs/orden de lecciones distinto es vs val`);
    }
    if (a.length !== b.length || a.length !== c.length) {
      fail(bloque, `conteo de lecciones es=${a.length} en=${b.length} val=${c.length}`);
    }
    for (const loc of ["en", "val"]) {
      const lec = metas[loc].lecciones || [];
      es.lecciones.forEach((l, i) => {
        const other = lec[i] || {};
        for (const key of ["orden", "duracion", "dificultad"]) {
          if (String(l[key]) !== String(other[key])) {
            fail(bloque, `lección "${l.slug}" (${loc}): campo "${key}" distinto es=${l[key]} ${loc}=${other[key]}`);
          }
        }
      });
    }
  }

  const files = {};
  for (const loc of LOCALES) files[loc] = listMdx(blockDir(loc, bloque));

  for (const loc of ["en", "val"]) {
    const extraEs = files.es.filter((f) => !files[loc].includes(f));
    const extraLoc = files[loc].filter((f) => !files.es.includes(f));
    for (const f of extraEs) fail(bloque, `falta "${f}" en ${loc}`);
    for (const f of extraLoc) fail(bloque, `"${f}" sobra en ${loc} (no está en es)`);
  }

  const metasLessons = (loc, slug) => {
    const m = metas[loc];
    if (!m || !m.lecciones) return null;
    return m.lecciones.find((l) => l.slug === slug) || null;
  };

  for (const file of files.es) {
    const slug = basename(file, ".mdx");
    const fps = {};
    let missing = false;
    for (const loc of LOCALES) {
      const p = join(blockDir(loc, bloque), file);
      if (!existsSync(p)) {
        fail(bloque, `falta ${loc}/${bloque}/${file}`);
        missing = true;
        continue;
      }
      fps[loc] = structuralFingerprint(p);
    }
    if (missing) continue;

    checkedLessons++;

    const f = fps.es;
    for (const loc of ["en", "val"]) {
      const o = fps[loc];
      if (!o.frontmatter.title) fail(bloque, `${file} (${loc}): falta frontmatter title`);
      if (!o.frontmatter.description) fail(bloque, `${file} (${loc}): falta frontmatter description`);
      if (JSON.stringify(o.headings) !== JSON.stringify(f.headings)) {
        fail(bloque, `${file} (${loc}): headings distintos es=${f.headings.join(",")} ${loc}=${o.headings.join(",")}`);
      }
      if (JSON.stringify(o.callouts) !== JSON.stringify(f.callouts)) {
        fail(bloque, `${file} (${loc}): Callouts distintos es=[${f.callouts}] ${loc}=[${o.callouts}]`);
      }
      if (JSON.stringify(o.codeBlocks) !== JSON.stringify(f.codeBlocks)) {
        fail(bloque, `${file} (${loc}): bloques de código distintos`);
      }
      if (JSON.stringify(o.tables) !== JSON.stringify(f.tables)) {
        fail(bloque, `${file} (${loc}): tablas distintas es=${JSON.stringify(f.tables)} ${loc}=${JSON.stringify(o.tables)}`);
      }
      if (o.linkCount !== f.linkCount) fail(bloque, `${file} (${loc}): nº enlaces distinto es=${f.linkCount} ${loc}=${o.linkCount}`);
      if (o.imageCount !== f.imageCount) fail(bloque, `${file} (${loc}): nº imágenes distinto es=${f.imageCount} ${loc}=${o.imageCount}`);
      if (o.listItems !== f.listItems) fail(bloque, `${file} (${loc}): nº ítems de lista distinto es=${f.listItems} ${loc}=${o.listItems}`);
      if (o.orderedItems !== f.orderedItems) fail(bloque, `${file} (${loc}): nº ítems ordenados distinto es=${f.orderedItems} ${loc}=${o.orderedItems}`);
      if (o.lines !== f.lines) {
        fail(bloque, `${file} (${loc}): nº de líneas distinto es=${f.lines} ${loc}=${o.lines}`);
      }
    }

    for (const loc of LOCALES) {
      const metaLec = metasLessons(loc, slug);
      const fm = fps[loc].frontmatter;
      if (metaLec && fm.title && fm.title !== metaLec.titulo) {
        fail(bloque, `${file} (${loc}): frontmatter title ≠ meta.json titulo`);
      }
    }
  }
}

const esLessonCount = BLOQUE_SLUGS.reduce((n, b) => n + listMdx(blockDir("es", b)).length, 0);

console.log(`Validación de traducciones es/en/val`);
console.log(`------------------------------------`);
console.log(`Bloques: ${BLOQUE_SLUGS.length} · Lecciones (es): ${esLessonCount} · Lecciones cotejadas: ${checkedLessons}`);
console.log(`Errores: ${errors.length}`);
console.log("");

if (errors.length === 0) {
  console.log("✓ TODO CORRECTO: la estructura es/en/val está sincronizada.");
  process.exit(0);
} else {
  console.log("✗ ERRORES ENCONTRADOS:");
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}
