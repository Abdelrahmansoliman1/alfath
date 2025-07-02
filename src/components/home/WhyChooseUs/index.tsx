"use client";
import { TimeLine } from "@/components/common/TimeLine";
import UnderLine from "@/components/common/underLine";
import TitleSection from "@/components/title";
import RequestQuoteForm from "./RequsetQuoteForm";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineStarOutline } from "react-icons/md";

const timelineList = [
  {
    icon: FaMapMarkedAlt,
    title: "Strategic Port Access",
    description:
      "We operate through key international ports, ensuring efficient routes between Egypt and major global hubs.",
  },
  {
    icon: BsClockHistory,
    title: "Reliable & Timely Delivery",
    description: (
      <span>
        We’re committed to delivering your cargo on time, every
        time&#9866;backed by a professional logistics team and trusted partners.
      </span>
    ),
  },
  {
    icon: FiSettings,
    title: "Customized Shipping Solutions",
    description: (
      <span>
        Whether it's dry bulk, general cargo, or containers&#9866;we tailor our
        services to fit your specific needs with precision and flexibility.
      </span>
    ),
  },
  {
    icon: AiOutlineMessage,
    title: "Transparent Communication",
    description: (
      <span>
        We maintain full transparency and real&#9866;time updates throughout the
        shipping journey, ensuring peace of mind for every client.
      </span>
    ),
  },
  {
    icon: MdOutlineStarOutline,
    title: "Commitment to Excellence",
    description: (
      <span>
        Our operations are built on trust, safety, and continuous
        improvement&#9866;delivering value through top-tier service and industry
        compliance.
      </span>
    ),
  },
];
export default function WhyChooseUs() {
  return (
    <div className="grid gap-14 container ">
      <TitleSection>
        <UnderLine>Why Choose Us</UnderLine>
      </TitleSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="p-4 ">
          <TimeLine timeline={timelineList} />
        </div>

        <RequestQuoteForm />
      </div>
    </div>
  );
}
