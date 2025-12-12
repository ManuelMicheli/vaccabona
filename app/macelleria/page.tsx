"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ProductCard } from "@/components/product-card";
import { butcherProducts, businessInfo, hours } from "@/constants/data";
import { AnimatedSection } from "@/components/animated-section";

export default function MacelleriaPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero Section - Nero elegante con immagine di sfondo */}
      <AnimatedSection
        id="macelleria-hero"
        className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-10 lg:px-14 xl:px-16 2xl:px-20"
        y={24}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Tagli-pronti-marinati.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,0,0,0.12),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(107,17,17,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
            Macelleria
          </p>
          <h1 className="font-serif text-4xl text-stone-50 sm:text-5xl lg:text-6xl">
            Tagli pronti e marinati
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-200/85">
            Pronto-cuoci, marinature studiate, frollatura controllata. Tagli
            selezionati per la tua griglia.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <ShimmerButton
              href="/#contatti"
              background="rgba(74, 0, 0, 1)"
              shimmerColor="#ff8b8b"
              className="h-12 px-6 text-xs"
            >
              Contattaci
            </ShimmerButton>
            <div className="text-sm text-stone-300/80">
              <p>Orari: {hours.macelleria}</p>
              <p className="mt-1">Tel: {businessInfo.phone}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Grid - Grigio professionale */}
      <AnimatedSection
        className="relative bg-gradient-to-b from-black via-stone-950 to-stone-950 w-full px-4 pb-24 pt-16 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={22}
      >
        {/* Elegant transition gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/50 to-transparent" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_70%)]" />
        <div className="relative w-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {butcherProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Too Good To Go Section - Nero elegante con grigio */}
      <AnimatedSection
        className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-black w-full px-4 pb-24 pt-16 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={18}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_70%)]" />
        <div className="mx-auto max-w-4xl relative">
          <div className="rounded-3xl bg-emerald-500/10 p-6 text-emerald-50 shadow-[0_15px_50px_rgba(0,0,0,0.45)] md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/80">
                  Too Good To Go
                </p>
                <h3 className="mt-2 font-serif text-2xl text-emerald-50 sm:text-3xl">
                  Sacchetti sorpresa anti-spreco
                </h3>
                <p className="mt-2 text-emerald-50/90">
                  Tagli e preparazioni del giorno in edizione limitata. Prenota
                  dall&apos;app o chiama in bottega.
                </p>
              </div>
              <ShimmerButton
                href="https://www.toogoodtogo.com/"
                background="rgba(16, 185, 129, 0.1)"
                shimmerColor="#10b981"
                className="h-11 px-5 text-xs text-emerald-50 border-emerald-300/20"
              >
                Scopri ora
              </ShimmerButton>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

