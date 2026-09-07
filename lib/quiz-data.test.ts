import { describe, it, expect } from "vitest";
import {
  getLeccionQuiz,
  QUIZ_COUNT,
} from "./quiz-data";
import { getAllLecciones } from "./content";
import { SUPPORTED_LOCALES } from "./i18n/config";

const allLessons = getAllLecciones("es");
const LESSON_IDS = allLessons.map((l) => `${l.bloqueSlug}/${l.slug}`);

describe("quiz-data", () => {
  it("cubre todas las lecciones del curso (76)", () => {
    expect(LESSON_IDS).toHaveLength(76);
    expect(QUIZ_COUNT).toBe(76);
  });

  it("todas las lecciones reales tienen un cuestionario", () => {
    for (const lessonId of LESSON_IDS) {
      expect(getLeccionQuiz(lessonId), lessonId).not.toBeNull();
    }
  });

  it("ninguna lección inexistente tiene cuestionario", () => {
    expect(getLeccionQuiz("no-existe/xyz")).toBeNull();
    expect(getLeccionQuiz("")).toBeNull();
  });

  it("cada cuestionario tiene 4 preguntas válidas en los 3 idiomas", () => {
    for (const locale of SUPPORTED_LOCALES) {
      for (const lessonId of LESSON_IDS) {
        const quiz = getLeccionQuiz(lessonId, locale);
        if (!quiz) throw new Error(`Falta quiz: ${lessonId}`);

        expect(quiz.id).toBe(lessonId);
        expect(quiz.questions).toHaveLength(4);

        for (const q of quiz.questions) {
          expect(q.q.trim().length).toBeGreaterThan(10);
          expect(q.explain.trim().length).toBeGreaterThan(10);
          expect(q.options).toHaveLength(4);
          expect(q.correct).toBeGreaterThanOrEqual(0);
          expect(q.correct).toBeLessThan(4);
          for (const option of q.options) {
            expect(option.trim().length).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it("las opciones traducidas mantienen el mismo índice correcto", () => {
    const es = getLeccionQuiz("fundamentos/01-que-es-ia", "es");
    const en = getLeccionQuiz("fundamentos/01-que-es-ia", "en");
    const val = getLeccionQuiz("fundamentos/01-que-es-ia", "val");
    expect(es?.questions.map((q) => q.correct)).toEqual(
      en?.questions.map((q) => q.correct)
    );
    expect(es?.questions.map((q) => q.correct)).toEqual(
      val?.questions.map((q) => q.correct)
    );
  });

  it("el fallback por defecto es español", () => {
    const quiz = getLeccionQuiz("fundamentos/02-historia-ia");
    expect(quiz?.questions[0].q).toBe(
      getLeccionQuiz("fundamentos/02-historia-ia", "es")?.questions[0].q
    );
  });
});