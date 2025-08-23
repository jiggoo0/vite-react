# ✅ JP Visual & Docs – Structure Check Report

> เวลาตรวจสอบ: 2025-08-24 01:35:57 | สาขา: main

> โปรเจกต์นี้คือ SPA React + TypeScript ระดับโปร ใช้ Vite + Tailwind + daisyUI + Framer Motion + Zod + react-hook-form สำหรับฟอร์ม + PDF/Canvas export พร้อมโครงสร้าง modular

---

## 📊 Summary
| หมวดหมู่                 | สถานะ |
|--------------------------|--------|
| .env Exists | ✅ |
| VITE_API_URL Defined | ✅ |
| Alias Import | ✅ |
| ESLint Check | ✅ |
| TypeScript Check | ✅ |
| Dev Server               | ✅ |

## 📦 ตรวจสอบ package.json
```json
{
  "name": "vite-react",
  "private": true,
  "version": "7.1.1",
  "type": "module",
  "engines": {
    "node": ">=18.0.0"
  },
  "sideEffects": false,
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "alias:check": "node scripts/alias.ts --check",
    "alias:fix": "node scripts/alias.ts --fix",
    "check": "pnpm type-check && pnpm lint && pnpm alias:check",
    "validate": "pnpm type-check && pnpm lint && node scripts/alias.ts ${FIX:+--fix}",
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "prepare": "husky install",
    "type-check": "tsc --noEmit",
    "postcss:watch": "tailwindcss -i ./src/index.css -o ./dist/output.css --watch",
    "clean": "rm -rf dist node_modules .turbo .cache"
  },
  "dependencies": {
    "@faker-js/faker": "^9.9.0",
    "@headlessui/react": "^2.2.7",
    "@heroicons/react": "2.2.0",
    "@hookform/resolvers": "5.2.1",
    "@radix-ui/react-slot": "^1.2.3",
    "axios": "^1.11.0",
    "bcryptjs": "^3.0.2",
    "crypto-browserify": "3.12.1",
    "dayjs": "1.11.13",
    "framer-motion": "^12.23.12",
    "he": "1.2.0",
    "highlight.js": "11.11.1",
    "html2canvas": "1.4.1",
    "jspdf": "3.0.1",
    "lucide-react": "^0.540.0",
    "markdown-it": "14.1.0",
    "markdown-it-anchor": "9.2.0",
    "markdown-it-task-checkbox": "1.0.6",
    "markdown-it-toc-done-right": "4.2.0",
    "pdfkit": "0.17.1",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.62.0",
    "react-icons": "^5.5.0",
    "react-qr-code": "2.0.18",
    "react-router-dom": "^7.8.1",
    "sweetalert2": "11.22.4",
    "tailwind-merge": "^3.3.1",
    "theme-change": "2.5.0",
    "uuid": "11.1.0",
    "zod": "^4.0.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/container-queries": "0.1.1",
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/line-clamp": "^0.4.4",
    "@tailwindcss/typography": "^0.5.16",
    "@testing-library/jest-dom": "6.7.0",
    "@testing-library/react": "16.3.0",
    "@testing-library/user-event": "14.6.1",
    "@types/jest": "30.0.0",
    "@types/node": "^24.3.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@typescript-eslint/eslint-plugin": "^8.39.1",
    "@typescript-eslint/parser": "^8.39.1",
    "@vitejs/plugin-react": "^5.0.0",
    "autoprefixer": "^10.4.21",
    "clsx": "2.1.1",
    "daisyui": "^3.9.4",
    "esbuild": "0.25.9",
    "eslint": "^9.33.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-react": "7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "glob": "11.0.3",
    "globals": "16.3.0",
    "husky": "^9.1.7",
    "jsdom": "26.1.0",
    "lint-staged": "^16.1.5",
    "pnpm": "10.14.0",
    "postcss": "^8.5.6",
    "prettier": "^3.6.2",
    "tailwindcss": "3",
    "ts-node": "10.9.2",
    "tsconfig-paths": "4.2.0",
    "typescript": "5.9.2",
    "typescript-eslint": "8.40.0",
    "vite": "7.1.2",
    "vite-plugin-pwa": "^1.0.2",
    "vite-tsconfig-paths": "^5.1.4",
    "vitest": "3.2.4",
    "zip-a-folder": "3.1.9"
  },
  "resolutions": {
    "typescript": "5.9.2"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}
```

| Dependency ที่จำเป็น     | สถานะ |
|--------------------------|--------|
| react                     | ✅ |
| react-dom                     | ✅ |
| vite                     | ✅ |
| tailwindcss                     | ✅ |
| daisyui                     | ✅ |
| typescript                     | ✅ |
| eslint                     | ✅ |
| prettier                     | ✅ |
| React                     | ✅ | ^19.1.1 |
| TypeScript                | ✅ | 5.9.2 |

## 📁 โครงสร้าง src (ลึกสุด 10 ระดับ)
```
src
├── App
│   └── RootApp.tsx
├── Home
│   ├── CustomerAssessmentForm.tsx
│   ├── Home.tsx
│   ├── IdCardForm.tsx
│   ├── Login.tsx
│   ├── SecretPage
│   │   ├── DriverLicense
│   │   │   ├── DriverLicenseForm.tsx
│   │   │   ├── DriverLicensePage.tsx
│   │   │   ├── DriverLicensePreview.tsx
│   │   │   ├── DriverLicensePreviewWithActions.tsx
│   │   │   ├── types
│   │   │   │   └── driverLicense.ts
│   │   │   └── ui
│   │   │       ├── FieldDraggable.tsx
│   │   │       ├── PhotoField.tsx
│   │   │       └── TextField.tsx
│   │   ├── MedicalCertificate
│   │   │   ├── MedicalCertificate.tsx
│   │   │   └── types
│   │   │       └── medicalCertificate.ts
│   │   ├── RegistrationPreview
│   │   │   ├── RegistrationPreview.tsx
│   │   │   └── RegistrationPreviewWithMock.tsx
│   │   ├── Reviews
│   │   │   ├── ReviewsGallery.tsx
│   │   │   └── ui
│   │   │       └── ReviewCard.tsx
│   │   ├── SalaryCertificate
│   │   │   ├── SalaryCertificate.tsx
│   │   │   └── types
│   │   │       └── salaryCertificate.ts
│   │   └── SpecialBranchCertificate
│   │       └── SpecialBranchCertificate.tsx
│   ├── SecretPage.tsx
│   ├── components
│   │   ├── About
│   │   │   ├── About.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── AboutDescription.tsx
│   │   │       ├── AboutImage.tsx
│   │   │       ├── AboutQuote.tsx
│   │   │       └── AboutTitle.tsx
│   │   ├── Forms
│   │   │   ├── FormWrapper.tsx
│   │   │   ├── IdCardFormWithOCR.tsx
│   │   │   ├── IdCardPreview.tsx
│   │   │   ├── SubmitButton.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FieldGroup.tsx
│   │   │       ├── InputField.tsx
│   │   │       ├── SelectField.tsx
│   │   │       ├── SelectFieldUI.tsx
│   │   │       └── TextareaField.tsx
│   │   ├── Hero
│   │   │   ├── Hero.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── HeroBackground.tsx
│   │   │       ├── HeroBadge.tsx
│   │   │       └── HeroStats.tsx
│   │   ├── Portfolio
│   │   │   ├── CaseStudyRedacted.tsx
│   │   │   ├── PortfolioGallery.tsx
│   │   │   ├── SupportFAQ.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FilterButton.tsx
│   │   │       ├── PortfolioCTA.tsx
│   │   │       └── PortfolioFilter.tsx
│   │   ├── SecretSection
│   │   │   ├── BlurContact
│   │   │   │   ├── BlurContact.tsx
│   │   │   │   └── motionVariants.ts
│   │   │   ├── DocumentDownload.tsx
│   │   │   ├── DocumentExportActions.tsx
│   │   │   ├── KbankIOSNotification.tsx
│   │   │   ├── KbankNotificationCard.tsx
│   │   │   ├── SecretActions.tsx
│   │   │   ├── SecretDescription.tsx
│   │   │   ├── SecretHeader.tsx
│   │   │   └── SecureExportConsole.tsx
│   │   ├── SellingPoints
│   │   │   ├── SellingPoints.tsx
│   │   │   ├── SpeedGuaranteeBanner.tsx
│   │   │   └── points.ts
│   │   ├── Services
│   │   │   ├── ComplianceFAQ.tsx
│   │   │   ├── FeatureAwards.tsx
│   │   │   ├── FeatureList.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── ComingSoonServiceCard.tsx
│   │   │       └── ServiceCard.tsx
│   │   ├── Testimonials
│   │   │   ├── TestimonialSlider.tsx
│   │   │   └── TrustBadge.tsx
│   │   ├── UserBoard
│   │   │   ├── BadgeCard.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── TrustBadge.tsx
│   │   │   ├── TrustDashboard.tsx
│   │   │   ├── TrustDashboardDemo.tsx
│   │   │   ├── UserBoard.tsx
│   │   │   ├── motionConfig.ts
│   │   │   └── types.ts
│   │   ├── common
│   │   │   ├── CardWrapper.tsx
│   │   │   ├── LazyA4Card.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── LogoutButton.tsx
│   │   │   ├── PageSection.tsx
│   │   │   ├── StickyTableHeader.tsx
│   │   │   ├── TabPanel.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── WithBlurIfUser.tsx
│   │   └── ui
│   │       ├── Button
│   │       │   ├── Button.tsx
│   │       │   ├── button.styles.ts
│   │       │   └── index.ts
│   │       └── Card
│   │           └── Card.tsx
│   └── hooks
│       └── useInView.ts
├── Layout
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── SidebarNav.tsx
│   ├── partials
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── Header
│   │       ├── Header.tsx
│   │       └── index.ts
│   └── ui
│       ├── Logo.tsx
│       ├── PageHeader.tsx
│       └── ThemeToggle.tsx
├── Router
│   ├── AppContent.tsx
│   ├── AppRouter.tsx
│   ├── GuardRoutes.tsx
│   └── RoleGuard.tsx
├── ThemeProvider
│   ├── ThemeContext.ts
│   ├── ThemeProvider.tsx
│   ├── colors.ts
│   ├── types.ts
│   └── useTheme.ts
├── __mocks__
│   ├── KbankIOSNotification.mock.ts
│   ├── kbankIOSNotification.ts
│   ├── mockDriverLicenseData.ts
│   ├── mockMedicalCertificate.ts
│   ├── mockRegistrationData.ts
│   ├── mockSalaryCertificate.ts
│   └── specialBranchCertificate.ts
├── animations
│   └── motionVariants.ts
├── api
│   └── chat.ts
├── assets
│   ├── images
│   │   └── hero-bg.webp
│   ├── logo.webp
│   └── react.svg
├── config
│   ├── driverLicenseConfig.tsx
│   └── secretCards.config.tsx
├── context
│   ├── AppProviders.tsx
│   └── types.ts
├── data
│   ├── UserBoard.ts
│   ├── UserTempCodes.ts
│   ├── caseStudies.ts
│   ├── portfolioItems.ts
│   ├── services.ts
│   ├── testimonialsData.ts
│   ├── theme.ts
│   └── users.ts
├── hooks
│   ├── useAuth.ts
│   ├── useProtectedAuth.ts
│   └── useTempCodeAuth.ts
├── index.css
├── main.tsx
├── services
│   └── driverLicenseOcr.ts
├── styles
│   ├── driverLicense.css
│   ├── fonts.css
│   ├── global.css
│   ├── print.css
│   ├── theme.css
│   └── variables.css
├── types
│   └── IUser.ts
├── utils
│   ├── cn.ts
│   ├── common
│   │   ├── 403.tsx
│   │   ├── BackToTop.tsx
│   │   ├── ChatWidget.tsx
│   │   ├── DisclaimerModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FallbackLoader.tsx
│   │   ├── FallbackLoading.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionContainer.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SocialIcons.tsx
│   ├── exportCard.ts
│   └── index.ts
├── vite-env.d.js
└── vite-env.d.ts

57 directories, 170 files
```

## 🛠️ Roadmap
เขียนโค้ด React + TypeScript สำหรับหน้าเว็บที่ใช้ TailwindCSS และ daisyUI โดยต้อง:
- ห้ามแตกไฟล์ component โดยไม่จำเป็น ต้องอ้างอิงโครงสร้างที่กำหนด
- ปรับปรุง logic ให้สอดคล้องกับโครงสร้างธุรกิจ
- ใช้รูปแบบ professional เท่านั้น: flat UI, ไม่มี animation, ไม่มีสีสดหรือลูกเล่น
- ตั้งค่าทุกเครื่องมือให้พร้อมใช้งานจริง: ESLint, Prettier, TypeScript strict, alias import
- Component ที่ใช้ต้องพร้อมสำหรับ export PDF/Canvas และรองรับ react-hook-form + Zod
- ทุกครั้งที่แก้ไขโค้ดให้ส่งโค้ดที่แก้แล้วแบบ production-ready เท่านั้น

⚠️Generate a production-ready Vite + React + TypeScript project using TailwindCSS (Twind). Enforce strict TypeScript rules and ESLint configuration. The design must be minimal, flat, and professional — no curved shapes, gradients, or cartoon-like colors. Use only neutral tones (gray, black, white, navy). All code must follow strict linting and type safety. Include a basic layout with header, sidebar, and content area. No animations, no rounded corners, no playful UI. This is for a serious enterprise-grade dashboard.⚠️
| ความโปร่งใส | มีหน้าเงื่อนไข, รีวิว, Markdown content |
| ความเร็ว | SSR, CDN, Lighthouse 90+ |
| UI | Flat, neutral, ไม่มีลูกเล่น |
| โค้ด | Type
🗂 JP Visual & Docs – Template Roadmap for New Components
🎯 วัตถุประสงค์:
ให้ AI สร้างไอเดีย Components สำหรับใช้งานในหน้า `Home.tsx` และ `SecretPage.tsx` โดยมีข้อกำหนดเฉพาะ
📁 โครงสร้างที่ต้องใช้:
Componentวางไว้ใน src/Home/components/`
ใช้งานเฉพาะใน `Home.tsx
SecretPage.tsx อยู่ที่
 src/Home/SecretPage.tsx
src/Home/components/SecretSectoin/
คือ components ย่อยของ SecretPage.tsx

🚫 ข้อห้าม:
- ห้ามเสนอ Components พื้นฐานทั่วไป เช่น ปุ่ม, Modal, Card หรือ Layout
- ห้ามมีเนื้อหาแนวสอนหรือ Tutorial
- ห้ามเสนอแนวคิดที่หาเจอใน Google หรือ YouTube
✅ สิ่งที่ต้องมี:
- Components ที่ใช้สำหรับงานเฉพาะทาง เช่น:
  - เครื่องมือสร้างเอกสารจาก Json/Config/Fakemok/data  หรือจะมีเทคนิคชั้นสูงกว่าที่เขียนไว้เสนอเข้ามา เน้นความสมจริงมาเป็นลำดับแรกเน้นการใช้งานได้จริงอย่าใช้เทคนิคพื้นฐานทั่วไปนำเสนอ  จำลองข้อมูลที่สมจริงที่ช่วยเสริมความหน้าเชื่อถือเว็ปไซร์หรือธุรกิจแบบdynamic
 หรือระบบเบื้องหลังที่ไม่เปิดเผยต่อผู้ใช้ทั่วไป
- รายชื่อ Components พร้อมคำอธิบายสั้น ๆ
- ระบุว่า Component ใดใช้ใน `Home.tsx` และ Component ใดใช้ใน `SecretPage.tsx`


