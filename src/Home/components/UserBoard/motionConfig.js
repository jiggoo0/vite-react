/**
 * 📦 fadeUpContainer
 *
 * Container animation สำหรับ parent
 * - ใช้ Stagger Children ให้ item ใน container เคลื่อนไหวทีละตัว
 */
export const fadeUpContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // เวลา delay ระหว่าง item แต่ละตัว
        },
    },
};
/**
 * 🎯 fadeUpItem
 *
 * Animation สำหรับแต่ละ item
 * - Fade in + Slide up effect
 */
export const fadeUpItem = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};
