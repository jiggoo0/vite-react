export type PortfolioItem = {
  id: string;
  title: string;
  category: 'Website' | 'Dashboard' | 'Landing Page' | 'Mobile App' | 'Graphic';
  image: string;
  description?: string;
  link?: string;
};

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: '1',
    title: 'GovHub Corporate Website',
    category: 'Website',
    image: '/assets/portfolio/portfolio1.webp',
    description:
      'เว็บไซต์หลักของหน่วยงานภาครัฐ สร้างความเชื่อมั่นต่อประชาชน รองรับมือถือและมาตรฐาน WCAG 2.1 AA',
    link: 'https://govhub.example.com',
  },
  {
    id: '2',
    title: 'Policy Dashboard UI',
    category: 'Dashboard',
    image: '/assets/portfolio/portfolio2.webp',
    description: 'แดชบอร์ดแสดงนโยบายสำคัญแบบ Interactive สำหรับหน่วยงานนโยบายแห่งชาติ',
    link: 'https://dashboard.example.com',
  },
  {
    id: '3',
    title: 'Thai Assembly Event Page',
    category: 'Landing Page',
    image: '/assets/portfolio/portfolio3.webp',
    description: 'หน้าแลนดิ้งโปรโมทกิจกรรมและวาระของรัฐสภา รองรับ SEO และระบบลงทะเบียนออนไลน์',
    link: 'https://assembly-event.example.com',
  },
  {
    id: '4',
    title: 'E-Government Mobile App',
    category: 'Mobile App',
    image: '/assets/portfolio/portfolio4.webp',
    description: 'แอพมือถือเพื่อบริการประชาชน เช่น แจ้งเรื่อง ร้องเรียน และติดตามเอกสารราชการ',
    link: 'https://play.google.com/store/apps/details?id=egov.app',
  },
  {
    id: '5',
    title: 'Sapasathan Visual Showcase',
    category: 'Graphic',
    image: '/assets/portfolio/portfolio5.webp',
    description: 'โปสเตอร์ประชาสัมพันธ์รัฐสภาใหม่ (สัปปายะสภาสถาน) สไตล์โมเดิร์นและมินิมอล',
    link: 'https://drive.google.com/sapasathan-visual',
  },
] as const;
