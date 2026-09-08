import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { SpeechReader } from "./SpeechReader";

vi.mock("next/navigation", () => ({
  usePathname: () => "/es",
}));

function createSpeechSynthesisMock() {
  const cancel = vi.fn();
  const speak = vi.fn();
  const getVoices = vi.fn(() => []);
  const listeners: Record<string, (() => void)[]> = {};

  const synth = {
    cancel,
    speak,
    getVoices,
    addEventListener: vi.fn((type: string, cb: () => void) => {
      listeners[type] = [...(listeners[type] ?? []), cb];
    }),
    removeEventListener: vi.fn((type: string, cb: () => void) => {
      listeners[type] = (listeners[type] ?? []).filter((fn) => fn !== cb);
    }),
  } as unknown as SpeechSynthesis;

  return { synth, listeners };
}

let harness: ReturnType<typeof createSpeechSynthesisMock>;

beforeEach(() => {
  harness = createSpeechSynthesisMock();
  Object.defineProperty(window, "speechSynthesis", {
    value: harness.synth,
    configurable: true,
  });
  (window as unknown as { SpeechSynthesisUtterance: unknown }).SpeechSynthesisUtterance =
    class {
      text: string;
      lang = "";
      rate = 1;
      volume = 1;
      pitch = 1;
      voice: SpeechSynthesisVoice | null = null;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor(text: string) {
        this.text = text;
      }
    };
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.clearAllTimers();
});

function renderReader(compact = true) {
  return render(
    <I18nProvider locale="es">
      <div data-read-aloud>Hola. Esto es una prueba.</div>
      <SpeechReader compact={compact} />
    </I18nProvider>
  );
}

async function awaitSupportedButton() {
  const button = screen.getByRole("button", { name: "Escuchar contenido" });
  await waitFor(() => expect(button).not.toBeDisabled());
  return button;
}

describe("SpeechReader", () => {
  it("renderiza los controles de lectura en modo compacto", async () => {
    renderReader(true);

    expect(
      screen.getByRole("button", { name: "Escuchar contenido" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Detener lectura" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Velocidad de lectura")
    ).toBeInTheDocument();

    await awaitSupportedButton();
  });

  it("inicia la lectura al pulsar Escuchar y lee el contenido accesible", async () => {
    const user = userEvent.setup();
    renderReader(true);
    const playButton = await awaitSupportedButton();

    await user.click(playButton);

    await waitFor(() => {
      expect(harness.synth.speak).toHaveBeenCalled();
    });
    const utterances = vi
      .mocked(harness.synth.speak)
      .mock.calls.map((args) => args[0] as { text: string });
    expect(utterances.some((u) => u.text.includes("Hola"))).toBe(true);
    expect(screen.getAllByText("Leyendo...").length).toBeGreaterThan(0);
  });

  it("detiene la lectura al pulsar Detener", async () => {
    const user = userEvent.setup();
    renderReader(true);
    const playButton = await awaitSupportedButton();

    await user.click(playButton);
    await waitFor(() => {
      expect(harness.synth.speak).toHaveBeenCalled();
    });

    await user.click(
      screen.getByRole("button", { name: "Detener lectura" })
    );

    expect(harness.synth.cancel).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.queryByText("Leyendo...")).not.toBeInTheDocument();
    });
  });

  it("muestra un aviso si no hay contenido que leer", async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider locale="es">
        <SpeechReader compact />
      </I18nProvider>
    );

    const playButton = screen.getByRole("button", { name: "Escuchar contenido" });
    await waitFor(() => expect(playButton).not.toBeDisabled());

    await user.click(playButton);

    expect(
      await screen.findByText("No hay contenido que leer en esta página")
    ).toBeInTheDocument();
  });

  it("completa la lectura y finaliza cuando todas las frases terminan", async () => {
    const user = userEvent.setup();
    renderReader(false);
    const playButton = screen.getByRole("button", { name: "Escuchar contenido" });
    await waitFor(() => expect(playButton).not.toBeDisabled());

    await user.click(playButton);

    await waitFor(() => {
      expect(harness.synth.speak).toHaveBeenCalled();
    });

    act(() => {
      const utterances = vi
        .mocked(harness.synth.speak)
        .mock.calls.map(
          (args) => args[0] as unknown as { onend?: () => void }
        );
      utterances.forEach((u) => u.onend?.());
    });

    await waitFor(() => {
      expect(screen.queryByText("Leyendo...")).not.toBeInTheDocument();
    });
  });
});