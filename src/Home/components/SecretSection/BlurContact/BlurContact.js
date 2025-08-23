"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "./motionVariants";
const DEFAULT_IMAGES = [
    "/images/contact/bg1.jpg",
    "/images/contact/bg2.jpg",
    "/images/contact/bg3.jpg",
    "/images/contact/bg4.jpg",
    "/images/contact/bg5.jpg",
    "/images/contact/bg6.jpg",
];
const BlurContact = ({ imageUrl, contactText = "กรอกรหัส Security Key เพื่อยืนยันความปลอดภัย", onSubmitSecurityKey, installPassword = "สอบถามadmin", }) => {
    const images = useMemo(() => (imageUrl ? [imageUrl] : DEFAULT_IMAGES), [imageUrl]);
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeImage, setFadeImage] = useState(false);
    const [securityKey, setSecurityKey] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        if (images.length <= 1)
            return;
        const interval = setInterval(() => {
            setFadeImage(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFadeImage(false);
            }, 800);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    const handleSubmit = async () => {
        if (!securityKey || loading)
            return;
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const valid = onSubmitSecurityKey
                ? await onSubmitSecurityKey(securityKey)
                : securityKey === installPassword;
            if (valid) {
                setSuccess(true);
                setError(null);
            }
            else {
                setError("Security Key ไม่ถูกต้อง");
                setSuccess(false);
            }
        }
        catch {
            setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
        }
        finally {
            setLoading(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter")
            handleSubmit();
    };
    return (_jsxs("div", { className: "relative w-full h-[28rem] sm:h-[32rem] rounded-xl overflow-hidden select-none font-sans shadow-md border border-gray-200", children: [_jsx("img", { src: images[currentImage], alt: "Background", className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${fadeImage ? "opacity-0" : "opacity-30"}`, draggable: false, onError: (e) => (e.target.src = DEFAULT_IMAGES[0]) }), _jsx("div", { className: "absolute inset-0 bg-white/60 backdrop-blur-sm transition-all" }), _jsxs(motion.div, { className: "absolute inset-0 flex flex-col items-center justify-center px-6 z-10 text-gray-800 dark:text-gray-100", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.div, { className: "flex flex-col items-center text-center mb-6", custom: 0, variants: fadeInUp, children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shadow-lg dark:bg-gray-700", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8 text-gray-600 dark:text-gray-200", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 10.5V6.75a4.5 4.5 0 00-9 0V10.5m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" }) }) }), _jsx("h2", { className: "mt-4 text-xl sm:text-2xl font-semibold max-w-[360px] leading-snug text-center", children: contactText })] }), _jsxs(motion.div, { className: "w-full max-w-md flex flex-col sm:flex-row gap-4 mt-4 relative", custom: 1, variants: fadeInUp, children: [_jsx("input", { type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "input w-full text-lg text-gray-700 bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md shadow-sm transition-all duration-300 hover:scale-[1.02] dark:bg-gray-800 dark:text-gray-100", value: securityKey, onChange: (e) => {
                                    setSecurityKey(e.target.value);
                                    setError(null);
                                    setSuccess(false);
                                }, onKeyDown: handleKeyDown, autoComplete: "off", spellCheck: false, "aria-label": "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A Security Key" }), _jsx("button", { type: "button", className: "btn bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition-transform duration-300 active:scale-95 flex items-center justify-center", onClick: handleSubmit, disabled: loading, "aria-label": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19 Security Key", children: loading ? (_jsx("span", { className: "loading loading-spinner loading-sm" })) : ("ยืนยัน") }), _jsx("span", { className: "absolute -top-6 right-0 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded shadow-md select-none glow-neon animate-pulse", children: "@462fqtfc" })] }), error && (_jsx(motion.p, { className: "mt-4 text-sm text-red-500 font-medium text-center max-w-md px-2 select-text animate-pulse", custom: 2, variants: fadeInUp, role: "alert", "aria-live": "assertive", children: error })), !error && success && (_jsx(motion.p, { className: "mt-4 text-sm text-green-600 font-medium text-center max-w-md px-2 select-text", custom: 2, variants: fadeInUp, role: "status", "aria-live": "polite", children: "\u2705 Security Key \u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07" }))] }), _jsx("style", { children: `
          .glow-neon {
            box-shadow: 0 0 8px #0ff, 0 0 16px #0ff, 0 0 24px #0ff;
          }
        ` })] }));
};
export default BlurContact;
