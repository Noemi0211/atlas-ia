"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "./dictionaries/es";
import {
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  getLocaleFromPathname,
  localePathname,
  prefixPath,
  stripLocalePrefix,
  type Locale,
} from "./config";
import { getDictionary } from "./dictionaries";
import { setRuntimeDictionary } from "./runtime";

interface I18nContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  localize: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const t = useMemo(() => getDictionary(locale), [locale]);
  const pathname = usePathname();

  useEffect(() => {
    setRuntimeDictionary(t);
    document.documentElement.lang = locale;
    return () => setRuntimeDictionary(null);
  }, [locale, t]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
      document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      const currentLocale = getLocaleFromPathname(pathname ?? "");
      const plainPath = stripLocalePrefix(pathname ?? "/", currentLocale);
      const nextPath = `${localePathname(nextLocale)}${plainPath === "/" ? "" : plainPath}`;
      window.location.assign(nextPath);
    },
    [pathname]
  );

  const localize = useCallback(
    (path: string) => prefixPath(path, locale),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, t, setLocale, localize }),
    [locale, t, setLocale, localize]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
