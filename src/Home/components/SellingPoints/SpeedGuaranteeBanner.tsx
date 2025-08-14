import { FC } from "react";
import { Rocket, TimerReset } from "lucide-react";
import clsx from "clsx";

export interface SpeedGuaranteeBannerProps {
  className?: string;
  title?: string;
  desc?: string;
  bullets?: string[];
  contactHref?: string;
}

const SpeedGuaranteeBanner: FC<SpeedGuaranteeBannerProps> = ({
  className,
  title = "คิวด่วนพร้อม — งานไว เนียน ส่งตามนัด",
  desc = "รองรับงานเร่ง 24 ชม.* ตามระดับความยาก + คิวที่ว่าง",
  bullets = [
    "จัดคิวทันทีหลังยืนยันขอบเขต",
    "อัปเดตสถานะโปร่งใส",
    "ส่งไฟล์ปลอดภัย ลิงก์หมดอายุ",
  ],
  contactHref = "https://line.me/R/ti/p/@yourid",
}) => {
  return (
    <section className={clsx("py-6", className)}>
      <div className="container mx-auto px-4">
        <div className="alert bg-base-200 shadow-md">
          <Rocket className="w-5 h-5" />
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm opacity-80">{desc}</p>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <TimerReset className="w-4 h-4" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto">
            <a
              className="btn btn-primary"
              href={contactHref}
              aria-label="คุยเร่งด่วน"
            >
              คุยเร่งด่วน
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedGuaranteeBanner;
