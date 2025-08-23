"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import { useProtectedAuth } from "@hooks/useProtectedAuth";
import mockCertificateData from "@/__mocks__/specialBranchCertificate";
const InfoRow = memo(({ label, value }) => (_jsxs("p", { className: "flex justify-between text-gray-700", children: [_jsxs("span", { className: "font-medium", children: [label, ":"] }), _jsx("span", { children: value })] })));
InfoRow.displayName = "InfoRow";
const SpecialBranchCertificate = () => {
    const { user } = useProtectedAuth();
    if (!user)
        return null;
    const effectiveRole = user.role === "temp" ? "user" : user.role;
    const isAuthorized = effectiveRole === "admin" || effectiveRole === "manager";
    if (!isAuthorized) {
        return (_jsx("p", { className: "text-center text-red-500 font-medium", children: "\u274C \u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E35\u0E49" }));
    }
    const data = mockCertificateData;
    return (_jsxs("div", { className: clsx("relative overflow-hidden rounded-xl bg-white p-6 shadow-md space-y-6 animate-fadeInUp"), children: [_jsx("div", { className: "absolute inset-0 opacity-20", style: {
                    backgroundImage: "url('/images/certificate-bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                } }), _jsxs("div", { className: "relative z-10 flex flex-col items-center space-y-4", children: [_jsx("img", { src: "/assets/images/krut.webp", alt: "Royal Thai Police Emblem", className: "h-28 w-auto object-contain" }), _jsx("h2", { className: "text-3xl font-bold text-center", children: "Special Branch Certificate" }), _jsxs("div", { className: "w-full max-w-md space-y-2 text-base leading-relaxed", children: [_jsx(InfoRow, { label: "Authority", value: data.authority }), _jsx(InfoRow, { label: "Location", value: data.location }), _jsx(InfoRow, { label: "Date", value: data.date }), _jsx(InfoRow, { label: "Recipient", value: data.recipient }), _jsx(InfoRow, { label: "Certified Name", value: data.certifyName }), _jsx(InfoRow, { label: "Note", value: data.note }), _jsx(InfoRow, { label: "Passport No", value: data.passportNo }), _jsx(InfoRow, { label: "Behavior Statement", value: data.behaviorStatement }), _jsx(InfoRow, { label: "Officer", value: `${data.officerRank} ${data.officerName}` }), _jsx(InfoRow, { label: "Document No", value: data.docNo }), _jsx(InfoRow, { label: "File No", value: data.fileNo })] }), _jsx("p", { className: "text-sm text-red-500 italic text-center", children: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07 \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E23\u0E35\u0E17\u0E31\u0E0A \u0E2B\u0E32\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E43\u0E2B\u0E49\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E17\u0E31\u0E01\u0E41\u0E0A\u0E17\u0E41\u0E08\u0E49\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E23\u0E35\u0E17\u0E31\u0E0A\u0E41\u0E25\u0E49\u0E27\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E01\u0E23\u0E13\u0E35" }), _jsx("img", { src: "/images/test.jpg", alt: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A", className: "h-[150px] w-auto object-contain rounded-md shadow-sm" })] })] }));
};
SpecialBranchCertificate.displayName = "SpecialBranchCertificate";
export default memo(SpecialBranchCertificate);
