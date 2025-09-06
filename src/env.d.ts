/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string; // URL ของ API
  readonly VITE_APP_NAME?: string; // ชื่อแอป
  readonly VITE_APP_ENV?: "development" | "production" | "staging"; // สภาพแวดล้อม
  readonly VITE_FEATURE_FLAG?: "true" | "false"; // ฟีเจอร์ toggle

  // ตัวอย่างเพิ่มเติมจากโปรเจกต์ของคุณ
  readonly VITE_APP_VERSION?: string; // เวอร์ชันแอป
  readonly VITE_APP_BUILD_TIME?: string; // เวลาสร้าง build
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
