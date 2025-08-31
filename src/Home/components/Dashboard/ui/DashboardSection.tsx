"use client";

import { FC, ReactNode } from "react";

interface DashboardSectionProps {
  title?: string;
  children: ReactNode;
  cols?: { sm?: number; md?: number; lg?: number };
}

const DashboardSection: FC<DashboardSectionProps> = ({ title, children, cols }) => {
  const smCols = cols?.sm ?? 2;
  const mdCols = cols?.md ?? 2;
  const lgCols = cols?.lg ?? 3;

  const gridColsClass = `grid grid-cols-1 ${
    smCols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
  } ${mdCols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} ${
    lgCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
  } gap-6`;

  return (
    <section className="space-y-4">
      {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
      <div className={gridColsClass}>{children}</div>
    </section>
  );
};

export default DashboardSection;
