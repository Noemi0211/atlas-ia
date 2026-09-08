import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { CronologiaTimeline } from "./CronologiaTimeline";

function renderTimeline() {
  return render(
    <I18nProvider locale="es">
      <CronologiaTimeline />
    </I18nProvider>
  );
}

function hitoCards() {
  return screen.getAllByRole("heading", { level: 3 });
}

describe("CronologiaTimeline", () => {
  it("muestra los 28 hitos por defecto", () => {
    renderTimeline();

    expect(hitoCards()).toHaveLength(28);
    expect(screen.getByText("Test de Turing")).toBeInTheDocument();
    expect(screen.getByText("IA multimodal generalizada")).toBeInTheDocument();
  });

  it("filtra por la categoría de modelos", async () => {
    const user = userEvent.setup();
    renderTimeline();

    await user.click(screen.getByRole("button", { name: "Modelos" }));

    expect(hitoCards()).toHaveLength(11);
    expect(screen.getByText("BERT de Google")).toBeInTheDocument();
    expect(screen.queryByText("Test de Turing")).not.toBeInTheDocument();
  });

  it("filtra por empresas y vuelve a mostrar todo con 'Todas'", async () => {
    const user = userEvent.setup();
    renderTimeline();

    await user.click(screen.getByRole("button", { name: "Empresas" }));

    expect(hitoCards()).toHaveLength(1);
    expect(screen.getByText("OpenAI se funda")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Todas" }));

    expect(hitoCards()).toHaveLength(28);
  });

  it("muestra la etiqueta de la categoría en cada tarjeta", () => {
    renderTimeline();

    const badges = screen.getAllByText("Modelo");
    expect(badges.length).toBe(11);
  });
});