// ✅ src/Home/components/Services/Services.tsx — Wrapper สำหรับ Section บริการ JP Visual & Docs

"use client";

import { FC } from "react";
import ServicesSection from "@/Home/components/Services/ServicesSection";

/**
 * 📦 Services
 *
 * - Wrapper หลักของ Section บริการทั้งหมดในหน้า Home
 * - ครอบคลุม ServicesSection ที่รวม UI & Logic ทั้งหมดไว้ภายใน
 * - รองรับ Accessibility (A11y) ด้วย `aria-labelledby`, `role`
 * - ใช้ Utility Class จาก Tailwind สำหรับ layout ที่ยืดหยุ่น
 */
const Services: FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      role="region"
      className="relative isolate overflow-hidden bg-base-100 text-base-content py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* 👁️ สำหรับ Screen Reader */}
      <h2 id="services-title" className="sr-only">
        บริการของเรา
      </h2>

      {/* 🧩 บริการทั้งหมด */}
      <ServicesSection />
    </section>
  );
};

export default Services;