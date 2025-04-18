type props = {
  title: string;
  bg?: string;
  children?: React.ReactNode;
};
export default function OurServicesHeader({
  bg = "url('/bg-2.jpg')",
  title,
  children,
}: props) {
  return (
    <>
      <div
        className="pb-[25%] relative -mb-[20%] -z-10 grid place-content-center"
        style={{
          backgroundImage: bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-[-1]  "></div>

        <div className="grid place-content-center place-items-center pt-[150px] pb-[50px]">
          <h1 className="text-4xl font-bold text-transparent text-stroke text-stroke-white">
            Our Services
          </h1>
          <div className="h-[1px] w-[300px] bg-white my-4" />
          <h2 className="text-6xl max-w-[600px] text-balance text-center font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="px-4 mx-auto py-[40px] text-white max-w-[600px] grid gap-4 bg-primary">
          {children}
        </div>
      </div>
    </>
  );
}
