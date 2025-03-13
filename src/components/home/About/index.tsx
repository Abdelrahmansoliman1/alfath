"use client";

import PrimaryBtn from "@/components/buttons/primaryBtn";
import TitleSection from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const images = [
  {
    src: "https://dummyimage.com/350x450.png",
    className: "",
    motion: slideIn("right", "tween", 0.3, 1),
  },
  {
    src: "https://dummyimage.com/350x450/f00.png",
    className: "-translate-x-4 translate-y-10",
    motion: slideIn("left", "tween", 0.3, 1),
  },
];

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
        <div className="grid grid-cols-2 -translate-y-[100px] relative z-10">
          {images.map((image, ind) => (
            <motion.div key={ind} variants={image.motion}>
              <div
                className={`relative aspect-square  rounded-lg overflow-hidden ${image.className}`}
              >
                <Image src={image.src} alt="about" fill />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative -translate-y-[100px] lg:translate-y-0">
          <motion.div
            variants={slideIn("right", "tween", 0.3, 0.7)}
            className="absolute inset-0 bg-primary scale-x-125 origin-right -z-10"
          />

          <div className="grid gap-4 py-5 px-4">
            <TitleSection title="About Us" lineBg="bg-white" delay={0.3} />
            <motion.p variants={fadeIn(1)} className="text-white/80">
              Established in 2024, Al-Fath for Shipping Agencies has swiftly
              emerged as a leading force in the maritime and logistics industry.
            </motion.p>
            <motion.p variants={fadeIn(1)} className="text-white/80">
              With a commitment to excellence and efficiency, the company
              provides top-tier shipping, stevedoring, warehousing, and storage
              solutions, ensuring seamless operations for businesses worldwide.
            </motion.p>

            <motion.div
              variants={slideIn("left", "tween", 1, 1)}
              className="w-fit"
            >
              <Link href={"/about"}>
                <PrimaryBtn id="about" color="white">
                  Read More
                </PrimaryBtn>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
