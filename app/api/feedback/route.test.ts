import { describe, it, expect, vi, beforeEach } from "vitest";

const mocks = vi.hoisted(() => ({
  getServerSession: vi.fn(),
  prisma: {
    userFeedback: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      upsert: vi.fn(),
    },
  },
}));

vi.mock("@/lib/getServerSession", () => ({
  getServerSession: mocks.getServerSession,
}));
vi.mock("@/lib/prisma", () => ({ prisma: mocks.prisma }));

import { GET, POST } from "./route";
import { clearRateLimits } from "@/lib/rate-limit";

const studentSession = {
  user: { id: "u1", email: "estudiante@correo.com", role: "student" },
};
const teacherSession = {
  user: { id: "t1", email: "profesora@correo.com", role: "teacher" },
};

function feedbackRequest(body: unknown): Request {
  return new Request("http://localhost/api/feedback", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": "10.0.0.7",
    },
    body: JSON.stringify(body),
  });
}

describe("GET /api/feedback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("devuelve 401 sin sesión", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("devuelve la valoración propia y la media para una persona estudiante", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    mocks.prisma.userFeedback.findUnique.mockResolvedValue({
      score: 4,
      category: "usabilidad",
      comment: "Muy cómoda",
      createdAt: new Date("2026-09-01"),
      updatedAt: new Date("2026-09-01"),
    });
    mocks.prisma.userFeedback.findMany.mockResolvedValue([
      {
        score: 4,
        category: null,
        comment: null,
        createdAt: new Date("2026-09-01"),
        user: { name: "Estudiante", email: "estudiante@correo.com" },
      },
    ]);

    const res = await GET();
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.own.score).toBe(4);
    expect(data.media).toBe(4);
    expect(data.total).toBe(1);
    expect(data.ratings).toBeUndefined();
  });

  it("incluye todas las valoraciones con persona usuaria si es docente", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    mocks.prisma.userFeedback.findUnique.mockResolvedValue(null);
    mocks.prisma.userFeedback.findMany.mockResolvedValue([
      {
        score: 5,
        category: "contenido",
        comment: "Genial",
        createdAt: new Date("2026-09-02"),
        user: { name: "Laura", email: "laura@correo.com" },
      },
    ]);

    const res = await GET();
    const data = await res.json();
    expect(data.total).toBe(1);
    expect(data.ratings).toHaveLength(1);
    expect(data.ratings[0].user.email).toBe("laura@correo.com");
  });
});

describe("POST /api/feedback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearRateLimits();
  });

  it("devuelve 401 sin sesión", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const res = await POST(feedbackRequest({ score: 5 }));
    expect(res.status).toBe(401);
  });

  it("devuelve 400 con puntuación fuera de rango", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await POST(feedbackRequest({ score: 6 }));
    expect(res.status).toBe(400);
  });

  it("devuelve 400 con categoría inválida", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await POST(feedbackRequest({ score: 4, category: "nada" }));
    expect(res.status).toBe(400);
  });

  it("crea o actualiza la valoración propia", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    mocks.prisma.userFeedback.upsert.mockResolvedValue({
      score: 5,
      category: "contenido",
      comment: "Me encanta",
      updatedAt: new Date("2026-09-03"),
    });

    const res = await POST(feedbackRequest({ score: 5, category: "contenido", comment: "Me encanta" }));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.own.score).toBe(5);
    expect(mocks.prisma.userFeedback.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { userId: "u1" },
        update: expect.objectContaining({ score: 5 }),
      })
    );
  });
});