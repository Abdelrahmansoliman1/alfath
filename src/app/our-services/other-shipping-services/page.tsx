import { Metadata } from "next";
import dynamic from "next/dynamic";
import { otherShippingServices } from "@/constant/ourServices";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: otherShippingServices.metadataTitle,
};

export default function OtherShippingServices() {
  return (
    <>
      <OurServicesHeader title={otherShippingServices.title}>
        <p>{otherShippingServices.intro}</p>
        <ul className="grid gap-2 text-gray">
          {otherShippingServices.list.map((item, index) => (
            <li key={index} className="flex gap-2 ">
              <span>•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </OurServicesHeader>
    </>
  );
}
