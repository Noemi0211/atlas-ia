import { describe, it, expect, vi, beforeEach } from "vitest";
import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { UserMenu } from "./UserMenu";
import { useProgress } from "@/stores/progress";

interface SessionUser {
  name?: string | null;
  email?: string | null;
  role?: string | null;
}

const { sessionUserMock, signOutMock } = vi.hoisted(() => ({
  sessionUserMock: vi.fn<() => SessionUser | null>(),
  signOutMock: vi.fn(),
}));

vi.mock("next-auth/react", () => ({
  useSession: () => ({ data: { user: sessionUserMock() }, status: "authenticated" }),
  signOut: signOutMock,
}));
vi.mock("next/navigation", () => ({
  usePathname: () => "/es",
}));
vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

function renderMenu() {
  return render(
    <I18nProvider locale="es">
      <UserMenu />
    </I18nProvider>
  );
}

describe("UserMenu", () => {
  beforeEach(() => {
    sessionUserMock.mockReset();
    signOutMock.mockClear();
    useProgress.setState({ xp: 250 });
  });

  it("no renderiza nada sin sesión", () => {
    sessionUserMock.mockReturnValue(null);
    const { container } = renderMenu();
    expect(container).toBeEmptyDOMElement();
  });

  it("muestra el menú con perfil, correo y XP", async () => {
    const user = userEvent.setup();
    sessionUserMock.mockReturnValue({
      name: "Laura",
      email: "laura@correo.com",
      role: "student",
    });
    renderMenu();

    expect(screen.getByText("L")).toBeInTheDocument();
    await user.click(screen.getByRole("button"));

    expect(screen.getAllByText("Laura").length).toBeGreaterThan(0);
    expect(screen.getByText("laura@correo.com")).toBeInTheDocument();
    expect(screen.getByText("250 XP")).toBeInTheDocument();

    const profile = screen.getByRole("link", { name: "Mi perfil" });
    expect(profile).toHaveAttribute("href", "/es/perfil");
  });

  it("muestra el enlace de docencia solo para docentes", async () => {
    const user = userEvent.setup();
    sessionUserMock.mockReturnValue({
      name: "Noemí",
      email: "profesor@correo.com",
      role: "teacher",
    });
    renderMenu();

    await user.click(screen.getByRole("button"));

    expect(
      screen.getByRole("link", { name: "Docencia" })
    ).toHaveAttribute("href", "/es/docencia");
  });

  it("no muestra docencia para estudiantes", async () => {
    const user = userEvent.setup();
    sessionUserMock.mockReturnValue({
      name: "Marc",
      email: "marc@correo.com",
      role: "student",
    });
    renderMenu();

    await user.click(screen.getByRole("button"));

    expect(
      screen.queryByRole("link", { name: "Docencia" })
    ).not.toBeInTheDocument();
  });

  it("cierra sesión navegando al inicio localizado", async () => {
    const user = userEvent.setup();
    sessionUserMock.mockReturnValue({
      name: "Sofía",
      email: "sofia@correo.com",
      role: "student",
    });
    renderMenu();

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button", { name: "Cerrar sesión" }));

    expect(signOutMock).toHaveBeenCalledWith({ callbackUrl: "/es" });
  });
});