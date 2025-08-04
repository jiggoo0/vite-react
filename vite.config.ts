// ✅ vite.config.ts - Proper TypeScript Syntax
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Shortcut to /src subfolders
const src = (dir: string) => path.resolve(__dirname, 'src', dir);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': src(''),
      '@assets': src('assets'),
      '@styles': src('styles'),
      '@data': src('data'),
      '@components': src('components'),
      '@common': src('utils/common'),
      '@utils': src('utils'),
      '@hooks': src('hooks'),
      '@layout': src('Layout'),
      '@router': src('Router'),
      '@home': src('Home'),
    },
  },
});