# Home Project Structure
_Generated at: Mon Sep  1 07:25:01 +07 2025_\n
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
  AdminTools.tsx
```

## Mermaid Diagram
```mermaid
graph TD
  subgraph hooks
    Home --> hooks
    Home --> hooks
  end
  subgraph AdminTools
    Home --> AdminTools
    Home --> AdminTools
    MedicalCertificate --> types
    DriverLicense --> types
    DriverLicense --> ui
    SalaryCertificate --> types
    Reviews --> ui
  end
  subgraph components
    Home --> components
    Home --> components
    About --> ui
    Dashboard --> ui
    Dashboard --> common
    common --> BlurContact
    common --> DocumentDownload
    Portfolio --> ui
    Forms --> ui
    Hero --> ui
    ui --> Icon
    ui --> Card
    ui --> Button
    Services --> ui
  end
  subgraph types
    Home --> types
    Home --> types
  end
```
