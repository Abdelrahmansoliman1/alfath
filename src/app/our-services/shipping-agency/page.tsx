import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: "Our Services | Shipping Agency",
};
export default function ShippingAgency() {
  return (
    <>
      <OurServicesHeader title="Shipping Agency" />
    </>
  );
}
