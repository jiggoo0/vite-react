"use client";

import { FC } from "react";
import { availableServices, upcomingServices, type ServiceType } from "@/config/jpServices.config";
import FeatureAwards from "./FeatureAwards";
import FeatureList from "./FeatureList";
import ComplianceFAQ from "./ComplianceFAQ";
import SectionContainer from "@/utils/common/SectionContainer";

const createLineLink = (message: string) =>
  `https://lin.ee/sOKDUEg?text=${encodeURIComponent(message)}`;

const ServiceCard: FC<{ service: ServiceType }> = ({ service }) => {
  const lineMessage = service.lineMessage ?? `สนใจบริการ: ${service.title}`;
  const lineLink = createLineLink(lineMessage);

  return (
    <article
      tabIndex={0}
      aria-label={`บริการ: ${service.title}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-primary ${
        !service.available ? "opacity-80 hover:opacity-100" : ""
      }`}
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
        {!service.available && service.comingSoonNote && (
          <span
            aria-hidden="true"
            className="inline-block mt-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800"
          >
            🚧 {service.comingSoonNote}
          </span>
        )}
        {service.available && (
          <a
            href={lineLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`สนใจบริการ ${service.title} ติดต่อผ่าน LINE`}
            className="mt-3 inline-flex items-center justify-center rounded bg-primary px-5 py-2 text-sm font-semibold text-white shadow transition-transform duration-200 hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            สนใจบริการ
          </a>
        )}
      </div>
    </article>
  );
};

const ServicesSection: FC = () => {
  const allServices: readonly ServiceType[] = [...availableServices, ...upcomingServices];

  return (
    <SectionContainer
      as="section"
      role="region"
      aria-labelledby="services-title"
      className="py-12 md:py-16"
    >
      {/* Header */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-primary">
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
        {allServices.map((service) => (
          <li key={service.id} className="flex flex-col">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      {/* Features / Awards Section */}
      <section className="mt-16 grid gap-12 md:grid-cols-2">
        <FeatureAwards />
        <FeatureList />
      </section>

      {/* Compliance FAQ Section */}
      <ComplianceFAQ className="mt-20" />
    </SectionContainer>
  );
};

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
