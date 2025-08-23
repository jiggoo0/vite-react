export type CardVariant = "default" | "outlined" | "elevated";
export type CardSize = "sm" | "md" | "lg";

/**
 * Tailwind classes สำหรับแต่ละ variant
 */
export const cardVariantClasses: Record<CardVariant, string> = {
  default: "bg-white dark:bg-zinc-900 shadow-sm border border-transparent",
  outlined: "bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700",
  elevated: "bg-white dark:bg-zinc-900 shadow-lg border border-transparent",
};

/**
 * Tailwind classes สำหรับแต่ละขนาด
 */
export const cardSizeClasses: Record<CardSize, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};