import { describe, it, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { InstallPWA } from "./InstallPWA";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => "/es",
}));

function matchMediaMock(matches: boolean) {
  return vi.fn().mockReturnValue({
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
}

function beforeInstallPromptEvent(
  prompt: ReturnType<typeof vi.fn>
): Event {
  const event = new Event("beforeinstallprompt", { cancelable: true });
  return Object.assign(event, {
    prompt,
    userChoice: Promise.resolve({ outcome: "accepted", platform: "" }),
  });
}

function renderInstall(compact = false) {
  return render(
    <I18nProvider locale="es">
      <InstallPWA compact={compact} />
    </I18nProvider>
  );
}

describe("InstallPWA", () => {
  beforeEach(() => {
    window.matchMedia = matchMediaMock(false);
  });

  it("compact: sin evento pendiente abre la pista de instalación al pulsar", async () => {
    const user = userEvent.setup();
    renderInstall(true);

    const boton = screen.getByRole("button", { name: "Instalar" });
    expect(boton).toHaveAttribute("aria-expanded", "false");

    await user.click(boton);

    expect(boton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("dialog", { name: "Instala Atlas IA" })
    ).toBeInTheDocument();
  });

  it("compact: instala directamente cuando hay un evento pendiente y luego permite ver la pista", async () => {
    const user = userEvent.setup();
    const prompt = vi.fn().mockResolvedValue(undefined);
    renderInstall(true);

    fireEvent(window, beforeInstallPromptEvent(prompt));

    const boton = await screen.findByRole("button", { name: "Instalar" });
    await user.click(boton);

    expect(prompt).toHaveBeenCalledTimes(1);

    await user.click(boton);

    expect(
      await screen.findByRole("dialog", { name: "Instala Atlas IA" })
    ).toBeInTheDocument();
  });

  it("compact: se oculta cuando se instala la aplicación", async () => {
    renderInstall(true);

    fireEvent(window, new Event("appinstalled"));

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Instalar" })
      ).not.toBeInTheDocument()
    );
  });

  it("compact: se oculta en modo standalone", async () => {
    window.matchMedia = matchMediaMock(true);
    renderInstall(true);

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Instalar" })
      ).not.toBeInTheDocument()
    );
  });

  it("no compacto: no muestra el banner sin evento de instalación pendiente", () => {
    renderInstall(false);

    expect(
      screen.queryByRole("dialog", { name: "Instala Atlas IA" })
    ).not.toBeInTheDocument();
  });

  it("no compacto: aparece con beforeinstallprompt y 'Ahora no' lo cierra", async () => {
    const user = userEvent.setup();
    const prompt = vi.fn().mockResolvedValue(undefined);
    renderInstall(false);

    fireEvent(window, beforeInstallPromptEvent(prompt));

    expect(
      await screen.findByRole("dialog", { name: "Instala Atlas IA" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Ahora no" }));

    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "Instala Atlas IA" })
      ).not.toBeInTheDocument()
    );
  });

  it("no compacto: el botón Instalar del banner llama a prompt()", async () => {
    const user = userEvent.setup();
    const prompt = vi.fn().mockResolvedValue(undefined);
    renderInstall(false);

    fireEvent(window, beforeInstallPromptEvent(prompt));

    await user.click(
      await screen.findByRole("button", { name: "Instalar" })
    );

    expect(prompt).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(
        screen.queryByRole("dialog", { name: "Instala Atlas IA" })
      ).not.toBeInTheDocument()
    );
  });
});