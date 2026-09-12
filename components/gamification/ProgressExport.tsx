"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useProgress } from "@/stores/progress";
import { createSnapshot, parseSnapshot, type ProgressData } from "@/lib/progress-export";
import { useI18n } from "@/lib/i18n/provider";

type Feedback = { type: "success" | "error"; message: string } | null;

function pickProgressData(): ProgressData {
  const s = useProgress.getState();
  return {
    completedLessons: s.completedLessons,
    xp: s.xp,
    badges: s.badges,
    favorites: s.favorites,
    notes: s.notes,
    currentStreak: s.currentStreak,
    lastVisit: s.lastVisit,
    challenges: s.challenges,
    projects: s.projects,
    notifications: s.notifications,
    comparedTools: s.comparedTools,
    arbolCompletado: s.arbolCompletado,
    calculadoraUsada: s.calculadoraUsada,
    quizBest: s.quizBest,
    quizPerfect: s.quizPerfect,
    colaboradorBadge: s.colaboradorBadge,
    cursoCompletadoAt: s.cursoCompletadoAt,
  };
}

export function ProgressExport() {
  const { t } = useI18n();
  const inputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const handleExport = () => {
    const snapshot = createSnapshot(pickProgressData());
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `atlas-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setFeedback({ type: "success", message: t.perfilExport.exportSuccess });
  };

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      const result = parseSnapshot(text);
      if (!result.ok) {
        const errors = t.perfilExport.errors;
        const message =
          result.reason === "not-json"
            ? errors.notJson
            : result.reason === "invalid-schema"
              ? errors.invalidSchema
              : result.reason === "future-version"
                ? errors.futureVersion
                : errors.invalidData;
        setFeedback({ type: "error", message });
        return;
      }
      setFeedback({ type: "success", message: t.perfilExport.importSuccess });
      useProgress.setState(result.snapshot.data);
    };
    reader.onerror = () => {
      setFeedback({ type: "error", message: t.perfilExport.errors.generic });
    };
    reader.readAsText(file);
  };

  const handleImportClick = () => {
    inputRef.current?.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Download className="w-4 h-4 text-primary" />
          {t.perfilExport.title}
        </CardTitle>
        <CardDescription>{t.perfilExport.description}</CardDescription>
      </CardHeader>

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="w-4 h-4" />
          {t.perfilExport.exportLabel}
        </Button>
        <Button onClick={handleImportClick} variant="outline" size="sm">
          <Upload className="w-4 h-4" />
          {t.perfilExport.importLabel}
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept=".json,application/json"
          className="sr-only"
          aria-label={t.perfilExport.importLabel}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileChange(file);
            e.target.value = "";
          }}
        />
      </div>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-sm ${
            feedback.type === "success" ? "text-accent" : "text-error"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </Card>
  );
}