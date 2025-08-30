// src/config/dashboardCards.ts
// ==========================
// Dashboard Cards - Mock Data per Role + Realtime Updates
// ==========================

export type UserRole = "admin" | "manager" | "user";

export interface DashboardCard {
  title: string;
  description: string;
}

// Base Dashboard Cards per Role
export const dashboardCards: Record<UserRole, DashboardCard[]> = {
  admin: [
    { title: "จัดการผู้ใช้", description: "สร้าง แก้ไข และลบบัญชีผู้ใช้" },
    { title: "รายงานระบบ", description: "ตรวจสอบสถานะและกิจกรรมของระบบ" },
    { title: "การตั้งค่าระบบ", description: "ปรับแต่งระบบและสิทธิ์การเข้าถึง" },
  ],
  manager: [
    { title: "รายงานทีม", description: "ตรวจสอบรายงานและกิจกรรมทีม" },
    { title: "จัดการงาน", description: "สร้างและมอบหมายงานให้สมาชิกทีม" },
  ],
  user: [
    { title: "งานของฉัน", description: "ตรวจสอบงานที่ได้รับมอบหมาย" },
    { title: "ประวัติ", description: "ดูประวัติการทำงาน" },
  ],
};

// ==========================
// Realtime / Mock Updates
// ==========================

/**
 * สุ่มสร้าง Dashboard Card ใหม่สำหรับ role ใด ๆ
 * ใช้สำหรับ Realtime Mock Update
 */
export const getRandomDashboardCard = (role: UserRole): DashboardCard => {
  const baseCards = dashboardCards[role];
  const dynamicTitles = ["แจ้งเตือนใหม่", "งานด่วน", "รายงานสรุป"];
  const randomTitle = dynamicTitles[Math.floor(Math.random() * dynamicTitles.length)];
  const randomDescription = `อัปเดตล่าสุด ${new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })} น.`;

  // สลับกับ card เดิมแบบสุ่มเพื่อความหลากหลาย
  const randomBaseIndex = Math.floor(Math.random() * baseCards.length);
  const baseCard = baseCards[randomBaseIndex];

  return {
    title: `${baseCard.title} - ${randomTitle}`,
    description: `${baseCard.description} | ${randomDescription}`,
  };
};
