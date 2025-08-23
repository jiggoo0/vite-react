import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@home": path.resolve(__dirname, "src/Home"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@common": path.resolve(__dirname, "src/utils/common"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/Layout"),
      "@router": path.resolve(__dirname, "src/Router"),
      "@api": path.resolve(__dirname, "src/api"),
      "@services": path.resolve(__dirname, "src/services"),
      "@__mocks__": path.resolve(__dirname, "src/__mocks__"),
      "@config": path.resolve(__dirname, "src/config"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    target: "esnext",
    sourcemap: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  cacheDir: "node_modules/.vite",
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});