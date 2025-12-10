"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type LenisScrollProps = {
  children: ReactNode;
};

export default function LenisScroll({ children }: LenisScrollProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.08, // heavy / luxury inertia
      wheelMultiplier: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    const raf = (time: number) => {
      // gsap ticker supplies time in seconds; Lenis expects ms
      lenis.raf(time * 1000);
    };

    const update = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", update);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

