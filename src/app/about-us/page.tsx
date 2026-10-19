import { aboutUsPage } from "@/constant/aboutUs";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LetsFind = dynamic(() => import("@/components/about/LetsFind"));
const HeroSection = dynamic(() => import("@/components/common/HeroSection"));
const OurVision = dynamic(() => import("@/components/about/OurVision"));
const OurMission = dynamic(() => import("@/components/about/OurMission"));

export const metadata: Metadata = {
  title: `Alfath | ${aboutUsPage.title}`,
};

export default function About() {
  return (
    <>
      <HeroSection title={aboutUsPage.title} image="bg-2.jpg" />
      <LetsFind />
      <div className="bg-surface py-16 -mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto z-10 relative">
          <OurMission />
          <OurVision />
        </div>
      </div>
    </>
  );
}
