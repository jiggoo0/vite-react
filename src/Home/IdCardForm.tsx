"use client";

import { FC, memo, useState, ChangeEvent, FormEvent } from "react";
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

// ---------------------- Reusable Input ----------------------
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
  const sharedClass =
    "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
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
          className={sharedClass}
        />
      )}
    </div>
  );
};

// ---------------------- Component ----------------------
const IdCardForm: FC<IdCardFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    idNumber: "",
    birthDate: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("ID Card Form Submitted:", formData);
    // TODO: implement actual submit logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "bg-white rounded-xl shadow-md p-6 w-full space-y-6",
        className
      )}
    >
      <h2 className="text-xl font-semibold">ฟอร์มบัตรประชาชน</h2>

      <InputField
        label="ชื่อ-นามสกุล"
        name="fullName"
        value={formData.fullName}
        placeholder="กรอกชื่อ-นามสกุล"
        onChange={handleChange}
      />

      <InputField
        label="เลขบัตรประชาชน"
        name="idNumber"
        value={formData.idNumber}
        placeholder="กรอกเลขบัตรประชาชน"
        onChange={handleChange}
      />

      <InputField
        label="วันเกิด"
        name="birthDate"
        value={formData.birthDate}
        type="date"
        onChange={handleChange}
      />

      <InputField
        label="ที่อยู่"
        name="address"
        value={formData.address}
        type="textarea"
        placeholder="กรอกที่อยู่"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
      >
        บันทึก
      </button>
    </form>
  );
};

IdCardForm.displayName = "IdCardForm";
export default memo(IdCardForm);