import { PiTarget } from "react-icons/pi";

const ourMissionCommitments = [
  "Optimizing cargo handling and shipping operations with precision and speed.",
  "Enhancing global trade connectivity through seamless logistics solutions.",
  "Building long-term partnerships based on trust, transparency, and efficiency.",
  "Embracing innovation and digital transformation to improve service quality.",
  "Upholding international safety and environmental standards for sustainable shipping.",
];

export default function OurMission() {
  return (
    <div className="grid gap-4">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <PiTarget />
      </div>
      <h3 className="text-4xl font-bold text-primary">Our Mission</h3>
      <p className="text-black/80">
        At Al-Fath for Shipping Agencies, our mission is to redefine excellence
        in global logistics and maritime services by providing efficient,
        reliable, and cost-effective shipping solutions. <br />
        We are committed to:
      </p>

      <ul className="grid gap-2 text-gray">
        {ourMissionCommitments.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <p className="text-black/80">
        Through our expert team, state-of-the-art facilities, and strategic
        global partnerships, we strive to deliver exceptional value to our
        clients, ensuring their success in the ever-evolving maritime industry.
      </p>
    </div>
  );
}
