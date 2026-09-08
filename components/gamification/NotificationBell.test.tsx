import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@/lib/i18n/provider";
import { NotificationBell } from "./NotificationBell";
import { useProgress } from "@/stores/progress";

vi.mock("next/navigation", () => ({
  usePathname: () => "/es",
}));

function renderBell() {
  return render(
    <I18nProvider locale="es">
      <NotificationBell />
    </I18nProvider>
  );
}

function seedNotifications(count: number) {
  const { addNotification } = useProgress.getState();
  for (let i = 0; i < count; i++) {
    addNotification({
      type: "badge",
      title: "¡Nueva insignia!",
      message: `Has desbloqueado: Insignia ${i + 1}`,
    });
  }
}

describe("NotificationBell", () => {
  beforeEach(() => {
    useProgress.setState({ notifications: [] });
  });

  it("muestra el contador de no leídas y el panel al pulsar la campana", async () => {
    const user = userEvent.setup();
    seedNotifications(2);
    renderBell();

    const bell = screen.getByRole("button", { name: "Notificaciones" });
    expect(bell).toHaveTextContent("2");

    await user.click(bell);

    expect(screen.getByText("Notificaciones")).toBeInTheDocument();
    expect(
      screen.getByText("Has desbloqueado: Insignia 1")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Has desbloqueado: Insignia 2")
    ).toBeInTheDocument();
  });

  it("marca una notificación como leída", async () => {
    const user = userEvent.setup();
    seedNotifications(1);
    renderBell();

    await user.click(screen.getByRole("button", { name: "Notificaciones" }));
    await user.click(screen.getByTitle("Marcar como leída"));

    await waitFor(() => {
      expect(
        screen.queryByTitle("Marcar como leída")
      ).not.toBeInTheDocument();
    });
    expect(useProgress.getState().getUnreadNotificationsCount()).toBe(0);
  });

  it("marca todas como leídas con el botón del panel", async () => {
    const user = userEvent.setup();
    seedNotifications(2);
    renderBell();

    await user.click(screen.getByRole("button", { name: "Notificaciones" }));
    await user.click(screen.getByText("Marcar todas como leídas"));

    await waitFor(() => {
      expect(useProgress.getState().getUnreadNotificationsCount()).toBe(0);
    });
    expect(
      screen.queryByTitle("Marcar como leída")
    ).not.toBeInTheDocument();
  });

  it("oculta el contador cuando no hay no leídas y muestra vacío", async () => {
    const user = userEvent.setup();
    renderBell();

    const bell = screen.getByRole("button", { name: "Notificaciones" });
    expect(bell).not.toHaveTextContent(
      /^\d+$/
    );

    await user.click(bell);
    expect(screen.getByText("No hay notificaciones")).toBeInTheDocument();
  });
});