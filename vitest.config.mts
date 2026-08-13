import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [path.join(rootDir, "vitest.setup.ts")],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", ".next", "out"],
  },
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
});
