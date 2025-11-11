import { ourVision } from "@/constant/aboutUs";
import { BsEye } from "react-icons/bs";

export default function OurVision() {
  return (
    <div className="grid gap-4 place-content-start ">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <BsEye />
      </div>
      <h3 className="text-4xl font-bold text-primary">{ourVision.title}</h3>
      {ourVision.points.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
