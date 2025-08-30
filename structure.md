# Project Structure

_Generated at: 2025-08-28 09:52:34_

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
│   │   │       ├── FieldEditor.tsx
│   │   │       ├── PhotoField.tsx
│   │   │       └── TextField.tsx
│   │   ├── IdCardPreview
│   │   │   ├── IdCardPreview.tsx
│   │   │   └── IdCardSection.tsx
│   │   ├── KbankNotification
│   │   │   ├── KbankIOSNotification.tsx
│   │   │   ├── KbankNotificationCard.tsx
│   │   │   └── KbankPreview.tsx
│   │   ├── MedicalCertificate
│   │   │   ├── MedicalCertificate.tsx
│   │   │   └── types
│   │   │       └── medicalCertificate.ts
│   │   ├── RegistrationPreview
│   │   │   ├── RegistrationForm.tsx
│   │   │   ├── RegistrationPreview.tsx
│   │   │   ├── RegistrationPreviewWithMock.tsx
│   │   │   ├── fonts
│   │   │   │   ├── Kanit-Black.ttf
│   │   │   │   ├── Kanit-BlackItalic.ttf
│   │   │   │   ├── Kanit-Bold.ttf
│   │   │   │   ├── Kanit-BoldItalic.ttf
│   │   │   │   ├── Kanit-ExtraBold.ttf
│   │   │   │   ├── Kanit-ExtraBoldItalic.ttf
│   │   │   │   ├── Kanit-ExtraLight.ttf
│   │   │   │   ├── Kanit-ExtraLightItalic.ttf
│   │   │   │   ├── Kanit-Italic.ttf
│   │   │   │   ├── Kanit-Light.ttf
│   │   │   │   ├── Kanit-LightItalic.ttf
│   │   │   │   ├── Kanit-Medium.ttf
│   │   │   │   ├── Kanit-MediumItalic.ttf
│   │   │   │   ├── Kanit-Regular.ttf
│   │   │   │   ├── Kanit-SemiBold.ttf
│   │   │   │   ├── Kanit-SemiBoldItalic.ttf
│   │   │   │   ├── Kanit-Thin.ttf
│   │   │   │   ├── Kanit-ThinItalic.ttf
│   │   │   │   ├── THSarabunNew-Bold.woff
│   │   │   │   ├── THSarabunNew-Bold.woff2
│   │   │   │   ├── THSarabunNew-BoldItalic.woff
│   │   │   │   ├── THSarabunNew-BoldItalic.woff2
│   │   │   │   ├── THSarabunNew-Italic.woff
│   │   │   │   ├── THSarabunNew-Italic.woff2
│   │   │   │   ├── THSarabunNew.woff
│   │   │   │   ├── THSarabunNew.woff2
│   │   │   │   └── fonts.css
│   │   │   └── index.ts
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
│   │   ├── Dashboard
│   │   │   └── DynamicRiskDashboard.tsx
│   │   ├── Forms
│   │   │   ├── FormWrapper.tsx
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
│   │   │   ├── AuditTrailViewer.tsx
│   │   │   ├── BlurContact
│   │   │   │   ├── BlurContact.tsx
│   │   │   │   └── motionVariants.ts
│   │   │   ├── DocumentExportActions.tsx
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
│   │   ├── UserTimeline
│   │   │   └── UserBehaviorTimeline.tsx
│   │   ├── common
│   │   │   ├── CardWrapper.tsx
│   │   │   ├── LazyA4Card.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── LogoutButton.tsx
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
│   │       └── Tooltip
│   │           └── Tooltip.tsx
│   ├── hooks
│   │   └── useInView.ts
│   └── types
│       ├── auditTrail.ts
│       ├── dynamicRisk.ts
│       ├── html2pdf.d.ts
│       ├── idCard.ts
│       ├── risk.ts
│       └── userBehavior.ts
├── Layout
│   ├── Layout.tsx
│   ├── Navbar.tsx
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
│   ├── AppRouter.tsx
│   └── AuthGuard.tsx
├── ThemeProvider
│   ├── ThemeContext.ts
│   ├── ThemeProvider.tsx
│   ├── colors.ts
│   ├── types.ts
│   └── useTheme.ts
├── __mocks__
│   ├── KbankIOSNotification.mock.ts
│   ├── kbankIOSNotification.ts
│   ├── mockAuditTrailData.ts
│   ├── mockDriverLicenseData.ts
│   ├── mockIdCardData.ts
│   ├── mockMedicalCertificate.ts
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
│   ├── idCardConfig.tsx
│   └── secretCards.config.d.ts
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
├── env.d.ts
├── hooks
│   └── AuthContext.tsx
├── index.css
├── main.tsx
├── services
│   └── driverLicenseOcr.ts
├── styles
│   ├── driverLicense.css
│   └── global.css
├── types
│   └── IUser.ts
├── utils
│   ├── authHelpers.ts
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

```
