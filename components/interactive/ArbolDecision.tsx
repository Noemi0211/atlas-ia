"use client";

import { useState, useEffect } from "react";
import { ARBOL_DECISION, getHerramientaPorId } from "@/lib/ecosistema-data";
import { cn } from "@/lib/utils";
import { ArrowLeft, RotateCcw, ExternalLink } from "lucide-react";
import { useProgress } from "@/stores/progress";

export function ArbolDecision() {
  const [nodoActualId, setNodoActualId] = useState("inicio");
  const [historial, setHistorial] = useState<string[]>([]);
  const [herramientaRecomendada, setHerramientaRecomendada] = useState<
    string | null
  >(null);
  const { unlockArbolDecisionBadge } = useProgress();

  const nodoActual = ARBOL_DECISION.find((n) => n.id === nodoActualId);
  const herramienta = herramientaRecomendada
    ? getHerramientaPorId(herramientaRecomendada)
    : null;

  useEffect(() => {
    if (herramientaRecomendada) {
      unlockArbolDecisionBadge();
    }
  }, [herramientaRecomendada, unlockArbolDecisionBadge]);

  const seleccionarOpcion = (opcionIndex: number) => {
    if (!nodoActual) return;

    const opcion = nodoActual.opciones[opcionIndex];

    if (opcion.herramientaRecomendada) {
      setHerramientaRecomendada(opcion.herramientaRecomendada);
      setHistorial((prev) => [...prev, nodoActualId]);
    } else if (opcion.siguienteNodoId) {
      setHistorial((prev) => [...prev, nodoActualId]);
      setNodoActualId(opcion.siguienteNodoId);
    }
  };

  const retroceder = () => {
    if (historial.length === 0) return;
    const anterior = historial[historial.length - 1];
    setHistorial((prev) => prev.slice(0, -1));
    setNodoActualId(anterior);
    setHerramientaRecomendada(null);
  };

  const reiniciar = () => {
    setNodoActualId("inicio");
    setHistorial([]);
    setHerramientaRecomendada(null);
  };

  if (herramienta) {
    return (
      <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={retroceder}
            className="p-2 rounded-lg hover:bg-bg border border-border text-fg-muted hover:text-fg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={reiniciar}
            className="p-2 rounded-lg hover:bg-bg border border-border text-fg-muted hover:text-fg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <span className="text-sm text-fg-muted">Recomendación</span>
        </div>

        <div className="p-6 bg-bg rounded-xl border border-primary">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-fg">{herramienta.nombre}</h3>
              <p className="text-fg-muted">{herramienta.empresa}</p>
            </div>
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                herramienta.precio === "gratis"
                  ? "bg-green-100 text-green-700"
                  : herramienta.precio === "freemium"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-orange-100 text-orange-700"
              )}
            >
              {herramienta.precio === "gratis"
                ? "Gratis"
                : herramienta.precio === "freemium"
                ? "Freemium"
                : "De pago"}
            </span>
          </div>

          <p className="text-fg mb-4">{herramienta.descripcion}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-fg mb-2">Lo mejor:</h4>
            <p className="text-sm text-primary font-medium">
              {herramienta.fortalezaPrincipal}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-fg mb-2">
              Características principales:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {herramienta.caracteristicas.slice(0, 4).map((car, i) => (
                <li key={i} className="text-sm text-fg-muted flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {car}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-fg mb-2">Ideal para:</h4>
            <div className="flex flex-wrap gap-1">
              {herramienta.idealPara.map((uso, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-bg-secondary rounded text-xs text-fg-muted"
                >
                  {uso}
                </span>
              ))}
            </div>
          </div>

          {herramienta.precioDetalle && (
            <p className="text-sm text-fg-muted mb-4">
              <strong>Precio:</strong> {herramienta.precioDetalle}
            </p>
          )}

          <a
            href={herramienta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Visitar sitio web
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-4 text-xs text-fg-muted text-center">
          Esta es una recomendación basada en tus respuestas. Explora otras
          opciones también.
        </p>
      </div>
    );
  }

  if (!nodoActual) {
    return (
      <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl text-center">
        <p className="text-fg-muted">Nodo no encontrado.</p>
        <button
          onClick={reiniciar}
          className="mt-4 px-4 py-2 bg-primary text-white dark:text-slate-900 rounded-lg text-sm font-medium"
        >
          Reiniciar
        </button>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        {historial.length > 0 && (
          <button
            onClick={retroceder}
            className="p-2 rounded-lg hover:bg-bg border border-border text-fg-muted hover:text-fg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={reiniciar}
          className="p-2 rounded-lg hover:bg-bg border border-border text-fg-muted hover:text-fg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <div className="flex gap-1 ml-auto">
          {historial.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-fg mb-2">{nodoActual.pregunta}</h3>
      {nodoActual.descripcion && (
        <p className="text-fg-muted mb-4">{nodoActual.descripcion}</p>
      )}

      <div className="grid grid-cols-1 gap-2">
        {nodoActual.opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => seleccionarOpcion(i)}
            className="text-left p-4 rounded-xl border border-border hover:border-primary hover:bg-primary-light transition-colors"
          >
            <span className="font-medium text-fg">{opcion.texto}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
