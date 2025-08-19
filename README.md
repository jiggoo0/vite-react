# 📘 JP Visual & Docs – Technical README

> เอกสารทางเทคนิคภายในสำหรับทีมพัฒนาและดูแลระบบ  
> อัปเดตล่าสุด: 2025-08-19

---

## ⚙️ Tech Stack

- **Framework**: React 19 + Vite 7
- **ภาษา**: TypeScript 5.9 (strict mode)
- **สไตล์**: Tailwind CSS 3 + DaisyUI + shadcn/ui
- **แอนิเมชัน**: Framer Motion
- **ฟอร์ม**: React Hook Form + Zod
- **ทดสอบ**: Vitest + React Testing Library
- **Build Tools**: Vite + ESBuild
- **แพ็กเกจจัดการ**: pnpm >= 10
- **Workflow**: Git + Husky + Lint-Staged

---

## 📂 โครงสร้างโปรเจกต์

src ├── Home/ # โมดูลฟีเจอร์หลัก (ฟอร์ม, เพจ, ฟีเจอร์เฉพาะ) ├── Layout/ # Layout หลัก: Navbar, Footer ├── Router/ # Routing + Guard ├── ThemeProvider/ # Theme context & hooks ├── assets/ # Static assets (โลโก้, รูปภาพ) ├── config/ # Config & ค่าคงที่ ├── context/ # React Contexts ├── data/ # Mock data (services, portfolio, testimonials) ├── hooks/ # Custom hooks ├── services/ # API utilities ├── styles/ # Global CSS ├── tests/ # Unit & Integration tests ├── types/ # Global TS types ├── utils/ # Helpers & utilities └── main.tsx # จุด entry ของระบบ

---

## 🛠 การพัฒนา

### 1. ความต้องการระบบ

- Node.js >= 18
- pnpm >= 10
- Git

### 2. ติดตั้ง dependency

```bash
pnpm install

3. รัน dev server

pnpm dev

URL: http://localhost:5173

4. Build & Preview

pnpm build
pnpm preview

5. รันทดสอบ

pnpm test


---

🧩 มาตรฐานการเขียนโค้ด

Linting: ESLint + Prettier (บังคับผ่าน Husky + Lint-Staged)

TypeScript: ใช้ strict mode (ห้ามใช้ any)

Naming Convention

Components → PascalCase เช่น Hero.tsx

Hooks → useCamelCase เช่น useAuth.ts

Utils → camelCase เช่น cn.ts



Git Commit Message

<type>(scope): message

feat – ฟีเจอร์ใหม่

fix – แก้บั๊ก

docs – เอกสาร

style – ฟอร์แมตโค้ด / spacing

refactor – ปรับโครงสร้างโค้ด

test – เพิ่ม/แก้การทดสอบ

chore – งานดูแลทั่วไป


ตัวอย่าง:

feat(services): เพิ่มระบบดาวน์โหลดไฟล์แบบหมดอายุ
fix(auth): แก้ปัญหา refresh token ไม่ทำงาน


---

🔒 ความปลอดภัย

Router Guards: ใช้ GuardRoutes.tsx และ RoleGuard.tsx

SecretPage: จำกัดการเข้าถึงด้วย role

ดาวน์โหลดไฟล์: DocumentDownload.tsx ต้องใช้ลิงก์แบบหมดอายุ

Mock Data: ใช้เฉพาะฝั่ง client → ต้องเชื่อม API จริงใน production



---

⚡ ประสิทธิภาพ

ใช้ dynamic import สำหรับ libs หนัก (html2canvas, jspdf)

รูปทั้งหมดต้องใช้ WebP หรือไฟล์ที่ optimize แล้ว

ใช้ lazy load สำหรับ sections ที่ไม่จำเป็นต้องโหลดทันที

เปิดใช้ code splitting ผ่าน Vite



---

🚀 Deployment

Hosting: Vercel → 404notfontjp.vercel.app

คำสั่ง build:


pnpm build

Output: dist/

ตอนนี้ไม่มี .env ใช้งาน



---

🗑️ Cleanup

ไฟล์ที่ควรลบ:

src/assets/logo___.svg

src/assets/portfolio/og-image.png

src/data/portfolioSchema.ts

src/tests/*

src/types/custom.d.ts

src/vite-env.d.ts


Component ซ้ำ:

SelectField.tsx มีมากกว่า 1 ที่ → รวมเป็น source เดียว




---

📌 หมายเหตุทีม Dev

ต้องใช้ strict typing ตลอด ห้าม any

UI/UX ต้องมี ความเป็นมืออาชีพ → responsive grid + motion

ห้ามแตกไฟล์เกินความจำเป็น

ยึดตามโครงสร้าง logic ที่เข้มงวด (Thyscip & Elin)


🛤️ Roadmap (ถัดไป)

[ ] รวม SelectField.tsx ให้เหลือไฟล์เดียว

[ ] ลบ unused files เพื่อลด bundle size

[ ] เชื่อม API จริงแทน mock data

[ ] ปรับระบบดาวน์โหลดไฟล์ให้เป็น secure link + expiration

[ ] Optimize รูปภาพทั้งหมดให้เป็น WebP

[ ] เพิ่ม animation และ polish UI ใน Hero, Services, Portfolio

[ ] เพิ่ม Test Coverage ให้ครอบคลุม use cases สำคัญ



นี่คือรายละเอียดโปรเจกต์ Frontend ของเรา โปรดอ่านและเก็บไว้ใช้งาน:

# 📘 JP Visual & Docs – Technical Specification

## ⚙️ Tech Stack
- React 19 + Vite 7
- TypeScript 5.9 (strict mode)
- Tailwind CSS 3 + DaisyUI + shadcn/ui
- Framer Motion (animation)
- React Hook Form + Zod (forms)
- Vitest + React Testing Library (test)
- Vite + ESBuild (build tools)
- pnpm >= 10 (package manager)
- Git + Husky + Lint-Staged (workflow)

## 📂 Project Structure
src/
- Home/ (features & pages)
- Layout/ (Navbar, Footer, Layout)
- Router/ (routing + guards)
- ThemeProvider/ (theme context & hooks)
- assets/ (images, logos)
- config/ (configs, constants)
- context/ (React contexts)
- data/ (mock data: services, portfolio, testimonials)
- hooks/ (custom hooks)
- services/ (API utilities)
- styles/ (global CSS)
- tests/ (unit & integration tests)
- types/ (TS types)
- utils/ (helpers, cn, error boundaries)
- main.tsx (entry point)

## 🛠 Development
- ติดตั้ง: `pnpm install`
- รัน dev: `pnpm dev` (localhost:5173)
- Build: `pnpm build` + Preview: `pnpm preview`
- Test: `pnpm test`

## 🧩 Code Standards
- ESLint + Prettier (บังคับผ่าน Husky + Lint-Staged)
- TypeScript strict (ห้ามใช้ any)
- Naming: Components = PascalCase, Hooks = useCamelCase, Utils = camelCase
- Git commit convention:
  - feat, fix, docs, style, refactor, test, chore

## 🔒 Security
- Router Guard: `GuardRoutes.tsx`, `RoleGuard.tsx`
- SecretPage: จำกัดสิทธิ์การเข้าถึง
- DocumentDownload.tsx: ต้องใช้ลิงก์ดาวน์โหลดแบบหมดอายุ
- Mock data ใช้เฉพาะ client → ต้องเชื่อม API จริงเมื่อ production

## ⚡ Performance
- Dynamic import สำหรับ libs หนัก (`html2canvas`, `jspdf`)
- ใช้ WebP/optimized images
- Lazy load sections ที่ไม่ critical
- Code splitting ผ่าน Vite

## 🚀 Deployment
- Hosting: Vercel (404notfontjp.vercel.app)
- Build command: `pnpm build`
- Output dir: `dist/`
- ไม่มี .env ตอนนี้

## 🗑️ Cleanup
- ลบไฟล์ unused:
  - `src/assets/logo___.svg`
  - `src/assets/portfolio/og-image.png`
  - `src/data/portfolioSchema.ts`
  - `src/tests/*`
  - `src/types/custom.d.ts`
  - `src/vite-env.d.ts`
- รวม component ที่ซ้ำ เช่น `SelectField.tsx`

## 📌 Notes
- Strict typing เท่านั้น
- UI/UX ต้อง professional (responsive grid + motion)
- ห้ามแตกไฟล์เกินจำเป็น
- ยึดตาม logic ที่เข้มงวด (Thyscip & Elin)

---
```
