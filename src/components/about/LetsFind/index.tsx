import { letsFind } from "@/constant/aboutUs";
import Image from "next/image";

export default function LetsFind() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 container">
      {/* <h2 className="text-stroke text-stroke-white text-6xl text-transparent max-w-[350px]">
        Lets find out who we are
      </h2> */}
      <div className="overflow-hidden rounded-2xl relative">
        <Image
          src={letsFind.image}
          alt="About us"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="grid gap-4">
        {letsFind.listText.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
