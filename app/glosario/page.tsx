"use client";

import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { agruparPorLetra } from "@/lib/glosario-data";
import { useI18n } from "@/lib/i18n/provider";
import { getGlosario, getCategoriasGlosario } from "@/lib/i18n/data";
import { cn } from "@/lib/utils";
import { Search, BookMarked } from "lucide-react";

export default function GlosarioPage() {
  const { t } = useI18n();
  const glosario = useMemo(() => getGlosario(t), [t]);
  const categorias = useMemo(() => getCategoriasGlosario(t), [t]);
  const todas = t.data.glosarioCategorias.todas;

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState(todas);

  const terminosFiltrados = useMemo(() => {
    const query = busqueda
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return glosario.filter((termino) => {
      const matchesCategoria =
        categoria === todas || termino.categoria === categoria;
      const matchesBusqueda =
        !query ||
        termino.termino.toLowerCase().includes(query) ||
        termino.definicion
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(query);
      return matchesCategoria && matchesBusqueda;
    });
  }, [busqueda, categoria, glosario, todas]);

  const grupos = useMemo(() => agruparPorLetra(terminosFiltrados), [terminosFiltrados]);

  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: t.glosario.title }]} className="mb-6" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg mb-3">{t.glosario.title}</h1>
        <p className="text-fg-secondary text-lg max-w-xl">
          {t.glosario.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={t.glosario.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-bg border border-border rounded-xl text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                categoria === cat
                  ? "bg-primary text-white dark:text-slate-900"
                  : "bg-bg border border-border text-fg-muted hover:bg-bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 text-sm text-fg-muted">
        {terminosFiltrados.length} {t.glosario.termsCount}
        {busqueda && ` ${t.glosario.for} "${busqueda}"`}
      </div>

      {grupos.length === 0 ? (
        <div className="py-16 text-center">
          <BookMarked className="w-12 h-12 text-fg-muted mx-auto mb-4" />
          <p className="text-fg-muted text-lg">
            {t.glosario.noResults}
          </p>
          <button
            onClick={() => { setBusqueda(""); setCategoria(todas); }}
            className="mt-3 text-sm text-primary hover:underline"
          >
            {t.common.clearFilters}
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {grupos.map(([letra, terminos]) => (
            <div key={letra}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-primary-light text-primary font-bold text-lg flex items-center justify-center shrink-0">
                  {letra}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-fg-muted">{terminos.length}</span>
              </div>
              <div className="space-y-3 ml-0 md:ml-[52px]">
                {terminos.map((termino) => (
                  <div
                    key={termino.termino}
                    className="p-4 rounded-xl border border-border bg-bg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-fg mb-1">{termino.termino}</h3>
                      <span className="shrink-0 px-2 py-0.5 rounded text-xs bg-bg-secondary text-fg-muted border border-border">
                        {termino.categoria}
                      </span>
                    </div>
                    <p className="text-sm text-fg-secondary leading-relaxed">
                      {termino.definicion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
