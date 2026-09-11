export const FEEDBACK_CATEGORIES = [
  "contenido",
  "dificultad",
  "diseno",
  "usabilidad",
  "tecnico",
  "otros",
] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];

export const SUGGESTION_STATUSES = [
  "pending",
  "revisada",
  "implementada",
] as const;

export type SuggestionStatus = (typeof SUGGESTION_STATUSES)[number];

export function isFeedbackCategory(value: unknown): value is FeedbackCategory {
  return (
    typeof value === "string" &&
    (FEEDBACK_CATEGORIES as readonly string[]).includes(value)
  );
}

export function isSuggestionStatus(value: unknown): value is SuggestionStatus {
  return (
    typeof value === "string" &&
    (SUGGESTION_STATUSES as readonly string[]).includes(value)
  );
}