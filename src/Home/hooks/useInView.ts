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
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options?.threshold]);

  return [ref, isInView];
};
