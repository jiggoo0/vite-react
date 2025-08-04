"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface PortfolioCTAProps {
  href: string;
}

/**
 * 📣 PortfolioCTA
 * - ปุ่มลิงก์ดูรายละเอียดโปรเจกต์ (เปิดใหม่ในแท็บใหม่)
 */
const PortfolioCTA: FC<PortfolioCTAProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ดูเพิ่มเติมเกี่ยวกับโปรเจกต์นี้"
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
    >
      ดูเพิ่มเติม
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

export default PortfolioCTA;