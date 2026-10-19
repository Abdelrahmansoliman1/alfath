"use client";

import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import { aboutSection } from "@/constant/home";

export default function HomeAbout() {
  return (
    <div className="container mx-auto py-10">
      <TitleSection className="text-center uppercase max-w-4xl mx-auto !text-2xl md:!text-4xl">
        {aboutSection.title}
        {/* <UnderLine className="text-primary uppercase">Alfath</UnderLine> for */}
      </TitleSection>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_2fr] items-start rounded-3xl bg-surface border border-border p-8 md:p-12">
        <TitleSection>
          <UnderLine>{aboutSection.whoWeAre}</UnderLine>
        </TitleSection>

        <div className="grid gap-5">
          {aboutSection.textList.map((text, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-relaxed text-gray"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
