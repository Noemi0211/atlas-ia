import { describe, it, expect } from "vitest";
import {
  findBestResponse,
  composeResult,
  findResponseWithMemory,
  findTopicFallback,
  extractDefinitionSubject,
} from "./ai";

describe("findBestResponse (fallback offline)", () => {
  it("responde a preguntas sobre LLM con contenido del curso", () => {
    const result = findBestResponse("¿qué es un LLM?", "es");
    expect(result).not.toBeNull();
    expect(result?.source).toBe("course");
    expect(result?.text).toMatch(/LLM/i);
  });

  it("reconoce el saludo sin prefijo", () => {
    const result = findBestResponse("hola", "es");
    expect(result?.noPrefix).toBe(true);
    expect(result?.text).toMatch(/Atlas/);
  });

  it("empareja frases con huecos (diferencia gpt vs gemini)", () => {
    const result = findBestResponse("¿cuál es la diferencia entre GPT y Gemini?", "es");
    expect(result).not.toBeNull();
    expect(result?.source).toBe("course");
  });

  it("responde con herramientas del ecosistema", () => {
    const result = findBestResponse("cuéntame sobre ChatGPT", "es");
    expect(result).not.toBeNull();
    expect(result?.source).toBe("course");
    expect(result?.text).toMatch(/ChatGPT/i);
  });
});

describe("composeResult", () => {
  it("antepone courseSource a respuestas del curso", () => {
    const result = findBestResponse("¿qué es un LLM?", "es");
    const composed = composeResult(result!, "es");
    expect(composed).toContain("Según Atlas IA:");
  });

  it("antepone generalIntro a respuestas de conocimiento general", () => {
    const result = findBestResponse("¿qué es commitear?", "es");
    expect(result).not.toBeNull();
    const composed = composeResult(result!, "es");
    expect(composed).toContain("Atlas IA");
  });

  it("devuelve el texto tal cual para el saludo", () => {
    const result = findBestResponse("hola", "es");
    expect(composeResult(result!, "es")).toBe(result!.text);
  });
});

describe("findTopicFallback", () => {
  it("cae a la categoría git para preguntas de git", () => {
    const text = findTopicFallback("¿cómo hago un push?", "es", null);
    expect(text).not.toBeNull();
    expect(text).toContain("Git");
  });

  it("respeta el sujeto de definición cuando pertenece a una categoría", () => {
    const text = findTopicFallback("¿qué es git?", "es", "git");
    expect(text).not.toBeNull();
    expect(text).toContain("Git");
  });

  it("devuelve null si el sujeto no pertenece a ninguna categoría", () => {
    expect(findTopicFallback("qué es antigravity", "es", "antigravity")).toBeNull();
  });
});

describe("extractDefinitionSubject", () => {
  it("extrae el sujeto de «qué es X»", () => {
    expect(extractDefinitionSubject("¿qué es antigravity?")).toBe("antigravity");
    expect(extractDefinitionSubject("qué es un token")).toBe("token");
    expect(extractDefinitionSubject("qué significa LLM")).toBe("llm");
  });

  it("devuelve null sin patrón de definición", () => {
    expect(extractDefinitionSubject("cuéntame tu opinión")).toBeNull();
  });
});

describe("findResponseWithMemory", () => {
  it("usa la respuesta directa para la última pregunta", () => {
    const response = findResponseWithMemory(
      [{ role: "user", content: "¿qué es un LLM?" }],
      "es",
    );
    expect(response).toContain("Según Atlas IA:");
    expect(response).toMatch(/LLM/i);
  });

  it("responde temas de conocimiento general sin llegar a noAnswer", () => {
    const response = findResponseWithMemory(
      [{ role: "user", content: "¿qué es git?" }],
      "es",
    );
    expect(response).toContain("Atlas IA");
    expect(response).not.toContain("No dispongo de información suficiente");
  });

  it("responde el tema exacto de una definición", () => {
    const response = findResponseWithMemory(
      [{ role: "user", content: "¿qué es antigravity?" }],
      "es",
    );
    expect(response).not.toContain("No dispongo de información suficiente");
    expect(response).toMatch(/antigravity/i);
  });

  it("usa noAnswer honesto cuando no hay información", () => {
    const response = findResponseWithMemory(
      [{ role: "user", content: "cuéntame qué son las gafas de realidad aumentada" }],
      "es",
    );
    expect(response).toContain("No dispongo de información suficiente");
  });

  it("usa la memoria de conversación para seguimientos", () => {
    const response = findResponseWithMemory(
      [
        { role: "user", content: "¿qué es un LLM?" },
        { role: "assistant", content: "respuesta" },
        { role: "user", content: "explica más" },
      ],
      "es",
    );
    expect(response).toContain("Según Atlas IA:");
  });
});
