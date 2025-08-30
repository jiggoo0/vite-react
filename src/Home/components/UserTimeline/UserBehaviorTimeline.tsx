"use client";

import { ReactNode, lazy } from "react";
import WithBlurIfUser from "@/Home/components/common/WithBlurIfUser";
import SecretHeader from "@/Home/components/SecretSection/SecretHeader";
import SecretDescription from "@/Home/components/SecretSection/SecretDescription";
import SecretActions from "@/Home/components/SecretSection/SecretActions";
import DocumentDownload from "@/Home/components/SecretSection/DocumentDownload";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";
import BlurContact from "@/Home/components/SecretSection/BlurContact/BlurContact";
import DriverLicenseForm from "@/Home/SecretPage/DriverLicense/DriverLicenseForm";
import IdCardForm from "@/Home/IdCardForm";

import { kbankMockData } from "@__mocks__/kbankIOSNotification";
import mockRegistrationData from "@__mocks__/mockRegistrationData";
import mockSalaryCertificate from "@__mocks__/mockSalaryCertificate";
import mockMedicalCertificate from "@__mocks__/mockMedicalCertificate";

// Lazy-loaded components
const RegistrationPreview = lazy(
  () => import("@/Home/SecretPage/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@/Home/SecretPage/SalaryCertificate/SalaryCertificate")
);
const MedicalCertificate = lazy(
  () => import("@/Home/SecretPage/MedicalCertificate/MedicalCertificate")
);
const SpecialBranchCertificate = lazy(
  () => import("@/Home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate")
);

// ---------------------
// Types
// ---------------------
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

// ---------------------
// Constants
// ---------------------
const BASE_DELAY = 50;

// ---------------------
// Utilities
// ---------------------
const wrapBlur = (node: ReactNode, isBlurred?: boolean, overlayMessage?: ReactNode) => (
  <WithBlurIfUser isBlurred={isBlurred} overlayMessage={overlayMessage}>
    {node}
  </WithBlurIfUser>
);

// ---------------------
// Exported function
// ---------------------
export const getLazyCards = (user: User, effectiveRole: EffectiveRole): LazyCard[] => {
  const isAdminOrManager = ["admin", "manager"].includes(effectiveRole);
  const shouldBlur = effectiveRole !== "admin";

  let delayCounter = 0;
  const nextDelay = () => (delayCounter += BASE_DELAY);

  const baseCards: LazyCard[] = [
    {
      title: "Header",
      component: <SecretHeader />,
      delay: nextDelay(),
      fallback: <div>Loading Header...</div>,
    },
    {
      title: "Description",
      component: <SecretDescription user={user} />,
      delay: nextDelay(),
      fallback: <div>Loading Description...</div>,
    },
    {
      title: "Download",
      component: <DocumentDownload />,
      delay: nextDelay(),
      fallback: <div>Loading Download...</div>,
    },
    {
      title: "Driver License Form",
      component: wrapBlur(
        <DriverLicenseForm role={effectiveRole} />,
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
      fallback: <div>Loading Driver License Form...</div>,
    },
    {
      title: "ID Card Form",
      component: wrapBlur(<IdCardForm role={effectiveRole} />, shouldBlur, "เฉพาะแอดมินเท่านั้น"),
      delay: nextDelay(),
      fallback: <div>Loading ID Card Form...</div>,
    },
    {
      title: "Registration Preview",
      component: wrapBlur(
        <RegistrationPreview {...mockRegistrationData} />,
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
      fallback: <div>Loading Registration Preview...</div>,
    },
    {
      title: "Salary Certificate",
      component: wrapBlur(
        <SalaryCertificate data={mockSalaryCertificate} />,
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
      fallback: <div>Loading Salary Certificate...</div>,
    },
    {
      title: "Medical Certificate",
      component: wrapBlur(
        <MedicalCertificate data={mockMedicalCertificate} />,
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
      fallback: <div>Loading Medical Certificate...</div>,
    },
    {
      title: "Kbank Notifications",
      component: (
        <>
          {kbankMockData.map((item) =>
            wrapBlur(
              <KbankNotificationCard key={item.id} data={item} />,
              shouldBlur,
              "เฉพาะแอดมินเท่านั้น"
            )
          )}
        </>
      ),
      delay: nextDelay(),
      fallback: <div>Loading Kbank Notifications...</div>,
    },
  ];

  if (isAdminOrManager) {
    baseCards.push({
      title: "Special Branch Certificate",
      component: <SpecialBranchCertificate />,
      delay: nextDelay(),
      fallback: <div>Loading Special Branch Certificate...</div>,
    });
  }

  const footerCards: LazyCard[] = [
    {
      title: "Contact",
      component: (
        <BlurContact imageUrl="/images/admin-contact.jpg" contactText="ติดต่อฝ่ายสนับสนุน" />
      ),
      delay: nextDelay(),
      fallback: <div>Loading Contact...</div>,
    },
    {
      title: "Footer / Actions",
      component: <SecretActions role={effectiveRole} />,
      delay: nextDelay(),
      fallback: <div>Loading Footer Actions...</div>,
    },
  ];

  return [...baseCards, ...footerCards];
};
