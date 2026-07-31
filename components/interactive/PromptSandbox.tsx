"use client";

import { useState, useCallback } from "react";
import { ROLES, FORMATOS, TONOS, AUDIENCIAS, EXTENSIONES, generarPrompt } from "@/lib/prompting-data";
import { useProgress } from "@/stores/progress";
import { Copy, Check, Wand2, Sparkles } from "lucide-react";

export function PromptSandbox() {
  const [config, setConfig] = useState({
    tarea: "",
    rol: "ninguno",
    formato: "parrafos",
    tono: "profesional",
    audiencia: "general",
    extension: "media",
    contexto: "",
  });

  const [copied, setCopied] = useState(false);
  const [used, setUsed] = useState(false);
  const { addXP, unlockCalculadoraBadge } = useProgress();

  const generatedPrompt = config.tarea.trim()
    ? generarPrompt(config)
    : "";

  const handleCopy = useCallback(() => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    if (!used) {
      setUsed(true);
      unlockCalculadoraBadge();
      addXP(25);
    }
  }, [generatedPrompt, used, addXP, unlockCalculadoraBadge]);

  const handleSuggestion = useCallback((suggestion: string) => {
    setConfig((prev) => ({ ...prev, tarea: suggestion }));
  }, []);

  const suggestions = [
    "Explica qué es el Machine Learning",
    "Crea un plan de estudios semanal sobre IA",
    "Escribe un artículo sobre RAG",
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-fg">Configura tu prompt</h3>
        </div>

        <div>
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">Tarea</label>
          <textarea
            value={config.tarea}
            onChange={(e) => setConfig((prev) => ({ ...prev, tarea: e.target.value }))}
            placeholder="Describe qué quieres que haga la IA..."
            rows={3}
            className="w-full px-3 py-2 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <div className="flex flex-wrap gap-1.5 mt-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="px-2 py-1 rounded-md bg-bg-secondary border border-border text-2xs text-fg-muted hover:text-fg transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Rol</label>
            <select
              value={config.rol}
              onChange={(e) => setConfig((prev) => ({ ...prev, rol: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {ROLES.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Formato</label>
            <select
              value={config.formato}
              onChange={(e) => setConfig((prev) => ({ ...prev, formato: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {FORMATOS.map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Tono</label>
            <select
              value={config.tono}
              onChange={(e) => setConfig((prev) => ({ ...prev, tono: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {TONOS.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Audiencia</label>
            <select
              value={config.audiencia}
              onChange={(e) => setConfig((prev) => ({ ...prev, audiencia: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {AUDIENCIAS.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">Extensión</label>
          <div className="flex flex-wrap gap-2">
            {EXTENSIONES.map((e) => (
              <button
                key={e.id}
                onClick={() => setConfig((prev) => ({ ...prev, extension: e.id }))}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                  config.extension === e.id
                    ? "bg-primary text-white dark:text-slate-900 border-primary"
                    : "bg-bg-secondary text-fg-secondary border-border hover:text-fg hover:border-border-strong"
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">Contexto adicional</label>
          <textarea
            value={config.contexto}
            onChange={(e) => setConfig((prev) => ({ ...prev, contexto: e.target.value }))}
            placeholder="Información adicional que la IA debe conocer..."
            rows={2}
            className="w-full px-3 py-2 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-warning" />
            <h3 className="text-sm font-semibold text-fg">Prompt generado</h3>
          </div>
          {generatedPrompt && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-bg-secondary border border-border text-fg-secondary hover:text-fg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          )}
        </div>

        <div className="flex-1 p-4 rounded-lg bg-bg-secondary border border-border min-h-[300px]">
          {generatedPrompt ? (
            <pre className="text-sm text-fg whitespace-pre-wrap font-sans leading-relaxed">
              {generatedPrompt}
            </pre>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Wand2 className="w-8 h-8 text-fg-muted mb-2" />
              <p className="text-sm text-fg-muted">
                Escribe una tarea para ver tu prompt generado
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
