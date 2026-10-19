"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { zoomIn } from "@/utils/motion";
import PrimaryBtn from "@/components/buttons/primaryBtn";
import Link from "next/link";
import SeaWaves from "@/components/common/SeaWaves";
import { heroSection } from "@/constant/home";

export default function HeroSection() {
  return (
    <div className="grid text-gray-400 h-screen bg-black">
      <div className="h-screen relative">
        {/* <Image src={"bg-2.jpg"} priority fill alt="header background" /> */}
        <SeaWaves />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center grid gap-8 place-items-center w-full px-4">
          <motion.div
            variants={zoomIn(0, 1)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView="show"
          >
            <Image
              src={"logo-lg.png"}
              width={300}
              height={100}
              alt="Alfath Logo"
              priority
            />
          </motion.div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-secondary" />
            Shipping &amp; Logistics
          </span>
          <h3 className="text-white text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            {heroSection.title}
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href={"/about-us"}>
              <PrimaryBtn id="AboutUs" color="white">
                About Us
              </PrimaryBtn>
            </Link>

            <Link href={"/?section=quote"}>
              <PrimaryBtn id="GetAQuote" color="secondary">
                Request A Quote
              </PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
