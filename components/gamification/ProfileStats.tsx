"use client";

import { BookOpen, Flame, Star, Award, Zap, Target } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useProgress, BADGES } from "@/stores/progress";
import { BLOQUES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/provider";
import { getBadgeText } from "@/lib/i18n/data";

export function ProfileStats() {
  const { t } = useI18n();
  const { xp, currentStreak, completedLessons, badges, projects } = useProgress();

  const completedProjects = projects.filter((p) => p.completed).length;
  const totalLessons = BLOQUES.reduce((acc, b) => acc + b.lecciones, 0);
  const completionPercent = Math.round((completedLessons.length / totalLessons) * 100);

  const level = Math.floor(xp / 500) + 1;
  const xpForNextLevel = level * 500;
  const xpInLevel = xp - (level - 1) * 500;

  const recentBadges = badges.slice(-4).reverse();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Star className="w-4 h-4 text-warning" />
            {t.gamification.profile.levelAndXp}
          </CardTitle>
        </CardHeader>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{level}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">{t.gamification.profile.level} {level}</p>
                <p className="text-2xs text-fg-muted">{xp} {t.gamification.profile.totalXp}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-fg-muted">{t.gamification.profile.level} {level}</span>
              <span className="text-fg-muted">{t.gamification.profile.level} {level + 1}</span>
            </div>
            <ProgressBar value={xpInLevel} max={500} size="md" color="primary" />
            <p className="text-2xs text-fg-muted mt-1 text-center">
              {xpForNextLevel - xp} {t.gamification.profile.xpToNextLevel}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Target className="w-4 h-4 text-accent" />
            {t.gamification.profile.stats}
          </CardTitle>
        </CardHeader>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-bg-secondary text-center">
            <BookOpen className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-fg">{completedLessons.length}</p>
            <p className="text-2xs text-fg-muted">{t.gamification.profile.lessons}</p>
          </div>
          <div className="p-3 rounded-lg bg-bg-secondary text-center">
            <Flame className="w-4 h-4 text-error mx-auto mb-1" />
            <p className="text-lg font-bold text-fg">{currentStreak}</p>
            <p className="text-2xs text-fg-muted">{t.gamification.profile.streak}</p>
          </div>
          <div className="p-3 rounded-lg bg-bg-secondary text-center">
            <Award className="w-4 h-4 text-purple mx-auto mb-1" />
            <p className="text-lg font-bold text-fg">{badges.length}</p>
            <p className="text-2xs text-fg-muted">{t.gamification.profile.badges}</p>
          </div>
          <div className="p-3 rounded-lg bg-bg-secondary text-center">
            <Zap className="w-4 h-4 text-warning mx-auto mb-1" />
            <p className="text-lg font-bold text-fg">{completedProjects}</p>
            <p className="text-2xs text-fg-muted">{t.gamification.profile.projects}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-fg-muted">{t.gamification.profile.totalProgress}</span>
            <span className="text-fg-secondary font-medium">{completionPercent}%</span>
          </div>
          <ProgressBar value={completionPercent} size="md" color="accent" />
        </div>
      </Card>

      {recentBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-warning" />
              {t.gamification.profile.recentBadges}
            </CardTitle>
          </CardHeader>
          <div className="flex flex-wrap gap-2">
            {recentBadges.map((badgeId) => {
              const badge = BADGES[badgeId];
              if (!badge) return null;
              return (
                <div
                  key={badgeId}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                  title={getBadgeText(t, badgeId)?.descripcion}
                >
                  <span className="text-sm">{badge.icono}</span>
                  <span className="text-xs font-medium text-primary">{getBadgeText(t, badgeId)?.nombre}</span>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
