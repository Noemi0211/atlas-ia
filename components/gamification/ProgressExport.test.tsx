import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nProvider } from "@/lib/i18n/provider";
import { ProgressExport } from "./ProgressExport";
import { useProgress } from "@/stores/progress";
import { createSnapshot, EXPORT_SCHEMA, type ProgressData } from "@/lib/progress-export";

function validData(): ProgressData {
  return {
    completedLessons: ["fundamentos/01-que-es-ia"],
    xp: 230,
    badges: ["first-lesson"],
    favorites: [],
    notes: {},
    currentStreak: 1,
    lastVisit: null,
    challenges: [],
    projects: [],
    notifications: [],
    comparedTools: 0,
    arbolCompletado: false,
    calculadoraUsada: false,
    quizBest: {},
    quizPerfect: [],
    colaboradorBadge: false,
  };
}

function importFile(content: string) {
  const file = new File([content], "progreso.json", { type: "application/json" });
  fireEvent.change(screen.getByLabelText("Importar progreso"), {
    target: { files: [file] },
  });
}

function renderExport() {
  return render(
    <I18nProvider locale="es">
      <ProgressExport />
    </I18nProvider>
  );
}

describe("ProgressExport", () => {
  beforeEach(() => {
    useProgress.setState({
      completedLessons: ["fundamentos/01-que-es-ia"],
      xp: 230,
      badges: ["first-lesson"],
      favorites: [],
      notes: {},
      currentStreak: 1,
      lastVisit: null,
      challenges: [],
      projects: [],
      notifications: [],
      comparedTools: 0,
      arbolCompletado: false,
      calculadoraUsada: false,
      quizBest: {},
      quizPerfect: [],
      colaboradorBadge: false,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("muestra el título y la descripción", () => {
    renderExport();
    expect(screen.getByText("Guardar y restaurar progreso")).toBeInTheDocument();
    expect(screen.getByText("Exportar progreso")).toBeInTheDocument();
    expect(screen.getByText("Importar progreso")).toBeInTheDocument();
  });

  it("exporta el progreso descargando un archivo JSON", () => {
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
    Object.defineProperty(URL, "createObjectURL", {
      value: vi.fn(() => "blob:mock"),
      configurable: true,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      value: vi.fn(),
      configurable: true,
    });

    renderExport();
    fireEvent.click(screen.getByText("Exportar progreso"));

    expect(URL.createObjectURL).toHaveBeenCalled();
    expect(click).toHaveBeenCalled();
    expect(screen.getByText("Progreso exportado correctamente.")).toBeInTheDocument();
  });

  it("importa un snapshot válido y reemplaza el estado", async () => {
    renderExport();

    const data = validData();
    data.xp = 999;
    data.completedLessons = ["novedades/01-estado-de-la-ia"];
    importFile(JSON.stringify(createSnapshot(data)));

    expect(
      await screen.findByText("Progreso importado correctamente.")
    ).toBeInTheDocument();
    expect(useProgress.getState().xp).toBe(999);
    expect(useProgress.getState().completedLessons).toEqual([
      "novedades/01-estado-de-la-ia",
    ]);
  });

  it("rechaza un archivo que no es JSON válido", async () => {
    renderExport();
    importFile("no-soy-json");

    expect(await screen.findByText("El archivo no es un JSON válido.")).toBeInTheDocument();
    expect(useProgress.getState().xp).toBe(230);
  });

  it("rechaza un archivo que no es un progreso de Atlas IA", async () => {
    renderExport();
    importFile(JSON.stringify({ foo: "bar" }));

    expect(
      await screen.findByText("El archivo no es un progreso de Atlas IA.")
    ).toBeInTheDocument();
  });

  it("rechaza un snapshot con datos internos inválidos", async () => {
    renderExport();
    const snap = createSnapshot(validData());
    importFile(
      JSON.stringify({
        ...snap,
        data: { ...snap.data, xp: "mucho" },
      })
    );

    expect(
      await screen.findByText("El archivo no tiene un formato de progreso válido.")
    ).toBeInTheDocument();
  });

  it("rechaza un snapshot de una versión futura", async () => {
    renderExport();
    const snap = createSnapshot(validData());
    importFile(
      JSON.stringify({
        ...snap,
        schema: EXPORT_SCHEMA,
        version: 999,
        data: validData(),
      })
    );

    expect(
      await screen.findByText(/versión más reciente/)
    ).toBeInTheDocument();
  });

  it("no toca el estado cuando el archivo es inválido", async () => {
    renderExport();
    importFile(JSON.stringify({ foo: "bar" }));

    await screen.findByText("El archivo no es un progreso de Atlas IA.");
    expect(useProgress.getState().xp).toBe(230);
  });
});