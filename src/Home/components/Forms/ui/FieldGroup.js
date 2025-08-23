import { jsx as _jsx } from "react/jsx-runtime";
const FieldGroup = ({ children, columns = 1, className = "", }) => {
    // Determine grid columns based on the "columns" prop
    const columnClass = (() => {
        switch (columns) {
            case 2:
                return "grid-cols-1 md:grid-cols-2";
            case 3:
                return "grid-cols-1 md:grid-cols-3";
            case 4:
                return "grid-cols-1 md:grid-cols-4";
            default:
                return "grid-cols-1";
        }
    })();
    return _jsx("div", { className: `grid gap-4 ${columnClass} ${className}`, children: children });
};
export default FieldGroup;
