import { Metadata } from "next";
import dynamic from "next/dynamic";
import { shippingAgency } from "@/constant/ourServices";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: shippingAgency.metadataTitle,
};
export default function ShippingAgency() {
  return (
    <>
      <OurServicesHeader title={shippingAgency.title}>
        <p>{shippingAgency.desc}</p>
      </OurServicesHeader>
    </>
  );
}
