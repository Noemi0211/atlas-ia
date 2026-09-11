import { NextResponse } from "next/server";
import { captureException } from "@sentry/nextjs";
import { getServerSession } from "@/lib/getServerSession";
import { prisma } from "@/lib/prisma";
import { isSuggestionStatus } from "@/lib/feedback";
import { ROLE_TEACHER } from "@/lib/auth";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: RouteContext) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    if (session.user.role !== ROLE_TEACHER) {
      return NextResponse.json(
        { error: "Acceso restringido al profesorado" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await req.json();
    const status = body.status;

    if (!isSuggestionStatus(status)) {
      return NextResponse.json({ error: "Estado no válido" }, { status: 400 });
    }

    const existing = await prisma.suggestion.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Propuesta no encontrada" }, { status: 404 });
    }

    const suggestion = await prisma.suggestion.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({
      suggestion: {
        id: suggestion.id,
        title: suggestion.title,
        description: suggestion.description,
        category: suggestion.category,
        status: suggestion.status,
        createdAt: suggestion.createdAt.toISOString(),
        updatedAt: suggestion.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al actualizar la propuesta" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: RouteContext) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    if (session.user.role !== ROLE_TEACHER) {
      return NextResponse.json(
        { error: "Acceso restringido al profesorado" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const existing = await prisma.suggestion.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Propuesta no encontrada" }, { status: 404 });
    }

    await prisma.suggestion.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch (error) {
    captureException(error);
    return NextResponse.json(
      { error: "Error al eliminar la propuesta" },
      { status: 500 }
    );
  }
}