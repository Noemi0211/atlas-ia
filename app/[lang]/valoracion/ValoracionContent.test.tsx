import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { ValoracionContent } from "./ValoracionContent";

const fetchMock = vi.fn();

function jsonResponse(data: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
  };
}

function setupFetch() {
  fetchMock.mockImplementation(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = init?.method ?? "GET";
      if (url === "/api/feedback") {
        if (method === "POST") {
          return jsonResponse({ own: { score: 4 }, ok: true });
        }
        return jsonResponse({ own: null, media: 4.5, total: 2 });
      }
      if (url === "/api/suggestions") {
        if (method === "POST") {
          return jsonResponse(
            { suggestion: { id: "s1", status: "pending" } },
            201
          );
        }
        return jsonResponse({
          suggestions: [
            {
              id: "s1",
              title: "Más vídeos",
              description: "Añadir vídeos al bloque de fundamentos",
              category: "contenido",
              status: "pending",
              createdAt: "2026-09-04T00:00:00.000Z",
            },
          ],
        });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    }
  );
}

function renderValoracion() {
  return render(
    <I18nProvider locale="es">
      <ValoracionContent />
    </I18nProvider>
  );
}

describe("ValoracionContent", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.stubGlobal("fetch", fetchMock);
    setupFetch();
    useProgress.setState({ badges: [], xp: 0, colaboradorBadge: false });
  });

  it("carga el resumen con la media y el total", async () => {
    renderValoracion();
    expect(
      await screen.findByText("Tu valoración")
    ).toBeInTheDocument();
    expect(screen.getByText("4.5/5")).toBeInTheDocument();
    expect(screen.getByText("Más vídeos")).toBeInTheDocument();
  });

  it("muestra error si se envía la valoración sin puntuación", async () => {
    const user = userEvent.setup();
    renderValoracion();
    await user.click(
      await screen.findByRole("button", { name: "Enviar valoración" })
    );
    expect(
      await screen.findByText(
        "Selecciona una puntuación entre 1 y 5 estrellas."
      )
    ).toBeInTheDocument();
  });

  it("envía la valoración y muestra confirmación", async () => {
    const user = userEvent.setup();
    renderValoracion();

    await user.click(
      await screen.findByRole("button", { name: "Puntuación de 4 sobre 5" })
    );
    await user.click(screen.getByRole("button", { name: "Enviar valoración" }));

    expect(
      await screen.findByText("Valoración enviada correctamente.")
    ).toBeInTheDocument();
    const postCalls = fetchMock.mock.calls.filter(
      (c) => c[0] === "/api/feedback" && c[1]?.method === "POST"
    );
    expect(postCalls.length).toBeGreaterThan(0);
    const body = JSON.parse(String(postCalls[0][1].body));
    expect(body.score).toBe(4);
  });

  it("desbloquea la insignia de colaboración al enviar la primera propuesta", async () => {
    const user = userEvent.setup();
    renderValoracion();

    await user.type(
      await screen.findByPlaceholderText("Resumen breve de tu propuesta"),
      "Modo oscuro extra"
    );
    await user.type(
      screen.getByPlaceholderText("Explica tu propuesta con detalle..."),
      "Un tema de alto contraste"
    );
    await user.click(screen.getByRole("button", { name: "Enviar propuesta" }));

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("colaborador");
    });
    expect(useProgress.getState().xp).toBe(50);
    const postCalls = fetchMock.mock.calls.filter(
      (c) => c[0] === "/api/suggestions" && c[1]?.method === "POST"
    );
    expect(postCalls.length).toBeGreaterThan(0);
    const body = JSON.parse(String(postCalls[0][1].body));
    expect(body.title).toBe("Modo oscuro extra");
  });

  it("muestra error si la propuesta no tiene descripción", async () => {
    const user = userEvent.setup();
    renderValoracion();

    await user.type(
      await screen.findByPlaceholderText("Resumen breve de tu propuesta"),
      "Sin descripción"
    );
    await user.click(screen.getByRole("button", { name: "Enviar propuesta" }));

    expect(
      await screen.findByText("Escribe una descripción para tu propuesta.")
    ).toBeInTheDocument();
  });

  it("muestra el estado de las propuestas enviadas", async () => {
    renderValoracion();
    expect(await screen.findByText("Pendiente")).toBeInTheDocument();
    expect(screen.getByText("Más vídeos")).toBeInTheDocument();
  });
});