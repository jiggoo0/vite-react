// ✅ src/utils/common/DisclaimerModal.tsx — Improved Legal Notice Modal
"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface DisclaimerModalProps {
  title?: string;
  description?: string;
  storageKey?: string;
}

const DisclaimerModal = ({
  title = "⚠️ แจ้งเพื่อทราบ",
  description = `เว็บไซต์นี้ไม่ใช่สถาบันการเงิน และไม่มีบริการปล่อยสินเชื่อในทุกกรณี
  ทีม JP Visual & Docs ให้บริการเฉพาะด้านงานเอกสารและระบบเท่านั้น`,
  storageKey = "seen_disclaimer",
}: DisclaimerModalProps) => {
  const [open, setOpen] = useState(false);

  // ✅ แสดง modal ถ้ายังไม่เคยดูมาก่อน
  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setOpen(true);
    }
  }, [storageKey]);

  // ✅ ปิด modal และบันทึกสถานะ
  const handleClose = () => {
    localStorage.setItem(storageKey, "true");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="relative z-[9999]"
      aria-label="คำชี้แจงทางกฎหมาย"
    >
      {/* 🔳 Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* 📦 Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="w-full max-w-sm rounded-xl bg-base-100 text-base-content shadow-xl p-6 relative animate-fade-in"
        >
          {/* ❌ ปุ่มปิด */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 rounded-full p-1 text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="ปิด"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          {/* 🧠 Title */}
          <Dialog.Title className="text-lg font-bold mb-2">{title}</Dialog.Title>

          {/* 📄 Description */}
          <Dialog.Description className="text-sm leading-relaxed mb-4 whitespace-pre-line">
            {description}
          </Dialog.Description>

          {/* ✅ Confirm Button */}
          <button
            onClick={handleClose}
            className="w-full rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition"
          >
            รับทราบแล้ว
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DisclaimerModal;