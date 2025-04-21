"use client";
import { TimeLine } from "@/components/common/TimeLine";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import { AiOutlineTruck } from "react-icons/ai";
import { CiBoxes } from "react-icons/ci";

const timelineList = [
  {
    icon: AiOutlineTruck,
    title: "Worldwide Shipping Services",
    description:
      "Our global tie up will make your movement easier and convenient.",
  },
  {
    icon: CiBoxes,
    title: "Careful Handling of valuable goods",
    description:
      "We offer cost effective and customize logistics solution to meet Customers diverse needs.",
  },
];
export default function WhyChooseUs() {
  return (
    <div className="grid gap-14 container">
      <TitleSection>
        <UnderLine>Why Choose Us</UnderLine>
      </TitleSection>

      <TimeLine timeline={timelineList} />
    </div>
  );
}
