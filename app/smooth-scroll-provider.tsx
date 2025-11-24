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
      dynamicOffset = headerElement.offsetHeight + 8;
    }

    const finalOffset = dynamicOffset > 0 ? dynamicOffset : 64;

    // 2. Initialize Lenis (compatibility mode for your version)
    const lenis = new Lenis({
      smooth: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
      // Lenis does NOT support "offset" in your version
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
