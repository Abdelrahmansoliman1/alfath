"use client";

import HeroSection from "@/components/common/HeroSection";
import TitleSection from "@/components/title";
import dynamic from "next/dynamic";
import React from "react";

const ContactForm = dynamic(() => import("@/components/contactUs/ContactForm"));
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function ContactUs() {
  return (
    <>
      <HeroSection title="Contact Us" image="./bg-2.jpg" />
      <div className="relative z-10 container">
        <ContactForm />
        <div className="bg-white max-w-full h-[400px]">
          <Map />
        </div>
      </div>
    </>
  );
}
