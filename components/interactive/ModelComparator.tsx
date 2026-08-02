"use client";

import { useState, useMemo } from "react";
import type { HerramientaIA } from "@/lib/types";
import { useProgress } from "@/stores/progress";
import { BarChart3, Check, X, Minus, Zap, Brain, MessageSquare, Image as ImageIcon, Code, Globe, DollarSign } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { getHerramientas } from "@/lib/i18n/data";

function getCriteria(t: ReturnType<typeof useI18n>["t"]) {
  return [
    { id: "popularidad", label: t.lab.modelComparator.criteria.popularidad, icon: <Zap className="w-3.5 h-3.5" /> },
    { id: "multimodal", label: t.lab.modelComparator.criteria.multimodal, icon: <ImageIcon className="w-3.5 h-3.5" /> },
    { id: "openSource", label: t.lab.modelComparator.criteria.openSource, icon: <Code className="w-3.5 h-3.5" /> },
    { id: "contexto", label: t.lab.modelComparator.criteria.contexto, icon: <Brain className="w-3.5 h-3.5" /> },
    { id: "precio", label: t.lab.modelComparator.criteria.precio, icon: <DollarSign className="w-3.5 h-3.5" /> },
    { id: "fortaleza", label: t.lab.modelComparator.criteria.fortaleza, icon: <MessageSquare className="w-3.5 h-3.5" /> },
  ];
}

export function ModelComparator() {
  const { t } = useI18n();
  const [selectedIds, setSelectedIds] = useState<string[]>(["chatgpt", "claude", "gemini"]);
  const [filterCategory, setFilterCategory] = useState<string>("asistente-conversacion");
  const [used, setUsed] = useState(false);
  const { addXP, addBadge } = useProgress();

  const allModels = useMemo(() => getHerramientas(t), [t]);
  const comparisonCriteria = useMemo(() => getCriteria(t), [t]);

  const modelGroups = [
    { id: "asistente-conversacion", label: t.lab.modelComparator.groups.asistentes },
    { id: "codigo", label: t.lab.modelComparator.groups.codigo },
    { id: "imagen", label: t.lab.modelComparator.groups.imagen },
    { id: "audio-video", label: t.lab.modelComparator.groups.audiovisual },
  ];

  const filteredModels = allModels.filter((m) => m.categoria === filterCategory);
  const selectedModels = allModels.filter((m) => selectedIds.includes(m.id));

  const toggleModel = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });

    if (!used) {
      setUsed(true);
      addBadge("evaluador-modelos");
      addXP(30);
    }
  };

  const selectAllInCategory = () => {
    setSelectedIds((prev) => {
      const categoryIds = filteredModels.map((m) => m.id);
      const newIds = [...prev];
      for (const id of categoryIds) {
        if (!newIds.includes(id) && newIds.length < 4) {
          newIds.push(id);
        }
      }
      return newIds;
    });
  };

  function getPrecioLabel(m: HerramientaIA): string {
    const labels = t.data.ecosistema.precio;
    return labels[m.precio];
  }

  function getContextoValue(m: HerramientaIA): string {
    return m.ventanaContexto || "N/A";
  }

  function renderComparisonValue(m: HerramientaIA, criterionId: string): React.ReactNode {
    switch (criterionId) {
      case "popularidad":
        return (
          <div className="flex items-center gap-1">
            <div className="flex-1 h-1.5 rounded-full bg-bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${m.popularidad * 10}%` }}
              />
            </div>
            <span className="text-2xs text-fg-muted w-4 text-right">{m.popularidad}/10</span>
          </div>
        );
      case "multimodal":
        return m.multimodal ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <X className="w-4 h-4 text-error" />
        );
      case "openSource":
        return m.openSource ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <Minus className="w-4 h-4 text-fg-muted" />
        );
      case "contexto":
        return <span className="text-xs text-fg">{getContextoValue(m)}</span>;
      case "precio":
        return <span className="text-xs text-fg">{getPrecioLabel(m)}</span>;
      case "fortaleza":
        return <span className="text-2xs text-fg-secondary leading-tight">{m.fortalezaPrincipal}</span>;
      default:
        return null;
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-fg">{t.lab.modelComparator.title}</h3>
        </div>
        <div className="flex gap-1.5">
          {modelGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => { setFilterCategory(g.id); setSelectedIds([]); }}
              className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                filterCategory === g.id
                  ? "bg-primary text-white dark:text-slate-900 border-primary"
                  : "bg-bg-secondary text-fg-secondary border-border hover:text-fg"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredModels.map((m) => (
          <button
            key={m.id}
            onClick={() => toggleModel(m.id)}
            disabled={!selectedIds.includes(m.id) && selectedIds.length >= 4}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-all ${
              selectedIds.includes(m.id)
                ? "bg-primary/10 border-primary text-primary"
                : "bg-bg-secondary border-border text-fg-secondary hover:text-fg hover:border-border-strong"
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                selectedIds.includes(m.id) ? "bg-primary" : "bg-fg-muted"
              }`}
            />
            {m.nombre}
          </button>
        ))}
        <button
          onClick={selectAllInCategory}
          className="px-3 py-2 rounded-lg border border-border text-2xs text-fg-muted hover:text-fg hover:bg-bg-secondary transition-colors"
        >
          {t.lab.modelComparator.selectAll}
        </button>
      </div>

      {selectedModels.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left text-xs font-medium text-fg-muted pb-3 pr-4">{t.lab.modelComparator.criterio}</th>
                {selectedModels.map((m) => (
                  <th key={m.id} className="text-left text-xs font-semibold text-fg pb-3 px-3 min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-2xs text-primary font-bold">
                        {m.nombre[0]}
                      </div>
                      {m.nombre}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonCriteria.map((c) => (
                <tr key={c.id} className="border-t border-border">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      {c.icon}
                      <span className="text-xs text-fg-secondary">{c.label}</span>
                    </div>
                  </td>
                  {selectedModels.map((m) => (
                    <td key={m.id} className="py-3 px-3">
                      {renderComparisonValue(m, c.id)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-fg-muted" />
                    <span className="text-xs text-fg-secondary">{t.lab.modelComparator.empresa}</span>
                  </div>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="py-3 px-3">
                    <span className="text-xs text-fg">{m.empresa}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <BarChart3 className="w-10 h-10 text-fg-muted mb-3" />
          <p className="text-sm text-fg-muted">{t.lab.modelComparator.empty}</p>
        </div>
      )}

      {selectedModels.length >= 2 && (
        <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-xs text-accent">
            <strong>{t.lab.modelComparator.recommendation}</strong>{" "}
            {selectedModels.every((m) => m.categoria === "asistente-conversacion")
              ? t.lab.modelComparator.recGeneral
              : selectedModels.every((m) => m.categoria === "codigo")
              ? t.lab.modelComparator.recCodigo
              : selectedModels.every((m) => m.categoria === "imagen")
              ? t.lab.modelComparator.recImagen
              : t.lab.modelComparator.recDefault}
          </p>
        </div>
      )}
    </div>
  );
}
