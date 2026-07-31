"use client";

import { useProgress } from "@/stores/progress";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonCompleteButtonProps {
  lessonId: string;
  className?: string;
}

export function LessonCompleteButton({
  lessonId,
  className,
}: LessonCompleteButtonProps) {
  const { completedLessons, completeLesson } = useProgress();
  const isCompleted = completedLessons.includes(lessonId);

  return (
    <button
      onClick={() => completeLesson(lessonId)}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
        isCompleted
          ? "bg-accent-light text-accent border border-accent/20"
          : "bg-bg-secondary text-fg-secondary hover:text-fg hover:bg-bg-tertiary border border-border",
        className
      )}
    >
      {isCompleted ? (
        <>
          <CheckCircle2 className="w-4 h-4" />
          Completada
        </>
      ) : (
        <>
          <Circle className="w-4 h-4" />
          Marcar como completada
        </>
      )}
    </button>
  );
}
