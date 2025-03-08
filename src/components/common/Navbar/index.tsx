"use client";

import Link from "next/link";
import {
  Navbar as NavbarFlowbite,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import Image from "next/image";
import { theme } from "./theme";
import { navItems } from "./constant";
import { usePathname } from "next/navigation";
import { SidebarDrawer } from "../sidebarDrawer";

export default function Navbar({
  bg = "after:bg-black",
  show,
}: {
  bg?: string;
  show?: boolean;
}) {
  const pathname = usePathname();

  return (
    <NavbarFlowbite
      theme={theme}
      className={`after:absolute after:inset-0 after:w-full after: ${bg}  after:-z-10  text-black after:transition-all after:duration-300 after:origin-top ${
        show ? "after:scale-y-100 shadow-sm" : "after:scale-y-0"
      } `}
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={170}
          height={40}
        />
      </NavbarBrand>
      {/* <NavbarToggle /> */}
      <SidebarDrawer />
      <NavbarCollapse>
        {navItems.map((item) => {
          if (item.list) {
            return (
              <NavbarLink
                key={item.path}
                active={pathname.startsWith(item.path)}
              >
                <Dropdown
                  key={item.label}
                  label={item.label}
                  inline
                  className="cursor-pointer"
                >
                  {item.list.map((item) => {
                    const itemActive = pathname === item.path;

                    return (
                      <DropdownItem
                        key={item.path}
                        as={Link}
                        href={item.path}
                        className="[&>li]:w-full"
                      >
                        <NavbarLink
                          key={item.path}
                          as={Link}
                          href={item.path}
                          className={`w-full ${
                            itemActive ? "text-primary" : "text-black"
                          }`}
                        >
                          {item.label}
                        </NavbarLink>
                      </DropdownItem>
                    );
                  })}
                </Dropdown>
              </NavbarLink>
            );
          }

          return (
            <NavbarLink
              key={item.path}
              as={Link}
              href={item.path}
              active={pathname === item.path}
            >
              {item.label}
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
    </NavbarFlowbite>
  );
}
