"use client";

import React, { FC, Suspense, lazy } from "react";
import PageSection from "./components/common/PageSection";

// Components
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

// Lazy-loaded components
const PortfolioGallery = lazy(
  () => import("./components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));

const Home: FC = () => {
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

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
        <CaseStudyRedacted
          className="bg-base-100"
          items={[
            {
              id: "cs-1",
              title: "รีแบรนด์เอกสารองค์กร",
              summary: "จัดชุดเอกสารภาพลักษณ์ใหม่",
              imageSrc: "/assets/portfolio/portfolio1.webp",
              tags: ["Branding", "Docs"],
              redactedFields: ["client", "brand"],
            },
            {
              id: "cs-2",
              title: "จัดทำสื่อเร่งด่วน 24 ชม.",
              summary: "ออกแบบชุดสื่อพร้อมส่ง",
              imageSrc: "/assets/portfolio/portfolio2.webp",
              tags: ["Rush", "Design"],
              redactedFields: ["client"],
            },
            {
              id: "cs-3",
              title: "ชุดไฟล์ยื่นงานเฉพาะทาง",
              summary: "จัดสเปกไฟล์ให้ผ่านข้อกำหนด",
              imageSrc: "/assets/portfolio/portfolio3.webp",
              tags: ["Compliance", "Delivery"],
              redactedFields: ["brand"],
            },
          ]}
        />
      </PageSection>

      <PageSection id="user-board" title="User Board" bgClass="bg-base-200">
        <UserBoard data={userBoardData} />
      </PageSection>

      <PageSection id="testimonials" title="Testimonials" bgClass="bg-base-100">
        <TestimonialSlider />
      </PageSection>

      <PageSection
        id="portfolio"
        title="Portfolio Gallery"
        bgClass="bg-base-100"
      >
        <Suspense
          fallback={
            <div className="text-center py-16 animate-pulse">
              Loading portfolio...
            </div>
          }
        >
          <PortfolioGallery />
        </Suspense>
      </PageSection>

      <PageSection
        id="compliance-faq"
        title="Compliance FAQ"
        bgClass="bg-base-100"
      >
        <ComplianceFAQ />
      </PageSection>

      <PageSection id="faq" title="FAQ" bgClass="bg-base-200">
        <Suspense
          fallback={
            <div className="text-center py-16 animate-pulse">
              Loading FAQ...
            </div>
          }
        >
          <SupportFAQ />
        </Suspense>
      </PageSection>
    </main>
  );
};

export default Home;
