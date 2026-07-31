"use client";

import { useProgress } from "@/stores/progress";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  lessonId: string;
  className?: string;
}

export function FavoriteButton({ lessonId, className }: FavoriteButtonProps) {
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
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <Heart
        className={cn("w-5 h-5", isFavorite && "fill-current")}
      />
    </button>
  );
}
