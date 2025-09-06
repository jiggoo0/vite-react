"use client";

import { ReactNode, ReactElement, lazy, Suspense } from "react";
import WithBlurIfUser from "@/Home/components/common/WithBlurIfUser";
import KbankNotificationCard from "@/Home/components/SecretSection/KbankNotificationCard";
import DriverLicenseForm from "@/Home/AdminTools/DriverLicense/DriverLicenseForm";
import IdCardForm from "@/Home/IdCardForm";
import { kbankMockData } from "@__mocks__/kbankIOSNotification";
import mockRegistrationData from "@__mocks__/mockRegistrationData";
import mockSalaryCertificate from "@__mocks__/mockSalaryCertificate";
import mockMedicalCertificate from "@__mocks__/mockMedicalCertificate";

// Lazy-loaded components
const RegistrationPreview = lazy(
  () => import("@/Home/AdminTools/RegistrationPreview/RegistrationPreview")
);
const SalaryCertificate = lazy(
  () => import("@/Home/AdminTools/SalaryCertificate/SalaryCertificate")
);
const MedicalCertificate = lazy(
  () => import("@/Home/AdminTools/MedicalCertificate/MedicalCertificate")
);
const SpecialBranchCertificate = lazy(
  () => import("@/Home/AdminTools/SpecialBranchCertificate/SpecialBranchCertificate")
);

export type EffectiveRole = "admin" | "user" | "manager";

export interface LazyCard {
  title: string;
  component: ReactElement;
  delay: number;
  fallback?: ReactNode;
}

interface User {
  username: string;
  role: EffectiveRole;
}

const BASE_DELAY = 50;

/** Wrap a component with blur overlay if the user role requires it */
const wrapBlur = (
  node: ReactNode,
  isBlurred?: boolean,
  overlayMessage?: ReactNode,
  key?: string | number
): ReactElement => (
  <WithBlurIfUser key={key} isBlurred={isBlurred} overlayMessage={overlayMessage}>
    {node}
  </WithBlurIfUser>
);

/** Wrap a component with Suspense fallback */
const withFallback = (node: ReactNode, fallback?: ReactNode): ReactElement => (
  <Suspense fallback={fallback || <div className="text-center py-6 text-gray-500">Loading...</div>}>
    {node}
  </Suspense>
);

/** Generate the list of lazy-loaded cards based on user role */
export const getLazyCards = (user: User, effectiveRole: EffectiveRole): LazyCard[] => {
  const isAdminOrManager = ["admin", "manager"].includes(effectiveRole);
  const shouldBlur = effectiveRole !== "admin";

  let delayCounter = 0;
  const nextDelay = () => (delayCounter += BASE_DELAY);

  const baseCards: LazyCard[] = [
    {
      title: "Driver License Form",
      component: wrapBlur(
        <DriverLicenseForm role={effectiveRole} />,
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
    },
    {
      title: "ID Card Form",
      component: wrapBlur(<IdCardForm role={effectiveRole} />, shouldBlur, "เฉพาะแอดมินเท่านั้น"),
      delay: nextDelay(),
    },
    {
      title: "Registration Preview",
      component: wrapBlur(
        withFallback(<RegistrationPreview {...mockRegistrationData} />),
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
    },
    {
      title: "Salary Certificate",
      component: wrapBlur(
        withFallback(<SalaryCertificate data={mockSalaryCertificate} />),
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
    },
    {
      title: "Medical Certificate",
      component: wrapBlur(
        withFallback(<MedicalCertificate data={mockMedicalCertificate} />),
        shouldBlur,
        "เฉพาะแอดมินเท่านั้น"
      ),
      delay: nextDelay(),
    },
    {
      title: "Kbank Notifications",
      component: (
        <>
          {kbankMockData.map((item) =>
            wrapBlur(
              <KbankNotificationCard data={item} />,
              shouldBlur,
              "เฉพาะแอดมินเท่านั้น",
              item.id
            )
          )}
        </>
      ),
      delay: nextDelay(),
    },
  ];

  if (isAdminOrManager) {
    baseCards.push({
      title: "Special Branch Certificate",
      component: withFallback(
        <SpecialBranchCertificate />,
        <div className="text-center py-6 text-gray-500">Loading Special Branch Certificate...</div>
      ),
      delay: nextDelay(),
    });
  }

  return baseCards;
};
