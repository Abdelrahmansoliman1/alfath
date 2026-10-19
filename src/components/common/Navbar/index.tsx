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
      className="text-white"
    >
      <NavbarBrand as={Link} href="/">
        <Image
          src="/logo.png"
          className="h-8 w-auto sm:h-9"
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
      <div className="flex gap-3 items-center ms-auto justify-end">
        <Link href={"/?section=quote"} className="hidden sm:block">
          <PrimaryBtn id="GetAQuote" color="secondary">
            Request A Quote
          </PrimaryBtn>
        </Link>
        <SidebarDrawer />
      </div>
    </NavbarFlowbite>
  );
}
