// src/Home/components/ui/Icon/Icon.styles.ts
import { cva, VariantProps } from "class-variance-authority";

export const iconStyles = cva("inline-block", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    },
    color: {
      default: "text-current",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});

export type IconVariants = VariantProps<typeof iconStyles>;
