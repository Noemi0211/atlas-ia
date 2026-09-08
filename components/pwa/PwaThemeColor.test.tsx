import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { PwaThemeColor } from "./PwaThemeColor";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

function setupMeta(): HTMLMetaElement {
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = "";
  document.head.appendChild(meta);
  return meta;
}

beforeEach(() => {
  localStorage.clear();
  document.head.querySelector('meta[name="theme-color"]')?.remove();
});

afterEach(() => {
  document.head.querySelector('meta[name="theme-color"]')?.remove();
});

describe("PwaThemeColor", () => {
  it("usa el color claro con tema claro", async () => {
    const meta = setupMeta();
    localStorage.setItem("atlas-theme", "light");
    mockMatchMedia(false);

    render(<PwaThemeColor />);

    await vi.waitFor(() => {
      expect(meta.content).toBe("#fafafa");
    });
  });

  it("usa el color oscuro con tema oscuro", async () => {
    const meta = setupMeta();
    localStorage.setItem("atlas-theme", "dark");
    mockMatchMedia(false);

    render(<PwaThemeColor />);

    await vi.waitFor(() => {
      expect(meta.content).toBe("#0f172a");
    });
  });

  it("sigue el sistema cuando el tema es system", async () => {
    const meta = setupMeta();
    localStorage.setItem("atlas-theme", "system");
    mockMatchMedia(true);

    render(<PwaThemeColor />);

    await vi.waitFor(() => {
      expect(meta.content).toBe("#0f172a");
    });
  });
});