"use client";
import { navItems } from "@/components/common/Navbar/constant";
import TitleSection from "@/components/title";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  title: string;
  bg?: string;
  children?: React.ReactNode;
};
export default function OurServicesHeader({
  // bg = "url('/bg-2.jpg')",
  title,
  children,
}: props) {
  const pathname = usePathname();
  const ourServicesList = navItems.find(
    (item) => item.label === "Our Services"
  )!.list;
  return (
    <>
      <div
        className="container grid grid-cols-1 md:grid-cols-[auto_1fr] pt-[150px] gap-10 items-center"
        // style={{
        //   backgroundImage: bg,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <ul className="gap-4 bg-[#f1f1f1] p-4 rounded-lg hidden md:grid">
          {ourServicesList?.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`text-lg font-semibold hover:text-primary transition-colors ${
                    item.path === pathname ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <TitleSection title={title} className="text-left w-full" />

          <div className="px-4 mx-auto py-[40px] grid gap-4">{children}</div>
        </div>
      </div>
    </>
  );
}
