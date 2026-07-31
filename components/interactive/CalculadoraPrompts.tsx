"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  ROLES,
  FORMATOS,
  TONOS,
  AUDIENCIAS,
  EXTENSIONES,
  generarPrompt,
} from "@/lib/prompting-data";
import { Copy, Check, RotateCcw, Sparkles } from "lucide-react";
import { useProgress } from "@/stores/progress";

export function CalculadoraPrompts() {
  const [tarea, setTarea] = useState("");
  const [rol, setRol] = useState("ninguno");
  const [contexto, setContexto] = useState("");
  const [formato, setFormato] = useState("");
  const [tono, setTono] = useState("");
  const [audiencia, setAudiencia] = useState("");
  const [extension, setExtension] = useState("");
  const [promptGenerado, setPromptGenerado] = useState("");
  const [copiado, setCopiado] = useState(false);
  const { unlockCalculadoraBadge, badges } = useProgress();
  const yaDesbloqueado = badges.includes("calculadora-prompts");

  const handleGenerar = useCallback(() => {
    if (!tarea.trim()) return;

    const prompt = generarPrompt({
      tarea: tarea.trim(),
      rol,
      formato,
      tono,
      audiencia,
      extension,
      contexto: contexto.trim() || undefined,
    });

    setPromptGenerado(prompt);
    if (!yaDesbloqueado) {
      unlockCalculadoraBadge();
    }
  }, [tarea, rol, formato, tono, audiencia, extension, contexto, yaDesbloqueado, unlockCalculadoraBadge]);

  const handleCopiar = useCallback(async () => {
    await navigator.clipboard.writeText(promptGenerado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }, [promptGenerado]);

  const handleReiniciar = useCallback(() => {
    setTarea("");
    setRol("ninguno");
    setContexto("");
    setFormato("");
    setTono("");
    setAudiencia("");
    setExtension("");
    setPromptGenerado("");
    setCopiado(false);
  }, []);

  const tieneConfiguracion =
    tarea || rol !== "ninguno" || contexto || formato || tono || audiencia || extension;

  return (
    <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl">
      <h3 className="text-xl font-bold text-fg mb-4">
        Calculadora de Prompts
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-fg">
              Describe tu tarea <span className="text-red-400">*</span>
            </span>
            <textarea
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder="Ej: Escribe un email de ventas, crea un plan de marketing, explica un concepto..."
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg placeholder:text-fg-muted text-sm resize-none focus:outline-none focus:border-primary"
              rows={3}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-fg">Rol de la IA</span>
            <select
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
            >
              {ROLES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
            {rol !== "ninguno" && (
              <p className="text-xs text-fg-muted mt-1">
                {ROLES.find((r) => r.id === rol)?.descripcion}
              </p>
            )}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-fg">
              Contexto adicional
            </span>
            <textarea
              value={contexto}
              onChange={(e) => setContexto(e.target.value)}
              placeholder="Ej: Soy el director de marketing de una startup de SaaS..."
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg placeholder:text-fg-muted text-sm resize-none focus:outline-none focus:border-primary"
              rows={2}
            />
          </label>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-medium text-fg">Formato</span>
              <select
                value={formato}
                onChange={(e) => setFormato(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">Sin preferencia</option>
                {FORMATOS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-fg">Tono</span>
              <select
                value={tono}
                onChange={(e) => setTono(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">Sin preferencia</option>
                {TONOS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-medium text-fg">Audiencia</span>
              <select
                value={audiencia}
                onChange={(e) => setAudiencia(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">Sin preferencia</option>
                {AUDIENCIAS.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-fg">Extensión</span>
              <select
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">Sin preferencia</option>
                {EXTENSIONES.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={handleGenerar}
              disabled={!tarea.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-4 h-4" />
              Generar prompt
            </button>
            {tieneConfiguracion && (
              <button
                onClick={handleReiniciar}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-fg-muted hover:text-fg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>

      {promptGenerado && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-fg">Prompt generado</h4>
            <button
              onClick={handleCopiar}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                copiado
                  ? "bg-green-100 text-green-700"
                  : "bg-bg border border-border text-fg-muted hover:text-fg"
              )}
            >
              {copiado ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copiar
                </>
              )}
            </button>
          </div>
          <pre className="p-4 bg-bg border border-border rounded-xl text-sm text-fg whitespace-pre-wrap font-mono">
            {promptGenerado}
          </pre>
          <p className="mt-2 text-xs text-fg-muted">
            Copia este prompt y pégalo en ChatGPT, Claude, Gemini o cualquier asistente de IA.
          </p>
        </div>
      )}

      {!promptGenerado && tarea.trim() && (
        <div className="mt-4 text-center text-sm text-fg-muted">
          Haz clic en <strong>Generar prompt</strong> para crear tu prompt personalizado.
        </div>
      )}

      <div className="mt-4 text-xs text-fg-muted">
        <p>
          Esta calculadora te ayuda a estructurar prompts efectivos. Los resultados
          pueden variar según el modelo de IA que uses.
        </p>
      </div>
    </div>
  );
}
