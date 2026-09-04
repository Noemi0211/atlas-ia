"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useProgress } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";

interface BlockCompleteCTAProps {
  esUltimaLeccion: boolean;
  lastLessonId: string;
  siguienteBloque: {
    slug: string;
    numero: number;
    primeraLeccionSlug: string;
  } | null;
}

export function BlockCompleteCTA({
  esUltimaLeccion,
  lastLessonId,
  siguienteBloque,
}: BlockCompleteCTAProps) {
  const { t, localize } = useI18n();
  const { completedLessons } = useProgress();

  if (!esUltimaLeccion) return null;
  if (!completedLessons.includes(lastLessonId)) return null;

  return (
    <section className="mt-10 rounded-2xl border border-border bg-bg-secondary/50 px-6 py-10 text-center">
      <h2 className="text-xl font-bold text-fg mb-2">
        {siguienteBloque
          ? t.leccion.bloqueCompletado
          : t.leccion.cursoCompletado}
      </h2>
      <p className="text-fg-secondary text-sm mb-6 max-w-lg mx-auto">
        {siguienteBloque
          ? t.leccion.bloqueCompletadoDesc
          : t.leccion.cursoCompletadoDesc}
      </p>
      {siguienteBloque ? (
        <Link
          href={localize(`/bloques/${siguienteBloque.slug}/${siguienteBloque.primeraLeccionSlug}`)}
          className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white dark:text-slate-900 font-medium hover:bg-primary-hover transition-colors shadow-sm"
        >
          {t.leccion.continuarBloque.replace(
            "{numero}",
            String(siguienteBloque.numero)
          )}
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : (
        <Link
          href={localize("/bloques")}
          className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white dark:text-slate-900 font-medium hover:bg-primary-hover transition-colors shadow-sm"
        >
          {t.leccion.verBloques}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </section>
  );
}
