import { Metadata } from "next";
import Link from "next/link";
import { BLOQUES } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
  ArrowRight,
  Zap,
  BookOpen,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Atlas IA — Aprende Inteligencia Artificial desde cero",
  description:
    "La mejor plataforma en español para aprender Inteligencia Artificial. Desde fundamentos hasta agentes, con ejemplos reales y práctica guiada.",
};

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

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-wide mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-2xl">
            <Badge variant="primary" size="md" className="mb-6">
              Plataforma educativa en español
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight mb-6">
              Aprende{" "}
              <span className="text-primary">Inteligencia Artificial</span>{" "}
              desde cero
            </h1>

            <p className="text-lg text-fg-secondary leading-relaxed mb-8 max-w-xl">
              La guía más completa en español para entender la IA. No solo
              herramientas. <strong>Criterio</strong>.{" "}
              <strong>Pensamiento crítico</strong>.{" "}
              <strong>Saber cuándo y cómo usar cada IA</strong>.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/bloques/antes-de-empezar"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-primary text-white dark:text-slate-900 font-medium text-sm hover:bg-primary-hover transition-colors shadow-sm"
              >
                Empezar ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/bloques"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-border text-fg font-medium text-sm hover:bg-bg-secondary transition-colors"
              >
                Ver todos los bloques
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-wide mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-bg">
            <div className="p-2.5 rounded-lg bg-primary-light shrink-0">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-fg text-sm mb-1">
                11 bloques temáticos
              </h3>
              <p className="text-sm text-fg-secondary">
                Desde fundamentos hasta agentes, cubriendo todo el ecosistema
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-bg">
            <div className="p-2.5 rounded-lg bg-accent-light shrink-0">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-fg text-sm mb-1">
                Contenido práctico
              </h3>
              <p className="text-sm text-fg-secondary">
                Ejemplos reales, ejercicios guiados y retos para cada tema
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-bg">
            <div className="p-2.5 rounded-lg bg-purple-light shrink-0">
              <Zap className="w-5 h-5 text-purple" />
            </div>
            <div>
              <h3 className="font-semibold text-fg text-sm mb-1">
                Siempre actualizado
              </h3>
              <p className="text-sm text-fg-secondary">
                El ecosistema de IA cambia cada semana. Nosotros también
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-fg mb-2">Bloques del curso</h2>
          <p className="text-fg-secondary">
            Recorre la plataforma en orden o salta directamente al tema que más
            te interese.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOQUES.map((bloque) => {
            const Icon = iconMap[bloque.icono] || Compass;
            const colorClass = colorMap[bloque.color] || colorMap.primary;

            return (
              <Link
                key={bloque.slug}
                href={`/bloques/${bloque.slug}`}
                className="group"
              >
                <Card hover className="h-full transition-all duration-200 group-hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${colorClass}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant={bloque.numero === 0 ? "primary" : "default"}>
                        Bloque {bloque.numero}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {bloque.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="mb-4">
                    {bloque.descripcion}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-fg-muted">
                      {bloque.lecciones > 0
                        ? `${bloque.lecciones} lecciones`
                        : "Próximamente"}
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary/50">
        <div className="max-w-wide mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-fg mb-3">
            ¿Listo para empezar?
          </h2>
          <p className="text-fg-secondary mb-8 max-w-lg mx-auto">
            No necesitas experiencia previa. No necesitas pagar nada. Solo
            necesitas curiosidad y ganas de aprender.
          </p>
          <Link
            href="/bloques/antes-de-empezar/01-bienvenido"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white dark:text-slate-900 font-medium hover:bg-primary-hover transition-colors shadow-sm"
          >
            Comenzar con el Bloque 0
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
