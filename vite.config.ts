// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // ช่วยให้ alias จาก tsconfig ทำงานได้
  ],
  resolve: {
    alias: {
      // กรณีอยากกำหนดเพิ่มจาก tsconfig หรือแก้ไขเฉพาะบางอัน
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      buffer: "buffer/",
      process: "process/browser",
      events: "events/",
      vm: "vm-browserify",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("dayjs")) return "dayjs";
            if (id.match(/(html2canvas|jspdf|html2pdf)/)) return "pdf";
            return "vendor";
          }
        },
      },
    },
  },
});
