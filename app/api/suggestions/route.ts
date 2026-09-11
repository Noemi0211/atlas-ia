import { NextResponse } from "next/server";
import { captureException } from "@sentry/nextjs";
import { getServerSession } from "@/lib/getServerSession";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";
import { isFeedbackCategory } from "@/lib/feedback";
import { ROLE_TEACHER } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const isTeacher = session.user.role === ROLE_TEACHER;

    const suggestions = await prisma.suggestion.findMany({
      where: isTeacher ? {} : { userId: session.user.id },
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      suggestions: suggestions.map((s) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        category: s.category,
        status: s.status,
        createdAt: s.createdAt.toISOString(),
        updatedAt: s.updatedAt.toISOString(),
        user: isTeacher
          ? { name: s.user.name, email: s.user.email }
          : null,
      })),
    });
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al obtener las propuestas" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const limit = rateLimit(req, {
    windowMs: 15 * 60 * 1000,
    max: 5,
    keyPrefix: "suggestions",
  });

  if (!limit.success) {
    return NextResponse.json(
      { error: "Demasiados intentos. Inténtalo de nuevo más tarde." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      }
    );
  }

  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const description =
      typeof body.description === "string" ? body.description.trim() : "";

    if (!title || title.length > 120) {
      return NextResponse.json(
        { error: "El título es obligatorio y no puede superar 120 caracteres" },
        { status: 400 }
      );
    }

    if (!description || description.length > 600) {
      return NextResponse.json(
        { error: "La descripción es obligatoria y no puede superar 600 caracteres" },
        { status: 400 }
      );
    }

    const category = body.category ?? null;
    if (category !== null && !isFeedbackCategory(category)) {
      return NextResponse.json({ error: "Categoría no válida" }, { status: 400 });
    }

    const suggestion = await prisma.suggestion.create({
      data: {
        userId: session.user.id,
        title,
        description,
        category,
      },
    });

    return NextResponse.json(
      {
        suggestion: {
          id: suggestion.id,
          title: suggestion.title,
          description: suggestion.description,
          category: suggestion.category,
          status: suggestion.status,
          createdAt: suggestion.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al crear la propuesta" },
      { status: 500 }
    );
  }
}