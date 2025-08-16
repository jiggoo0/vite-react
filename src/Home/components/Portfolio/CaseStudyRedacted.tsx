import { FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Case = {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  tags?: string[];
  redactedFields?: string[]; // ["client", "brand", ...]
};

export interface CaseStudyRedactedProps {
  className?: string;
  items: Case[];
  headline?: string;
  subline?: string;
}

const variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const Redact: FC<{ label?: string }> = ({ label = 'REDACTED' }) => (
  <span className="bg-black text-black px-1 rounded-sm select-none">{label}</span>
);

const CaseStudyRedacted: FC<CaseStudyRedactedProps> = ({
  className,
  items,
  headline = 'Case Study (ข้อมูลถูกปกปิดตามนโยบาย)',
  subline = 'แสดงเฉพาะสิ่งส่งมอบที่เปิดเผยได้ โดยซ่อนข้อมูลลูกค้า/แบรนด์/เมทาดาต้าสำคัญ',
}) => {
  return (
    <section className={clsx('py-12 md:py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
          <p className="opacity-80 mt-2">{subline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              variants={variants}
              className="card bg-base-200 overflow-hidden"
            >
              <figure className="relative">
                <img
                  src={it.imageSrc}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                {/* แถบปกปิด */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-white text-xs">
                  ข้อมูลอ่อนไหวบางส่วนถูกซ่อน
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">
                  {it.title} {it.redactedFields?.includes('client') && <Redact />}
                </h3>
                <p className="opacity-80">
                  {it.summary} {it.redactedFields?.includes('brand') && <Redact label="BRAND" />}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {it.tags?.map((t) => (
                    <div key={t} className="badge badge-outline">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyRedacted;
