// src/Home/components/Forms/ui/InputField.tsx

import clsx from "clsx";
import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  description?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  className,
  description,
  value,
  onChange,
  error
}) => {
  return (
    <div className={clsx("form-control w-full mb-4", className)}>
      <label htmlFor={name} className="label">
        <span className="label-text font-medium">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </span>
      </label>

      {description && <p className="text-sm text-base-content/70 mb-1">{description}</p>}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={clsx("input input-bordered w-full", {
          "input-error": !!error
        })}
      />

      {error && <span className="label-text-alt text-error mt-1">{error}</span>}
    </div>
  );
};

export default InputField;
