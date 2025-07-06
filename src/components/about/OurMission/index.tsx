import { PiTarget } from "react-icons/pi";

const ourMissionCommitments = [
  "Optimizing cargo handling with speed, accuracy, and care.",
  "Providing flexible, tailored solutions for global trade.",
  "Building lasting relationships based on trust, transparency, and communication.",
  "Leveraging innovation to enhance operational efficiency and visibility.",
  "Upholding the highest standards of safety, compliance, and sustainability.",
];

export default function OurMission() {
  return (
    <div className="grid gap-4">
      <div className="bg-primary size-14 rounded-full grid place-content-center text-3xl text-white">
        <PiTarget />
      </div>
      <h3 className="text-4xl font-bold text-primary">Our Mission</h3>
      <p className="text-black/80">
        At Al-Fath for Shipping Agencies, our mission is to deliver efficient,
        reliable, and cost-effective shipping solutions—driven by a deep
        commitment to our clients’ best interests. We pride ourselves on
        providing a level of service that goes beyond logistics, fostering
        trusted partnerships through personalized support and expert execution.
      </p>
      <p>We are dedicated to:</p>
      <ul className="grid gap-2 text-gray">
        {ourMissionCommitments.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary">•</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p className="text-black/80">
        With a skilled team, modern infrastructure, and a strong global network,
        Al-Fath stands apart as a shipping agency that puts clients
        first—delivering not only results, but peace of mind.
      </p>
    </div>
  );
}
