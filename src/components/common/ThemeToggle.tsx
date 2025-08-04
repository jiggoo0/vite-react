import { useEffect, useState } from 'react'
import { THEMES, getSavedTheme, saveTheme, applyTheme, ThemeName } from '@/data/theme'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeName>(getSavedTheme())

  const handleChange = (newTheme: ThemeName) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    saveTheme(newTheme)
  }

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <select
      value={theme}
      onChange={(e) => handleChange(e.target.value as ThemeName)}
      className="select select-sm"
    >
      {THEMES.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  )
}

export default ThemeToggle