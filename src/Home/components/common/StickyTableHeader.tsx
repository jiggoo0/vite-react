"use client";

import { FC, ReactNode } from "react";

interface StickyTableHeaderProps {
  children: ReactNode;
}

/**
 * StickyTableHeader Component
 * ---------------------------
 * - ทำให้ thead/table header ติดอยู่ด้านบนเวลา scroll
 * - ใช้กับตารางที่มีข้อมูลยาว
 */
const StickyTableHeader: FC<StickyTableHeaderProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="sticky top-0 bg-gray-100 z-10">{children}</thead>
      </table>
    </div>
  );
};

StickyTableHeader.displayName = "StickyTableHeader";

export default StickyTableHeader;
