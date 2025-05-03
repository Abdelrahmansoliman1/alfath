import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: "Our Services | Other Shipping and Logistics Services",
};

const servicesList = [
  "Freight Forwarding",
  "Customs Clearance",
  "Reefer Service & Box Repair",
];

export default function OtherShippingServices() {
  return (
    <>
      <OurServicesHeader title="Other Shipping and Logistics Services">
        <p>
          The company delivers the following services with high professionalism
          and efficiency:
        </p>
        <ul className="grid gap-2 text-gray">
          {servicesList.map((item, index) => (
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
