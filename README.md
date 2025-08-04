✅ สรุป REMD (Readme/Documentation Dev) — สถานะปัจจุบันของโปรเจกต์ JP Visual & Docs

> 💡 รูปแบบ Dev-to-Dev, เน้นสั้น ชัด ใช้งานได้จริงทันที




---

🧱 โครงสร้างโปรเจกต์

project/
├── public/                # ไฟล์ static
├── src/
│   ├── data/              # users.ts (รหัส hash)
│   ├── Home/              # Secret.tsx (หน้าเฉพาะ user)
│   ├── pages/             # หน้า login, main
│   ├── routes/            # Routing setup
│   ├── App.tsx            # Entry Component
│   └── main.tsx           # Entry Point
├── .env                   # (กรณีใช้ env เช่น VITE_API)
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── pnpm-lock.yaml


---

🔧 Tech Stack

Tool	Description

React 18.3.1	Frontend Framework
Vite 5.4.19	Lightning-fast build tool
Tailwind CSS	Styling utility-first framework
DaisyUI 5.0.50	Tailwind component library
bcryptjs 3.0.2	สำหรับ compare hash (frontend-only)
React Router v7	Routing หน้าต่าง ๆ
React Hook Form	ฟอร์ม login
Zod 4.0.14	ฟอร์ม validation
Lucide Icons	UI Icons
Axios 1.11.0	future-proof HTTP client



---

✅ ฟีเจอร์ที่ทำแล้ว

🔐 Authentication

ใช้ localStorage เก็บ session

เช็ค username + password (hash เทียบจาก list)

ระบบ hash bcryptjs → เปรียบเทียบแบบปลอดภัย ไม่ต้อง request API


// เทียบรหัสผ่าน
const valid = await bcrypt.compare(password, user.passwordHash)


---

🔓 Protected Route (Secret.tsx)

ตรวจสอบ user จาก localStorage

ถ้าไม่มี หรือ object ไม่ตรง type → redirect ไป /login

Render เฉพาะหน้า Secret เมื่อผ่านเท่านั้น



---

👤 Users Setup (src/data/users.ts)

จัดเก็บ user/passwordHash/role

ปัจจุบันมี 12 records

ทุก password ถูก hash ด้วย bcrypt $2b$10$


export const users: UserRecord[] = [
  {
    username: "admin2517",
    passwordHash: "...",
    role: "admin"
  },
  // ...
];


---

⚙️ สภาพแวดล้อม Dev

รายการ	ค่าปัจจุบัน

Termux	✅ ใช้งานอยู่ (Android Dev)
Node	รองรับ native build tools
pnpm	ใช้งานจริง
localhost:5173	Port สำหรับ dev preview
no backend	⚠️ ยังไม่มี API หรือ backend



---

📦 แพ็กเกจทั้งหมด (pnpm list)

# production
axios, bcryptjs, react, react-router-dom, tailwindcss, etc.

# dev-only
vite, eslint, daisyui, tsx, @vitejs/plugin-react, typescript, etc.


---

🛠️ จุดแนะนำเพิ่มเติม

จุด	แนะนำ

✅ Auth flow	พร้อมใช้
⚠️ ไม่มี backend	ถ้าจะมี register / dynamic users ต้องต่อ API
⚠️ bcryptjs	ใช้ได้ แต่ถ้ามี backend ควรเปลี่ยนเป็น bcrypt
🔒 ไม่ใช้ external login	ปลอดภัยแบบ internal-only
🧪 ยังไม่มี test	ถ้าจะ production ควรเสริม E2E test เช่น Playwright



---

🧪 การถอนแพ็กเกจ

ถอน bcryptjs ไม่มีผลต่อโครงสร้างถ้าไม่ใช้งาน hashing ฝั่ง client

ถ้าจะใช้ bcrypt ต้อง run ใน Node.js backend เท่านั้น



---

📌 สรุปแนวทาง Dev ปัจจุบัน

โปรเจคเน้น hash login internal (ไม่มี backend)

ผู้ใช้ล็อกอินได้จาก hash ที่เตรียมไว้

ระบบพร้อม deploy static frontend (เช่น Vercel, Netlify)

