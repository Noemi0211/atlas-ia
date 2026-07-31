"use client";

import { useState, useMemo, useCallback } from "react";
import {
  HERRAMIENTAS,
  CATEGORIAS,
  CRITERIOS_COMPARACION,
} from "@/lib/ecosistema-data";
import {
  HerramientaIA,
  CategoriaHerramienta,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useProgress } from "@/stores/progress";

export function ComparadorHerramientas() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<CategoriaHerramienta>("asistente-conversacion");
  const [herramientasSeleccionadas, setHerramientasSeleccionadas] = useState<
    string[]
  >([]);
  const [puntuaciones, setPuntuaciones] = useState<
    Record<string, Record<string, number>>
  >({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const { unlockComparadorBadge, badges } = useProgress();
  const yaDesbloqueado = badges.includes("comparador-user");

  const herramientasFiltradas = useMemo(
    () =>
      HERRAMIENTAS.filter(
        (h) => h.categoria === categoriaSeleccionada
      ),
    [categoriaSeleccionada]
  );

  const toggleHerramienta = (id: string) => {
    setHerramientasSeleccionadas((prev) => {
      if (prev.includes(id)) {
        return prev.filter((h) => h !== id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const setPuntuacion = (
    herramientaId: string,
    criterioId: string,
    valor: number
  ) => {
    setPuntuaciones((prev) => ({
      ...prev,
      [herramientaId]: {
        ...prev[herramientaId],
        [criterioId]: valor,
      },
    }));
  };

  const calcularTotal = useCallback(
    (herramientaId: string): number => {
      const scores = puntuaciones[herramientaId] || {};
      return Object.values(scores).reduce((sum, val) => sum + val, 0);
    },
    [puntuaciones]
  );

  const herramientasParaComparar = herramientasSeleccionadas
    .map((id) => HERRAMIENTAS.find((h) => h.id === id))
    .filter(Boolean) as HerramientaIA[];

  const ganador = useMemo(() => {
    if (herramientasParaComparar.length < 2) return null;
    let maxPuntaje = -1;
    let mejorId = "";
    herramientasParaComparar.forEach((h) => {
      const total = calcularTotal(h.id);
      if (total > maxPuntaje) {
        maxPuntaje = total;
        mejorId = h.id;
      }
    });
    return mejorId;
  }, [herramientasParaComparar, calcularTotal]);

  const handleVerResultados = () => {
    setMostrarResultados(!mostrarResultados);
    if (!mostrarResultados && ganador && !yaDesbloqueado) {
      unlockComparadorBadge();
    }
  };

  return (
    <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl">
      <h3 className="text-xl font-bold text-fg mb-4">
        Comparador de Herramientas IA
      </h3>

      <div className="mb-6">
        <label className="block text-sm font-medium text-fg mb-2">
          Selecciona una categoría:
        </label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATEGORIAS) as CategoriaHerramienta[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoriaSeleccionada(cat);
                setHerramientasSeleccionadas([]);
                setPuntuaciones({});
                setMostrarResultados(false);
              }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                categoriaSeleccionada === cat
                  ? "bg-primary text-white dark:text-slate-900"
                  : "bg-bg border border-border text-fg-muted hover:bg-bg-secondary"
              )}
            >
              {CATEGORIAS[cat].icono} {CATEGORIAS[cat].nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-fg mb-2">
          Elige hasta 3 herramientas para comparar:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {herramientasFiltradas.map((h) => (
            <button
              key={h.id}
              onClick={() => toggleHerramienta(h.id)}
              className={cn(
                "flex items-center gap-2 p-3 rounded-lg border text-left transition-colors",
                herramientasSeleccionadas.includes(h.id)
                  ? "border-primary bg-primary-light"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center",
                  herramientasSeleccionadas.includes(h.id)
                    ? "bg-primary border-primary text-white dark:text-slate-900"
                    : "border-border"
                )}
              >
                {herramientasSeleccionadas.includes(h.id) && (
                  <Check className="w-3 h-3" />
                )}
              </div>
              <div>
                <p className="font-medium text-fg">{h.nombre}</p>
                <p className="text-xs text-fg-muted">{h.empresa}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {herramientasSeleccionadas.length >= 2 && (
        <div className="mb-6">
          <h4 className="font-semibold text-fg mb-3">
            Evalúa cada herramienta (1-5 estrellas):
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-fg-muted">Criterio</th>
                  {herramientasParaComparar.map((h) => (
                    <th key={h.id} className="text-center py-2 text-fg-muted">
                      {h.nombre}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERIOS_COMPARACION.map((criterio) => (
                  <tr key={criterio.id} className="border-b border-border/50">
                    <td className="py-3">
                      <p className="font-medium text-fg">{criterio.nombre}</p>
                      <p className="text-xs text-fg-muted">
                        {criterio.descripcion}
                      </p>
                    </td>
                    {herramientasParaComparar.map((h) => (
                      <td key={h.id} className="text-center py-3">
                        <div className="flex justify-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((estrella) => (
                            <button
                              key={estrella}
                              onClick={() =>
                                setPuntuacion(h.id, criterio.id, estrella)
                              }
                              className="p-0.5"
                            >
                              <Star
                                className={cn(
                                  "w-5 h-5 transition-colors",
                                  (puntuaciones[h.id]?.[criterio.id] || 0) >=
                                    estrella
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                )}
                              />
                            </button>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-3 text-fg">TOTAL</td>
                  {herramientasParaComparar.map((h) => (
                    <td
                      key={h.id}
                      className={cn(
                        "text-center py-3",
                        ganador === h.id && "text-primary"
                      )}
                    >
                      {calcularTotal(h.id)} /{" "}
                      {CRITERIOS_COMPARACION.length * 5}
                      {ganador === h.id && (
                        <span className="ml-1 text-xs">🏆</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={handleVerResultados}
            className="mt-4 flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {mostrarResultados ? (
              <>
                Ocultar detalles <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver detalles de cada herramienta{" "}
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          {mostrarResultados && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {herramientasParaComparar.map((h) => (
                <div
                  key={h.id}
                  className={cn(
                    "p-4 rounded-xl border",
                    ganador === h.id
                      ? "border-primary bg-primary-light"
                      : "border-border"
                  )}
                >
                  <h5 className="font-bold text-fg">{h.nombre}</h5>
                  <p className="text-sm text-fg-muted mb-2">{h.empresa}</p>
                  <p className="text-sm text-fg mb-2">{h.descripcion}</p>
                  <div className="text-xs text-fg-muted">
                    <p>
                      <strong>Fortaleza:</strong> {h.fortalezaPrincipal}
                    </p>
                    <p>
                      <strong>Debilidad:</strong> {h.debilidadPrincipal}
                    </p>
                    <p>
                      <strong>Precio:</strong> {h.precioDetalle}
                    </p>
                  </div>
                  {ganador === h.id && (
                    <div className="mt-2 text-sm font-medium text-primary">
                      🏆 Mejor opción según tu evaluación
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="text-xs text-fg-muted mt-4">
        <p>
          Este comparador es una guía interactiva. Las puntuaciones son
          subjetivas y dependen de tus necesidades específicas.
        </p>
      </div>
    </div>
  );
}
