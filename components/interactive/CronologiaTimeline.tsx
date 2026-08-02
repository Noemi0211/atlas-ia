"use client";

import { useState, useMemo } from "react";
import { HitoIA } from "@/lib/cronologia-data";
import { cn } from "@/lib/utils";
import { Brain, Building2, FlaskConical, Wrench, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { getCronologia } from "@/lib/i18n/data";

const iconosCategoria: Record<string, React.ReactNode> = {
  modelo: <Brain className="w-4 h-4" />,
  empresa: <Building2 className="w-4 h-4" />,
  investigacion: <FlaskConical className="w-4 h-4" />,
  herramienta: <Wrench className="w-4 h-4" />,
  hito: <Star className="w-4 h-4" />,
};

const coloresCategoria: Record<string, string> = {
  modelo: "border-blue-400 bg-blue-50 text-blue-600",
  empresa: "border-purple-400 bg-purple-50 text-purple-600",
  investigacion: "border-green-400 bg-green-50 text-green-600",
  herramienta: "border-orange-400 bg-orange-50 text-orange-600",
  hito: "border-rose-400 bg-rose-50 text-rose-600",
};

const coloresBadge: Record<string, string> = {
  modelo: "text-blue-600 bg-blue-50 border-blue-200",
  empresa: "text-purple-600 bg-purple-50 border-purple-200",
  investigacion: "text-green-600 bg-green-50 border-green-200",
  herramienta: "text-orange-600 bg-orange-50 border-orange-200",
  hito: "text-rose-600 bg-rose-50 border-rose-200",
};

function HitoCard({ hito }: { hito: HitoIA }) {
  const { t } = useI18n();

  return (
    <div className="relative">
      <div className={cn(
        "flex items-start gap-6",
        "md:flex-row flex-row"
      )}>
        <div className="hidden md:flex flex-col items-center shrink-0">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border-2",
            coloresCategoria[hito.categoria]
          )}>
            {iconosCategoria[hito.categoria]}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className={cn(
            "p-4 md:p-5 rounded-xl border bg-bg relative",
            "hover:shadow-sm transition-shadow"
          )}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-bold text-primary">
                  {hito.año}{hito.mes ? `/${hito.mes.toString().padStart(2, "0")}` : ""}
                </span>
              </div>
              <span className={cn(
                "shrink-0 px-2 py-0.5 rounded text-xs font-medium border",
                coloresBadge[hito.categoria]
              )}>
                {t.cronologia.badges[hito.categoria as keyof typeof t.cronologia.badges]}
              </span>
            </div>
            <h3 className="text-base font-semibold text-fg mb-1.5">{hito.titulo}</h3>
            <p className="text-sm text-fg-secondary leading-relaxed">{hito.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CronologiaTimeline() {
  const { t } = useI18n();
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todas");

  const cronologia = useMemo(() => getCronologia(t), [t]);

  const hitosFiltrados = useMemo(() => {
    if (filtroCategoria === "todas") return cronologia;
    return cronologia.filter((h) => h.categoria === filtroCategoria);
  }, [filtroCategoria, cronologia]);

  const categorias = [
    { id: "todas", label: t.cronologia.filterAll },
    { id: "modelo", label: t.cronologia.filters.modelos },
    { id: "empresa", label: t.cronologia.filters.empresas },
    { id: "investigacion", label: t.cronologia.filters.investigacion },
    { id: "herramienta", label: t.cronologia.filters.herramientas },
    { id: "hito", label: t.cronologia.filters.hitos },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFiltroCategoria(cat.id)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              filtroCategoria === cat.id
                ? "bg-primary text-white dark:text-slate-900"
                : "bg-bg border border-border text-fg-muted hover:bg-bg-secondary"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-[19px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-6">
          {hitosFiltrados.map((hito) => (
            <HitoCard key={`${hito.año}-${hito.titulo}`} hito={hito} />
          ))}
        </div>
      </div>
    </div>
  );
}
