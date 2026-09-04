import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  resolveLocale,
  type Locale,
} from "./config";

/**
 * Reconoce el locale desde el segmento de URL [lang] de un fichero de ruta.
 * Debe usarse en páginas/layouts anidados bajo app/[lang]/.
 */
export function getLocaleFromParams(lang: string | undefined): Locale {
  return resolveLocale(lang);
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}
