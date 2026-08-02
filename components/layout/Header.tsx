"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Search, Moon, Sun, Menu, X, LogIn, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useSession } from "next-auth/react";
import { useI18n } from "@/lib/i18n/provider";
import { SearchModal } from "@/components/interactive/SearchModal";
import { NotificationBell } from "@/components/gamification/NotificationBell";
import { UserMenu } from "@/components/auth/UserMenu";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  sidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
}

export function Header({ onMenuToggle, isMobileMenuOpen, sidebarCollapsed = false, onSidebarToggle }: HeaderProps) {
  const { resolved, toggleTheme } = useTheme();
  const { data: session } = useSession();
  const { t } = useI18n();
  const [searchOpen, setSearchOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
    if (e.key === "/" && !searchOpen) {
      const target = e.target as HTMLElement;
      if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
  }, [searchOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary text-fg-secondary transition-colors"
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={onSidebarToggle}
              className="hidden lg:flex p-2 rounded-lg hover:bg-bg-secondary text-fg-secondary hover:text-fg transition-colors"
              aria-label={sidebarCollapsed ? t.header.expandSidebar : t.header.collapseSidebar}
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>

            <div className="lg:hidden flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-bold text-sm text-fg">Atlas IA</span>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-8">
            <button
              onClick={() => setSearchOpen(true)}
              className={cn(
                "w-full flex items-center gap-3 h-9 px-3 rounded-lg text-sm",
                "bg-bg-secondary border border-border",
                "text-fg-muted hover:border-border-strong transition-all duration-200"
              )}
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">{t.header.searchPlaceholder}</span>
              <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-2xs text-fg-muted bg-bg border border-border">
                /
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <NotificationBell />

            <LanguageSelector />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-bg-secondary text-fg-secondary hover:text-fg transition-colors"
              aria-label={mounted ? (resolved === "dark" ? t.header.toLightMode : t.header.toDarkMode) : t.header.changeTheme}
            >
              {!mounted ? <div className="w-5 h-5" /> : resolved === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {session ? <UserMenu /> : (
              <Link
                href="/auth/login"
                className="flex items-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-white dark:text-slate-900 text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">{t.header.login}</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
