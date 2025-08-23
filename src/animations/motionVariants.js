/**
 * Default transition settings สำหรับ motion
 */
const defaultTransition = {
    duration: 0.6,
    ease: "easeOut",
};
/**
 * Motion Variants สำหรับ Carousel (เช่น TestimonialSlider)
 * @param direction - จำนวนบวก/ลบ กำหนดทิศทาง slide
 */
export const carouselVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
    }),
};
/**
 * Motion Variants สำหรับ FadeIn + Slide Up
 * ใช้ได้กับ Sections, Cards, Hero ฯลฯ
 */
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
};
/**
 * Motion Variants สำหรับ FadeIn + Slide Up แบบกำหนด delay
 * @param delay - เวลา delay ก่อนเริ่ม animation (วินาที)
 */
export const fadeInUpWithDelay = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ...defaultTransition, delay } },
});
