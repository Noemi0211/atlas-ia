import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";

const PROTECTED_PATHS = ["/perfil", "/docencia"];

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookieLocale = req.cookies.get("atlas-locale")?.value;
  const lang = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const isProtected = PROTECTED_PATHS.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );

  if (!isProtected) {
    const res = NextResponse.next();
    res.headers.set("Content-Language", lang);
    return res;
  }

  const token = await getToken({ req });

  if (!token) {
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("callbackUrl", path);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("Content-Language", lang);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("Content-Language", lang);
  return res;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
