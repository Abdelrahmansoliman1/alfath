import type { Variants } from "motion/react";

export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "tween" | "spring",
  delay: number = 0,
  duration: number = 0.7
): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren: number = 0
): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
export const textContainer = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: delay + 0.1, delayChildren: i * 0.1 },
  }),
});

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    filter: "blur(10px)",
    opacity: 0,
  },
  show: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const lineScaleX: Variants = {
  animate: {
    scaleX: [1, 0.5, 1],
    transition: {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
    },
  },
};
