"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Sparkles, Compass, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/provider";

const ONBOARD_KEY = "atlas-onboarded";
const TOTAL_STEPS = 4;

const stepIcons = [Sparkles, Compass, Trophy, Star];

export function OnboardingModal() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  const finish = useCallback(() => {
    try {
      localStorage.setItem(ONBOARD_KEY, "1");
    } catch {
      // localStorage no disponible: cerramos igualmente
    }
    setShow(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let onboarded = false;
      try {
        onboarded = localStorage.getItem(ONBOARD_KEY) === "1";
      } catch {
        // localStorage no disponible: mostramos la guía
      }
      if (!onboarded) setShow(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  const items = t.onboarding.items;
  const item = items[step];
  const Icon = stepIcons[step] || Sparkles;
  const isLast = step === TOTAL_STEPS - 1;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.onboarding.title}
      onKeyDown={(e) => {
        if (e.key === "Escape") finish();
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={finish} />

      <div className="relative w-full max-w-md bg-bg border border-border rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 h-14 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm text-fg">{t.onboarding.title}</span>
          </div>
          <button
            onClick={finish}
            autoFocus
            aria-label={t.onboarding.closeAria}
            className="p-1.5 rounded-lg text-fg-muted hover:text-fg hover:bg-bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-6">
          <span className="sr-only">
            {t.onboarding.stepOf
              .replace("{actual}", String(step + 1))
              .replace("{total}", String(TOTAL_STEPS))}
          </span>
          <h2 className="text-lg font-bold text-fg mb-2">{item.title}</h2>
          <p className="text-sm text-fg-secondary leading-relaxed">{item.text}</p>

          <div className="flex items-center gap-1.5 mt-5" aria-hidden="true">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === step ? "w-6 bg-primary" : "w-1.5 bg-border-strong"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-bg-secondary/30">
          <Button variant="ghost" size="sm" onClick={finish}>
            {t.onboarding.skip}
          </Button>

          <div className="flex items-center gap-2">
            {step > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              >
                {t.onboarding.back}
              </Button>
            )}
            <Button
              variant="primary"
              size="sm"
              onClick={() => (isLast ? finish() : setStep((prev) => Math.min(TOTAL_STEPS - 1, prev + 1)))}
            >
              {isLast ? t.onboarding.finish : t.onboarding.next}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}