import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChatMarkdown } from "./ChatMarkdown";

describe("ChatMarkdown", () => {
  it("renderiza texto plano", () => {
    render(<ChatMarkdown>Hola mundo</ChatMarkdown>);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  });

  it("renderiza negritas con **texto**", () => {
    render(<ChatMarkdown>Texto con **negrita** aquí</ChatMarkdown>);
    const strong = screen.getByText("negrita");
    expect(strong.tagName).toBe("STRONG");
  });

  it("renderiza cursivas con *texto*", () => {
    render(<ChatMarkdown>Texto con *cursiva* aquí</ChatMarkdown>);
    const em = screen.getByText("cursiva");
    expect(em.tagName).toBe("EM");
  });

  it("renderiza código en línea con `código`", () => {
    render(<ChatMarkdown>Usa `npx` para ejecutar</ChatMarkdown>);
    const code = screen.getByText("npx");
    expect(code.tagName).toBe("CODE");
  });

  it("renderiza enlaces y los abre externos en pestaña nueva", () => {
    render(<ChatMarkdown>Visita [Atlas IA](https://atlas-ia.dev)</ChatMarkdown>);
    const link = screen.getByRole("link", { name: "Atlas IA" });
    expect(link).toHaveAttribute("href", "https://atlas-ia.dev");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("no usa target _blank en enlaces internos", () => {
    render(<ChatMarkdown>Ir a [bloques](/es/bloques)</ChatMarkdown>);
    expect(screen.getByRole("link", { name: "bloques" })).not.toHaveAttribute(
      "target"
    );
  });

  it("renderiza encabezados h1, h2 y h3", () => {
    render(
      <ChatMarkdown>{"# Título\n\n## Sección\n\n### Subsección"}</ChatMarkdown>
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "Título" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Sección" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Subsección" })
    ).toBeInTheDocument();
  });

  it("renderiza listas desordenadas y ordenadas", () => {
    render(
      <ChatMarkdown>
        {"- Uno\n- Dos\n\n1. Primero\n2. Segundo"}
      </ChatMarkdown>
    );
    expect(screen.getByText("Uno").closest("ul")).toBeInTheDocument();
    expect(screen.getByText("Primero").closest("ol")).toBeInTheDocument();
  });

  it("renderiza tablas con cabecera y filas", () => {
    render(<ChatMarkdown>{"| A | B |\n|---|---|\n| 1 | 2 |"}</ChatMarkdown>);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "A" })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "2" })).toBeInTheDocument();
  });

  it("renderiza bloques de código delimitados con ```", () => {
    render(<ChatMarkdown>{"```\nconst x = 1;\n```"}</ChatMarkdown>);
    const code = screen.getByText("const x = 1;");
    expect(code.tagName).toBe("CODE");
  });

  it("renderiza citas con > en blockquote", () => {
    render(<ChatMarkdown>{"> La inteligencia artificial"}</ChatMarkdown>);
    expect(
      screen.getByText("La inteligencia artificial").closest("blockquote")
    ).toBeInTheDocument();
  });

  it("renderiza separadores --- como hr", () => {
    const { container } = render(
      <ChatMarkdown>{"Antes\n\n---\n\nDespués"}</ChatMarkdown>
    );
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("trata una línea suelta con | como párrafo y no se cuelga", () => {
    render(<ChatMarkdown>{"| columna suelta |"}</ChatMarkdown>);
    expect(
      screen.getByText("| columna suelta |").closest("p")
    ).toBeInTheDocument();
  });

  it("no se cuelga con una celda suelta tras un párrafo", () => {
    render(<ChatMarkdown>{"Texto previo\n| celda suelta |"}</ChatMarkdown>);
    expect(screen.getByText("Texto previo | celda suelta |")).toBeInTheDocument();
  });
});