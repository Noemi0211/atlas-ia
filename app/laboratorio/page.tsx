"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AIChat } from "@/components/interactive/AIChat";
import { PromptSandbox } from "@/components/interactive/PromptSandbox";
import { AgentFlow } from "@/components/interactive/AgentFlow";
import { ModelComparator } from "@/components/interactive/ModelComparator";
import { TokenSimulator } from "@/components/interactive/TokenSimulator";
import {
  FlaskConical,
  Sparkles,
  MessageSquare,
  Wand2,
  Bot,
  BarChart3,
  Hash,
} from "lucide-react";

const TABS = [
  { id: "chat", label: "Chat IA", icon: MessageSquare, component: AIChat },
  { id: "prompts", label: "Sandbox de Prompts", icon: Wand2, component: PromptSandbox },
  { id: "agentflow", label: "Agent Flow", icon: Bot, component: AgentFlow },
  { id: "comparador", label: "Comparador", icon: BarChart3, component: ModelComparator },
  { id: "tokens", label: "Tokens", icon: Hash, component: TokenSimulator },
];

export default function LaboratorioPage() {
  const [activeTab, setActiveTab] = useState("chat");

  const ActiveComponent = TABS.find((t) => t.id === activeTab)?.component || AIChat;

  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: "Laboratorio" }]} className="mb-6" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary-light">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-fg">Laboratorio IA</h1>
            <p className="text-fg-secondary text-sm flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-warning" />
              Experimenta, prueba y aprende con herramientas interactivas
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white dark:text-slate-900 shadow-sm"
                  : "text-fg-secondary hover:text-fg hover:bg-bg-secondary border border-border"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-border bg-bg p-6">
        <ActiveComponent />
      </div>
    </div>
  );
}
