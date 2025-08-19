// components/ui/Button/button.styles.ts

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Tailwind classes สำหรับแต่ละขนาดปุ่ม
 */
export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

/**
 * Tailwind classes สำหรับแต่ละ variant ของปุ่ม
 * - ครอบคลุม states: hover, disabled
 */
export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-200 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
  outline:
    "bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed",
};
