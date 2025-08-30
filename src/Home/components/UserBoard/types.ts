// src/Home/components/UserBoard/types.ts
import { ReactElement } from "react";

/** 📊 Metric ข้อมูลสรุป */
export interface IMetric {
  key: string;
  label: string;
  value: string;
}

/** 🛡️ Badge แสดงความน่าเชื่อถือ */
export interface IBadge {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}

/** 🔹 Stat จำนวนสถิติ */
export interface IStat {
  key: string;
  label: string;
  count: number;
}
