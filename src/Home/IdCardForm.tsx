"use client";

import { FC, memo, useState, useEffect, ChangeEvent, FormEvent, DragEvent } from "react";
import clsx from "clsx";

// =======================
// Types
// =======================
interface IdCardFormWithOCRProps {
  className?: string;
}

interface FormData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  address: string;
}

// =======================
// Reusable Input Component
// =======================
interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  required = true,
  onChange,
}) => {
  const isTextArea = type === "textarea";
  const commonClass =
    "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium">{label}</label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonClass}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonClass}
        />
      )}
    </div>
  );
};

// =======================
// Helper: Validate ID number
// =======================
const validateIdNumber = (id: string) => /^\d{13}$/.test(id);

// =======================
// Main Component
// =======================
const IdCardFormWithOCR: FC<IdCardFormWithOCRProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
  });

  const [ocrLoading, setOcrLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // =======================
  // OCR Simulation / Upload
  // =======================
  const handleFileChange = async (file: File) => {
    if (!file) return;
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setError("รองรับเฉพาะไฟล์ PNG, JPG, JPEG");
      return;
    }

    setError(null);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setOcrLoading(true);

    // Simulate OCR
    setTimeout(() => {
      setFormData({
        fullName: "สมชาย ใจดี",
        idNumber: "1234567890123",
        birthDate: "1990-01-01",
        address: "123/45 ถนนสุขใจ แขวงสุขใจ เขตสุขใจ กรุงเทพฯ",
      });
      setOcrLoading(false);
    }, 1500);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Cleanup object URL
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  // =======================
  // Form Submit
  // =======================
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateIdNumber(formData.idNumber)) {
      setError("เลขบัตรประชาชนต้องมี 13 หลัก");
      return;
    }

    console.log("ID Card Form Submitted:", formData);
    alert("บันทึกข้อมูลเรียบร้อย!");
    // TODO: implement actual submit logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("bg-white rounded-xl shadow-md p-6 w-full space-y-6", className)}
    >
      <h2 className="text-xl font-semibold">ฟอร์มบัตรประชาชน (OCR)</h2>

      {/* Upload ID Card */}
      <div
        className="flex flex-col space-y-2 border-dashed border-2 border-gray-300 rounded-md p-4 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label className="font-medium">คลิกหรือวางรูปบัตรประชาชนที่นี่</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
          id="idCardUpload"
        />
        <p className="text-sm text-gray-500">รองรับ PNG, JPG, JPEG</p>
        {ocrLoading && <p className="text-blue-500" role="status" aria-live="polite">กำลังอ่านข้อมูลจากภาพ...</p>}
        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-h-40 object-contain rounded-md border" />}
      </div>

      {/* Input Fields */}
      <InputField label="ชื่อ-สกุล" name="fullName" value={formData.fullName} placeholder="กรอกชื่อ-นามสกุล" onChange={handleChange} />
      <InputField label="เลขบัตรประชาชน" name="idNumber" value={formData.idNumber} placeholder="กรอกเลขบัตรประชาชน" onChange={handleChange} />
      <InputField label="วันเกิด" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} />
      <InputField label="ที่อยู่" name="address" type="textarea" value={formData.address} placeholder="กรอกที่อยู่" onChange={handleChange} />

      {error && <p className="text-red-600" role="alert">{error}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={ocrLoading}
        className={clsx(
          "w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1",
          ocrLoading && "opacity-50 cursor-not-allowed"
        )}
      >
        {ocrLoading ? "กำลังประมวลผล..." : "บันทึก"}
      </button>
    </form>
  );
};

IdCardFormWithOCR.displayName = "IdCardFormWithOCR";
export default memo(IdCardFormWithOCR);