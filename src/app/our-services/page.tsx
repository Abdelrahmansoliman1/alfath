import HeroSection from "@/components/common/HeroSection";
import { servicesList } from "@/components/ourServices/constant";
import ServiceItem from "@/components/ourServices/service";

export default function page() {
  return (
    <div>
      <HeroSection title="Our Services" image="./bg-2.jpg" />

      <div className="py-10 container grid gap-14">
        {servicesList.map((service, index) => {
          return <ServiceItem {...service} key={index} />;
        })}
      </div>
    </div>
  );
}
