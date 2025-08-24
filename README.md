# 📘 JP Visual & Docs – Technical

> เอกสารทางเทคนิคภายในสำหรับทีมพัฒนาและดูแลระบบ

**อัปเดตล่าสุด:** 2025-08-19

---

## ⚙️ Tech Stack

- **Framework:** React 19 + Vite 7
- **ภาษา:** TypeScript 5.9 (strict mode)
- **สไตล์:** Tailwind CSS 3 + DaisyUI + shadcn/ui
- **แอนิเมชัน:** Framer Motion
- **ฟอร์ม:** React Hook Form + Zod
- **ทดสอบ:** Vitest + React Testing Library
- **Build Tools:** Vite + ESBuild
- **แพ็กเกจจัดการ:** pnpm >= 10
- **Workflow:** Git + Husky + Lint-Staged

---

## 📂 โครงสร้างโปรเจกต์

src/ ├── App/ # RootApp.tsx = entry composition (providers, router, etc.) ├── Home/ # โมดูลฟีเจอร์หลัก (ฟอร์ม, เพจ, ฟีเจอร์เฉพาะ) ├── Layout/ # Layout หลัก: Navbar, Footer ├── Router/ # Routing + Guard ├── ThemeProvider/ # Theme context & hooks ├── assets/ # Static assets (โลโก้, รูปภาพ) ├── config/ # Config & ค่าคงที่ ├── context/ # React Contexts ├── data/ # Mock data (services, portfolio, testimonials) ├── hooks/ # Custom hooks ├── services/ # API utilities ├── styles/ # Global CSS ├── tests/ # Unit & Integration tests ├── types/ # Global TS types ├── utils/ # Helpers & utilities ├── index.tsx # จุด entry ของระบบ (bootstrap React root)

> **หมายเหตุ:** `main.tsx` และ `App.tsx` ถูกถอดออกแล้ว → ใช้ `index.tsx` + `App/RootApp.tsx` แทน

---

## 🛠 การพัฒนา

1. **ความต้องการระบบ**
   - Node.js >= 18
   - pnpm >= 10
   - Git

2. **ติดตั้ง dependency**

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

TypeScript: strict mode (ห้ามใช้ any)

Naming Convention

Components → PascalCase เช่น Hero.tsx

Hooks → useCamelCase เช่น useAuth.ts

Utils → camelCase เช่น cn.ts


Git Commit Message

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

Router Guards: GuardRoutes.tsx และ RoleGuard.tsx

SecretPage: จำกัดการเข้าถึงด้วย role

DocumentDownload.tsx: ต้องใช้ลิงก์แบบหมดอายุ

Mock Data: ใช้เฉพาะฝั่ง client → ต้องเชื่อม API จริงใน production



---

⚡ ประสิทธิภาพ

ใช้ dynamic import สำหรับ libs หนัก (html2canvas, jspdf)

รูปทั้งหมดต้องใช้ WebP หรือไฟล์ที่ optimize แล้ว

ใช้ lazy load สำหรับ sections ที่ไม่จำเป็นต้องโหลดทันที

เปิดใช้ code splitting ผ่าน Vite

ใช้เฉพาะฝั่ง



---

🚀 Deployment

Hosting: Vercel → https://404notfontjp.vercel.app

Build command: pnpm build

Output: dist/

.env ใช้งานสำหรับ config



---

🗑️ Cleanup

ไฟล์ที่ควรลบ:

src/assets/logo___ .svg

src/assets/portfolio/og-image.png

src/data/portfolioSchema.ts

src/tests/*

src/types/custom.d.ts

src/vite-env.d.ts


Component ซ้ำ: SelectField.tsx มีมากกว่า 1 ที่ → รวมเป็น source เดียว



---

📌 หมายเหตุทีม Dev

ต้องใช้ strict typing ตลอด ห้ามใช้ any

UI/UX ต้องมีความเป็นมืออาชีพ → responsive grid + motion

ห้ามแตกไฟล์เกินความจำเป็น

ยึดตามโครงสร้าง logic ที่เข้มงวด (Thyscip & Elin)



---

🛤️ Roadmap (ถัดไป)

[ ] รวม SelectField.tsx ให้เหลือไฟล์เดียว

[ ] ลบ unused files เพื่อลด bundle size

[ ] เชื่อม API จริงแทน mock data

[ ] ปรับระบบดาวน์โหลดไฟล์ให้เป็น secure link + expiration

[ ] Optimize รูปภาพทั้งหมดให้เป็น WebP

[ ] เพิ่ม animation และ polish UI ใน Hero, Services, Portfolio

[ ] เพิ่ม Test Coverage ให้ครอบคลุม use cases สำคัญ



---

⚡ สรุป

ตอนนี้ README สะท้อนโครงสร้างใหม่ที่ใช้ main.tsx + RootApp.tsx



---

🔗 Repository

https://github.com/jiggoo0/vite-react
```
