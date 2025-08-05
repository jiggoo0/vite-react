import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

/**
 * 📢 DisclaimerModal
 *
 * - แสดงคำชี้แจงทางกฎหมาย เมื่อผู้ใช้เข้าครั้งแรก
 * - บันทึกการยืนยันผ่าน localStorage (`seen_disclaimer`)
 * - รองรับ accessibility / responsive / animation
 */
const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seen_disclaimer");
    if (!seen) setOpen(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem("seen_disclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-[9999]">
      {/* 🔳 Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* 📦 Modal Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white p-6 text-gray-800 shadow-xl">
          <Dialog.Title className="text-lg font-bold mb-2">⚠️ แจ้งเพื่อทราบ</Dialog.Title>
          <Dialog.Description className="text-sm mb-4 leading-relaxed">
            เว็บไซต์นี้ไม่ใช่สถาบันการเงิน และไม่มีบริการปล่อยสินเชื่อในทุกกรณี
            <br />
            ทีม JP Visual & Docs ให้บริการเฉพาะด้านงานเอกสารและระบบเท่านั้น
          </Dialog.Description>

          <button
            onClick={handleClose}
            className="w-full rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition"
          >
            รับทราบแล้ว
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DisclaimerModal;