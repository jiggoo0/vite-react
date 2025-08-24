// src/Home/types/dynamicRisk.ts

export interface RiskItem {
  หมวด: string; // ชื่อหมวดความเสี่ยง
  คะแนน: number; // คะแนนความเสี่ยง 0-100
  คำอธิบาย: string; // Remark / คำอธิบาย
}

// Mock data สำหรับทดสอบ DynamicRiskDashboard
export const mockRiskData: RiskItem[] = [
  { หมวด: "การเงิน", คะแนน: 75, คำอธิบาย: "ความเสี่ยงปานกลาง" },
  { หมวด: "การปฏิบัติตามกฎระเบียบ", คะแนน: 90, คำอธิบาย: "ความเสี่ยงสูง" },
  { หมวด: "การดำเนินงาน", คะแนน: 40, คำอธิบาย: "ความเสี่ยงต่ำ" },
];
