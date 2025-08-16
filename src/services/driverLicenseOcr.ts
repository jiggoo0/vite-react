// src/services/driverLicenseOcr.ts
import axios from 'axios';
import { DriverLicenseData } from '@home/SecretPage/DriverLicense/types/driverLicense';

/**
 * Thai Driver License OCR Service
 * เรียกใช้งาน OCR API เพื่ออ่านข้อมูลจากใบขับขี่
 */
const API_URL = 'https://api.iapp.co.th/thai-driver-license-ocr';
const API_KEY = import.meta.env.VITE_IAPP_API_KEY;

/**
 * ตรวจสอบว่า API Key พร้อมใช้งาน
 */
if (!API_KEY) {
  console.error('[DriverLicenseOCR] Missing VITE_IAPP_API_KEY in environment variables');
}

/**
 * ฟังก์ชันเรียก OCR API
 * @param file รูปภาพใบขับขี่ (File หรือ Blob)
 * @param fields รายการฟิลด์ที่ต้องการดึงข้อมูล (ค่า default: ["photo"])
 */
export async function driverLicenseOcr(
  file: File | Blob,
  fields: string[] = ['photo'],
): Promise<DriverLicenseData> {
  if (!API_KEY) {
    throw new Error('OCR API Key is missing. Please set VITE_IAPP_API_KEY in your .env file.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('fields', fields.join(','));

  try {
    const response = await axios.post<DriverLicenseData>(API_URL, formData, {
      headers: {
        apikey: API_KEY,
      },
      timeout: 15000, // ป้องกันการ hang เกิน 15 วิ
      validateStatus: (status) => status >= 200 && status < 300,
    });

    if (!response.data) {
      throw new Error('OCR API returned empty response');
    }

    if (import.meta.env.DEV) {
      console.debug('[DriverLicenseOCR] API Response:', response.data);
    }

    return response.data;
  } catch (error: unknown) {
    let message = 'OCR Failed. กรุณาลองใหม่อีกครั้ง';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    console.error('[DriverLicenseOCR] Error:', message);
    throw new Error(message);
  }
}
