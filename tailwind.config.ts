// tailwind.config.ts

import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  darkMode: 'class', // ✅ DaisyUI รองรับ dark mode แบบ class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-primary',
    'text-accent',
    'animate-fadeInUp',
    'hover:bg-secondary',
    {
      pattern: /^bg-(red|green|blue|slate)-(100|500)$/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#64748B',
        accent: '#22C55E',
        neutral: '#3D4451',
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        inherit: 'inherit',
        current: 'currentColor',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.webp')",
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out both',
        fadeIn: 'fadeIn 0.3s ease-out both',
        bounceIn: 'bounceIn 0.6s ease-out both',
        slideInRight: 'slideInRight 0.3s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '60%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fill: theme => ({
        primary: theme('colors.primary'),
        secondary: theme('colors.secondary'),
      }),
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#3B82F6',
          secondary: '#64748B',
          accent: '#22C55E',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          'base-content': '#1F2937',
        },
      },
      {
        dark: {
          primary: '#3B82F6',
          secondary: '#64748B',
          accent: '#22C55E',
          neutral: '#1E293B',
          'base-100': '#0F172A',
          'base-content': '#F8FAFC',
        },
      },
      {
        business: {
          primary: '#1E40AF',
          secondary: '#2563EB',
          accent: '#FBBF24',
          neutral: '#374151',
          'base-100': '#F3F4F6',
          'base-content': '#111827',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
}

export default config