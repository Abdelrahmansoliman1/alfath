import HomeHeader from "@/components/home/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="grid text-gray-400 h-screen bg-black">
        <div className="h-screen relative">
          <div className="absolute inset-0 ">
            <Image src={"bg-2.jpg"} priority fill alt="header background" />
            <div className="absolute inset-0 bg-black/30 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
