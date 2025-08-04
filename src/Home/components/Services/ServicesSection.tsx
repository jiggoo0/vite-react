// ✅ src/Home/components/Services/ServicesSection.tsx — Production-Ready Services Overview

"use client";

import { FC } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import FeatureList from "./FeatureList";
import FeatureAwards from "./FeatureAwards";

/**
 * ✅ ServicesSection — Section รายการบริการของ JP Visual & Docs
 *
 * - FeatureList: จุดแข็งของระบบ JP ที่พัฒนาขึ้นเอง
 * - FeatureAwards: สิ่งที่ลูกค้ามักชื่นชม
 * - แสดงบริการทั้ง "พร้อมใช้งาน" และ "Coming Soon"
 */
const ServicesSection: FC = () => {
  const availableServices = jpServices.filter((service) => service.available);
  const comingSoonServices = jpServices.filter((service) => !service.available);

  return (
    <div className="space-y-16" aria-labelledby="services-section">
      {/* 🔰 Feature 1: ความสามารถของระบบ */}
      <section aria-label="ความสามารถของระบบหลังบ้าน JP-System">
        <FeatureList />
      </section>

      {/* 🔰 Feature 2: จุดที่ลูกค้ามักเลือกใช้เรา */}
      <section aria-label="เหตุผลที่ลูกค้าไว้วางใจ JP Visual & Docs">
        <FeatureAwards />
      </section>

      {/* 🎯 บริการพร้อมใช้งาน */}
      {availableServices.length > 0 && (
        <section aria-label="บริการที่พร้อมให้บริการ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* 🚧 บริการที่ยังไม่เปิดตัว */}
      {comingSoonServices.length > 0 && (
        <section aria-label="บริการใหม่ที่กำลังจะมา">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonServices.map((service) => (
              <ComingSoonServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesSection;
