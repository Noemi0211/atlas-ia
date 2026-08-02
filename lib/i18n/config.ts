export const SUPPORTED_LOCALES = ["es", "en", "val"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  val: "Valencià",
};

export const LOCALE_COOKIE = "atlas-locale";
export const LOCALE_STORAGE_KEY = "atlas-locale";

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    (SUPPORTED_LOCALES as readonly string[]).includes(value)
  );
}

export function resolveLocale(value: string | null | undefined): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}

export function localeToIntl(locale: Locale): string {
  switch (locale) {
    case "en":
      return "en";
    case "val":
      return "ca-ES-valencia";
    default:
      return "es";
  }
}
