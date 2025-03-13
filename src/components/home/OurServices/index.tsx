"use client";

import TitleSection from "@/components/title";
import { motion } from "motion/react";
import ServiceItem from "./service";
import { servicesList } from "./constant";
import { staggerContainer } from "@/utils/motion";

export default function HomeOurServices() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto pb-[70px] lg:py-[70px] grid grid-cols-1 gap-10"
    >
      <TitleSection
        title="Our Services"
        fontSize="text-4xl"
        className="text-stroke"
      />
      <div className="grid gap-18 mt-10">
        {servicesList.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
