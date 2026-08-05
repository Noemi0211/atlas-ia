"use client";

import { useEffect, useState, useCallback } from "react";
import { Download, X } from "lucide-react";
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

export function InstallPWA() {
  const { t } = useI18n();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
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

  if (!deferredPrompt || dismissed || installed) return null;

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
