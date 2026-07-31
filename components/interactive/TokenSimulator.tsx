"use client";

import { useState, useMemo } from "react";
import { Hash, AlertCircle, Info } from "lucide-react";
import { useProgress } from "@/stores/progress";

const MODELS = [
  { id: "gpt-4o", label: "GPT-4o", context: 128000 },
  { id: "gpt-4o-mini", label: "GPT-4o mini", context: 128000 },
  { id: "claude-3.5", label: "Claude 3.5 Sonnet", context: 200000 },
  { id: "gemini-2.0", label: "Gemini 2.0 Flash", context: 1000000 },
  { id: "llama-3", label: "Llama 3 70B", context: 8192 },
  { id: "mistral", label: "Mistral Large", context: 128000 },
];

function estimateTokens(text: string): number {
  if (!text.trim()) return 0;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  return Math.ceil(wordCount * 1.3 + charCount * 0.05);
}

const EXAMPLES = [
  "El aprendizaje automático es un subcampo de la inteligencia artificial que permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente. Utiliza algoritmos que analizan datos, identifican patrones y toman decisiones con mínima intervención humana.",
  "Resume el siguiente texto en 3 párrafos: La inteligencia artificial ha transformado radicalmente la forma en que interactuamos con la tecnología. Desde asistentes virtuales hasta sistemas de recomendación, la IA está presente en casi todos los aspectos de nuestra vida digital. Los modelos de lenguaje grande (LLM) como GPT-4, Claude y Gemini representan el estado del arte en procesamiento de lenguaje natural.",
  "Eres un experto en IA. Explica el concepto de Transformers de manera sencilla para principiantes. Incluye ejemplos prácticos y menciona la importancia de la atención. Usa un tono divulgativo.",
];

const THRESHOLDS = [
  { limit: 0.75, color: "text-success", bg: "bg-success/10", border: "border-success/20", label: "Dentro del límite" },
  { limit: 0.9, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20", label: "Cerca del límite" },
  { limit: 1.0, color: "text-error", bg: "bg-error/10", border: "border-error/20", label: "Límite alcanzado" },
];

export function TokenSimulator() {
  const [text, setText] = useState("");
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const { addXP } = useProgress();

  const tokens = useMemo(() => estimateTokens(text), [text]);
  const usage = useMemo(() => tokens / selectedModel.context, [tokens, selectedModel.context]);
  const remaining = useMemo(() => Math.max(0, selectedModel.context - tokens), [selectedModel.context, tokens]);

  const threshold = THRESHOLDS.find((t) => usage <= t.limit) || THRESHOLDS[THRESHOLDS.length - 1];

  const handleExample = (example: string) => {
    setText(example);
    addXP(5);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Hash className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-fg">Simulador de tokens</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Texto de entrada</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe o pega texto aquí para estimar los tokens..."
              rows={10}
              className="w-full px-3 py-2 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="text-2xs text-fg-muted self-center">Ejemplos:</span>
            {EXAMPLES.map((ex, i) => (
              <button
                key={i}
                onClick={() => handleExample(ex)}
                className="px-2 py-1 rounded-md bg-bg-secondary border border-border text-2xs text-fg-muted hover:text-fg transition-colors"
              >
                Ejemplo {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-fg-secondary mb-1.5">Modelo</label>
            <select
              value={selectedModel.id}
              onChange={(e) => setSelectedModel(MODELS.find((m) => m.id === e.target.value) || MODELS[0])}
              className="w-full h-9 px-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.label} ({m.context.toLocaleString()} tokens)</option>
              ))}
            </select>
          </div>

          <div className={`p-4 rounded-lg border ${threshold.border} ${threshold.bg}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-fg">Tokens estimados</span>
              <span className={`text-lg font-bold ${threshold.color}`}>{tokens.toLocaleString()}</span>
            </div>

            <div className="h-3 rounded-full bg-bg-secondary overflow-hidden mb-2">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  usage > 0.9 ? "bg-error" : usage > 0.75 ? "bg-warning" : "bg-primary"
                }`}
                style={{ width: `${Math.min(usage * 100, 100)}%` }}
              />
            </div>

            <div className="flex justify-between text-2xs text-fg-muted">
              <span>0</span>
              <span>{selectedModel.context.toLocaleString()}</span>
            </div>

            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-fg-secondary">Contexto total</span>
                <span className="text-fg">{selectedModel.context.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-fg-secondary">Tokens usados</span>
                <span className={threshold.color}>{tokens.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-fg-secondary">Tokens restantes</span>
                <span className="text-fg">{remaining.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-fg-secondary">Uso</span>
                <span className={threshold.color}>{(usage * 100).toFixed(1)}%</span>
              </div>
            </div>

            <div className={`flex items-center gap-1.5 mt-3 text-2xs ${threshold.color}`}>
              {usage > 0.9 ? (
                <AlertCircle className="w-3 h-3" />
              ) : (
                <Info className="w-3 h-3" />
              )}
              {usage > 0.9
                ? "El texto excede o está muy cerca del límite de contexto"
                : threshold.label}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-bg-secondary border border-border">
            <h4 className="text-2xs font-medium text-fg-secondary mb-1">¿Cómo se calcula?</h4>
            <p className="text-2xs text-fg-muted leading-relaxed">
              Estimación basada en ~1.3 tokens por palabra + 0.05 tokens por carácter.
              El conteo real varía según el tokenizador de cada modelo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
