// src/Home/components/Forms/IdCardFormWithOCR.tsx
"use client";

import { FC, useState, ChangeEvent, FormEvent } from "react";
import clsx from "clsx";
import IdCardPreview, { IdCardData } from "./IdCardPreview";

// =======================
// OCR Mock (แทน driverLicenseOcr)
// =======================
const mockOCR = async (): Promise<IdCardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "สมชาย",
        surname: "ใจดี",
        idNumber: "1234567890123",
        dob: "1990-01-01",
        issueDate: "2020-01-01",
        expiryDate: "2030-01-01",
      });
    }, 1500);
  });
};

// =======================
// Main Component
// =======================
const IdCardFormWithOCR: FC<{ className?: string }> = ({ className }) => {
  const [formData, setFormData] = useState<IdCardData>({
    name: "",
    surname: "",
    idNumber: "",
    dob: "",
    issueDate: "",
    expiryDate: "",
  });

  const [ocrLoading, setOcrLoading] = useState(false);

  const handleOCR = async () => {
    setOcrLoading(true);
    const data = await mockOCR();
    setFormData(data);
    setOcrLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className={clsx("space-y-6", className)}>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">ฟอร์มบัตรประชาชน (OCR)</h2>

        <button
          type="button"
          onClick={handleOCR}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {ocrLoading ? "กำลังอ่านข้อมูล..." : "Simulate OCR"}
        </button>

        <input
          type="text"
          name="name"
          placeholder="ชื่อ"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="surname"
          placeholder="นามสกุล"
          value={formData.surname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="idNumber"
          placeholder="เลขบัตรประชาชน"
          value={formData.idNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          name="dob"
          placeholder="วันเกิด"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          name="issueDate"
          placeholder="วันที่ออกบัตร"
          value={formData.issueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          name="expiryDate"
          placeholder="วันหมดอายุ"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          บันทึก
        </button>
      </form>

      <IdCardPreview data={formData} className="mx-auto" />
    </div>
  );
};

export default IdCardFormWithOCR;
