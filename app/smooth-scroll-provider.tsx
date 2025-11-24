"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Get the actual height of the fixed header element dynamically
    const headerElement = document.querySelector('header');
    let dynamicOffset = 0;
    
    if (headerElement) {
      // Get the precise height and add a small buffer (e.g., 8px)
      // This ensures the content starts *below* the fixed header.
      dynamicOffset = headerElement.offsetHeight + 8; 
    }
    
    // Fallback offset (64px = 4rem, matching the CSS) if the header isn't found immediately
    const finalOffset = dynamicOffset > 0 ? dynamicOffset : 64; 

    // 2. Initialize Lenis with the determined offset
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      // Use the calculated offset here to stop the scroll above the anchor
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