"use client";

import { ReactNode, lazy, Suspense } from "react";

// Components
import Hero from "@/Home/components/Hero/Hero";
import About from "@/Home/components/About/About";
import SellingPoints from "@/Home/components/SellingPoints/SellingPoints";
import ServicesSection from "@/Home/components/Services/ServicesSection";
import UserBoard from "@/Home/components/UserBoard/UserBoard";
import TestimonialSlider from "@/Home/components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "@/Home/components/Portfolio/CaseStudyRedacted";

// Data
import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";

// Common
import LoadingSpinner from "@/Home/components/common/LoadingSpinner";

// Lazy-loaded components
const PortfolioGallery = lazy(
  () => import("@/Home/components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("@/Home/components/Portfolio/SupportFAQ"));

// Clone readonly data
const userBoardData = [...UserBoardDataReadonly];

// Section type
export interface HomeSection {
  id: string;
  content: ReactNode;
  enabled: boolean;
}

// Config
export const homeSections: HomeSection[] = [
  { id: "hero", enabled: true, content: <Hero /> },
  { id: "about", enabled: true, content: <About /> },
  { id: "selling-points", enabled: true, content: <SellingPoints /> },
  { id: "services", enabled: true, content: <ServicesSection /> },
  {
    id: "case-studies",
    enabled: true,
    content: <CaseStudyRedacted items={caseStudies} />,
  },
  {
    id: "portfolio",
    enabled: true,
    content: (
      <Suspense fallback={<LoadingSpinner />}>
        <PortfolioGallery />
      </Suspense>
    ),
  },
  {
    id: "user-board",
    enabled: true,
    content: <UserBoard data={userBoardData} />,
  },
  { id: "testimonials", enabled: true, content: <TestimonialSlider /> },
  {
    id: "faq",
    enabled: true,
    content: (
      <Suspense fallback={<LoadingSpinner />}>
        <SupportFAQ />
      </Suspense>
    ),
  },
];
