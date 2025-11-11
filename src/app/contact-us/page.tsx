"use client";

import HeroSection from "@/components/common/HeroSection";
import dynamic from "next/dynamic";
import React from "react";

const ContactForm = dynamic(() => import("@/components/contactUs/ContactForm"));
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function ContactUs() {
  return (
    <>
      <HeroSection title="Contact Us" image="/bg-2.jpg" />
      <div className="relative z-10 container grid gap-4 grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <div className="bg-white max-w-full min-h-[400px]">
          <Map />
        </div>
      </div>
    </>
  );
}
