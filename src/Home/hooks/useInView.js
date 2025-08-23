import { useRef, useState, useEffect } from "react";
/**
 * useInView hook: Detects if an element is within the viewport
 * @param options Object { threshold }
 * @returns [ref, isInView] - ref to attach to element, boolean flag
 */
export const useInView = ({ threshold = 0.1, } = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold, root: null });
        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);
    return [ref, isInView];
};
