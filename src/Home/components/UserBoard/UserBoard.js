"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
// =======================
// Constants
// =======================
const DEADLINE_DAYS = 65;
const CORRECT_CODE = "9780";
const getDeadline = (createdAt) => {
    const d = new Date(createdAt);
    d.setDate(d.getDate() + DEADLINE_DAYS);
    return d.toLocaleDateString("th-TH");
};
const labelMap = {
    application_id: { label: "รหัสใบสมัคร" },
    full_name: { label: "ชื่อ-นามสกุล" },
    first_name: { label: "ชื่อ" },
    last_name: { label: "นามสกุล" },
    citizen_id: { label: "เลขบัตร" },
    mobile: { label: "เบอร์มือถือ" },
    address: { label: "ที่อยู่" },
    province: { label: "จังหวัด" },
    status: { label: "สถานะ" },
    created_at: {
        label: "วันที่ยื่น",
        compute: (val) => new Date(val).toLocaleDateString("th-TH"),
    },
    deadline: {
        label: `ครบกำหนด (${DEADLINE_DAYS} วัน)`,
        compute: (_, row) => getDeadline(row.created_at),
    },
};
// =======================
// Main Component
// =======================
const UserBoard = ({ data, pageSize = 10 }) => {
    const [page, setPage] = useState(1);
    const [codeInput, setCodeInput] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const displayKeys = useMemo(() => Object.keys(labelMap), []);
    const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [data.length, pageSize]);
    const pageData = useMemo(() => data.slice((page - 1) * pageSize, page * pageSize), [data, page, pageSize]);
    // =======================
    // Pagination
    // =======================
    const gotoPage = useCallback((num) => {
        if (num < 1 || num > totalPages)
            return;
        setPage(num);
        document.getElementById("user-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [totalPages]);
    // =======================
    // Authorization Form
    // =======================
    const handleCodeSubmit = useCallback((e) => {
        e.preventDefault();
        const isValid = codeInput.trim() === CORRECT_CODE;
        setIsAuthorized(isValid);
        setErrorMsg(isValid ? "" : "รหัสไม่ถูกต้อง กรุณาลองใหม่");
        if (isValid)
            setCodeInput("");
    }, [codeInput]);
    const renderCodeForm = () => (_jsxs("form", { onSubmit: handleCodeSubmit, className: "w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6", "aria-label": "Form \u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4 text-center", children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" }), _jsxs("div", { className: "flex gap-3", children: [_jsx("input", { type: "password", value: codeInput, onChange: (e) => setCodeInput(e.target.value), placeholder: "\u0E23\u0E2B\u0E31\u0E2A", className: "flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", autoFocus: true, "aria-label": "\u0E23\u0E2B\u0E31\u0E2A" }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors", children: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19" })] }), errorMsg && (_jsx("p", { className: "mt-2 text-red-600 text-center font-medium", role: "alert", children: errorMsg }))] }));
    // =======================
    // Table Rendering
    // =======================
    const renderTable = () => (_jsxs("div", { className: "relative w-full max-w-full sm:max-w-6xl", children: [_jsxs(motion.div, { id: "user-table", className: `overflow-x-auto rounded-lg shadow-md bg-white transition-all duration-500 ${isAuthorized ? "blur-0" : "blur-md pointer-events-none select-none"}`, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [!isAuthorized && (_jsx("div", { className: "absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center rounded-lg", children: _jsx("p", { className: "text-gray-500 font-semibold text-lg", children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" }) })), _jsxs("table", { className: "min-w-[700px] w-full table-auto border border-gray-300 border-collapse text-sm", children: [_jsx("thead", { children: _jsx("tr", { className: "bg-gray-100", children: displayKeys.map((key) => {
                                        const style = key === "full_name"
                                            ? { width: "20%" }
                                            : key === "address"
                                                ? { width: "25%" }
                                                : key === "status" || key === "province"
                                                    ? { width: "10%" }
                                                    : {};
                                        return (_jsx("th", { className: "border border-gray-300 px-3 py-2 text-left whitespace-nowrap", style: style, children: labelMap[key]?.label }, key));
                                    }) }) }), _jsx("tbody", { children: pageData.map((user) => (_jsx("tr", { className: "odd:bg-white even:bg-gray-50 hover:bg-gray-200 transition-colors", children: displayKeys.map((key) => {
                                        const compute = labelMap[key]?.compute;
                                        const rawValue = compute
                                            ? compute(user[key], user)
                                            : user[key];
                                        const value = rawValue === null || rawValue === undefined
                                            ? ""
                                            : typeof rawValue === "object"
                                                ? JSON.stringify(rawValue)
                                                : String(rawValue);
                                        return (_jsx("td", { className: "border border-gray-300 px-3 py-2 truncate", title: value, children: value }, key));
                                    }) }, user.application_id))) })] })] }), totalPages > 1 && (_jsxs("nav", { className: "flex flex-wrap justify-center items-center gap-2 mt-6 mb-4 px-4", role: "navigation", children: [_jsx("button", { onClick: () => gotoPage(page - 1), disabled: page === 1, className: `px-3 sm:px-5 py-2 rounded border border-gray-400 font-semibold min-w-[60px] ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`, children: "Prev" }), Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (_jsx("button", { onClick: () => gotoPage(num), className: `px-3 sm:px-5 py-2 rounded border font-semibold min-w-[40px] ${num === page
                            ? "bg-blue-600 text-white border-blue-600"
                            : "hover:bg-gray-200 border-gray-400"}`, children: num }, num))), _jsx("button", { onClick: () => gotoPage(page + 1), disabled: page === totalPages, className: `px-3 sm:px-5 py-2 rounded border border-gray-400 font-semibold min-w-[60px] ${page === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-200"}`, children: "Next" })] }))] }));
    return (_jsxs("main", { className: "w-full flex flex-col items-center p-4 sm:pt-6 sm:pb-4 bg-gray-50", children: [!isAuthorized && renderCodeForm(), renderTable()] }));
};
export default UserBoard;
