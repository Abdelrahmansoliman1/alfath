import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutHero = dynamic(() => import("@/components/about/Hero"));
const OurVision = dynamic(() => import("@/components/about/OurVision"));
const OurMission = dynamic(() => import("@/components/about/OurMission"));

export const metadata: Metadata = {
  title: "Alfath | About Us",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto -mt-[140px] z-10 relative">
        <OurMission />
        <OurVision />
      </div>
    </>
  );
}
