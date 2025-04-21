import PrimaryBtn from "@/components/buttons/primaryBtn";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import Link from "next/link";

export default function OurServicesSection() {
  return (
    <div
      style={{
        backgroundImage: `url("./bg-2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        color: "white",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container py-10 grid gap-4  text-center relative z-10 ">
        <TitleSection>
          <UnderLine>Our Services</UnderLine>
        </TitleSection>

        <p className="text-lg md:text-xl mt-4 text-white/90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dicta rerum unde et eos consequuntur! Vitae quia explicabo enim
          dolores magni odio inventore adipisci deserunt, exercitationem animi
          necessitatibus fuga molestias?
        </p>

        <PrimaryBtn
          id="ourServices"
          className="mx-auto"
          //@ts-expect-error
          as={Link}
          href="/our-services"
        >
          Our services
        </PrimaryBtn>
      </div>
    </div>
  );
}
