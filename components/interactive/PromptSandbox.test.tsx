import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { PromptSandbox } from "./PromptSandbox";

function renderSandbox() {
  return render(
    <I18nProvider locale="es">
      <PromptSandbox />
    </I18nProvider>
  );
}

describe("PromptSandbox", () => {
  beforeEach(() => {
    useProgress.setState({ badges: [], xp: 0, calculadoraUsada: false });
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      configurable: true,
    });
  });

  it("muestra la pista vacía hasta que se escribe una tarea", () => {
    renderSandbox();
    expect(screen.getByText("Escribe una tarea para ver tu prompt generado")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Copiar" })).not.toBeInTheDocument();
  });

  it("genera un prompt al escribir una tarea", async () => {
    const user = userEvent.setup();
    renderSandbox();

    const textarea = screen.getByPlaceholderText("Describe qué quieres que haga la IA...");
    await user.type(textarea, "Explica qué es un prompt");

    expect(await screen.findByText("Prompt generado")).toBeInTheDocument();
    expect(screen.queryByText("Escribe una tarea para ver tu prompt generado")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copiar" })).toBeInTheDocument();
  });

  it("al copiar desbloquea la insignia de calculadora y suma XP", async () => {
    const user = userEvent.setup();
    renderSandbox();

    await user.type(screen.getByPlaceholderText("Describe qué quieres que haga la IA..."), "Resume un texto");
    const copyButton = await screen.findByRole("button", { name: "Copiar" });
    await user.click(copyButton);

    expect(screen.getByText("Copiado")).toBeInTheDocument();
    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("calculadora-prompts");
    });
    expect(useProgress.getState().xp).toBe(25);
  });

  it("no vuelve a sumar XP al copiar el mismo prompt dos veces", async () => {
    const user = userEvent.setup();
    renderSandbox();

    await user.type(screen.getByPlaceholderText("Describe qué quieres que haga la IA..."), "Escribe un artículo");
    const copyButton = await screen.findByRole("button", { name: "Copiar" });
    await user.click(copyButton);
    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("calculadora-prompts");
    });

    await user.click(copyButton);
    expect(useProgress.getState().xp).toBe(25);
  });

  it("usa una sugerencia al hacer clic en ella", async () => {
    const user = userEvent.setup();
    renderSandbox();

    await user.click(screen.getByRole("button", { name: "Explica qué es el Machine Learning" }));
    expect(screen.getByPlaceholderText("Describe qué quieres que haga la IA...")).toHaveValue("Explica qué es el Machine Learning");
  });
});
