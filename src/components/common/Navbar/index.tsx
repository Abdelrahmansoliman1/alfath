import Link from "next/link";
import {
  Navbar as NavbarFlowbite,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { theme } from "./theme";

export default function Navbar() {
  return (
    <NavbarFlowbite theme={theme}>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={170}
          height={40}
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </NavbarFlowbite>
  );
}
