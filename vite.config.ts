// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // ใช้ path จาก tsconfig.json อัตโนมัติ
  ],
  resolve: {
    alias: {
      // เสริม alias แบบ manual สำหรับ fallback (ถ้า tsconfig ไม่มี)
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/utils/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@home": path.resolve(__dirname, "src/Home"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/Layout"),
      "@router": path.resolve(__dirname, "src/Router"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // secure: false // เพิ่มถ้า backend ใช้ self-signed HTTPS
      },
    },
  },
  build: {
    sourcemap: true,
    outDir: "dist", // สามารถระบุชื่อโฟลเดอร์ build ได้เอง
    assetsDir: "assets", // ไดเรกทอรีเก็บ asset
  },
});