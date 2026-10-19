import { letsFind } from "@/constant/aboutUs";
import Image from "next/image";

export default function LetsFind() {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 container py-10">
      {/* <h2 className="text-stroke text-stroke-white text-6xl text-transparent max-w-[350px]">
        Lets find out who we are
      </h2> */}
      <div className="overflow-hidden rounded-3xl relative min-h-[320px] shadow-lg">
        <Image
          src={letsFind.image}
          alt="About us"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="grid gap-5 content-center">
        {letsFind.listText.map((item, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed text-gray first:text-xl first:font-semibold first:text-primary"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
