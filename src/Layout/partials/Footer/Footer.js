import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaLine, FaInstagram, FaEnvelope, FaFacebookMessenger, } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
const socialLinks = [
    {
        href: "https://lin.ee/gVptUhR",
        label: "LINE",
        text: "LINE: @462FQFC",
        icon: FaLine,
    },
    {
        href: "https://www.instagram.com/jpsystem.official",
        label: "Instagram",
        text: "@jpsystem.official",
        icon: FaInstagram,
    },
    {
        href: "mailto:contact@jpsystem.dev",
        label: "Email",
        text: "contact@jpsystem.dev",
        icon: FaEnvelope,
    },
    {
        href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
        label: "Messenger",
        text: "Messenger",
        icon: FaFacebookMessenger,
    },
    {
        href: "https://www.tiktok.com/@jaopa.zerofour",
        label: "TikTok",
        text: "@jaopa.zerofour",
        icon: SiTiktok,
    },
];
const Footer = () => {
    const year = new Date().getFullYear();
    return (_jsx("footer", { className: "bg-base-200 border-t border-base-content/10 dark:border-base-content/20 py-10", role: "contentinfo", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center space-y-8", children: [_jsx("nav", { "aria-label": "\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D", className: "flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400", children: socialLinks.map(({ href, label, text, icon: Icon }) => (_jsxs("a", { href: href, target: "_blank", rel: "noopener noreferrer", "aria-label": `ติดต่อผ่าน ${label}`, className: "group inline-flex items-center gap-2 transition-transform duration-300 hover:text-primary", children: [_jsx(Icon, { className: "text-xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6", "aria-hidden": "true" }), _jsx("span", { className: "transition-colors duration-300 group-hover:text-primary", children: text })] }, label))) }), _jsx("div", { className: "h-px w-2/3 mx-auto bg-base-content/10 dark:bg-base-content/20" }), _jsxs("p", { className: "text-xs text-neutral-500 dark:text-neutral-400 select-none leading-relaxed", children: ["\u00A9 ", year, " ", _jsx("span", { className: "font-semibold", children: "JP Visual & Docs" }), " \u2014 Powered by", " ", _jsx("a", { href: "https://applicationlab.dev", target: "_blank", rel: "noopener noreferrer", className: "hover:underline hover:text-primary transition-colors duration-200", children: "Applicationlab" }), ". All rights reserved."] })] }) }));
};
export default Footer;
