// src/Home/components/Dashboard/ui/DashboardGreeting.tsx
"use client";

import { FC } from "react";
import PageSection from "@/Home/components/common/PageSection";

interface DashboardGreetingProps {
  username: string;
}

const DashboardGreeting: FC<DashboardGreetingProps> = ({ username }) => {
  return (
    <PageSection hideTitle>
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">สวัสดี, {username} 👋</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          ยินดีต้อนรับสู่แดชบอร์ดของคุณ — ตรวจสอบข้อมูลล่าสุดได้ที่นี่
        </p>
      </div>

      {/* Warning */}
      <div className="p-4 sm:p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm sm:text-base rounded-md shadow-sm">
        <strong>⚠️ โปรดทราบ!</strong> พื้นที่นี้ออกแบบเพื่อความปลอดภัยของทั้งผู้จ้างงานและผู้รับงาน
        <br />
        กรุณาใช้ <strong>username/password</strong> เฉพาะเครื่องของคุณ และห้ามแชร์กับผู้อื่น
        หากตรวจพบการใช้งานจากอุปกรณ์อื่น ระบบอาจยุติการใช้งานทันที
        <br />
        ถือเป็นข้อตกลงที่ทุกคนต้องปฏิบัติตามอย่างเคร่งครัด
      </div>
    </PageSection>
  );
};

export default DashboardGreeting;
