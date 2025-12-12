"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const meats = [
  {
    id: 1,
    title: "JAPANESE WAGYU",
    subtitle: "Il mito giapponese, marezzatura setosa e umami profondo.",
    image: "/images/JAPANESE WAGYU 2.png",
    alt: "Taglio di carne Japanese Wagyu con marezzatura caratteristica",
  },
  {
    id: 2,
    title: "RUBIA GALLEGA",
    subtitle: "La regina spagnola: lunga frollatura, grasso nocciola, sapore deciso.",
    image: "/images/RUBIA GALLEGA 2.png",
    alt: "Carne Rubia Gallega con caratteristico grasso nocciola",
  },
  {
    id: 3,
    title: "SASHI FINLAND",
    subtitle: "Nordica e ricca, equilibrio tra dolcezza e mineralità.",
    image: "/images/SASHI FINLANDESE 2.png",
    alt: "Taglio premium di carne Sashi Finland",
  },
  {
    id: 4,
    title: "BLACK ANGUS",
    subtitle: "Classico intramontabile: marezzatura gentile, succo e brace.",
    image: "/images/BLACK ANGUS 2.png",
    alt: "Bistecca Black Angus con marezzatura naturale",
  },
  {
    id: 5,
    title: "FASSONA PIEMONTESE",
    subtitle: "Fine e magra, elegante al coltello, dolcezza naturale.",
    image: "/images/FASSONA PIEMONTESE 2.png",
    alt: "Carne Fassona Piemontese italiana di alta qualità",
  },
] as const;

function ImageWithSpotlight({ src, alt, priority, isHovered }: { src: string; alt: string; priority?: boolean; isHovered?: boolean }) {
  return (
    <div className="relative aspect-[16/9]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
        className={`object-contain transition-all duration-500 ${
          isHovered ? "scale-105 brightness-100" : "scale-100 brightness-90"
        }`}
        priority={priority}
      />
    </div>
  );
}

export default function LeNostreCarniPage() {
  const [active, setActive] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

            // Anima le luci di sfondo
            bgRefs.current.forEach((bg, i) => {
              if (bg) {
                gsap.to(bg, {
                  opacity: i === idx ? 1 : 0,
                  duration: 0.6,
                  ease: "power2.inOut",
                });
              }
            });
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
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,17,17,0.15),transparent_60%)]" />

        <div className="relative flex max-w-5xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#6B1111]/90">
            Le nostre carni
          </p>
          <h1 className="font-bold uppercase tracking-tighter text-4xl leading-tight sm:text-5xl md:text-6xl text-stone-50">
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
              className="absolute inset-0 transition-opacity duration-600"
              style={{
                opacity: idx === 0 ? 1 : 0,
              }}
            >
              {/* Immagine di sfondo */}
              <div
                className="absolute inset-0"
                style={
                  item.image
                    ? {
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : { backgroundColor: "transparent" }
                }
              />
              {/* Overlay scuro */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
            </div>
          ))}
        </div>

        <div className="relative z-20">
          <div className="relative h-[70vh] md:h-[80vh]">
            <div
              ref={trackRef}
              className="flex h-full items-center gap-10 px-6 md:gap-16 md:px-12 lg:px-16"
            >
              {meats.map((item, idx) => {
                const isHighlighted = idx === active || hoveredCard === idx;
                return (
                <article
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group flex min-w-[80vw] max-w-[80vw] flex-col md:min-w-[50vw] md:max-w-[50vw] lg:min-w-[40vw] lg:max-w-[40vw] ${
                    isHighlighted ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  } transition-all duration-500`}
                  aria-current={idx === active}
                >
                  {/* Image Container - Shadow effect */}
                  <div className={`relative mb-8 transition-all duration-500 ${
                    isHighlighted
                      ? "drop-shadow-[0_15px_40px_rgba(0,0,0,0.5),0_5px_20px_rgba(74,0,0,0.2)]"
                      : "drop-shadow-[0_25px_60px_rgba(0,0,0,0.9),0_15px_40px_rgba(74,0,0,0.6)]"
                  }`}>
                    {/* Image with spotlight effect */}
                    <ImageWithSpotlight
                      src={item.image}
                      alt={item.alt}
                      priority={idx === 0}
                      isHovered={isHighlighted}
                    />
                  </div>

                  {/* Text Content - Fixed height layout */}
                  <div className="flex flex-1 flex-col space-y-4">
                    <div className="lnc-text text-sm uppercase tracking-[0.28em] text-stone-50 font-medium">
                      {item.title}
                    </div>
                    <h3 className="lnc-text font-serif text-3xl leading-tight text-stone-50 md:text-4xl lg:text-5xl min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
                      {item.subtitle}
                    </h3>
                    <div className="mt-auto pt-2">
                      <ShimmerButton
                        href="#"
                        background="rgba(74, 0, 0, 1)"
                        shimmerColor="#ff8b8b"
                        className="lnc-text h-11 px-5 text-xs"
                      >
                        Scopri di più
                      </ShimmerButton>
                    </div>
                  </div>
                </article>
              );
              })}
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

