import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_PATHNAMES,
  SUPPORTED_LOCALES,
  getLocaleFromPathname,
  isLocale,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n/config";

const PROTECTED_PATHS = ["/perfil", "/docencia", "/valoracion", "/diploma"];

function negotiateLocale(req: NextRequest): Locale {
  const cookieLocale = req.cookies.get("atlas-locale")?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = req.headers.get("accept-language");
  if (acceptLanguage) {
    for (const locale of SUPPORTED_LOCALES) {
      const code = locale === "val" ? "ca" : locale;
      if (new RegExp(`(^|[,-])\\s*${code}([,-;]|$)`, "i").test(acceptLanguage)) {
        return locale;
      }
    }
  }

  return DEFAULT_LOCALE;
}

function protectedMatch(path: string): string | undefined {
  return PROTECTED_PATHS.find(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );
}

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const urlLocale = getLocaleFromPathname(path);

  if (urlLocale === null) {
    if (path.startsWith("/api")) {
      const lang = negotiateLocale(req);
      const res = NextResponse.next();
      res.headers.set("Content-Language", lang);
      return res;
    }

    const locale = negotiateLocale(req);
    const base = path === "/" ? "" : path;
    const redirectUrl = new URL(`/${LOCALE_PATHNAMES[locale]}${base}`, req.url);
    const res = NextResponse.redirect(redirectUrl);
    res.headers.set("Content-Language", locale);
    return res;
  }

  const stripped = stripLocalePrefix(path, urlLocale);
  const protectedTarget = protectedMatch(stripped);

  if (!protectedTarget) {
    const res = NextResponse.next();
    res.headers.set("Content-Language", urlLocale);
    return res;
  }

  const token = await getToken({ req });

  if (!token) {
    const loginUrl = new URL(
      `/${LOCALE_PATHNAMES[urlLocale]}/auth/login`,
      req.url
    );
    loginUrl.searchParams.set("callbackUrl", path);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("Content-Language", urlLocale);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("Content-Language", urlLocale);
  return res;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
