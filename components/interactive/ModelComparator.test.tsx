import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { ModelComparator } from "./ModelComparator";

function renderComparator() {
  return render(
    <I18nProvider locale="es">
      <ModelComparator />
    </I18nProvider>
  );
}

describe("ModelComparator", () => {
  beforeEach(() => {
    useProgress.setState({ badges: [], xp: 0 });
  });

  it("muestra el título y la categoría Asistentes por defecto con 3 modelos", () => {
    renderComparator();
    expect(
      screen.getByRole("heading", { name: "Comparador de modelos" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Asistentes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ChatGPT" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Claude" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Gemini" })).toBeInTheDocument();
    expect(screen.getByText("Criterio")).toBeInTheDocument();
    expect(screen.getByText("Empresa")).toBeInTheDocument();
    expect(screen.getAllByText("ChatGPT").length).toBeGreaterThanOrEqual(2);
  });

  it("cambia de categoría y muestra los modelos de esa categoría", async () => {
    const user = userEvent.setup();
    renderComparator();

    await user.click(screen.getByRole("button", { name: "Código" }));
    expect(screen.getByRole("button", { name: "GitHub Copilot" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cursor" })).toBeInTheDocument();
  });

  it("seleccionar un modelo no duplica la insignia de evaluador", async () => {
    const user = userEvent.setup();
    renderComparator();

    await user.click(screen.getByRole("button", { name: "Gemini" }));
    await user.click(screen.getByRole("button", { name: "Gemini" }));

    const badges = useProgress.getState().badges.filter(
      (b) => b === "evaluador-modelos"
    );
    expect(badges).toHaveLength(1);
    expect(useProgress.getState().xp).toBe(30);
  });

  it("muestra la recomendación cuando hay al menos 2 modelos", () => {
    renderComparator();
    expect(screen.getByText(/Recomendación:/)).toBeInTheDocument();
    expect(screen.getByText(/Para uso general/)).toBeInTheDocument();
  });
});
