"use client";

import { useProgress } from "@/stores/progress";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";

interface FavoriteButtonProps {
  lessonId: string;
  className?: string;
}

export function FavoriteButton({ lessonId, className }: FavoriteButtonProps) {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useProgress();
  const isFavorite = favorites.includes(lessonId);

  return (
    <button
      onClick={() => toggleFavorite(lessonId)}
      className={cn(
        "p-2 rounded-lg transition-all",
        isFavorite
          ? "text-error hover:text-error/80"
          : "text-fg-muted hover:text-fg hover:bg-bg-secondary",
        className
      )}
      aria-label={isFavorite ? t.leccion.quitarFavoritos : t.leccion.anadirFavoritos}
    >
      <Heart
        className={cn("w-5 h-5", isFavorite && "fill-current")}
      />
    </button>
  );
}
