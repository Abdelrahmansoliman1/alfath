const letsFind = [
  "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry.",
  "With a commitment to excellence and efficiency, the company provides top-tier shipping, stevedoring, warehousing, and storage solutions, ensuring seamless operations for businesses worldwide.",
  "Backed by a highly experienced team, state-of-the-art facilities, and a strategic vision for growth, Al-Fath aims to redefine industry standards, offering innovative and reliable logistics solutions tailored to meet the evolving needs of global trade.",
];

export default function LetsFind() {
  return (
    <div className="grid gap-4 bg-primary p-6 pb-10  h-full">
      <h2 className="text-stroke text-stroke-white text-6xl text-transparent max-w-[350px]">
        Lets find out who we are
      </h2>

      {letsFind.map((item, index) => (
        <p key={index} className="text-white/80">
          {item}
        </p>
      ))}
    </div>
  );
}
