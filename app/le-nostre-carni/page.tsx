"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/button";

const meats = [
  {
    id: 1,
    title: "JAPANESE WAGYU",
    subtitle: "Il mito giapponese, marezzatura setosa e umami profondo.",
    image: "",
  },
  {
    id: 2,
    title: "RUBIA GALLEGA",
    subtitle: "La regina spagnola: lunga frollatura, grasso nocciola, sapore deciso.",
    image: "",
  },
  {
    id: 3,
    title: "SASHI FINLAND",
    subtitle: "Nordica e ricca, equilibrio tra dolcezza e mineralità.",
    image: "",
  },
  {
    id: 4,
    title: "BLACK ANGUS",
    subtitle: "Classico intramontabile: marezzatura gentile, succo e brace.",
    image: "",
  },
  {
    id: 5,
    title: "FASSONA PIEMONTESE",
    subtitle: "Fine e magra, elegante al coltello, dolcezza naturale.",
    image: "",
  },
] as const;

export default function LeNostreCarniPage() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Horizontal scroll-linked carousel
      const total = meats.length;
      const snap = 1 / (total - 1);
      if (!wrapperRef.current || !trackRef.current) return;

      const endDistance = Math.max(
        (trackRef.current?.scrollWidth || 0) - (wrapperRef.current?.offsetWidth || 0),
        window.innerWidth,
      );

      gsap.to(trackRef.current, {
        xPercent: -100 * (total - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${endDistance}`,
          scrub: 1,
          pin: true,
          snap: (value) => Math.round(value / snap) * snap,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (total - 1));
            setActive(idx);
          },
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-stone-100">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
        <div className="relative flex max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#ffb3b3]/80">
            Le nostre carni
          </p>
          <h1 className="font-bold uppercase tracking-tighter text-4xl leading-tight sm:text-5xl md:text-6xl">
            LE NOSTRE CARNI
          </h1>
          <p className="max-w-2xl text-base text-stone-300 sm:text-lg">
            Tagli selezionati, frollatura controllata e una selezione curata per percorsi di
            degustazione iconici.
          </p>
        </div>
      </section>

      {/* Carousel pinned */}
      <section ref={wrapperRef} className="relative overflow-hidden bg-black">
        {/* Backgrounds */}
        <div className="absolute inset-0">
          {meats.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) bgRefs.current[idx] = el;
              }}
              className="absolute inset-0"
              style={
                item.image
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.9)), url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : { backgroundColor: "transparent" }
              }
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="relative h-[70vh] md:h-[80vh]">
            <div
              ref={trackRef}
              className="flex h-full items-center gap-10 px-6 md:gap-16 md:px-12 lg:px-16"
            >
              {meats.map((item, idx) => (
                <article
                  key={item.id}
                  className={`min-w-[80vw] max-w-[80vw] md:min-w-[50vw] md:max-w-[50vw] lg:min-w-[40vw] lg:max-w-[40vw] ${
                    idx === active ? "scale-100 opacity-100" : "scale-90 opacity-65"
                  } transition-transform duration-400`}
                  aria-current={idx === active}
                >
                  <div className="lnc-text text-xs uppercase tracking-[0.28em] text-[#ffb3b3]/80">
                    {item.title}
                  </div>
                  <h3 className="lnc-text mt-3 font-serif text-3xl text-stone-50 md:text-4xl">
                    {item.subtitle}
                  </h3>
                  <Button
                    href="#"
                    variant="primary"
                    className="lnc-text mt-6 h-11 px-5 text-xs uppercase tracking-[0.22em]"
                  >
                    Scopri di più
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer mimic */}
      <footer className="border-t border-white/5 bg-black/80 px-6 py-10 text-stone-400 md:px-12 lg:px-16">
        <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em]">
          <span>Vacca Bòna · Le nostre carni</span>
          <span>Selezione premium · Frollatura controllata · Brace viva</span>
        </div>
      </footer>
    </div>
  );
}

