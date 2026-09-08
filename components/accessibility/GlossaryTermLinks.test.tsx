import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n/provider";
import { GlossaryProvider } from "./GlossaryProvider";
import { GlossaryTermLinks } from "./GlossaryTermLinks";

const { mockPush } = vi.hoisted(() => ({ mockPush: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/es",
}));

function matchMediaMock(media: string) {
  return vi.fn().mockReturnValue({
    matches: media === "(min-width: 640px)",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
}

function renderLinks(children: ReactNode) {
  return render(
    <I18nProvider locale="es">
      <GlossaryProvider>
        <div data-read-aloud>{children}</div>
        <GlossaryTermLinks />
      </GlossaryProvider>
    </I18nProvider>
  );
}

describe("GlossaryTermLinks", () => {
  beforeEach(() => {
    mockPush.mockClear();
    window.matchMedia = matchMediaMock("(min-width: 640px)");
  });

  it("convierte la primera aparición de un término en un enlace de glosario", async () => {
    renderLinks(<p>Un token es la unidad mínima de texto.</p>);

    const link = await screen.findByRole("button", { name: "token" });

    expect(link).toHaveAttribute("data-glossary-term", "token");
    expect(link).toHaveAttribute("aria-haspopup", "dialog");
    expect(link).toHaveAttribute("tabindex", "0");
    expect(link).toHaveAttribute("aria-expanded", "false");
  });

  it("no duplica el mismo término dentro del mismo bloque", async () => {
    renderLinks(<p>token y token otra vez</p>);

    const links = await screen.findAllByRole("button", { name: /token/i });

    expect(links).toHaveLength(1);
  });

  it("abre el popover con la definición al hacer clic en el término", async () => {
    const user = userEvent.setup();
    renderLinks(<p>Un token es la unidad mínima de texto.</p>);

    const link = await screen.findByRole("button", { name: "token" });
    await user.click(link);

    expect(
      await screen.findByRole("dialog", { name: "Token" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/unidad básica de texto que un modelo de IA procesa/i)
    ).toBeInTheDocument();
    expect(link).toHaveAttribute("aria-expanded", "true");
  });

  it("cierra el popover al pulsar el botón Cerrar", async () => {
    const user = userEvent.setup();
    renderLinks(<p>Un token es la unidad mínima de texto.</p>);

    const link = await screen.findByRole("button", { name: "token" });
    await user.click(link);
    expect(await screen.findByRole("dialog", { name: "Token" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cerrar" }));

    expect(
      screen.queryByRole("dialog", { name: "Token" })
    ).not.toBeInTheDocument();
  });

  it("abre con la tecla Enter y navega a la definición completa", async () => {
    const user = userEvent.setup();
    renderLinks(<p>Un token es la unidad mínima de texto.</p>);

    const link = await screen.findByRole("button", { name: "token" });
    link.focus();
    await user.keyboard("{Enter}");
    expect(
      await screen.findByRole("dialog", { name: "Token" })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Ver definición completa" })
    );

    expect(mockPush).toHaveBeenCalledWith("/es/glosario?termino=token");
  });

  it("re-enlaza el contenido que llega de forma dinámica tras el montaje", async () => {
    const { rerender } = renderLinks(null);

    rerender(
      <I18nProvider locale="es">
        <GlossaryProvider>
          <div data-read-aloud>
            <p>Un token es la unidad mínima de texto.</p>
          </div>
          <GlossaryTermLinks />
        </GlossaryProvider>
      </I18nProvider>
    );

    expect(
      await screen.findByRole("button", { name: "token" })
    ).toBeInTheDocument();
  });

  it("no enlaza términos dentro de bloques de código", async () => {
    renderLinks(
      <p>
        En <code>token</code> no se debería enlazar.
      </p>
    );

    const code = await screen.findByText("token");

    expect(code.tagName).toBe("CODE");
    expect(
      screen.queryByRole("button", { name: "token" })
    ).not.toBeInTheDocument();
  });
});