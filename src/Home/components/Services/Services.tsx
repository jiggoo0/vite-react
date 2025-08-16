'use client';

import { FC } from 'react';
import ServicesSection from '@/Home/components/Services/ServicesSection';

const Services: FC = () => (
  <section
    id="services"
    aria-labelledby="services-title"
    role="region"
    className="relative isolate overflow-hidden bg-base-100 text-base-content py-24 px-4 sm:px-6 lg:px-8"
  >
    {/* Hidden accessible heading for screen readers */}
    <h2 id="services-title" className="sr-only">
      บริการของเรา
    </h2>

    {/* Decorative gradient background */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-10 -z-10 w-[500px] rounded-full 
                 bg-gradient-to-br from-primary/30 to-secondary/30 blur-[120px] opacity-40"
    />

    {/* Main services section */}
    <ServicesSection />
  </section>
);

export default Services;
