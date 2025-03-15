"use client";

import Navbar from "@/components/common/Navbar";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import LetsFind from "../LetsFind";

export default function AboutHero() {
  const [outHeader, setOutHeader] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const ele = headerRef.current;
    if (ele) {
      const { top } = ele.getBoundingClientRect();
      const out = current >= top;
      setOutHeader(out);
    }
  });
  return (
    <>
      <Navbar show={outHeader} />

      <div className="relative min-h-screen py-[100px]">
        <Image
          src={"bg-2.jpg"}
          priority
          fill
          alt="header background"
          className="sticky top-0 left-0"
        />
        <div className="absolute inset-0 bg-black/30 "></div>
        <div
          ref={headerRef}
          className="relative pt-[100px] h-full container mx-auto text-white grid grid-cols-1 md:grid-cols-2"
        >
          <LetsFind />
        </div>
      </div>
    </>
  );
}
