"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  count: number;
  label?: string;
  className?: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({
  count,
  label = "ลูกค้ามั่นใจในเรา",
  className,
}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          "flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400",
          className
        )}
        role="status"
        aria-roledescription="statistic"
        aria-label={`${count}+ ${label}`}
        tabIndex={0}
      >
        <span className="text-2xl md:text-3xl font-extrabold text-white">
          {count}+
        </span>
        <span className="text-sm md:text-base font-medium text-white">
          {label}
        </span>
      </motion.div>
    </div>
  );
};

export default TrustBadge;
