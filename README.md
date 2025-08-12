📂 Project Overview - README.md

This document summarizes the technical structure, layout, technologies, and custom implementations used in the project as explored and refined through the conversation

✨ Project Purpose

A modern, modular, scalable web application built with React + TypeScript, following a clean architectural pattern optimized for maintainability, readability, and performance.

---

🎓 Tech Stack

Layer Tech/Library Purpose

Frontend React, TypeScript Component-based UI
Styling Tailwind CSS, DaisyUI Utility-first + Component UI framework
Forms React Hook Form + Zod Form handling and schema validation
Routing React Router DOM v7 Declarative routing
Animation Framer Motion Animations & motion
Auth & Guards Custom Role-Based Guards Page-level access control
ESLint @typescript-eslint, Prettier Code linting and formatting
Build Tool Vite Fast dev/build tooling
Assets WebP, SVG, PNG Optimized web assets
Hosting Vercel Deployment and CI/CD

---

🏛️ Project Structure

project-root/
├── dist/ # Production build output
├── public/ # Public static assets
├── scripts/ # Helper & utility scripts (e.g., backup, hashPassword)
├── src/
│ ├── Home/ # Main page modules
│ │ ├── components/ # Domain-specific components (About, Hero, Portfolio)
│ ├── Layout/ # Layouts with Header/Footer
│ ├── Router/ # AppRouter and Route Guards
│ ├── components/ # Common components
│ ├── data/ # Static data files (portfolioItems, schemas)
│ ├── hooks/ # Custom React hooks (e.g., useAuth)
│ ├── styles/ # Global CSS
│ ├── utils/ # Shared utility functions
│ └── main.tsx # Application bootstrap entry
├── .eslintrc, tailwind.config.ts, tsconfig.\*.json
├── README.md, STRUCTURE.md # Project documentation
└── package.json, vite.config.ts

---

🔄 Folder Details (Key Focus)

1. src/Home

Contains main modules like CustomerAssessmentForm, Hero, About, Portfolio, Services, etc.

Each component follows separation of UI (ui/) and logic (index.tsx, \*.tsx).

Modular and tree-shakable imports.

2. src/components

Shared reusable components (Button, Navbar, LogoutButton, etc.)

Organized by domain and UI widgets.

3. src/Layout

Global layout components with Header, Footer, and ThemeToggle.

4. src/Router

Implements AppRouter with nested route guards using GuardRoutes.tsx and RoleGuard.tsx.

5. src/utils/common

Helpers for fallback UI, mobile menu, scroll animations, and modals.

---

🚀 Deployment & Build

Build command: vite build

Output directory: /dist

Vercel config: vercel.json

Assets handled via vite, postcss, and autoprefixer

---

🌀 Custom Scripts

Script Purpose

backup-project.sh Archive or backup project
clean.sh Clean artifacts
check-structure.sh Check folder consistency
hashPassword.ts Utility to generate hashed password

---

✅ Design Philosophy

Atomic Design approach for component layering

Clean separation of logic, presentation, and state

DRY principle: shared elements abstracted to components or utils

Fully typed codebase with TypeScript

Modular layout for rapid scalability

---

🎉 What Was Done (Summary from Conversation)

Improved folder and file layout structure for clarity and scalability

Defined guarded routes and role-based access control system

Separated layout, UI, and logic into atomic components (e.g., Hero, About)

Implemented responsive design using Tailwind

Applied React Hook Form + Zod for complex forms

Added fallbacks, loaders, and modals for better UX

Introduced custom utility hooks and scripts

Verified and cleaned assets & image structures (WebP, SVG)

Enhanced SEO and performance structure (asset optimization)

---

🔍 Suggestions for Next Steps

Add unit tests using Vitest or Jest

Implement CI/CD pipeline in Vercel/GitHub Actions

Convert more static data to CMS integration (e.g., Contentful or Sanity)

Add analytics or behavior tracking (e.g., Plausible, Google Analytics)

---

🚀 Ready for production with maintainability in mind.

สรุป README.md เชิงเทคนิคของโปรเจกต์นี้ถูกจัดทำเรียบร้อยแล้วในเอกสาร “Readme Project Summary” โดยครอบคลุมหัวข้อหลัก ๆ ดังนี้:

---

🗂️ โครงสร้างโปรเจกต์

โปรเจกต์นี้ถูกออกแบบด้วยโฟลเดอร์โครงสร้างที่ชัดเจน รองรับแนวทาง Modular Architecture + Component-based Design บนเทคโนโลยี React + Vite + TypeScript พร้อม TailwindCSS และการจัดการ State ด้วย React Hooks

/
├── dist/ # ไฟล์ build แล้ว (สำหรับ production)
├── public/ # Static assets ใช้แสดงผลตรง
├── scripts/ # Utility script (เช่น backup, hash password)
├── src/ # Source code หลัก
│ ├── Home/ # หน้าหลักและ Component ย่อย
│ ├── Layout/ # Layout หลัก เช่น Header/Footer
│ ├── Router/ # App Routing + Route Guards
│ ├── components/ # Component แยกใช้ซ้ำได้
│ ├── data/ # Static data/schema เช่น portfolio items
│ ├── hooks/ # Custom hooks
│ ├── styles/ # global styles (Tailwind)
│ ├── utils/ # ฟังก์ชันช่วยทั่วไป + component ที่ใช้ซ้ำ
│ └── main.tsx # Entry point
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.\*
└── README.md

---

⚙️ เทคโนโลยีที่ใช้

Stack รายละเอียด

Frontend Framework React 18 (with TypeScript)
Build Tool Vite
CSS Framework TailwindCSS + DaisyUI
State Handling React Hook Form (ฟอร์ม), useState/useEffect
Routing React Router DOM (v7)
Animation Framer Motion
Icon Lucide-react
Validation Zod (schema-based form validation)
Auth Guard Custom RoleGuard, GuardRoutes
Form Componentization FormWrapper, InputField, SelectField, TextareaField
Custom Utilities cn.ts (className merge), common/ component (BackToTop, ErrorBoundary, etc.)

---

🧪 การจัดการ Code Quality

ใช้ ESLint สำหรับตรวจ linting และ format code ตามมาตรฐาน

แยก Component เป็น module-based และใช้แนวทาง index.ts สำหรับ export

จัดกลุ่ม Component UI ไว้ใน /ui ในแต่ละโมดูลย่อย เพื่อความเป็นระเบียบ

เขียน script/clean.sh และ script/check-structure.sh สำหรับจัดการระบบภายใน

---

🖼️ Assets & Static Resources

Images และ WebP อยู่ภายใต้ public/assets/ และ src/assets/

ใช้ vite สำหรับจัดการ static imports แบบ lazy-load ได้

มีการใช้ภาพ responsive เช่น .webp แทน .jpg หรือ .png เพื่อ performance

---

🔐 ความปลอดภัย

ใช้ RoleGuard.tsx และ GuardRoutes.tsx เพื่อจำกัดสิทธิ์การเข้าถึงหน้าเพจ

มีการเข้ารหัสรหัสผ่านผ่าน scripts/hashPassword.ts ด้วย bcrypt

---

🛠️ Scripts สำคัญ

Script คำอธิบาย

backup-project.sh สำรองข้อมูลโปรเจกต์
clean.sh ลบโฟลเดอร์ build, dist
check-structure.sh ตรวจสอบโครงสร้างโปรเจกต์
hashPassword.ts สร้าง hash ของ password

---

🔄 รูปแบบการพัฒนา

ใช้ pnpm เป็น package manager เพื่อประสิทธิภาพและความเร็ว

pnpm-lock.yaml ช่วยล็อกเวอร์ชันทุก dependency

ใช้ Vite dev server และ hot reload สำหรับความเร็วในการพัฒนา
