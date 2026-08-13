import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { isTeacherEmail, ROLE_STUDENT } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const limit = rateLimit(req, {
    windowMs: 15 * 60 * 1000,
    max: 10,
    keyPrefix: "register",
  });

  if (!limit.success) {
    return NextResponse.json(
      { error: "Demasiados intentos de registro. Inténtalo de nuevo más tarde." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      }
    );
  }

  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "El correo electrónico y la contraseña son obligatorios" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 6 caracteres" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Ya existe un usuario con ese correo electrónico" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name || email.split("@")[0],
        email,
        password: hashedPassword,
        role: isTeacherEmail(email) ? "teacher" : ROLE_STUDENT,
      },
    });

    return NextResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error al crear el usuario" },
      { status: 500 }
    );
  }
}
