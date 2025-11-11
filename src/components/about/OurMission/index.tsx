import { ourMission } from "@/constant/aboutUs";
import { PiTarget } from "react-icons/pi";

export default function OurMission() {
  return (
    <div className="grid gap-4">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <PiTarget />
      </div>
      <h3 className="text-4xl font-bold text-primary">{ourMission.title}</h3>
      <p className="text-black/80">{ourMission.desc}</p>
      <p className="text-black/80">{ourMission.subtitle}</p>
      <ul className="grid gap-2 text-gray-600">
        {ourMission.ourMissionCommitments.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p className="text-black/80">{ourMission.desc2}</p>
    </div>
  );
}
