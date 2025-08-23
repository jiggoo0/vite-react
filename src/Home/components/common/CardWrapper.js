import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
const CardWrapper = ({ children, className, isBlurred = false, }) => {
    return (_jsx("div", { className: clsx(className, isBlurred &&
            "blur-sm pointer-events-none select-none transition-all"), children: children }));
};
export default CardWrapper;
