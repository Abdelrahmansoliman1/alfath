import dynamic from "next/dynamic";

// const HomeHeader = dynamic(() => import("@/components/home/Header"));
const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const About = dynamic(() => import("@/components/home/About"));
const Services = dynamic(() => import("@/components/home/OurServices"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));

export default function Home() {
  return (
    <div className="grid gap-10">
      {/* <HomeHeader /> */}
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
