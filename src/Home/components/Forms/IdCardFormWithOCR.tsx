"use client";

import { FC, memo, useState, ChangeEvent, FormEvent } from "react";
import clsx from "clsx";
import { driverLicenseOcr, mapDriverLicenseToForm } from "@/services/driverLicenseOcr";
import IdCardPreview from "./IdCardPreview";

interface IdCardFormProps {
  className?: string;
}

export interface FormData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  address: string;
}

type FormDataRecord = Record<keyof FormData, string | undefined>;

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  required = true,
  disabled = false,
  onChange,
}) => {
  const isTextArea = type === "textarea";
  const sharedClass =
    "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed";

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
          disabled={disabled}
          className={sharedClass}
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
          disabled={disabled}
          className={sharedClass}
        />
      )}
    </div>
  );
};

const IdCardFormWithOCR: FC<IdCardFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
  });
  const [loadingOCR, setLoadingOCR] = useState(false);
  const [ocrError, setOcrError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("ID Card Form Submitted:", formData);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setLoadingOCR(true);
    setOcrError(null);

    try {
      const ocrData = await driverLicenseOcr(file, ["fullName", "idNumber", "birthDate", "address"]);
      setFormData(mapDriverLicenseToForm(ocrData));
    } catch (err: unknown) {
      setOcrError(err instanceof Error ? err.message : "OCR ล้มเหลว กรุณาลองอีกครั้ง");
    } finally {
      setLoadingOCR(false);
    }
  };

  return (
    <div className={clsx("space-y-6", className)}>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 w-full space-y-6">
        <h2 className="text-xl font-semibold">ฟอร์มบัตรประชาชน (OCR)</h2>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">อัปโหลดรูปบัตรประชาชน</label>
          <input type="file" accept="image/*" onChange={handleFileChange} disabled={loadingOCR} />
          {loadingOCR && <p className="text-blue-600">กำลังอ่านข้อมูลจากบัตร...</p>}
          {ocrError && <p className="text-red-600">{ocrError}</p>}
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-h-40 object-contain rounded-md border" />}
        </div>

        <InputField label="ชื่อ-สกุล" name="fullName" value={formData.fullName} placeholder="กรอกชื่อ-นามสกุล" onChange={handleChange} disabled={loadingOCR} />
        <InputField label="เลขบัตรประชาชน" name="idNumber" value={formData.idNumber} placeholder="กรอกเลขบัตรประชาชน" onChange={handleChange} disabled={loadingOCR} />
        <InputField label="วันเกิด" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} disabled={loadingOCR} />
        <InputField label="ที่อยู่" name="address" type="textarea" value={formData.address} placeholder="กรอกที่อยู่" onChange={handleChange} disabled={loadingOCR} />

        <button type="submit" disabled={loadingOCR} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed">
          บันทึก
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Preview บัตรประชาชน</h3>
        <IdCardPreview data={formData as FormDataRecord} className="mx-auto" />
      </div>
    </div>
  );
};

IdCardFormWithOCR.displayName = "IdCardFormWithOCR";
export default memo(IdCardFormWithOCR);