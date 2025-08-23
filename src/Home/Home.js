"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import PageSection from "./components/common/PageSection";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SellingPoints from "./components/SellingPoints/SellingPoints";
import { ServicesSection } from "./components/Services";
import FeatureList from "./components/Services/FeatureList";
import FeatureAwards from "./components/Services/FeatureAwards";
import UserBoard from "./components/UserBoard/UserBoard";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";
import CaseStudyRedacted from "./components/Portfolio/CaseStudyRedacted";
import ComplianceFAQ from "./components/Services/ComplianceFAQ";
import { UserBoard as UserBoardDataReadonly } from "@/data/UserBoard";
import { caseStudies } from "@/data/caseStudies";
import TrustDashboardDemo from "./components/UserBoard/TrustDashboardDemo";
// Lazy-loaded components
const PortfolioGallery = lazy(() => import("./components/Portfolio/PortfolioGallery"));
const SupportFAQ = lazy(() => import("./components/Portfolio/SupportFAQ"));
const Home = () => {
    const userBoardData = [...UserBoardDataReadonly];
    /** Suspense wrapper */
    const renderSuspense = (Component, message) => (_jsx(Suspense, { fallback: _jsx("div", { className: "text-center py-16 animate-pulse", children: message }), children: Component }));
    return (_jsxs("main", { className: "flex flex-col scroll-smooth bg-base-200 text-base-content min-h-screen", children: [_jsx(PageSection, { id: "hero", title: "Hero Section", bgClass: "bg-base-100", children: _jsx(Hero, {}) }), _jsx(PageSection, { id: "about", title: "About Us", bgClass: "bg-base-200", children: _jsx(About, {}) }), _jsx(PageSection, { id: "selling-points", title: "Selling Points", bgClass: "bg-base-100", children: _jsx(SellingPoints, {}) }), _jsxs(PageSection, { id: "features-trust", title: "Features & Trust", bgClass: "bg-base-200", children: [_jsxs("div", { className: "md:flex md:space-x-12 space-y-12 md:space-y-0", children: [_jsx(FeatureList, { className: "md:flex-1" }), _jsx(FeatureAwards, { className: "md:flex-1" })] }), _jsx("div", { className: "mt-12", children: _jsx(TrustDashboardDemo, {}) })] }), _jsx(PageSection, { id: "services", title: "Services", bgClass: "bg-base-100", children: _jsx(ServicesSection, {}) }), _jsx(PageSection, { id: "case-studies", title: "Case Studies", bgClass: "bg-base-100", children: _jsx(CaseStudyRedacted, { className: "bg-base-100", items: caseStudies }) }), _jsx(PageSection, { id: "user-board", title: "User Board", bgClass: "bg-base-200", children: _jsx(UserBoard, { data: userBoardData }) }), _jsx(PageSection, { id: "testimonials", title: "Testimonials", bgClass: "bg-base-100", children: _jsx(TestimonialSlider, {}) }), _jsx(PageSection, { id: "portfolio", title: "Portfolio Gallery", bgClass: "bg-base-100", children: renderSuspense(_jsx(PortfolioGallery, {}), "Loading portfolio...") }), _jsx(PageSection, { id: "compliance-faq", title: "Compliance FAQ", bgClass: "bg-base-100", children: _jsx(ComplianceFAQ, {}) }), _jsx(PageSection, { id: "faq", title: "FAQ", bgClass: "bg-base-200", children: renderSuspense(_jsx(SupportFAQ, {}), "Loading FAQ...") })] }));
};
Home.displayName = "Home";
export default Home;
