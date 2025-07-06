import { BsEye } from "react-icons/bs";

const ourVision = [
  "To become the most trusted and forward-thinking shipping agency, recognized globally for our superior service, unwavering integrity, and steadfast commitment to our clients’ success.",
  "We strive to lead the future of logistics by integrating innovation, personalized support, and operational excellence—simplifying global trade and delivering lasting value.",
];

export default function OurVision() {
  return (
    <div className="grid gap-4 place-content-start ">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <BsEye />
      </div>
      <h3 className="text-4xl font-bold text-primary">Our Vision</h3>
      {ourVision.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
