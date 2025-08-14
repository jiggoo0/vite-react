/// <reference types="vite/client" />

// กำหนด type สำหรับ environment variables ของ Vite
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  // เพิ่มตัวแปร env ของคุณที่นี่
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
