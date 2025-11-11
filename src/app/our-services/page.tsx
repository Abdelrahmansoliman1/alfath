import HeroSection from "@/components/common/HeroSection";
import ServiceItem from "@/components/ourServices/service";
import { ourServices } from "@/constant/ourServices";

export default function page() {
  return (
    <div>
      <HeroSection title={ourServices.title} image="./bg-2.jpg" />

      <div className="py-10 container grid gap-14">
        <h4 className="font-semibold text-2xl">{ourServices.subtitle}</h4>
        {ourServices.servicesList.map((service, index) => {
          return <ServiceItem {...service} key={index} />;
        })}
      </div>
    </div>
  );
}
