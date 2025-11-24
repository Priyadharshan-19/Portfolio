"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Get the actual height of the fixed header element dynamically
    const headerElement = document.querySelector("header");
    let dynamicOffset = 0;

    if (headerElement) {
      // Get the precise height and add a small buffer (e.g., 8px)
      dynamicOffset = headerElement.offsetHeight + 8;
    }

    // Fallback offset (64px = 4rem, matching the CSS) if the header isn't found
    const finalOffset = dynamicOffset > 0 ? dynamicOffset : 64;

    // 2. Initialize Lenis with updated valid options
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,

      // Keep your dynamic offset
      offset: finalOffset,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
