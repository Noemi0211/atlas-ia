import { NextRequest, NextResponse } from "next/server";
import { searchContent } from "@/lib/content";
import { resolveLocale } from "@/lib/i18n/config";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  const locale = resolveLocale(request.cookies.get("atlas-locale")?.value);

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = searchContent(query, locale);
  return NextResponse.json({ results });
}
