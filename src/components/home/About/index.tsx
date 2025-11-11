"use client";

import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import { aboutSection } from "@/constant/home";

export default function HomeAbout() {
  return (
    <div className="container mx-auto ">
      <TitleSection className="text-center uppercase">
        {aboutSection.title}
        {/* <UnderLine className="text-primary uppercase">Alfath</UnderLine> for */}
      </TitleSection>

      <TitleSection className="mt-10">
        <UnderLine>{aboutSection.whoWeAre}</UnderLine>
      </TitleSection>

      <div className="grid gap-3 mt-4">
        {aboutSection.textList.map((text, index) => (
          <p key={index} className="text-lg md:text-xl mt-4">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
