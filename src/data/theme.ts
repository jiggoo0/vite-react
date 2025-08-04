// src/data/theme.ts

export type ThemeName = 'light' | 'dark' | 'business'

export const THEMES: ThemeName[] = ['light', 'dark', 'business']

export const DEFAULT_THEME: ThemeName = 'light'

// 🧠 ฟังก์ชันสำหรับใช้กับ localStorage
export const getSavedTheme = (): ThemeName => {
  const stored = localStorage.getItem('theme')
  return THEMES.includes(stored as ThemeName) ? (stored as ThemeName) : DEFAULT_THEME
}

export const saveTheme = (theme: ThemeName): void => {
  localStorage.setItem('theme', theme)
}

// ✅ ใช้เพื่อกำหนด <html data-theme="..." />
export const applyTheme = (theme: ThemeName): void => {
  document.documentElement.setAttribute('data-theme', theme)
}