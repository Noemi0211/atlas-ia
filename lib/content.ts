import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BloqueMeta, LeccionMeta } from "./types";
import { BLOQUES } from "./constants";
import { getDictionary } from "./i18n/dictionaries";
import { DEFAULT_LOCALE, prefixPath, type Locale } from "./i18n/config";
import { getBloqueMeta as getBloqueMetaLocalizada, getGlosario, getHerramientas } from "./i18n/data";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getBloqueMeta(slug: string): BloqueMeta | undefined {
  return BLOQUES.find((b) => b.slug === slug);
}

export function getBloques(): BloqueMeta[] {
  return BLOQUES;
}

function contentRoot(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? CONTENT_DIR : path.join(CONTENT_DIR, locale);
}

function findMetaPath(bloqueSlug: string, locale: Locale): string {
  const localPath = path.join(contentRoot(locale), bloqueSlug, "meta.json");
  if (fs.existsSync(localPath)) return localPath;
  const fallbackPath = path.join(CONTENT_DIR, bloqueSlug, "meta.json");
  if (fs.existsSync(fallbackPath)) return fallbackPath;
  return "";
}

function findLeccionPath(bloqueSlug: string, leccionSlug: string, locale: Locale): string {
  const localPath = path.join(contentRoot(locale), bloqueSlug, `${leccionSlug}.mdx`);
  if (fs.existsSync(localPath)) return localPath;
  const fallbackPath = path.join(CONTENT_DIR, bloqueSlug, `${leccionSlug}.mdx`);
  if (fs.existsSync(fallbackPath)) return fallbackPath;
  return "";
}

export function getLeccionesBloque(bloqueSlug: string, locale: Locale = DEFAULT_LOCALE): LeccionMeta[] {
  const metaPath = findMetaPath(bloqueSlug, locale);

  if (!metaPath) return [];

  const metaContent = fs.readFileSync(metaPath, "utf-8");
  const meta = JSON.parse(metaContent) as { lecciones: LeccionMeta[] };

  return meta.lecciones || [];
}

export function getLeccion(
  bloqueSlug: string,
  leccionSlug: string,
  locale: Locale = DEFAULT_LOCALE
): { content: string; meta: LeccionMeta; frontmatter: Record<string, unknown> } | null {
  const lecciones = getLeccionesBloque(bloqueSlug, locale);
  const leccionMeta = lecciones.find((l) => l.slug === leccionSlug);

  if (!leccionMeta) return null;

  const filePath = findLeccionPath(bloqueSlug, leccionSlug, locale);

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    content,
    meta: leccionMeta,
    frontmatter: data,
  };
}

export function getAllLecciones(locale: Locale = DEFAULT_LOCALE): (LeccionMeta & { bloqueSlug: string; bloqueNumero: number })[] {
  const all: (LeccionMeta & { bloqueSlug: string; bloqueNumero: number })[] = [];

  for (const bloque of BLOQUES) {
    const lecciones = getLeccionesBloque(bloque.slug, locale);
    for (const leccion of lecciones) {
      all.push({
        ...leccion,
        bloqueSlug: bloque.slug,
        bloqueNumero: bloque.numero,
      });
    }
  }

  return all;
}

export function searchContent(query: string, locale: Locale = DEFAULT_LOCALE) {
  const t = getDictionary(locale);
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const results: { titulo: string; excerpt: string; href: string; bloque: string }[] = [];

  for (const bloque of BLOQUES) {
    const lecciones = getLeccionesBloque(bloque.slug, locale);
    const bloqueLocalizado = getBloqueMetaLocalizada(t, bloque.slug);
    for (const leccion of lecciones) {
      const filePath = findLeccionPath(bloque.slug, leccion.slug, locale);
      if (!filePath) continue;

      const raw = fs.readFileSync(filePath, "utf-8");
      const { content } = matter(raw);
      const normalizedContent = content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      if (normalizedContent.includes(normalizedQuery) || leccion.titulo.toLowerCase().includes(normalizedQuery)) {
        const plainText = content.replace(/[#*_`>\[\]()]/g, "").substring(0, 200);
        results.push({
          titulo: leccion.titulo,
          excerpt: plainText + "...",
          href: prefixPath(`/bloques/${bloque.slug}/${leccion.slug}`, locale),
          bloque: bloqueLocalizado?.titulo ?? bloque.titulo,
        });
      }
    }
  }

  for (const termino of getGlosario(t)) {
    const texto = `${termino.termino} ${termino.definicion}`;
    const normalizedTexto = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (normalizedTexto.includes(normalizedQuery)) {
      results.push({
        titulo: termino.termino,
        excerpt: termino.definicion.substring(0, 200) + "...",
        href: prefixPath("/glosario", locale),
        bloque: t.nav.glosario,
      });
    }
  }

  for (const herramienta of getHerramientas(t)) {
    const texto = `${herramienta.nombre} ${herramienta.descripcion} ${herramienta.fortalezaPrincipal}`;
    const normalizedTexto = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (normalizedTexto.includes(normalizedQuery)) {
      results.push({
        titulo: herramienta.nombre,
        excerpt: herramienta.descripcion.substring(0, 200) + "...",
        href: prefixPath("/bloques/ecosistema", locale),
        bloque: getBloqueMetaLocalizada(t, "ecosistema")?.titulo ?? "Ecosistema IA",
      });
    }
  }

  return results;
}
