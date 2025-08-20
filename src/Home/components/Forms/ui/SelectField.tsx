"use client";

import React, { forwardRef } from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string | null;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, name, error = null, required, className = "", ...rest }, ref) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <label htmlFor={name} className="mb-1 font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          id={name}
          name={name}
          ref={ref}
          required={required}
          className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"}`}
          {...rest}
        />
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
