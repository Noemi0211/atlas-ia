import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { RetosCard } from "./RetosCard";

function renderRetos() {
  return render(
    <I18nProvider locale="es">
      <RetosCard />
    </I18nProvider>
  );
}

describe("RetosCard", () => {
  beforeEach(() => {
    useProgress.setState({ challenges: [], xp: 0, badges: [] });
  });

  it("genera retos diarios y semanales con sus contadores", () => {
    renderRetos();

    expect(screen.getByText("Retos")).toBeInTheDocument();
    expect(screen.getByText("Diarios")).toBeInTheDocument();
    expect(screen.getByText("Semanales")).toBeInTheDocument();
    expect(screen.getByText("0/6 completados")).toBeInTheDocument();

    expect(screen.getAllByText("30 XP").length).toBeGreaterThan(0);
    expect(screen.getAllByText("120 XP").length).toBeGreaterThan(0);
  });

  it("muestra el tiempo restante de los retos", () => {
    renderRetos();

    expect(screen.getAllByText(/restantes/).length).toBeGreaterThan(0);
    expect(screen.queryByText("Expirado")).not.toBeInTheDocument();
  });

  it("marca un reto diario como completado y suma su XP", async () => {
    renderRetos();

    useProgress.getState().completeChallenge("ch-daily-1");

    expect(await screen.findByText("1/6 completados")).toBeInTheDocument();
    expect(screen.getByText("Hecho")).toBeInTheDocument();
    expect(useProgress.getState().xp).toBe(30);
    expect(useProgress.getState().badges).toContain("reto-diario");
  });

  it("completar un reto semanal desbloquea su insignia", async () => {
    renderRetos();

    useProgress.getState().completeChallenge("ch-weekly-1");

    expect(await screen.findByText("1/6 completados")).toBeInTheDocument();
    expect(useProgress.getState().xp).toBe(100);
    expect(useProgress.getState().badges).toContain("reto-semanal");
  });

  it("no permite completar dos veces el mismo reto", async () => {
    renderRetos();

    useProgress.getState().completeChallenge("ch-daily-1");
    useProgress.getState().completeChallenge("ch-daily-1");

    expect(useProgress.getState().xp).toBe(30);
    expect(await screen.findByText("1/6 completados")).toBeInTheDocument();
  });
});