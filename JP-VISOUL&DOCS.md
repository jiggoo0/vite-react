GITHUB_URL="https://github.com/jiggoo0/vite-react"
DEVELOPER_EMAIL="jiggo0@outlook.co.th"
# 🔗 Website & Vercel Info
WEBSITE_URL="https://404notfontjp.vercel.app/"
VERCEL_ACCOUNT="jiggo0@outlook.co.th"
VERCEL_PROJECT_NAME="vite-react"
VERCEL_PROJECT_ID="prj_MBF9hbw032OzD2gDVkUQ7mvoYA2t"
# 📊 Project Structure Report

## 1️⃣ Required Commands
- node ✅
- pnpm ✅
- git ✅
- tree ✅
- jq ✅
- ts-node ✅

## 2️⃣ Environment
- OS / Platform: Termux / Android

## 3️⃣ Git Status
- Branch: main
- Status: มีการเปลี่ยนแปลง ❌ ยังไม่ commit

## 4️⃣ Dev Server
- พบสคริปต์ dev server ✅

## 5️⃣ Tests
- พบ Vitest ✅

## 6️⃣ Dependencies
| Dependency ที่จำเป็น | สถานะ |\n|--------------------|--------|\n| react | ✅ |\n| react-dom | ✅ |\n| vite | ✅ |\n| tailwindcss | ✅ |\n| daisyui | ✅ |\n| typescript | ✅ |\n| eslint | ✅ |\n| prettier | ✅ |\n| Package      | ติดตั้ง | Version |\n|-------------|---------|---------|\n| React        | ✅ | ^19.1.1 |\n| TypeScript   | ✅ | ^5.9.2 |

## 7️⃣ Config Files
| Config File | Status |\n|------------|--------|\n| tsconfig.json | ✅ มีไฟล์ |\n| tailwind.config.ts | ✅ มีไฟล์ & ✅ valid TS |\n| vite.config.ts | ✅ มีไฟล์ & ✅ valid TS |\n| .eslintrc | ✅ มีไฟล์ |\n| .prettierrc | ✅ มีไฟล์ |\n| .gitignore | ✅ มีไฟล์ |
- tailwind.config.ts: ✅ มีไฟล์ & ✅ valid TS
- vite.config.ts: ✅ มีไฟล์ & ✅ valid TS

## 8️⃣ Scripts Summary
- alias:check
- alias:fix
- build
- check
- clean
- clean:space
- dev
- format
- lint
- postcss:watch
- prepare
- preview
- test
- test:ui
- type-check
- validate

## 9️⃣ Project Tree (Formatted)
.
├── AAA.md
├── JP-VISOUL&DOCS.md
├── Pompt.md
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── scripts
├── setup.sh
├── src
├── structure.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

3 directories, 18 files\n### src/Home\n```\nsrc/Home
├── CustomerAssessmentForm.tsx
├── Home.tsx
├── IdCardForm.tsx
├── Login.tsx
├── SecretPage
│   ├── DriverLicense
│   │   ├── DriverLicenseForm.tsx
│   │   ├── DriverLicensePage.tsx
│   │   ├── DriverLicensePreview.tsx
│   │   ├── DriverLicensePreviewWithActions.tsx
│   │   ├── types
│   │   │   └── driverLicense.ts
│   │   └── ui
│   │       ├── FieldDraggable.tsx
│   │       ├── FieldEditor.tsx
│   │       ├── PhotoField.tsx
│   │       └── TextField.tsx
│   ├── IdCardPreview
│   │   ├── IdCardPreview.tsx
│   │   └── IdCardSection.tsx
│   ├── KbankNotification
│   │   ├── KbankIOSNotification.tsx
│   │   ├── KbankNotificationCard.tsx
│   │   └── KbankPreview.tsx
│   ├── MedicalCertificate
│   │   ├── MedicalCertificate.tsx
│   │   └── types
│   │       └── medicalCertificate.ts
│   ├── RegistrationPreview
│   │   ├── RegistrationForm.tsx
│   │   ├── RegistrationPreview.tsx
│   │   ├── RegistrationPreviewWithMock.tsx
│   │   ├── fonts
│   │   │   ├── Kanit-Black.ttf
│   │   │   ├── Kanit-BlackItalic.ttf
│   │   │   ├── Kanit-Bold.ttf
│   │   │   ├── Kanit-BoldItalic.ttf
│   │   │   ├── Kanit-ExtraBold.ttf
│   │   │   ├── Kanit-ExtraBoldItalic.ttf
│   │   │   ├── Kanit-ExtraLight.ttf
│   │   │   ├── Kanit-ExtraLightItalic.ttf
│   │   │   ├── Kanit-Italic.ttf
│   │   │   ├── Kanit-Light.ttf
│   │   │   ├── Kanit-LightItalic.ttf
│   │   │   ├── Kanit-Medium.ttf
│   │   │   ├── Kanit-MediumItalic.ttf
│   │   │   ├── Kanit-Regular.ttf
│   │   │   ├── Kanit-SemiBold.ttf
│   │   │   ├── Kanit-SemiBoldItalic.ttf
│   │   │   ├── Kanit-Thin.ttf
│   │   │   ├── Kanit-ThinItalic.ttf
│   │   │   ├── THSarabunNew-Bold.woff
│   │   │   ├── THSarabunNew-Bold.woff2
│   │   │   ├── THSarabunNew-BoldItalic.woff
│   │   │   ├── THSarabunNew-BoldItalic.woff2
│   │   │   ├── THSarabunNew-Italic.woff
│   │   │   ├── THSarabunNew-Italic.woff2
│   │   │   ├── THSarabunNew.woff
│   │   │   ├── THSarabunNew.woff2
│   │   │   └── fonts.css
│   │   └── index.ts
│   ├── Reviews
│   │   ├── ReviewsGallery.tsx
│   │   └── ui
│   │       └── ReviewCard.tsx
│   ├── SalaryCertificate
│   │   ├── SalaryCertificate.tsx
│   │   └── types
│   │       └── salaryCertificate.ts
│   └── SpecialBranchCertificate
│       └── SpecialBranchCertificate.tsx
├── SecretPage.tsx
├── components
│   ├── About
│   │   ├── About.tsx
│   │   ├── index.ts
│   │   └── ui
│   │       ├── AboutDescription.tsx
│   │       ├── AboutImage.tsx
│   │       ├── AboutQuote.tsx
│   │       └── AboutTitle.tsx
│   ├── Dashboard
│   │   └── DynamicRiskDashboard.tsx
│   ├── Forms
│   │   ├── FormWrapper.tsx
│   │   ├── SubmitButton.tsx
│   │   ├── index.ts
│   │   └── ui
│   │       ├── FieldGroup.tsx
│   │       ├── InputField.tsx
│   │       ├── SelectField.tsx
│   │       ├── SelectFieldUI.tsx
│   │       └── TextareaField.tsx
│   ├── Hero
│   │   ├── Hero.tsx
│   │   ├── HeroStatsDynamic.tsx
│   │   ├── index.ts
│   │   └── ui
│   │       ├── HeroBackground.tsx
│   │       ├── HeroBadge.tsx
│   │       └── HeroStats.tsx
│   ├── Portfolio
│   │   ├── CaseStudyRedacted.tsx
│   │   ├── PortfolioGallery.tsx
│   │   ├── SupportFAQ.tsx
│   │   ├── index.ts
│   │   └── ui
│   │       ├── FilterButton.tsx
│   │       ├── PortfolioCTA.tsx
│   │       └── PortfolioFilter.tsx
│   ├── SecretSection
│   │   ├── AuditTrailViewer.tsx
│   │   ├── BlurContact
│   │   │   ├── BlurContact.tsx
│   │   │   └── motionVariants.ts
│   │   ├── DocumentExportActions.tsx
│   │   ├── SecretDescription.tsx
│   │   ├── SecretHeader.tsx
│   │   └── SecureExportConsole.tsx
│   ├── SellingPoints
│   │   ├── SellingPoints.tsx
│   │   ├── SpeedGuaranteeBanner.tsx
│   │   └── points.ts
│   ├── Services
│   │   ├── ComplianceFAQ.tsx
│   │   ├── FeatureAwards.tsx
│   │   ├── FeatureList.tsx
│   │   ├── Services.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── index.ts
│   │   └── ui
│   │       ├── ComingSoonServiceCard.tsx
│   │       ├── ServiceBadge.tsx
│   │       └── ServiceCard.tsx
│   ├── Testimonials
│   │   ├── TestimonialSlider.tsx
│   │   └── TrustBadge.tsx
│   ├── UserBoard
│   │   ├── BadgeCard.tsx
│   │   ├── MetricCard.tsx
│   │   ├── TrustBadge.tsx
│   │   ├── TrustDashboard.tsx
│   │   ├── TrustDashboardDemo.tsx
│   │   ├── UserBoard.tsx
│   │   ├── motionConfig.ts
│   │   └── types.ts
│   ├── UserTimeline
│   │   └── UserBehaviorTimeline.tsx
│   ├── common
│   │   ├── CardWrapper.tsx
│   │   ├── LazyA4Card.tsx
│   │   ├── LazySection.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── LogoutButton.tsx
│   │   ├── StickyTableHeader.tsx
│   │   ├── TabPanel.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WithBlurIfUser.tsx
│   └── ui
│       ├── Button
│       │   ├── Button.tsx
│       │   ├── button.styles.ts
│       │   └── index.ts
│       ├── Card
│       │   ├── Card.styles.ts
│       │   └── Card.tsx
│       └── Tooltip
│           └── Tooltip.tsx
├── hooks
│   └── useInView.ts
└── types
    ├── auditTrail.ts
    ├── dynamicRisk.ts
    ├── html2pdf.d.ts
    ├── idCard.ts
    ├── risk.ts
    └── userBehavior.ts

41 directories, 137 files\n```\n\n### src/Layout\n```\nsrc/Layout
├── Layout.tsx
├── Navbar.tsx
├── partials
│   ├── Footer
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── Header
│       ├── Header.tsx
│       └── index.ts
└── ui
    ├── Logo.tsx
    └── ThemeToggle.tsx

5 directories, 8 files\n```\n\n### src/Router\n```\nsrc/Router
├── AppRouter.tsx
└── AuthGuard.tsx

1 directory, 2 files\n```\n\n### src/ThemeProvider\n```\nsrc/ThemeProvider
├── ThemeContext.ts
├── ThemeProvider.tsx
├── colors.ts
├── types.ts
└── useTheme.ts

1 directory, 5 files\n```\n\n### src/assets\n```\nsrc/assets
├── images
│   └── hero-bg.webp
├── logo.webp
└── react.svg

2 directories, 3 files\n```\n

## 10️⃣ Alias Check
- ✅ import ทุกไฟล์ใช้ alias ถูกต้อง
  [32m✅ import ทุกไฟล์ใช้ alias ถูกต้องแล้ว[0m

## 11️⃣ AAA.md Content

📘 บันทึกข้อความ: BOOS S WEBSITE PROJECT
ชื่อธุรกิจ: JP Visual & Docs  
ประเภท: บริการเอกสารเฉพาะทาง, ยื่นกู้, วีซ่า, สลิปธนาคาร, บัตร, โลโก้, Marketing,
จุดขายหลัก:

- 🔐 ความปลอดภัยสูง: ข้อมูลลูกค้าเก็บเป็นความลับ 100%
- ⚡ บริการรวดเร็ว 24 ชั่วโมง
- 🧠 คุณภาพมืออาชีพ: ประสบการณ์มากกว่า 8 ปี
  เป้าหมายเว็บไซต์:
- แสดงบริการทั้งหมดของธุรกิจ
- เพิ่มความน่าเชื่อถือ
- รองรับ UX/UI ทันสมัยแบบ Minimal UI, Flat UI, Professional
  หน้าเว็บหลัก:
- Home
- Services
- Pricing
- About
- Contact
- Secret/Admin
  3️⃣ ขอบเขตงานของ AI Technical Assistant
  บทบาท: ทำงานร่วมกับนักพัฒนา (DEV TO DEV) โดยเน้นความแม่นยำสูงในการเขียน React + TypeScript และการจัดการ Component, Hooks, และ Module Aliases
  แนวทางการทำงาน:
- สร้างและแก้ไข Components ให้เป็น Production-ready, Type-safe
- ตรวจสอบโค้ดให้ผ่าน tsc --noEmit, ESLint, Prettier
- ส่งโค้ดในรูปแบบพร้อมใช้งานทันที
- ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
- หากจำเป็นต้องแยกไฟล์หรือสร้างใหม่เพื่อเพิ่มประสิทธิภาพ ต้องแจ้งเหตุผลชัดเจน
  4️⃣ งานที่ต้องดำเนินการ
  🔧 วิเคราะห์โปรเจกต์ปัจจุบัน
- ตรวจสอบโครงสร้างไฟล์, Routing, Module Aliases
- ตรวจสอบการตั้งค่า Vite, Tailwind, DaisyUI
  ✅ ผ่าน Type-check  
  ✅ ใช้ Tailwind + DaisyUI  
  ✅ Minimal UI พร้อมใช้งาน
- ใช้ Module Aliases เช่น @/Home/components เพื่อความชัดเจนในการ import
- ทุก Component ควรเป็น FC<Props> พร้อม Props ที่กำหนดชัดเจน
- ใช้ Tailwind utility class อย่างมีระบบ เช่น bg-base-200, text-primary
- DaisyUI ใช้เฉพาะ Elements ที่รองรับ accessibility และ responsive
- อย่าลืมเพิ่ม aria-label, role, และ tabIndex ใน Components ที่เกี่ยวข้องกับการเข้าถึง
- ควรแยก logic ออกจาก UI component เช่นใช้ custom hooks สำหรับ data fetching
- ใช้ ESLint rule: "@typescript-eslint/no-explicit-any": "error" เพื่อป้องกันการใช้ any
- ตั้งค่า tsconfig.json ให้ strict: true และเปิด noUncheckedIndexedAccess
  สโลแกน:  
  “ยกระดับธุรกิจเฉพาะทางให้มีมาตรฐานระดับมืออาชีพ”
  จุดยืนทางธุรกิจ:
- เชี่ยวชาญการออกแบบและจัดการเอกสารเฉพาะทาง
- ทำให้ธุรกิจที่อยู่นอกระบบกฎหมายทั่วไปดูดี มีมาตรฐาน และน่าเชื่อถือ
- การันตีด้วยประสบการณ์มากกว่า 8 ปีในวงการ
  🔐 จุดเด่นของบริการ
  | จุดเด่น | รายละเอียด |
  |---------|-------------|
  | ความปลอดภัยสูง | ข้อมูลลูกค้าเก็บเป็นความลับ 100% พร้อมระบบรักษาความปลอดภัยขั้นสูง |
  | บริการรวดเร็ว | ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง |
  | คุณภาพมืออาชีพ | ทุกงานผ่านการตรวจสอบมาตรฐาน มีผลงานมากกว่า 4,000 ชิ้น |
  | ครบวงจร | ครอบคลุมทั้งด้านเอกสาร, การออกแบบ, การตลาด และระบบหลังบ้าน |
  🛠️ รายการบริการหลัก
  | บริการ | รายละเอียด | ราคาเริ่มต้น |
  |--------|-------------|---------------|
  | ที่ปรึกษายื่นกู้สินเชื่อ | วิเคราะห์โปรไฟล์ จัดชุดเอกสาร ยื่นตรงธนาคาร | 4,000 – 300,000 บาท |
  | ดูแลเอกสารยื่นวีซ่า | ตรวจสอบและจัดชุดเอกสารตามข้อกำหนดประเทศ | 4,000 บาท |
  | SLIBBANK | สลิปโอนเงินสมจริง ปรับชื่อ ยอด เวลา โลโก้ | 100 บาท/ใบ |
  | เอกสารเฉพาะทาง | แก้ไข สร้างใหม่ จัดหาเอกสารเฉพาะ | 400 – 600 บาท |
  | ผลิตบัตรจริง | บัตรแข็ง/อ่อน พร้อมลายน้ำ QR ส่งถึงมือ | 4,000 บาท |
  | ออกแบบโลโก้/ทีม | โลโก้ แบนเนอร์ ภาพลักษณ์แบรนด์คุณภาพสูง | 300 บาท |
  | การตลาดครบวงจร | วางกลยุทธ์ ยิงแอด ติดตั้งระบบตอบแชท | 5,000 – 500,000 บาท |
  | ระบบดูแลลูกค้า | AI Matching, LINE/Telegram, กลุ่มปิด | 4,000 บาท |
  | สร้าง/ปรับภาพลักษณ์ | รีแบรนด์ภาพบวกหรือลบแบบมืออาชีพ | 5,000 บาท |
  | บริการใหม่ | กำลังเปิดตัวบริการใหม่ที่ตอบโจทย์มากขึ้น | เร็ว ๆ นี้ |
  🏆 รางวัลและการรับรอง
- ได้รับการรับรองจากองค์กรชั้นนำทั้งในและต่างประเทศ
- เอกสารทุกชิ้นมีมาตรฐานสูง ตรวจสอบได้จริง
- การันตีความปลอดภัยและความถูกต้อง
  📂 ตัวอย่างผลงานที่ผ่านมา
  ให้คิดไอเดียให้ตรง ด้านล่างยังไม่ตรงจุดประสงค์
- รีแบรนด์เอกสารองค์กร
- จัดทำสื่อเร่งด่วนภายใน 24 ชั่วโมง
- จัดสเปกไฟล์เฉพาะทางให้ผ่านข้อกำหนด
- ผลงานด้าน Website, Dashboard, Landing Page, Mobile App, Graphic Design
  > หมายเหตุ: ข้อมูลบางส่วนถูกซ่อนเพื่อความปลอดภัยของลูกค้า
  > ❓ คำถามที่พบบ่อย (FAQ)
- รับแก้ Statement หรือสลิปไหม?
- สามารถแก้ทั้งไฟล์หรือทั้งเดือนได้ไหม?
- ความเสี่ยงคืออะไร?
- มีกรณีใดที่สามารถทำได้ไหม?
- ทำไมคนอื่นบอกว่าทำได้?
- การแก้ไขมีประโยชน์ไหม?
- สรุปรับปลอมหรือทำจริง?
  > ทีมงานพร้อมให้คำตอบอย่างตรงไปตรงมา พร้อมคำแนะนำที่ปลอดภัยและถูกต้องตามบริบท
  > 📞 ช่องทางติดต่อ
- LINE: @462FQTFC
- Instagram: @jpsystem.official
- Email: contact@jpsystem.dev
- Messenger: @jaopa.zerofour
  🧩 แนวทางการออกแบบเว็บไซต์
1. Layout ที่ชัดเจน
- ใช้ Grid หรือ Flexbox เพื่อจัดวาง Header, Content, Sidebar, Footer อย่างเป็นระเบียบ
2. สีและ Typography
- ใช้สีที่มีคอนทราสต์สูง อ่านง่าย
- เลือกฟอนต์ให้เหมาะกับบริบท (ทางการ vs เป็นกันเอง)
- ขนาดตัวอักษรและระยะห่างต้องเหมาะสม
3. ปุ่มและการโต้ตอบ
- ปุ่มต้องกดง่าย มีสถานะชัดเจน (hover, active, disabled)
- ใช้ข้อความที่เข้าใจง่าย เช่น “ยืนยัน”, “ย้อนกลับ”
4. การนำทาง
- เมนูหลักอยู่ในตำแหน่งที่ผู้ใช้คุ้นเคย  
  มี Breadcrumbs และระบบค้นหา
5. รองรับมือถือ (Responsive)
- UI ปรับตามอุปกรณ์
- ปุ่มและเมนูต้องไม่เล็กเกินไป
6. Feedback จากระบบ
- แจ้งเตือนเมื่อมีการกระทำ เช่น “บันทึกสำเร็จ”
 ใช้ loading indicators หรือ skeleton screens
  ⚙️ ข้อกำชับด้านการพัฒนา
- ห้ามเขียนโค้ดซ้ำซ้อน
- ห้าม import ผิดหรือตั้งค่าไม่ตรง
- ต้องแบ่งหน้าที่ของไฟล์ให้ชัดเจน
- ต้องเขียนโค้ดให้สะอาดและเป็นระเบียบ
- ใช้ภาษาที่ชาวบ้านเข้าใจได้ แต่ยังคงมาตรฐาน
- ออกแบบให้ดูสมจริงและน่าเชื่อถือ
- ทุก Component ต้องผ่าน Type-check, ESLint, Prettier
- ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
## โครงการ
- หน้า: Home.tsx / SecretPage.tsx
- เทคโนโลยี: React + TypeScript + Vite + TailwindCSS + DaisyUI
- เป้าหมาย: สร้าง/ปรับ Component ให้ Production-ready, Type-safe, responsive, accessible, minimal UI, animation feedback
## 1️⃣ Home.tsx Components & File Actions
| Component | Action | Source File / Suggested Path | Notes / Enhancement Ideas `src/Home/components/UserBoard/TrustBadge.tsx` | เพิ่ม animation, counter metrics |
| PortfolioGallery / CaseStudy | ใช้ไฟล์เดิม | `src/Home/components/Portfolio/PortfolioGallery.tsx` | เลือก case study เด่น, lazy load, hover overlay |
| PortfolioOverlay | สร้างใหม่ | `src/Home/components/Portfolio/PortfolioOverlay.tsx` | Overlay hover + CTA + animation |
| CTASection | สร้างใหม่ | `src/Home/components/CTA/CTASection.tsx` | ปุ่ม Call-to-Action, props control, Tailwind/DaisyUI |
| FooterMinimal | ใช้ไฟล์เดิม | `src/Layout/partials/Footer/Footer.tsx` | ปรับ minimal, link socials/contact, responsive |
## 2️⃣ SecretPage.tsx / SecretSection Components & File Actions
| Component | Action | Source File / Suggested Path | Notes / Enhancement Ideas |
|-----------|--------|-----------------------------|---------------------------|
| AdminLoginForm | ปรับแก้ | `src/Home/Login.tsx` | แยก logic, UI secure, error handling, accessibility |
| SecureDocumentList | สร้างใหม่ | `src/Home/components/SecretSection/SecureDocumentList.tsx` | Wrapper ของ IdCardPreview + RegistrationPreview + export/download actions |
| CustomerDataPanel | สร้างใหม่ | `src/Home/components/SecretSection/CustomerDataPanel.tsx` | รวม MetricCard, BadgeCard, Dashboard mini panel ของลูกค้า |
| AuditLogViewer | ปรับแก้ | `src/Home/components/SecretSection/AuditTrailViewer.tsx` | เพิ่ม filter/search/pagination, highlight changes |
| AccessControlBanner | สร้างใหม่ | `src/Home/components/SecretSection/AccessControlBanner.tsx` | แจ้งสิทธิ์เข้าถึง, role-based UI feedback |
| SecureExportConsole | ปรับแก้ | `src/Home/components/SecretSection/SecureExportConsole.tsx` | ปรับ UI ใช้ง่าย, safe mode, feedback animation |
## 3️⃣ Enhancement Guidelines
1. แยก **logic** ออกจาก **UI components** ด้วย custom hooks สำหรับ data fetching หรือ export  
2. ใช้ **Tailwind/DaisyUI** เป็นระบบ styling หลัก, เพิ่ม responsive + accessibility  
3. ใช้ **animation/motion** กับ interactive / sensitive actions เช่น export, delete, hover effects  
4. ทุก Component ต้องเป็น **FC<Props>** และ type-safe  
5. Home.tsx: เน้น marketing + trust + CTA, Hero dynamic, Portfolio gallery filterable 
6. SecretPage.tsx: เน้น security + admin workflow + real-time metrics + role-based access  
## 4️⃣ Action Summary 
- **สร้างไฟล์ใหม่**: HeroStatsDynamic, ServiceBadge, PortfolioOverlay, CTASection, AccessControlBanner, CustomerDataPanel, SecureDocumentList  
- **ปรับแก้ไฟล์เดิม**: AdminLoginForm, AuditLogViewer, SecureExportConsole  
- **ใช้ไฟล์เดิม**: HeroSection, ServiceOverview, TrustBadge, PortfolioGallery, FooterMinimal  
### ⚡ Usage
- ให้ AI สร้าง/ปรับ Component ตามตารางด้านบน  
- ตรวจสอบให้ผ่าน **Type-check, ESLint, Prettier**  
- ส่งโค้ด **พร้อมใช้งานทันที** ในโครงสร้างโปรเจกต์ปัจจุบัน  
- เพิ่ม comment หรือ prop interface สำหรับ developer ใช้งานต่อได้ง่าย.
หลังจากที่ได้รับรายละเอียดทั้งหมดให้สรุปเนื้อหาที่ส่งให้เข้าใจโจทย์หรือเข้าใจรายละเอียดที่ส่งให้มากน้อยขนาดไหนเพื่อประเมินศักยภาพของ AI ตัวนั้นพร้อมทำงานหรือไม่
#####
