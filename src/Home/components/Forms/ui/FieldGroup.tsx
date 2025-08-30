// src/Home/components/Forms/ui/FieldGroup.tsx
import React from "react";

type FieldGroupProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4; // Number of columns
  className?: string;
};

const FieldGroup: React.FC<FieldGroupProps> = ({ children, columns = 1, className = "" }) => {
  // Determine grid columns based on the "columns" prop
  const columnClass = (() => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  })();

  return <div className={`grid gap-4 ${columnClass} ${className}`}>{children}</div>;
};

export default FieldGroup;
