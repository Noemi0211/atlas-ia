import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { AgentFlow } from "./AgentFlow";

function renderFlow() {
  return render(
    <I18nProvider locale="es">
      <AgentFlow />
    </I18nProvider>
  );
}

describe("AgentFlow", () => {
  beforeEach(() => {
    useProgress.setState({ badges: [], xp: 0 });
  });

  it("muestra la plantilla de bloques y el pipeline inicial", () => {
    renderFlow();

    expect(
      screen.getByText("Bloques")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Pipeline de agente")
    ).toBeInTheDocument();
    expect(screen.getByText("3 nodos")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Entrada" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "LLM" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "RAG" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Herramienta" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Salida" })).toBeInTheDocument();

    expect(screen.getByText("Texto del usuario")).toBeInTheDocument();
    expect(screen.getByText("gpt-4o-mini")).toBeInTheDocument();
    expect(screen.getByText("Respuesta formateada")).toBeInTheDocument();
    expect(
      screen.getByText("Pipeline básico: el flujo de datos sigue el orden de los nodos")
    ).toBeInTheDocument();
  });

  it("añade un nodo RAG y detecta el pipeline RAG", async () => {
    const user = userEvent.setup();
    renderFlow();

    await user.click(screen.getByRole("button", { name: "RAG" }));

    expect(screen.getByText("4 nodos")).toBeInTheDocument();
    expect(screen.getByText("top_k: 5")).toBeInTheDocument();
    expect(
      screen.getByText("Pipeline RAG detectado: los datos recuperados se pasarán al contexto del LLM")
    ).toBeInTheDocument();
  });

  it("eliminar un nodo desbloquea la insignia de arquitecto de flujos y suma XP", async () => {
    const user = userEvent.setup();
    renderFlow();

    await user.click(screen.getAllByRole("button", { name: "Eliminar nodo" })[0]);

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("arquitecto-flujos");
    });
    expect(useProgress.getState().xp).toBe(50);
  });

  it("reordenar nodos desbloquea la insignia de arquitecto de flujos", async () => {
    const user = userEvent.setup();
    renderFlow();

    await user.click(
      screen.getAllByRole("button", { name: "Mover nodo arriba" })[2]
    );

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("arquitecto-flujos");
    });
    expect(useProgress.getState().xp).toBe(50);
  });

  it("muestra el estado vacío al eliminar todos los nodos", async () => {
    const user = userEvent.setup();
    renderFlow();

    for (let i = 0; i < 3; i++) {
      await user.click(
        screen.getAllByRole("button", { name: "Eliminar nodo" })[0]
      );
    }

    expect(
      screen.getByText("Arrastra bloques para crear tu flujo")
    ).toBeInTheDocument();
  });

  it("permite limpiar el pipeline y volver al inicial", async () => {
    const user = userEvent.setup();
    renderFlow();

    await user.click(screen.getByRole("button", { name: "RAG" }));
    expect(screen.getByText("top_k: 5")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Limpiar" }));

    expect(screen.queryByText("top_k: 5")).not.toBeInTheDocument();
    expect(screen.getByText("3 nodos")).toBeInTheDocument();
  });

  it("permite editar la configuración de un nodo", async () => {
    const user = userEvent.setup();
    renderFlow();

    await user.click(screen.getByText("gpt-4o-mini"));
    const editInput = screen.getByDisplayValue("gpt-4o-mini");
    await user.clear(editInput);
    await user.type(editInput, "claude-sonnet");
    await user.tab();

    expect(screen.getByText("claude-sonnet")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("claude-sonnet")).not.toBeInTheDocument();
  });
});