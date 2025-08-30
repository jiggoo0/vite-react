"use client";

import { FC, ReactNode } from "react";

interface DashboardSectionProps {
  title?: string; // หัวข้อ section (optional)
  children: ReactNode; // เนื้อหาภายใน section
  cols?: { sm?: number; md?: number; lg?: number }; // กำหนดจำนวนคอลัมน์สำหรับ responsive
}

/**
 * DashboardSection
 * -------------------------
 * Wrapper สำหรับจัด layout section บน Dashboard
 * - รองรับ title
 * - รองรับ responsive grid (sm, md, lg)
 */
const DashboardSection: FC<DashboardSectionProps> = ({ title, children, cols }) => {
  const smCols = cols?.sm ?? 2;
  const mdCols = cols?.md ?? 2;
  const lgCols = cols?.lg ?? 3;

  // Tailwind ไม่รองรับ dynamic template string ตรงๆ ดังนั้นใช้ conditional mapping
  const gridColsClass = `grid grid-cols-1 ${
    smCols === 1 ? "sm:grid-cols-1" : smCols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
  } ${mdCols === 1 ? "md:grid-cols-1" : mdCols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} ${
    lgCols === 1 ? "lg:grid-cols-1" : lgCols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
  } gap-6`;

  return (
    <section className="space-y-4">
      {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
      <div className={gridColsClass}>{children}</div>
    </section>
  );
};

export default DashboardSection;
