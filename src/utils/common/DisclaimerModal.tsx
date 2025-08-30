"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface DisclaimerModalProps {
  title?: string;
  description?: string;
  storageKey?: string;
  confirmLabel?: string;
  onConfirm?: () => void;
}

/**
 * ⚠️ DisclaimerModal
 *
 * - แสดง modal แจ้งเตือน/คำชี้แจงทางกฎหมาย
 * - Overlay gradient + blur + smooth animation
 * - จดจำสถานะการปิด modal ด้วย localStorage
 * - รองรับ dark mode, responsive และ accessibility
 */
const DisclaimerModal = ({
  title = "⚠️ แจ้งเพื่อทราบ",
  description = `เว็บไซต์นี้ไม่ใช่สถาบันการเงิน และไม่มีบริการปล่อยสินเชื่อในทุกกรณี
ทีม JP Visual & Docs ให้บริการเฉพาะด้านงานเอกสารและระบบเท่านั้น`,
  storageKey = "seen_disclaimer",
  confirmLabel = "รับทราบแล้ว",
  onConfirm,
}: DisclaimerModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setOpen(true);
    }
  }, [storageKey]);

  const handleClose = () => {
    localStorage.setItem(storageKey, "true");
    setOpen(false);
    onConfirm?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          className="relative z-[9999]"
          role="alertdialog"
          aria-modal="true"
          aria-label="คำชี้แจงทางกฎหมาย"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-black/50 to-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-sm rounded-xl bg-base-100 text-base-content shadow-xl p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 rounded-full p-1 text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
                aria-label="ปิด"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Title */}
              <Dialog.Title className="text-lg sm:text-xl font-bold mb-2">{title}</Dialog.Title>

              {/* Description */}
              <Dialog.Description className="text-sm sm:text-base leading-relaxed mb-4 whitespace-pre-line">
                {description}
              </Dialog.Description>

              {/* Confirm Button */}
              <button
                onClick={handleClose}
                className="w-full rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition"
              >
                {confirmLabel}
              </button>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
