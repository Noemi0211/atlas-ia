import { NextRequest, NextResponse } from "next/server";
import { searchContent } from "@/lib/content";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = searchContent(query);
  return NextResponse.json({ results });
}
