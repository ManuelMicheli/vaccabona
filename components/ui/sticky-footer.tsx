"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Facebook, Instagram, MapPin, PhoneCall, Clock, Mail } from "lucide-react";
import { businessInfo, hours } from "@/constants/data";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[600px] sm:h-[680px] md:h-[720px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[600px] sm:h-[680px] md:h-[720px] w-full bg-black">
        <div className="sticky top-[calc(100vh-600px)] sm:top-[calc(100vh-680px)] md:top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-4 border-t border-white/10 px-4 py-6 sm:gap-5 sm:px-6 sm:py-8 md:px-12">
            {/* Background decorative gradients */}
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 contain-strict"
            >
              <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(74,0,0,0.06)_0,hsla(0,0%,55%,.02)_50%,rgba(74,0,0,0.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(74,0,0,0.04)_0,rgba(74,0,0,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,139,139,0.04)_0,rgba(255,139,139,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>

            <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 md:flex-row md:mt-10 xl:mt-0">
              {/* Brand Section */}
              <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-3 sm:space-y-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-black/50 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <Image
                    src="/images/logo.png"
                    alt={`${businessInfo.name} logo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                    priority
                  />
                </div>
                <div>
                  <p className="font-serif text-xl text-stone-50 mb-1 sm:text-2xl">
                    {businessInfo.name}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#ff8b8b]/80 mb-3 sm:mb-4">
                    Casorezzo · Milano
                  </p>
                </div>
                <p className="text-stone-200/80 text-xs sm:text-sm md:mt-0 leading-relaxed">
                  Macelleria di qualità e ristorante di carne a Casorezzo. 
                  Frollatura proprietaria, tagli selezionati e brace viva. 
                  Dalla tradizione italiana alla ricerca dell&apos;eccellenza.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2.5 text-xs text-stone-200/80 sm:space-y-3 sm:text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 text-[#ff8b8b] flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <p className="leading-relaxed">{businessInfo.address}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <PhoneCall size={16} className="mt-0.5 text-[#ff8b8b] flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <div className="space-y-1">
                      <a className="block hover:text-[#ffb3b3]" href={`tel:${businessInfo.phone}`}>
                        {businessInfo.phone}
                      </a>
                      <a className="block hover:text-[#ffb3b3]" href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}>
                        {businessInfo.mobile}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="mt-0.5 text-[#ff8b8b] flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <div>
                      <p>Macelleria: {hours.macelleria}</p>
                      <p>Ristorante: {hours.ristorante}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 text-[#ff8b8b] flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <div>
                      <a className="block hover:text-[#ffb3b3] break-all" href={`mailto:${businessInfo.emails.info}`}>
                        {businessInfo.emails.info}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 pt-1 sm:pt-2">
                  <a
                    href={businessInfo.socials.instagram}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-200/80 transition hover:bg-white/10 hover:text-[#ffb3b3] sm:h-10 sm:w-10"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a
                    href={businessInfo.socials.facebook}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-200/80 transition hover:bg-white/10 hover:text-[#ffb3b3] sm:h-10 sm:w-10"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>
              </AnimatedContainer>

              {/* Link Groups */}
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.1}
                  className="w-full"
                >
                  <div className="mb-6 sm:mb-8 md:mb-10 md:mb-0">
                    <h3 className="text-xs sm:text-sm uppercase tracking-wider text-stone-50 font-medium mb-3 sm:mb-4">
                      {group.label}
                    </h3>
                    <ul className="text-stone-200/80 mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-[#ffb3b3] inline-flex items-center transition-all duration-300 gap-2"
                          >
                            {link.icon && <link.icon className="size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            {/* Footer Bottom */}
            <div className="text-stone-400 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs sm:gap-4 sm:pt-5 sm:text-sm md:flex-row md:pt-6">
              <p className="text-center sm:text-left">
                © {new Date().getFullYear()} {businessInfo.name} · {businessInfo.owner}
              </p>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em]">
                  P.IVA {businessInfo.vat}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em]">
                  Macelleria & Ristorante · Carne di qualità
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Macelleria",
    links: [
      { title: "Tagli Pronti", href: "/macelleria" },
      { title: "Marinature", href: "/macelleria" },
      { title: "Frollatura", href: "/le-nostre-carni" },
      { title: "Consigli Cottura", href: "/macelleria" },
      { title: "Too Good To Go", href: "https://www.toogoodtogo.com/" },
    ],
  },
  {
    label: "Ristorante",
    links: [
      { title: "Menù", href: "/menu" },
      { title: "Brace Viva", href: "/menu" },
      { title: "Memuuu Experience", href: "/menu" },
      { title: "Prenotazioni", href: "/#contatti" },
      { title: "Orari", href: "/#contatti" },
    ],
  },
  {
    label: "Esperienze",
    links: [
      { title: "Le Nostre Carni", href: "/le-nostre-carni" },
      { title: "Selezione Tagli", href: "/macelleria" },
      { title: "Griglia & Sala", href: "/menu" },
    ],
  },
  {
    label: "Info",
    links: [
      { title: "Contatti", href: "/#contatti" },
      { title: "Dove Siamo", href: "/#contatti", icon: MapPin },
      { title: "Instagram", href: businessInfo.socials.instagram, icon: Instagram },
      { title: "Facebook", href: businessInfo.socials.facebook, icon: Facebook },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  className,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

