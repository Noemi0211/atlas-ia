"use client";

import { useEffect, useState, useCallback } from "react";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

interface InstallPWAProps {
  compact?: boolean;
}

export function InstallPWA({ compact = false }: InstallPWAProps) {
  const { t } = useI18n();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [standalone, setStandalone] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (isStandalone()) {
      const timer = window.setTimeout(() => setStandalone(true), 0);
      return () => window.clearTimeout(timer);
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setShowHint(false);
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };
    const onAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    setDeferredPrompt(null);
    setDismissed(true);
  }, [deferredPrompt]);

  const handleHeaderClick = useCallback(() => {
    if (deferredPrompt) {
      handleInstall();
    } else {
      setShowHint((value) => !value);
    }
  }, [deferredPrompt, handleInstall]);

  if (compact) {
    if (standalone || installed) return null;
  } else if (!deferredPrompt || dismissed || installed) {
    return null;
  }

  if (compact) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={handleHeaderClick}
          aria-label={t.pwa.install}
          aria-expanded={showHint}
          className={cn(
            "relative inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
            deferredPrompt
              ? "border-primary/40 text-primary hover:text-primary-hover hover:bg-bg-secondary"
              : "border-border text-fg-secondary hover:text-fg hover:bg-bg-secondary"
          )}
          title={`${t.pwa.installTitle} — ${t.pwa.installDesc}`}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {deferredPrompt && (
            <span
              className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            />
          )}
        </button>

        {showHint && (
          <div
            role="dialog"
            aria-label={t.pwa.installTitle}
            className="absolute right-0 top-full mt-2 z-50 w-64 rounded-xl border border-border-strong bg-bg p-4 shadow-lg"
          >
            <p className="font-semibold text-sm text-fg">{t.pwa.installTitle}</p>
            <p className="text-xs text-fg-secondary mt-0.5">{t.pwa.installDesc}</p>
            <p className="text-xs text-fg-secondary mt-2">{t.pwa.installHint}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-label={t.pwa.installTitle}
      className="w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-border-strong bg-bg shadow-lg p-4 flex items-start gap-3"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-b from-primary to-primary-hover flex items-center justify-center">
        <span className="text-white font-bold text-sm">A</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-fg">{t.pwa.installTitle}</p>
        <p className="text-xs text-fg-secondary mt-0.5">{t.pwa.installDesc}</p>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={handleInstall}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-primary text-white dark:text-slate-900 text-xs font-medium hover:bg-primary-hover transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            {t.pwa.install}
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="h-8 px-3 rounded-lg text-xs text-fg-secondary hover:bg-bg-secondary transition-colors"
          >
            {t.pwa.notNow}
          </button>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label={t.common.close}
        className="shrink-0 p-1 rounded-md text-fg-muted hover:bg-bg-secondary hover:text-fg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
