"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, X, CheckCheck, Trophy, Flame, Zap, Sparkles } from "lucide-react";
import { useProgress, Notification } from "@/stores/progress";

const iconMap = {
  badge: Trophy,
  challenge: Zap,
  streak: Flame,
  level: Sparkles,
};

const colorMap = {
  badge: "text-warning",
  challenge: "text-accent",
  streak: "text-error",
  level: "text-primary",
};

function NotificationItem({
  notification,
  onMarkRead,
}: {
  notification: Notification;
  onMarkRead: (id: string) => void;
}) {
  const Icon = iconMap[notification.type];

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 transition-colors ${
        notification.read ? "opacity-60" : "bg-primary/5"
      }`}
    >
      <div className={`p-1 rounded-full shrink-0 ${colorMap[notification.type]} bg-current/10`}>
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-fg">{notification.title}</p>
        <p className="text-2xs text-fg-muted mt-0.5">{notification.message}</p>
        <p className="text-2xs text-fg-muted mt-1">
          {new Date(notification.createdAt).toLocaleDateString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      {!notification.read && (
        <button
          onClick={() => onMarkRead(notification.id)}
          className="shrink-0 p-1 rounded hover:bg-bg-secondary text-fg-muted hover:text-fg transition-colors"
          title="Marcar como leída"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { notifications, markNotificationRead, markAllNotificationsRead, getUnreadNotificationsCount } = useProgress();
  const unreadCount = getUnreadNotificationsCount();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-bg-secondary text-fg-secondary hover:text-fg transition-colors"
        aria-label="Notificaciones"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-error text-white text-2xs font-bold flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-border bg-bg shadow-lg z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h3 className="text-sm font-semibold text-fg">Notificaciones</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllNotificationsRead}
                className="flex items-center gap-1 text-2xs text-primary hover:text-primary-hover transition-colors"
              >
                <CheckCheck className="w-3 h-3" />
                Marcar todas como leídas
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-sm text-fg-muted text-center py-8">
                No hay notificaciones
              </p>
            ) : (
              notifications.map((n) => (
                <NotificationItem
                  key={n.id}
                  notification={n}
                  onMarkRead={markNotificationRead}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
