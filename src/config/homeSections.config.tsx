// src/config/homeSections.config.tsx
"use client";

import { ReactNode, ComponentType, lazy } from "react";
import Hero from "@/Home/components/Hero/Hero";
import About from "@/Home/components/About/About";
import SellingPoints from "@/Home/components/SellingPoints/SellingPoints";
import SpeedGuaranteeBanner from "@/Home/components/SellingPoints/SpeedGuaranteeBanner";
import ServicesSection from "@/Home/components/Services/ServicesSection";
import TestimonialSlider from "@/Home/components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "@/Home/components/Portfolio/CaseStudyRedacted";
import UserBoard, { UserBoardDataReadonly } from "@/Home/components/UserBoard/UserBoard";
import { caseStudies } from "@/data/caseStudies";

// Lazy-load heavy sections
const PortfolioGallery = lazy(() => import("@/Home/components/Portfolio/PortfolioGallery"));

// Wrapper for consistent padding across sections
export const SectionWrapper: ComponentType<{ children: ReactNode }> = ({ children }) => (
  <div className="px-6 md:px-12 lg:px-24 py-16">{children}</div>
);

export interface HomeSection {
  id: string;
  enabled: boolean;
  content: ComponentType;
}

// Ordered sections for the Home page
export const homeSections: HomeSection[] = [
  {
    id: "hero",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
    ),
  },
  {
    id: "about",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <About />
      </SectionWrapper>
    ),
  },
  {
    id: "selling-points",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <SellingPoints />
        <SpeedGuaranteeBanner />
      </SectionWrapper>
    ),
  },
  {
    id: "services",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>
    ),
  },
  {
    id: "portfolio",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <PortfolioGallery />
      </SectionWrapper>
    ),
  },
  {
    id: "case-studies",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <CaseStudyRedacted items={caseStudies} />
      </SectionWrapper>
    ),
  },
  {
    id: "testimonials",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <TestimonialSlider />
      </SectionWrapper>
    ),
  },
  {
    id: "user-board",
    enabled: true,
    content: () => (
      <SectionWrapper>
        <UserBoard data={UserBoardDataReadonly} />
      </SectionWrapper>
    ),
  },
];
