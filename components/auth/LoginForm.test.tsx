import { describe, it, expect, vi, beforeEach } from "vitest";
import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { LoginForm } from "./LoginForm";

const { mockPush, mockRefresh } = vi.hoisted(() => ({
  mockPush: vi.fn(),
  mockRefresh: vi.fn(),
}));
const { signInMock } = vi.hoisted(() => ({ signInMock: vi.fn() }));

vi.mock("next-auth/react", () => ({
  signIn: signInMock,
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush, refresh: mockRefresh }),
  usePathname: () => "/es",
}));
vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

function renderLogin() {
  return render(
    <I18nProvider locale="es">
      <LoginForm />
    </I18nProvider>
  );
}

describe("LoginForm", () => {
  beforeEach(() => {
    mockPush.mockClear();
    mockRefresh.mockClear();
    signInMock.mockClear();
  });

  it("renderiza el formulario con sus campos", () => {
    renderLogin();
    expect(
      screen.getByRole("heading", { name: "Iniciar sesión" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
  });

  it("envía credenciales y navega al inicio en éxito", async () => {
    const user = userEvent.setup();
    signInMock.mockResolvedValue({ ok: true });
    renderLogin();

    await user.type(screen.getByLabelText("Correo electrónico"), "a@b.com");
    await user.type(screen.getByLabelText("Contraseña"), "123456");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(signInMock).toHaveBeenCalledWith("credentials", {
      email: "a@b.com",
      password: "123456",
      redirect: false,
    });
    expect(mockPush).toHaveBeenCalledWith("/es");
  });

  it("muestra error de credenciales si el inicio de sesión falla", async () => {
    const user = userEvent.setup();
    signInMock.mockResolvedValue({ error: "CredentialsSignin" });
    renderLogin();

    await user.type(screen.getByLabelText("Correo electrónico"), "a@b.com");
    await user.type(screen.getByLabelText("Contraseña"), "123456");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(
      await screen.findByText("Correo electrónico o contraseña incorrectos")
    ).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });
});
