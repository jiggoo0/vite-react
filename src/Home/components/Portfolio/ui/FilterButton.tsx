"use client";

import { FC } from "react";
import { cn } from "@/utils/cn";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary",
        isActive
          ? "bg-primary text-white border-primary shadow"
          : "bg-base-100 text-base-content border-base-300 hover:bg-base-200 hover:border-base-400"
      )}
    >
      {label}
    </button>
  );
};

FilterButton.displayName = "FilterButton";

export default FilterButton;
