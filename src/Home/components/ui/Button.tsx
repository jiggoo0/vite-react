import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * 🔹 Button Component
 *
 * - รองรับ variant, size, และ props ของ button ปกติ
 * - สามารถเพิ่ม className เพื่อ custom style เพิ่มเติมได้
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  const baseClass =
    "btn font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses: Record<string, string> = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const variantClasses: Record<string, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
