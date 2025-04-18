import { TimeLine } from "@/components/common/TimeLine";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";

const timelineList = [
  {
    title: "title",
    description: "description",
  },
];
export default function WhyChooseUs() {
  return (
    <div className="grid gap-10 container">
      <TitleSection>
        <UnderLine>Why Choose Us</UnderLine>
      </TitleSection>

      <TimeLine timeline={timelineList} />
    </div>
  );
}
