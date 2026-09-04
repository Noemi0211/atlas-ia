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

export const LOCALE_PATHNAMES: Record<Locale, string> = {
  es: "es",
  en: "en",
  val: "val",
};

export function localePathname(locale: Locale): string {
  return `/${LOCALE_PATHNAMES[locale]}`;
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const first = pathname.split("/")[1];
  if (first && isLocale(first)) return first;
  return null;
}

export function stripLocalePrefix(
  pathname: string,
  locale: Locale | null
): string {
  const prefix = locale ? `/${LOCALE_PATHNAMES[locale]}` : "";
  if (locale && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return pathname.slice(prefix.length) || "/";
  }
  return pathname;
}

export function prefixPath(pathname: string, locale: Locale): string {
  if (pathname === "/") return `/${LOCALE_PATHNAMES[locale]}`;
  return `/${LOCALE_PATHNAMES[locale]}${pathname}`;
}

export function buildLanguagesAlternates(
  pathname: string
): Record<string, string> {
  const languages: Record<string, string> = {
    es: prefixPath(pathname, "es"),
    en: prefixPath(pathname, "en"),
    val: prefixPath(pathname, "val"),
  };
  languages["x-default"] = prefixPath(pathname, DEFAULT_LOCALE);
  return languages;
}

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
