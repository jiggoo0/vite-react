import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@common": path.resolve(__dirname, "src/utils/common"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/Layout"),
      "@router": path.resolve(__dirname, "src/Router"),
      "@home": path.resolve(__dirname, "src/Home"),
      "@api": path.resolve(__dirname, "src/api"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor_react";
            if (id.includes("lodash")) return "vendor_lodash";
            if (id.includes("axios")) return "vendor_axios";
            return "vendor_misc";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
