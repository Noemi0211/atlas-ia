import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: () => ({ value: "es" }),
  }),
}));

import { POST } from "./route";
import { clearRateLimits } from "@/lib/rate-limit";

function chatRequest(content: string, ip = "10.0.0.5"): Request {
  return new Request("http://localhost/api/chat", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify({ messages: [{ role: "user", content }] }),
  });
}

describe("POST /api/chat (modo offline)", () => {
  beforeEach(() => {
    clearRateLimits();
  });

  it(
    "responde un stream SSE con tokens y fin",
    async () => {
      const res = await POST(chatRequest("¿qué es un LLM?"));
      expect(res.status).toBe(200);
      expect(res.headers.get("content-type")).toContain("text/event-stream");
      const text = await res.text();
      expect(text).toContain("data: ");
      expect(text).toContain("[DONE]");
      expect(text).toContain("LLM");
    },
    15_000
  );

  it("devuelve 400 sin mensajes", async () => {
    const req = new Request("http://localhost/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages: [] }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
