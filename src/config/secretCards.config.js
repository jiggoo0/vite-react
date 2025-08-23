"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy } from "react";
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
// Lazy-loaded components
const RegistrationPreview = lazy(() => import("@home/SecretPage/RegistrationPreview/RegistrationPreview"));
const SalaryCertificate = lazy(() => import("@home/SecretPage/SalaryCertificate/SalaryCertificate"));
const MedicalCertificate = lazy(() => import("@home/SecretPage/MedicalCertificate/MedicalCertificate"));
const SpecialBranchCertificate = lazy(() => import("@home/SecretPage/SpecialBranchCertificate/SpecialBranchCertificate"));
/**
 * ฟังก์ชันสร้าง LazyCard สำหรับ SecretPage
 * @param user ข้อมูลผู้ใช้งาน
 * @param effectiveRole สิทธิ์การเข้าถึง
 */
export const getLazyCards = (user, effectiveRole) => {
    const isAdminOrManager = effectiveRole === "admin" || effectiveRole === "manager";
    const shouldBlur = effectiveRole !== "admin";
    const lazyCards = [
        // Header & Description
        { component: _jsx(SecretHeader, {}), delay: 0 },
        { component: _jsx(SecretDescription, { user: { ...user, role: effectiveRole } }), delay: 50 },
        // Document Download
        { component: _jsx(DocumentDownload, {}), delay: 100 },
        // Driver License Form
        { component: _jsx(DriverLicenseFormPage, {}), delay: 150, isBlurred: shouldBlur },
        // Registration Preview
        {
            component: _jsx(RegistrationPreview, { ...mockRegistrationData }),
            delay: 200,
            isBlurred: shouldBlur,
            fallback: _jsx("div", { children: "Loading Registration..." }),
        },
        // Salary Certificate
        {
            component: _jsx(SalaryCertificate, { data: mockSalaryCertificate }),
            delay: 300,
            isBlurred: shouldBlur,
            fallback: _jsx("div", { children: "Loading Salary Certificate..." }),
        },
        // Medical Certificate
        {
            component: _jsx(MedicalCertificate, { data: mockMedicalCertificate }),
            delay: 400,
            isBlurred: shouldBlur,
            fallback: _jsx("div", { children: "Loading Medical Certificate..." }),
        },
        // ID Card Form
        { component: _jsx(IdCardFormWithOCR, {}), delay: 500, isBlurred: shouldBlur },
        // Kbank Notifications
        {
            component: (_jsx(_Fragment, { children: kbankMockData.map((item) => (_jsx(KbankNotificationCard, { data: item }, item.id))) })),
            delay: 600,
            isBlurred: shouldBlur,
        },
    ];
    // Special Branch Certificate สำหรับ admin/manager
    if (isAdminOrManager) {
        lazyCards.push({
            component: _jsx(SpecialBranchCertificate, {}),
            delay: 650,
            fallback: _jsx("div", { children: "Loading Special Branch..." }),
        });
    }
    // Footer & Actions
    lazyCards.push({
        component: _jsx(BlurContact, { imageUrl: "/images/admin-contact.jpg", contactText: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1D\u0E48\u0E32\u0E22\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19" }),
        delay: 700,
    }, {
        component: _jsx(SecretActions, { role: effectiveRole }),
        delay: 750,
    });
    return lazyCards;
};
