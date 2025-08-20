"use client";

import { FC, Suspense, lazy, ReactNode } from "react";
import PageSection from "./components/common/PageSection";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SellingPoints from "./components/SellingPoints/SellingPoints";
import { ServicesSection } from "./components/Services";
import FeatureList from "./components/Services/FeatureList";
import FeatureAwards from "./components/Services/FeatureAwards";
import UserBoard, { IUser } from "./components/UserBoard/UserBoard";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "./components/Portfolio/CaseStudyRedacted";
import ComplianceFAQ from "./components/Services/ComplianceFAQ";

import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";

import TrustDashboard from "./components/UserBoard/TrustDashboard";
import { ShieldCheckIcon, CheckBadgeIcon, SparklesIcon } from "@heroicons/react/24/solid";

// Lazy-loaded components
const PortfolioGallery = lazy(() => import("./components/Portfolio/PortfolioGallery"));
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));

const Home: FC = () => {
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

  // Wrapper สำหรับ Suspense
  const renderSuspense = (Component: ReactNode, message: string) => (
    <Suspense fallback={<div className="text-center py-16 animate-pulse">{message}</div>}>
      {Component}
    </Suspense>
  );

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">

      {/* ================= Hero Section ================= */}
      <PageSection id="hero" title="Hero Section" bgClass="bg-base-100">
        <Hero />
      </PageSection>

      {/* ================= About & Selling Points ================= */}
      <PageSection id="about" title="About Us" bgClass="bg-base-200">
        <About />
      </PageSection>

      <PageSection id="selling-points" title="Selling Points" bgClass="bg-base-100">
        <SellingPoints />
      </PageSection>

      {/* ================= Features & Trust Dashboard ================= */}
      <PageSection id="features-trust" title="Features & Trust" bgClass="bg-base-200">
        <div className="md:flex md:space-x-12 space-y-12 md:space-y-0">
          <FeatureList className="md:flex-1" />
          <FeatureAwards className="md:flex-1" />
        </div>

        <div className="mt-12">
          <TrustDashboard
            metrics={[
              { key: "exp", label: "ประสบการณ์ทีม", value: "10 ปี" },
              { key: "satisfaction", label: "ความพึงพอใจ", value: "99%" },
              { key: "sla", label: "ส่งทันเวลา", value: "100%" },
              { key: "privacy", label: "ความลับ", value: "กฎข้อแรก" },
            ]}
            stats={[
              { key: "customers", label: "ลูกค้ามั่นใจในเรา", count: 1200 },
              { key: "projects", label: "โปรเจกต์สำเร็จ", count: 350 },
              { key: "partners", label: "พันธมิตร", count: 25 },
            ]}
            badges={[
              { id: 1, icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />, title: "Security", description: "ข้อมูลปลอดภัยและเชื่อถือได้" },
              { id: 2, icon: <CheckBadgeIcon className="h-10 w-10 text-blue-500" />, title: "Certified Service", description: "ได้รับการรับรองมาตรฐานคุณภาพ" },
              { id: 3, icon: <SparklesIcon className="h-10 w-10 text-yellow-400" />, title: "Premium Experience", description: "ประสบการณ์ใช้งานราบรื่นและมั่นใจ" },
            ]}
          />
        </div>
      </PageSection>

      {/* ================= Services Section ================= */}
      <PageSection id="services" title="Services" bgClass="bg-base-100">
        <ServicesSection />
      </PageSection>

      {/* ================= Case Studies ================= */}
      <PageSection id="case-studies" title="Case Studies" bgClass="bg-base-100">
        <CaseStudyRedacted className="bg-base-100" items={caseStudies} />
      </PageSection>

      {/* ================= User Board ================= */}
      <PageSection id="user-board" title="User Board" bgClass="bg-base-200">
        <UserBoard data={userBoardData} />
      </PageSection>

      {/* ================= Testimonials ================= */}
      <PageSection id="testimonials" title="Testimonials" bgClass="bg-base-100">
        <TestimonialSlider />
      </PageSection>

      {/* ================= Portfolio & FAQ ================= */}
      <PageSection id="portfolio" title="Portfolio Gallery" bgClass="bg-base-100">
        {renderSuspense(<PortfolioGallery />, "Loading portfolio...")}
      </PageSection>

      <PageSection id="compliance-faq" title="Compliance FAQ" bgClass="bg-base-100">
        <ComplianceFAQ />
      </PageSection>

      <PageSection id="faq" title="FAQ" bgClass="bg-base-200">
        {renderSuspense(<SupportFAQ />, "Loading FAQ...")}
      </PageSection>

    </main>
  );
};

export default Home;