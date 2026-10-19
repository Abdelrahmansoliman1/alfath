import HeroSection from "@/components/common/HeroSection";
import ServiceItem from "@/components/ourServices/service";
import { ourServices } from "@/constant/ourServices";

export default function page() {
  return (
    <div>
      <HeroSection title={ourServices.title} image="./bg-2.jpg" />

      <div className="py-16 container grid gap-20">
        <h4 className="font-semibold text-2xl tracking-tight text-primary">
          <span className="mr-3 inline-block h-6 w-1 rounded-full bg-secondary align-middle" />
          {ourServices.subtitle}
        </h4>
        {ourServices.servicesList.map((service, index) => {
          return <ServiceItem {...service} key={index} />;
        })}
      </div>
    </div>
  );
}
