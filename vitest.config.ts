/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    css: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    clearMocks: true,
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});
