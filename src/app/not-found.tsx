import PrimaryBtn from "@/components/buttons/primaryBtn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <>
      <div className="grid  place-content-center place-items-center h-screen gap-4">
        <Image src={"/not-found.svg"} width={400} height={400} alt="404" />
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <Link href="/">
          <PrimaryBtn id="not-found" color="secondary">
            <FaArrowLeftLong /> Back to Home
          </PrimaryBtn>
        </Link>
      </div>
    </>
  );
}
