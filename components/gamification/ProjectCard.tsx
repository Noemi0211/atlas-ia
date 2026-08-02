"use client";

import { CheckCircle, Circle, Zap, Award } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useProgress, Project } from "@/stores/progress";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useI18n } from "@/lib/i18n/provider";
import { localeToIntl } from "@/lib/i18n/config";

const difficultyConfig = {
  basico: { color: "primary" as const, xp: 100 },
  intermedio: { color: "accent" as const, xp: 200 },
  avanzado: { color: "purple" as const, xp: 350 },
};

function ProjectItem({ project }: { project: Project }) {
  const { t, locale } = useI18n();
  const { completeProject } = useProgress();
  const config = difficultyConfig[project.difficulty];

  return (
    <div
      className={`p-4 rounded-lg border transition-colors ${
        project.completed
          ? "border-accent/30 bg-accent/5"
          : "border-border hover:border-border-strong"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant={config.color} size="sm">
              {t.gamification.dificultad[project.difficulty]}
            </Badge>
            {project.completed && (
              <Badge variant="accent" size="sm">
                {t.gamification.proyectos.completed}
              </Badge>
            )}
          </div>
          <h4 className="text-sm font-semibold text-fg">{project.title}</h4>
          <p className="text-xs text-fg-muted mt-1">{project.description}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xs text-warning flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {config.xp} XP
            </span>
            {project.completedAt && (
              <span className="text-2xs text-fg-muted">
                {t.gamification.proyectos.completedAt}{" "}
                {new Date(project.completedAt).toLocaleDateString(localeToIntl(locale))}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => completeProject(project.id)}
          disabled={project.completed}
          className={`shrink-0 p-1.5 rounded-full transition-colors ${
            project.completed
              ? "text-accent cursor-default"
              : "text-fg-muted hover:text-accent hover:bg-accent/10"
          }`}
          title={project.completed ? t.gamification.proyectos.completed : t.gamification.proyectos.markComplete}
        >
          {project.completed ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}

export function ProjectList() {
  const { t } = useI18n();
  const { projects } = useProgress();
  const completed = projects.filter((p) => p.completed).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Award className="w-4 h-4 text-purple" />
            {t.gamification.proyectos.title}
          </CardTitle>
          <span className="text-xs text-fg-muted">
            {completed}/{projects.length}
          </span>
        </div>
        <ProgressBar value={completed} max={projects.length} size="sm" color="purple" showLabel />
      </CardHeader>

      <div className="space-y-3">
        {projects.map((p) => (
          <ProjectItem key={p.id} project={p} />
        ))}
      </div>
    </Card>
  );
}
