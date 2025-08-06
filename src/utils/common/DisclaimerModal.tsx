// ✅ src/utils/common/DisclaimerModal.tsx — Legal Notice Modal

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

/**
 * 📢 DisclaimerModal
 *
 * - แสดงคำชี้แจงทางกฎหมายเมื่อผู้ใช้เข้าครั้งแรก
 * - บันทึกการยืนยันผ่าน localStorage (`seen_disclaimer`)
 * - รองรับ a11y / responsive / animation
 */
const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  // ✅ แสดง modal ถ้ายังไม่เคยดูมาก่อน
  useEffect(() => {
    const seen = localStorage.getItem("seen_disclaimer");
    if (!seen) setOpen(true);
  }, []);

  // ✅ ปิด modal และบันทึกสถานะ
  const handleClose = () => {
    localStorage.setItem("seen_disclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-[9999]">
      {/* 🔳 Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* 📦 Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white p-6 text-gray-800 shadow-xl">
          {/* 🧠 Title */}
          <Dialog.Title className="text-lg font-bold mb-2">
            ⚠️ แจ้งเพื่อทราบ
          </Dialog.Title>

          {/* 📄 Description */}
          <Dialog.Description className="text-sm leading-relaxed mb-4">
            เว็บไซต์นี้ไม่ใช่สถาบันการเงิน และไม่มีบริการปล่อยสินเชื่อในทุกกรณี
            <br />
            ทีม JP Visual & Docs ให้บริการเฉพาะด้านงานเอกสารและระบบเท่านั้น
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
