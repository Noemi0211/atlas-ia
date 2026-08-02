import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { streamChatResponse } from "@/lib/ai";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const cookieStore = await cookies();
    const locale = resolveLocale(cookieStore.get("atlas-locale")?.value);
    const t = getDictionary(locale);

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: t.ai.badRequest }, { status: 400 });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        await streamChatResponse(
          messages,
          (token) => {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ token })}\n\n`));
          },
          () => {
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          },
          (error) => {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error })}\n\n`));
            controller.close();
          },
          locale,
        );
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return NextResponse.json(
      { error: getDictionary(DEFAULT_LOCALE).ai.internalError },
      { status: 500 }
    );
  }
}
