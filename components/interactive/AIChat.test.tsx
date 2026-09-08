import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { AIChat } from "./AIChat";

function createSSEResponse(chunks: string[]): Response {
  let i = 0;
  return {
    ok: true,
    body: {
      getReader: () => ({
        read: async () => {
          if (i < chunks.length) {
            return { done: false, value: new TextEncoder().encode(chunks[i++]) };
          }
          return { done: true, value: undefined };
        },
      }),
    },
  } as unknown as Response;
}

function renderChat() {
  return render(
    <I18nProvider locale="es">
      <AIChat />
    </I18nProvider>
  );
}

describe("AIChat", () => {
  beforeEach(() => {
    useProgress.setState({ badges: [], xp: 0 });
    vi.stubGlobal("fetch", vi.fn());
    HTMLElement.prototype.scrollTo = vi.fn();
  });

  it("muestra la pantalla de bienvenida, el modo demo y las sugerencias", () => {
    renderChat();
    expect(
      screen.getByText("¡Te damos la bienvenida al laboratorio!")
    ).toBeInTheDocument();
    expect(screen.getByText("Modo educativo (demo)")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "¿Qué es Machine Learning?" })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /¿Qué es/ }).length
    ).toBeGreaterThan(0);
  });

  it("enviar un primer mensaje desbloquea la insignia del chat", async () => {
    const user = userEvent.setup();
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      createSSEResponse(["data: [DONE]\n\n"])
    );
    renderChat();

    await user.type(screen.getByPlaceholderText("Pregunta sobre IA..."), "hola");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("chat-ia");
    });
    expect(
      screen.getByText("hola").closest("p")
    ).toBeInTheDocument();
  });

  it("renderiza el streaming de tokens como Markdown", async () => {
    const user = userEvent.setup();
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      createSSEResponse([
        'data: {"token":"Hola **mundo**"}\n\n',
        "data: [DONE]\n\n",
      ])
    );
    renderChat();

    await user.type(screen.getByPlaceholderText("Pregunta sobre IA..."), "dime algo");
    await user.keyboard("{Enter}");

    expect(await screen.findByText("mundo")).toBeInTheDocument();
    const strong = screen.getByText("mundo");
    expect(strong.tagName).toBe("STRONG");
    expect(await screen.findByText(/Hola/)).toBeInTheDocument();
  });

  it("evita enviar mensajes vacíos", async () => {
    const user = userEvent.setup();
    const fetchMock = fetch as ReturnType<typeof vi.fn>;
    renderChat();

    await user.type(screen.getByPlaceholderText("Pregunta sobre IA..."), "   ");
    await user.keyboard("{Enter}");

    expect(fetchMock).not.toHaveBeenCalled();
    expect(useProgress.getState().badges).not.toContain("chat-ia");
  });

  it("muestra un error de conexión si el fetch falla", async () => {
    const user = userEvent.setup();
    (fetch as ReturnType<typeof vi.fn>).mockRejectedValue("fallo de red");
    renderChat();

    await user.type(screen.getByPlaceholderText("Pregunta sobre IA..."), "hola");
    await user.keyboard("{Enter}");

    expect(await screen.findByText("Error de conexión")).toBeInTheDocument();
    expect(useProgress.getState().badges).toContain("chat-ia");
  });
});