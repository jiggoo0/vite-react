// src/components/ui/LazyA4Card.tsx
"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface LazyA4CardProps {
  title?: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  hideTitle?: boolean;
}

/**
 * LazyA4Card
 * -------------------------
 * ✅ Card แบบ A4 ขนาดใหญ่
 * ✅ รองรับ animation fade-in + slide-up
 * ✅ รองรับ delay แบบ milliseconds
 * ✅ รองรับ fallback content
 */
const LazyA4Card: FC<LazyA4CardProps> = ({
  title,
  children,
  fallback,
  className,
  delay = 0,
  hideTitle = false,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: delay / 1000, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className={clsx(
      "relative w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6",
      className
    )}
  >
    {!hideTitle && title && (
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    )}

    <div className="text-base text-gray-700 dark:text-gray-300">{fallback ?? children}</div>
  </motion.article>
);

LazyA4Card.displayName = "LazyA4Card";

export default LazyA4Card;
