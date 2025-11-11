import PrimaryBtn from "@/components/buttons/primaryBtn";
import SeaWaves from "@/components/common/SeaWaves";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import { serviceSection } from "@/constant/home";
import Link from "next/link";

export default function OurServicesSection() {
  return (
    <div
      style={{
        backgroundImage: `url("/bg-2.jpg")`,
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
      <SeaWaves className="absolute inset-0" />
      <div className="container py-10 grid gap-4  text-center relative z-10 ">
        <TitleSection>
          <UnderLine>{serviceSection.title}</UnderLine>
        </TitleSection>

        <p className="text-lg md:text-xl mt-4 text-white/90">
          {serviceSection.text}
        </p>

        <PrimaryBtn
          id="ourServices"
          className="mx-auto"
          //@ts-expect-error this error because of flowbite button type
          as={Link}
          href="/our-services"
        >
          {serviceSection.button}
        </PrimaryBtn>
      </div>
    </div>
  );
}
