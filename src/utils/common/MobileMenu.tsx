// ✅ src/utils/common/MobileMenu.tsx — เมนู Drawer สำหรับมือถือ (Production Ready)

import { FC } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * 📱 MobileMenu
 *
 * - เมนูแบบ Drawer สำหรับอุปกรณ์มือถือ
 * - ใช้ใน Header.tsx โดยเปิด/ปิดผ่าน prop `open`
 * - รองรับ Anchor link ภายในหน้า
 */
const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-base-100 px-6 py-8 overflow-y-auto shadow-2xl animate-slide-in-right"
      role="dialog"
      aria-modal="true"
      aria-label="เมนูมือถือ"
    >
      <nav className="flex flex-col gap-5 text-lg font-medium">
        <a href="/" onClick={onClose} className="hover:text-primary transition-colors">
          หน้าแรก
        </a>
        <a href="/#portfolio" onClick={onClose} className="hover:text-primary transition-colors">
          ผลงาน
        </a>
        <a href="/#services" onClick={onClose} className="hover:text-primary transition-colors">
          บริการ
        </a>
        <a href="/#about" onClick={onClose} className="hover:text-primary transition-colors">
          เกี่ยวกับเรา
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
