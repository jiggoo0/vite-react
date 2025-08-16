'use client';

import { FC, useState } from 'react';

const DocumentDownload: FC = () => {
  const [docCode, setDocCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!docCode.trim()) {
      setError('กรุณากรอกรหัสเอกสาร');
      return;
    }

    setLoading(true);
    try {
      // 🔹 ตัวอย่างเรียก API หรือเช็ครหัสจริงกับ ADMIN
      await new Promise<void>((res) => setTimeout(res, 800)); // simulate delay

      const isValid = docCode === 'ADMIN123'; // ตัวอย่างเช็ครหัส
      if (isValid) {
        setSuccess(true);
      } else {
        setError('รหัสเอกสารถูกต้องไม่ถูกต้อง กรุณาลองใหม่');
      }
    } catch {
      setError('เกิดข้อผิดพลาด โปรดลองอีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-base-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ดาวน์โหลดเอกสารสำคัญเกี่ยวกับการจ้างงาน
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <label htmlFor="doc-code" className="block font-medium text-gray-700">
          กรุณากรอกรหัสเอกสาร
        </label>
        <input
          id="doc-code"
          type="text"
          value={docCode}
          onChange={(e) => setDocCode(e.target.value)}
          placeholder="กรอกรหัสเอกสารที่ได้รับจาก ADMIN"
          className="input input-bordered w-full focus:ring focus:ring-primary focus:outline-none transition-all duration-200"
          aria-describedby="doc-code-note"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2"
          disabled={loading}
          aria-label="ตรวจสอบรหัสเอกสาร"
        >
          {loading ? <span className="loading loading-spinner loading-sm" /> : 'ตรวจสอบรหัสเอกสาร'}
        </button>
      </form>

      {error && (
        <p className="text-error text-center mt-4 font-semibold" role="alert" aria-live="assertive">
          {error}
        </p>
      )}

      {success && (
        <p className="text-success text-center mt-4 font-semibold" role="alert" aria-live="polite">
          รหัสเอกสารถูกต้อง ✅ สามารถดาวน์โหลดเอกสารได้ที่ ADMIN
        </p>
      )}

      <p id="doc-code-note" className="mt-6 text-center text-sm text-gray-500 italic">
        *หมายเหตุ: รหัสเอกสารติดต่อ ADMIN เท่านั้น
      </p>
    </section>
  );
};

export default DocumentDownload;
