"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: number; // ขนาด spinner เป็น px
  color?: string; // สีของ spinner
  className?: string; // สำหรับ custom styling
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 24,
  color = "#2563EB", // default blue-600
  className = "",
}) => (
  <motion.div
    className={`inline-block ${className}`}
    style={{
      width: size,
      height: size,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: `${color} transparent transparent transparent`,
      borderRadius: "50%",
    }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    role="status"
    aria-label="Loading"
  />
);

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
