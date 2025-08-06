// src/Home/components/Forms/SelectField.tsx

import { ChangeEvent, FC } from "react";

interface Option {
  label: string;
  value: string | number;
}

export interface SelectFieldProps {
  name: string; // ✅ เปลี่ยนจาก id -> name
  label: string;
  options: Option[];
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
}

const SelectField: FC<SelectFieldProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
  error,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          -- กรุณาเลือก --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p
          id={`${name}-error`}
          className="text-red-600 text-sm mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
