import { FC, useMemo } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import SectionContainer from "@/utils/common/SectionContainer";

const ServicesSection: FC = () => {
  const availableServices = useMemo(
    () => jpServices.filter(({ available }) => available),
    []
  );

  const comingSoonServices = useMemo(
    () => jpServices.filter(({ available }) => !available),
    []
  );

  return (
    <SectionContainer as="section" aria-labelledby="services-title">
      <header className="mb-10 text-center">
        <h2 id="services-title" className="text-3xl font-bold text-primary">
          บริการของเรา
        </h2>
        <p className="mt-2 text-base-content/70 max-w-xl mx-auto">
          เรามีบริการหลากหลายด้านให้คุณเลือกใช้ ครอบคลุมทั้ง Visual &
          Documentation
        </p>
      </header>

      <div role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {availableServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        {comingSoonServices.map((service) => (
          <ComingSoonServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
