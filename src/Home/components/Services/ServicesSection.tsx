import { FC, useMemo } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import SectionContainer from "@/utils/common/SectionContainer";

const ServicesSection: FC = () => {
  // แยกบริการที่พร้อมใช้งาน
  const availableServices = useMemo(
    () => jpServices.filter((service) => service.available),
    []
  );

  // แยกบริการที่กำลังจะมา
  const comingSoonServices = useMemo(
    () => jpServices.filter((service) => !service.available),
    []
  );

  return (
    <SectionContainer
      as="section"
      aria-labelledby="services-title"
      className="py-12 md:py-16"
    >
      {/* Header */}
      <header className="mb-12 text-center">
        <h2
          id="services-title"
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          บริการของเรา
        </h2>
        <p className="mt-3 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
          เรามีบริการหลากหลายด้านให้คุณเลือกใช้ ครอบคลุมทั้ง Visual &
          Documentation
        </p>
      </header>

      {/* Service Cards */}
      <ul
        role="list"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="รายการบริการของเรา"
      >
        {availableServices.map((service) => (
          <li key={service.id}>
            <ServiceCard service={service} />
          </li>
        ))}

        {comingSoonServices.map((service) => (
          <li key={service.id}>
            <ComingSoonServiceCard service={service} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ServicesSection;
