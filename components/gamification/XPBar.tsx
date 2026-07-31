"use client";

import { useProgress, BADGES } from "@/stores/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Flame, Star, Target } from "lucide-react";

export function XPBar() {
  const { xp, currentStreak, completedLessons, badges } = useProgress();
  const xpForNextLevel = Math.ceil(xp / 100 + 1) * 100;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Trophy className="w-4 h-4 text-warning" />
          Tu progreso
        </CardTitle>
      </CardHeader>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm text-fg-secondary">
              <Star className="w-3.5 h-3.5 inline mr-1 text-warning" />
              {xp} XP
            </span>
            <span className="text-xs text-fg-muted">
              Siguiente nivel: {xpForNextLevel} XP
            </span>
          </div>
          <ProgressBar value={xp} max={xpForNextLevel} size="md" color="primary" />
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-fg-secondary">
            <Target className="w-4 h-4 text-accent" />
            <span>{completedLessons.length} lecciones</span>
          </div>
          {currentStreak > 0 && (
            <div className="flex items-center gap-1.5 text-fg-secondary">
              <Flame className="w-4 h-4 text-error" />
              <span>{currentStreak} días</span>
            </div>
          )}
        </div>

        {badges.length > 0 && (
          <div>
            <p className="text-xs text-fg-muted mb-2">Insignias</p>
            <div className="flex flex-wrap gap-1.5">
              {badges.map((badgeId) => {
                const badge = BADGES[badgeId];
                if (!badge) return null;
                return (
                  <Badge key={badgeId} variant="primary" size="sm">
                    {badge.icono} {badge.nombre}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
