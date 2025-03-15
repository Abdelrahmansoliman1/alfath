const ourVision = [
  "To be a globally recognized leader in shipping and logistics, setting the benchmark for efficiency, reliability, and innovation. We aspire to revolutionize maritime services by seamlessly connecting global trade, optimizing cargo operations, and embracing cutting-edge technology.",
  "Our commitment to sustainability, transparency, and strategic partnerships ensures long-term success for our clients while upholding the highest international standards",
];

export default function OurVision() {
  return (
    <div className="bg-primary py-14 px-6 grid gap-4 place-content-start ">
      <h3 className="text-4xl font-bold text-stroke text-stroke-white text-transparent ">
        Our Vision
      </h3>
      {ourVision.map((item, index) => (
        <p key={index} className="text-white">
          {item}
        </p>
      ))}
    </div>
  );
}
