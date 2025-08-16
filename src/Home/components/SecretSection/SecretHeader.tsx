"use client";

import { FC } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

/**
 * SecretHeader
 * แสดงหัวข้อและคำเตือนสำหรับพื้นที่ลับ
 */
const SecretHeader: FC = () => {
  return (
    <header
      className="mb-12 px-4 sm:px-6 lg:px-8"
      aria-label="คำเตือนและคำแนะนำสำหรับพื้นที่ลับ"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-6">
        Secret Private Zone
      </h1>

      {/* Animated Alert / Warning Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-6 py-5 rounded-xl shadow-md flex items-start gap-4 sm:px-8 sm:py-6"
        role="alert"
        aria-live="polite"
      >
        {/* Icon */}
        <ExclamationTriangleIcon
          className="w-6 h-6 flex-shrink-0 animate-pulse text-yellow-500 mt-1"
          aria-hidden="true"
        />

        {/* Text */}
        <p className="leading-relaxed text-sm sm:text-base">
          ⚠️ <strong>โปรดทราบ!</strong>{" "}
          พื้นที่นี้ออกแบบมาเพื่อความปลอดภัยของทั้งผู้จ้างงานและผู้รับงาน
          กรุณาใช้ <strong>username/password</strong> เฉพาะเครื่องประจำเท่านั้น
          และห้ามแชร์กับผู้อื่น หากตรวจพบการใช้งานจากอุปกรณ์อื่น
          ระบบจะยุติการใช้งานทันที
          ถือเป็นข้อตกลงที่ทุกคนต้องปฏิบัติตามอย่างเคร่งครัด
        </p>
      </motion.div>
    </header>
  );
};

export default SecretHeader;
