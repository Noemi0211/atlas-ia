"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AIChat } from "@/components/interactive/AIChat";
import { PromptSandbox } from "@/components/interactive/PromptSandbox";
import { AgentFlow } from "@/components/interactive/AgentFlow";
import { ModelComparator } from "@/components/interactive/ModelComparator";
import { TokenSimulator } from "@/components/interactive/TokenSimulator";
import { useI18n } from "@/lib/i18n/provider";
import {
  FlaskConical,
  Sparkles,
  MessageSquare,
  Wand2,
  Bot,
  BarChart3,
  Hash,
} from "lucide-react";

export default function LaboratorioPage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState("chat");

  const TABS = [
    { id: "chat", label: t.laboratorio.tabs.chat, icon: MessageSquare, component: AIChat },
    { id: "prompts", label: t.laboratorio.tabs.prompts, icon: Wand2, component: PromptSandbox },
    { id: "agentflow", label: t.laboratorio.tabs.agentes, icon: Bot, component: AgentFlow },
    { id: "comparador", label: t.laboratorio.tabs.comparador, icon: BarChart3, component: ModelComparator },
    { id: "tokens", label: t.laboratorio.tabs.tokens, icon: Hash, component: TokenSimulator },
  ];

  const ActiveComponent = TABS.find((tab) => tab.id === activeTab)?.component || AIChat;

  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: t.laboratorio.title }]} className="mb-6" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary-light">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-fg">{t.laboratorio.title}</h1>
            <p className="text-fg-secondary text-sm flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-warning" />
              {t.laboratorio.subtitle}
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
