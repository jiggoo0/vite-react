"use client";

import { FC, useState } from "react";
import { useProtectedAuth } from "@/hooks/useProtectedAuth";
import DriverLicenseForm from "./DriverLicenseForm";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import PageSection from "@/Home/components/common/PageSection";
import LazyA4Card from "@/Home/components/common/LazyA4Card";

/**
 * Type 
 */
export interface DriverLicenseData {
  fullName: string; // -
  idNumber: string; //  / 
  dob: string; // 
  issueDate: string; // 
  expiryDate: string; // 
  address: string; // 
  photo?: string; // URL  (optional)
  licenseType: string; // 
  bloodType: string; // 
}

const DriverLicensePage: FC = () => {
  const { user, loading } = useProtectedAuth();

  // 
  const [licenseData, setLicenseData] = useState<DriverLicenseData>({
    fullName: "",
    idNumber: "",
    dob: "",
    issueDate: "",
    expiryDate: "",
    address: "",
    photo: "",
    licenseType: "",
    bloodType: "",
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!user) return null;

  const isBlurred = user.role !== "admin";

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Driver License Form Section */}
      <PageSection id="driver-license-form" title="Driver License Form">
        <LazyA4Card delay={0}>
          <DriverLicenseForm
            onChange={(data: Partial<DriverLicenseData>) =>
              setLicenseData((prev) => ({ ...prev, ...data }))
            }
          />
        </LazyA4Card>
      </PageSection>

      {/* Preview / Actions Section */}
      <PageSection id="driver-license-preview" title="Preview / Actions">
        <LazyA4Card delay={50}>
          <DriverLicensePreviewWithActions
            isBlurred={isBlurred}
            data={licenseData}
            onEdit={() => console.log("Edit clicked")}
            onDownload={() => console.log("Download clicked")}
          />
        </LazyA4Card>
      </PageSection>
    </main>
  );
};

export default DriverLicensePage;
