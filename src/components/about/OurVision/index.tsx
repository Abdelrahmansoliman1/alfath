import { BsEye } from "react-icons/bs";

const ourVision = [
  "To be a globally recognized leader in shipping and logistics, setting the benchmark for efficiency, reliability, and innovation. We aspire to revolutionize maritime services by seamlessly connecting global trade, optimizing cargo operations, and embracing cutting-edge technology.",
  "Our commitment to sustainability, transparency, and strategic partnerships ensures long-term success for our clients while upholding the highest international standards",
];

export default function OurVision() {
  return (
    <div className="grid gap-4 place-content-start ">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <BsEye />
      </div>
      <h3 className="text-4xl font-bold text-primary ">Our Vision</h3>
      {ourVision.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
