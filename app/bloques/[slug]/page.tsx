import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLeccionesBloque } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Circle, CheckCircle2 } from "lucide-react";
import {
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
} from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getBloqueMeta } from "@/lib/i18n/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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

const colorMap: Record<string, string> = {
  primary: "text-primary bg-primary-light",
  accent: "text-accent bg-accent-light",
  purple: "text-purple bg-purple-light",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { BLOQUES } = await import("@/lib/constants");
  return BLOQUES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);
  const bloque = getBloqueMeta(t, slug);
  if (!bloque) return { title: t.bloques.notFound };

  return {
    title: `${t.bloques.label} ${bloque.numero}: ${bloque.titulo}`,
    description: bloque.descripcion,
  };
}

export default async function BloquePage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);
  const bloque = getBloqueMeta(t, slug);
  if (!bloque) notFound();

  const lecciones = getLeccionesBloque(slug);
  const Icon = iconMap[bloque.icono] || Compass;
  const colorClass = colorMap[bloque.color] || colorMap.primary;

  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs
        items={[
          { label: t.bloques.title, href: "/bloques" },
          { label: bloque.titulo },
        ]}
        className="mb-6"
      />

      <div className="flex items-start gap-5 mb-10">
        <div className={`p-4 rounded-2xl ${colorClass} shrink-0`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <Badge variant="default" size="sm" className="mb-2">
            {t.bloques.label} {bloque.numero}
          </Badge>
          <h1 className="text-3xl font-bold text-fg mb-2">{bloque.titulo}</h1>
          <p className="text-fg-secondary text-lg">{bloque.descripcion}</p>
          {bloque.progreso !== undefined && bloque.progreso > 0 && (
            <div className="mt-4 max-w-xs">
              <ProgressBar
                value={bloque.progreso}
                showLabel
                size="md"
                color="accent"
              />
            </div>
          )}
        </div>
      </div>

      {lecciones.length > 0 ? (
        <div className="space-y-3">
          {lecciones.map((leccion, index) => {
            const href = `/bloques/${slug}/${leccion.slug}`;
            const isCompleted = false;

            return (
              <Link key={leccion.slug} href={href} className="group block">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary-light/30 transition-all">
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    ) : (
                      <Circle className="w-5 h-5 text-fg-muted/40" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-fg-muted font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-medium text-fg group-hover:text-primary transition-colors truncate">
                        {leccion.titulo}
                      </h3>
                    </div>
                    <p className="text-sm text-fg-secondary truncate">
                      {leccion.descripcion}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {leccion.duracion && (
                      <span className="text-xs text-fg-muted">
                        {leccion.duracion}
                      </span>
                    )}
                    {leccion.dificultad && (
                      <Badge variant="default" size="sm">
                        {t.gamification.dificultad[leccion.dificultad]}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-xl">
          <p className="text-fg-muted text-lg mb-2">{t.bloques.proximamente}</p>
          <p className="text-fg-secondary text-sm">
            {t.bloques.enPreparacion}
          </p>
        </div>
      )}
    </div>
  );
}
