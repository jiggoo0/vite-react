import { useRef, useState, useEffect, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
}

/**
 * Hook สำหรับตรวจสอบ element ว่าอยู่ใน viewport หรือไม่
 * @param threshold ค่า threshold ของ IntersectionObserver
 * @returns [ref, isInView]
 */
export const useInView = <T extends Element>({
  threshold = 0.1,
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return [ref, isInView];
};
