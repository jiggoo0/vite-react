# JP Visual & Docs - Vite React Project

โปรเจกต์ Single Page Application (SPA) ด้วย **React + TypeScript** พร้อม **Vite** และ **TailwindCSS**  
รองรับฟีเจอร์: modular components, Framer Motion animation, react-hook-form, PDF/Canvas export, และ dashboard components

---

## 📂 โครงสร้างโปรเจกต์

src/ ├─ components/ # React Components │ ├─ Hero/ │ ├─ About/ │ ├─ Services/ │ ├─ Dashboard/ │ ├─ Testimonials/ │ └─ common/ # CardWrapper, LoadingSpinner, etc. ├─ data/ # JSON / static data ├─ types/ # TypeScript types ├─ utils/ # Helper functions and common utils ├─ styles/ # Global CSS / Tailwind overrides └─ pages/ # Route-based components (if using file-based routing)

---

## 🚀 เทคโนโลยีหลัก

- **React 18 + TypeScript**
- **Vite** (fast bundler)
- **TailwindCSS + DaisyUI**
- **Framer Motion** (animation & transitions)
- **Zod + react-hook-form** (form validation)
- **Husky + lint-staged** (pre-commit checks)
- **ESLint + Prettier** (code quality & formatting)

---

## ⚡ การติดตั้ง & รันโปรเจกต์

```bash
# Clone repository
git clone https://github.com/jiggoo0/vite-react.git
cd vite-react

# ติดตั้ง dependencies
pnpm install

# รันโปรเจกต์ในโหมด dev
pnpm dev

# build สำหรับ production
pnpm build

# ตรวจสอบ TypeScript
pnpm type-check

# รัน ESLint
pnpm lint


---

🧩 การใช้งาน Husky Pre-commit

Pre-commit script จะรัน:

1. TypeScript type-check


2. ESLint (เฉพาะไฟล์ staged)


3. Prettier formatting (เฉพาะไฟล์ staged)



ไฟล์: .husky/pre-commit

pnpm pre-commit


---

📝 ข้อมูลเพิ่มเติม

ID Card Preview & Form

Dynamic Risk Dashboard

Portfolio Gallery

FAQ & Support Components

User Board / Testimonials / About / Hero Sections



---

📄 License

MIT © JP Visual & Docs

---

```
