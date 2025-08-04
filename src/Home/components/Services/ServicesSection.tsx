// ✅ src/Home/components/Services/ServicesSection.tsx — Section รวมบริการทั้งหมดของ JP Visual & Docs

import { FC } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import SectionContainer from "@/utils/common/SectionContainer"; // ✅ path จริงตามโปรเจกต์

/**
 * 🧩 ServicesSection
 * - แสดงทั้งบริการที่พร้อมให้บริการ และ Coming Soon
 * - ใช้ร่วมกับ UI Card 2 ประเภท: ServiceCard และ ComingSoonServiceCard
 * - ใช้ Grid responsive รองรับ 1–3 คอลัมน์
 */
const ServicesSection: FC = () => {
  const availableServices = jpServices.filter((s) => s.available);
  const comingSoonServices = jpServices.filter((s) => !s.available);

  return (
    <SectionContainer>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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