import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/getServerSession";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        completedLessons: JSON.stringify(data.completedLessons || []),
        xp: data.xp ?? 0,
        badges: JSON.stringify(data.badges || []),
        favorites: JSON.stringify(data.favorites || []),
        currentStreak: data.currentStreak ?? 0,
        lastVisit: data.lastVisit ?? null,
        comparedTools: data.comparedTools ?? 0,
        arbolCompletado: data.arbolCompletado ?? false,
        calculadoraUsada: data.calculadoraUsada ?? false,
        challenges: JSON.stringify(data.challenges || []),
        projects: JSON.stringify(data.projects || []),
        notifications: JSON.stringify(data.notifications || []),
      },
    });

    return NextResponse.json({ success: true, user: { id: user.id, xp: user.xp } });
  } catch {
    return NextResponse.json({ error: "Error al sincronizar" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        completedLessons: true,
        xp: true,
        badges: true,
        favorites: true,
        currentStreak: true,
        lastVisit: true,
        comparedTools: true,
        arbolCompletado: true,
        calculadoraUsada: true,
        challenges: true,
        projects: true,
        notifications: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({
      completedLessons: JSON.parse(user.completedLessons),
      xp: user.xp,
      badges: JSON.parse(user.badges),
      favorites: JSON.parse(user.favorites),
      currentStreak: user.currentStreak,
      lastVisit: user.lastVisit,
      comparedTools: user.comparedTools,
      arbolCompletado: user.arbolCompletado,
      calculadoraUsada: user.calculadoraUsada,
      challenges: JSON.parse(user.challenges),
      projects: JSON.parse(user.projects),
      notifications: JSON.parse(user.notifications),
    });
  } catch {
    return NextResponse.json({ error: "Error al obtener datos" }, { status: 500 });
  }
}
