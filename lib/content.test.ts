import { describe, it, expect } from "vitest";
import {
  getBloques,
  getBloqueMeta,
  getLeccionesBloque,
  getLeccion,
  getAllLecciones,
  searchContent,
} from "./content";

describe("getBloques / getBloqueMeta", () => {
  it("expone los 11 bloques", () => {
    expect(getBloques()).toHaveLength(11);
  });

  it("resuelve el meta de un bloque conocido", () => {
    expect(getBloqueMeta("fundamentos")?.numero).toBe(1);
    expect(getBloqueMeta("inexistente")).toBeUndefined();
  });
});

describe("getLeccionesBloque", () => {
  it("carga las 10 lecciones de fundamentos", () => {
    expect(getLeccionesBloque("fundamentos")).toHaveLength(10);
  });

  it("devuelve vacío para un bloque desconocido", () => {
    expect(getLeccionesBloque("no-existe")).toEqual([]);
  });
});

describe("getLeccion", () => {
  it("carga contenido y frontmatter en español", () => {
    const leccion = getLeccion("fundamentos", "01-que-es-ia");
    expect(leccion).not.toBeNull();
    expect(leccion?.content.trim().length).toBeGreaterThan(0);
    expect(typeof leccion?.meta.titulo).toBe("string");
    expect(leccion?.frontmatter.title).toBeTruthy();
  });

  it("carga las lecciones en los idiomas localizados", () => {
    const en = getLeccion("fundamentos", "01-que-es-ia", "en");
    const val = getLeccion("fundamentos", "01-que-es-ia", "val");
    expect(en).not.toBeNull();
    expect(en?.content.length).toBeGreaterThan(0);
    expect(typeof en?.meta.titulo).toBe("string");
    expect(val).not.toBeNull();
    expect(val?.content.length).toBeGreaterThan(0);
  });

  it("devuelve null para una lección desconocida", () => {
    expect(getLeccion("fundamentos", "inexistente")).toBeNull();
  });
});

describe("getAllLecciones", () => {
  it("enlaza cada lección con su bloque", () => {
    const all = getAllLecciones();
    expect(all.length).toBeGreaterThan(0);
    const ejemplo = all.find((l) => l.bloqueSlug === "fundamentos");
    expect(ejemplo?.bloqueNumero).toBe(1);
  });
});

describe("searchContent", () => {
  it("encuentra términos del glosario", () => {
    const results = searchContent("neurona", "es");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.href === "/es/glosario")).toBe(true);
  });

  it("devuelve resultados vacíos sin coincidencias", () => {
    expect(searchContent("zzzqqqpalabra-inexistente", "es")).toEqual([]);
  });
});
