import NextAuth from "next-auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";

const handler = NextAuth(authOptions);

interface AuthContext {
  params: Promise<{ nextauth: string[] }>;
}

export async function handleAuth(req: NextRequest, context: AuthContext) {
  if (req.method === "POST") {
    const limit = rateLimit(req, {
      windowMs: 60_000,
      max: 10,
      keyPrefix: "login",
    });

    if (!limit.success) {
      return NextResponse.json(
        { error: "Demasiados intentos de inicio de sesión. Inténtalo de nuevo más tarde." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
        }
      );
    }
  }

  return handler(req, context);
}

export { handleAuth as GET, handleAuth as POST };
