import { ShieldCheck, Clock, Users, Lock, Award } from "lucide-react";

type BadgeItem = {
  id: string;
  icon: JSX.Element;
  title: string;
  desc: string;
};

const badges: BadgeItem[] = [
  {
    id: "secure",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "ข้อมูลปลอดภัยตามมาตรฐานสากล",
    desc: "ระบบเข้ารหัสและป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต",
  },
  {
    id: "temporary-access",
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "การเข้าถึงชั่วคราว",
    desc: "รหัสเข้าถึงมีเวลาจำกัดเพื่อความปลอดภัยสูงสุด",
  },
  {
    id: "personal-login",
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: "ล็อกอินด้วยรหัสเฉพาะบุคคล",
    desc: "รองรับรหัสเฉพาะผู้ใช้ที่ตรวจสอบแล้วเท่านั้น",
  },
  {
    id: "trusted",
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "ความน่าเชื่อถือสูง",
    desc: "ผ่านการทดสอบและรับรองโดยทีมพัฒนามืออาชีพ",
  },
  {
    id: "multi-level",
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "รองรับผู้ใช้หลายระดับ",
    desc: "กำหนดสิทธิ์ตามระดับผู้ใช้อย่างชัดเจน",
  },
];

const BadgeCard = ({ icon, title, desc }: Omit<BadgeItem, "id">) => (
  <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300">
    <div className="card-body items-center text-center p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="card-title text-base font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  </div>
);

export default function TrustBadges() {
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {badges.map(({ id, ...badge }) => (
            <BadgeCard key={id} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
