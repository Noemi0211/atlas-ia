"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";
import { LeccionMeta } from "@/lib/types";
import { useI18n } from "@/lib/i18n/provider";

interface LessonSidebarProps {
  bloqueSlug: string;
  bloqueTitle: string;
  lecciones: LeccionMeta[];
}

export function LessonSidebar({ bloqueSlug, bloqueTitle, lecciones }: LessonSidebarProps) {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <nav
      className="hidden xl:block w-56 shrink-0"
      aria-label={t.leccion.leccionesBloque}
    >
      <Link
        href={`/bloques/${bloqueSlug}`}
        className="text-sm font-semibold text-fg hover:text-primary transition-colors mb-4 block"
      >
        &larr; {bloqueTitle}
      </Link>

      <ul className="space-y-0.5 mt-3">
        {lecciones.map((leccion, index) => {
          const href = `/bloques/${bloqueSlug}/${leccion.slug}`;
          const isActive = pathname === href;

          return (
            <li key={leccion.slug}>
              <Link
                href={href}
                className={cn(
                  "flex items-start gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-primary-light text-primary font-medium"
                    : "text-fg-secondary hover:text-fg hover:bg-bg-secondary"
                )}
              >
                <span className="shrink-0 mt-0.5">
                  {false ? (
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  ) : (
                    <Circle className="w-4 h-4 text-fg-muted/40" />
                  )}
                </span>
                <span className="text-[13px] leading-snug">
                  <span className="text-fg-muted mr-1.5">{index + 1}.</span>
                  {leccion.titulo}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
