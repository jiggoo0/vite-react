# Project Structure

_Generated at: 2025-08-19 14:18:20_

```
src
├── Home
│   ├── CustomerAssessmentForm.tsx
│   ├── Home.tsx
│   ├── IdCardForm.tsx
│   ├── Login.tsx
│   ├── SecretPage
│   │   ├── DriverLicense
│   │   │   ├── DriverLicenseForm.tsx
│   │   │   ├── DriverLicensePreview.tsx
│   │   │   ├── driverLicenseConfig.ts
│   │   │   ├── mockDriverLicenseData.ts
│   │   │   ├── types
│   │   │   │   └── driverLicense.ts
│   │   │   └── ui
│   │   │       ├── FieldDraggable.tsx
│   │   │       ├── PhotoField.tsx
│   │   │       └── TextField.tsx
│   │   ├── MedicalCertificate
│   │   │   ├── MedicalCertificate.tsx
│   │   │   ├── mockMedicalCertificate.ts
│   │   │   └── types
│   │   │       └── medicalCertificate.ts
│   │   ├── RegistrationPreview
│   │   │   ├── RegistrationPreview.tsx
│   │   │   └── mockRegistrationData.ts
│   │   ├── Reviews
│   │   │   ├── ReviewsGallery.tsx
│   │   │   └── ui
│   │   │       └── ReviewCard.tsx
│   │   ├── SalaryCertificate
│   │   │   ├── SalaryCertificate.tsx
│   │   │   └── mockSalaryCertificate.ts
│   │   ├── SpecialBranchCertificate
│   │   │   ├── SpecialBranchCertificate.mock.ts
│   │   │   └── SpecialBranchCertificate.tsx
│   │   └── common
│   │       ├── CardWrapper.tsx
│   │       └── LoadingSpinner.tsx
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
│   │   │   ├── SelectField.tsx
│   │   │   ├── SubmitButton.tsx
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       ├── FieldGroup.tsx
│   │   │       ├── InputField.tsx
│   │   │       ├── SelectField.tsx
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
│   │   │       ├── Button.tsx
│   │   │       ├── PortfolioCTA.tsx
│   │   │       └── PortfolioFilter.tsx
│   │   ├── SecretSection
│   │   │   ├── BlurContact
│   │   │   │   ├── BlurContact.tsx
│   │   │   │   └── motionVariants.ts
│   │   │   ├── DocumentDownload.tsx
│   │   │   ├── KbankIOSNotification.mock.ts
│   │   │   ├── KbankIOSNotification.tsx
│   │   │   ├── KbankNotificationCard.tsx
│   │   │   ├── SecretActions.tsx
│   │   │   ├── SecretDescription.tsx
│   │   │   └── SecretHeader.tsx
│   │   ├── SellingPoints
│   │   │   ├── SellingPoints.tsx
│   │   │   └── SpeedGuaranteeBanner.tsx
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
│   │   │   ├── TrustBadges.tsx
│   │   │   ├── TrustMetricsBar.tsx
│   │   │   └── UserBoard.tsx
│   │   ├── common
│   │   │   ├── LazyA4Card.tsx
│   │   │   ├── LogoutButton.tsx
│   │   │   ├── PageSection.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── WithBlurIfUser.tsx
│   │   └── ui
│   │       └── Button.tsx
│   └── hooks
│       └── useInView.ts
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
│   ├── GuardRoutes.tsx
│   └── RoleGuard.tsx
├── ThemeProvider
│   ├── ThemeContext.ts
│   ├── ThemeProvider.tsx
│   ├── types.ts
│   └── useTheme.ts
├── animations
│   └── motionVariants.ts
├── api
│   └── chat.ts
├── assets
│   ├── images
│   │   └── hero-bg.webp
│   ├── logo.webp
│   ├── portfolio
│   └── react.svg
├── config
├── context
│   ├── AppProviders.tsx
│   └── types.ts
├── data
│   ├── UserBoard.ts
│   ├── UserTempCodes.ts
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
│   ├── global.css
│   ├── idCard.css
│   ├── print.css
│   └── theme.css
├── types
│   ├── IUser.ts
│   └── custom.d.ts
└── utils
    ├── cn.ts
    ├── common
    │   ├── 403.tsx
    │   ├── BackToTop.tsx
    │   ├── ChatWidget.tsx
    │   ├── DisclaimerModal.tsx
    │   ├── ErrorBoundary.tsx
    │   ├── FallbackLoader.tsx
    │   ├── FallbackLoading.tsx
    │   ├── MobileMenu.tsx
    │   ├── ScrollProgress.tsx
    │   ├── ScrollToTop.tsx
    │   ├── SectionContainer.tsx
    │   ├── SectionWrapper.tsx
    │   └── SocialIcons.tsx
    ├── exportCard.ts
    └── index.ts

```
