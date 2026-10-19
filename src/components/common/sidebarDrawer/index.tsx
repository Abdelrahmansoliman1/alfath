"use client";

import PrimaryBtn from "@/components/buttons/primaryBtn";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { navItems } from "../Navbar/constant";
import Link from "next/link";
import { sidebarTheme } from "./theme";

export function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <PrimaryBtn
        onClick={() => setIsOpen(true)}
        color="whiteOutLine"
        id="drawer"
        className="!w-fit min-w-auto !px-3 rounded-xl lg:hidden"
      >
        <Icon path={mdiMenu} size={1} />
      </PrimaryBtn>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            theme={sidebarTheme}
          >
            <Sidebar.Logo href="/" img="/logo.png" imgAlt="Alfath logo" />

            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {navItems.map((item) => {
                  // if (item.list) {
                  //   return (
                  //     <Sidebar.Collapse label={item.label} key={item.label}>
                  //       {item.list.map((listItem) => (
                  //         <Sidebar.Item
                  //           href={listItem.path}
                  //           key={listItem.label}
                  //           as={Link}
                  //           onClick={handleClose}
                  //         >
                  //           {listItem.label}
                  //         </Sidebar.Item>
                  //       ))}
                  //     </Sidebar.Collapse>
                  //   );
                  // }

                  return (
                    <Sidebar.Item
                      href={item.path}
                      key={item.label}
                      as={Link}
                      onClick={handleClose}
                    >
                      {item.label}
                    </Sidebar.Item>
                  );
                })}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
            <Link
              href={"/?section=quote"}
              onClick={handleClose}
              className="mt-6 block"
            >
              <PrimaryBtn id="drawerGetAQuote" color="secondary" fullSized>
                Request A Quote
              </PrimaryBtn>
            </Link>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
