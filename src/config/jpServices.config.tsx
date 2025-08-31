// src/config/jpServices.config.tsx

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText: string;
  available: boolean;
  comingSoonNote?: string;
  lineMessage?: string; // ข้อความส่ง LINE (ไม่บังคับ)
}

/**
 * บริการปัจจุบันของ JP Visual & Docs
 * ใช้สำหรับหน้า ServicesSection
 */
export const availableServices: readonly ServiceType[] = [
  {
    id: 1,
    title: "ที่ปรึกษายื่นกู้สินเชื่อ",
    description: "วิเคราะห์โปรไฟล์ จัดชุดเอกสาร และยื่นกู้ตรงธนาคาร เพิ่มโอกาสอนุมัติแบบมืออาชีพ",
    price: "4,000 – 300,000 บาท",
    image: "/images/services/service1.webp",
    altText: "ภาพประกอบบริการที่ปรึกษายื่นกู้สินเชื่อ",
    available: true,
    lineMessage: "สนใจบริการที่ปรึกษายื่นกู้สินเชื่อ กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 2,
    title: "รับดูแลเอกสารยื่นวีซ่า",
    description: "ตรวจสอบและจัดชุดเอกสาร พร้อมคำแนะนำให้ตรงตามข้อกำหนดของวีซ่าแต่ละประเทศ",
    price: "เริ่มต้น 4,000 บาท",
    image: "/images/services/service2.webp",
    altText: "ภาพประกอบบริการดูแลเอกสารยื่นวีซ่า",
    available: true,
    lineMessage: "สนใจบริการดูแลเอกสารยื่นวีซ่า กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 3,
    title: "SLIBBANK – สลิปโอนเงิน/รับเงิน",
    description:
      "สลิปสมจริงตรวจสอบได้จริง ปรับชื่อ ยอด เวลา และโลโก้ตามต้องการ ใช้ในโปรไฟล์หรือเอกสารประกอบ",
    price: "100 บาท/ใบ | 10 ใบ 500 บาท",
    image: "/images/services/service3.webp",
    altText: "ภาพประกอบบริการสลิปโอนเงิน SLIBBANK",
    available: true,
    lineMessage: "สนใจบริการสลิปโอนเงิน SLIBBANK กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 4,
    title: "แก้ไข - สร้างใหม่ - จัดหาเอกสาร",
    description:
      "รับแก้/สร้างใหม่เอกสารทุกชนิด รวมถึงจัดหาแบบเฉพาะทาง เหมาะกับผู้ต้องการงานแม่นยำและด่วน",
    price: "แก้ไข 400 บาท / สร้างใหม่ 600 บาท",
    image: "/images/services/service4.webp",
    altText: "ภาพประกอบบริการเอกสารเฉพาะทาง",
    available: true,
    lineMessage: "สนใจบริการแก้ไขหรือสร้างเอกสาร กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 5,
    title: "ผลิตชิ้นงานจริง บัตรแข็ง / อ่อน",
    description: "ผลิตบัตรจริงพร้อมลายน้ำ QR และความปลอดภัยสูง ส่งตรงถึงมือพร้อมซอง",
    price: "เริ่มต้น 4,000 บาท",
    image: "/images/services/service5.webp",
    altText: "ภาพประกอบบริการผลิตบัตรแข็งและบัตรอ่อน",
    available: true,
    lineMessage: "สนใจบริการผลิตบัตร กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 6,
    title: "ออกแบบโลโก้ / แบนเนอร์ / ทีม",
    description: "ออกแบบภาพลักษณ์แบรนด์คุณภาพสูง พร้อมไฟล์ใช้งานครบ รองรับทุกแพลตฟอร์ม",
    price: "เริ่มต้น 300 บาท",
    image: "/images/services/service6.webp",
    altText: "ภาพประกอบบริการออกแบบโลโก้และทีม",
    available: true,
    lineMessage: "สนใจบริการออกแบบโลโก้และแบนเนอร์ กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 7,
    title: "ดูแลการตลาดครบวงจร + ระบบหลังบ้าน",
    description: "วางกลยุทธ์คอนเทนต์ ยิงแอด พร้อมติดตั้งระบบตอบแชทอัตโนมัติและรายงานผลลัพธ์",
    price: "5,000 – 500,000 บาท",
    image: "/images/services/service7.webp",
    altText: "ภาพประกอบบริการดูแลการตลาดครบวงจร",
    available: true,
    lineMessage: "สนใจบริการดูแลการตลาดครบวงจร กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 8,
    title: "โครงการ “ให้น้องได้พักผ่อน” – AI Matching",
    description:
      "ระบบจัดการกลุ่มปิด + จับคู่งานอัตโนมัติ + ดูแลลูกค้าผ่าน LINE/Telegram พร้อม AI หลังบ้าน",
    price: "เริ่มต้น 4,000 บาท",
    image: "/images/services/service8.webp",
    altText: "ภาพประกอบบริการระบบดูแลลูกค้าภายใน",
    available: true,
    lineMessage: "สนใจโครงการ AI Matching กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
  {
    id: 9,
    title: "สร้างภาพลักษณ์ / ทำลายภาพลักษณ์",
    description: "รีแบรนด์ภาพบวกหรือลบทั้งบุคคลและองค์กรอย่างมืออาชีพ (ไม่ละเมิดกฎหมาย)",
    price: "เริ่มต้น 5,000 บาท",
    image: "/images/services/service9.webp",
    altText: "ภาพประกอบบริการสร้างหรือปรับภาพลักษณ์",
    available: true,
    lineMessage: "สนใจบริการสร้างภาพลักษณ์ กรุณาติดต่อกลับด้วยครับ/ค่ะ",
  },
] as const;

/**
 * บริการที่ยังไม่เปิดตัว
 * ใช้สำหรับแสดง Coming Soon
 */
export const upcomingServices: readonly ServiceType[] = [
  {
    id: 10,
    title: "บริการใหม่กำลังจะมา",
    description: "เตรียมเปิดตัวบริการใหม่ ที่ตอบโจทย์กลุ่มเป้าหมายมากยิ่งขึ้น",
    price: "-",
    image: "/images/services/service10.webp",
    altText: "ภาพประกอบบริการใหม่กำลังเปิดตัว",
    available: false,
    comingSoonNote: "เปิดตัวเร็ว ๆ นี้",
  },
  {
    id: 11,
    title: "Coming Soon",
    description: "กำลังอัปเดตบริการใหม่ โปรดติดตามเร็ว ๆ นี้",
    price: "-",
    image: "/images/services/service11.webp",
    altText: "ภาพประกอบบริการใหม่ Coming Soon",
    available: false,
    comingSoonNote: "ติดตามเร็ว ๆ นี้",
  },
] as const;
