"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeItem = {
  title: string;
  caption: string;
  image?: string;
  tone?: "rosso" | "ambra" | "bronzo" | "oro" | "rame";
};

type InfiniteMarqueeProps = {
  items: MarqueeItem[];
  speed?: number;
  className?: string;
  unstyled?: boolean;
};

type TextMarqueeProps = {
  text: string;
  speed?: number;
  className?: string;
};

const toneStyles: Record<NonNullable<MarqueeItem["tone"]>, string> = {
  rosso: "from-red-600/30 via-amber-500/5 to-stone-900",
  ambra: "from-amber-500/30 via-orange-500/10 to-stone-900",
  bronzo: "from-orange-600/30 via-amber-500/5 to-stone-900",
  oro: "from-yellow-500/30 via-amber-500/10 to-stone-900",
  rame: "from-rose-500/30 via-amber-500/5 to-stone-900",
};

export function TextMarquee({
  text,
  speed = 20,
  className,
}: TextMarqueeProps) {
  const items = Array(8).fill(text);

  return (
    <div className={cn("relative isolate overflow-hidden py-10 md:py-14", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff8b8b]/[0.03] to-transparent" />
      <motion.div
        className="flex min-w-max items-center gap-8 md:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12">
            <span className="font-heading text-xl font-light uppercase tracking-[0.25em] text-stone-100/90 md:text-2xl lg:text-3xl">
              {item}
            </span>
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#ff8b8b] to-[#e28b3f] shadow-[0_0_8px_rgba(255,139,139,0.5)]" />
            </span>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff8b8b]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff8b8b]/20 to-transparent" />
    </div>
  );
}

export function InfiniteMarquee({
  items,
  speed = 18,
  className,
  unstyled = false,
}: InfiniteMarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        unstyled
          ? ""
          : "rounded-3xl bg-stone-900/50 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <motion.div
        className="flex min-w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {sequence.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className={cn(
              "relative flex min-w-[260px] max-w-[320px] flex-col justify-between overflow-hidden rounded-2xl px-5 py-4 backdrop-blur",
              "bg-gradient-to-br from-stone-950 via-stone-900/90 to-stone-950 shadow-[0_15px_50px_rgba(0,0,0,0.4)]",
              item.tone ? toneStyles[item.tone] : "from-stone-900/80 to-stone-950",
            )}
          >
            {item.image && (
              <div className="absolute inset-0 opacity-60">
                <Image
                  src={item.image}
                  alt={`${item.title}${item.caption ? ` - ${item.caption}` : ""}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 320px"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/75" />
              </div>
            )}
            <div className="relative z-10 text-sm uppercase tracking-[0.2em] text-amber-100 drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]">
              {item.title}
            </div>
            <p className="relative z-10 mt-2 text-sm text-stone-50 drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)]">
              {item.caption}
            </p>
            <div className="relative z-10 mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </article>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-950 via-stone-950/80 to-transparent" />
    </div>
  );
}

