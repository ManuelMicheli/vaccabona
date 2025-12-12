"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  { year: "II sec.", label: "Origini" },
  { year: "1868", label: "Meiji" },
  { year: "1997", label: "Tesoro" },
];

export default function JapaneseWagyuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const isStoryInView = useInView(storyRef, { margin: "-30% 0px -30% 0px" });
  const isCtaInView = useInView(ctaRef, { margin: "-30% 0px -30% 0px" });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-stone-100">
      {/* Fixed Timeline - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-6"
      >
        {/* Progress Line */}
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-stone-800/50">
          <motion.div
            className="w-full bg-gradient-to-b from-[#ff8b8b] to-[#ff8b8b]/50 origin-top"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />
        </div>

        {timelineData.map((item, i) => {
          const isActive = i === 0 ? !isStoryInView && !isCtaInView : i === 1 ? isStoryInView : isCtaInView;
          return (
            <div key={i} className="flex items-center gap-3 pl-0">
              <motion.div
                className="w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 z-10"
                animate={{
                  borderColor: isActive ? "#ff8b8b" : "rgb(68, 64, 60)",
                  backgroundColor: isActive ? "#ff8b8b" : "transparent",
                  scale: isActive ? 1.2 : 1,
                }}
              />
              <motion.div
                className="flex flex-col"
                animate={{ opacity: isActive ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-[#ff8b8b]" : "text-stone-600"}`}>
                  {item.year}
                </span>
                <span className="text-[10px] text-stone-500">{item.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* SECTION 1: Hero + Storia Condensata */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=90"
            alt="Japanese Wagyu"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 min-h-screen flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-12 lg:pl-20 xl:pl-32 2xl:pl-40"
        >
          {/* Top */}
          <div className="flex items-center justify-between pt-4 sm:pt-6">
            <ShimmerButton
              href="/"
              background="rgba(0, 0, 0, 0.3)"
              shimmerColor="#ffffff"
              className="h-8 px-3 text-[9px] backdrop-blur-sm border border-white/10 sm:h-9 sm:px-4 sm:text-[10px]"
              icon={ArrowLeft}
              iconPosition="left"
            >
              Home
            </ShimmerButton>
            <span className="text-[8px] uppercase tracking-[0.4em] text-stone-500 sm:text-[9px]">
              Storia del mese
            </span>
          </div>

          {/* Main */}
          <div className="flex-1 flex items-center py-8 sm:py-12 md:py-16">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#ff8b8b] mb-3 sm:mb-4"
              >
                Un viaggio millenario
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-50 leading-[0.9] tracking-tight"
              >
                Japanese<br />
                <span className="text-[#ff8b8b]">Wagyu</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 text-base text-stone-300/80 max-w-md leading-relaxed sm:mt-5 sm:text-lg md:mt-6 md:text-xl"
              >
                Duemila anni di selezione genetica.<br />
                Un&apos;eccellenza che il Giappone protegge come tesoro nazionale.
              </motion.p>
            </div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-end justify-between"
          >
            <div className="text-[10px] text-stone-600">
              <span className="text-stone-400">01</span> / 03
            </div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-stone-500 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: La Storia Essenziale */}
      <section ref={storyRef} className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1920&q=90"
            alt="Wagyu Storia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 lg:pl-20 xl:pl-32 2xl:pl-40">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isStoryInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#ff8b8b]"
              >
                La storia
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 font-serif text-3xl text-stone-50 leading-[0.95] sm:text-4xl sm:mt-4 md:text-5xl lg:text-6xl"
              >
                Dall&apos;era Meiji al<br />
                <span className="text-[#ff8b8b]">tesoro nazionale</span>
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isStoryInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-16 h-px bg-[#ff8b8b] mt-8 mb-8 origin-left"
              />

              {/* Timeline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8">
                {[
                  {
                    period: "II secolo d.C.",
                    title: "Le Origini",
                    text: "Bovini introdotti dalla Cina come animali da lavoro. Secoli di selezione naturale creano una genetica unica.",
                  },
                  {
                    period: "1868 — 1910",
                    title: "Rivoluzione Meiji",
                    text: "Incroci con razze europee. Nel 1910 il Giappone chiude le importazioni, preservando 4 razze pure.",
                  },
                  {
                    period: "1997 — Oggi",
                    title: "Tesoro Nazionale",
                    text: "Vietata l'esportazione di animali vivi. Sistema di grading A1-A5 per certificare l'eccellenza.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="group p-5 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-[#ff8b8b]/20"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff8b8b]/70">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-serif text-stone-100 mt-2 mb-2 group-hover:text-[#ffb3b3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-8 md:gap-12"
              >
                {[
                  { value: "BMS 12", label: "Marezzatura massima" },
                  { value: "A4-A5", label: "Gradi premium" },
                  { value: "4", label: "Razze pure" },
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-serif text-[#ff8b8b]">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-stone-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA Vacca Bòna */}
      <section ref={ctaRef} className="relative min-h-[80vh] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1920&q=90"
            alt="Wagyu Vacca Bòna"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[70vh] sm:min-h-[80vh] flex items-center py-12 sm:py-16 md:py-20">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 lg:pl-20 xl:pl-32 2xl:pl-40">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[10px] uppercase tracking-[0.3em] text-[#ff8b8b]"
              >
                Da Vacca Bòna
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 font-serif text-3xl text-stone-50 leading-[0.95] sm:text-4xl sm:mt-4 md:text-5xl lg:text-6xl"
              >
                Solo gradi<br />
                <span className="text-[#ff8b8b]">A4 e A5</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-stone-300/90 leading-relaxed"
              >
                Selezioniamo esclusivamente Wagyu giapponese certificato.
                Ogni taglio arriva con tracciabilità completa,
                dalla nascita al tuo piatto.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:mt-10"
              >
                <ShimmerButton
                  href="/le-nostre-carni"
                  background="rgba(255, 139, 139, 0.12)"
                  shimmerColor="#ff8b8b"
                  className="h-12 px-8 text-xs tracking-wider border border-[#ff8b8b]/30"
                >
                  Scopri la selezione
                </ShimmerButton>
                <ShimmerButton
                  href="/#contatti"
                  background="transparent"
                  shimmerColor="#ffffff"
                  className="h-12 px-8 text-xs tracking-wider border border-white/15"
                >
                  Prenota
                </ShimmerButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-12 text-[10px] text-stone-600"
              >
                <span className="text-stone-400">03</span> / 03
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
