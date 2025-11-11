import { heroSlider } from "@/constant/home";
import { Carousel } from "flowbite-react";

export default function HeroSlider() {
  return (
    <div className="h-screen">
      {" "}
      <Carousel>
        {heroSlider.sliderContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
            <img
              src={item.img}
              alt={item.title}
              className="object-fill w-full  relative z-[9]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="text-3xl font-bold  text-white">{item.title}</h2>
              <p className="text-lg  text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
