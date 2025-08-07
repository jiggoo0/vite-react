import { FC, useState } from "react";

const DocumentDownload: FC = () => {
  const [docCode, setDocCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (docCode.trim() === "") {
      setError("กรุณากรอกรหัสเอกสาร");
      setSuccess(false);
      return;
    }

    // สมมติว่าต้องติดต่อ ADMIN เพื่อขอรหัสที่ถูกต้อง
    setError("");
    setSuccess(true);
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ส่งงาน ดาวน์โหลดเอกสาร & ไฟล์ต่าง ๆ เกี่ยวกับการจ้างงานสำคัญงานจากทางเรา
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
          className="input input-bordered w-full"
          aria-describedby="doc-code-note"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ตรวจสอบรหัสเอกสาร"
        >
          ตรวจสอบรหัสเอกสาร
        </button>
      </form>

      {error && (
        <p
          className="text-error text-center mt-4 font-semibold"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}

      {success && (
        <p
          className="text-success text-center mt-4 font-semibold"
          role="alert"
          aria-live="assertive"
        >
          รหัสเอกสารถูกต้อง สามารถดาวน์โหลดเอกสารได้ที่ ADMIN
        </p>
      )}

      <p
        id="doc-code-note"
        className="mt-6 text-center text-sm text-gray-500 italic"
      >
        *หมายเหตุ: รหัสเอกสารติดต่อ ADMIN เท่านั้น
      </p>
    </section>
  );
};

export default DocumentDownload;