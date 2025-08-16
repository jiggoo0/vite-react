import axios from "axios";

export interface DriverLicenseData {
  fullName?: string;
  idNumber?: string;
  birthDate?: string;
  address?: string;
  photo?: string;
}

const API_URL = "https://api.iapp.co.th/thai-driver-license-ocr";
const API_KEY = import.meta.env.VITE_IAPP_API_KEY;

if (!API_KEY) console.error("[DriverLicenseOCR] Missing VITE_IAPP_API_KEY");

export async function driverLicenseOcr(file: File | Blob, fields: string[] = ["fullName", "idNumber", "birthDate", "address"]): Promise<DriverLicenseData> {
  if (!API_KEY) throw new Error("OCR API Key is missing. Please set VITE_IAPP_API_KEY in your .env file.");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("fields", fields.join(","));

  try {
    const response = await axios.post<DriverLicenseData>(API_URL, formData, {
      headers: { apikey: API_KEY },
      timeout: 15000,
      validateStatus: status => status >= 200 && status < 300,
    });

    if (!response.data) throw new Error("OCR API returned empty response");

    if (import.meta.env.DEV) console.debug("[DriverLicenseOCR] API Response:", response.data);

    return response.data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "OCR Failed";
    console.error("[DriverLicenseOCR] Error:", message);
    throw new Error(message);
  }
}

export function mapDriverLicenseToForm(data: DriverLicenseData) {
  return {
    fullName: data.fullName || "",
    idNumber: data.idNumber || "",
    birthDate: data.birthDate || "",
    address: data.address || "",
  };
}