import { jsxs as _jsxs } from "react/jsx-runtime";
const IdCardPreview = ({ data, className }) => {
    return (_jsxs("div", { className: `max-w-sm p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md ${className}`, children: [_jsxs("h2", { className: "text-xl font-bold mb-2", children: [data.name, " ", data.surname] }), _jsxs("p", { children: ["ID: ", data.idNumber] }), _jsxs("p", { children: ["\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14: ", data.dob] }), _jsxs("p", { children: ["\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E01\u0E1A\u0E31\u0E15\u0E23: ", data.issueDate] }), _jsxs("p", { children: ["\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38: ", data.expiryDate] })] }));
};
export default IdCardPreview;
