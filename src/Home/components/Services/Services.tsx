// ✅ src/Home/components/Services/Services.tsx — Wrapper สำหรับ Section บริการ JP Visual & Docs

"use client";

import { FC } from "react";
import ServicesSection from "./ServicesSection";

/**
 * 📦 Services
 *
 * - Section หลักที่ใช้แสดงบริการของ JP Visual & Docs
 * - ครอบคลุมทั้ง FeatureList, FeatureAwards และบริการทั้งหมด
 * - ใช้ร่วมกับ ServicesSection ที่รวม logic ภายในทั้งหมด
 * - รองรับ A11y และ semantics ที่เหมาะสม
 */
const Services: FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      role="region"
      className="relative isolate overflow-hidden bg-base-100 text-base-content py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 id="services-title" className="sr-only">
        บริการของเรา
      </h2>
      <ServicesSection />
    </section>
  );
};

export default Services;
