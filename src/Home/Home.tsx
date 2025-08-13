"use client";

import { FC, ReactNode, Suspense, lazy } from "react";

import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import SellingPoints from "@home/components/SellingPoints/SellingPoints";
import { ServicesSection } from "@home/components/Services";
import FeatureList from "@home/components/Services/FeatureList";
import FeatureAwards from "@home/components/Services/FeatureAwards";
import UserBoard from "@home/components/UserBoard/UserBoard";
import TrustBadges from "@home/components/UserBoard/TrustBadges";
import SectionContainer from "@common/SectionContainer";
import { UserBoard as UserBoardDataReadonly } from "../data/UserBoard";
import { TestimonialSlider } from "@home/components/Testimonials/TestimonialSlider";

const PortfolioGallery = lazy(
  () => import("@home/components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("@home/components/Portfolio/SupportFAQ"));

interface PageSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: string;
}

const PageSection: FC<PageSectionProps> = ({
  id,
  title,
  children,
  bg = "",
}) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    role="region"
    tabIndex={-1}
    className={`scroll-mt-24 py-12 sm:py-16 md:py-20 ${bg}`}
  >
    <h2 id={`${id}-title`} className="sr-only">
      {title}
    </h2>
    <SectionContainer>{children}</SectionContainer>
  </section>
);

const Home: FC = () => {
  const UserBoardData = [...UserBoardDataReadonly];

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      <PageSection id="hero" title="ฮีโร่เปิดหน้าเว็บไซต์" bg="bg-base-100">
        <Hero />
      </PageSection>

      <PageSection id="about" title="เกี่ยวกับเรา" bg="bg-base-200">
        <About />
      </PageSection>

      <PageSection id="selling-points" title="จุดเด่นของเรา" bg="bg-base-100">
        <SellingPoints />
      </PageSection>

      <PageSection
        id="features-trust"
        title="จุดเด่นและความน่าเชื่อถือ"
        bg="bg-base-200"
      >
        <div className="md:flex md:space-x-12 space-y-12 md:space-y-0">
          <div className="md:flex-1">
            <FeatureList />
          </div>
          <div className="md:flex-1">
            <FeatureAwards />
          </div>
        </div>
        <div className="mt-12">
          <TrustBadges />
        </div>
      </PageSection>

      <PageSection id="services" title="บริการของเรา" bg="bg-base-100">
        <ServicesSection />
      </PageSection>

      <PageSection
        id="user-board"
        title="บอร์ดรายชื่อผู้สมัคร"
        bg="bg-base-200"
      >
        <UserBoard data={UserBoardData} />
      </PageSection>

      <PageSection
        id="testimonials"
        title="เสียงตอบรับจากลูกค้า"
        bg="bg-base-100"
      >
        <TestimonialSlider />
      </PageSection>

      <PageSection id="portfolio" title="ผลงานที่ผ่านมา" bg="bg-base-100">
        <Suspense
          fallback={<div className="text-center py-16">กำลังโหลดผลงาน...</div>}
        >
          <PortfolioGallery />
        </Suspense>
      </PageSection>

      <PageSection id="faq" title="คำถามที่พบบ่อย" bg="bg-base-200">
        <Suspense
          fallback={
            <div className="text-center py-16">กำลังโหลดคำถามที่พบบ่อย...</div>
          }
        >
          <SupportFAQ />
        </Suspense>
      </PageSection>
    </main>
  );
};

export default Home;
