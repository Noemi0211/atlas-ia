import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LeccionMeta } from "@/lib/types";

interface LessonNavProps {
  bloqueSlug: string;
  anterior: LeccionMeta | null;
  siguiente: LeccionMeta | null;
}

export function LessonNav({ bloqueSlug, anterior, siguiente }: LessonNavProps) {
  return (
    <nav className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
      {anterior ? (
        <Link
          href={`/bloques/${bloqueSlug}/${anterior.slug}`}
          className={cn(
            "flex items-center gap-3 p-4 rounded-xl border border-border",
            "hover:border-primary hover:bg-primary-light transition-all group flex-1"
          )}
        >
          <ArrowLeft className="w-4 h-4 text-fg-muted group-hover:text-primary transition-colors shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-fg-muted mb-0.5">Anterior</p>
            <p className="text-sm font-medium text-fg truncate group-hover:text-primary transition-colors">
              {anterior.titulo}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {siguiente ? (
        <Link
          href={`/bloques/${bloqueSlug}/${siguiente.slug}`}
          className={cn(
            "flex items-center gap-3 p-4 rounded-xl border border-border",
            "hover:border-primary hover:bg-primary-light transition-all group flex-1 text-right"
          )}
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs text-fg-muted mb-0.5">Siguiente</p>
            <p className="text-sm font-medium text-fg truncate group-hover:text-primary transition-colors">
              {siguiente.titulo}
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-fg-muted group-hover:text-primary transition-colors shrink-0" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
