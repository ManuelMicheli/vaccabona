"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Flame,
  ChefHat
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { restaurantMenu } from "@/constants/data";
import { useRef } from "react";

type MenuItem = {
  name: string;
  note: string;
};

type MenuColumnProps = {
  title: string;
  items: ReadonlyArray<MenuItem> | MenuItem[];
  icon?: React.ReactNode;
  index: number;
};

function MenuColumn({ title, items, icon, index }: MenuColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900/80 to-stone-950 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] border border-white/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(circle_at_20%_20%,rgba(74,0,0,0.08),transparent_50%)] before:opacity-0 before:transition before:duration-500 hover:before:opacity-100"
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
        {icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8b8b]/20 to-[#ff6b6b]/15 text-[#ff9999]">
            {icon}
          </span>
        )}
        <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3] font-medium">{title}</p>
      </div>
      <div className="space-y-5 flex-1">
        {items.map((item, itemIndex) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
            className="group/item relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-[#ff8b8b] before:to-[#ff6b6b] before:opacity-70 before:transition-opacity hover:before:opacity-100"
          >
            <p className="font-serif text-xl text-stone-50 transition-colors group-hover/item:text-[#ffb3b3]">{item.name}</p>
            <p className="text-sm text-stone-400/90 mt-1 leading-relaxed">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


function SignatureDish({ item, index }: { item: { title: string; description: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ff8b8b]/15 via-[#ff6b6b]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-[#ff8b8b]/20 bg-gradient-to-br from-[#ff8b8b]/8 via-stone-900/95 to-stone-950 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-all duration-500 group-hover:border-[#ff8b8b]/40 group-hover:shadow-[0_32px_100px_rgba(255,139,139,0.15)]">

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,139,139,0.08),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`
        }} />

        <div className="relative space-y-4">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8b8b]/20 to-[#ff6b6b]/15">
              <Flame className="h-5 w-5 text-[#ff9999]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#ff8b8b] to-[#ff6b6b]" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#ffb3b3]">
                Signature
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h4 className="font-serif text-2xl leading-tight tracking-tight text-stone-50 transition-colors duration-300 group-hover:text-[#ffb3b3] sm:text-3xl">
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed text-stone-300/90 transition-colors duration-300 group-hover:text-stone-200/95">
              {item.description}
            </p>
          </div>

          {/* Bottom accent */}
          <div className="pt-3">
            <div className="h-[2px] w-0 rounded-full bg-gradient-to-r from-[#ff8b8b] via-[#ff6b6b] to-transparent transition-all duration-700 group-hover:w-full" />
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-tl from-[#ff8b8b]/8 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <div className="relative py-16">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-4"
      >
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20" />
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#ff8b8b] to-[#ff6b6b]" />
          <Flame className="h-5 w-5 text-[#ff9999]" />
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#ff8b8b] to-[#ff6b6b]" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20" />
      </motion.div>
    </div>
  );
}

export default function MenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero Section - Nero elegante */}
      <section className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/CARNE ALLA BRACE.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,0,0,0.12),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(107,17,17,0.08),transparent_50%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto max-w-6xl space-y-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
            Ristorante
          </p>
          <h1 className="font-serif text-4xl text-stone-50 sm:text-5xl lg:text-6xl">
            Menù alla{" "}
            <span className="bg-gradient-to-r from-[#ff8b8b] via-[#ff9999] to-[#ffb3b3] bg-clip-text text-transparent">
              brace
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-200/85">
            Antipasti selezionati, tagli alla brace e contorni pensati per esaltare la carne.
            Degustazioni carving-style, servizio curato e cantina selezionata.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <ShimmerButton
              href="/#contatti"
              background="rgba(74, 0, 0, 1)"
              shimmerColor="#ff8b8b"
              className="h-12 px-7 text-xs"
            >
              Prenota la cena
            </ShimmerButton>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200/90 backdrop-blur-sm">
              <ChefHat size={18} className="text-[#ff9999]" />
              <span>Servizio alla carta</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Menu Sections - Grigio professionale */}
      <section className="relative bg-gradient-to-b from-black via-stone-950 to-stone-950 px-4 pb-12 pt-16 md:px-10 lg:px-14 xl:px-16">
        {/* Elegant transition gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <div className="grid gap-6 lg:grid-cols-3">
          <MenuColumn
            title="Antipasti"
            items={restaurantMenu.starters}
            icon={<Flame size={18} />}
            index={0}
          />
          <MenuColumn
            title="Secondi & Brace"
            items={restaurantMenu.mains}
            icon={<Flame size={18} />}
            index={1}
          />
          <MenuColumn
            title="Contorni"
            items={restaurantMenu.sides}
            icon={<Flame size={18} />}
            index={2}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="relative bg-stone-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-stone-950 via-stone-950/50 to-transparent" />
        <SectionDivider />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
      </div>

      {/* Signature Dishes Section - Nero elegante con grigio */}
      <section className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-black px-4 pb-24 pt-16 md:px-10 lg:px-14 xl:px-16">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl space-y-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff8b8b]" />
              <Flame className="h-6 w-6 text-[#ff9999]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff8b8b]" />
            </div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-[#ffb3b3]">
              Le nostre eccellenze
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-stone-50 sm:text-5xl">
              Signature Dishes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-300/80">
              Le nostre proposte d&apos;autore: dalla frollatura proprietaria alla brace viva,
              ogni dettaglio racconta la nostra passione per la carne di qualità.
            </p>
          </motion.div>

          {/* Signature cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {restaurantMenu.signatures.map((item, index) => (
              <SignatureDish key={item.title} item={item} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 pt-8"
          >
            <div className="text-center">
              <p className="text-sm text-stone-400">
                Tutti i piatti vengono serviti con contorni stagionali e pane fatto in casa
              </p>
            </div>
            <ShimmerButton
              href="/#contatti"
              background="rgba(74, 0, 0, 1)"
              shimmerColor="#ff8b8b"
              className="h-12 px-8 text-xs"
            >
              Prenota il tuo tavolo
            </ShimmerButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
