"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function HomeAbout() {
  return (
    <div className="container mx-auto ">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <motion.h2
          variants={fadeIn(1)}
          className="flex flex-col justify-center items-start"
        >
          Welcome to Osprey Shipping
        </motion.h2>
      </motion.div>
    </div>
  );
}
