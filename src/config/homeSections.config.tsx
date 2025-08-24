"use client";

import { ReactElement, lazy, Suspense } from "react";
import Hero from "@/Home/components/Hero/Hero";
import About from "@/Home/components/About/About";
import SellingPoints from "@/Home/components/SellingPoints/SellingPoints";
import ServicesSection from "@/Home/components/Services/ServicesSection";
import UserBoard from "@/Home/components/UserBoard/UserBoard";
import TestimonialSlider from "@/Home/components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "@/Home/components/Portfolio/CaseStudyRedacted";
import LoadingSpinner from "@/Home/components/common/LoadingSpinner";
import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";

const PortfolioGallery = lazy(
  () => import("@/Home/components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("@/Home/components/Portfolio/SupportFAQ"));

// แปลง readonly เป็น mutable ด้วย unknown
const userBoardData = structuredClone(
  UserBoardDataReadonly
) as unknown as Array<(typeof UserBoardDataReadonly)[number]>;

export interface HomeSection {
  id: string;
  content: ReactElement;
  enabled: boolean;
  title?: string;
}

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
      <Suspense
        fallback={
          <div className="w-full flex justify-center py-10">
            <LoadingSpinner />
          </div>
        }
      >
        <PortfolioGallery />
      </Suspense>
    ),
  },
  {
    id: "user-board",
    enabled: true,
    content: <UserBoard data={userBoardData} />,
    title: "User Board",
  },
  { id: "testimonials", enabled: true, content: <TestimonialSlider /> },
  {
    id: "faq",
    enabled: true,
    content: (
      <Suspense
        fallback={
          <div className="w-full flex justify-center py-10">
            <LoadingSpinner />
          </div>
        }
      >
        <SupportFAQ />
      </Suspense>
    ),
  },
];
