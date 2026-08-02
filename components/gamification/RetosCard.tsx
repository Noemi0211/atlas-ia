"use client";

import { useEffect, useState } from "react";
import { Zap, Clock, CheckCircle, Flame, Target } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useProgress, Challenge } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";

function getTimeLeft(expiresAt: string, t: ReturnType<typeof useI18n>["t"]): string {
  const now = Date.now();
  const diff = new Date(expiresAt).getTime() - now;
  if (diff <= 0) return t.gamification.retos.expired;
  const hours = Math.ceil(diff / 3600000);
  if (hours < 24) return `${hours}${t.gamification.retos.hoursLeft}`;
  return `${Math.ceil(hours / 24)}${t.gamification.retos.daysLeft}`;
}

function ChallengeItem({ challenge }: { challenge: Challenge }) {
  const { t } = useI18n();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(challenge.expiresAt, t));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(challenge.expiresAt, t));
    }, 60000);
    return () => clearInterval(interval);
  }, [challenge.expiresAt, t]);

  const isExpired = timeLeft === t.gamification.retos.expired;

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
        challenge.completed
          ? "border-accent/30 bg-accent/5"
          : isExpired
          ? "border-border bg-bg-secondary/50 opacity-50"
          : "border-border hover:border-border-strong"
      }`}
    >
      <div
        className={`p-1.5 rounded-full shrink-0 ${
          challenge.completed
            ? "bg-accent/20 text-accent"
            : "bg-bg-tertiary text-fg-muted"
        }`}
      >
        {challenge.completed ? (
          <CheckCircle className="w-4 h-4" />
        ) : (
          <Target className="w-4 h-4" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-fg">{challenge.title}</span>
          {challenge.completed && (
            <Badge variant="accent" size="sm">
              {t.gamification.retos.done}
            </Badge>
          )}
        </div>
        <p className="text-xs text-fg-muted mt-0.5">{challenge.description}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-2xs text-fg-muted flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeLeft}
          </span>
          <span className="text-2xs text-warning flex items-center gap-1">
            <Zap className="w-3 h-3" />
            {challenge.xpReward} XP
          </span>
        </div>
      </div>
    </div>
  );
}

export function RetosCard() {
  const { t } = useI18n();
  const { challenges, generateDailyChallenges, generateWeeklyChallenges } = useProgress();

  useEffect(() => {
    generateDailyChallenges();
    generateWeeklyChallenges();
  }, [generateDailyChallenges, generateWeeklyChallenges]);

  const dailyChallenges = challenges.filter((c) => c.type === "daily");
  const weeklyChallenges = challenges.filter((c) => c.type === "weekly");
  const completedCount = challenges.filter((c) => c.completed).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Flame className="w-4 h-4 text-error" />
            {t.gamification.retos.title}
          </CardTitle>
          <span className="text-xs text-fg-muted">
            {completedCount}/{challenges.length} {t.gamification.retos.completedCount}
          </span>
        </div>
      </CardHeader>

      {dailyChallenges.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Zap className="w-3 h-3" />
            {t.gamification.retos.diarios}
          </p>
          <div className="space-y-2">
            {dailyChallenges.map((c) => (
              <ChallengeItem key={c.id} challenge={c} />
            ))}
          </div>
        </div>
      )}

      {weeklyChallenges.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Zap className="w-3 h-3" />
            {t.gamification.retos.semanales}
          </p>
          <div className="space-y-2">
            {weeklyChallenges.map((c) => (
              <ChallengeItem key={c.id} challenge={c} />
            ))}
          </div>
        </div>
      )}

      {challenges.length === 0 && (
        <p className="text-sm text-fg-muted text-center py-4">
          {t.gamification.retos.noChallenges}
        </p>
      )}
    </Card>
  );
}
