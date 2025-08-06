// src/data/theme.ts — Theme Config & Utilities (Client-only Safe)

export type ThemeName = 'light' | 'dark' | 'business';

export const THEMES: ThemeName[] = ['light', 'dark', 'business'];
export const DEFAULT_THEME: ThemeName = 'light';

/**
 * 🧠 ดึงค่าธีมจาก localStorage (Client-side เท่านั้น)
 * คืนค่าเป็น ThemeName หรือ DEFAULT_THEME หากไม่มีค่าใน localStorage
 */
export const getSavedTheme = (): ThemeName => {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const stored = localStorage.getItem('theme');
  return THEMES.includes(stored as ThemeName) ? (stored as ThemeName) : DEFAULT_THEME;
};

/**
 * 💾 บันทึกธีมลงใน localStorage (Client-side เท่านั้น)
 * @param theme ชื่อธีมที่ต้องการบันทึก
 */
export const saveTheme = (theme: ThemeName): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
};

/**
 * 🎨 นำธีมไปใช้กับ attribute data-theme ของ <html> (Client-side เท่านั้น)
 * @param theme ชื่อธีมที่ต้องการใช้
 */
export const applyTheme = (theme: ThemeName): void => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
};

/**
 * 🔄 สลับธีม ไปยังธีมถัดไปใน THEMES แบบวนลูป (Client-side เท่านั้น)
 * คืนค่าเป็นธีมใหม่หลังจากสลับ และบันทึกลง localStorage พร้อม apply ทันที
 */
export const toggleTheme = (): ThemeName => {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const current = getSavedTheme();
  const currentIndex = THEMES.indexOf(current);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  const nextTheme = THEMES[nextIndex];

  saveTheme(nextTheme);
  applyTheme(nextTheme);

  return nextTheme;
};

/**
 * 🚀 เรียกใช้ตอนเริ่มแอป เพื่ออ่านธีมจาก localStorage แล้ว apply ทันที
 * กรณีไม่พบธีมใน localStorage ให้ใช้ DEFAULT_THEME
 */
export const initTheme = (): void => {
  const theme = getSavedTheme();
  applyTheme(theme);
};