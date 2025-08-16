"use client";

import { FC, memo, useState } from "react";
import clsx from "clsx";

// ---------------------- Types ----------------------
interface IdCardFormProps {
  className?: string;
}

interface FormData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  address: string;
}

// ---------------------- Component ----------------------
const IdCardForm: FC<IdCardFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ID Card Form Submitted:", formData);
    // TODO: implement actual submit logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "bg-white rounded-xl shadow-md p-6 w-full space-y-4",
        className
      )}
    >
      <h2 className="text-xl font-semibold mb-4">ฟอร์มบัตรประชาชน</h2>

      <div className="flex flex-col space-y-3">
        <label className="font-medium">ชื่อ-นามสกุล</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="กรอกชื่อ-นามสกุล"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium">เลขบัตรประชาชน</label>
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="กรอกเลขบัตรประชาชน"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium">วันเกิด</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-medium">ที่อยู่</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="กรอกที่อยู่"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        บันทึก
      </button>
    </form>
  );
};

IdCardForm.displayName = "IdCardForm";
export default memo(IdCardForm);
