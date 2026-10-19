import { ourVision } from "@/constant/aboutUs";
import { BsEye } from "react-icons/bs";

export default function OurVision() {
  return (
    <div className="grid gap-4 content-start rounded-3xl bg-primary text-white p-8 shadow-sm">
      <div className="bg-secondary size-14 rounded-2xl grid place-content-center text-3xl text-white">
        <BsEye />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
        {ourVision.title}
      </h3>
      {ourVision.points.map((item, index) => (
        <p key={index} className="text-white/70 leading-relaxed">
          {item}
        </p>
      ))}
    </div>
  );
}
