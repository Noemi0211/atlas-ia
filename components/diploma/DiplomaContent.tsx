"use client";

import { useRef } from "react";
import { Award, Printer } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useProgress, TOTAL_LESSONS } from "@/stores/progress";
import { BLOQUES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/provider";
import { formatDate, cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const TOTAL_BLOQUES = BLOQUES.length;

export function DiplomaContent() {
  const { t, locale, localize } = useI18n();
  const { data: session } = useSession();
  const router = useRouter();
  const cursoCompletadoAt = useProgress((s) => s.cursoCompletadoAt);
  const completedLessons = useProgress((s) => s.completedLessons.length);
  const printRef = useRef<HTMLDivElement>(null);

  const nombre = session?.user?.name || "";
  const fechaCompletado = cursoCompletadoAt
    ? formatDate(new Date(cursoCompletadoAt), locale)
    : null;

  const total = TOTAL_LESSONS;
  const bloques = TOTAL_BLOQUES;
  const progressPct = Math.round((completedLessons / total) * 100);

  if (!cursoCompletadoAt) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-read-aloud>
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Award className="size-5" />
            </div>
            <CardTitle className="mt-3">{t.diploma.notEarnedTitle}</CardTitle>
            <CardDescription>{t.diploma.notEarnedText}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm text-fg-secondary">
                <span>{t.diploma.completedLessons}</span>
                <span>
                  {completedLessons} {t.diploma.of} {total}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-bg-secondary">
                <div
                  className={cn("h-full rounded-full bg-primary transition-all", progressPct && "min-w-[4px]")}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <Button onClick={() => router.push(localize("/bloques"))}>
              {t.diploma.keepLearning}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const body = t.diploma.certificate.body
    .replace("{total}", String(total))
    .replace("{bloques}", String(bloques));

  return (
    <div data-read-aloud>
      <div className="mb-4 flex items-center justify-between gap-3 print:hidden">
        <div>
          <h3 className="text-lg font-semibold">{t.diploma.title}</h3>
          <p className="text-sm text-fg-secondary">{t.diploma.subtitle}</p>
        </div>
        <Button onClick={() => window.print()}>
          <Printer className="size-4" />
          {t.diploma.printButton}
        </Button>
      </div>

      <div ref={printRef} className="diploma-sheet">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Award className="size-6" />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.diploma.certificate.award}
          </p>
          <h2 className="mt-1 text-xl font-bold text-fg">{t.diploma.certificate.courseName}</h2>
        </div>

        <p className="diploma-body mt-8 text-center text-base text-fg-secondary">
          {t.diploma.certificate.body}
        </p>
        <p className="diploma-name mt-2 text-center text-2xl font-bold text-fg">{nombre}</p>
        <p className="diploma-completion mt-1 text-center text-sm text-fg-secondary">{body}</p>

        <div className="mt-10 flex flex-col items-center gap-1 text-center">
          <p className="font-medium text-fg">{t.diploma.certificate.signature}</p>
          <p className="text-sm text-fg-secondary">{t.diploma.certificate.signatureRole}</p>
          <p className="mt-4 text-xs text-fg-secondary">{t.diploma.certificate.platform}</p>
          <p className="text-xs text-fg-secondary">{t.diploma.certificate.license}</p>
          <p className="mt-6 text-xs text-fg-secondary">
            {t.diploma.certificate.date}: {fechaCompletado}
          </p>
        </div>
      </div>

      <Button className="mt-6 print:hidden" onClick={() => window.print()}>
        <Printer className="size-4" />
        {t.diploma.printHint}
      </Button>
    </div>
  );
}
