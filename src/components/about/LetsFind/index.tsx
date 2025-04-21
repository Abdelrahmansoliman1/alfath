import Image from "next/image";

const letsFind = [
  "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry.",
  "With a commitment to excellence and efficiency, the company provides top-tier shipping, stevedoring, warehousing, and storage solutions, ensuring seamless operations for businesses worldwide.",
  "Backed by a highly experienced team, state-of-the-art facilities, and a strategic vision for growth, Al-Fath aims to redefine industry standards, offering innovative and reliable logistics solutions tailored to meet the evolving needs of global trade.",
];

export default function LetsFind() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 container">
      {/* <h2 className="text-stroke text-stroke-white text-6xl text-transparent max-w-[350px]">
        Lets find out who we are
      </h2> */}
      <div className="overflow-hidden rounded-2xl relative">
        <Image
          src={"./bg-2.jpg"}
          alt="About us"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="grid gap-4">
        {letsFind.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
