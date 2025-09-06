"use client";

import { FC, ReactNode, memo } from "react";
import { motion } from "framer-motion";

interface PageSectionProps {
  children: ReactNode;
  title?: string;
  hideTitle?: boolean;
  className?: string;
  id?: string;
  /** Optional animation delay for staggered effects */
  delay?: number;
}

const PageSection: FC<PageSectionProps> = ({
  children,
  title,
  hideTitle = false,
  className = "",
  id,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      className={`w-full bg-white rounded-xl shadow-md p-6 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {!hideTitle && title && (
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="w-full">{children}</div>
    </motion.section>
  );
};

PageSection.displayName = "PageSection";

export default memo(PageSection);
