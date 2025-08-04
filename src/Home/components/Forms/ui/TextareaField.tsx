// src/Home/components/Forms/ui/TextareaField.tsx

import React from "react";
import clsx from "clsx";

interface TextareaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  description?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  label,
  placeholder = "",
  required = false,
  rows = 4,
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

      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={clsx("textarea textarea-bordered w-full resize-none", error && "textarea-error")}
      />

      {error && <span className="label-text-alt text-error mt-1">{error}</span>}
    </div>
  );
};

export default TextareaField;
