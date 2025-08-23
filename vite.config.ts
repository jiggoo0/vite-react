import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const alias = {
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
};

const vendorChunks = [
  { name: "vendor_react", match: /node_modules\/react(?!-dom)/ },
  { name: "vendor_react-dom", match: /node_modules\/react-dom/ },
  { name: "vendor_react-router", match: /node_modules\/react-router/ },
  { name: "vendor_framer", match: /node_modules\/framer-motion/ },
  { name: "vendor_utils", match: /node_modules\/(dayjs|axios|sweetalert2)/ },
  { name: "vendor_ui", match: /node_modules\/(tailwindcss|clsx)/ },
  { name: "vendor_uuid", match: /node_modules\/uuid/ },
  { name: "vendor_misc", match: /node_modules/ },
];

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: { alias },
  define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production") },
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
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
          for (const chunk of vendorChunks) if (chunk.match.test(id)) return chunk.name;
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
    coverage: { provider: "istanbul", reporter: ["text", "json", "html"] },
  },
});