import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import type { LessonQuiz as LessonQuizData } from "@/lib/quiz-data";
import { LessonQuiz } from "./LessonQuiz";

const quiz: LessonQuizData = {
  id: "test/leccion",
  questions: [
    {
      q: "Pregunta 1",
      options: ["Opción A1", "Opción B1", "Opción C1", "Opción D1"],
      correct: 1,
      explain: "Explicación 1",
    },
    {
      q: "Pregunta 2",
      options: ["Opción A2", "Opción B2", "Opción C2", "Opción D2"],
      correct: 2,
      explain: "Explicación 2",
    },
  ],
};

function renderQuiz() {
  return render(
    <I18nProvider locale="es">
      <LessonQuiz quiz={quiz} />
    </I18nProvider>
  );
}

describe("LessonQuiz", () => {
  beforeEach(() => {
    useProgress.setState({
      badges: [],
      xp: 0,
      quizBest: {},
      quizPerfect: [],
    });
  });

  it("muestra el título, la pregunta y las opciones", () => {
    renderQuiz();
    expect(screen.getByText("Pon a prueba lo aprendido")).toBeInTheDocument();
    expect(screen.getByText("Pregunta 1")).toBeInTheDocument();
    expect(screen.getByText("Pregunta 1 de 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Opción A1/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Opción D1/ })).toBeInTheDocument();
  });

  it("muestra retroalimentación al responder y avanza", async () => {
    const user = userEvent.setup();
    renderQuiz();

    await user.click(screen.getByRole("button", { name: /Opción A1/ }));
    expect(screen.getByText("Incorrecto")).toBeInTheDocument();
    expect(screen.getByText("Explicación 1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Siguiente pregunta" }));
    expect(screen.getByText("Pregunta 2 de 2")).toBeInTheDocument();
  });

  it("registra el resultado final y otorga XP e insignias", async () => {
    const user = userEvent.setup();
    renderQuiz();

    await user.click(screen.getByRole("button", { name: /Opción B1/ }));
    await user.click(screen.getByRole("button", { name: "Siguiente pregunta" }));
    await user.click(screen.getByRole("button", { name: /Opción C2/ }));
    await user.click(screen.getByRole("button", { name: "Ver resultado" }));

    expect(screen.getByText("Resultado")).toBeInTheDocument();
    expect(screen.getByText("¡Puntuación perfecta!")).toBeInTheDocument();
    expect(screen.getByText("Has acertado 2 de 2")).toBeInTheDocument();
    expect(screen.getByText("Has ganado 10 XP")).toBeInTheDocument();

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("primer-quiz");
      expect(useProgress.getState().badges).toContain("quiz-perfecto");
      expect(useProgress.getState().quizPerfect).toContain("test/leccion");
    });
    expect(useProgress.getState().xp).toBe(10);
    expect(useProgress.getState().quizBest["test/leccion"]).toBe(2);
  });

  it("no vuelve a sumar XP si se reintenta el cuestionario", async () => {
    const user = userEvent.setup();
    renderQuiz();

    await user.click(screen.getByRole("button", { name: /Opción A1/ }));
    await user.click(screen.getByRole("button", { name: "Siguiente pregunta" }));
    await user.click(screen.getByRole("button", { name: /Opción C2/ }));
    await user.click(screen.getByRole("button", { name: "Ver resultado" }));

    await waitFor(() => {
      expect(useProgress.getState().xp).toBe(5);
    });

    await user.click(screen.getByRole("button", { name: "Volver a intentarlo" }));
    await user.click(screen.getByRole("button", { name: /Opción B1/ }));
    await user.click(screen.getByRole("button", { name: "Siguiente pregunta" }));
    await user.click(screen.getByRole("button", { name: /Opción C2/ }));
    await user.click(screen.getByRole("button", { name: "Ver resultado" }));

    expect(useProgress.getState().xp).toBe(5);
    expect(useProgress.getState().quizBest["test/leccion"]).toBe(2);
  });
});