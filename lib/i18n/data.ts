import type { Dictionary } from "./dictionaries/es";
import type {
  BloqueMeta,
  CategoriaHerramienta,
  CriterioComparacion,
  DecisionNode,
  GlosarioTermino,
  HerramientaIA,
} from "../types";
import { BLOQUES as BLOQUES_ES, NAV_ITEMS as NAV_ITEMS_ES } from "../constants";
import { CRONOLOGIA as CRONOLOGIA_ES, type HitoIA } from "../cronologia-data";
import { GLOSARIO as GLOSARIO_ES } from "../glosario-data";
import { slugify } from "../utils";
import {
  CATEGORIAS as CATEGORIAS_ES,
  HERRAMIENTAS as HERRAMIENTAS_ES,
  CRITERIOS_COMPARACION as CRITERIOS_ES,
  ARBOL_DECISION as ARBOL_ES,
} from "../ecosistema-data";
import {
  ROLES as ROLES_ES,
  FORMATOS as FORMATOS_ES,
  TONOS as TONOS_ES,
  AUDIENCIAS as AUDIENCIAS_ES,
  EXTENSIONES as EXTENSIONES_ES,
  type PromptConfig,
} from "../prompting-data";

const NAV_LABEL_KEY: Record<string, keyof Dictionary["nav"]> = {
  "/": "inicio",
  "/bloques": "bloques",
  "/cronologia": "cronologia",
  "/glosario": "glosario",
  "/laboratorio": "laboratorio",
  "/perfil": "perfil",
};

export function getBLOQUES(t: Dictionary): BloqueMeta[] {
  return BLOQUES_ES.map((b) => {
    const loc = t.data.bloques[b.slug as keyof typeof t.data.bloques];
    return loc ? { ...b, titulo: loc.titulo, descripcion: loc.descripcion } : b;
  });
}

export function getBloqueMeta(t: Dictionary, slug: string): BloqueMeta | undefined {
  return getBLOQUES(t).find((b) => b.slug === slug);
}

export interface LocalizedNavItem {
  href: string;
  label: string;
  icon: string;
}

export function getNavItems(t: Dictionary): LocalizedNavItem[] {
  return NAV_ITEMS_ES.map((item) => ({
    ...item,
    label: NAV_LABEL_KEY[item.href]
      ? t.nav[NAV_LABEL_KEY[item.href]]
      : item.label,
  }));
}

type GlosarioCatKey = keyof Dictionary["data"]["glosarioCategorias"];

const GLOSARIO_CATEGORY_ORDER: GlosarioCatKey[] = [
  "todas",
  "conceptos",
  "ml",
  "modelos",
  "tecnico",
  "prompting",
  "herramientas",
  "limitaciones",
];

export function getGlosario(t: Dictionary): GlosarioTermino[] {
  return t.data.glosario.map((entry) => ({
    termino: entry.termino,
    definicion: entry.definicion,
    categoria:
      t.data.glosarioCategorias[entry.categoria as GlosarioCatKey] ??
      entry.categoria,
  }));
}

export function getCategoriasGlosario(t: Dictionary): string[] {
  return GLOSARIO_CATEGORY_ORDER.map((k) => t.data.glosarioCategorias[k]);
}

export interface GlosarioTerminoLocalizado {
  slug: string;
  termino: string;
  definicion: string;
  categoria: string;
  categoriaKey: string;
}

export function getGlosarioTerminos(t: Dictionary): GlosarioTerminoLocalizado[] {
  return t.data.glosario.map((entry, i) => {
    const categoriaKey = entry.categoria as GlosarioCatKey;
    const fuente = GLOSARIO_ES[i];
    return {
      slug: slugify(fuente ? fuente.termino : entry.termino),
      termino: entry.termino,
      definicion: entry.definicion,
      categoria: t.data.glosarioCategorias[categoriaKey] ?? entry.categoria,
      categoriaKey,
    };
  });
}

export function getCronologia(t: Dictionary): HitoIA[] {
  return CRONOLOGIA_ES.map((hito, i) => {
    const loc = t.data.cronologia[i];
    return loc
      ? { ...hito, titulo: loc.titulo, descripcion: loc.descripcion }
      : hito;
  });
}

export function getCategoriasHerramientas(
  t: Dictionary
): Record<
  CategoriaHerramienta,
  { nombre: string; descripcion: string; icono: string }
> {
  const result = {} as Record<
    CategoriaHerramienta,
    { nombre: string; descripcion: string; icono: string }
  >;
  for (const [key, cat] of Object.entries(CATEGORIAS_ES) as [
    CategoriaHerramienta,
    (typeof CATEGORIAS_ES)[CategoriaHerramienta]
  ][]) {
    const loc = t.data.ecosistema.categorias[
      key as keyof typeof t.data.ecosistema.categorias
    ];
    result[key] = {
      nombre: loc?.nombre ?? cat.nombre,
      descripcion: loc?.descripcion ?? cat.descripcion,
      icono: cat.icono,
    };
  }
  return result;
}

export function getHerramientas(t: Dictionary): HerramientaIA[] {
  return HERRAMIENTAS_ES.map((h) => {
    const loc = t.data.ecosistema.herramientas[
      h.id as keyof typeof t.data.ecosistema.herramientas
    ];
    if (!loc) return h;
    return {
      ...h,
      nombre: loc.nombre,
      descripcion: loc.descripcion,
      caracteristicas: loc.caracteristicas,
      idealPara: loc.idealPara,
      precioDetalle: loc.precioDetalle,
      ventanaContexto: loc.ventanaContexto,
      fortalezaPrincipal: loc.fortalezaPrincipal,
      debilidadPrincipal: loc.debilidadPrincipal,
    };
  });
}

export function getHerramientasPorCategoria(
  t: Dictionary,
  categoria: CategoriaHerramienta
): HerramientaIA[] {
  return getHerramientas(t).filter((h) => h.categoria === categoria);
}

export function getHerramientaPorId(
  t: Dictionary,
  id: string
): HerramientaIA | undefined {
  return getHerramientas(t).find((h) => h.id === id);
}

export function getCriteriosComparacion(t: Dictionary): CriterioComparacion[] {
  return CRITERIOS_ES.map((c) => {
    const loc = t.data.ecosistema.criterios[
      c.id as keyof typeof t.data.ecosistema.criterios
    ];
    return loc
      ? { id: c.id, nombre: loc.nombre, descripcion: loc.descripcion, opciones: loc.opciones }
      : c;
  });
}

export function getArbolDecision(t: Dictionary): DecisionNode[] {
  return ARBOL_ES.map((node) => {
    const loc = t.data.ecosistema.arbol[
      node.id as keyof typeof t.data.ecosistema.arbol
    ];
    if (!loc) return node;
    return {
      ...node,
      pregunta: loc.pregunta,
      descripcion: loc.descripcion,
      opciones: node.opciones.map((op, i) => ({
        ...op,
        texto: loc.opciones[i] ?? op.texto,
      })),
    };
  });
}

export function getNodoDecision(
  t: Dictionary,
  id: string
): DecisionNode | undefined {
  return getArbolDecision(t).find((n) => n.id === id);
}

export interface PromptOption {
  id: string;
  label: string;
  descripcion: string;
}

function toOptions<
  T extends readonly { id: string; label: string; descripcion: string }[]
>(
  base: T,
  map: Record<string, { label: string; descripcion: string }>
): PromptOption[] {
  return base.map((o) => ({
    id: o.id,
    label: map[o.id]?.label ?? o.label,
    descripcion: map[o.id]?.descripcion ?? o.descripcion,
  }));
}

export function getRoles(t: Dictionary): PromptOption[] {
  return toOptions(ROLES_ES, t.data.prompting.roles);
}

export function getFormatos(t: Dictionary): PromptOption[] {
  return toOptions(FORMATOS_ES, t.data.prompting.formatos);
}

export function getTonos(t: Dictionary): PromptOption[] {
  return toOptions(TONOS_ES, t.data.prompting.tonos);
}

export function getAudiencias(t: Dictionary): PromptOption[] {
  return toOptions(AUDIENCIAS_ES, t.data.prompting.audiencias);
}

export function getExtensiones(t: Dictionary): PromptOption[] {
  return toOptions(EXTENSIONES_ES, t.data.prompting.extensiones);
}

export function generarPromptLocalizado(
  t: Dictionary,
  config: PromptConfig
): string {
  const g = t.data.prompting.generar;
  const partes: string[] = [];

  if (config.rol && config.rol !== "ninguno") {
    const rolLabel =
      getRoles(t).find((r) => r.id === config.rol)?.label.toLowerCase() ?? "";
    partes.push(g.eresUn.replace("{rol}", rolLabel));
  }

  if (config.contexto) {
    partes.push(`\n\n${g.contexto}: ${config.contexto}`);
  }

  partes.push(`\n\n${config.tarea}`);

  const especificaciones: string[] = [];

  if (config.formato) {
    const label =
      getFormatos(t).find((f) => f.id === config.formato)?.label.toLowerCase() ??
      "";
    especificaciones.push(g.enFormato.replace("{x}", label));
  }

  if (config.tono) {
    const label =
      getTonos(t).find((tn) => tn.id === config.tono)?.label.toLowerCase() ?? "";
    especificaciones.push(g.conTono.replace("{x}", label));
  }

  if (config.audiencia) {
    const label =
      getAudiencias(t).find((a) => a.id === config.audiencia)?.label.toLowerCase() ??
      "";
    especificaciones.push(g.dirigidoA.replace("{x}", label));
  }

  if (config.extension) {
    const extLabel =
      getExtensiones(t).find((e) => e.id === config.extension)?.label ?? "";
    especificaciones.push(extLabel);
  }

  if (especificaciones.length > 0) {
    partes.push(
      `\n\n${g.responde.replace("{especificaciones}", especificaciones.join(", "))}`
    );
  }

  return partes.join("");
}

export interface LocalizedBadge {
  nombre: string;
  descripcion: string;
}

export function getBadgeText(
  t: Dictionary,
  id: string
): LocalizedBadge | undefined {
  return t.data.badges[id as keyof typeof t.data.badges];
}

export function getRetoText(
  t: Dictionary,
  id: string
): { title: string; description: string } | undefined {
  return t.data.retos[id as keyof typeof t.data.retos];
}

export function getProyectoText(
  t: Dictionary,
  id: string
): { title: string; description: string } | undefined {
  return t.data.proyectos[id as keyof typeof t.data.proyectos];
}
