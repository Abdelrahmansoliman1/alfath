export const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay,
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
) => ({
  initial: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  animate: {
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
  staggerChildren: number,
  delayChildren: number = 0
) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number) => ({
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

export const zoomIn = (delay: number, duration: number) => ({
  initial: {
    scale: 0,
    filter: "blur(10px)",
    opacity: 0,
  },
  animate: {
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
