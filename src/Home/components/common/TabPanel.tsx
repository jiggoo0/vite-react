"use client";

import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

interface TabPanelProps {
  tabs: string[];
  children: ReactNode[];
  defaultIndex?: number;
  className?: string;
}

const TabPanel: FC<TabPanelProps> = ({ tabs, children, defaultIndex = 0, className }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!tabs.length || !children.length || tabs.length !== children.length) return null;

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={clsx(
              "px-4 py-2 -mb-px font-medium border-b-2 transition-colors",
              activeIndex === idx
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setActiveIndex(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {children[activeIndex]}
      </div>
    </div>
  );
};

export default TabPanel;