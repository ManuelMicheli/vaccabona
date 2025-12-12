"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  fullDescription: string[];
  image: string;
  imageAlt: string;
  highlight?: string;
  cards?: Array<{
    title: string;
    description: string;
  }>;
}

interface AnimatedTimelineProps {
  events: TimelineEvent[];
}

export function AnimatedTimeline({ events }: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(containerRef, { margin: "-5% 0px -5% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Timeline on Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isTimelineInView ? 1 : 0, x: isTimelineInView ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed left-8 xl:left-12 top-0 h-screen z-50"
      >
        {/* Timeline Track */}
        <div className="relative h-full flex flex-col items-center py-20">
          {/* Background Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-px bg-stone-800/50" />

          {/* Progress Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-20 w-px bg-gradient-to-b from-[#ff8b8b] via-[#ff6b6b] to-[#ff8b8b] origin-top"
            style={{
              scaleY: smoothProgress,
              height: "calc(100% - 160px)"
            }}
          />

          {/* Timeline Points */}
          <div className="relative h-full flex flex-col justify-between py-20">
            {events.map((event, index) => (
              <TimelinePoint
                key={event.id}
                event={event}
                index={index}
                totalEvents={events.length}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      {events.map((event, index) => (
        <TimelineSection
          key={event.id}
          event={event}
          index={index}
          isLast={index === events.length - 1}
        />
      ))}
    </div>
  );
}

interface TimelinePointProps {
  event: TimelineEvent;
  index: number;
  totalEvents: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function TimelinePoint({ event, index, totalEvents, scrollProgress }: TimelinePointProps) {
  const pointRef = useRef<HTMLDivElement>(null);

  const progress = useTransform(
    scrollProgress,
    [index / totalEvents, (index + 0.5) / totalEvents, (index + 1) / totalEvents],
    [0, 1, 0]
  );

  const isActive = useTransform(progress, (v) => v > 0.3);

  const scrollToSection = () => {
    const section = document.getElementById(`timeline-section-${event.id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={pointRef} className="relative flex items-center">
      <motion.button
        onClick={scrollToSection}
        className="group relative flex items-center gap-4 cursor-pointer"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Point */}
        <motion.div
          className="relative w-3 h-3 rounded-full border-2 transition-colors duration-500"
          style={{
            borderColor: useTransform(progress, [0, 0.5, 1], ["rgb(87, 83, 78)", "rgb(255, 139, 139)", "rgb(87, 83, 78)"]),
            backgroundColor: useTransform(progress, [0, 0.5, 1], ["transparent", "rgb(255, 139, 139)", "transparent"]),
          }}
        >
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#ff8b8b]"
            style={{
              scale: useTransform(progress, [0, 0.5, 1], [0, 2, 0]),
              opacity: useTransform(progress, [0, 0.5, 1], [0, 0.3, 0]),
            }}
          />
        </motion.div>

        {/* Year Label */}
        <motion.div
          className="flex flex-col"
          style={{
            opacity: useTransform(progress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]),
          }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.2em] whitespace-nowrap"
            style={{
              color: useTransform(progress, [0, 0.5, 1], ["rgb(120, 113, 108)", "rgb(255, 139, 139)", "rgb(120, 113, 108)"]),
            }}
          >
            {event.year}
          </motion.span>
          <motion.span
            className="text-xs text-stone-500 mt-0.5 max-w-[120px] truncate"
            style={{
              opacity: useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
            }}
          >
            {event.title}
          </motion.span>
        </motion.div>
      </motion.button>
    </div>
  );
}

interface TimelineSectionProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

function TimelineSection({ event, index, isLast }: TimelineSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for image
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Content animations
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id={`timeline-section-${event.id}`}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="relative w-full h-full"
          style={{ scale: imageScale, y: imageY }}
        >
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="w-full pl-8 lg:pl-48 xl:pl-56 pr-8 lg:pr-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            {/* Mobile Year Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:hidden mb-6"
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#ff8b8b]">
                {event.year}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-stone-50 leading-[0.9] tracking-tight"
            >
              {event.title}
            </motion.h2>

            {/* Subtitle */}
            {event.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-4 text-xl lg:text-2xl text-[#ff8b8b]/90 font-light"
              >
                {event.subtitle}
              </motion.p>
            )}

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-24 h-px bg-gradient-to-r from-[#ff8b8b] to-transparent mt-8 mb-10 origin-left"
            />

            {/* Description */}
            <div className="space-y-6 max-w-2xl">
              {event.fullDescription.map((paragraph, pIndex) => (
                <motion.p
                  key={pIndex}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                  transition={{ duration: 0.6, delay: 0.5 + pIndex * 0.1 }}
                  className="text-lg lg:text-xl text-stone-300/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* Highlight Box */}
            {event.highlight && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-10 p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl"
              >
                <p
                  className="text-xl lg:text-2xl font-medium text-stone-100 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: event.highlight }}
                />
              </motion.div>
            )}

            {/* Cards */}
            {event.cards && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {event.cards.map((card, cardIndex) => (
                  <motion.div
                    key={cardIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.7 + cardIndex * 0.1 }}
                    className="group p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#ff8b8b]/30"
                  >
                    <h4 className="text-xl font-serif text-[#ff8b8b] mb-2 group-hover:text-[#ffb3b3] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-stone-400 group-hover:text-stone-300 transition-colors">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Timeline Indicator */}
      <div className="lg:hidden absolute left-4 top-0 bottom-0 w-px">
        <div className="absolute inset-0 bg-stone-800/30" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff8b8b] to-[#ff8b8b]/30 origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ height: "100%" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff8b8b]"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
      </div>

      {/* Scroll Indicator for first section */}
      {index === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Scorri</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-stone-500 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
