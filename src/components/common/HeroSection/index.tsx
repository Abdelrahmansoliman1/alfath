import TitleSection from "@/components/title";
import SeaWaves from "../SeaWaves";

type HeroSectionProps = {
  title: string;
  image: string;
  className?: string;
  children?: React.ReactNode;
};

export default function HeroSection({ title, children }: HeroSectionProps) {
  return (
    <div className="relative  py-[100px] pt-[150px]">
      {/* <Image
        src={image}
        priority
        fill
        alt="header background"
        className="sticky top-0 left-0 object-cover"
      /> */}

      <SeaWaves className="absolute inset-0" />

      <div className="container">
        <TitleSection title={title} className="z-10 relative text-white" />
        {children}
      </div>
    </div>
  );
}
