"use client";

import { ChangeEvent, FC } from "react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string | number;
}

export interface SelectFieldProps {
  name: string; // ใช้ name เป็นหลัก
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
  className,
  error,
}) => {
  return (
    <div className={clsx("w-full", className)}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
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
        className={clsx(
          "block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600",
          disabled &&
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed text-gray-400 dark:text-gray-500"
        )}
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
          role="alert"
          className="text-red-600 dark:text-red-400 text-sm mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
