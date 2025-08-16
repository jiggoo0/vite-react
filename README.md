# JP Visual & Docs

เว็บแอปพลิเคชันที่พัฒนาด้วย **React + Vite + TypeScript + TailwindCSS**  
รองรับการ lint, format, และ type-check ครบถ้วน พร้อมโครงสร้างการทำงานระดับ Production

---

## 🚀 Tech Stack

- ⚡ [Vite](https://vitejs.dev/) - Next-gen frontend tooling
- ⚛️ [React 18](https://react.dev/) - UI Library
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type Safety
- 🎨 [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) - UI Styling
- 🎭 [Framer Motion](https://www.framer.com/motion/) - Animation
- ✅ [Zod](https://zod.dev/) - Schema Validation
- 📦 State/Forms: React Hook Form
- 🔒 Auth Utils: bcryptjs, uuid
- 🛠️ Tooling: ESLint + Prettier + Husky + Lint-staged

---

## 📂 Project Structure

├── public/ # static assets ├── src/ │ ├── components/ # UI components │ ├── hooks/ # custom hooks │ ├── pages/ # route pages │ ├── utils/ # helper functions │ ├── types/ # TypeScript types/interfaces │ └── main.tsx # app entry ├── .eslintrc.json # ESLint config ├── .prettierrc # Prettier config ├── tsconfig.json # TypeScript config ├── vite.config.ts # Vite config └── package.json

---

## 🛠️ Development

### 1. Clone Repo

```bash
git clone https://github.com/your-org/vite-react.git
cd vite-react

2. Install Dependencies

ใช้ pnpm แนะนำ (เร็วและเหมาะกับ monorepo)
ถ้าไม่มี ติดตั้งก่อน → npm install -g pnpm

pnpm install

3. Start Dev Server

pnpm dev

เปิดเบราว์เซอร์ที่ http://localhost:5173


---

🏗️ Build & Deploy

pnpm build

ผลลัพธ์จะอยู่ในโฟลเดอร์ dist/

Preview build ด้วย:

pnpm preview


---

🔍 Lint & Format

Lint Code

pnpm lint

Format Code

pnpm format

Type Check

pnpm type-check


---

🧹 Clean Project

ลบ build + cache

pnpm clean


---

🔒 Git Hooks (Husky)

โปรเจคนี้ใช้ Husky + Lint-staged
ก่อน commit จะมีการตรวจสอบ + format อัตโนมัติ

ติดตั้ง Husky:

pnpm prepare


---

⚡ CI/CD (GitHub Actions)

โปรเจคนี้มีการตั้งค่า GitHub Actions Workflow สำหรับตรวจสอบคุณภาพโค้ดทุกครั้งที่ push หรือ PR

📌 Workflow: .github/workflows/ci.yml

name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Lint
        run: pnpm lint

      - name: Type Check
        run: pnpm type-check

      - name: Build
        run: pnpm build


---

📜 License

MIT © JP Visual & Docs Team

---

👉 แนะนำให้วางไฟล์นี้ที่:
- `README.md` → root ของโปรเจค
- `.github/workflows/ci.yml` → สำหรับ CI/CD
```
