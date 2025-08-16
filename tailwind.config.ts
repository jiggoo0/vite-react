import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { lightTheme, darkTheme, teamThemeColors } from "./src/data/theme";

// ========================
// Tailwind Config
// ========================
const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ["THSarabunNew", "Noto Sans Thai", "Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#2563EB",
          dark: "#3B82F6",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      { light: lightTheme },
      { dark: darkTheme },
      "business",
      { team: teamThemeColors }, // ✅ เพิ่มทีมธีม
    ],
  },
};

export default config;
