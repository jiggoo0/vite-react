// ✅ src/utils/common/MobileMenu.tsx — Mobile Drawer Menu (Production Ready)
"use client";

import { FC, useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * 📱 MobileMenu
 *
 * - เมนูแบบ Drawer สำหรับมือถือ
 * - รองรับการปิดด้วย Esc และคลิก backdrop
 * - ป้องกัน scroll เมื่อเปิด
 * - ใช้ animation fade-in / slide-in
 */
const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  // ปิดเมนูเมื่อกด Esc และป้องกัน scroll เมื่อเปิด
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden"; // ป้องกัน scroll background

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ""; // คืนค่า scroll
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="relative ml-auto h-full w-72 bg-base-100 px-6 py-8 shadow-2xl animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="เมนูมือถือ"
      >
        <nav className="flex flex-col gap-5 text-lg font-medium">
          <a
            href="/"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            หน้าแรก
          </a>
          <a
            href="/#portfolio"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            ผลงาน
          </a>
          <a
            href="/#services"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            บริการ
          </a>
          <a
            href="/#about"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            เกี่ยวกับเรา
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
