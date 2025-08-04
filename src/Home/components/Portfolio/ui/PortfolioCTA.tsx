// ✅ src/Home/components/Portfolio/ui/PortfolioCTA.tsx — ปุ่ม CTA สำหรับ Portfolio

"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface PortfolioCTAProps {
  href: string;
}

/**
 * 📣 PortfolioCTA
 * - ปุ่ม CTA ลิงก์ไปยังโปรเจกต์หรือดูเพิ่มเติม
 * - ใช้ภายในรายการ Portfolio
 */
const PortfolioCTA: FC<PortfolioCTAProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
    >
      ดูเพิ่มเติม
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

export default PortfolioCTA;