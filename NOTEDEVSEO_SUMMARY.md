# 📊 Project Summary Report

Date: 2025-09-06 18:28:21  
Branch: main  
Git Status: Uncommitted / untracked changes ❌

## 1️⃣ Dependencies

| Dependency  | Status | Version |
| ----------- | ------ | ------- |
| react       | ✅     | ^19.1.1 |
| react-dom   | ✅     | ^19.1.1 |
| vite        | ✅     | ^7.1.2  |
| tailwindcss | ✅     | ^3.3.3  |
| daisyui     | ✅     | ^3.9.4  |
| typescript  | ✅     | ^5.9.2  |
| eslint      | ✅     | ^9.33.0 |
| prettier    | ✅     | ^3.6.2  |

## 2️⃣ Config Files

| Config File        | Status    |
| ------------------ | --------- |
| tsconfig.json      | ✅ exists |
| tailwind.config.ts | ✅ exists |
| vite.config.ts     | ✅ exists |
| .eslintrc          | ✅ exists |
| .prettierrc        | ✅ exists |
| .gitignore         | ✅ exists |

## 3️⃣ Alias Check

- ✅ all imports alias ok (Node: v22.19.0, ts-node: N/A)

## 4️⃣ Project Tree (src, depth 10)

```
src
├── App
│   └── RootApp.tsx
├── Home
│   ├── AdminTools
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
│   │   ├── IdCardPreview
│   │   │   ├── IdCardPreview.tsx
│   │   │   └── IdCardSection.tsx
│   │   ├── MedicalCertificate
│   │   │   ├── MedicalCertificate.tsx
│   │   │   └── types
│   │   │       └── medicalCertificate.ts
│   │   ├── RegistrationPreview
│   │   │   └── RegistrationPreview.tsx
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
│   ├── AdminTools.tsx
│   ├── CustomerAssessmentForm.tsx
│   ├── Home.tsx
│   ├── IdCardForm.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   ├── components
│   │   ├── About
│   │   │   ├── About.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── AboutDescription.tsx
│   │   │       ├── AboutImage.tsx
│   │   │       ├── AboutQuote.tsx
│   │   │       └── AboutTitle.tsx
│   │   ├── CreditAssessmentForm
│   │   │   ├── CreditAssessmentForm.tsx
│   │   │   ├── CreditProfileForm.tsx
│   │   │   └── ResultCard.tsx
│   │   ├── Dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   ├── common
│   │   │   │   ├── BlurContact
│   │   │   │   │   ├── BlurContact.tsx
│   │   │   │   │   └── motionVariants.ts
│   │   │   │   └── DocumentDownload
│   │   │   │       └── DocumentDownload.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── DashboardCard.tsx
│   │   │       ├── DashboardGreeting.tsx
│   │   │       ├── DashboardSection.tsx
│   │   │       ├── QuickActions.tsx
│   │   │       ├── RecentActivity.tsx
│   │   │       └── UserStats.tsx
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
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FilterButton.tsx
│   │   │       ├── PortfolioCTA.tsx
│   │   │       └── PortfolioFilter.tsx
│   │   ├── SecretSection
│   │   │   ├── AuditTrailViewer.tsx
│   │   │   ├── KbankIOSNotification.tsx
│   │   │   ├── KbankNotificationCard.tsx
│   │   │   └── SecretDescription.tsx
│   │   ├── SellingPoints
│   │   │   ├── SellingPoints.tsx
│   │   │   ├── SpeedGuaranteeBanner.tsx
│   │   │   └── points.ts
│   │   ├── Services
│   │   │   ├── ComplianceFAQ.tsx
│   │   │   ├── FeatureAwards.tsx
│   │   │   ├── FeatureList.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── ServiceCard.tsx
│   │   ├── Testimonials
│   │   │   ├── TestimonialSlider.tsx
│   │   │   └── TrustBadge.tsx
│   │   ├── UserBoard
│   │   │   └── UserBoard.tsx
│   │   ├── common
│   │   │   ├── CTAButtons.tsx
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
│   │       ├── Card
│   │       │   ├── Card.styles.ts
│   │       │   └── Card.tsx
│   │       └── Icon
│   │           ├── Icon.styles.ts
│   │           ├── Icon.tsx
│   │           └── index.ts
│   ├── hooks
│   │   └── useInView.ts
│   └── types
│       ├── auditTrail.ts
│       ├── dynamicRisk.ts
│       ├── idCard.ts
│       ├── risk.ts
│       └── userBehavior.ts
├── Layout
│   ├── DashboardLayout.tsx
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
│       └── ThemeToggle.tsx
├── Router
│   ├── AppContent.tsx
│   ├── AppRouter.tsx
│   ├── ProtectedRoute.tsx
│   └── PublicRoute.tsx
├── ThemeProvider
│   ├── ThemeContext.tsx
│   ├── ThemeProvider.tsx
│   ├── colors.ts
│   ├── types.ts
│   └── useTheme.ts
├── __mocks__
│   ├── KbankIOSNotification.mock.ts
│   ├── kbankIOSNotification.ts
│   ├── mockDriverLicenseData.ts
│   ├── mockIdCardData.ts
│   ├── mockMedicalCertificate.ts
│   ├── mockRegistrationData.ts
│   ├── mockSalaryCertificate.ts
│   ├── mockUserBoard.ts
│   └── specialBranchCertificate.ts
├── animations
│   └── motionVariants.ts
├── api
│   ├── Chat
│   │   ├── index.ts
│   │   ├── messages.ts
│   │   ├── send.ts
│   │   └── types.ts
│   ├── Chat.ts
│   ├── echo.ts
│   ├── project.ts
│   └── useChat.ts
├── assets
│   ├── images
│   │   └── hero-bg.webp
│   ├── logo.webp
│   └── react.svg
├── config
│   ├── assessmentConfig.ts
│   ├── dashboardCardsConfig.tsx
│   ├── driverLicenseConfig.ts
│   ├── homeSections.config.tsx
│   ├── idCardConfig.ts
│   ├── jpServices.config.tsx
│   └── secretCards.config.tsx
├── context
│   ├── AppProviders.tsx
│   ├── AuthContext.tsx
│   ├── AuthProvider.tsx
│   └── types.ts
├── data
│   ├── UserTempCodes.ts
│   ├── applicantData.ts
│   ├── caseStudies.ts
│   ├── portfolioItems.ts
│   ├── testimonialsData.ts
│   ├── theme.ts
│   └── users.ts
├── env.d.ts
├── hooks
│   ├── useAuth.tsx
│   ├── useProtectedAuth.tsx
│   └── useTempCodeAuth.ts
├── index.css
├── main.tsx
├── services
│   └── driverLicenseOcr.ts
├── styles
│   ├── driverLicense.css
│   └── global.css
├── types
│   ├── IUser.ts
│   ├── cardConfig.ts
│   ├── dashboard.ts
│   └── sqljs.d.ts
├── utils
│   ├── auth.ts
│   ├── calculations.ts
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
└── vite-env.d.ts

66 directories, 197 files
```

## 5️⃣ Project Info

| Item                | Value                                 |
| ------------------- | ------------------------------------- |
| Project Name        | jp-visouldocs                         |
| Version             | 7.1.1                                 |
| Description         | N/A                                   |
| GitHub URL          | https://github.com/jiggoo0/vite-react |
| Developer Email     | jiggo0@outlook.co.th                  |
| Website URL         | https://404notfontjp.vercel.app/      |
| Vercel Account      | jiggoos-projects                      |
| Vercel Project Name | vite-react                            |
| Vercel Project ID   | prj_MBF9hbw032OzD2gDVkUQ7mvoYA2t      |

## 6️⃣ Notes

- RODEMAP.md & WORKFLOW.md included if present

## 📝 RODEMAP.md

📋 JP - VISOUL & DOSC – Business Overview & Technical Logic
1️⃣ ข้อมูลธุรกิจพื้นฐาน
ชื่อธุรกิจ: JP - VISOUL & DOSC
Tagline: “ทำธุรกิจสีเทาให้มีความมืออาชีพ มาตรฐาน”
ระยะเวลา: ทีมงานมีประสบการณ์ 8–9 ปี
ช่องทางติดต่อ: LINE Official @462FQFC
1.1 บริการหลัก 8 ประเภท

1. วางแผนยื่นกู้สินเชื่อ (บุคคล, SME, รีไฟแนนซ์)
2. ดูแลเอกสารยื่นวีซ่า (ทุกประเภท)
3. SLIBBANK – สลิปโอนเงิน/รับเงิน ตรวจสอบได้
4. บริการเอกสาร: แก้ไข / สร้างใหม่ / จัดหา
5. ผลิตชิ้นงานจริง (บัตรแข็ง/บัตรพลาสติก)
6. ออกแบบโลโก้ / แบนเนอร์ / ปกเพจ
7. ดูแลการตลาดครบวงจร + ระบบหลังบ้าน
8. โครงการ “ให้น้องได้พักผ่อน” – AI Matching
   2️⃣ ปรัชญาและ Logic ของธุรกิจ
   Core Logic: ช่องว่างระหว่างความต้องการจริงของคน กับข้อจำกัดของระบบราชการ/ธนาคาร
   Pain Point: คนรายได้น้อย–กลางเข้าถึงบริการยาก
   Solution: ปรับข้อมูลจริงให้ระบบยอมรับ โดยไม่สร้างข้อมูลเท็จ
   Analogy:
   “เหมือนการแต่งหน้า” → ปรับสิ่งที่มีอยู่ให้ดีที่สุด
   “เหมือนการเขียน CV” → นำเสนอข้อมูลจริงในมุมมืออาชีพ
   3️⃣ การเปิดเผยความสามารถและขีดจำกัด
   ข้อจำกัด: ปรับข้อมูลเล็กน้อยให้สมจริง แต่ไม่สร้างรายได้เกินจริง
   การเตือนลูกค้า: สื่อสารความเสี่ยงชัดเจน
   4️⃣ กฎเกณฑ์การทำงาน (Rules)
   รับเงินเท่ากับเริ่มงาน – ไม่มีข้อยกเว้น
   กรองลูกค้า: กิริยาไม่ดี = ไม่รับ
   ส่งคนอื่นมาแทน / ทำเนียน = ยึดเงิน
   ประกาศครั้งสุดท้าย: ไม่โปรโมตเรื่องนี้อีก
   สื่อสารความเสี่ยง: โปร่งใส ให้ลูกค้าตัดสินใจเอง
   5️⃣ การจัดการความเสี่ยงและ Pricing Strategy
   ความเสี่ยง ราคา
   ต่ำ 100–400 บาท
   กลาง 4,000–50,000 บาท
   สูง 25,000 บาท/รายการ
   Customer Filtering: อ่านเนื้อหา → เข้าใจธุรกิจ → ยอมจ่ายเงิน → กิริยาดี → ทำงานร่วมกันได้
   6️⃣ Business Logic & Service Design
   Service Logic & Limitations
   สินเชื่อ คนมีรายได้จริงแต่เอกสารไม่ครบ → วิเคราะห์โปรไฟล์ + จัดชุดเอกสาร
   วีซ่า ต้องพิสูจน์ความสามารถทางการเงิน → คำนวณรายรับ-รายจ่ายให้สมจริง
   SLIBBANK แสดงประวัติการเงิน ตรวจสอบได้จริง → แก้ชื่อ, เวลา, โลโก้, ยอดเงินไม่เกินขอบเขต
   เอกสาร แปลงข้อมูลจริงให้อยู่ในรูปแบบมาตรฐาน ไม่สร้างข้อมูลเท็จ
   บัตรแข็ง/พลาสติก ต้องยืนยันตัวตน ผลิตพร้อมลายน้ำ, QR, Hologram สำหรับงานยืนยันเท่านั้น
   การตลาด Branding, Ads, Automation ราคาสะท้อนขนาดงานและระบบ
   AI Matching ระบบจัดคิวงาน + แชทอัตโนมัติ ใช้กับงานเอกสารและหลังบ้าน
   โลโก้ / แบนเนอร์ ออกแบบครบชุด PNG/JPG/SVG ไม่สร้าง brand identity เกินจริง
   7️⃣ Customer Psychology Management
   สร้าง FOMO: “บางอย่างที่หาไม่ได้ที่ไหน”
   สร้างความปลอดภัย: ราคาชัดเจน, แยกแพ็กเกจ, SLA
   Trust Ladder: สงสัย → อ่าน → เข้าใจ → จ่ายเงิน → เชื่อใจ → ใช้บริการต่อ
   8️⃣ Market Positioning & Branding
   Positioning: ผู้เชี่ยวชาญ ไม่ใช่ผู้ให้บริการทั่วไป
   Scarcity Marketing: ทักษะหายาก, “ไม่กี่ที่ในประเทศทำได้”
   Authority Building: ประสบการณ์ 8–9 ปี, เปิดเผยเทคนิคบางส่วน, ยอมรับข้อจำกัด-
   9️⃣ Legal & Risk Navigation
   Legal Gray Area: ไม่อ้างว่าถูกกฎหมาย
   Customer Protection: แจ้งความเสี่ยง, ปล่อยให้ลูกค้าตัดสินใจเอง
   Communication: ใช้คำ “ปรับแต่ง / เติมเต็ม / จัดรูปแบบ” แทนคำว่า “ปลอม”
   🔟 Core DNA & Philosophy
   ปรัชญาหลัก: “เราไม่ได้แก้ปัญหาของระบบ แต่แก้ปัญหาของคนที่ถูกระบบทิ้ง”
   Value Creation:
   ลูกค้า: เข้าถึงสิทธิ์ที่ควรได้
   สังคม: ลดความเหลื่อมล้ำ
   ทีมงาน: รายได้จากความเชี่ยวชาญหายาก
   1️⃣1️⃣ Customer Journey
9. ความสงสัย → อ่านเนื้อหา
10. เข้าใจความเสี่ยง → ตัดสินใจ
11. จ่ายเงิน → ได้ผลงาน
12. เชื่อใจ → ใช้บริการต่อ
    1️⃣2️⃣ Exit & Legacy Strategy
    ประกาศครั้งสุดท้าย: ไม่โปรโมตต่อ
    ไม่โจมตีคู่แข่ง
    คงความมืออาชีพและซื่อสัตย์
    Legacy Message: “ผมทำได้ แต่ราคาเท่านี้ ส่วนใครจะทำอย่างไร ผมไม่รู้”
    13️⃣ Directory & Technical Overview
    Folder หน้าที่หลัก
    hooks ฟังก์ชัน hook สำหรับ Home / reusable logic
    types Type definitions เช่น auditTrail.ts, idCard.ts
    components UI modules แบ่งตามฟีเจอร์
    AdminTools Back-office, เอกสาร, การตรวจสอบ, การอนุมัติ
    UserBoard Front-end user metrics & dashboard
    Forms / Services / Portfolio / Hero / SellingPoints / Testimonials ส่วนประกอบ UI/UX
    UI / common Reusable components: Button, Card, Icon, PageSection, ThemeToggle

ตัวอย่างฟีเจอร์:

AdminTools → DriverLicense, MedicalCertificate, SalaryCertificate, Reviews

UserBoard → MetricCard, BadgeCard, TrustBadge, TrustDashboardDemo

Dashboard → DashboardCard, UserStats, RecentActivity, QuickActions, BlurContact, DocumentDownload

---

14️⃣ Notes / Key Points

AdminTools: งานหลังบ้าน, ตรวจสอบเอกสาร, อนุมัติ

UserBoard: แสดงข้อมูลผู้ใช้, เมตริก, dashboard, UI demo

Components: Shared UI, reusable elements, forms, portfolio, hero sections

Types & Hooks: ใช้ซ้ำทั่วทั้งระบบ

# Home Project Structure

_Generated at: Mon Sep 1 18:18:14 +07 2025_

## Directory Tree

```
Home
  hooks
    useInView.ts
  IdCardForm.tsx
  AdminTools
    IdCardPreview
      IdCardPreview.tsx
      IdCardSection.tsx
    RegistrationPreview
      RegistrationPreview.tsx
    MedicalCertificate
      MedicalCertificate.tsx
      types
        medicalCertificate.ts
    SpecialBranchCertificate
      SpecialBranchCertificate.tsx
    DriverLicense
      DriverLicenseForm.tsx
      DriverLicensePreviewWithActions.tsx
      DriverLicensePage.tsx
      DriverLicensePreview.tsx
      types
        driverLicense.ts
      ui
        FieldDraggable.tsx
        TextField.tsx
        PhotoField.tsx
    SalaryCertificate
      types
        salaryCertificate.ts
      SalaryCertificate.tsx
    Reviews
      ReviewsGallery.tsx
      ui
        ReviewCard.tsx
  CustomerAssessmentForm.tsx
  Home.tsx
  components
    About
      ui
        AboutTitle.tsx
        AboutQuote.tsx
        AboutImage.tsx
        AboutDescription.tsx
      index.ts
      About.tsx
    UserBoard
      UserBoard.tsx
    Dashboard
      ui
        RecentActivity.tsx
        QuickActions.tsx
        UserStats.tsx
        DashboardCard.tsx
        DashboardSection.tsx
      index.ts
      Dashboard.tsx
      common
        BlurContact
          motionVariants.ts
          BlurContact.tsx
        DocumentDownload
          DocumentDownload.tsx
    Testimonials
      TrustBadge.tsx
      TestimonialSlider.tsx
    Portfolio
      CaseStudyRedacted.tsx
      index.ts
      PortfolioGallery.tsx
      ui
        PortfolioCTA.tsx
        FilterButton.tsx
        PortfolioFilter.tsx
    Forms
      IdCardFormWithOCR.tsx
      index.ts
      FormWrapper.tsx
      IdCardPreview.tsx
      ui
        SelectField.tsx
        FieldGroup.tsx
        InputField.tsx
        SelectFieldUI.tsx
        TextareaField.tsx
      SubmitButton.tsx
    SellingPoints
      SpeedGuaranteeBanner.tsx
      SellingPoints.tsx
      points.ts
    Hero
      ui
        HeroStats.tsx
        HeroBadge.tsx
        HeroBackground.tsx
      Hero.tsx
      index.ts
    common
      LogoutButton.tsx
      TabPanel.tsx
      StickyTableHeader.tsx
      CardWrapper.tsx
      ThemeToggle.tsx
      LazyA4Card.tsx
      LoadingSpinner.tsx
      PageSection.tsx
      WithBlurIfUser.tsx
      CTAButtons.tsx
    ui
      Icon
        Icon.tsx
        Icon.styles.ts
        index.ts
      Card
        Card.styles.ts
        Card.tsx
      Button
        button.styles.ts
        index.ts
        Button.tsx
    Services
      ComplianceFAQ.tsx
      index.ts
      ServicesSection.tsx
      ui
        ServiceCard.tsx
      FeatureAwards.tsx
      FeatureList.tsx
    SecretSection
      AuditTrailViewer.tsx
      SecretDescription.tsx
      KbankNotificationCard.tsx
      KbankIOSNotification.tsx
  types
    auditTrail.ts
    dynamicRisk.ts
    risk.ts
    idCard.ts
    userBehavior.ts
  Login.tsx
  Profile.tsx
  AdminTools.tsx
  Settings.tsx
```

## Mermaid Diagram

```mermaid
graph TD
  subgraph AdminTools
    Home --> AdminTools
  subgraph DriverLicense
    AdminTools --> DriverLicense
  subgraph types
    DriverLicense --> types
  end
  subgraph ui
    DriverLicense --> ui
  end
  end
  subgraph IdCardPreview
    AdminTools --> IdCardPreview
  end
  subgraph MedicalCertificate
    AdminTools --> MedicalCertificate
  subgraph types
    MedicalCertificate --> types
  end
  end
  subgraph RegistrationPreview
    AdminTools --> RegistrationPreview
  end
  subgraph Reviews
    AdminTools --> Reviews
  subgraph ui
    Reviews --> ui
  end
  end
  subgraph SalaryCertificate
    AdminTools --> SalaryCertificate
  subgraph types
    SalaryCertificate --> types
  end
  end
  subgraph SpecialBranchCertificate
    AdminTools --> SpecialBranchCertificate
  end
  end
  subgraph components
    Home --> components
  subgraph About
    components --> About
  subgraph ui
    About --> ui
  end
  end
  subgraph Dashboard
    components --> Dashboard
  subgraph common
    Dashboard --> common
  subgraph BlurContact
    common --> BlurContact
  end
  subgraph DocumentDownload
    common --> DocumentDownload
  end
  end
  subgraph ui
    Dashboard --> ui
  end
  end
  subgraph Forms
    components --> Forms
  subgraph ui
    Forms --> ui
  end
  end
  subgraph Hero
    components --> Hero
  subgraph ui
    Hero --> ui
  end
  end
  subgraph Portfolio
    components --> Portfolio
  subgraph ui
    Portfolio --> ui
  end
  end
  subgraph SecretSection
    components --> SecretSection
  end
  subgraph SellingPoints
    components --> SellingPoints
  end
  subgraph Services
    components --> Services
  subgraph ui
    Services --> ui
  end
  end
  subgraph Testimonials
    components --> Testimonials
  end
  subgraph UserBoard
    components --> UserBoard
  end
  subgraph common
    components --> common
  end
  subgraph ui
    components --> ui
  subgraph Button
    ui --> Button
  end
  subgraph Card
    ui --> Card
  end
  subgraph Icon
    ui --> Icon
  end
  end
  end
  subgraph hooks
    Home --> hooks
  end
  subgraph types
    Home --> types
  end
```

## 📝 WORKFLOW.md

เมื่อได้รับข้อความทั้งหมดสรุปตามหัว
เป้าหมายหลัก:
สร้าง แก้ไข ปรับแต่ง React + TypeScript + Vite + TailwindCSS/DaisyUI components ให้เป็น Production-ready, Type-safe, Minimal UI, Flat UI, Enterprise-grade
แนวทางการทำงาน:
ทำงานแบบ DEV-to-DEV
ตรวจสอบและแก้ไขโค้ดให้ตรงตามวัตถุประสงค์, ป้องกันข้อผิดพลาด
ส่งกลับโค้ด พร้อมใช้งานและ format เรียบร้อย
แนะนำทันทีหากต้องปรับปรุงเร่งด่วน
กฎเข้มงวด:
ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
การแยกไฟล์หรือสร้างไฟล์ใหม่ทำได้ถ้าชัดเจนและช่วยประสิทธิภาพ
ยึด ESLint, TypeScript strict, Production-ready practices
เน้น ความแม่นยำสูง ในการจัดการ Components และ Hooks
AI สามารถ:
เข้าใจโครงสร้างโปรเจกต์ Vite + React + TypeScript จากรายละเอียด tree และ config
ตรวจสอบ dependencies, config files, alias, project info, project tree
สร้างสรุปรายงาน Markdown อัตโนมัติ (เหมือนสคริปต์ NOTEDEVSEO_SUMMARY.md)
ตั้งค่าไฟล์ต่าง ๆ ตรวจสอบให้ใช้งานได้ถูกต้อง
คำสั่งสร้าง home::/data/data/com.termux/files/home/project/src/api/Chat.ts
ที่สามารถใช้งาน สนทนาตอบแชท Realtime คู่กับ
home::/data/data/com.termux/files/home/project/src/utils/common/ChatWidget.tsx
code ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบันimport
import { WebSocketServer, WebSocket } from "ws";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export interface ChatMessage {
id: string;
user: string; // 'user' | 'bot'
text: string;
createdAt: number;
}

const clients = new Set<WebSocket>();
const messages: ChatMessage[] = [];

export function initChat(wss: WebSocketServer) {
wss.on("connection", (ws) => {
clients.add(ws);

    // ส่ง history
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    ws.on("message", (raw) => {
      try {
        const data = JSON.parse(raw.toString());
        const schema = z.object({ user: z.string().min(1), text: z.string().min(1) });
        const parsed = schema.parse(data);

        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          user: parsed.user,
          text: parsed.text,
          createdAt: Date.now(),
        };
        messages.push(msg);
        broadcast({ type: "message", payload: [msg] });

        // Bot auto-reply
        if (parsed.user === "user") {
          setTimeout(() => {
            const botMsg: ChatMessage = {
              id: crypto.randomUUID(),
              user: "bot",
              text: generateBotReply(parsed.text),
              createdAt: Date.now(),
            };
            messages.push(botMsg);
            broadcast({ type: "message", payload: [botMsg] });
          }, 500);
        }
      } catch {
        ws.send(JSON.stringify({ type: "error", error: "Invalid message" }));
      }
    });

    ws.on("close", () => clients.delete(ws));

});
}

function broadcast(data: unknown) {
const payload = JSON.stringify(data);
clients.forEach((client) => {
if (client.readyState === WebSocket.OPEN) client.send(payload);
});
}

export function getMessages(\_req: Request, res: Response, \_next: NextFunction) {
res.json(messages);
}

function generateBotReply(text: string): string {
const lower = text.toLowerCase();
if (lower.includes("hi") || lower.includes("hello") || lower.includes("สวัสดี"))
return "สวัสดีครับ! 👋";
if (lower.includes("ชื่อ")) return "ผมคือ Bot 🤖 ยินดีที่ได้รู้จัก!";
if (lower.includes("ขอบคุณ")) return "ยินดีครับ 🙏";
return `คุณพิมพ์ว่า: "${text}" ใช่ไหมครับ?`;
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";

interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
timestamp: number;
}

interface WSMessagePayload {
id: string;
user: "user" | "bot";
text: string;
createdAt: number;
}

interface ChatWidgetProps {
autoCloseMs?: number;
}

const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
const [messages, setMessages] = useState<ChatMessage[]>([]);
const [input, setInput] = useState("");
const [isOpen, setIsOpen] = useState(false);

const wsRef = useRef<WebSocket | null>(null);
const scrollRef = useRef<HTMLDivElement>(null);
const autoCloseTimer = useRef<number | null>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

// Auto-close chat
useEffect(() => {
if (isOpen) autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
return () => {
if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
autoCloseTimer.current = null;
};
}, [isOpen, autoCloseMs]);

// Close on Escape key
useEffect(() => {
const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
window.addEventListener("keydown", handleKey);
return () => window.removeEventListener("keydown", handleKey);
}, []);

// Auto-scroll on new messages
useEffect(() => {
scrollRef.current?.scrollTo({
top: scrollRef.current.scrollHeight,
behavior: "smooth",
});
}, [messages]);

// WebSocket connection
useEffect(() => {
const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const ws = new WebSocket(`${protocol}://${window.location.host}`);
wsRef.current = ws;

    ws.onopen = () => console.log("✅ WS connected");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "history" || data.type === "message") {
          const payload = Array.isArray(data.payload) ? data.payload : [data.payload];
          const mapped: ChatMessage[] = payload.map((m: WSMessagePayload) => ({
            id: m.id,
            sender: m.user === "user" ? "user" : "bot",
            text: m.text,
            timestamp: m.createdAt,
          }));
          setMessages((prev) => [...prev, ...mapped]);
        } else if (data.type === "error") {
          console.error("WS error:", data.error);
        }
      } catch (err) {
        console.error("❌ Failed to parse WS message", err);
      }
    };

    ws.onclose = () => console.log("⚡ WS closed");
    ws.onerror = (err) => console.error("⚡ WS error", err);

    return () => ws.close();

}, []);

// Send message
const handleSend = () => {
const text = input.trim();
if (!text) return;

    const msg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, msg]);
    wsRef.current?.send(JSON.stringify({ user: "user", text }));
    setInput("");

};

return (
<div className="fixed bottom-4 right-4 z-50">
<button
        onClick={toggleChat}
        className="p-3 rounded-full bg-primary text-white shadow-lg hover:scale-105 transition-transform"
      >
<MessageCircle size={24} />
</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-widget"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-14 right-0 w-80 bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col"
          >
            <div className="p-3 border-b font-semibold">Chat</div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user" ? "ml-auto bg-primary text-white" : "mr-auto bg-base-200"
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex p-2 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 input input-sm input-bordered rounded-l-lg"
                placeholder="พิมพ์ข้อความ..."
              />
              <button onClick={handleSend} className="btn btn-sm btn-primary rounded-l-none">
                ส่ง
              </button>
            </div>

            <div className="p-2 border-t">
              <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

);
};

export default ChatWidget;

// src/api/useChat.ts
import { useEffect, useState, useRef, useCallback } from "react";

export interface ChatMessage {
id: string;
sender: "user" | "bot";
text: string;
timestamp: number; // ใช้ timestamp แทน createdAt
}

interface WSChatMessage {
id: string;
user: string;
text: string;
timestamp: number;
}

interface WSMessageEvent {
type: "history" | "message" | "error";
payload: WSChatMessage | WSChatMessage[];
error?: string;
}

function mapPayloadToMessages(payload: WSChatMessage | WSChatMessage[]): ChatMessage[] {
const arr = Array.isArray(payload) ? payload : [payload];
return arr.map((m) => ({
id: m.id,
sender: m.user === "user" ? "user" : "bot",
text: m.text,
timestamp: m.timestamp,
}));
}

export function useChat() {
const [messages, setMessages] = useState<ChatMessage[]>([]);
const wsRef = useRef<WebSocket | null>(null);

// Connect WebSocket
useEffect(() => {
const protocol = window.location.protocol === "https:" ? "wss" : "ws";
const ws = new WebSocket(`${protocol}://${window.location.host}`);
wsRef.current = ws;

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data: WSMessageEvent = JSON.parse(event.data);

        switch (data.type) {
          case "history":
            setMessages(mapPayloadToMessages(data.payload));
            break;
          case "message":
            setMessages((prev) => [...prev, ...mapPayloadToMessages(data.payload)]);
            break;
          case "error":
            console.error("WS error:", data.error);
            break;
        }
      } catch (err) {
        console.error("Failed to parse WS message", err);
      }
    };

    ws.onclose = () => console.log("Chat WS closed");
    ws.onerror = (e) => console.error("Chat WS error", e);

    return () => ws.close();

}, []);

const send = useCallback(async (text: string) => {
const cleanText = text.trim();
if (!cleanText) return;

    const tempMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text: cleanText,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, tempMsg]);

    try {
      wsRef.current?.send(JSON.stringify({ user: "user", text: cleanText }));
    } catch {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "user", text: cleanText }),
      });
    }

}, []);

return { messages, send };
}

// server.ts
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { WebSocketServer } from "ws";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { z } from "zod";
import { initChat, getMessages } from "./src/api/Chat.ts";
import "dotenv/config";

// -------- Config & Env --------
const envSchema = z.object({
PROJECT_NAME: z.string(),
VERSION: z.string(),
DESCRIPTION: z.string().optional(),
GITHUB_URL: z.string().url(),
DEVELOPER_EMAIL: z.string().email(),
WEBSITE_URL: z.string().url(),
VERCEL_PROJECT_ID: z.string(),
PORT: z.string().optional(),
NODE_ENV: z.string().optional(),
});

const envResult = envSchema.safeParse(process.env);
if (!envResult.success) {
console.error("❌ Invalid environment variables:", envResult.error.format());
process.exit(1);
}

type MyEnv = z.infer<typeof envSchema>;
const AppConfig: { processEnv: MyEnv } = { processEnv: envResult.data };

// -------- Express setup --------
const app = express();
const PORT = Number(AppConfig.processEnv.PORT ?? 3000);
const DIST_PATH = path.resolve(process.cwd(), "dist");

app.use(
helmet({
contentSecurityPolicy: AppConfig.processEnv.NODE_ENV === "production" ? undefined : false,
})
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (AppConfig.processEnv.NODE_ENV !== "production") app.use(morgan("dev"));

// -------- Logger --------
const logger = {
debug: (msg: string, obj?: unknown) =>
AppConfig.processEnv.NODE_ENV !== "production" ? console.debug(msg, obj ?? "") : undefined,
info: (msg: string, obj?: unknown) => console.info(msg, obj ?? ""),
error: (msg: string, obj?: unknown) => console.error(msg, obj ?? ""),
};

// -------- Async wrapper --------
const asyncHandler =
<T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
(req: Request, res: Response, next: NextFunction) =>
fn(req, res, next).catch(next);

// -------- REST routes --------
app.get("/api/health", (\_req, res) =>
res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);

app.get(
"/api/project",
asyncHandler(async (\_req, res) => res.json(AppConfig.processEnv))
);

app.post(
"/api/echo",
asyncHandler(async (req, res) => res.json({ received: req.body }))
);

// Chat REST endpoint
app.get("/api/messages", getMessages);

// -------- Serve SPA --------
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => res.sendFile(path.resolve(DIST_PATH, "index.html")));

// -------- WebSocket setup --------
const server = app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));

const wss = new WebSocketServer({ server });
initChat(wss);

// -------- Global error handler --------
app.use((err: unknown, \_req: Request, res: Response, \_next: NextFunction) => {
const error = err as { message?: string };
logger.error("❌ Error caught:", error.message ?? err);
res.status(500).json({
error: "Internal Server Error",
message: error.message ?? "Unknown error",
});
});

export { AppConfig };
export default app;

import { WebSocketServer, WebSocket } from "ws";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export interface ChatMessage {
id: string;
user: string; // 'user' | 'bot'
text: string;
createdAt: number;
}

const clients = new Set<WebSocket>();
const messages: ChatMessage[] = [];

export function initChat(wss: WebSocketServer) {
wss.on("connection", (ws) => {
clients.add(ws);

    // ส่ง history
    ws.send(JSON.stringify({ type: "history", payload: messages }));

    ws.on("message", (raw) => {
      try {
        const data = JSON.parse(raw.toString());
        const schema = z.object({ user: z.string().min(1), text: z.string().min(1) });
        const parsed = schema.parse(data);

        const msg: ChatMessage = {
          id: crypto.randomUUID(),
          user: parsed.user,
          text: parsed.text,
          createdAt: Date.now(),
        };
        messages.push(msg);
        broadcast({ type: "message", payload: [msg] });

        // Bot auto-reply
        if (parsed.user === "user") {
          setTimeout(() => {
            const botMsg: ChatMessage = {
              id: crypto.randomUUID(),
              user: "bot",
              text: generateBotReply(parsed.text),
              createdAt: Date.now(),
            };
            messages.push(botMsg);
            broadcast({ type: "message", payload: [botMsg] });
          }, 500);
        }
      } catch {
        ws.send(JSON.stringify({ type: "error", error: "Invalid message" }));
      }
    });

    ws.on("close", () => clients.delete(ws));

});
}

function broadcast(data: unknown) {
const payload = JSON.stringify(data);
clients.forEach((client) => {
if (client.readyState === WebSocket.OPEN) client.send(payload);
});
}

export function getMessages(\_req: Request, res: Response, \_next: NextFunction) {
res.json(messages);
}

function generateBotReply(text: string): string {
const lower = text.toLowerCase();
if (lower.includes("hi") || lower.includes("hello") || lower.includes("สวัสดี"))
return "สวัสดีครับ! 👋";
if (lower.includes("ชื่อ")) return "ผมคือ Bot 🤖 ยินดีที่ได้รู้จัก!";
if (lower.includes("ขอบคุณ")) return "ยินดีครับ 🙏";
return `คุณพิมพ์ว่า: "${text}" ใช่ไหมครับ?`;
}

─ api │   ├── Chat │   │   ├── index.ts │   │   ├── messages.ts │   │   ├── send.ts │   │   └── types.ts │   ├── Chat.ts │   ├── echo.ts │   └── project.ts
useChat.ts

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ
