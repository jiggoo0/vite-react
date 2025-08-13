import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

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
      type={type}
      className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
