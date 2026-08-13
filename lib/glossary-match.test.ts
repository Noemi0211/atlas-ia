import { describe, it, expect } from "vitest";
import {
  buildGlossaryMatcher,
  normalizeGlossaryText,
} from "./glossary-match";

const TERMS = [
  { slug: "token", termino: "token" },
  { slug: "red-neuronal", termino: "red neuronal" },
  { slug: "inteligencia-artificial", termino: "inteligencia artificial" },
  { slug: "aplicacion", termino: "aplicación" },
  { slug: "llm", termino: "LLM" },
];

describe("normalizeGlossaryText", () => {
  it("minúsculas, sin tildes", () => {
    expect(normalizeGlossaryText("Aplicación")).toBe("aplicacion");
  });
});

describe("buildGlossaryMatcher", () => {
  const matcher = buildGlossaryMatcher(TERMS);

  it("encuentra un término simple", () => {
    const matches = matcher.find("un token vale mucho");
    expect(matches).toHaveLength(1);
    expect(matches[0]).toMatchObject({ slug: "token", start: 3, end: 8 });
  });

  it("respeta límites de palabra", () => {
    expect(matcher.find("tokenizar")).toEqual([]);
    expect(matcher.find("tokens")).toEqual([]);
  });

  it("no es sensible a mayúsculas ni tildes", () => {
    expect(matcher.find("una Aplicación potente")[0].slug).toBe("aplicacion");
    expect(matcher.find("una Aplicacion potente")[0].slug).toBe("aplicacion");
  });

  it("elige la coincidencia más larga", () => {
    const matches = matcher.find("hablamos de red neuronal profunda");
    expect(matches).toHaveLength(1);
    expect(matches[0].slug).toBe("red-neuronal");
  });

  it("encuentra frases con varias palabras", () => {
    const matches = matcher.find("la inteligencia artificial avanza");
    expect(matches).toHaveLength(1);
    expect(matches[0].slug).toBe("inteligencia-artificial");
  });

  it("encuentra múltiples términos en el mismo texto", () => {
    const matches = matcher.find("token y llm son distintos");
    const slugs = matches.map((m) => m.slug).sort();
    expect(slugs).toEqual(["llm", "token"]);
  });

  it("devuelve vacío cuando no hay términos", () => {
    expect(matcher.find("no hay coincidencias aquí")).toEqual([]);
  });
});
