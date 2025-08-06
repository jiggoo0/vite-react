// tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

/**
 * Custom color tokens using CSS variables and fixed palette
 */
const customColors = {
  // Design Tokens via CSS Variables (for theming)
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  neutral: "var(--color-neutral)",
  "base-100": "var(--color-base-100)",
  "base-200": "var(--color-base-200)",
  "base-300": "var(--color-base-300)",

  // iOS-specific notification colors
  iosSuccess: "#34C759",
  iosError: "#FF3B30",
  iosWarning: "#FF9500",
  iosInfo: "#5AC8FA",

  // DaisyUI feedback colors (kept as fallback)
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

/**
 * Extended font families for various purposes
 */
const customFontFamilies = {
  heading: ["Inter", "Noto Sans Thai", "sans-serif"],
  body: ["Roboto", "Noto Sans Thai", "sans-serif"],
  ios: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', "sans-serif"], // iOS system font stack
};

/**
 * Custom font sizes (e.g. iOS notification style)
 */
const customFontSizes = {
  iosSmall: "13px",
};

/**
 * Spacing scale extensions
 */
const customSpacing = {
  72: "18rem",
  84: "21rem",
  96: "24rem",
};

/**
 * Extended z-index levels for layered UI elements
 */
const customZIndex = {
  60: "60",
  70: "70",
  80: "80",
  9999: "9999", // For overlays and modals
};

/**
 * Border radius scale extensions for smooth corners
 */
const customBorderRadius = {
  xl: "1rem",
  "2xl": "1.5rem",
};

/**
 * Keyframe animations for smooth UI transitions
 */
const customKeyframes = {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  slideIn: {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  fadeInUp: {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
};

/**
 * Animation utilities
 */
const customAnimations = {
  fadeIn: "fadeIn 0.5s ease-out forwards",
  slideIn: "slideIn 0.5s ease-out forwards",
  fadeInUp: "fadeInUp 0.3s ease-out forwards",
};

/**
 * Transition properties for smooth effects
 */
const customTransitionProperties = {
  spacing: "margin, padding",
  height: "height",
  opacity: "opacity",
  transform: "transform",
};

/**
 * DaisyUI theme overrides and custom themes
 */
const daisyuiThemes = [
  {
    light: {
      primary: "#2563eb",
      secondary: "#9333ea",
      accent: "#f59e0b",
      neutral: "#374151",
      "base-100": "#ffffff",
      "base-200": "#f3f4f6",
      "base-300": "#e5e7eb",
      info: "#3ABFF8",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
    },
  },
  {
    jpbrand: {
      primary: "#1d4ed8",
      secondary: "#d97706",
      accent: "#10b981",
      neutral: "#1e293b",
      "base-100": "#ffffff",
      "base-200": "#f9fafb",
      "base-300": "#e5e7eb",
      info: "#0ea5e9",
      success: "#22c55e",
      warning: "#facc15",
      error: "#ef4444",
    },
  },
  "dark",
  "business",
];

/**
 * Safelist patterns for classes that may be generated dynamically
 */
const safelistPatterns = [
  "bg-primary",
  "text-primary",
  { pattern: /^btn-/ },
  { pattern: /^text-/ },
];

/**
 * Blocklist for classes you want to explicitly exclude
 */
const blocklistPatterns = ["debug", "bg-red-500"];

const config: Config = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: safelistPatterns,

  blocklist: blocklistPatterns,

  theme: {
    extend: {
      colors: customColors,
      fontFamily: customFontFamilies,
      fontSize: customFontSizes,
      spacing: customSpacing,
      zIndex: customZIndex,
      borderRadius: customBorderRadius,
      keyframes: customKeyframes,
      animation: customAnimations,
      transitionProperty: customTransitionProperties,
    },
  },

  plugins: [daisyui, typography, forms, aspectRatio],

  daisyui: {
    themes: daisyuiThemes,
  },
};

export default config;
