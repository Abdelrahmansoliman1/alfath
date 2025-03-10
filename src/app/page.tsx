import dynamic from "next/dynamic";

const HomeHeader = dynamic(() => import("@/components/home/Header"));
const HeroSection = dynamic(() => import("@/components/home/HeroSection"));

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HeroSection />
    </>
  );
}
