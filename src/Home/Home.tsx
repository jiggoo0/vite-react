"use client";

import { FC, ReactNode, Suspense, lazy } from "react";
import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import { ServicesSection } from "@home/components/Services";
import SectionContainer from "@common/SectionContainer";

// Lazy load components ที่ไม่จำเป็นตอนแรก
const PortfolioGallery = lazy(() => import("@home/components/Portfolio/PortfolioGallery"));
const SupportFAQ = lazy(() => import("@home/components/Portfolio/SupportFAQ"));

interface PageSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: string;
}

/**
 * PageSection - Section wrapper ที่ตั้ง id, title และจัด layout พื้นฐาน
 * ใช้ aria-labelledby เพื่อช่วยเรื่อง accessibility
 */
const PageSection: FC<PageSectionProps> = ({ id, title, children, bg }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    role="region"
    className={`scroll-mt-24 py-12 sm:py-16 md:py-24 ${bg ?? ""}`}
  >
    {/* ซ่อน heading แต่ใช้สำหรับ screen reader */}
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

const Home: FC = () => {
  return (
    <main
      className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen"
      aria-label="หน้าแรก JP Visual & Docs"
    >
      <PageSection id="hero" title="ฮีโร่เปิดหน้าเว็บไซต์" bg="bg-base-100">
        <Hero />
      </PageSection>

      <PageSection id="about" title="เกี่ยวกับเรา">
        <About />
      </PageSection>

      <PageSection id="services" title="บริการของเรา" bg="bg-base-100">
        <ServicesSection />
      </PageSection>

      <Suspense fallback={<div className="text-center py-12">กำลังโหลด...</div>}>
        <PageSection id="portfolio" title="ผลงานที่ผ่านมา" bg="bg-base-100">
          <PortfolioGallery />
        </PageSection>

        <PageSection id="faq" title="คำถามที่พบบ่อย">
          <SupportFAQ />
        </PageSection>
      </Suspense>
    </main>
  );
};

export default Home;