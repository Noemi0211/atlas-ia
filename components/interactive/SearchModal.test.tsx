import { describe, it, expect, vi, beforeEach } from "vitest";
import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { SearchModal } from "./SearchModal";

const { mockPush } = vi.hoisted(() => ({ mockPush: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/es",
}));
vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

const fetchMock = vi.fn();

function renderModal(props: { isOpen: boolean; onClose: () => void }) {
  return render(
    <I18nProvider locale="es">
      <SearchModal isOpen={props.isOpen} onClose={props.onClose} />
    </I18nProvider>
  );
}

describe("SearchModal", () => {
  beforeEach(() => {
    mockPush.mockClear();
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  it("no renderiza nada si está cerrado", () => {
    const { container } = renderModal({ isOpen: false, onClose: vi.fn() });
    expect(container).toBeEmptyDOMElement();
  });

  it("muestra el campo de búsqueda y el texto de mínimo de caracteres", () => {
    renderModal({ isOpen: true, onClose: vi.fn() });
    expect(
      screen.getByPlaceholderText("Buscar en Atlas IA...")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Escribe al menos 2 caracteres para buscar")
    ).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("busca con 2+ caracteres y navega al seleccionar un resultado", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    fetchMock.mockResolvedValue({
      json: async () => ({
        results: [
          {
            titulo: "Qué es un token",
            excerpt: "los tokens son la unidad de procesamiento",
            href: "/es/bloques/fundamentos/07-tokens-contexto",
            bloque: "Fundamentos de IA",
          },
        ],
      }),
    });
    renderModal({ isOpen: true, onClose });

    await user.type(
      screen.getByPlaceholderText("Buscar en Atlas IA..."),
      "token"
    );

    const result = await screen.findByText("Qué es un token");
    await user.click(result);

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/search?q=token",
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
    expect(mockPush).toHaveBeenCalledWith(
      "/es/bloques/fundamentos/07-tokens-contexto"
    );
    expect(onClose).toHaveBeenCalled();
  });

  it("muestra el estado sin resultados", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue({ json: async () => ({ results: [] }) });
    renderModal({ isOpen: true, onClose: vi.fn() });

    await user.type(
      screen.getByPlaceholderText("Buscar en Atlas IA..."),
      "zzz"
    );

    expect(
      await screen.findByText("No se encontraron resultados para “zzz”")
    ).toBeInTheDocument();
  });

  it("cierra con Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderModal({ isOpen: true, onClose });

    const input = screen.getByPlaceholderText("Buscar en Atlas IA...");
    await user.click(input);
    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalled();
  });

  it("limpiar la consulta restablece el estado y no vuelve a buscar", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue({ json: async () => ({ results: [] }) });
    renderModal({ isOpen: true, onClose: vi.fn() });

    const input = screen.getByPlaceholderText("Buscar en Atlas IA...");
    await user.type(input, "token");
    await screen.findByText("No se encontraron resultados para “token”");

    await user.click(screen.getByRole("button", { name: "" }));

    expect(screen.getByText("Escribe al menos 2 caracteres para buscar")).toBeInTheDocument();
  });
});