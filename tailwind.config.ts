import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { lightTheme, darkTheme, teamThemeColors } from "./src/data/theme";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      { light: { ...lightTheme } },
      { dark: { ...darkTheme } },
      { team: { ...teamThemeColors } },
    ],
    darkTheme: "dark",
  },
};

export default config;
