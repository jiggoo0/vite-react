"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/config/jpServices.config";

interface ServiceCardProps {
  service: ServiceType;
}

// LINE OA ID ของคุณ (ไม่ต้องมี @)
const lineOAId = "462fqtfc";

// ฟังก์ชันสร้างลิงก์ LINE OA พร้อมข้อความอัตโนมัติ
const createLineLink = (message: string) =>
  `https://lin.ee/${lineOAId}?text=${encodeURIComponent(message)}`;

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const lineMessage = service.lineMessage ?? `สนใจบริการ: ${service.title}`;
  const lineLink = createLineLink(lineMessage);

  if (!service.available) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        tabIndex={0}
        aria-label={`บริการ ${service.title} กำลังจะเปิดให้บริการเร็ว ๆ นี้`}
        className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-md focus-within:ring-2 focus-within:ring-yellow-400 transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <img
          src={service.image}
          alt={service.altText}
          loading="lazy"
          decoding="async"
          className="h-40 w-full rounded-t-2xl object-cover brightness-75 transition-transform duration-300 hover:scale-105"
        />
        <div className="mt-4 px-3 pb-3 space-y-1">
          <h3 className="text-base font-semibold text-white">{service.title}</h3>
          <p className="text-sm text-base-content/70 leading-relaxed">{service.description}</p>
        </div>
        {service.comingSoonNote && (
          <div
            aria-hidden="true"
            className="absolute top-2 right-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black shadow"
          >
            {service.comingSoonNote}
          </div>
        )}
      </motion.article>
    );
  }

  return (
    <article
      tabIndex={0}
      aria-label={`บริการ: ${service.title}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-primary"
    >
      <img
        src={service.image}
        alt={service.altText}
        loading="lazy"
        decoding="async"
        className="h-48 w-full rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col flex-1 space-y-2 p-4">
        <h3 className="text-lg font-semibold text-base-content">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{service.description}</p>
        {service.price && <p className="text-sm font-medium text-green-600">{service.price}</p>}
        <a
          href={lineLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`สนใจบริการ ${service.title} ติดต่อผ่าน LINE`}
          className="mt-3 inline-flex items-center justify-center rounded bg-primary px-5 py-2 text-sm font-semibold text-white shadow transition-transform duration-200 hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          สนใจบริการ
        </a>
      </div>
    </article>
  );
};

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
