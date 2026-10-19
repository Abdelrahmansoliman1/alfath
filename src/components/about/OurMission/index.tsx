import { ourMission } from "@/constant/aboutUs";
import { PiTarget } from "react-icons/pi";

export default function OurMission() {
  return (
    <div className="grid gap-4 content-start rounded-3xl bg-white p-8 shadow-sm border border-border">
      <div className="bg-secondary size-14 rounded-2xl grid place-content-center text-3xl text-white">
        <PiTarget />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
        {ourMission.title}
      </h3>
      <p className="text-gray leading-relaxed">{ourMission.desc}</p>
      <p className="font-semibold text-primary">{ourMission.subtitle}</p>
      <ul className="grid gap-2 text-gray">
        {ourMission.ourMissionCommitments.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-secondary">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p className="text-gray leading-relaxed">{ourMission.desc2}</p>
    </div>
  );
}
