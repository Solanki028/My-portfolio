"use client";

import { useEffect, useState } from "react";
import { m, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <m.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isHovered ? 2 : 1,
        backgroundColor: isHovered ? "rgba(197, 255, 82, 0.3)" : "rgba(0, 0, 0, 0.1)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-black/10 backdrop-blur-[2px] hidden md:block"
    />
  );
}
