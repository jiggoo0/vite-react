"use client";

import { FC, Suspense, lazy, ReactNode } from "react";
import PageSection from "./components/common/PageSection";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SellingPoints from "./components/SellingPoints/SellingPoints";
import ServicesSection from "./components/Services/ServicesSection";
import UserBoard, { IUser } from "./components/UserBoard/UserBoard";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "./components/Portfolio/CaseStudyRedacted";

import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";

// Lazy-loaded components
const PortfolioGallery = lazy(() => import("./components/Portfolio/PortfolioGallery"));
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));

const Home: FC = () => {
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

  const renderSuspense = (component: ReactNode, fallbackMessage: string) => (
    <Suspense
      fallback={
        <div className="text-center py-16 animate-pulse">{fallbackMessage}</div>
      }
    >
      {component}
    </Suspense>
  );

  const sections = [
    { id: "hero", title: "Hero Section", className: "bg-base-100", content: <Hero /> },
    { id: "about", title: "About Us", className: "bg-base-200", content: <About /> },
    { id: "selling-points", title: "Selling Points", className: "bg-base-100", content: <SellingPoints /> },
    { id: "services", title: "Services", className: "bg-base-100", content: <ServicesSection /> },
    {
      id: "case-studies",
      title: "Case Studies",
      className: "bg-base-100",
      content: <CaseStudyRedacted className="bg-base-100" items={caseStudies} />,
    },
    { id: "user-board", title: "User Board", className: "bg-base-200", content: <UserBoard data={userBoardData} /> },
    { id: "testimonials", title: "Testimonials", className: "bg-base-100", content: <TestimonialSlider /> },
    { id: "portfolio", title: "Portfolio Gallery", className: "bg-base-100", content: renderSuspense(<PortfolioGallery />, "Loading portfolio...") },
    { id: "faq", title: "FAQ", className: "bg-base-200", content: renderSuspense(<SupportFAQ />, "Loading FAQ...") },
  ];

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      {sections.map(({ id, title, className, content }) => (
        <PageSection key={id} id={id} title={title} className={className}>
          {content}
        </PageSection>
      ))}
    </main>
  );
};

Home.displayName = "Home";

export default Home;