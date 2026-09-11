import { describe, it, expect, vi, beforeEach } from "vitest";

const mocks = vi.hoisted(() => ({
  getServerSession: vi.fn(),
  prisma: {
    suggestion: {
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

vi.mock("@/lib/getServerSession", () => ({
  getServerSession: mocks.getServerSession,
}));
vi.mock("@/lib/prisma", () => ({ prisma: mocks.prisma }));

import { PATCH, DELETE } from "./route";

const studentSession = {
  user: { id: "u1", email: "estudiante@correo.com", role: "student" },
};
const teacherSession = {
  user: { id: "t1", email: "profesora@correo.com", role: "teacher" },
};
const ctx = { params: Promise.resolve({ id: "s1" }) };

describe("PATCH /api/suggestions/[id]", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("devuelve 401 sin sesión", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const res = await PATCH(
      new Request("http://localhost/api/suggestions/s1", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "revisada" }),
      }),
      ctx
    );
    expect(res.status).toBe(401);
  });

  it("devuelve 403 para una persona estudiante", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await PATCH(
      new Request("http://localhost/api/suggestions/s1", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "revisada" }),
      }),
      ctx
    );
    expect(res.status).toBe(403);
  });

  it("devuelve 400 con estado no válido", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    const res = await PATCH(
      new Request("http://localhost/api/suggestions/s1", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "nada" }),
      }),
      ctx
    );
    expect(res.status).toBe(400);
  });

  it("devuelve 404 si la propuesta no existe", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    mocks.prisma.suggestion.findUnique.mockResolvedValue(null);
    const res = await PATCH(
      new Request("http://localhost/api/suggestions/s1", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "implementada" }),
      }),
      ctx
    );
    expect(res.status).toBe(404);
  });

  it("actualiza el estado como docente", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    mocks.prisma.suggestion.findUnique.mockResolvedValue({ id: "s1" });
    mocks.prisma.suggestion.update.mockResolvedValue({
      id: "s1",
      title: "Título",
      description: "Descripción",
      category: null,
      status: "implementada",
      createdAt: new Date("2026-09-04"),
      updatedAt: new Date("2026-09-06"),
    });

    const res = await PATCH(
      new Request("http://localhost/api/suggestions/s1", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "implementada" }),
      }),
      ctx
    );
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.suggestion.status).toBe("implementada");
  });
});

describe("DELETE /api/suggestions/[id]", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("devuelve 403 para una persona estudiante", async () => {
    mocks.getServerSession.mockResolvedValue(studentSession);
    const res = await DELETE(
      new Request("http://localhost/api/suggestions/s1", { method: "DELETE" }),
      ctx
    );
    expect(res.status).toBe(403);
  });

  it("elimina la propuesta como docente", async () => {
    mocks.getServerSession.mockResolvedValue(teacherSession);
    mocks.prisma.suggestion.findUnique.mockResolvedValue({ id: "s1" });
    mocks.prisma.suggestion.delete.mockResolvedValue({ id: "s1" });
    const res = await DELETE(
      new Request("http://localhost/api/suggestions/s1", { method: "DELETE" }),
      ctx
    );
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(mocks.prisma.suggestion.delete).toHaveBeenCalledWith({ where: { id: "s1" } });
  });
});