'use client';

import { FC } from 'react';
import { ServiceType } from '@/data/services';

interface ServiceCardProps {
  service: ServiceType;
}

const createLineLink = (message: string) =>
  `https://lin.ee/sOKDUEg?text=${encodeURIComponent(message)}`;

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const lineMessage = service.lineMessage ?? `สนใจบริการ: ${service.title}`;
  const lineLink = createLineLink(lineMessage);

  return (
    <article
      tabIndex={0}
      aria-label={`บริการ: ${service.title}`}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-primary"
    >
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.altText}
        loading="lazy"
        decoding="async"
        className="h-48 w-full rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Service Info */}
      <div className="flex flex-col flex-1 space-y-2 p-4">
        <h3 className="text-lg font-semibold text-base-content">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{service.description}</p>

        {/* Price */}
        {service.price && <p className="text-sm font-medium text-green-600">{service.price}</p>}

        {/* Coming Soon Badge */}
        {!service.available && service.comingSoonNote && (
          <span
            aria-hidden="true"
            className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 mt-2"
          >
            🚧 {service.comingSoonNote}
          </span>
        )}

        {/* CTA Button */}
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

export default ServiceCard;
