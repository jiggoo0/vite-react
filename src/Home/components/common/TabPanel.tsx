"use client";

import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

interface TabPanelProps {
  tabs: string[];
  children: ReactNode[];
  className?: string;
}

/**
 * TabPanel Component
 * -----------------
 * - แสดงหลาย tab พร้อม switch content
 * - Flat, professional UI
 * - Responsive, accessible
 */
const TabPanel: FC<TabPanelProps> = ({ tabs, children, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length !== children.length) {
    console.warn("จำนวน tabs และ children ไม่ตรงกัน");
  }

  return (
    <div className={clsx("w-full", className)}>
      {/* Tab headers */}
      <div className="flex border-b border-gray-200 dark:border-zinc-700">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab}
              type="button"
              className={clsx(
                "px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {children.map((child, index) => (
          <div
            key={index}
            className={clsx({ hidden: index !== activeIndex })}
            role="tabpanel"
            aria-hidden={index !== activeIndex}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

TabPanel.displayName = "TabPanel";

export default TabPanel;