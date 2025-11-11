"use client";
import { TimeLine } from "@/components/common/TimeLine";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import RequestQuoteForm from "./RequsetQuoteForm";

import { whyChooseUsSection } from "@/constant/home";

export default function WhyChooseUs() {
  return (
    <div className="grid gap-14 container ">
      <TitleSection>
        <UnderLine>{whyChooseUsSection.title}</UnderLine>
      </TitleSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="p-4 ">
          <TimeLine timeline={whyChooseUsSection.timelineList} />
        </div>

        <RequestQuoteForm />
      </div>
    </div>
  );
}
