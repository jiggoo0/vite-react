// src/Home/components/Forms/ui/FieldGroup.tsx
import React from "react";

type FieldGroupProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4; // จำนวนคอลัมน์ที่ต้องการ
  className?: string;
};

const FieldGroup: React.FC<FieldGroupProps> = ({
  children,
  columns = 1,
  className = "",
}) => {
  // กำหนด grid-cols ตาม columns
  const columnClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "grid-cols-1 md:grid-cols-2"
        : columns === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1 md:grid-cols-4";

  return (
    <div className={`grid gap-4 ${columnClass} ${className}`}>{children}</div>
  );
};

export default FieldGroup;
