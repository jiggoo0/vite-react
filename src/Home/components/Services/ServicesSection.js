import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import SectionContainer from "@/utils/common/SectionContainer";
const ServicesSection = () => {
    // แยกบริการที่พร้อมใช้งาน
    const availableServices = useMemo(() => jpServices.filter((service) => service.available), []);
    // แยกบริการที่กำลังจะมา
    const comingSoonServices = useMemo(() => jpServices.filter((service) => !service.available), []);
    return (_jsxs(SectionContainer, { as: "section", "aria-labelledby": "services-title", className: "py-12 md:py-16", children: [_jsxs("header", { className: "mb-12 text-center", children: [_jsx("h2", { id: "services-title", className: "text-3xl md:text-4xl font-bold text-primary", children: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32" }), _jsx("p", { className: "mt-3 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto", children: "\u0E40\u0E23\u0E32\u0E21\u0E35\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E14\u0E49\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E31\u0E49\u0E07 Visual & Documentation" })] }), _jsxs("ul", { role: "list", className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", "aria-label": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32", children: [availableServices.map((service) => (_jsx("li", { children: _jsx(ServiceCard, { service: service }) }, service.id))), comingSoonServices.map((service) => (_jsx("li", { children: _jsx(ComingSoonServiceCard, { service: service }) }, service.id)))] })] }));
};
export default ServicesSection;
