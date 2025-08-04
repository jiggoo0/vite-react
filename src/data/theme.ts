// ✅ src/data/theme.ts — Theme Config & Utilities (Client-only Safe)

export type ThemeName = 'light' | 'dark' | 'business';

export const THEMES: ThemeName[] = ['light', 'dark', 'business'];
export const DEFAULT_THEME: ThemeName = 'light';

/**
 * 🧠 ดึงค่าธีมจาก localStorage (client-only)
 */
export const getSavedTheme = (): ThemeName => {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const stored = localStorage.getItem('theme');
  return THEMES.includes(stored as ThemeName) ? (stored as ThemeName) : DEFAULT_THEME;
};

/**
 * 💾 บันทึกธีมไปยัง localStorage (client-only)
 */
export const saveTheme = (theme: ThemeName): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
};

/**
 * 🎨 Apply ธีมไปยัง <html data-theme="..."> (client-only)
 */
export const applyTheme = (theme: ThemeName): void => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
};