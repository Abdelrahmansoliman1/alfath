"use client";

import TitleSection from "@/components/title";
import dynamic from "next/dynamic";
import React from "react";

const ContactForm = dynamic(() => import("@/components/contactUs/ContactForm"));
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function ContactUs() {
  return (
    <>
      <div
        className="pt-[150px] relative -mb-10 z-[1] grid place-content-center"
        style={{
          backgroundImage: "url('/bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="relative z-10">
          <div className="container mx-auto">
            <TitleSection title="Contact Us" className="text-white" />
          </div>

          <ContactForm />
          <div className="h-screen  bg-white w-screen">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
