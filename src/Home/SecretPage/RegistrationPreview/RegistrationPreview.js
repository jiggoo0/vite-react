"use client";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const defaultText = "—";
const withFallback = (value) => value?.trim() || defaultText;
const RegistrationPreview = ({ businessName, ownerName, registrationNumber, address = {}, issuedDate, registrarPosition, registrarName, }) => {
    const ref = useRef(null);
    const handleDownloadPdf = async () => {
        if (!ref.current)
            return;
        const canvas = await html2canvas(ref.current, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#fff",
        });
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: [(canvas.width * 72) / 96, (canvas.height * 72) / 96],
        });
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, (canvas.width * 72) / 96, (canvas.height * 72) / 96);
        pdf.save("registration-preview.pdf");
    };
    return (_jsxs(_Fragment, { children: [_jsxs("section", { ref: ref, className: "relative mx-auto w-full max-w-[800px] rounded-md border border-gray-400 bg-white p-12 shadow print:shadow-none print:border print:m-0 print:p-8", style: {
                    fontFamily: '"THSarabunNew", sans-serif',
                    lineHeight: 1.8,
                    fontSize: "18pt",
                    minHeight: 1200,
                }, children: [_jsxs("div", { className: "absolute left-12 top-8 text-[14pt] leading-snug", children: [_jsxs("p", { className: "mb-2", children: ["\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 ", withFallback(registrationNumber)] }), _jsxs("p", { children: ["\u0E04\u0E33\u0E02\u0E2D\u0E17\u0E35\u0E48", " ", _jsx("span", { className: "inline-block h-[1.7em] min-w-[160px] border-b border-gray-300" })] })] }), _jsx("div", { className: "absolute right-12 top-8 text-right text-[14pt]", children: _jsx("p", { children: "\u0E41\u0E1A\u0E1A \u0E1E\u0E04. 0403" }) }), _jsx("div", { className: "mb-6 mt-24 flex justify-center", children: _jsx("img", { src: "/fonts/krut.webp", alt: "\u0E15\u0E23\u0E32\u0E04\u0E23\u0E38\u0E11", className: "h-[100px] w-[100px] object-contain", crossOrigin: "anonymous", draggable: false }) }), _jsxs("div", { className: "mb-6 text-center", children: [_jsxs("p", { className: "text-[22pt] font-bold leading-none", children: ["\u0E01\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 ", _jsx("br", {}), " \u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C"] }), _jsx("p", { className: "mt-2 text-[28pt] font-bold leading-none underline decoration-[1.5px] underline-offset-4", children: "\u0E43\u0E1A\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C" }), _jsx("p", { className: "mt-4 text-[20pt]", children: "\u0E43\u0E1A\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E19\u0E35\u0E49\u0E2D\u0E2D\u0E01\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E48\u0E32" })] }), _jsxs("div", { className: "mt-6 space-y-4 text-center", children: [_jsx("p", { className: "text-[20pt]", children: withFallback(ownerName) }), _jsx("p", { children: "\u0E44\u0E14\u0E49\u0E08\u0E14\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C \u0E15\u0E32\u0E21\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E1A\u0E31\u0E0D\u0E0D\u0E31\u0E15\u0E34\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C \u0E1E.\u0E28. 2499" }), _jsxs("p", { children: ["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", withFallback(issuedDate)] }), _jsx("p", { className: "mt-8", children: "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E01\u0E34\u0E08" }), _jsx("p", { className: "text-[20pt] font-bold", children: withFallback(businessName) }), _jsx("p", { className: "mt-6", children: "\u0E40\u0E02\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E42\u0E23\u0E21\u0E31\u0E19" }), _jsx("p", { children: withFallback(businessName?.toUpperCase()) }), _jsx("p", { className: "mt-6 font-semibold", children: "\u0E17\u0E35\u0E48\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23" }), _jsxs("p", { className: "mx-auto max-w-[720px] indent-12 text-left leading-relaxed", children: ["\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 ", withFallback(address.houseNumber), " \u0E2B\u0E21\u0E39\u0E48\u0E17\u0E35\u0E48 ", withFallback(address.villageNo), " ", "\u0E15\u0E23\u0E2D\u0E01/\u0E0B\u0E2D\u0E22 ", withFallback(address.alley), " \u0E15\u0E33\u0E1A\u0E25/\u0E41\u0E02\u0E27\u0E07 ", withFallback(address.subDistrict), " ", "\u0E2D\u0E33\u0E40\u0E20\u0E2D/\u0E40\u0E02\u0E15 ", withFallback(address.district), " \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14 ", withFallback(address.province)] })] }), _jsxs("div", { className: "mx-auto mt-32 max-w-[720px] space-y-6 pr-10 text-right text-lg", children: [_jsxs("p", { children: ["\u0E2D\u0E2D\u0E01\u0E43\u0E2B\u0E49 \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", withFallback(issuedDate)] }), _jsxs("p", { children: ["\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 ", withFallback(registrarPosition)] }), _jsxs("div", { className: "mt-20", children: [_jsx("p", { className: "inline-block min-w-[250px] text-center text-[20pt] font-bold underline decoration-dotted", children: withFallback(registrarName) }), _jsx("p", { className: "mt-2", children: "\u0E19\u0E32\u0E22\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C" })] })] })] }), _jsx("div", { className: "mt-6 text-center", children: _jsx("button", { className: "btn btn-primary", onClick: handleDownloadPdf, children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF" }) })] }));
};
export default RegistrationPreview;
