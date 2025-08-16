"use client";

import { FC } from "react";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";
import clsx from "clsx";

interface FeatureAwardsProps {
  /**  Tailwind class  */
  className?: string;
}

const awards = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "",
    description: " 4,000 ",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "",
    description: " ",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "",
    description: "",
  },
];

const FeatureAwards: FC<FeatureAwardsProps> = ({ className }) => (
  <section
    aria-labelledby="awards-title"
    role="region"
    className={clsx("mt-12", className)}
  >
    <h3 id="awards-title" className="sr-only">
      
    </h3>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {awards.map(({ icon, title, description }, index) => (
        <article
          key={index}
          tabIndex={0}
          role="listitem"
          className={clsx(
            "flex items-start space-x-4 rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm transition-shadow duration-300 ease-in-out",
            "hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus:outline-none"
          )}
        >
          <div className="flex-shrink-0">{icon}</div>
          <div>
            <h4 className="text-base font-semibold text-base-content">
              {title}
            </h4>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeatureAwards;
