import { describe, it, expect, vi, beforeEach } from "vitest";

const mocks = vi.hoisted(() => ({
  getServerSession: vi.fn(),
  prisma: {
    suggestion: {
      findMany: vi.fn(),
      create: vi.fn(),
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

function suggestionRequest(body: unknown): Request {
  return new Request("http://localhost/api/suggestions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": "10.0.0.8",
    },
    body: JSON.stringify(body),
  });
}

describe("GET /api/suggestions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("devuelve 401 sin sesión", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("una persona estudiante solo ve sus propias propuestas", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    mocks.prisma.suggestion.findMany.mockResolvedValue([
      {
        id: "s1",
        title: "Más ejemplos",
        description: "Añadir más ejemplos",
        category: "contenido",
        status: "pending",
        createdAt: new Date("2026-09-04"),
        updatedAt: new Date("2026-09-04"),
        user: { name: "Estudiante", email: "estudiante@correo.com" },
      },
    ]);

    const res = await GET();
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.suggestions).toHaveLength(1);
    expect(mocks.prisma.suggestion.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { userId: "u1" } })
    );
  });

  it("una persona docente ve todas las propuestas con persona usuaria", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    mocks.prisma.suggestion.findMany.mockResolvedValue([
      {
        id: "s1",
        title: "Más ejemplos",
        description: "Añadir más ejemplos",
        category: "contenido",
        status: "revisada",
        createdAt: new Date("2026-09-04"),
        updatedAt: new Date("2026-09-04"),
        user: { name: "Laura", email: "laura@correo.com" },
      },
    ]);

    const res = await GET();
    const data = await res.json();
    expect(data.suggestions[0].status).toBe("revisada");
    expect(data.suggestions[0].user.email).toBe("laura@correo.com");
  });
});

describe("POST /api/suggestions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearRateLimits();
  });

  it("devuelve 401 sin sesión", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const res = await POST(suggestionRequest({ title: "x", description: "y" }));
    expect(res.status).toBe(401);
  });

  it("devuelve 400 sin título", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await POST(suggestionRequest({ title: "", description: "y" }));
    expect(res.status).toBe(400);
  });

  it("devuelve 400 sin descripción", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await POST(suggestionRequest({ title: "x", description: "" }));
    expect(res.status).toBe(400);
  });

  it("crea la propuesta", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    mocks.prisma.suggestion.create.mockResolvedValue({
      id: "s2",
      title: "Vídeo introductorio",
      description: "Un vídeo al inicio",
      category: "contenido",
      status: "pending",
      createdAt: new Date("2026-09-05"),
      updatedAt: new Date("2026-09-05"),
    });

    const res = await POST(
      suggestionRequest({
        title: "Vídeo introductorio",
        description: "Un vídeo al inicio",
        category: "contenido",
      })
    );
    const data = await res.json();
    expect(res.status).toBe(201);
    expect(data.suggestion.title).toBe("Vídeo introductorio");
    expect(mocks.prisma.suggestion.create).toHaveBeenCalledWith(
      expect.objectContaining({ data: expect.objectContaining({ userId: "u1" }) })
    );
  });
});