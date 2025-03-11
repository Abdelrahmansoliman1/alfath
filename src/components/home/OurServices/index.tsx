"use client";

import TitleSection from "@/components/title";
import { motion } from "motion/react";

export default function HomeOurServices() {
  return (
    <motion.div className="container mx-auto py-[70px] grid grid-cols-1 gap-10">
      <TitleSection
        title="Our Services"
        fontSize="text-4xl"
        className=" text-stroke"
      />
    </motion.div>
  );
}
