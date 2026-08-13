import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./route";

describe("GET /api/search", () => {
  it("devuelve resultados para una consulta válida", async () => {
    const res = await GET(
      new NextRequest("http://localhost/api/search?q=token")
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body.results)).toBe(true);
    expect(body.results.length).toBeGreaterThan(0);
  });

  it("devuelve lista vacía para consultas muy cortas", async () => {
    const res = await GET(new NextRequest("http://localhost/api/search?q=a"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.results).toEqual([]);
  });

  it("respeta el idioma de la cookie atlas-locale", async () => {
    const res = await GET(
      new NextRequest("http://localhost/api/search?q=token", {
        headers: { cookie: "atlas-locale=en" },
      })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.results.length).toBeGreaterThan(0);
  });
});
