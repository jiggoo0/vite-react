import { useEffect, useState } from "react";

const THEMES = ["light", "dark", "business"] as const;
type Theme = (typeof THEMES)[number];

export default function useDaisyTheme(defaultTheme: Theme = "light") {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme, THEMES };
}
