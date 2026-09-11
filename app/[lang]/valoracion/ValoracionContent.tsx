"use client";

import { useCallback, useEffect, useState } from "react";
import { Star, Send, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

interface OwnFeedback {
  score: number;
  category: string | null;
  comment: string | null;
}

interface SuggestionItem {
  id: string;
  title: string;
  description: string;
  category: string | null;
  status: string;
  createdAt: string;
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

export function ValoracionContent() {
  const { t } = useI18n();
  const unlockColaboradorBadge = useProgress((s) => s.unlockColaboradorBadge);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingCategory, setRatingCategory] = useState("");
  const [ratingComment, setRatingComment] = useState("");
  const [ownFeedback, setOwnFeedback] = useState<OwnFeedback | null>(null);
  const [media, setMedia] = useState(0);
  const [total, setTotal] = useState(0);
  const [ratingStatus, setRatingStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [ratingMessage, setRatingMessage] = useState("");

  const [suggTitle, setSuggTitle] = useState("");
  const [suggCategory, setSuggCategory] = useState("");
  const [suggDesc, setSuggDesc] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [suggStatus, setSuggStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [suggMessage, setSuggMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      const [feedbackRes, suggestionsRes] = await Promise.all([
        fetch("/api/feedback"),
        fetch("/api/suggestions"),
      ]);
      if (!feedbackRes.ok || !suggestionsRes.ok) throw new Error();
      const feedback = await feedbackRes.json();
      const suggs = await suggestionsRes.json();
      if (feedback.own) {
        setOwnFeedback(feedback.own);
        setRating(feedback.own.score);
        setRatingCategory(feedback.own.category ?? "");
        setRatingComment(feedback.own.comment ?? "");
      }
      setMedia(feedback.media);
      setTotal(feedback.total);
      setSuggestions(suggs.suggestions ?? []);
    } catch {
      // Sin estado crítico: los formularios siguen utilizables.
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

  async function submitRating() {
    if (rating < 1 || rating > 5) {
      setRatingStatus("error");
      setRatingMessage(t.feedback.errors.ratingInvalid);
      return;
    }
    setRatingStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          score: rating,
          category: ratingCategory || null,
          comment: ratingComment.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "");
      const wasUpdate = ownFeedback !== null;
      setOwnFeedback({
        score: rating,
        category: ratingCategory || null,
        comment: ratingComment.trim() || null,
      });
      setRatingStatus("success");
      setRatingMessage(
        wasUpdate ? t.feedback.ratingUpdated : t.feedback.ratingSuccess
      );
      void loadData();
    } catch {
      setRatingStatus("error");
      setRatingMessage(t.feedback.errors.generic);
    }
  }

  async function submitSuggestion() {
    if (!suggTitle.trim()) {
      setSuggStatus("error");
      setSuggMessage(t.feedback.errors.titleRequired);
      return;
    }
    if (!suggDesc.trim()) {
      setSuggStatus("error");
      setSuggMessage(t.feedback.errors.descRequired);
      return;
    }
    setSuggStatus("loading");
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: suggTitle,
          description: suggDesc,
          category: suggCategory || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "");
      unlockColaboradorBadge();
      setSuggTitle("");
      setSuggCategory("");
      setSuggDesc("");
      setSuggStatus("success");
      if (suggestions.length === 0) {
        setSuggMessage(`${t.feedback.suggestionSuccess} ${t.feedback.suggestionXp}`);
      } else {
        setSuggMessage(t.feedback.suggestionSuccess);
      }
      void loadData();
    } catch {
      setSuggStatus("error");
      setSuggMessage(t.feedback.errors.generic);
    }
  }

  const categoryLabel = (key: string | null) =>
    key && (CATEGORY_KEYS as readonly string[]).includes(key)
      ? t.feedback.categories[key as (typeof CATEGORY_KEYS)[number]]
      : null;

  const statusLabel = (status: string) => {
    if (status === "pending") return t.feedback.statuses.pending;
    if (status === "revisada") return t.feedback.statuses.revisada;
    return t.feedback.statuses.implementada;
  };

  const inputClass =
    "w-full h-10 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30";
  const textareaClass =
    "w-full rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 px-3 py-2";

  return (
    <div className="grid gap-6 lg:grid-cols-2 items-start">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              {t.feedback.ratingTitle}
            </CardTitle>
            <CardDescription>
              {ownFeedback ? t.feedback.ratingExisting : t.feedback.ratingIntro}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-1" role="group" aria-label={t.feedback.ratingTitle}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => {
                const active = value <= (hoverRating || rating);
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={t.feedback.starAria.replace("{value}", String(value))}
                    aria-pressed={active}
                    className="p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                  >
                    <Star
                      className={cn(
                        "w-7 h-7 transition-colors",
                        active ? "text-amber-400 fill-amber-400" : "text-fg-muted"
                      )}
                    />
                  </button>
                );
              })}
              <span className="ml-2 text-sm text-fg-secondary">
                {rating > 0 ? `${rating}/5` : "—"}
              </span>
            </div>

            <div>
              <label htmlFor="feedback-category" className="block text-xs font-medium text-fg-secondary mb-1.5">
                {t.feedback.categoryLabel}
              </label>
              <select
                id="feedback-category"
                value={ratingCategory}
                onChange={(e) => setRatingCategory(e.target.value)}
                className={inputClass}
              >
                <option value="">{t.feedback.categoryPlaceholder}</option>
                {CATEGORY_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t.feedback.categories[key]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="feedback-comment" className="block text-xs font-medium text-fg-secondary mb-1.5">
                {t.feedback.commentLabel}
              </label>
              <textarea
                id="feedback-comment"
                value={ratingComment}
                onChange={(e) => setRatingComment(e.target.value)}
                maxLength={300}
                rows={3}
                placeholder={t.feedback.commentPlaceholder}
                className={textareaClass}
              />
              <p className="text-2xs text-fg-muted mt-1">{ratingComment.length}/300</p>
            </div>

            <Button
              onClick={() => void submitRating()}
              disabled={ratingStatus === "loading"}
              className="w-full lg:w-auto"
            >
              <Send className="w-4 h-4" />
              {ownFeedback ? t.feedback.updateRating : t.feedback.submitRating}
            </Button>

            {ratingMessage && (
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "text-sm",
                  ratingStatus === "error" ? "text-error" : "text-accent"
                )}
              >
                {ratingMessage}
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              {t.feedback.suggestionsTitle}
            </CardTitle>
            <CardDescription>{t.feedback.suggestionsIntro}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="sugg-title" className="block text-xs font-medium text-fg-secondary mb-1.5">
                {t.feedback.suggestionTitleLabel}
              </label>
              <input
                id="sugg-title"
                value={suggTitle}
                onChange={(e) => setSuggTitle(e.target.value)}
                maxLength={120}
                placeholder={t.feedback.suggestionTitlePlaceholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="sugg-category" className="block text-xs font-medium text-fg-secondary mb-1.5">
                {t.feedback.suggestionCategoryLabel}
              </label>
              <select
                id="sugg-category"
                value={suggCategory}
                onChange={(e) => setSuggCategory(e.target.value)}
                className={inputClass}
              >
                <option value="">{t.feedback.categoryPlaceholder}</option>
                {CATEGORY_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t.feedback.categories[key]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="sugg-desc" className="block text-xs font-medium text-fg-secondary mb-1.5">
                {t.feedback.suggestionDescLabel}
              </label>
              <textarea
                id="sugg-desc"
                value={suggDesc}
                onChange={(e) => setSuggDesc(e.target.value)}
                maxLength={600}
                rows={3}
                placeholder={t.feedback.suggestionDescPlaceholder}
                className={textareaClass}
              />
              <p className="text-2xs text-fg-muted mt-1">{suggDesc.length}/600</p>
            </div>

            <Button
              onClick={() => void submitSuggestion()}
              disabled={suggStatus === "loading"}
              className="w-full lg:w-auto"
            >
              <Sparkles className="w-4 h-4" />
              {t.feedback.submitSuggestion}
            </Button>

            {suggMessage && (
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "text-sm",
                  suggStatus === "error" ? "text-error" : "text-accent"
                )}
              >
                {suggMessage}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.feedback.globalAverage}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-fg-muted">{t.feedback.loading}</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-fg">{media.toFixed(1)}/5</p>
                  <p className="text-2xs text-fg-muted">{t.feedback.globalAverage}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-fg">{total}</p>
                  <p className="text-2xs text-fg-muted">{t.feedback.totalRatings}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-fg">
                    {ownFeedback ? `${ownFeedback.score}/5` : "—"}
                  </p>
                  <p className="text-2xs text-fg-muted">{t.feedback.yourRating}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.feedback.mySuggestions}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-fg-muted">{t.feedback.loading}</p>
            ) : suggestions.length === 0 ? (
              <p className="text-sm text-fg-muted">{t.feedback.noSuggestions}</p>
            ) : (
              <ul className="space-y-3">
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    className="rounded-lg border border-border bg-bg-secondary p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-medium text-fg">{s.title}</h4>
                      <Badge variant={STATUS_VARIANT[s.status] ?? "default"}>
                        {statusLabel(s.status)}
                      </Badge>
                    </div>
                    {categoryLabel(s.category) && (
                      <p className="text-2xs text-fg-muted mt-1">
                        {categoryLabel(s.category)}
                      </p>
                    )}
                    <p className="text-sm text-fg-secondary mt-1 line-clamp-2">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}