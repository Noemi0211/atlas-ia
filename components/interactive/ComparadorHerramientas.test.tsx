import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { ComparadorHerramientas } from "./ComparadorHerramientas";

function renderComparador() {
  return render(
    <I18nProvider locale="es">
      <ComparadorHerramientas />
    </I18nProvider>
  );
}

describe("ComparadorHerramientas", () => {
  beforeEach(() => {
    useProgress.setState({ comparedTools: 0, badges: [] });
  });

  it("renderiza el título y las herramientas de la categoría inicial", () => {
    renderComparador();
    expect(
      screen.getByRole("heading", {
        name: "Comparador de herramientas de IA",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Selecciona una categoría:")).toBeInTheDocument();
    expect(screen.getByText("ChatGPT")).toBeInTheDocument();
    expect(screen.getByText("Claude")).toBeInTheDocument();
  });

  it("selecciona herramientas y muestra la tabla de evaluación", async () => {
    const user = userEvent.setup();
    renderComparador();

    await user.click(screen.getByText("ChatGPT").closest("button")!);
    await user.click(screen.getByText("Claude").closest("button")!);

    expect(
      screen.getByText("Evalúa cada herramienta (1-5 estrellas):")
    ).toBeInTheDocument();
    expect(screen.getByText("TOTAL")).toBeInTheDocument();
  });
});
