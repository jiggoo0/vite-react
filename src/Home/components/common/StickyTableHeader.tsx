"use client";

import { FC, ReactNode, memo } from "react";

interface StickyTableHeaderProps {
  headers: string[];
  className?: string;
}

const StickyTableHeader: FC<StickyTableHeaderProps> = ({
  headers,
  className = "",
}) => {
  return (
    <thead className={`bg-gray-100 dark:bg-gray-800 ${className}`}>
      <tr className="sticky top-0 z-10">
        {headers.map((header, idx) => (
          <th
            key={idx}
            scope="col"
            className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wide"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

StickyTableHeader.displayName = "StickyTableHeader";

export default memo(StickyTableHeader);
