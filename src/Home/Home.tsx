"use client";

import {
  FC,
  ReactNode,
  Suspense,
  lazy,
  useRef,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";

// ======================= Components =======================
import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import SellingPoints from "@home/components/SellingPoints/SellingPoints";
import { ServicesSection } from "@home/components/Services";
import FeatureList from "@home/components/Services/FeatureList";
import FeatureAwards from "@home/components/Services/FeatureAwards";
import UserBoard, { IUser } from "@home/components/UserBoard/UserBoard";
import TrustBadges from "@home/components/UserBoard/TrustBadges";
import TrustMetricsBar from "@home/components/UserBoard/TrustMetricsBar";
import SpeedGuaranteeBanner from "@home/components/SellingPoints/SpeedGuaranteeBanner";
import CaseStudyRedacted from "@home/components/Portfolio/CaseStudyRedacted";
import ComplianceFAQ from "@home/components/Services/ComplianceFAQ";
import SectionContainer from "@common/SectionContainer";
import { UserBoard as UserBoardDataReadonly } from "../data/UserBoard";
import TestimonialSlider from "@home/components/Testimonials/TestimonialSlider";

// ======================= Lazy-loaded Components =======================
const PortfolioGallery = lazy(
  () => import("@home/components/Portfolio/PortfolioGallery")
);
const SupportFAQ = lazy(() => import("@home/components/Portfolio/SupportFAQ"));

// ======================= Page Section Wrapper =======================
interface PageSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bgClass?: string;
}

const PageSection: FC<PageSectionProps> = ({
  id,
  title,
  children,
  bgClass = "bg-base-100",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={`${id}-title`}
      role="region"
      tabIndex={-1}
      className={clsx(
        "scroll-mt-24 py-12 sm:py-16 md:py-20 transition-all duration-700 ease-in-out transform opacity-0 translate-y-6",
        isVisible && "opacity-100 translate-y-0",
        bgClass
      )}
    >
      <h2 id={`${id}-title`} className="sr-only">
        {title}
      </h2>
      <SectionContainer>{children}</SectionContainer>
    </section>
  );
};

// ======================= Home Page =======================
const Home: FC = () => {
  // แปลง readonly เป็น mutable array
  const userBoardData: IUser[] = [...UserBoardDataReadonly];

  return (
    <main className="flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen">
      <PageSection id="hero" title="Hero Section" bgClass="bg-base-100">
        <Hero />
      </PageSection>

      <TrustMetricsBar className="bg-base-100" />

      <PageSection id="about" title="About Us" bgClass="bg-base-200">
        <About />
      </PageSection>

      <PageSection
        id="selling-points"
        title="Selling Points"
        bgClass="bg-base-100"
      >
        <SellingPoints />
      </PageSection>

      <SpeedGuaranteeBanner className="bg-base-100" />

      <PageSection
        id="features-trust"
        title="Features & Trust"
        bgClass="bg-base-200"
      >
        <div className="md:flex md:space-x-12 space-y-12 md:space-y-0">
          <FeatureList className="md:flex-1" />
          <FeatureAwards className="md:flex-1" />
        </div>
        <div className="mt-12">
          <TrustBadges />
        </div>
      </PageSection>

      <PageSection id="services" title="Services" bgClass="bg-base-100">
        <ServicesSection />
      </PageSection>

      <PageSection id="case-studies" title="Case Studies" bgClass="bg-base-100">
        <CaseStudyRedacted
          className="bg-base-100"
          items={[
            {
              id: "cs-1",
              title: "รีแบรนด์เอกสารองค์กร",
              summary: "จัดชุดเอกสารภาพลักษณ์ใหม่ ย้ำความเป็นมืออาชีพ",
              imageSrc: "/assets/portfolio/portfolio1.webp",
              tags: ["Branding", "Docs", "Metadata Clean"],
              redactedFields: ["client", "brand"],
            },
            {
              id: "cs-2",
              title: "จัดทำสื่อเร่งด่วน 24 ชม.",
              summary: "ออกแบบชุดสื่อพร้อมส่ง กำหนดส่งกระชั้นชิด",
              imageSrc: "/assets/portfolio/portfolio2.webp",
              tags: ["Rush", "Design"],
              redactedFields: ["client"],
            },
            {
              id: "cs-3",
              title: "ชุดไฟล์ยื่นงานเฉพาะทาง",
              summary: "จัดสเปกไฟล์ให้ผ่านข้อกำหนด + ลบข้อมูลซ่อน",
              imageSrc: "/assets/portfolio/portfolio3.webp",
              tags: ["Compliance", "Delivery"],
              redactedFields: ["brand"],
            },
          ]}
        />
      </PageSection>

      <PageSection id="user-board" title="User Board" bgClass="bg-base-200">
        <UserBoard data={userBoardData} />
      </PageSection>

      <PageSection id="testimonials" title="Testimonials" bgClass="bg-base-100">
        <TestimonialSlider />
      </PageSection>

      <PageSection
        id="portfolio"
        title="Portfolio Gallery"
        bgClass="bg-base-100"
      >
        <Suspense
          fallback={
            <div className="text-center py-16 animate-pulse">
              Loading portfolio...
            </div>
          }
        >
          <PortfolioGallery />
        </Suspense>
      </PageSection>

      <PageSection
        id="compliance-faq"
        title="Compliance FAQ"
        bgClass="bg-base-100"
      >
        <ComplianceFAQ />
      </PageSection>

      <PageSection id="faq" title="FAQ" bgClass="bg-base-200">
        <Suspense
          fallback={
            <div className="text-center py-16 animate-pulse">
              Loading FAQ...
            </div>
          }
        >
          <SupportFAQ />
        </Suspense>
      </PageSection>
    </main>
  );
};

export default Home;
