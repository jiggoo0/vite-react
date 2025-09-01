# Home Project Structure

_Generated at: Mon Sep 1 18:18:14 +07 2025_\n

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
