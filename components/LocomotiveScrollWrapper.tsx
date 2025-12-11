"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

type LocomotiveScrollWrapperProps = {
  children: ReactNode;
};

export default function LocomotiveScrollWrapper({
  children,
}: LocomotiveScrollWrapperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const locoRef = useRef<any | null>(null);

  useLayoutEffect(() => {
    let locomotive: any | null = null;
    let containerEl: HTMLDivElement | null = null;
    let mounted = true;
    let cleanupRefresh: (() => void) | undefined;
    let anchorLinks: HTMLAnchorElement[] = [];
    let handleAnchorClick: ((event: MouseEvent) => void) | undefined;

    const init = async () => {
      if (!containerRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      containerEl = containerRef.current;

      const locomotiveModule = await import("locomotive-scroll");
      if (!mounted) return;
      const LocomotiveScroll = locomotiveModule.default;

      locomotive = new LocomotiveScroll({
        el: containerEl,
        smooth: true,
        lerp: 0.035, // heavy drag
        multiplier: 0.6, // slower movement
        tablet: { smooth: true, breakpoint: 0 },
        smartphone: { smooth: true },
      });
      locoRef.current = locomotive;

      // Smooth hash navigation without losing header
      handleAnchorClick = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLAnchorElement | null;
        if (!target) return;
        const href = target.getAttribute("href");
        if (!href) return;

        const url = new URL(href, window.location.origin);
        const hash = url.hash;
        if (!hash) return;

        // If the link points to a different path, allow normal navigation.
        if (url.pathname !== window.location.pathname) return;

        const selector = hash;
        const el = document.querySelector(selector);
        if (!el) return;

        if (locoRef.current) {
          event.preventDefault();
          locoRef.current.scrollTo(el, { duration: 1, disableLerp: false });
        }
      };
      anchorLinks = Array.from(
        document.querySelectorAll('a[href^="#"], a[href^="/#"]'),
      ) as HTMLAnchorElement[];
      if (handleAnchorClick) {
        anchorLinks.forEach((link) =>
          link.addEventListener("click", handleAnchorClick as EventListener),
        );
      }

      ScrollTrigger.scrollerProxy(containerEl, {
        scrollTop(value) {
          if (arguments.length && value !== undefined) {
            locomotive.scrollTo(value, { duration: 0, disableLerp: true });
          }
          return locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerEl.style.transform ? "transform" : "fixed",
      });

      locomotive.on("scroll", ScrollTrigger.update);
      const onRefresh = () => locomotive.update();
      ScrollTrigger.addEventListener("refresh", onRefresh);
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refresh", onRefresh);
      };
    };

    init().then((cleanup) => {
      cleanupRefresh = cleanup;
    });

    return () => {
      mounted = false;
      cleanupRefresh?.();
      if (locoRef.current) {
        locoRef.current.destroy();
        locoRef.current = null;
      }
      if (containerEl) {
        ScrollTrigger.scrollerProxy(containerEl, undefined as unknown as ScrollTrigger.Vars);
      }
      if (anchorLinks.length && handleAnchorClick) {
        anchorLinks.forEach((link) =>
          link.removeEventListener("click", handleAnchorClick as EventListener),
        );
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}

