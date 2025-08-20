"use client";

// เปลี่ยนจาก named import → default import
import mockDriverLicenseDataRaw from "@home/SecretPage/DriverLicense/mockDriverLicenseData";
import type { DriverLicenseData } from "@home/SecretPage/DriverLicense/types/driverLicense";

// กำหนด type ให้ตรงกับ DriverLicenseData
export const mockDriverLicenseData: DriverLicenseData = mockDriverLicenseDataRaw;

export default mockDriverLicenseData;