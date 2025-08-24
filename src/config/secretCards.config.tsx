"use client";

import { FC, ReactNode, lazy } from "react";
import IdCardForm from "@/Home/IdCardForm";
import SecretHeader from "@home/components/SecretSection/SecretHeader";
import SecretDescription from "@home/components/SecretSection/SecretDescription";
import SecretActions from "@home/components/SecretSection/SecretActions";
import DocumentDownload from "@home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseForm from "@home/SecretPage/DriverLicense/DriverLicenseForm";
import WithBlurIfUser from "@home/components/common/WithBlurIfUser";

// Mock Data
import mockRegistrationData from "@__mocks__/mockRegistrationData";
import mockSalaryCertificate from "@__mocks__/mockSalaryCertificate";
import mockMedicalCertificate from "@__mocks__/mockMedicalCertificate";
import { kbankMockData } from "@__mocks__/kbankIOSNotification";

// Lazy-loaded Components
const RegistrationPreview = lazy(() => import("@home/SecretPage/RegistrationPreview/RegistrationPreview"));
const SalaryCertificate = lazy(() => import("@home/SecretPage/SalaryCertificate/SalaryCertificate"));
const MedicalCertificate = lazy(() => import("@home/SecretPage/MedicalCertificate/MedicalCertificate"));
const SpecialBranchCertificate = lazy(() => import("@home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate"));

// Types
export type EffectiveRole = "admin" | "user" | "manager";

export interface LazyCard {
  title: string;
  component: ReactNode;
  delay: number;
  fallback?: ReactNode;
}

interface User {
  username: string;
  role: EffectiveRole;
}

// Constants
const BASE_DELAY = 50;

// Utils: Wrap a component with blur overlay if necessary
const wrapBlur = (node: ReactNode, isBlurred?: boolean, overlayMessage?: ReactNode) => (
  <WithBlurIfUser isBlurred={isBlurred} overlayMessage={overlayMessage}>
    {node}
  </WithBlurIfUser>
);

// Main function to get lazy-loaded cards
export const getLazyCards = (user: User, effectiveRole: EffectiveRole): LazyCard[] => {
  const isAdminOrManager = ["admin", "manager"].includes(effectiveRole);
  const shouldBlur = effectiveRole !== "admin";

  let delayCounter = 0;
  const nextDelay = () => (delayCounter += BASE_DELAY);

  const baseCards: LazyCard[] = [
    { title: "Header", component: <SecretHeader />, delay: nextDelay() },
    { title: "Description", component: <SecretDescription user={user} />, delay: nextDelay() },
    { title: "Download", component: <DocumentDownload />, delay: nextDelay() },
    { title: "Driver License Form", component: wrapBlur(<DriverLicenseForm />, shouldBlur, "เฉพาะแอดมินเท่านั้น"), delay: nextDelay() },
    { title: "ID Card Form", component: wrapBlur(<IdCardForm />, shouldBlur, "เฉพาะแอดมินเท่านั้น"), delay: nextDelay(), fallback: <div>Loading ID Card Form...</div> },
    { title: "Registration Preview", component: wrapBlur(<RegistrationPreview {...mockRegistrationData} />, shouldBlur), delay: nextDelay(), fallback: <div>Loading Registration...</div> },
    { title: "Salary Certificate", component: wrapBlur(<SalaryCertificate data={mockSalaryCertificate} />, shouldBlur), delay: nextDelay(), fallback: <div>Loading Salary Certificate...</div> },
    { title: "Medical Certificate", component: wrapBlur(<MedicalCertificate data={mockMedicalCertificate} />, shouldBlur), delay: nextDelay(), fallback: <div>Loading Medical Certificate...</div> },
    {
      title: "Kbank Notifications",
      component: wrapBlur(
        <>
          {kbankMockData.map(item => (
            <KbankNotificationCard key={item.id} data={item} />
          ))}
        </>,
        shouldBlur
      ),
      delay: nextDelay(),
    },
  ];

  if (isAdminOrManager) {
    baseCards.push({
      title: "Special Branch Certificate",
      component: <SpecialBranchCertificate />,
      delay: nextDelay(),
      fallback: <div>Loading Special Branch...</div>,
    });
  }

  const footerCards: LazyCard[] = [
    { title: "Contact", component: <BlurContact imageUrl="/images/admin-contact.jpg" contactText="ติดต่อฝ่ายสนับสนุน" />, delay: nextDelay() },
    { title: "Footer / Actions", component: <SecretActions role={effectiveRole} />, delay: nextDelay() },
  ];

  return [...baseCards, ...footerCards];
};