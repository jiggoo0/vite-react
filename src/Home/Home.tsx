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
import TrustDashboardDemo from "./components/UserBoard/TrustDashboardDemo";

// Lazy-loaded
const PortfolioGallery = lazy(() => import("./components/Portfolio/PortfolioGallery"));
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));

const Home: FC = () => {
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

  const renderSuspense = (Component: ReactNode, message: string) => (
    <Suspense fallback={<div className="text-center py-16 animate-pulse">{message}</div>}>
      {Component}
    </Suspense>
  );

  // Config-driven sections
  const sections = [
    { id: "hero", title: "Hero Section", bg: "bg-base-100", content: <Hero /> },
    { id: "about", title: "About Us", bg: "bg-base-200", content: <About /> },
    { id: "selling-points", title: "Selling Points", bg: "bg-base-100", content: <SellingPoints /> },
    {
      id: "features-trust",
      title: "Features & Trust",
      bg: "bg-base-200",
      content: (
        <>
          <div className="md:flex md:space-x-12 space-y-12 md:space-y-0">
            <FeatureList className="md:flex-1" />
            <FeatureAwards className="md:flex-1" />
          </div>
          <div className="mt-12">
            <TrustDashboardDemo />
          </div>
        </>
      ),
    },
    { id: "services", title: "Services", bg: "bg-base-100", content: <ServicesSection /> },
    { id: "case-studies", title: "Case Studies", bg: "bg-base-100", content: <CaseStudyRedacted className="bg-base-100" items={caseStudies} /> },
    { id: "user-board", title: "User Board", bg: "bg-base-200", content: <UserBoard data={userBoardData} /> },
    { id: "testimonials", title: "Testimonials", bg: "bg-base-100", content: <TestimonialSlider /> },
    { id: "portfolio", title: "Portfolio Gallery", bg: "bg-base-100", content: renderSuspense(<PortfolioGallery />, "Loading portfolio...") },
    { id: "compliance-faq", title: "Compliance FAQ", bg: "bg-base-100", content: <ComplianceFAQ /> },
    { id: "faq", title: "FAQ", bg: "bg-base-200", content: renderSuspense(<SupportFAQ />, "Loading FAQ...") },
  ];

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      {sections.map((s) => (
        <PageSection key={s.id} id={s.id} title={s.title} bgClass={s.bg}>
          {s.content}
        </PageSection>
      ))}
    </main>
  );
};

Home.displayName = "Home";
export default Home;