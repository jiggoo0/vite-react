// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// --- Node.js ESM __dirname & __filename fix ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- Detect Termux environment ---
const isTermux = process.env.TERMUX_VERSION !== undefined;

// --- Vite Configuration ---
export default defineConfig({
  plugins: [
    react(),           // React + Fast Refresh
    tsconfigPaths(),   // Resolve TS path aliases
    VitePWA({          // Progressive Web App support
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Vite React App",
        short_name: "ViteReact",
        description: "A modern Vite + React + TS + Tailwind App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
      disable: isTermux, // Disable PWA in Termux (dev environment)
    }),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@home": resolve(__dirname, "src/Home"),
      "@assets": resolve(__dirname, "src/assets"),
      "@styles": resolve(__dirname, "src/styles"),
      "@data": resolve(__dirname, "src/data"),
      "@components": resolve(__dirname, "src/components"),
      "@common": resolve(__dirname, "src/utils/common"),
      "@utils": resolve(__dirname, "src/utils"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@layout": resolve(__dirname, "src/Layout"),
      "@router": resolve(__dirname, "src/Router"),
      "@api": resolve(__dirname, "src/api"),
      "@services": resolve(__dirname, "src/services"),
      "@__mocks__": resolve(__dirname, "src/__mocks__"),
      "@config": resolve(__dirname, "src/config"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true, // Fail if port is busy
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Proxy API requests to backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
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
    include: ["react", "react-dom"], // Pre-bundle dependencies
  },
});