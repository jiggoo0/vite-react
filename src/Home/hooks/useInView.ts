import { useRef, useState, useEffect, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
}

export const useInView = <T extends Element>(
  options?: UseInViewOptions
): [RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options?.threshold]);

  return [ref, isInView];
};
