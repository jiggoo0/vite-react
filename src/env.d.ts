/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_APP_NAME?: string;
  readonly VITE_APP_ENV?: "development" | "production" | "staging";
  readonly VITE_FEATURE_FLAG?: "true" | "false";
  // เพิ่ม env variable ที่คุณใช้ตรงนี้
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
