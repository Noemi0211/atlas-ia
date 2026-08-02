"use client";

import { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check, RotateCcw, Sparkles } from "lucide-react";
import { useProgress } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";
import {
  getRoles,
  getFormatos,
  getTonos,
  getAudiencias,
  getExtensiones,
  generarPromptLocalizado,
} from "@/lib/i18n/data";

export function CalculadoraPrompts() {
  const { t } = useI18n();
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

  const roles = useMemo(() => getRoles(t), [t]);
  const formatos = useMemo(() => getFormatos(t), [t]);
  const tonos = useMemo(() => getTonos(t), [t]);
  const audiencias = useMemo(() => getAudiencias(t), [t]);
  const extensiones = useMemo(() => getExtensiones(t), [t]);

  const handleGenerar = useCallback(() => {
    if (!tarea.trim()) return;

    const prompt = generarPromptLocalizado(t, {
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
  }, [t, tarea, rol, formato, tono, audiencia, extension, contexto, yaDesbloqueado, unlockCalculadoraBadge]);

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

  const [generateHintBefore, generateHintAfter] =
    t.lab.calculadora.generateHint.split("{strong}");

  return (
    <div className="my-8 p-6 bg-bg-secondary border border-border rounded-2xl">
      <h3 className="text-xl font-bold text-fg mb-4">
        {t.lab.calculadora.title}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-fg">
              {t.lab.calculadora.describeTask} <span className="text-red-400">*</span>
            </span>
            <textarea
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder={t.lab.calculadora.taskPlaceholder}
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg placeholder:text-fg-muted text-sm resize-none focus:outline-none focus:border-primary"
              rows={3}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-fg">{t.lab.calculadora.role}</span>
            <select
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
            >
              {roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
            {rol !== "ninguno" && (
              <p className="text-xs text-fg-muted mt-1">
                {roles.find((r) => r.id === rol)?.descripcion}
              </p>
            )}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-fg">
              {t.lab.calculadora.context}
            </span>
            <textarea
              value={contexto}
              onChange={(e) => setContexto(e.target.value)}
              placeholder={t.lab.calculadora.contextPlaceholder}
              className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg placeholder:text-fg-muted text-sm resize-none focus:outline-none focus:border-primary"
              rows={2}
            />
          </label>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-medium text-fg">{t.lab.calculadora.format}</span>
              <select
                value={formato}
                onChange={(e) => setFormato(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">{t.lab.calculadora.noPreference}</option>
                {formatos.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-fg">{t.lab.calculadora.tone}</span>
              <select
                value={tono}
                onChange={(e) => setTono(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">{t.lab.calculadora.noPreference}</option>
                {tonos.map((tn) => (
                  <option key={tn.id} value={tn.id}>
                    {tn.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-medium text-fg">{t.lab.calculadora.audience}</span>
              <select
                value={audiencia}
                onChange={(e) => setAudiencia(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">{t.lab.calculadora.noPreference}</option>
                {audiencias.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-fg">{t.lab.calculadora.extension}</span>
              <select
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
                className="mt-1 w-full p-3 bg-bg border border-border rounded-lg text-fg text-sm focus:outline-none focus:border-primary"
              >
                <option value="">{t.lab.calculadora.noPreference}</option>
                {extensiones.map((ext) => (
                  <option key={ext.id} value={ext.id}>
                    {ext.label}
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
              {t.lab.calculadora.generate}
            </button>
            {tieneConfiguracion && (
              <button
                onClick={handleReiniciar}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-fg-muted hover:text-fg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                {t.lab.calculadora.reset}
              </button>
            )}
          </div>
        </div>
      </div>

      {promptGenerado && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-fg">{t.lab.calculadora.generated}</h4>
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
                  <Check className="w-3.5 h-3.5" /> {t.lab.calculadora.copied}
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> {t.lab.calculadora.copy}
                </>
              )}
            </button>
          </div>
          <pre className="p-4 bg-bg border border-border rounded-xl text-sm text-fg whitespace-pre-wrap font-mono">
            {promptGenerado}
          </pre>
          <p className="mt-2 text-xs text-fg-muted">
            {t.lab.calculadora.copyHint}
          </p>
        </div>
      )}

      {!promptGenerado && tarea.trim() && (
        <div className="mt-4 text-center text-sm text-fg-muted">
          {generateHintBefore}
          <strong>{t.lab.calculadora.generate}</strong>
          {generateHintAfter}
        </div>
      )}

      <div className="mt-4 text-xs text-fg-muted">
        <p>
          {t.lab.calculadora.footer}
        </p>
      </div>
    </div>
  );
}
