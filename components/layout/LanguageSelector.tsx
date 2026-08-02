"use client";

import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";
import {
  LOCALE_NAMES,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/config";

export function LanguageSelector() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.header.changeLanguage}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-bg-secondary text-fg-secondary hover:text-fg transition-colors"
      >
        <Languages className="w-4 h-4" />
        {mounted && (
          <span className="hidden md:inline text-xs font-medium">
            {LOCALE_NAMES[locale]}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-bg shadow-lg z-50 overflow-hidden py-1"
        >
          {SUPPORTED_LOCALES.map((lang: Locale) => (
            <button
              key={lang}
              role="menuitemradio"
              aria-checked={lang === locale}
              onClick={() => {
                setIsOpen(false);
                if (lang !== locale) setLocale(lang);
              }}
              className={cn(
                "flex items-center justify-between w-full px-4 py-2 text-sm transition-colors",
                lang === locale
                  ? "text-primary font-medium"
                  : "text-fg-secondary hover:text-fg hover:bg-bg-secondary"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-xs">{lang}</span>
                {LOCALE_NAMES[lang]}
              </span>
              {lang === locale && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
