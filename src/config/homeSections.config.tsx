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
const SupportFAQ = lazy(() => import("@/Home/components/Portfolio/SupportFAQ"));

// Mock data for TrustDashboard
const metrics: Metric[] = [];
const stats: Stat[] = [];
const badges: Badge[] = [];

// Section config
export interface HomeSection {
  id: string;
  content: ReactNode;
  enabled: boolean;
}

export const homeSections: HomeSection[] = [
  { id: "hero", enabled: true, content: <Hero /> },
  { id: "about", enabled: true, content: <About /> },
  { id: "selling-points", enabled: true, content: <SellingPoints /> },
  { id: "services", enabled: true, content: <ServicesSection /> },
  {
    id: "trust-dashboard",
    enabled: true,
    content: <TrustDashboard metrics={metrics} stats={stats} badges={badges} />,
  },
  {
    id: "case-studies",
    enabled: true,
    content: <CaseStudyRedacted items={caseStudies} />,
  },
  { id: "portfolio", enabled: true, content: <PortfolioGallery /> },
  {
    id: "user-board",
    enabled: true,
    content: <UserBoard data={UserBoardDataReadonly} />,
  },
  { id: "testimonials", enabled: true, content: <TestimonialSlider /> },
  { id: "faq", enabled: true, content: <SupportFAQ /> },
];
