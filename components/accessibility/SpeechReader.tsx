"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Square, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";
import { localeToIntl } from "@/lib/i18n/config";
import {
  createUtterance,
  extractReadableText,
  getSpeechVoices,
  getVoiceForLocale,
  isSpeechSupported,
  MAIN_CONTENT_SELECTOR,
  splitTextForSpeech,
} from "@/lib/speech";

const RATE_OPTIONS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function SpeechReader() {
  const { locale, t } = useI18n();
  const pathname = usePathname();

  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [reading, setReading] = useState(false);
  const [rate, setRate] = useState(1);
  const [notice, setNotice] = useState<string | null>(null);

  const activeChunksRef = useRef(0);
  const finishedChunksRef = useRef(0);
  const noticeTimerRef = useRef<number | null>(null);

  const showNotice = useCallback(
    (message: string) => {
      setNotice(message);
      if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
      noticeTimerRef.current = window.setTimeout(() => setNotice(null), 4000);
    },
    []
  );

  const stopReading = useCallback(() => {
    if (!isSpeechSupported()) return;
    window.speechSynthesis.cancel();
    activeChunksRef.current = 0;
    finishedChunksRef.current = 0;
    setReading(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const refresh = () => {
      setVoices(getSpeechVoices());
      setSupported(true);
    };

    window.speechSynthesis.addEventListener("voiceschanged", refresh);
    const timer = window.setTimeout(refresh, 0);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", refresh);
      window.clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      stopReading();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, stopReading]);

  useEffect(() => {
    return () => {
      if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
    };
  }, []);

  const startReading = useCallback(() => {
    if (!supported || reading) return;

    const root = document.querySelector<HTMLElement>(MAIN_CONTENT_SELECTOR);
    if (!root) {
      showNotice(t.speech.noContent);
      return;
    }

    const text = extractReadableText(root);
    if (!text) {
      showNotice(t.speech.noContent);
      return;
    }

    const lang = localeToIntl(locale);
    const voice = getVoiceForLocale(locale, voices);
    const chunks = splitTextForSpeech(text);

    const synth = window.speechSynthesis;
    synth.cancel();

    activeChunksRef.current = chunks.length;
    finishedChunksRef.current = 0;
    setReading(true);

    for (const chunk of chunks) {
      const utterance = createUtterance(chunk, lang, rate, voice);
      if (!utterance) continue;
      utterance.onend = () => {
        finishedChunksRef.current += 1;
        if (finishedChunksRef.current >= activeChunksRef.current) {
          setReading(false);
        }
      };
      utterance.onerror = () => {
        finishedChunksRef.current += 1;
        if (finishedChunksRef.current >= activeChunksRef.current) {
          setReading(false);
        }
      };
      synth.speak(utterance);
    }
  }, [supported, reading, rate, voices, locale, t.speech.noContent, showNotice]);

  const handleRateChange = useCallback(
    (nextRate: number) => {
      setRate(nextRate);
      if (reading) {
        stopReading();
        window.setTimeout(() => {
          if (isSpeechSupported()) {
            const root = document.querySelector<HTMLElement>(MAIN_CONTENT_SELECTOR);
            if (!root) return;
            const text = extractReadableText(root);
            if (!text) return;
            const lang = localeToIntl(locale);
            const voice = getVoiceForLocale(locale, getSpeechVoices());
            const chunks = splitTextForSpeech(text);
            const synth = window.speechSynthesis;
            activeChunksRef.current = chunks.length;
            finishedChunksRef.current = 0;
            setReading(true);
            for (const chunk of chunks) {
              const utterance = createUtterance(chunk, lang, nextRate, voice);
              if (!utterance) continue;
              utterance.onend = () => {
                finishedChunksRef.current += 1;
                if (finishedChunksRef.current >= activeChunksRef.current) {
                  setReading(false);
                }
              };
              utterance.onerror = () => {
                finishedChunksRef.current += 1;
                if (finishedChunksRef.current >= activeChunksRef.current) {
                  setReading(false);
                }
              };
              synth.speak(utterance);
            }
          }
        }, 50);
      }
    },
    [reading, stopReading, locale]
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 lg:bottom-6 lg:right-6">
      <span className="sr-only" aria-live="polite">
        {reading ? t.speech.reading : t.speech.finished}
      </span>

      {notice && (
        <div
          role="status"
          className="max-w-[260px] rounded-lg border border-border bg-bg px-3 py-2 text-xs text-fg-secondary shadow-lg"
        >
          {notice}
        </div>
      )}

      {reading && (
        <div
          className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-3 py-1.5 text-xs font-medium text-primary"
          role="status"
        >
          <span
            className="h-2 w-2 rounded-full bg-primary animate-pulse"
            aria-hidden="true"
          />
          {t.speech.reading}
        </div>
      )}

      <div className="flex items-center gap-2 rounded-2xl border border-border bg-bg p-2 shadow-lg">
        <button
          type="button"
          onClick={startReading}
          disabled={!supported}
          className={cn(
            "inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-sm font-medium transition-all",
            "bg-primary text-white dark:text-slate-900 hover:bg-primary-hover shadow-sm",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          aria-label={t.speech.listen}
        >
          <Volume2 className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{t.speech.listen}</span>
        </button>

        <button
          type="button"
          onClick={stopReading}
          disabled={!reading}
          className={cn(
            "inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border px-3 text-sm font-medium transition-all",
            "text-fg hover:bg-bg-secondary",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          aria-label={t.speech.stop}
        >
          <Square className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{t.speech.stop}</span>
        </button>

        <label className="flex h-10 items-center gap-1 rounded-xl border border-border bg-bg-secondary px-2">
          <span className="sr-only">{t.speech.speed}</span>
          <select
            value={rate}
            onChange={(event) => handleRateChange(Number(event.target.value))}
            className="h-full cursor-pointer bg-transparent text-sm font-medium text-fg outline-none"
            aria-label={t.speech.speed}
          >
            {RATE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}x
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
