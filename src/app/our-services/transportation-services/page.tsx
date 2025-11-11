import { Metadata } from "next";
import dynamic from "next/dynamic";
import { transportationServices } from "@/constant/ourServices";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: transportationServices.metadataTitle,
};
export default function TransportationServices() {
  return (
    <>
      <OurServicesHeader title={transportationServices.title}>
        <p>{transportationServices.desc}</p>
      </OurServicesHeader>
    </>
  );
}
