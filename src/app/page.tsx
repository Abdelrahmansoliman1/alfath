import dynamic from "next/dynamic";

const HomeHeader = dynamic(() => import("@/components/home/Header"));
const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const About = dynamic(() => import("@/components/home/About"));

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HeroSection />
      <About />
    </>
  );
}
