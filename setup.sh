#!/usr/bin/env bash
set -e

echo "🚀 Starting project setup..."

# 1️⃣ ตรวจสอบ Node.js และ PNPM
echo "🔹 Node version: $(node -v)"
echo "🔹 PNPM version: $(pnpm -v)"

# 2️⃣ ติดตั้ง dependencies หลัก
echo "🔹 Installing dependencies..."
pnpm add react react-dom clsx axios bcryptjs
pnpm add -D typescript @types/react @types/react-dom @vitejs/plugin-react vite tailwindcss postcss autoprefixer daisyui eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin

# 3️⃣ สร้างไฟล์ Tailwind config ถ้ายังไม่มี
if [ ! -f tailwind.config.cjs ]; then
  echo "🔹 Generating tailwind.config.cjs..."
  npx tailwindcss init -p
fi

# 4️⃣ แก้ไข tailwind.config.cjs ให้ใช้ daisyUI
cat > tailwind.config.cjs <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // เพิ่มธีมได้ตามต้องการ
  },
}
EOL

# 5️⃣ สร้าง tsconfig.json ถ้ายังไม่มี
if [ ! -f tsconfig.json ]; then
  echo "🔹 Generating tsconfig.json..."
  cat > tsconfig.json <<EOL
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
EOL
fi

# 6️⃣ สร้างไฟล์ global CSS ถ้ายังไม่มี
mkdir -p src/styles
cat > src/styles/global.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# 7️⃣ แนะนำ Vite config (vite.config.ts)
cat > vite.config.ts <<EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173
  }
});
EOL

# 8️⃣ แนะนำ declaration สำหรับไฟล์ unknown
mkdir -p src/@types
cat > src/@types/custom.d.ts <<EOL
declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.json';
EOL

# 9️⃣ แนะนำ module สำหรับ DriverLicense types (แก้ TS2307)
mkdir -p src/Home/SecretPage/DriverLicense/types
cat > src/Home/SecretPage/DriverLicense/types/driverLicense.d.ts <<EOL
export interface DriverLicenseData {
  fullName: string;
  dob: string;
  idNumber: string;
  [key: string]: any;
}

export type DriverLicenseFieldKeys = keyof DriverLicenseData;

export interface DriverLicenseConfig {
  label: string;
  required?: boolean;
  placeholder?: string;
}
EOL

echo "✅ Project setup complete!"
echo "Run: pnpm dev to start your Vite + React + daisyUI project"