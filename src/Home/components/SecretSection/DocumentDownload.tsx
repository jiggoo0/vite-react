"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DocumentDownload
 * ----------------
 * - ฟอร์มสำหรับกรอกรหัสเอกสาร
 * - รองรับ animation ด้วย Framer Motion
 * - รองรับสถานะ: loading, success, error
 * - Accessible: aria-labelledby, aria-live, role
 */
const DocumentDownload: FC = () => {
  const [docCode, setDocCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!docCode.trim()) {
      setError("กรุณากรอกรหัสเอกสาร");
      return;
    }

    setLoading(true);
    try {
      await new Promise<void>((res) => setTimeout(res, 800));
      const isValid = docCode === "ADMIN123";
      if (isValid) setSuccess(true);
      else setError("รหัสเอกสารถูกต้องไม่ถูกต้อง กรุณาลองใหม่");
    } catch {
      setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="max-w-lg mx-auto p-6 bg-base-100 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="document-download-title"
    >
      <h2
        id="document-download-title"
        className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"
      >
        ดาวน์โหลดเอกสารสำคัญเกี่ยวกับการจ้างงาน
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <label htmlFor="doc-code" className="block font-medium text-gray-700 dark:text-gray-300">
          กรุณากรอกรหัสเอกสาร
        </label>
        <input
          id="doc-code"
          type="text"
          value={docCode}
          onChange={(e) => setDocCode(e.target.value)}
          placeholder="กรอกรหัสเอกสารที่ได้รับจาก ADMIN"
          className="input input-bordered w-full focus:ring focus:ring-primary focus:outline-none transition-all duration-200 dark:bg-gray-800 dark:text-gray-100"
          aria-describedby="doc-code-note"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          disabled={loading}
          aria-label="ตรวจสอบรหัสเอกสาร"
        >
          {loading ? <span className="loading loading-spinner loading-sm" /> : "ตรวจสอบรหัสเอกสาร"}
        </button>
      </form>

      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            className="text-error text-center mt-4 font-semibold"
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            key="success"
            className="text-success text-center mt-4 font-semibold"
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            รหัสเอกสารถูกต้อง ✅ สามารถดาวน์โหลดเอกสารได้ที่ ADMIN
          </motion.p>
        )}
      </AnimatePresence>

      <p
        id="doc-code-note"
        className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 italic"
      >
        *หมายเหตุ: รหัสเอกสารติดต่อ ADMIN เท่านั้น
      </p>
    </motion.section>
  );
};

DocumentDownload.displayName = "DocumentDownload";

export default DocumentDownload;
