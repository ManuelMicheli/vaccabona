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

const toneStyles: Record<NonNullable<MarqueeItem["tone"]>, string> = {
  rosso: "from-red-600/30 via-amber-500/5 to-stone-900",
  ambra: "from-amber-500/30 via-orange-500/10 to-stone-900",
  bronzo: "from-orange-600/30 via-amber-500/5 to-stone-900",
  oro: "from-yellow-500/30 via-amber-500/10 to-stone-900",
  rame: "from-rose-500/30 via-amber-500/5 to-stone-900",
};

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
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="320px"
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

