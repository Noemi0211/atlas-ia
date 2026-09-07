import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { TokenSimulator } from "./TokenSimulator";

function renderSimulator() {
  return render(
    <I18nProvider locale="es">
      <TokenSimulator />
    </I18nProvider>
  );
}

describe("TokenSimulator", () => {
  beforeEach(() => {
    useProgress.setState({ xp: 0 });
  });

  it("muestra el título y el estado inicial con 0 tokens", () => {
    renderSimulator();
    expect(
      screen.getByRole("heading", { name: "Simulador de tokens" })
    ).toBeInTheDocument();
    expect(screen.getByText("Tokens estimados")).toBeInTheDocument();
    expect(screen.getAllByText("0").length).toBeGreaterThan(0);
    expect(screen.getByText("Dentro del límite")).toBeInTheDocument();
  });

  it("estima los tokens al escribir texto", async () => {
    const user = userEvent.setup();
    renderSimulator();

    const textarea = screen.getByPlaceholderText(
      "Escribe o pega texto aquí para estimar los tokens..."
    );
    await user.type(textarea, "hola mundo");

    expect(screen.getAllByText("4").length).toBeGreaterThan(0);
  });

  it("usar un ejemplo suma XP", async () => {
    const user = userEvent.setup();
    renderSimulator();

    await user.click(screen.getByRole("button", { name: "Ejemplo 1" }));
    expect(useProgress.getState().xp).toBe(5);
  });

  it("cambiar de modelo muestra su contexto", async () => {
    const user = userEvent.setup();
    renderSimulator();

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "gemini-2.0");

    expect(screen.getAllByText("1.000.000").length).toBeGreaterThan(0);
  });
});
