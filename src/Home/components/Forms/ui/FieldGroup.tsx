// src/Home/components/Forms/ui/FieldGroup.tsx

import React from "react";

interface FieldGroupProps {
  label?: string;
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  description?: string;
}

const FieldGroup: React.FC<FieldGroupProps> = ({
  label,
  htmlFor,
  children,
  required = false,
  description
}) => {
  return (
    <div className="form-control w-full mb-4">
      {label && (
        <label htmlFor={htmlFor} className="label">
          <span className="label-text font-medium">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        </label>
      )}
      {description && <p className="text-sm text-base-content/70 mb-1">{description}</p>}
      {children}
    </div>
  );
};

export default FieldGroup;
