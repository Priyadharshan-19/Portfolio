// priya-portfolio/app/layout.tsx

import "./globals.css";
import type { ReactNode } from "react";
// Import main components
import SmoothScrollProvider from "./smooth-scroll-provider";
import Header from "./sections/header";
import Footer from "./sections/footer";
// Import the Floating AI Widget
import FloatingAIWidget from "./components/FloatingAIWidget"; // <--- ADDED

// ❌ REMOVED: ParticleBackground import (switched to CSS animation)

export const metadata = {
  title: "Priya Dharshan | AI & Cybersecurity Portfolio",
  description:
    "Portfolio of Priya Dharshan – AI & Cybersecurity Enthusiast, Computer Vision, Java & Python Developer."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-slate-100 antialiased">
        
        {/* ❌ REMOVED: <div className="animated-bg-layer" /> 
             The animation styles are now applied directly below in globals.css. */}
        
        {/* SmoothScrollProvider wraps the main content */}
        <SmoothScrollProvider>
          <Header />
          {children} {/* Renders all your sections */}
          <Footer />
        </SmoothScrollProvider>

        {/* Floating AI Widget is placed outside the SmoothScrollProvider 
            to ensure it remains fixed relative to the viewport for global access. */}
        <FloatingAIWidget /> {/* <--- ADDED */}
        
      </body>
    </html>
  );
}