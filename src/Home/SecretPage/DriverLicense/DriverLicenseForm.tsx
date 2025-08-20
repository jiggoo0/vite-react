"use client";

import { FC, useState, ChangeEvent } from "react";
import DriverLicensePreview from "./DriverLicensePreview";
import { DriverLicenseData } from "./types/driverLicense";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import "@/styles/driverLicense.css";

/** ค่าเริ่มต้นของฟอร์มใบขับขี่ */
const DEFAULT_DATA: DriverLicenseData = {
  fullName: "",
  idNumber: "",
  dob: "",
  issueDate: "",
  expiryDate: "",
  address: "",
  photo: "",
  licenseType: "",
  bloodType: "",
};

/** ระบุ field ที่เป็นวันที่เพื่อเปลี่ยน input type เป็น date */
const DATE_FIELDS: (keyof DriverLicenseData)[] = [
  "dob",
  "issueDate",
  "expiryDate",
];

const DriverLicenseForm: FC = () => {
  const [formData, setFormData] = useState<DriverLicenseData>(DEFAULT_DATA);

  /** อัพเดตค่าฟอร์ม */
  const handleChange = (field: keyof DriverLicenseData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /** ดาวน์โหลด preview เป็น PNG */
  const handleExportPNG = () =>
    exportCardAsPNG("driver-license-preview", "driver-license.png");

  /** ดาวน์โหลด preview เป็น PDF */
  const handleExportPDF = () =>
    exportCardAsPDF("driver-license-preview", "driver-license.pdf", true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-center">ฟอร์มใบขับขี่จำลอง</h1>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
        {Object.entries(formData).map(([key, value]) => {
          const inputId = `dl-${key}`;
          const isDate = DATE_FIELDS.includes(key as keyof DriverLicenseData);

          return (
            <div key={key} className="flex flex-col">
              <label htmlFor={inputId} className="mb-1 font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={inputId}
                type={isDate ? "date" : "text"}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(key as keyof DriverLicenseData, e.target.value)
                }
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          );
        })}
      </div>

      {/* Preview ใบขับขี่ */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <DriverLicensePreview data={formData} />

        {/* ปุ่มดาวน์โหลด */}
        <div className="flex gap-4 mt-4">
          <button className="btn btn-primary" onClick={handleExportPNG}>
            ดาวน์โหลด PNG
          </button>
          <button className="btn btn-secondary" onClick={handleExportPDF}>
            ดาวน์โหลด PDF (A4)
          </button>
        </div>
      </div>
    </div>
  );
};

DriverLicenseForm.displayName = "DriverLicenseForm";
export default DriverLicenseForm;