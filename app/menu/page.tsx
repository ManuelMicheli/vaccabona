"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Flame,
  ChefHat,
  UtensilsCrossed
} from "lucide-react";
import { Button } from "@/components/button";
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
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4A0000]/20 to-[#7A0000]/10 text-[#4A0000]">
            {icon}
          </span>
        )}
        <p className="text-xs uppercase tracking-[0.24em] text-[#6B1111]/90 font-medium">{title}</p>
      </div>
      <div className="space-y-5 flex-1">
        {items.map((item, itemIndex) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
            className="group/item relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-[#4A0000] before:to-[#7A0000] before:opacity-60 before:transition-opacity hover:before:opacity-100"
          >
            <p className="font-serif text-xl text-stone-50 transition-colors group-hover/item:text-[#6B1111]">{item.name}</p>
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
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#4A0000]/20 via-[#7A0000]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-[#4A0000]/20 bg-gradient-to-br from-[#4A0000]/12 via-stone-900/95 to-stone-950 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-all duration-500 group-hover:border-[#4A0000]/40 group-hover:shadow-[0_32px_100px_rgba(74,0,0,0.25)]">

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(122,0,0,0.15),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`
        }} />

        <div className="relative space-y-4">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4A0000]/20 to-[#7A0000]/10">
              <Flame className="h-5 w-5 text-[#4A0000]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#4A0000] to-[#7A0000]" />
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#6B1111]/90">
                Signature
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h4 className="font-serif text-2xl leading-tight tracking-tight text-stone-50 transition-colors duration-300 group-hover:text-[#6B1111] sm:text-3xl">
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed text-stone-300/90 transition-colors duration-300 group-hover:text-stone-200/95">
              {item.description}
            </p>
          </div>

          {/* Bottom accent */}
          <div className="pt-3">
            <div className="h-[2px] w-0 rounded-full bg-gradient-to-r from-[#4A0000] via-[#7A0000] to-transparent transition-all duration-700 group-hover:w-full" />
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-tl from-[#4A0000]/10 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
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
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#4A0000] to-[#7A0000]" />
          <Flame className="h-5 w-5 text-[#4A0000]" />
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#4A0000] to-[#7A0000]" />
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
    <div ref={containerRef} className="min-h-screen bg-black text-stone-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(74,0,0,0.12),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(122,0,0,0.08),transparent_50%)]" />

        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative px-4 py-20 md:px-10 md:py-28 lg:px-14 xl:px-16"
        >
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4A0000]/20 to-[#7A0000]/10 shadow-[0_8px_32px_rgba(74,0,0,0.2)]">
                <UtensilsCrossed className="h-6 w-6 text-[#4A0000]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#6B1111]/80">
                  Ristorante
                </span>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#4A0000] to-transparent" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-5xl leading-tight tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
                Menù alla{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#4A0000] via-[#6B1111] to-[#7A0000] bg-clip-text text-transparent">
                    brace
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#4A0000]/30 to-[#7A0000]/30 blur-xl" />
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <Flame className="h-5 w-5 flex-shrink-0 text-[#4A0000]" />
                <p className="text-lg text-stone-200/90 md:text-xl">
                  Sapori autentici dal fuoco vivo
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl text-base leading-relaxed text-stone-300/85 md:text-lg"
            >
              Antipasti selezionati, tagli alla brace e contorni pensati per esaltare la carne.
              Degustazioni carving-style, servizio curato e cantina selezionata per accompagnare
              ogni portata con il giusto equilibrio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button
                href="/#contatti"
                variant="primary"
                className="h-12 px-7 text-xs uppercase tracking-[0.24em] shadow-[0_12px_40px_rgba(74,0,0,0.4)]"
              >
                Prenota la cena
              </Button>
              <Button
                href="/#contatti"
                variant="outline"
                className="h-12 px-7 text-xs uppercase tracking-[0.24em]"
              >
                Richiedi info
              </Button>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200/90 backdrop-blur-sm">
                <ChefHat size={18} className="text-[#4A0000]" />
                <span>Servizio alla carta</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Menu Sections */}
      <section className="relative px-4 pb-12 md:px-10 lg:px-14 xl:px-16">
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
      <SectionDivider />

      {/* Signature Dishes Section */}
      <section className="relative px-4 pb-24 md:px-10 lg:px-14 xl:px-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#4A0000]" />
              <Flame className="h-6 w-6 text-[#4A0000]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#4A0000]" />
            </div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-[#6B1111]/80">
              Le nostre eccellenze
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-stone-50 sm:text-5xl">
              Signature Dishes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-300/80">
              Le nostre proposte d'autore: dalla frollatura proprietaria alla brace viva,
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
            <Button
              href="/#contatti"
              variant="primary"
              className="h-12 px-8 text-xs uppercase tracking-[0.24em]"
            >
              Prenota il tuo tavolo
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
