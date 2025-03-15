"use client";

import Navbar from "@/components/common/Navbar";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

type props = {
  title: string;
  bg?: string;
};
export default function OurServicesHeader({
  bg = "url('/bg-2.jpg')",
  title,
}: props) {
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
      <div
        className="z-[1] relative py-[100px]"
        ref={headerRef}
        style={{
          backgroundImage: bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[-1]  "></div>

        <div className="grid place-content-center place-items-center">
          <h1 className="text-4xl font-bold text-transparent text-stroke text-stroke-white">
            Our Services
          </h1>
          <div className="h-[1px] w-[300px] bg-white my-4" />
          <h2 className="text-6xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </>
  );
}
