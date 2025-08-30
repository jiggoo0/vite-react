"use client";

import React, { forwardRef } from "react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

export type Option = {
  label: string;
  value: string;
};

export type SelectFieldProps<T extends FieldValues = FieldValues> =
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: Path<T>;
    error?: string | null;
    options: Option[];
    field?: ControllerRenderProps<T, Path<T>>; // รองรับ Controller แบบ typed
    required?: boolean;
    className?: string;
  };

const SelectFieldUI = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { label, name, options, error = null, required = false, className = "", field, ...rest },
    ref
  ) => {
    const selectProps = field
      ? {
          value: field.value ?? "",
          onChange: field.onChange,
          onBlur: field.onBlur,
        }
      : {};

    return (
      <div className={`flex flex-col ${className}`}>
        <label htmlFor={name} className="mb-1 font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <select
          id={name}
          name={name}
          ref={ref}
          required={required}
          className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"} bg-white`}
          {...selectProps}
          {...rest}
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

        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

SelectFieldUI.displayName = "SelectFieldUI";

export default SelectFieldUI;
