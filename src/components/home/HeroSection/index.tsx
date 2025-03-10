"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { zoomIn } from "@/utils/motion";

export default function HeroSection() {
  return (
    <div className="grid text-gray-400 h-screen bg-black">
      <div className="h-screen relative">
        <Image src={"bg-2.jpg"} priority fill alt="header background" />
        <div className="absolute inset-0 bg-black/30 "></div>
        <motion.div
          {...zoomIn(0, 1)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <Image
            src={"logo-lg.png"}
            width={300}
            height={100}
            alt="Alfath Logo"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
