"use client";

import { FC, Suspense, lazy, ReactElement } from "react";
import PageSection from "./components/common/PageSection";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SellingPoints from "./components/SellingPoints/SellingPoints";
import { ServicesSection } from "./components/Services";
import FeatureList from "./components/Services/FeatureList";
import FeatureAwards from "./components/Services/FeatureAwards";
import UserBoard, { IUser } from "./components/UserBoard/UserBoard";
import TrustBadges from "./components/UserBoard/TrustBadges";
import TrustMetricsBar from "./components/UserBoard/TrustMetricsBar";
import SpeedGuaranteeBanner from "./components/SellingPoints/SpeedGuaranteeBanner";
import CaseStudyRedacted from "./components/Portfolio/CaseStudyRedacted";
import ComplianceFAQ from "./components/Services/ComplianceFAQ";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";

import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";

// Lazy-loaded components (ไม่ครอบด้วย Suspense)
const PortfolioGallery = lazy(
  () => import("./components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));

const Home: FC = () => {
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

  const renderSuspense = (Component: ReactElement, message: string) => (
    <Suspense
      fallback={
        <div className="text-center py-16 animate-pulse">{message}</div>
      }
    >
      {Component}
    </Suspense>
  );

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      <PageSection id="hero" title="Hero Section" bgClass="bg-base-100">
        <Hero />
      </PageSection>

      <TrustMetricsBar className="bg-base-100" />

      <PageSection id="about" title="About Us" bgClass="bg-base-200">
        <About />
      </PageSection>

      <PageSection
        id="selling-points"
        title="Selling Points"
        bgClass="bg-base-100"
      >
        <SellingPoints />
      </PageSection>

      <SpeedGuaranteeBanner className="bg-base-100" />

      <PageSection
        id="features-trust"
        title="Features & Trust"
        bgClass="bg-base-200"
      >
        <div className="md:flex md:space-x-12 space-y-12 md:space-y-0">
          <FeatureList className="md:flex-1" />
          <FeatureAwards className="md:flex-1" />
        </div>
        <div className="mt-12">
          <TrustBadges />
        </div>
      </PageSection>

      <PageSection id="services" title="Services" bgClass="bg-base-100">
        <ServicesSection />
      </PageSection>

      <PageSection id="case-studies" title="Case Studies" bgClass="bg-base-100">
        <CaseStudyRedacted className="bg-base-100" items={caseStudies} />
      </PageSection>

      <PageSection id="user-board" title="User Board" bgClass="bg-base-200">
        <UserBoard data={userBoardData} />
      </PageSection>

      <PageSection id="testimonials" title="Testimonials" bgClass="bg-base-100">
        <TestimonialSlider />
      </PageSection>

      {/* Lazy-loaded Portfolio Gallery */}
      <PageSection
        id="portfolio"
        title="Portfolio Gallery"
        bgClass="bg-base-100"
      >
        {renderSuspense(<PortfolioGallery />, "Loading portfolio...")}
      </PageSection>

      <PageSection
        id="compliance-faq"
        title="Compliance FAQ"
        bgClass="bg-base-100"
      >
        <ComplianceFAQ />
      </PageSection>

      {/* Lazy-loaded Support FAQ */}
      <PageSection id="faq" title="FAQ" bgClass="bg-base-200">
        {renderSuspense(<SupportFAQ />, "Loading FAQ...")}
      </PageSection>
    </main>
  );
};

export default Home;
