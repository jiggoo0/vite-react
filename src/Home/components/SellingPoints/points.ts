// src/Home/components/SellingPoints/points.ts
import { IconType } from "react-icons";
import { ShieldCheckIcon, BoltIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export interface Point {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const sellingPointsData: Point[] = [
  {
    id: 1,
    icon: ShieldCheckIcon,
    title: "ความปลอดภัยสูง",
    description: "เรารับประกันว่าข้อมูลของคุณจะถูกเก็บอย่างปลอดภัยและเป็นส่วนตัว",
  },
  {
    id: 2,
    icon: BoltIcon,
    title: "บริการ 24 ชั่วโมง",
    description: "ทีมงานของเราพร้อมให้บริการและตอบคำถามของคุณได้ตลอด 24 ชั่วโมง",
  },
  {
    id: 3,
    icon: CheckCircleIcon,
    title: "คุณภาพที่เชื่อถือได้",
    description: "เราให้บริการด้วยมาตรฐานสูงเพื่อให้ลูกค้าพึงพอใจสูงสุด",
  },
];
