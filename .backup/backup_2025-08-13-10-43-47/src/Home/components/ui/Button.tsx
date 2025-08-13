// src/Home/components/ui/Button.tsx

import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline"; // เพิ่ม "outline"
  size?: "sm" | "md" | "lg"; // เพิ่มขนาดปุ่ม
  className?: string;
}

/**
 * Button Component
 *
 * - รองรับ variant: primary, secondary, ghost, outline
 * - รองรับขนาดปุ่ม: sm, md, lg
 * - รองรับการส่ง className เพิ่มเติม และ props ของ button ธรรมดา
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClass =
    "btn font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // ขนาดปุ่มตาม size
  let sizeClass = "";
  switch (size) {
    case "sm":
      sizeClass = "btn-sm";
      break;
    case "md":
      sizeClass = "btn-md";
      break;
    case "lg":
      sizeClass = "btn-lg";
      break;
  }

  // คลาส variant
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn-primary";
      break;
    case "secondary":
      variantClass = "btn-secondary";
      break;
    case "ghost":
      variantClass = "btn-ghost";
      break;
    case "outline":
      variantClass = "btn-outline";
      break;
  }

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
