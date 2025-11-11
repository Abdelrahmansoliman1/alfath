import { heroSlider } from "@/constant/home";
import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("@/components/home/HeroSlider"));
const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const About = dynamic(() => import("@/components/home/About"));
const Services = dynamic(() => import("@/components/home/OurServices"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));

export default function Home() {
  return (
    <div className="grid gap-10">
      {heroSlider.showSlider ? <HeroSlider /> : <HeroSection />}
      <About />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
