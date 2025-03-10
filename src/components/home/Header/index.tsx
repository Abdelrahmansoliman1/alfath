"use client";

import Navbar from "@/components/common/Navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
export default function HomeHeader() {
  const [outHeader, setOutHeader] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const out = current >= window.innerHeight;
    // setScrollDirection(diff > 0 ? "down" : "up");
    setOutHeader(out);
  });
  return <Navbar show={outHeader} />;
}
