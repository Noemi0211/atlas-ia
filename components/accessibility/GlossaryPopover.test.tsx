import { describe, it, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getGlosarioTerminos, type GlosarioTerminoLocalizado } from "@/lib/i18n/data";
import { GlossaryPopover } from "./GlossaryPopover";

const { mockPush } = vi.hoisted(() => ({ mockPush: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/es",
}));

function matchMediaMock(matches: boolean) {
  return vi.fn().mockReturnValue({
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
}

const TERM: GlosarioTerminoLocalizado = {
  slug: "agente-de-ia",
  termino: "Agente de IA",
  definicion:
    "Un sistema de IA capaz de tomar decisiones y ejecutar acciones de forma autónoma para lograr un objetivo específico.",
  categoria: "Conceptos",
  categoriaKey: "conceptos",
};

function renderPopover(
  term: GlosarioTerminoLocalizado,
  trigger: HTMLElement | null,
  onClose: () => void
) {
  return render(
    <I18nProvider locale="es">
      <GlossaryPopover term={term} trigger={trigger} onClose={onClose} />
    </I18nProvider>
  );
}

describe("GlossaryPopover", () => {
  beforeEach(() => {
    mockPush.mockClear();
    window.matchMedia = matchMediaMock(false);
  });

  it("muestra el nombre, la categoría y la definición del término", () => {
    window.matchMedia = matchMediaMock(false);
    renderPopover(TERM, null, vi.fn());

    expect(
      screen.getByRole("dialog", { name: "Agente de IA" })
    ).toBeInTheDocument();
    expect(screen.getByText("Categoría: Conceptos")).toBeInTheDocument();
    expect(screen.getByText(/sistema de IA capaz de tomar decisiones/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cerrar" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ver definición completa" })
    ).toBeInTheDocument();
  });

  it("cierra al hacer clic en el botón Cerrar", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderPopover(TERM, null, onClose);

    await user.click(screen.getByRole("button", { name: "Cerrar" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("cierra al pulsar Escape", () => {
    const onClose = vi.fn();
    renderPopover(TERM, null, onClose);

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("cierra al hacer clic fuera del popover", () => {
    const onClose = vi.fn();
    renderPopover(TERM, null, onClose);

    fireEvent.pointerDown(document.body);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("navega a la definición completa y emite el evento de deep-link", async () => {
    const user = userEvent.setup();
    const dispatchSpy = vi.spyOn(window, "dispatchEvent");
    const onClose = vi.fn();
    renderPopover(TERM, null, onClose);

    await user.click(
      screen.getByRole("button", { name: "Ver definición completa" })
    );

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("/es/glosario?termino=agente-de-ia");

    const dispatched = dispatchSpy.mock.calls.map((c) => c[0]) as Event[];
    expect(
      dispatched.some(
        (e) =>
          e.type === "atlas:glossary-deeplink" &&
          (e as CustomEvent).detail === "agente-de-ia"
      )
    ).toBe(true);
  });

  it("devuelve el foco al elemento disparador al desmontar", () => {
    const trigger = document.createElement("button");
    trigger.textContent = "Agente de IA";
    document.body.appendChild(trigger);

    const { unmount } = renderPopover(TERM, trigger, vi.fn());
    unmount();

    expect(document.activeElement).toBe(trigger);
    trigger.remove();
  });

  it("usa textos localizados reales del diccionario", () => {
    const t = getDictionary("es");
    const terms = getGlosarioTerminos(t);
    const first = terms[0];

    renderPopover(first, null, () => undefined);

    expect(screen.getByRole("dialog", { name: first.termino })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cerrar" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ver definición completa" })
    ).toBeInTheDocument();
  });
});