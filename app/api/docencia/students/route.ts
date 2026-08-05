import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/getServerSession";
import { prisma } from "@/lib/prisma";
import { ROLE_TEACHER } from "@/lib/auth";
import { BLOQUES } from "@/lib/constants";

function parseJsonList<T = unknown>(raw: string): T[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function escapeCsv(value: unknown): string {
  const str = String(value ?? "");
  return `"${str.replace(/"/g, '""')}"`;
}

function buildStudentStats(user: {
  id: string;
  name: string | null;
  email: string;
  createdAt: Date;
  lastVisit: string | null;
  xp: number;
  currentStreak: number;
  comparedTools: number;
  arbolCompletado: boolean;
  calculadoraUsada: boolean;
  completedLessons: string;
  badges: string;
  favorites: string;
  challenges: string;
  projects: string;
}) {
  const completedLessons = parseJsonList<string>(user.completedLessons);
  const badges = parseJsonList<string>(user.badges);
  const favorites = parseJsonList<string>(user.favorites);
  const challenges = parseJsonList<{ completed?: boolean }>(user.challenges);
  const projects = parseJsonList<{ completed?: boolean }>(user.projects);

  const totalLessons = BLOQUES.reduce((acc, b) => acc + b.lecciones, 0);
  const lessonsCount = completedLessons.length;

  const perBlock = BLOQUES.map((bloque) => {
    const completed = completedLessons.filter((id) =>
      id.startsWith(`${bloque.slug}/`)
    ).length;
    return {
      slug: bloque.slug,
      numero: bloque.numero,
      completed,
      total: bloque.lecciones,
      percent:
        bloque.lecciones > 0 ? Math.round((completed / bloque.lecciones) * 100) : 0,
    };
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt.toISOString(),
    lastVisit: user.lastVisit,
    xp: user.xp,
    level: Math.floor(user.xp / 500) + 1,
    completedLessons,
    lessonsCount,
    completionPercent: Math.round((lessonsCount / totalLessons) * 100),
    badges,
    badgesCount: badges.length,
    currentStreak: user.currentStreak,
    favoritesCount: favorites.length,
    comparedTools: user.comparedTools,
    arbolCompletado: user.arbolCompletado,
    calculadoraUsada: user.calculadoraUsada,
    challengesCompleted: challenges.filter((c) => c.completed).length,
    projectsCompleted: projects.filter((p) => p.completed).length,
    perBlock,
  };
}

type StudentStats = ReturnType<typeof buildStudentStats>;

export async function GET(req: Request) {
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

    const students = await prisma.user.findMany({
      where: { role: { not: ROLE_TEACHER } },
      orderBy: { createdAt: "asc" },
    });

    const stats: StudentStats[] = students.map(buildStudentStats);

    const url = new URL(req.url);
    if (url.searchParams.get("format") === "csv") {
      const rows: unknown[][] = [
        [
          "Nombre",
          "Email",
          "Registro",
          "Último acceso",
          "Nivel",
          "XP",
          "Lecciones completadas",
          "% del curso",
          "Insignias",
          "Racha (días)",
          "Favoritos",
          "Comparaciones",
          "Árbol decisión",
          "Calculadora prompts",
          "Retos completados",
          "Proyectos completados",
          ...BLOQUES.map((b) => `Bloque ${b.numero} (${b.slug})`),
        ],
        ...stats.map((s) => [
          s.name ?? "",
          s.email,
          s.createdAt,
          s.lastVisit ?? "",
          s.level,
          s.xp,
          s.lessonsCount,
          `${s.completionPercent}%`,
          s.badgesCount,
          s.currentStreak,
          s.favoritesCount,
          s.comparedTools,
          s.arbolCompletado ? "Sí" : "No",
          s.calculadoraUsada ? "Sí" : "No",
          s.challengesCompleted,
          s.projectsCompleted,
          ...s.perBlock.map((b) => `${b.completed}/${b.total}`),
        ]),
      ];
      const csv = rows.map((row) => row.map(escapeCsv).join(";")).join("\n");

      return new NextResponse("\uFEFF" + csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="atlas-docencia-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    return NextResponse.json({ students: stats });
  } catch {
    return NextResponse.json(
      { error: "Error al obtener los datos docentes" },
      { status: 500 }
    );
  }
}
