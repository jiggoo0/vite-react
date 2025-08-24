"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import CardWrapper from "@/Home/components/common/CardWrapper";

export interface RiskItem {
  หมวด: string;
  คะแนน: number;
  คำอธิบาย: string;
}

interface DynamicRiskDashboardProps {
  risks?: RiskItem[];
}

const defaultRisks: RiskItem[] = [
  { หมวด: "การเงิน", คะแนน: 75, คำอธิบาย: "ความเสี่ยงปานกลาง" },
  { หมวด: "การปฏิบัติตามกฎระเบียบ", คะแนน: 90, คำอธิบาย: "ความเสี่ยงสูง" },
  { หมวด: "การดำเนินงาน", คะแนน: 40, คำอธิบาย: "ความเสี่ยงต่ำ" },
];

const DynamicRiskDashboard: FC<DynamicRiskDashboardProps> = ({ risks = defaultRisks }) => {
  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        แดชบอร์ดความเสี่ยง
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {risks.map((risk, index) => (
          <motion.div
            key={`${risk.หมวด}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CardWrapper>
              <div className="flex flex-col items-center justify-center p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  หมวด: {risk.หมวด}
                </h3>
                <span className="mt-2 text-3xl font-bold text-primary">
                  คะแนน: {risk.คะแนน}%
                </span>
                <span className="mt-1 text-sm text-gray-600 dark:text-gray-400 text-center">
                  {risk.คำอธิบาย}
                </span>
              </div>
            </CardWrapper>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

DynamicRiskDashboard.displayName = "DynamicRiskDashboard";

export default DynamicRiskDashboard;