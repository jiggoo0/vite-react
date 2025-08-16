import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { lightTheme, darkTheme, teamThemeColors } from "./src/data/theme";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{ light: lightTheme }, { dark: darkTheme }, { team: teamThemeColors }],
    darkTheme: "dark",
  },
};

export default config;