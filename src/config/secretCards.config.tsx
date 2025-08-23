"use client";

import { ReactNode, lazy } from "react";
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseFormPage from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardFormWithOCR from "@home/components/Forms/IdCardFormWithOCR";

import mockRegistrationData from "@__mocks__/mockRegistrationData";
import mockSalaryCertificate from "@__mocks__/mockSalaryCertificate";
import mockMedicalCertificate from "@__mocks__/mockMedicalCertificate";
import { kbankMockData } from "@__mocks__/kbankIOSNotification";

const RegistrationPreview = lazy(() => import("@home/SecretPage/RegistrationPreview/RegistrationPreview"));
const SalaryCertificate = lazy(() => import("@home/SecretPage/SalaryCertificate/SalaryCertificate"));
const MedicalCertificate = lazy(() => import("@home/SecretPage/MedicalCertificate/MedicalCertificate"));
const SpecialBranchCertificate = lazy(() => import("@home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate"));

export type EffectiveRole = "admin" | "user" | "manager";

export interface LazyCard {
  component: ReactNode;
  delay: number;
  isBlurred?: boolean;
  fallback?: ReactNode;
}

interface User {
  username: string;
  role: string;
}

const BASE_DELAY = 50;

export const getLazyCards = (user: User, effectiveRole: EffectiveRole): LazyCard[] => {
  const isAdminOrManager = effectiveRole === "admin" || effectiveRole === "manager";
  const shouldBlur = effectiveRole !== "admin";

  let delayCounter = 0;
  const nextDelay = () => (delayCounter += BASE_DELAY);

  const lazyCards: LazyCard[] = [
    { component: <SecretHeader />, delay: nextDelay() },
    { component: <SecretDescription user={{ ...user, role: effectiveRole }} />, delay: nextDelay() },
    { component: <DocumentDownload />, delay: nextDelay() },
    { component: <DriverLicenseFormPage />, delay: nextDelay(), isBlurred: shouldBlur },
    { component: <RegistrationPreview {...mockRegistrationData} />, delay: nextDelay(), isBlurred: shouldBlur, fallback: <div>Loading Registration...</div> },
    { component: <SalaryCertificate data={mockSalaryCertificate} />, delay: nextDelay(), isBlurred: shouldBlur, fallback: <div>Loading Salary Certificate...</div> },
    { component: <MedicalCertificate data={mockMedicalCertificate} />, delay: nextDelay(), isBlurred: shouldBlur, fallback: <div>Loading Medical Certificate...</div> },
    { component: <IdCardFormWithOCR />, delay: nextDelay(), isBlurred: shouldBlur },
    { component: (
        <>
          {kbankMockData.map(item => (
            <KbankNotificationCard key={item.id} data={item} />
          ))}
        </>
      ), 
      delay: nextDelay(), 
      isBlurred: shouldBlur 
    },
  ];

  if (isAdminOrManager) {
    lazyCards.push({ component: <SpecialBranchCertificate />, delay: nextDelay(), fallback: <div>Loading Special Branch...</div> });
  }

  lazyCards.push(
    { component: <BlurContact imageUrl="/images/admin-contact.jpg" contactText="ติดต่อฝ่ายสนับสนุน" />, delay: nextDelay() },
    { component: <SecretActions role={effectiveRole} />, delay: nextDelay() }
  );

  return lazyCards;
};