export type CardVariant = "default" | "primary" | "secondary" | "outline";
export type CardSize = "sm" | "md" | "lg";

export const cardVariantClasses: Record<CardVariant, string> = {
  default: "bg-white dark:bg-gray-900 shadow-md",
  primary: "bg-blue-600 text-white shadow-lg",
  secondary: "bg-gray-100 dark:bg-gray-800 shadow",
  outline: "border border-gray-300 dark:border-gray-700 bg-transparent",
};

export const cardSizeClasses: Record<CardSize, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};
