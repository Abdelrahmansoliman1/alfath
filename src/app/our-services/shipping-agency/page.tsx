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
      <OurServicesHeader title="Shipping Agency">
        <p className="text-white max-w-[600px] mx-auto">
          The company provides 24/7 services that meet the highest international
          standards through a team of specialists dedicated to fulfilling the
          requirements of shipping lines (liners – NVOCC) that we represent in
          Egypt. Additionally, we handle all types of ships (dry bulk – general
          cargo), facilitating all procedures and requirements from the moment a
          ship arrives at Egyptian ports until it sets sail. We proudly
          represent our clients, ship owners, captains, and ship crews to ensure
          seamless operations.
        </p>
      </OurServicesHeader>
    </>
  );
}
