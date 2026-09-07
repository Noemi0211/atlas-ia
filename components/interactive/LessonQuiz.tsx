"use client";

import { useMemo, useState } from "react";
import { Award, CheckCircle2, XCircle, RotateCcw, ListChecks } from "lucide-react";
import type { LessonQuiz as LessonQuizData } from "@/lib/quiz-data";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/stores/progress";

interface LessonQuizProps {
  quiz: LessonQuizData;
}

export function LessonQuiz({ quiz }: LessonQuizProps) {
  const { t } = useI18n();
  const quizBest = useProgress((s) => s.quizBest);
  const recordQuizResult = useProgress((s) => s.recordQuizResult);

  const total = quiz.questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() =>
    quiz.questions.map(() => -1)
  );
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[current];
  const answered = answers[current] !== -1;
  const isCorrect = answers[current] === question.correct;

  const correctCount = useMemo(
    () =>
      quiz.questions.reduce(
        (acc, q, i) => (answers[i] === q.correct ? acc + 1 : acc),
        0
      ),
    [answers, quiz.questions]
  );

  const best = quizBest[quiz.id] ?? 0;
  const xpEarned = correctCount * 5;

  function handleSelect(index: number) {
    if (answered) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = index;
      return next;
    });
  }

  function handleFinish() {
    recordQuizResult(quiz.id, correctCount, total);
    setFinished(true);
  }

  function handleNext() {
    if (current === total - 1) {
      handleFinish();
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function handleRetry() {
    setAnswers(quiz.questions.map(() => -1));
    setCurrent(0);
    setFinished(false);
  }

  if (finished) {
    const perfect = correctCount === total;
    return (
      <section className="rounded-xl border border-border bg-bg p-6 sm:p-8" aria-label={t.leccion.quiz.result}>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-fg">{t.leccion.quiz.result}</h3>
        </div>

        {perfect && (
          <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t.leccion.quiz.perfect}
          </p>
        )}

        <p className="text-2xl font-bold text-fg">
          {t.leccion.quiz.score
            .replace("{correct}", String(correctCount))
            .replace("{total}", String(total))}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
          <span className="text-fg-secondary">
            {t.leccion.quiz.xpEarned.replace("{xp}", String(xpEarned))}
          </span>
          {best > 0 && (
            <span className="text-fg-muted">
              {t.leccion.quiz.best
                .replace("{best}", String(best))
                .replace("{total}", String(total))}
            </span>
          )}
        </div>

        <button
          onClick={handleRetry}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-fg hover:bg-bg-secondary transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          {t.leccion.quiz.retry}
        </button>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-border bg-bg p-6 sm:p-8" aria-label={t.leccion.quiz.title}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-fg">{t.leccion.quiz.title}</h3>
          </div>
          <p className="text-sm text-fg-secondary mt-1">{t.leccion.quiz.subtitle}</p>
        </div>
        <span className="shrink-0 px-2.5 py-1 rounded-full bg-bg-secondary border border-border text-xs text-fg-muted">
          {t.leccion.quiz.questionOf
            .replace("{current}", String(current + 1))
            .replace("{total}", String(total))}
        </span>
      </div>

      <div className="mb-1 h-1.5 w-full rounded-full bg-bg-tertiary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <p className="mt-5 mb-4 text-base font-medium text-fg">{question.q}</p>

      <div className="space-y-2" aria-label={t.leccion.quiz.optionsLabel}>
        {question.options.map((option, index) => {
          const isSelected = answers[current] === index;
          const showCorrect = answered && index === question.correct;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={index}
              type="button"
              disabled={answered}
              onClick={() => handleSelect(index)}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                showCorrect
                  ? "bg-success/10 border-success/40 text-fg"
                  : showWrong
                  ? "bg-danger/10 border-danger/40 text-fg"
                  : isSelected
                  ? "bg-bg-secondary border-primary text-fg"
                  : "bg-bg-secondary border-border text-fg hover:border-border-strong hover:bg-bg-tertiary"
              } disabled:cursor-default`}
            >
              <span className="flex items-start gap-2.5">
                {showCorrect && <CheckCircle2 className="w-4 h-4 mt-0.5 text-success shrink-0" />}
                {showWrong && <XCircle className="w-4 h-4 mt-0.5 text-danger shrink-0" />}
                <span>{option}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div role="status" aria-live="polite" className="min-h-12 mt-4">
        {answered && (
          <div
            className={`rounded-lg px-4 py-3 text-sm border ${
              isCorrect
                ? "bg-success/10 border-success/40"
                : "bg-danger/10 border-danger/40"
            }`}
          >
            <p className={`font-medium ${isCorrect ? "text-success" : "text-danger"}`}>
              {isCorrect ? t.leccion.quiz.correct : t.leccion.quiz.incorrect}
            </p>
            <p className="text-fg-secondary mt-1">{question.explain}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!answered}
        className="mt-4 inline-flex items-center justify-center px-5 h-10 rounded-lg bg-primary text-white dark:text-slate-900 font-medium text-sm shadow-sm hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        {current === total - 1 ? t.leccion.quiz.finish : t.leccion.quiz.next}
      </button>
    </section>
  );
}