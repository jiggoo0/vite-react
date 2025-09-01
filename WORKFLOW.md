เมื่อได้รับข้อความทั้งหมดสรุปตามหัว
เป้าหมายหลัก:
สร้าง แก้ไข ปรับแต่ง React + TypeScript + Vite + TailwindCSS/DaisyUI components ให้เป็น Production-ready, Type-safe, Minimal UI, Flat UI, Enterprise-grade
แนวทางการทำงาน:
ทำงานแบบ DEV-to-DEV
ตรวจสอบและแก้ไขโค้ดให้ตรงตามวัตถุประสงค์, ป้องกันข้อผิดพลาด
ส่งกลับโค้ด พร้อมใช้งานและ format เรียบร้อย
แนะนำทันทีหากต้องปรับปรุงเร่งด่วน
กฎเข้มงวด:
ห้ามเปลี่ยนชื่อไฟล์หรือโครงสร้างโดยไม่ได้รับอนุญาต
การแยกไฟล์หรือสร้างไฟล์ใหม่ทำได้ถ้าชัดเจนและช่วยประสิทธิภาพ
ยึด ESLint, TypeScript strict, Production-ready practices
เน้น ความแม่นยำสูง ในการจัดการ Components และ Hooks
AI สามารถ:
เข้าใจโครงสร้างโปรเจกต์ Vite + React + TypeScript จากรายละเอียด tree และ config
ตรวจสอบ dependencies, config files, alias, project info, project tree
สร้างสรุปรายงาน Markdown อัตโนมัติ (เหมือนสคริปต์ NOTEDEVSEO_SUMMARY.md)
ปรับปรุงและฟอร์แมตโค้ด ให้ production-ready ตาม strict TypeScript + ESLint rules
ให้คำแนะนำเชิงเทคนิค เกี่ยวกับโครงสร้าง Component, Hooks, และ Config
📝 บันทึกข้อมูล Dashboard Project

1️⃣ Dashboard Cards

ไฟล์หลัก: src/config/dashboardCards.tsx

1.1 โครงสร้าง DashboardCard

export interface DashboardCard {
title: string; // ชื่อการ์ด
description: string; // คำอธิบายการ์ด
roles: UserRole[]; // สิทธิ์เข้าถึง
icon: React.ElementType; // Icon จาก lucide-react
route: string; // path สำหรับ navigation
category: DashboardCategory; // หมวดหมู่
realtime?: boolean; // แสดง badge Realtime
}

1.2 สิทธิ์เข้าถึง (Roles)

export enum UserRole {
Admin = "admin",
Manager = "manager",
User = "user",
}

ใช้ควบคุมว่าใครสามารถเห็นหรือคลิกการ์ดได้

ถ้า roles ของการ์ดไม่รวม Role ของผู้ใช้ จะ ล็อคการ์ด

1.3 Realtime

ควบคุมว่าแสดง badge “Realtime” บนการ์ด

ใช้ฟิลด์ realtime?: boolean

ตัว component DashboardCard จะ render <span> ถ้า realtime === true

---

2️⃣ Component DashboardCard

ไฟล์: src/Home/components/Dashboard/ui/DashboardCard.tsx

2.1 Props

interface DashboardCardProps {
title: string;
description: string;
icon?: React.ElementType;
\_route?: string; // ใช้ navigation (เปลี่ยนชื่อ \_route เพื่อป้องกัน warning)
canAccess?: boolean; // สิทธิ์เข้าถึง
realtime?: boolean; // แสดง badge Realtime
children?: ReactNode;
}

2.2 การทำงานสำคัญ

ปรับ สไตล์การ์ด ตามสิทธิ์ canAccess

แสดง badge Realtime ถ้า realtime === true

รองรับ children สำหรับ component เสริมภายในการ์ด

ไม่สามารถคลิกการ์ดถ้า canAccess === false

---

3️⃣ Dashboard Component

ไฟล์: src/Home/components/Dashboard/Dashboard.tsx

3.1 Mock Data

const mockStats = [
{ id: "1", label: "เอกสารทั้งหมด", value: 120 },
{ id: "2", label: "สมาชิกทีม", value: 5 },
{ id: "3", label: "รายงานล่าสุด", value: 15 },
{ id: "4", label: "แจ้งเตือน", value: 3 },
];

const mockActivities: Activity[] = [
{ id: "1", action: "เข้าสู่ระบบ", timestamp: "09:00 น." },
{ id: "2", action: "อัปโหลดเอกสาร", timestamp: "09:30 น." },
{ id: "3", action: "สร้างรายงาน", timestamp: "10:00 น." },
];

mockStats → ข้อมูล สถิติผู้ใช้ (UserStats)

mockActivities → ข้อมูล กิจกรรมล่าสุด (RecentActivity)

ใช้เพื่อ render UI ก่อนมีข้อมูลจริงจาก API

3.2 การ map การ์ด

cards.map((card) => (
<DashboardCard
key={card.route}
title={card.title}
description={card.description}
icon={card.icon}
\_route={card.route}
realtime={card.realtime}
canAccess={card.roles.includes(role)} // ตรวจสอบสิทธิ์
/>
))

canAccess → ถ้า false จะ ล็อคการ์ด

---

4️⃣ UserStats Component

ไฟล์: src/Home/components/Dashboard/ui/UserStats.tsx

4.1 Props

interface Stat {
id: string;
label: string;
value: number;
}

interface UserStatsProps {
stats: Stat[];
}

4.2 การทำงาน

แสดง สถิติผู้ใช้แบบ grid

แต่ละสถิติแสดง value + label

ใช้ mock data ในการพัฒนา

---

5️⃣ Protected Auth Context

ไฟล์: src/hooks/useProtectedAuth.tsx

5.1 ฟังก์ชันสำคัญ

const updateUser = useCallback(
(data: Partial<User>) => {
if (!user) return;
const updated = { ...user, ...data };
setUser(updated);
localStorage.setItem("user", JSON.stringify(updated));
},
[user]
);

อัปเดต user object ทั้งใน state และ localStorage

ใช้กับการตั้งค่าผู้ใช้ เช่น เปลี่ยนรหัสผ่าน

---

6️⃣ เทคนิคสำคัญ

1. สิทธิ์เข้าถึงการ์ด

กำหนดใน roles ของแต่ละ DashboardCard

ตรวจสอบใน Dashboard component ก่อน render → \_canAccess

2. Realtime badge

กำหนดใน realtime ของ DashboardCard

Component DashboardCard แสดง <span> badge

3. Mock Data

ใช้ mockStats และ mockActivities สำหรับพัฒนา UI

ใน production ต้องเปลี่ยนเป็น fetch จาก API
(ยังไม่มีแผนพัฒนา)

4. Component แบบ reusable

DashboardCard, UserStats, RecentActivity, DashboardSection

สามารถปรับใช้ในหลายส่วนของ Dashboard

AI ยังต้อง:
ปรับปรุงหรือแก้ไข Component จริง ในโปรเจกต์ตาม requirement
ตรวจสอบ Type-safety และ CSS/UX consistency ให้ตรงกับ Tailwind/DaisyUI design
ให้ โค้ดพร้อมใช้งานทันที โดยไม่ต้องรอ developer ทำ post-processing
AI มี ศักยภาพสูงพอ สำหรับงานนี้
พร้อมทำงาน DEV-to-DEV กับโปรเจกต์ Vite + React + TypeScript + TailwindCSS/DaisyUI
สามารถ แก้ไข, สร้าง, ปรับปรุง Component และ Config ให้ production-ready ได้

สามารถ สร้างรายงานสรุปและตรวจสอบสภาพโปรเจกต์ อัตโนมัติ
