// ✅ src/components/ui/Button.tsx — ปุ่ม UI คุณภาพ Production รองรับ Variant + Size แบบ Tailwind

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/cn";

// 🔹 รูปแบบปุ่มที่รองรับ
export type ButtonVariant = "default" | "outline" | "ghost" | "link" | "destructive";

// 🔹 ขนาดของปุ่มที่รองรับ
export type ButtonSize = "default" | "sm" | "lg" | "icon";

// 🔹 พร็อพของ Button รองรับทั่วไป + option เสริม
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // ใช้ร่วมกับ Slot (Radix UI)
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// ✅ กำหนดคลาสตาม variant
const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
  destructive: "bg-destructive text-white hover:bg-destructive/90"
};

// ✅ กำหนดคลาสตามขนาด
const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10"
};

/**
 * ✅ Button — ปุ่ม UI ที่ใช้ทั่วทั้งระบบ
 *
 * @example
 * <Button variant="outline" size="sm">คลิก</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
