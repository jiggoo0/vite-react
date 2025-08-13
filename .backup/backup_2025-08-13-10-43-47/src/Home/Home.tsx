"use client";

import { FC, ReactNode, Suspense, lazy } from "react";

import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import { ServicesSection } from "@home/components/Services";
import SectionContainer from "@common/SectionContainer";
import UserBoard from "@home/components/UserBoard/UserBoard";
import { UserBoard as UserBoardDataReadonly } from "../data/UserBoard";

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
    className={`scroll-mt-24 py-10 sm:py-14 md:py-20 ${bg}`}
  >
    <h2 id={`${id}-title`} className="sr-only">
      {title}
    </h2>
    <SectionContainer>
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        tabIndex={-1}
      >
        {children}
      </div>
    </SectionContainer>
  </section>
);

const Home: FC = () => {
  const UserBoardData = [...UserBoardDataReadonly];

  return (
    <main
      className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen"
      role="main"
    >
      <PageSection id="hero" title="ฮีโร่เปิดหน้าเว็บไซต์" bg="bg-base-100">
        <Hero />
      </PageSection>

      <PageSection id="about" title="เกี่ยวกับเรา" bg="bg-base-200">
        <About />
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

      <Suspense
        fallback={
          <div
            className="text-center py-12"
            aria-busy="true"
            aria-live="polite"
          >
            กำลังโหลด...
          </div>
        }
      >
        <PageSection id="portfolio" title="ผลงานที่ผ่านมา" bg="bg-base-100">
          <PortfolioGallery />
        </PageSection>

        <PageSection id="faq" title="คำถามที่พบบ่อย" bg="bg-base-200">
          <SupportFAQ />
        </PageSection>
      </Suspense>
    </main>
  );
};

export default Home;
