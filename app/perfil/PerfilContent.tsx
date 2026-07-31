"use client";

import { useEffect } from "react";
import { ProfileStats } from "@/components/gamification/ProfileStats";
import { RankingTable } from "@/components/gamification/RankingTable";
import { RetosCard } from "@/components/gamification/RetosCard";
import { ProjectList } from "@/components/gamification/ProjectCard";
import { useProgress, BADGES } from "@/stores/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Award } from "lucide-react";

function AllBadges() {
  const { badges } = useProgress();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Award className="w-4 h-4 text-warning" />
          Todas las insignias
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {Object.entries(BADGES).map(([id, badge]) => {
          const unlocked = badges.includes(id);
          return (
            <div
              key={id}
              className={`p-3 rounded-lg border text-center transition-all ${
                unlocked
                  ? "border-primary/20 bg-primary/5"
                  : "border-border bg-bg-secondary/50 opacity-50"
              }`}
              title={badge.descripcion}
            >
              <span className="text-2xl block mb-1">{unlocked ? badge.icono : "🔒"}</span>
              <p className={`text-xs font-medium ${unlocked ? "text-fg" : "text-fg-muted"}`}>
                {badge.nombre}
              </p>
              <p className="text-2xs text-fg-muted mt-0.5">{badge.descripcion}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function PerfilContent() {
  const { generateDailyChallenges, generateWeeklyChallenges } = useProgress();

  useEffect(() => {
    generateDailyChallenges();
    generateWeeklyChallenges();
  }, [generateDailyChallenges, generateWeeklyChallenges]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <ProfileStats />
        <RankingTable />
      </div>
      <div className="space-y-6">
        <RetosCard />
        <ProjectList />
      </div>
      <div className="lg:col-span-3">
        <AllBadges />
      </div>
    </div>
  );
}
