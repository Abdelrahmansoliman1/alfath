"use client";

import Link from "next/link";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";

const textList = [
  "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry. ",
  "With a commitment to excellence and efficiency, the company provides top-tier shipping, stevedoring, warehousing, and storage solutions, ensuring seamless operations for businesses worldwide.",
  "Backed by a highly experienced team, state-of-the-art facilities, and a strategic vision for growth, Al-Fath aims to redefine industry standards, offering innovative and reliable logistics solutions tailored to meet the evolving needs of global trade.",
];

export default function HomeAbout() {
  return (
    <div className="container mx-auto ">
      <TitleSection className="text-center">
        Welcome to <UnderLine className="text-primary">Alfath</UnderLine>{" "}
        Shipping Agency
      </TitleSection>

      <TitleSection className="mt-10">
        <UnderLine>Who We are</UnderLine>
      </TitleSection>

      <div className="grid gap-3 mt-4">
        {textList.map((text, index) => (
          <p key={index} className="text-lg md:text-xl mt-4">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
