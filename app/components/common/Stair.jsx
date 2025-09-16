"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useNav } from "@/app/contexts/NavContext";

const Stair = ({ children }) => {
  const stairParentRef = useRef(null);
  const tlRef = useRef(null);
  const pageRef = useRef(null);
  const pathname = usePathname();
  const { isNavOpen, setIsNavOpen } = useNav();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.6 },
      paused: true,
    });

    // show overlay
    tl.set(stairParentRef.current, { autoAlpha: 1 });

    // grow panels
    tl.from(".stair", {
      scaleY: 0,
      transformOrigin: "top center",
      stagger: { amount: -0.25 },
    });

    // slide out to reveal page
    tl.to(".stair", {
      y: "100%",
      stagger: { amount: -0.25 },
    });

    // hide overlay + reset
    tl.set(stairParentRef.current, { autoAlpha: 0 });
    tl.set(".stair", { y: "0%", scaleY: 1 });

    tlRef.current = tl;

    // play once on initial load
    tl.play();

    // fade in page content
  });

  // replay on route change
  useEffect(() => {
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
    });
    if (tlRef.current) {
      tlRef.current.restart();
    }
  }, [pathname, isNavOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={stairParentRef}
        className="h-screen fixed z-20 top-0 left-0 w-full pointer-events-none opacity-0"
      >
        <div className="h-full w-full flex">
          <div className="w-1/5 h-full stair bg-white"></div>
          <div className="w-1/5 h-full stair bg-white"></div>
          <div className="w-1/5 h-full stair bg-white"></div>
          <div className="w-1/5 h-full stair bg-white"></div>
          <div className="w-1/5 h-full stair bg-white"></div>
        </div>
      </div>

      {/* Page Content */}
      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default Stair;
