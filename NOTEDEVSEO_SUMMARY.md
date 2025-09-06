# 📊 Project Summary Report

Date: 2025-09-06 14:06:36  
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
│   ├── Chat.ts
│   ├── echo.ts
│   └── project.ts
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

65 directories, 192 files
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
code ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcons from "./SocialIcons";

interface ChatWidgetProps {
autoCloseMs?: number; // เวลาปิดอัตโนมัติ (มิลลิวินาที)
}

/\*\*

- 📬 ChatWidget
-
- - Floating button สำหรับติดต่อผ่านโซเชียล
- - เปิด/ปิดด้วย click หรือ Escape key
- - Auto-close หลัง 15 วินาที (ปรับได้)
- - Smooth animation, responsive, dark mode ready
    \*/
    const ChatWidget = ({ autoCloseMs = 15000 }: ChatWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const autoCloseTimer = useRef<number | null>(null);
    const widgetRef = useRef<HTMLDivElement>(null);

const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

// ปิด widget อัตโนมัติหลังเวลา autoCloseMs
useEffect(() => {
if (isOpen) {
autoCloseTimer.current = window.setTimeout(() => setIsOpen(false), autoCloseMs);
}
return () => {
if (autoCloseTimer.current) {
clearTimeout(autoCloseTimer.current);
autoCloseTimer.current = null;
}
};
}, [isOpen, autoCloseMs]);

// ปิดด้วย Escape key
useEffect(() => {
const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === "Escape") setIsOpen(false);
};
window.addEventListener("keydown", handleKeyDown);
return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

// Focus widget เมื่อเปิด
useEffect(() => {
if (isOpen && widgetRef.current) {
widgetRef.current.focus();
}
}, [isOpen]);

return (

<div className="fixed bottom-5 right-5 z-[9999]">
<AnimatePresence>
{isOpen && (
<motion.div
ref={widgetRef}
tabIndex={-1}
role="dialog"
aria-modal="true"
aria-label="ช่องทางติดต่อ"
initial={{ opacity: 0, y: 50, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 50, scale: 0.95 }}
transition={{ duration: 0.25 }}
className="w-80 max-w-[90vw] rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl p-5 text-center space-y-4 focus:outline-none" >
<p className="text-base font-semibold text-gray-800 dark:text-gray-200">
ติดต่อเราผ่านช่องทางโซเชียล
</p>

            <SocialIcons />

            <button
              onClick={toggleChat}
              type="button"
              className="w-full rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              ปิด
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          type="button"
          aria-label="เปิดช่องทางติดต่อ"
          aria-expanded={isOpen}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white dark:bg-primary-dark shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>

);
};

export default ChatWidget;

home::/data/data/com.termux/files/home/project/server.ts// server.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { z } from "zod";
import dotenv from "dotenv";

// types only
import type { Request, Response, NextFunction } from "express";

// ============================
// Load Env
// ============================
dotenv.config();

// ============================
// Logger
// ============================
const logger = {
debug: (msg: string, obj?: unknown) =>
process.env.NODE_ENV !== "production" ? console.debug(msg, obj || "") : undefined,
info: (msg: string, obj?: unknown) => console.info(msg, obj || ""),
error: (msg: string, obj?: unknown) => console.error(msg, obj || ""),
};

// ============================
// Custom Error Type
// ============================
interface AppError extends Error {
status?: number;
code?: string;
details?: unknown;
}

// ============================
// Environment Validation & Custom Env Object
// ============================
const envSchema = z.object({
PROJECT_NAME: z.string(),
VERSION: z.string(),
DESCRIPTION: z.string().optional(),
GITHUB_URL: z.string().url(),
DEVELOPER_EMAIL: z.string().email(),
WEBSITE_URL: z.string().url(),
VERCEL_PROJECT_ID: z.string(),
});

const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
console.error("❌ Invalid environment variables:", envResult.error.format());
process.exit(1);
}

// Type-safe env object
interface MyEnv {
PROJECT_NAME: string;
VERSION: string;
DESCRIPTION?: string;
GITHUB_URL: string;
DEVELOPER_EMAIL: string;
WEBSITE_URL: string;
VERCEL_PROJECT_ID: string;
}

const AppConfig: { processEnv: MyEnv } = {
processEnv: {
PROJECT_NAME: envResult.data.PROJECT_NAME,
VERSION: envResult.data.VERSION,
DESCRIPTION: envResult.data.DESCRIPTION,
GITHUB_URL: envResult.data.GITHUB_URL,
DEVELOPER_EMAIL: envResult.data.DEVELOPER_EMAIL,
WEBSITE_URL: envResult.data.WEBSITE_URL,
VERCEL_PROJECT_ID: envResult.data.VERCEL_PROJECT_ID,
},
};

// ============================
// Express App Setup
// ============================
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DIST_PATH = path.resolve(process.cwd(), "dist");

// ============================
// Middlewares
// ============================
app.use(
helmet({
contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
})
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", (\_req, res, next) => {
res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
next();
});
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// ============================
// Async Handler Wrapper
// ============================
const asyncHandler =
<T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
(req: Request, res: Response, next: NextFunction) =>
fn(req, res, next).catch(next);

// ============================
// API Handlers
// ============================
const getProjectInfo = async (req: Request, res: Response) => {
res.json({
name: AppConfig.processEnv.PROJECT_NAME,
version: AppConfig.processEnv.VERSION,
description: AppConfig.processEnv.DESCRIPTION || "N/A",
github: AppConfig.processEnv.GITHUB_URL,
website: AppConfig.processEnv.WEBSITE_URL,
developer: AppConfig.processEnv.DEVELOPER_EMAIL,
vercelProjectId: AppConfig.processEnv.VERCEL_PROJECT_ID,
});
};

const echoBody = async (req: Request, res: Response) => {
logger.debug("Received body:", req.body);
res.json({ received: req.body });
};

// ============================
// API Routes
// ============================
app.get("/api/health", (\_req, res) =>
res.status(200).json({ status: "ok", project: AppConfig.processEnv.PROJECT_NAME })
);
app.get("/api/project", asyncHandler(getProjectInfo));
app.post("/api/echo", asyncHandler(echoBody));

// ============================
// Serve SPA
// ============================
app.use(express.static(DIST_PATH));
app.get(/^\/(?!api).\*/, (\_req, res) => {
res.sendFile(path.resolve(DIST_PATH, "index.html"));
});

// ============================
// 404 Handler
// ============================
app.use((req, res, next) => {
if (req.path.startsWith("/api")) {
return res.status(404).json({ error: "API route not found" });
}
next();
});

// ============================
// Global Error Handler
// ============================
app.use((err: unknown, \_req: Request, res: Response, \_next: NextFunction) => {
const error = err as AppError;
logger.error("❌ Error caught:", {
message: error.message,
stack: error.stack,
code: error.code,
details: error.details,
});
res.status(error.status ?? 500).json({
error: "Internal Server Error",
message: error.message,
code: error.code,
details: error.details,
});
});

// ============================
// Start Server (Local only, skip on Vercel)
// ============================
if (process.env.NODE_ENV !== "vercel") {
app.listen(PORT, () => logger.info(`🚀 Server running at http://localhost:${PORT}`));
}

// ✅ Export both AppConfig and app
export { AppConfig };
export default app;

ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้
⚠️ กำชับย้ำคำสั่ง ว่าโค้ดทุกตัวคือโค้ดเว็ปไซต์ที่ใช้งานอยู่ปัจจุบัน สิ่งที่ต้องทำ Format Code ให้ตรง Logic หรือแนวทางที่ให้ไป ส่วนถ้าเป็น การตั้งค่า Config & Data ตั้งค่าให้แม่นโดยอ้างอิงข้อมูลปัจจุบัน ทางเทคนิ ตัวแปรและสูตรคำนวน ⚠️
สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ
