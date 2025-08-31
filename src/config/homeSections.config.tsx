// home::/data/data/com.termux/files/home/projects/src/config/homeSections.config.tsx
"use client";

import { ReactNode, lazy } from "react";
import Hero from "@/Home/components/Hero/Hero";
import About from "@/Home/components/About/About";
import SellingPoints from "@/Home/components/SellingPoints/SellingPoints";
import ServicesSection from "@/Home/components/Services/ServicesSection";
import TestimonialSlider from "@/Home/components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "@/Home/components/Portfolio/CaseStudyRedacted";
import TrustDashboard, { Metric, Stat, Badge } from "@/Home/components/UserBoard/TrustDashboard";
import UserBoard, { UserBoardDataReadonly } from "@/Home/components/UserBoard/UserBoard";
import { caseStudies } from "@/data/caseStudies";

// Lazy-loaded components
const PortfolioGallery = lazy(() => import("@/Home/components/Portfolio/PortfolioGallery"));

// Mock data for TrustDashboard
const metrics: Metric[] = [];
const stats: Stat[] = [];
const badges: Badge[] = [];

export interface HomeSection {
  id: string;
  content: ReactNode;
  enabled: boolean;
}

export const homeSections: HomeSection[] = [
  { id: "hero", enabled: true, content: <div className="px-6 md:px-12 lg:px-24 py-16"><Hero /></div> },
  { id: "about", enabled: true, content: <div className="px-6 md:px-12 lg:px-24 py-16"><About /></div> },
  { id: "selling-points", enabled: true, content: <div className="px-6 md:px-12 lg:px-24 py-16"><SellingPoints /></div> },
  { id: "services", enabled: true, content: <div className="px-6 md:px-12 lg:px-24 py-16"><ServicesSection /></div> },
  {
    id: "trust-dashboard",
    enabled: true,
    content: (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <TrustDashboard metrics={metrics} stats={stats} badges={badges} />
      </div>
    ),
  },
  {
    id: "case-studies",
    enabled: true,
    content: (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <CaseStudyRedacted items={caseStudies} />
      </div>
    ),
  },
  {
    id: "portfolio",
    enabled: true,
    content: (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <PortfolioGallery />
      </div>
    ),
  },
  {
    id: "user-board",
    enabled: true,
    content: (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <UserBoard data={UserBoardDataReadonly} />
      </div>
    ),
  },
  {
    id: "testimonials",
    enabled: true,
    content: (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <TestimonialSlider />
      </div>
    ),
  },
];