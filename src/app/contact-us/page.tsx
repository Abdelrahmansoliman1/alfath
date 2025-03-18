"use client";

import Navbar from "@/components/common/Navbar";
import dynamic from "next/dynamic";
import React from "react";

const ContactForm = dynamic(() => import("@/components/contactUs/ContactForm"));
const Map = dynamic(() => import("@/components/map"));

export default function ContactUs() {
  return (
    <>
      <Navbar show={true} />

      <div
        className="pt-[150px] relative -mb-[20%] z-[1] grid place-content-center"
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
            <h1 className="text-6xl font-bold text-transparent text-stroke text-stroke-white">
              Contact Us
            </h1>
          </div>

          <ContactForm />
          <Map />
        </div>
      </div>
    </>
  );
}
