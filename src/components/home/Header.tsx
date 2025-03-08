"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Navbar from "../common/Navbar";
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
