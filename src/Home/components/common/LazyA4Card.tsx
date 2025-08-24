"use client";

import { FC, ReactNode, memo } from "react";
import { motion } from "framer-motion";

interface LazyA4CardProps {
  title?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

const LazyA4Card: FC<LazyA4CardProps> = ({
  title,
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-xl shadow-md w-full max-w-[210mm] mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      )}
      <div>{children}</div>
    </motion.div>
  );
};

LazyA4Card.displayName = "LazyA4Card";

export default memo(LazyA4Card);