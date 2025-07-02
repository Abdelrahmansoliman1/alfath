"use client";

import Link from "next/link";
import {
  Navbar as NavbarFlowbite,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Image from "next/image";
import { theme } from "./theme";
import { navItems } from "./constant";
// import { usePathname } from "next/navigation";
import { SidebarDrawer } from "../sidebarDrawer";
import PrimaryBtn from "@/components/buttons/primaryBtn";

export default function Navbar() {
  // const pathname = usePathname();

  return (
    <NavbarFlowbite
      theme={theme}
      className={`after:absolute after:inset-0 after:w-full after: after:bg-black/70  after:-z-10  text-black after:transition-all after:duration-300 after:origin-top`}
    >
      <NavbarBrand as={Link} href="/">
        <Image
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={170}
          height={44}
          priority
        />
      </NavbarBrand>

      {/* <NavbarToggle /> */}

      <NavbarCollapse>
        {navItems.map((item) => {
          // if (item.list) {
          //   return (
          //     <NavbarLink
          //       key={item.path}
          //       active={pathname.startsWith(item.path)}
          //     >
          //       <Dropdown
          //         key={item.label}
          //         label={item.label}
          //         inline
          //         className="cursor-pointer"
          //       >
          //         {item.list.map((item) => {
          //           const itemActive = pathname === item.path;

          //           return (
          //             <DropdownItem
          //               key={item.path}
          //               as={Link}
          //               href={item.path}
          //               className="[&>li]:w-full"
          //             >
          //               <NavbarLink
          //                 key={item.path}
          //                 as={Link}
          //                 href={item.path}
          //                 className={`w-full ${
          //                   itemActive ? "text-primary" : "text-black"
          //                 }`}
          //               >
          //                 {item.label}
          //               </NavbarLink>
          //             </DropdownItem>
          //           );
          //         })}
          //       </Dropdown>
          //     </NavbarLink>
          //   );
          // }

          return (
            <NavbarLink
              key={item.path}
              as={Link}
              href={item.path}
              // active={
              //   item.label === "Home"
              //     ? pathname === "/"
              //     : pathname.includes(item.path)
              // }
            >
              {item.label}
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
      <div className="flex gap-4 items-center ms-auto grow justify-between sm:justify-end">
        <Link href={"/?section=quote"}>
          <PrimaryBtn id="GetAQuote">Request A Quote</PrimaryBtn>
        </Link>
        <SidebarDrawer />
      </div>
    </NavbarFlowbite>
  );
}
