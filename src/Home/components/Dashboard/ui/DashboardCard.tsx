"use client";

import { FC, ReactNode, useEffect, useState } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  actions?: ReactNode; // ปุ่มหรือ element เพิ่มเติมด้านล่าง
  realtime?: boolean; // ถ้า true จะเปิด Realtime mock update
}

/**
 * DashboardCard
 * -------------------------
 * แสดง Card สำหรับหน้า Dashboard
 * - title: ชื่อ Card
 * - description: คำอธิบายสั้น
 * - actions: ปุ่มหรือ element เพิ่มเติมด้านล่าง
 * - realtime: เปิด/ปิดการอัปเดตข้อมูลแบบเรียลไทม์
 */
const DashboardCard: FC<DashboardCardProps> = ({
  title,
  description,
  actions,
  realtime = false,
}) => {
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    if (!realtime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
      const updates = [
        `อัปเดตล่าสุด ${timeStr} น.`,
        `มีงานใหม่ ${timeStr} น.`,
        `แจ้งเตือนใหม่ ${timeStr} น.`,
      ];
      setDesc(updates[Math.floor(Math.random() * updates.length)]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [realtime]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-500">{desc}</p>
      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
};

export default DashboardCard;
