"use client";

import { useState, useCallback, useMemo } from "react";
import { useProgress } from "@/stores/progress";
import { Copy, Check, Wand2, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import {
  getRoles,
  getFormatos,
  getTonos,
  getAudiencias,
  getExtensiones,
  generarPromptLocalizado,
} from "@/lib/i18n/data";

export function PromptSandbox() {
  const { t } = useI18n();
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

  const roles = useMemo(() => getRoles(t), [t]);
  const formatos = useMemo(() => getFormatos(t), [t]);
  const tonos = useMemo(() => getTonos(t), [t]);
  const audiencias = useMemo(() => getAudiencias(t), [t]);
  const extensiones = useMemo(() => getExtensiones(t), [t]);
  const suggestions = useMemo(() => t.lab.promptSandbox.suggestions, [t]);

  const generatedPrompt = config.tarea.trim()
    ? generarPromptLocalizado(t, config)
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

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-fg">{t.lab.promptSandbox.title}</h3>
        </div>

        <div>
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.task}</label>
          <textarea
            value={config.tarea}
            onChange={(e) => setConfig((prev) => ({ ...prev, tarea: e.target.value }))}
            placeholder={t.lab.promptSandbox.taskPlaceholder}
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
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.role}</label>
            <select
              value={config.rol}
              onChange={(e) => setConfig((prev) => ({ ...prev, rol: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {roles.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.format}</label>
            <select
              value={config.formato}
              onChange={(e) => setConfig((prev) => ({ ...prev, formato: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {formatos.map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.tone}</label>
            <select
              value={config.tono}
              onChange={(e) => setConfig((prev) => ({ ...prev, tono: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {tonos.map((tn) => (
                <option key={tn.id} value={tn.id}>{tn.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.audience}</label>
            <select
              value={config.audiencia}
              onChange={(e) => setConfig((prev) => ({ ...prev, audiencia: e.target.value }))}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {audiencias.map((a) => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.extension}</label>
          <div className="flex flex-wrap gap-2">
            {extensiones.map((e) => (
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
          <label className="block text-xs font-medium text-fg-secondary mb-1.5">{t.lab.promptSandbox.context}</label>
          <textarea
            value={config.contexto}
            onChange={(e) => setConfig((prev) => ({ ...prev, contexto: e.target.value }))}
            placeholder={t.lab.promptSandbox.contextPlaceholder}
            rows={2}
            className="w-full px-3 py-2 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-warning" />
            <h3 className="text-sm font-semibold text-fg">{t.lab.promptSandbox.generated}</h3>
          </div>
          {generatedPrompt && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-bg-secondary border border-border text-fg-secondary hover:text-fg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? t.lab.promptSandbox.copied : t.lab.promptSandbox.copy}
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
                {t.lab.promptSandbox.emptyHint}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
