import { describe, it, expect } from "vitest";
import { cn, slugify, capitalize, formatDate } from "./utils";

describe("cn", () => {
  it("combina clases con espacio", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignora valores falsos", () => {
    expect(cn("a", false && "b", null, undefined, 0 && "c", "d")).toBe("a d");
  });

  it("devuelve cadena vacía sin argumentos", () => {
    expect(cn()).toBe("");
  });
});

describe("slugify", () => {
  it("convierte texto a slug", () => {
    expect(slugify("Hola Mundo")).toBe("hola-mundo");
  });

  it("elimina tildes y caracteres no alfanuméricos", () => {
    expect(slugify("Ética y IA: responsable")).toBe("etica-y-ia-responsable");
  });

  it("colapsa guiones consecutivos", () => {
    expect(slugify("a  -   b")).toBe("a-b");
  });
});

describe("capitalize", () => {
  it("pone la primera letra en mayúscula", () => {
    expect(capitalize("hola")).toBe("Hola");
  });

  it("no altera el resto del texto", () => {
    expect(capitalize("atlas ia")).toBe("Atlas ia");
  });
});

describe("formatDate", () => {
  it("formatea con mes en español", () => {
    expect(formatDate(new Date(2026, 7, 13), "es")).toBe("13 de agosto de 2026");
  });

  it("formatea con mes en inglés", () => {
    expect(formatDate(new Date(2026, 7, 13), "en")).toMatch(/august/i);
  });
});
