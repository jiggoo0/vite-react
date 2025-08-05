"use client";

import { FC } from "react";

// ✅ Core Sections
import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import { ServicesSection } from "@home/components/Services";
import SectionContainer from "@common/SectionContainer";

// ✅ Feature Sections
import {
  PortfolioGallery,
  SupportFAQ,
} from "@home/components/Portfolio";

/**
 * 🏠 Home — Landing Page สำหรับระบบ JP Visual & Docs
 *
 * 🚩 Layout Summary:
 * - Hero
 * - About
 * - Services
 * - Portfolio Gallery
 * - FAQ (Support)
 *
 * 🌐 Features:
 * - Responsive
 * - Dark Mode
 * - Smooth Anchor Scroll
 * - Semantic HTML & Accessibility
 */
const Home: FC = () => {
  return (
    <main className="flex flex-col scroll-smooth">
      {/* 🚀 Hero */}
      <PageSection id="hero">
        <Hero />
      </PageSection>

      {/* 👤 About */}
      <PageSection id="about">
        <About />
      </PageSection>

      {/* 🛠️ Services */}
      <PageSection id="services" bg="bg-base-100">
        <ServicesSection />
      </PageSection>

      {/* 🎨 Portfolio */}
      <PageSection id="portfolio" bg="bg-base-100">
        <PortfolioGallery />
      </PageSection>

      {/* ❓ FAQ */}
      <PageSection id="faq">
        <SupportFAQ />
      </PageSection>
    </main>
  );
};

export default Home;

// ✅ Composable Section Wrapper (Clean & Consistent)
interface PageSectionProps {
  id: string;
  children: React.ReactNode;
  bg?: string; // tailwind class string
}

const PageSection: FC<PageSectionProps> = ({ id, children, bg }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 py-16 md:py-24 ${bg ?? ""}`}
    >
      <SectionContainer>{children}</SectionContainer>
    </section>
  );
};