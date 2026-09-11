"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
  Users,
  Zap,
  BookOpen,
  Flame,
  Search,
  Download,
  ChevronDown,
  ChevronRight,
  Loader2,
  GraduationCap,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DocenciaFeedback } from "./DocenciaFeedback";
import { useI18n } from "@/lib/i18n/provider";
import { getBLOQUES } from "@/lib/i18n/data";
import { formatDate } from "@/lib/utils";
import { localeToIntl } from "@/lib/i18n/config";

interface PerBlockStat {
  slug: string;
  numero: number;
  completed: number;
  total: number;
  percent: number;
}

interface StudentStats {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  lastVisit: string | null;
  xp: number;
  level: number;
  lessonsCount: number;
  completionPercent: number;
  badgesCount: number;
  currentStreak: number;
  favoritesCount: number;
  comparedTools: number;
  arbolCompletado: boolean;
  calculadoraUsada: boolean;
  challengesCompleted: number;
  projectsCompleted: number;
  perBlock: PerBlockStat[];
}

function parseLastVisit(value: string | null): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}

export function DocenciaDashboard() {
  const { t, locale } = useI18n();
  const [students, setStudents] = useState<StudentStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [weekAgo, setWeekAgo] = useState(0);
  const bloques = useMemo(() => getBLOQUES(t), [t]);
  const intlLocale = localeToIntl(locale);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWeekAgo(Date.now() - 7 * 24 * 60 * 60 * 1000);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let active = true;
    fetch("/api/docencia/students")
      .then((res) => {
        if (!res.ok) throw new Error("error");
        return res.json();
      })
      .then((data) => {
        if (active) setStudents(data.students ?? []);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return students;
    return students.filter(
      (s) =>
        (s.name ?? "").toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q)
    );
  }, [students, query]);

  const summary = useMemo(() => {
    if (students.length === 0) {
      return { total: 0, avgXp: 0, totalLessons: 0, activeWeek: 0 };
    }
    const totalLessons = students.reduce((acc, s) => acc + s.lessonsCount, 0);
    const activeWeek = students.filter((s) => {
      const d = parseLastVisit(s.lastVisit);
      return d && d.getTime() >= weekAgo;
    }).length;
    return {
      total: students.length,
      avgXp: Math.round(students.reduce((acc, s) => acc + s.xp, 0) / students.length),
      totalLessons,
      activeWeek,
    };
  }, [students, weekAgo]);

  const toggleRow = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const formatDateSafe = useCallback(
    (value: string | null) => {
      const d = parseLastVisit(value);
      if (!d) return "—";
      return formatDate(d, intlLocale);
    },
    [intlLocale]
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              {t.docencia.totalStudents}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">{summary.total}</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              {t.docencia.avgXp}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">{summary.avgXp} XP</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              {t.docencia.totalLessons}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">{summary.totalLessons}</p>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Flame className="w-4 h-4 text-error" />
              {t.docencia.activeWeek}
            </CardTitle>
          </CardHeader>
          <p className="text-2xl font-bold text-fg px-4 pb-4">{summary.activeWeek}</p>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.docencia.searchPlaceholder}
              className="w-full h-9 pl-9 pr-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-primary"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- enlace de descarga CSV, no es navegación entre páginas */}
          <a
            href="/api/docencia/students?format=csv"
            className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg bg-primary text-white dark:text-slate-900 text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            <Download className="w-4 h-4" />
            {t.docencia.exportCsv}
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 py-16 text-fg-secondary">
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.docencia.loading}
          </div>
        ) : error ? (
          <p className="py-16 text-center text-error">{t.docencia.error}</p>
        ) : students.length === 0 ? (
          <p className="py-16 text-center text-fg-secondary">{t.docencia.empty}</p>
        ) : filtered.length === 0 ? (
          <p className="py-16 text-center text-fg-secondary">{t.docencia.noResults}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-2xs uppercase tracking-wider text-fg-muted border-b border-border">
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.student}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.level}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.xp}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.lessons}</th>
                  <th className="px-4 py-3 font-semibold w-48">{t.docencia.columns.progress}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.badges}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.streak}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.lastVisit}</th>
                  <th className="px-4 py-3 font-semibold">{t.docencia.columns.joined}</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => {
                  const isExpanded = expanded.has(s.id);
                  return (
                    <FragmentRow
                      key={s.id}
                      student={s}
                      isExpanded={isExpanded}
                      onToggle={() => toggleRow(s.id)}
                      bloques={bloques}
                      formatDate={formatDateSafe}
                      t={t}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <DocenciaFeedback />
    </div>
  );
}

function FragmentRow({
  student,
  isExpanded,
  onToggle,
  bloques,
  formatDate,
  t,
}: {
  student: StudentStats;
  isExpanded: boolean;
  onToggle: () => void;
  bloques: ReturnType<typeof getBLOQUES>;
  formatDate: (value: string | null) => string;
  t: ReturnType<typeof useI18n>["t"];
}) {
  const blockNames = new Map(bloques.map((b) => [b.slug, b.titulo]));

  return (
    <>
      <tr className="border-b border-border/60 hover:bg-bg-secondary/40 transition-colors">
        <td className="px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-fg truncate max-w-[160px]">
                {student.name ?? student.email}
              </p>
              <p className="text-2xs text-fg-muted truncate max-w-[180px]">{student.email}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-fg-secondary">{student.level}</td>
        <td className="px-4 py-3 font-semibold text-fg">{student.xp}</td>
        <td className="px-4 py-3 text-fg-secondary">{student.lessonsCount}</td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <ProgressBar value={student.completionPercent} size="sm" color="accent" className="flex-1" />
            <span className="text-2xs text-fg-muted w-9 text-right">{student.completionPercent}%</span>
          </div>
        </td>
        <td className="px-4 py-3 text-fg-secondary">{student.badgesCount}</td>
        <td className="px-4 py-3 text-fg-secondary">{student.currentStreak}</td>
        <td className="px-4 py-3 text-fg-secondary">{formatDate(student.lastVisit)}</td>
        <td className="px-4 py-3 text-fg-muted">{formatDate(student.createdAt)}</td>
        <td className="px-4 py-3">
          <button
            onClick={onToggle}
            aria-expanded={isExpanded}
            className="p-1.5 rounded-md text-fg-muted hover:text-fg hover:bg-bg-secondary transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </td>
      </tr>

      {isExpanded && (
        <tr className="bg-bg-secondary/40">
          <td colSpan={10} className="px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-fg mb-3">{t.docencia.perBlock}</p>
                <div className="space-y-2">
                  {student.perBlock.map((b) => (
                    <div key={b.slug} className="flex items-center gap-2">
                      <span className="text-xs text-fg-secondary w-40 truncate">
                        {blockNames.get(b.slug) ?? b.slug}
                      </span>
                      <ProgressBar value={b.percent} size="sm" color="primary" className="flex-1" />
                      <span className="text-2xs text-fg-muted w-14 text-right">
                        {b.completed}/{b.total}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-fg mb-3">{t.docencia.usage.title}</p>
                <dl className="grid grid-cols-2 gap-3">
                  <UsageItem label={t.docencia.usage.comparedTools} value={String(student.comparedTools)} />
                  <UsageItem label={t.docencia.usage.favorites} value={String(student.favoritesCount)} />
                  <UsageItem label={t.docencia.usage.challenges} value={String(student.challengesCompleted)} />
                  <UsageItem label={t.docencia.usage.projects} value={String(student.projectsCompleted)} />
                  <UsageItem label={t.docencia.usage.arbol} value={student.arbolCompletado ? "✓" : "—"} />
                  <UsageItem label={t.docencia.usage.calculadora} value={student.calculadoraUsada ? "✓" : "—"} />
                </dl>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function UsageItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 rounded-lg bg-bg border border-border">
      <dt className="text-2xs text-fg-muted">{label}</dt>
      <dd className="text-sm font-semibold text-fg mt-0.5">{value}</dd>
    </div>
  );
}
