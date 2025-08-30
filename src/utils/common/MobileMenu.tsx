"use client";

import { FC, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/* ==============================
   📱 MobileMenu
   -------------------------
   - Drawer เมนูมือถือ
   - รองรับ backdrop click, Esc key, focus trap เบื้องต้น
   - ใช้ TailwindCSS + transition
============================== */
const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  /* ==============================
     ป้องกัน scroll และปิดเมนูด้วย Esc
  ============================= */
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  /* ==============================
     Focus trap เบื้องต้น
  ============================= */
  useEffect(() => {
    if (open && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        "a, button, input, [tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus();
    }
  }, [open]);

  const menuItems = ["หน้าแรก", "ผลงาน", "บริการ", "เกี่ยวกับเรา"];

  return (
    <div
      className={cn("fixed inset-0 z-50 flex pointer-events-none", open && "pointer-events-auto")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "relative ml-auto h-full w-72 bg-base-100 px-6 py-8 shadow-2xl transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="menu"
        aria-modal="true"
        aria-label="เมนูมือถือ"
      >
        <nav className="flex flex-col gap-5 text-lg font-medium">
          {menuItems.map((label, idx) => (
            <a
              key={idx}
              href={`/#${label}`}
              onClick={onClose}
              className="hover:text-primary transition-colors"
              role="menuitem"
              tabIndex={0}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
