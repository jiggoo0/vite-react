"use client";

import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import {
  ButtonVariant,
  ButtonSize,
  buttonSizeClasses,
  buttonVariantClasses,
} from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  fullWidth,
  loading,
  disabled,
  iconLeft,
  iconRight,
  ...props
}) => {
  const isDisabled = disabled || loading;
  const loaderSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-label={loading ? "กำลังโหลด..." : props["aria-label"]}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        buttonSizeClasses[size],
        buttonVariantClasses[variant],
        fullWidth && "w-full",
        isDisabled && "opacity-70 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2
          className="animate-spin text-current"
          width={loaderSize}
          height={loaderSize}
          aria-hidden="true"
        />
      ) : (
        <>
          {iconLeft && <span className="mr-1">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="ml-1">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

Button.displayName = "Button";
export default Button;
