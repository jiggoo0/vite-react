import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  loading?: boolean;
}

/**
 * 🔹 Reusable Button Component
 * - รองรับ variant, size, fullWidth, loading
 * - ใช้ clsx เพื่อรวม class ได้สะอาดกว่า
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "btn font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        { "w-full": fullWidth, loading },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
