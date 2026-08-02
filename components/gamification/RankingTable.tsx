"use client";

import { useState, useMemo } from "react";
import { Trophy, Medal, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useProgress, RankingEntry } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";

function RankingRow({ entry, index }: { entry: RankingEntry; index: number }) {
  const { t } = useI18n();
  const isYou = entry.name === "Tú";
  const medalColors = ["text-warning", "text-fg-secondary", "text-orange-600"];

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isYou ? "bg-primary/10 ring-1 ring-primary/20" : "hover:bg-bg-secondary"
      }`}
    >
      <div className="w-8 text-center shrink-0">
        {index < 3 ? (
          <Medal className={`w-5 h-5 mx-auto ${medalColors[index]}`} />
        ) : (
          <span className="text-sm text-fg-muted font-mono">{index + 1}</span>
        )}
      </div>
      <span className="text-lg shrink-0">{entry.avatar}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-fg truncate">
            {isYou ? t.gamification.ranking.you : entry.name}
          </span>
          {isYou && (
            <Badge variant="primary" size="sm">
              {t.gamification.ranking.you}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3 text-2xs text-fg-muted mt-0.5">
          <span>{entry.badges} {t.gamification.ranking.badges}</span>
          <span>🔥 {entry.streak} {t.gamification.ranking.days}</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-fg">{entry.xp.toLocaleString()}</p>
        <p className="text-2xs text-fg-muted">{t.gamification.xp.xp}</p>
      </div>
    </div>
  );
}

export function RankingTable() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const { getRankingData } = useProgress();

  const rankingData = useMemo(() => getRankingData(), [getRankingData]);

  const filtered = useMemo(
    () =>
      search
        ? rankingData.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
          )
        : rankingData,
    [rankingData, search]
  );

  const displayed = expanded ? filtered : filtered.slice(0, 5);
  const userRank = rankingData.findIndex((e) => e.name === "Tú") + 1;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Trophy className="w-4 h-4 text-warning" />
            {t.gamification.ranking.title}
          </CardTitle>
          {userRank > 0 && (
            <span className="text-xs text-fg-muted">
              {t.gamification.ranking.yourRank} <strong className="text-fg">#{userRank}</strong>
            </span>
          )}
        </div>
      </CardHeader>

      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-fg-muted" />
        <input
          type="text"
          placeholder={t.gamification.ranking.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-9 pl-9 pr-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="space-y-1">
        {displayed.map((entry) => (
          <RankingRow key={entry.name} entry={entry} index={rankingData.indexOf(entry)} />
        ))}
      </div>

      {filtered.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-1.5 w-full mt-3 py-2 text-xs text-fg-muted hover:text-fg transition-colors"
        >
          {expanded ? (
            <>{t.gamification.ranking.showLess} <ChevronUp className="w-3.5 h-3.5" /></>
          ) : (
            <>{t.gamification.ranking.showAll.replace("{count}", String(filtered.length))} <ChevronDown className="w-3.5 h-3.5" /></>
          )}
        </button>
      )}
    </Card>
  );
}
