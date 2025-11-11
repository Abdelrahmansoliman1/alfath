import { Metadata } from "next";
import dynamic from "next/dynamic";
import { storageServices } from "@/constant/ourServices";

const OurServicesHeader = dynamic(
  () => import("@/components/ourServices/OurServicesHeader")
);

export const metadata: Metadata = {
  title: storageServices.metadataTitle,
};
export default function StorageServices() {
  return (
    <>
      <OurServicesHeader title={storageServices.title}>
        <p>{storageServices.desc}</p>
      </OurServicesHeader>
    </>
  );
}
