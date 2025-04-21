"use client";

import Image from "next/image";
import TitleSection from "@/components/title";

export default function AboutHero() {
  return (
    <>
      <div className="relative  py-[100px] pt-[200px]">
        <Image
          src={"bg-2.jpg"}
          priority
          fill
          alt="header background"
          className="sticky top-0 left-0"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        {/* <div
          ref={headerRef}
          className="relative pt-[100px] h-full container mx-auto text-white grid grid-cols-1 md:grid-cols-2"
        >
          <LetsFind />
        </div> */}

        <div className="container">
          <TitleSection title="About Us" className="z-10 relative text-white" />
        </div>
      </div>
    </>
  );
}
