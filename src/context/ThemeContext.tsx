import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import type { ThemeName } from '@/data/theme';
import {
  getSavedTheme,
  toggleTheme as toggleThemeUtil,
  subscribeThemeChange,
  applyTheme,
} from '@/data/theme';

// กำหนดชนิดของ Context
interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

// สร้าง Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// สร้าง Provider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(() => getSavedTheme());

  useEffect(() => {
    applyTheme(theme);

    const unsubscribe = subscribeThemeChange((newTheme: ThemeName) => {
      setTheme(newTheme);
    });

    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newTheme = toggleThemeUtil();
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook สำหรับใช้งาน Theme Context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};