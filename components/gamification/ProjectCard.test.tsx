import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { ProjectList } from "./ProjectCard";

const cleanProjects = useProgress.getState().projects;

function renderProjects() {
  return render(
    <I18nProvider locale="es">
      <ProjectList />
    </I18nProvider>
  );
}

describe("ProjectList", () => {
  beforeEach(() => {
    useProgress.setState({ projects: cleanProjects, xp: 0, badges: [] });
  });

  it("muestra los proyectos prácticos y el progreso inicial", () => {
    renderProjects();

    expect(
      screen.getByRole("heading", { name: "Proyectos prácticos" })
    ).toBeInTheDocument();
    expect(screen.getByText("Chatbot simple con prompts")).toBeInTheDocument();
    expect(screen.getByText("Progreso")).toBeInTheDocument();
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("0/6")).toBeInTheDocument();
  });

  it("muestra el XP por dificultad en cada proyecto", () => {
    renderProjects();

    expect(screen.getAllByText("100 XP")).toHaveLength(2);
    expect(screen.getAllByText("200 XP")).toHaveLength(2);
    expect(screen.getAllByText("350 XP")).toHaveLength(2);
  });

  it("completar un proyecto suma XP y desbloquea la insignia", async () => {
    const user = userEvent.setup();
    renderProjects();

    await user.click(
      screen.getAllByRole("button", { name: "Marcar como completado" })[0]
    );

    await waitFor(() => {
      expect(useProgress.getState().badges).toContain("primer-proyecto");
    });
    expect(useProgress.getState().xp).toBe(100);

    expect(screen.getByText("1/6")).toBeInTheDocument();
    expect(screen.getByText("17%")).toBeInTheDocument();
  });

  it("un proyecto completado muestra el badge y deshabilita el botón", () => {
    useProgress.getState().completeProject("proyecto-1");
    renderProjects();

    const buttons = screen.getAllByRole("button", { name: "Completado" });
    expect(buttons.length).toBe(1);
    expect(buttons[0]).toBeDisabled();
    expect(
      screen.getByText("Completado")
    ).toBeInTheDocument();
  });
});