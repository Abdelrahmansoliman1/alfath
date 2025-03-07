"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-[100]"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
    >
      Loading
    </motion.div>
  );
}
