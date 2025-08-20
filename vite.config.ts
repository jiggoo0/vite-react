import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: {
      "@__mocks__": path.resolve(__dirname, "src/__mocks__"),
    },
  },

  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  },

  server: {
    host: "0.0.0.0", // ให้เข้าจาก localhost บน Termux ได้
    port: 5173,
  },

  build: {
    target: "esnext",
    sourcemap: true,
    minify: "esbuild",
    outDir: "dist",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("react") && !id.includes("react-dom")) return "vendor_react";
            if (id.includes("react-dom")) return "vendor_react-dom";
            if (id.includes("react-router-dom") || id.includes("react-router")) return "vendor_react-router";
            if (id.includes("framer-motion")) return "vendor_framer";
            if (id.includes("dayjs") || id.includes("axios") || id.includes("sweetalert2")) return "vendor_utils";
            if (id.includes("tailwindcss") || id.includes("clsx")) return "vendor_ui";
            if (id.includes("uuid")) return "vendor_uuid";
            return "vendor_misc";
          }
        },
      },
    },
  },

  cacheDir: "node_modules/.vite",

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    css: true,
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});