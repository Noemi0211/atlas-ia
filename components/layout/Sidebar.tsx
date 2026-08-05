"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";
import { getBLOQUES } from "@/lib/i18n/data";
import {
  Home,
  BookOpen,
  BookMarked,
  Calendar,
  ChevronDown,
  ChevronRight,
  Compass,
  Brain,
  Globe,
  MessageSquare,
  GraduationCap,
  Image,
  Code,
  Bot,
  Shield,
  FlaskConical,
  Sparkles,
  User,
} from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  BookOpen,
  BookMarked,
  Calendar,
  User,
  Compass,
  Brain,
  Globe,
  MessageSquare,
  GraduationCap,
  Image,
  Code,
  Bot,
  Shield,
  FlaskConical,
  Sparkles,
};

interface SidebarProps {
  isOpen?: boolean;
  collapsed?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, collapsed = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedBloque, setExpandedBloque] = useState<string | null>(null);
  const { getLessonProgress, completedLessons } = useProgress();
  const { data: session } = useSession();
  const { t } = useI18n();
  const bloques = useMemo(() => getBLOQUES(t), [t]);

  const navItems = [
    { href: "/", label: t.nav.inicio, icon: "Home" },
    { href: "/bloques", label: t.nav.todosLosBloques, icon: "BookOpen" },
    { href: "/cronologia", label: t.nav.cronologia, icon: "Calendar" },
    { href: "/glosario", label: t.nav.glosario, icon: "BookMarked" },
    { href: "/laboratorio", label: t.nav.laboratorio, icon: "FlaskConical" },
    { href: "/perfil", label: t.nav.perfil, icon: "User" },
    ...(session?.user?.role === "teacher"
      ? [{ href: "/docencia", label: t.nav.docencia, icon: "GraduationCap" }]
      : []),
  ];

  const totalCompleted = completedLessons.length;
  const totalLessons = bloques.reduce((acc, b) => acc + b.lecciones, 0);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-full bg-bg border-r border-border",
        "flex flex-col transition-all duration-300 ease-in-out overflow-hidden",
        "lg:translate-x-0",
        collapsed ? "w-[60px]" : "w-[280px]",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className={cn(
        "flex items-center h-16 border-b border-border shrink-0",
        collapsed ? "justify-center px-0" : "gap-3 px-5"
      )}>
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <h1 className="font-bold text-fg text-base leading-tight truncate">Atlas IA</h1>
            <p className="text-2xs text-fg-muted truncate">{t.sidebar.subtitle}</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center rounded-lg text-sm font-medium transition-colors",
                    collapsed
                      ? "justify-center w-9 h-9 mx-auto -translate-x-1"
                      : "gap-3 px-3 py-2",
                    isActive
                      ? "bg-primary-light text-primary"
                      : "text-fg-secondary hover:text-fg hover:bg-bg-secondary"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  {!collapsed && item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {!collapsed && (
          <>
            <div className="mt-6 mb-2 px-3">
              <p className="text-2xs font-semibold uppercase tracking-wider text-fg-muted">
                {t.sidebar.sectionBloques}
              </p>
            </div>

            <ul className="space-y-0.5">
              {bloques.map((bloque) => {
                const Icon = iconMap[bloque.icono] || Compass;
                const isExpanded = expandedBloque === bloque.slug;
                const isActive = pathname.includes(`/bloques/${bloque.slug}`);
                const progress = getLessonProgress(bloque.slug, bloque.lecciones);

                return (
                  <li key={bloque.slug}>
                    <button
                      onClick={() =>
                        setExpandedBloque(isExpanded ? null : bloque.slug)
                      }
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors",
                        isActive
                          ? "text-fg font-medium"
                          : "text-fg-secondary hover:text-fg hover:bg-bg-secondary"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left truncate text-[13px]">
                        <span className="text-fg-muted mr-1.5">{bloque.numero}</span>
                        {bloque.titulo}
                      </span>
                      {progress > 0 && (
                        <span className="text-2xs text-accent font-medium">{progress}%</span>
                      )}
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 shrink-0 text-fg-muted" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-fg-muted" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="ml-6 mt-1 mb-2">
                        <ProgressBar
                          value={progress}
                          size="sm"
                          color="accent"
                          className="mb-2"
                        />
                        <Link
                          href={`/bloques/${bloque.slug}`}
                          onClick={onClose}
                          className="block text-xs text-primary hover:text-primary-hover py-1 transition-colors"
                        >
                          {t.sidebar.viewFullBlock}
                        </Link>                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="rounded-lg bg-bg-secondary p-3">
            <p className="text-xs font-medium text-fg mb-1">{t.sidebar.totalProgress}</p>
            <ProgressBar
              value={totalCompleted}
              max={totalLessons}
              showLabel
              size="sm"
              color="accent"
            />
            <p className="text-2xs text-fg-muted mt-1">
              {totalCompleted} {t.sidebar.of} {totalLessons} {t.sidebar.lessons}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
