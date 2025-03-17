import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: "Our Services | Transportation Services",
};
export default function TransportationServices() {
  return (
    <>
      <OurServicesHeader title="Transportation Services">
        <p>
          The company operates a fleet of land transportation vehicles, enabling
          it to handle land transportation operations across Egypt for all types
          of cargo. Additionally, the company offers the possibility of
          transportation services by railway.
        </p>
      </OurServicesHeader>
    </>
  );
}
