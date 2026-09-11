"use client";

import { useCallback, useEffect, useState } from "react";
import { Star, Trash2, RefreshCcw, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface Rating {
  score: number;
  category: string | null;
  comment: string | null;
  createdAt: string;
  user: { name: string | null; email: string } | null;
}

interface Suggestion {
  id: string;
  title: string;
  description: string;
  category: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  user?: { name: string | null; email: string } | null;
}

const CATEGORY_KEYS = [
  "contenido",
  "dificultad",
  "diseno",
  "usabilidad",
  "tecnico",
  "otros",
] as const;

const STATUS_VARIANT: Record<string, "warning" | "accent" | "primary"> = {
  pending: "warning",
  revisada: "accent",
  implementada: "primary",
};

export function DocenciaFeedback() {
  const { t } = useI18n();
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionStatus, setActionStatus] = useState<
    "idle" | "updating" | "error"
  >("idle");
  const [actionMessage, setActionMessage] = useState("");

  const loadData = useCallback(async () => {
    try {
      const [feedbackRes, suggestionsRes] = await Promise.all([
        fetch("/api/feedback"),
        fetch("/api/suggestions"),
      ]);
      if (!feedbackRes.ok || !suggestionsRes.ok) throw new Error();
      const feedback = await feedbackRes.json();
      const suggs = await suggestionsRes.json();
      setRatings(feedback.ratings ?? []);
      setSuggestions(suggs.suggestions ?? []);
    } catch {
      /* noop */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadData]);

  async function updateSuggestionStatus(id: string, status: string) {
    setActionStatus("updating");
    try {
      const res = await fetch(`/api/suggestions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      setActionStatus("idle");
      setActionMessage(t.feedback.docente.updated);
      void loadData();
    } catch {
      setActionStatus("error");
      setActionMessage(t.feedback.errors.generic);
    }
  }

  async function deleteSuggestion(id: string) {
    setActionStatus("updating");
    try {
      const res = await fetch(`/api/suggestions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setActionStatus("idle");
      setActionMessage(t.feedback.docente.deleted);
      void loadData();
    } catch {
      setActionStatus("error");
      setActionMessage(t.feedback.errors.generic);
    }
  }

  const pendingCount = suggestions.filter((s) => s.status === "pending").length;
  const categoryLabel = (key: string | null) =>
    key && (CATEGORY_KEYS as readonly string[]).includes(key)
      ? t.feedback.categories[key as (typeof CATEGORY_KEYS)[number]]
      : null;
  const statusLabel = (status: string) => {
    if (status === "pending") return t.feedback.statuses.pending;
    if (status === "revisada") return t.feedback.statuses.revisada;
    return t.feedback.statuses.implementada;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              {t.feedback.docente.summaryTotal}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">
            {loading ? "—" : ratings.length}
          </p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              {t.feedback.docente.summaryMedia}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">
            {loading || ratings.length === 0
              ? "—"
              : `${Math.round((ratings.reduce((acc, r) => acc + r.score, 0) / ratings.length) * 10) / 10}/5`}
          </p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 text-warning" />
              {t.feedback.docente.summaryPending}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">
            {loading ? "—" : pendingCount}
          </p>
        </Card>
      </div>

      {actionMessage && (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-sm",
            actionStatus === "error" ? "text-error" : "text-accent"
          )}
        >
          {actionMessage}
        </p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{t.feedback.docente.ratingsList}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-fg-secondary">
              <Loader2 className="w-5 h-5 animate-spin" />
              {t.feedback.loading}
            </div>
          ) : ratings.length === 0 ? (
            <p className="text-sm text-fg-muted text-center py-8">{t.feedback.docente.noRatings}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-2xs uppercase tracking-wider text-fg-muted border-b border-border">
                    <th className="px-3 py-2 font-semibold">{t.feedback.docente.user}</th>
                    <th className="px-3 py-2 font-semibold">{t.feedback.docente.stars}</th>
                    <th className="px-3 py-2 font-semibold">{t.feedback.docente.category}</th>
                    <th className="px-3 py-2 font-semibold">{t.feedback.docente.comment}</th>
                    <th className="px-3 py-2 font-semibold">{t.feedback.docente.date}</th>
                  </tr>
                </thead>
                <tbody>
                  {ratings.map((r, i) => (
                    <tr
                      key={`${r.user?.email ?? i}-${r.createdAt}`}
                      className="border-b border-border/60"
                    >
                      <td className="px-3 py-2">
                        <p className="font-medium text-fg truncate max-w-[160px]">
                          {r.user?.name ?? r.user?.email ?? "—"}
                        </p>
                        {r.user?.name && (
                          <p className="text-2xs text-fg-muted truncate">{r.user.email}</p>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => i + 1).map((v) => (
                            <Star
                              key={v}
                              className={cn(
                                "w-3.5 h-3.5",
                                v <= r.score
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-fg-muted/30"
                              )}
                            />
                          ))}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-fg-secondary">
                        {categoryLabel(r.category) ?? "—"}
                      </td>
                      <td className="px-3 py-2 text-fg-secondary truncate max-w-[200px]">
                        {r.comment || "—"}
                      </td>
                      <td className="px-3 py-2 text-fg-muted whitespace-nowrap">
                        {new Date(r.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t.feedback.docente.suggestionsList}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-fg-secondary">
              <Loader2 className="w-5 h-5 animate-spin" />
              {t.feedback.loading}
            </div>
          ) : suggestions.length === 0 ? (
            <p className="text-sm text-fg-muted text-center py-8">{t.feedback.docente.noSuggestions}</p>
          ) : (
            <ul className="space-y-3">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="rounded-lg border border-border bg-bg-secondary p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-fg">{s.title}</h4>
                        <Badge variant={STATUS_VARIANT[s.status] ?? "default"}>
                          {statusLabel(s.status)}
                        </Badge>
                      </div>
                      {s.user && (
                        <p className="text-2xs text-fg-muted mt-0.5">
                          {s.user.name ?? s.user.email}
                        </p>
                      )}
                      {categoryLabel(s.category) && (
                        <p className="text-2xs text-fg-muted">
                          {categoryLabel(s.category)}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-fg-secondary mt-2">{s.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    {s.status !== "revisada" && (
                      <button
                        onClick={() => void updateSuggestionStatus(s.id, "revisada")}
                        disabled={actionStatus === "updating"}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-bg border border-border text-xs font-medium text-fg-secondary hover:text-fg hover:bg-bg-tertiary transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.feedback.docente.markReviewed}
                      </button>
                    )}
                    {s.status !== "implementada" && (
                      <button
                        onClick={() => void updateSuggestionStatus(s.id, "implementada")}
                        disabled={actionStatus === "updating"}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary text-white dark:text-slate-900 text-xs font-medium hover:bg-primary-hover transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.feedback.docente.markImplemented}
                      </button>
                    )}
                    <button
                      onClick={() => void deleteSuggestion(s.id)}
                      disabled={actionStatus === "updating"}
                      className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-error/10 text-error text-xs font-medium hover:bg-error/20 transition-colors"
                      aria-label={`${t.feedback.docente.delete} ${s.title}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {t.feedback.docente.delete}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}