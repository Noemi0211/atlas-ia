"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { User, LogOut, ChevronDown, GraduationCap } from "lucide-react";
import { useProgress } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";

export function UserMenu() {
  const { t, localize } = useI18n();
  const { data: session } = useSession();
  const { xp } = useProgress();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session?.user) return null;

  const initials = session.user.name
    ? session.user.name.charAt(0).toUpperCase()
    : session.user.email?.charAt(0).toUpperCase() || "?";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-bg-secondary transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-xs">{initials}</span>
        </div>
        <span className="hidden sm:block text-sm text-fg font-medium max-w-[100px] truncate">
          {session.user.name || session.user.email}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-fg-muted" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-bg shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium text-fg truncate">
              {session.user.name || t.auth.userMenu.user}
            </p>
            <p className="text-2xs text-fg-muted truncate">{session.user.email}</p>
            <p className="text-2xs text-warning mt-1">{xp} XP</p>
          </div>

          <div className="py-1">
            <Link
              href={localize("/perfil")}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-fg-secondary hover:text-fg hover:bg-bg-secondary transition-colors"
            >
              <User className="w-4 h-4" />
              {t.auth.userMenu.profile}
            </Link>
            {session.user.role === "teacher" && (
              <Link
                href={localize("/docencia")}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-fg-secondary hover:text-fg hover:bg-bg-secondary transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                {t.nav.docencia}
              </Link>
            )}
          </div>

          <div className="border-t border-border py-1">
            <button
              onClick={() => signOut({ callbackUrl: localize("/") })}
              className="flex items-center gap-2 px-4 py-2 text-sm text-error hover:bg-error-light/50 w-full text-left transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {t.auth.userMenu.logout}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
