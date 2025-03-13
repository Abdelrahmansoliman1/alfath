import dynamic from "next/dynamic";

const AboutHero = dynamic(() => import("@/components/about/Hero"));

export default function About() {
  return (
    <>
      <AboutHero />
    </>
  );
}
