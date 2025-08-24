"use client";

import { FC, useMemo } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import FeatureAwards from "./FeatureAwards";
import FeatureList from "./FeatureList";
import SectionContainer from "@/utils/common/SectionContainer";

const ServicesSection: FC = () => {
  // แยกบริการที่พร้อมใช้งานและกำลังจะมา
  const availableServices = useMemo(
    () => jpServices.filter((s) => s.available),
    []
  );
  const comingSoonServices = useMemo(
    () => jpServices.filter((s) => !s.available),
    []
  );

  const allServices = [...availableServices, ...comingSoonServices];

  return (
    <SectionContainer
      as="section"
      aria-labelledby="services-title"
      className="py-12 md:py-16"
    >
      {/* Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h2
          id="services-title"
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          บริการของเรา
        </h2>
        <p className="mt-3 text-base md:text-lg text-base-content/70">
          บริการครบครัน ทั้งด้าน Visual และ Documentation ให้คุณใช้งานได้ง่าย
        </p>
      </header>

      {/* Services Grid */}
      <ul
        role="list"
        aria-label="รายการบริการของเรา"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {allServices.map((service) => {
          const Card = service.available ? ServiceCard : ComingSoonServiceCard;
          return (
            <li key={service.id}>
              <Card service={service} />
            </li>
          );
        })}
      </ul>

      {/* Features / Awards Section */}
      <section className="mt-16 grid gap-12 md:grid-cols-2">
        <FeatureAwards />
        <FeatureList />
      </section>
    </SectionContainer>
  );
};

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;