import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: "Our Services | Storage Services",
};
export default function StorageServices() {
  return (
    <>
      <OurServicesHeader title="Storage Services">
        <p>
          The company provides storage services for all types of cargo,
          including dry bulk, general cargo, and containers.
        </p>
        <p>
          These services are available in bounded depots and warehouses inside
          the ports, as well as through depots and open yards outside the ports,
          ensuring all customer requirements are met and operations run
          smoothly.
        </p>
      </OurServicesHeader>
    </>
  );
}
