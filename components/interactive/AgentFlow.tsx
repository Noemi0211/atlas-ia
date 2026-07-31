"use client";

import { useState, useCallback, useRef } from "react";
import { useProgress } from "@/stores/progress";
import { Plus, X, ArrowRight, GripVertical, Bot, Brain, Search, Wrench, Terminal } from "lucide-react";

type NodeType = "input" | "llm" | "rag" | "tool" | "output";

interface FlowNode {
  id: string;
  type: NodeType;
  label: string;
  config: string;
}

const NODE_TEMPLATES: { type: NodeType; label: string; icon: React.ReactNode; color: string; defaultConfig: string }[] = [
  { type: "input", label: "Entrada", icon: <Terminal className="w-4 h-4" />, color: "border-blue-500 bg-blue-500/10", defaultConfig: "Texto del usuario" },
  { type: "llm", label: "LLM", icon: <Brain className="w-4 h-4" />, color: "border-purple-500 bg-purple-500/10", defaultConfig: "gpt-4o-mini" },
  { type: "rag", label: "RAG", icon: <Search className="w-4 h-4" />, color: "border-emerald-500 bg-emerald-500/10", defaultConfig: "top_k: 5" },
  { type: "tool", label: "Herramienta", icon: <Wrench className="w-4 h-4" />, color: "border-orange-500 bg-orange-500/10", defaultConfig: "web_search" },
  { type: "output", label: "Salida", icon: <Bot className="w-4 h-4" />, color: "border-primary bg-primary/10", defaultConfig: "Respuesta formateada" },
];

export function AgentFlow() {
  const [nodes, setNodes] = useState<FlowNode[]>([
    { id: "node-0", type: "input", label: "Entrada", config: "Texto del usuario" },
    { id: "node-1", type: "llm", label: "LLM", config: "gpt-4o-mini" },
    { id: "node-2", type: "output", label: "Salida", config: "Respuesta formateada" },
  ]);
  const [draggedType, setDraggedType] = useState<NodeType | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pipelineCreated, setPipelineCreated] = useState(false);
  const counterRef = useRef(3);
  const { addBadge, addXP } = useProgress();

  const addNode = useCallback((type: NodeType) => {
    const template = NODE_TEMPLATES.find((n) => n.type === type);
    if (!template) return;
    const newNode: FlowNode = {
      id: `node-${counterRef.current++}`,
      type,
      label: template.label,
      config: template.defaultConfig,
    };
    setNodes((prev) => [...prev, newNode]);
  }, []);

  const removeNode = useCallback((id: string) => {
    setNodes((prev) => {
      const filtered = prev.filter((n) => n.id !== id);
      if (filtered.length >= 2 && !pipelineCreated) {
        setPipelineCreated(true);
        addBadge("arquitecto-flujos");
        addXP(50);
      }
      return filtered;
    });
  }, [pipelineCreated, addBadge, addXP]);

  const updateConfig = useCallback((id: string, config: string) => {
    setNodes((prev) => prev.map((n) => (n.id === id ? { ...n, config } : n)));
  }, []);

  const moveNode = useCallback((index: number, direction: "up" | "down") => {
    setNodes((prev) => {
      const arr = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= arr.length) return arr;
      [arr[index], arr[targetIndex]] = [arr[targetIndex], arr[index]];
      if (!pipelineCreated) {
        setTimeout(() => {
          setPipelineCreated(true);
          addBadge("arquitecto-flujos");
          addXP(50);
        }, 0);
      }
      return arr;
    });
  }, [pipelineCreated, addBadge, addXP]);

  const clearPipeline = useCallback(() => {
    setNodes([
      { id: "node-0", type: "input", label: "Entrada", config: "Texto del usuario" },
      { id: "node-1", type: "llm", label: "LLM", config: "gpt-4o-mini" },
      { id: "node-2", type: "output", label: "Salida", config: "Respuesta formateada" },
    ]);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-48 shrink-0 space-y-3">
        <h3 className="text-sm font-semibold text-fg flex items-center gap-2">
          <Plus className="w-4 h-4 text-primary" />
          Bloques
        </h3>
        <p className="text-xs text-fg-muted">Arrastra o haz clic para añadir</p>
        <div className="space-y-2">
          {NODE_TEMPLATES.map((t) => (
            <button
              key={t.type}
              draggable
              onDragStart={() => setDraggedType(t.type)}
              onClick={() => addNode(t.type)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-all ${t.color} hover:shadow-sm`}
            >
              {t.icon}
              <span className="text-fg">{t.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={clearPipeline}
          className="w-full px-3 py-2 rounded-lg border border-border text-xs text-fg-muted hover:text-fg hover:bg-bg-secondary transition-colors"
        >
          Limpiar
        </button>

        <div className="pt-3 border-t border-border">
          <h4 className="text-xs font-medium text-fg-secondary mb-2">Consejos</h4>
          <ul className="text-2xs text-fg-muted space-y-1 list-disc pl-4">
            <li>Ordena los nodos en secuencia</li>
            <li>Usa RAG para búsqueda</li>
            <li>Conecta herramientas al LLM</li>
            <li>Termina siempre con Salida</li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-6 rounded-xl border border-border bg-bg-secondary/30 min-h-[400px]">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-semibold text-fg">Pipeline de agente</h3>
          {nodes.length > 2 && (
            <span className="text-2xs text-fg-muted ml-auto">
              {nodes.length} nodos
            </span>
          )}
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          onDrop={(e) => {
            e.preventDefault();
            if (draggedType) {
              addNode(draggedType);
              setDraggedType(null);
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          {nodes.map((node, index) => {
            const template = NODE_TEMPLATES.find((n) => n.type === node.type);
            if (!template) return null;
            return (
              <div key={node.id} className="flex items-center gap-2">
                {index > 0 && (
                  <ArrowRight className="w-4 h-4 text-fg-muted shrink-0" />
                )}
                <div
                  className={`relative group px-4 py-3 rounded-xl border-2 ${template.color} bg-bg min-w-[160px]`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => moveNode(index, "up")}
                      disabled={index === 0}
                      className="text-fg-muted hover:text-fg disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <GripVertical className="w-3.5 h-3.5" />
                    </button>
                    {template.icon}
                    <span className="text-xs font-semibold text-fg">{node.label}</span>
                    <button
                      onClick={() => removeNode(node.id)}
                      className="ml-auto text-fg-muted hover:text-error transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {editingId === node.id ? (
                    <input
                      autoFocus
                      value={node.config}
                      onChange={(e) => updateConfig(node.id, e.target.value)}
                      onBlur={() => setEditingId(null)}
                      onKeyDown={(e) => e.key === "Enter" && setEditingId(null)}
                      className="w-full px-2 py-1 rounded border border-border bg-bg text-xs text-fg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  ) : (
                    <button
                      onClick={() => setEditingId(node.id)}
                      className="w-full text-left text-2xs text-fg-muted hover:text-fg-secondary truncate"
                    >
                      {node.config}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {nodes.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Bot className="w-10 h-10 text-fg-muted mb-3" />
            <p className="text-sm text-fg-muted">Arrastra bloques para crear tu flujo</p>
          </div>
        )}

        {nodes.length >= 2 && (
          <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-xs text-accent">
              {nodes.some((n) => n.type === "rag") && nodes.some((n) => n.type === "llm")
                ? " Pipeline RAG detectado: los datos recuperados se pasarán al contexto del LLM"
                : nodes.some((n) => n.type === "tool") && nodes.some((n) => n.type === "llm")
                ? " Pipeline herramienta+LLM: el LLM podrá usar la herramienta para obtener información"
                : " Pipeline básico: el flujo de datos sigue el orden de los nodos"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
