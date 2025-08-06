// src/Home/components/SecretSection/DocumentDownload.tsx

import { FC, useState } from "react";

const DocumentDownload: FC = () => {
  const [docCode, setDocCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ตัวอย่าง: เช็คว่า docCode ไม่ว่างเปล่า และสมมติว่าต้องติดต่อ ADMIN
    if (docCode.trim() === "") {
      setError("กรุณากรอกรหัสเอกสาร");
      setSuccess(false);
    } else {
      // ในที่นี้ไม่ได้เช็ครหัสจริง แค่แสดงข้อความ success
      setError("");
      setSuccess(true);
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        ส่งงาน ดาวน์โหลดเอกสาร & ไฟล์ต่าง ๆ เกี่ยวกับการจ้างงานสำคัญงานจากทางเรา
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <label
          htmlFor="doc-code"
          className="block mb-2 font-medium text-gray-700"
        >
          กรุณากรอกรหัสเอกสาร
        </label>
        <input
          id="doc-code"
          type="text"
          value={docCode}
          onChange={(e) => setDocCode(e.target.value)}
          placeholder="กรอกรหัสเอกสารที่ได้รับจาก ADMIN"
          className="input input-bordered w-full"
          required
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 w-full"
        >
          ตรวจสอบรหัสเอกสาร
        </button>
      </form>

      {error && (
        <p className="text-error text-center mb-4 font-semibold">{error}</p>
      )}

      {success && (
        <p className="text-success text-center font-semibold">
          รหัสเอกสารถูกต้อง สามารถดาวน์โหลดเอกสารได้ที่ ADMIN
        </p>
      )}

      <p className="mt-6 text-center text-sm text-gray-500 italic">
        *หมายเหตุ: รหัสเอกสารติดต่อ ADMIN เท่านั้น
      </p>
    </section>
  );
};

export default DocumentDownload;