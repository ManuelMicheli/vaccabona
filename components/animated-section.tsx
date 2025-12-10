"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 24,
  id,
}: AnimatedSectionProps) {
  const variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      variants={variants}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
}

