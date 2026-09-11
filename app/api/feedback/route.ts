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
    const [own, all] = await Promise.all([
      prisma.userFeedback.findUnique({
        where: { userId: session.user.id },
      }),
      prisma.userFeedback.findMany({
        where: isTeacher ? {} : { userId: session.user.id },
        select: {
          score: true,
          category: true,
          comment: true,
          createdAt: true,
          user: { select: { name: true, email: true } },
        },
      }),
    ]);

    const total = all.length;
    const media = total > 0
      ? Math.round((all.reduce((acc, f) => acc + f.score, 0) / total) * 10) / 10
      : 0;

    const ratings = all.map((f) => ({
      score: f.score,
      category: f.category,
      comment: f.comment,
      createdAt: f.createdAt.toISOString(),
      user: isTeacher && f.user ? { name: f.user.name, email: f.user.email } : null,
    }));

    return NextResponse.json({
      own: own
        ? {
            score: own.score,
            category: own.category,
            comment: own.comment,
            createdAt: own.createdAt.toISOString(),
            updatedAt: own.updatedAt.toISOString(),
          }
        : null,
      media,
      total,
      ratings: isTeacher ? ratings : undefined,
    });
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al obtener las valoraciones" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const limit = rateLimit(req, {
    windowMs: 15 * 60 * 1000,
    max: 5,
    keyPrefix: "feedback",
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
    const score = body.score;

    if (typeof score !== "number" || !Number.isInteger(score) || score < 1 || score > 5) {
      return NextResponse.json(
        { error: "La puntuación debe ser un número entre 1 y 5" },
        { status: 400 }
      );
    }

    const category = body.category ?? null;
    if (category !== null && !isFeedbackCategory(category)) {
      return NextResponse.json(
        { error: "Categoría no válida" },
        { status: 400 }
      );
    }

    const comment = body.comment ?? null;
    if (comment !== null && (typeof comment !== "string" || comment.length > 300)) {
      return NextResponse.json(
        { error: "El comentario no es válido" },
        { status: 400 }
      );
    }

    const feedback = await prisma.userFeedback.upsert({
      where: { userId: session.user.id },
      update: {
        score,
        category,
        comment: comment ? comment.trim() : null,
      },
      create: {
        userId: session.user.id,
        score,
        category,
        comment: comment ? comment.trim() : null,
      },
    });

    return NextResponse.json(
      {
        own: {
          score: feedback.score,
          category: feedback.category,
          comment: feedback.comment,
          updatedAt: feedback.updatedAt.toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al guardar la valoración" },
      { status: 500 }
    );
  }
}