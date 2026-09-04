import { Metadata } from "next";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
import { getLocaleFromParams } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getBLOQUES } from "@/lib/i18n/data";
import { buildLanguagesAlternates, prefixPath } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    title: t.bloques.title,
    description: t.bloques.subtitle,
    alternates: {
      canonical: prefixPath("/bloques", locale),
      languages: buildLanguagesAlternates("/bloques"),
    },
  };
}

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

export default async function BloquesPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);
  const bloques = getBLOQUES(t);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: t.bloques.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">
          {t.bloques.title}
        </h1>
        <p className="text-fg-secondary text-lg max-w-xl">
          {t.bloques.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {bloques.map((bloque) => {
          const Icon = iconMap[bloque.icono] || Compass;
          const colorClass = colorMap[bloque.color] || colorMap.primary;
          const progreso = bloque.progreso || 0;

          return (
            <Link
              key={bloque.slug}
              href={prefixPath(`/bloques/${bloque.slug}`, locale)}
              className="group block"
            >
              <Card hover className="transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorClass} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <Badge variant="default" size="sm" className="mb-2">
                          {t.bloques.label} {bloque.numero}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {bloque.titulo}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-1">
                      {bloque.descripcion}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-fg-muted">
                        {bloque.lecciones > 0
                          ? `${bloque.lecciones} ${t.bloques.lecciones}`
                          : t.bloques.proximamente}
                      </span>
                      {progreso > 0 && (
                        <ProgressBar
                          value={progreso}
                          size="sm"
                          className="w-32"
                          showLabel
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
