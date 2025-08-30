import { useRef, useState, useEffect, RefObject } from "react";

interface UseInViewOptions {
  /** IntersectionObserver threshold (default: 0.1) */
  threshold?: number;
}

/**
 * useInView hook: Detects if an element is within the viewport
 * @param options Object { threshold }
 * @returns [ref, isInView] - ref to attach to element, boolean flag
 */
export const useInView = <T extends Element>({ threshold = 0.1 }: UseInViewOptions = {}): [
  RefObject<T | null>,
  boolean,
] => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold,
      root: null,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};
