"use client";

import { FC, useCallback } from "react";
import clsx from "clsx";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const PortfolioFilter: FC<PortfolioFilterProps> = ({ categories, activeCategory, onChange }) => {
  // Memoized click handler
  const handleClick = useCallback((category: string) => () => onChange(category), [onChange]);

  return (
    <div role="group" aria-label="ตัวกรองหมวด Portfolio" className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={handleClick(category)}
            className={clsx(
              "px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              isActive
                ? "bg-primary text-white border-primary shadow"
                : "bg-base-100 text-base-content border-neutral-300 hover:bg-base-200"
            )}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

PortfolioFilter.displayName = "PortfolioFilter";

export default PortfolioFilter;
