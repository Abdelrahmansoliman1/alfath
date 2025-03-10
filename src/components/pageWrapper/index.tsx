"use client";

import { motion } from "motion/react";
import PageLoading from "../pageLoading";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        // key={pathname}
        initial={{ opacity: 1, visibility: "visible" }}
        animate={{ opacity: 0, visibility: "hidden" }}
        exit={{ opacity: 1, visibility: "visible" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 bg-white z-[60]"
      >
        <motion.div />
        <PageLoading />
      </motion.div>
      {children}
    </>
  );
}
