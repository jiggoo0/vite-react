import { FC, useMemo } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import SectionContainer from "@/utils/common/SectionContainer";

/**
 * 🧩 ServicesSection
 * - แสดงรายการบริการที่พร้อมใช้งาน และบริการ Coming Soon
 * - ใช้ร่วมกับ Card สองแบบ: ServiceCard และ ComingSoonServiceCard
 * - ใช้ Grid responsive รองรับตั้งแต่ 1-3 คอลัมน์
 */
const ServicesSection: FC = () => {
  // กรองรายการบริการพร้อมใช้งาน แคชผลลัพธ์ด้วย useMemo
  const availableServices = useMemo(
    () => jpServices.filter((service) => service.available),
    []
  );

  // กรองรายการบริการ Coming Soon
  const comingSoonServices = useMemo(
    () => jpServices.filter((service) => !service.available),
    []
  );

  return (
    <SectionContainer as="section" aria-labelledby="services-title">
      {/* Header section */}
      <header className="mb-10 text-center">
        <h2 id="services-title" className="text-3xl font-bold text-primary">
          บริการของเรา
        </h2>
        <p className="mt-2 text-base-content/70 max-w-xl mx-auto">
          เรามีบริการหลากหลายด้านให้คุณเลือกใช้ ครอบคลุมทั้ง Visual &
          Documentation
        </p>
      </header>

      {/* Grid รายการบริการ */}
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
