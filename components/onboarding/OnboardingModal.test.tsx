import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { OnboardingModal } from "./OnboardingModal";

vi.mock("next/navigation", () => ({
  usePathname: () => "/es",
}));

const ONBOARD_KEY = "atlas-onboarded";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
});

function renderModal() {
  return render(
    <I18nProvider locale="es">
      <OnboardingModal />
    </I18nProvider>
  );
}

describe("OnboardingModal", () => {
  it("muestra el primer paso si el usuario no ha visto la guía", async () => {
    renderModal();
    const dialog = await screen.findByRole("dialog", { name: /cómo usar atlas ia/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /te damos la bienvenida a atlas ia/i })).toBeInTheDocument();
  });

  it("no se muestra si el usuario ya completó la guía", async () => {
    localStorage.setItem(ONBOARD_KEY, "1");
    renderModal();
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("avanza y retrocede entre pasos", async () => {
    const user = userEvent.setup();
    renderModal();
    await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /siguiente/i }));
    expect(
      screen.getByRole("heading", { name: /explora desde el menú/i })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /siguiente/i }));
    expect(
      screen.getByRole("heading", { name: /completa lecciones y gana xp/i })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /atrás/i }));
    expect(
      screen.getByRole("heading", { name: /explora desde el menú/i })
    ).toBeInTheDocument();
  });

  it("al terminar el último paso guarda el flag en localStorage y cierra", async () => {
    const user = userEvent.setup();
    renderModal();
    await screen.findByRole("dialog");

    for (let i = 0; i < 3; i++) {
      await user.click(screen.getByRole("button", { name: /siguiente/i }));
    }
    expect(
      screen.getByRole("heading", { name: /tu opinión mejora atlas ia/i })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /empezar a aprender/i }));

    expect(localStorage.getItem(ONBOARD_KEY)).toBe("1");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("saltar la guía guarda el flag y cierra", async () => {
    const user = userEvent.setup();
    renderModal();
    await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /saltar introducción/i }));

    expect(localStorage.getItem(ONBOARD_KEY)).toBe("1");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("cerrar con la X guarda el flag y cierra", async () => {
    const user = userEvent.setup();
    renderModal();
    const dialog = await screen.findByRole("dialog");

    await user.click(screen.getByRole("button", { name: /cerrar introducción/i }));

    expect(localStorage.getItem(ONBOARD_KEY)).toBe("1");
    expect(dialog).not.toBeInTheDocument();
  });
});