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
 * - Responsive Design (Mobile, Tablet, Desktop)
 * - Dark Mode
 * - Smooth Anchor Scroll
 * - Semantic HTML & Accessibility
 */
const Home: FC = () => {
  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      {/* 🚀 Hero */}
      <PageSection id="hero" title="ฮีโร่เปิดหน้าเว็บไซต์" bg="bg-base-100">
        <Hero />
      </PageSection>

      {/* 👤 About */}
      <PageSection id="about" title="เกี่ยวกับเรา">
        <About />
      </PageSection>

      {/* 🛠️ Services */}
      <PageSection id="services" title="บริการของเรา" bg="bg-base-100">
        <ServicesSection />
      </PageSection>

      {/* 🎨 Portfolio */}
      <PageSection id="portfolio" title="ผลงานที่ผ่านมา" bg="bg-base-100">
        <PortfolioGallery />
      </PageSection>

      {/* ❓ FAQ */}
      <PageSection id="faq" title="คำถามที่พบบ่อย">
        <SupportFAQ />
      </PageSection>
    </main>
  );
};

export default Home;

// ✅ Composable Section Wrapper (Clean & Consistent)
interface PageSectionProps {
  id: string;
  title: string; // สำหรับ aria-labelledby text
  children: React.ReactNode;
  bg?: string; // tailwind class string
}

const PageSection: FC<PageSectionProps> = ({ id, title, children, bg }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      role="region"
      className={`scroll-mt-24 py-12 sm:py-16 md:py-24 ${bg ?? ""}`}
    >
      {/* ซ่อนหัวข้อสำหรับ screen reader */}
      <h2 id={`${id}-title`} className="sr-only">
        {title}
      </h2>

      <SectionContainer>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </SectionContainer>
    </section>
  );
};