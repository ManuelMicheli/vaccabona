"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import MobileMenu from "@/components/mobile-menu";
import { businessInfo } from "@/constants/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/macelleria", label: "Macelleria" },
  { href: "/menu", label: "Ristorante" },
  { href: "/le-nostre-carni", label: "Le nostre carni" },
  { href: "/scopri-il-locale", label: "Scopri il locale" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-8 lg:px-12 xl:px-16 pointer-events-auto">
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-black/50">
              <Image
                src="/images/logo.png"
                alt={`${businessInfo.name} logo`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40px, 48px"
                priority
              />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#ff8b8b]">
                Casorezzo · Milano
              </p>
              <p className="font-serif text-lg sm:text-xl text-[#ff8b8b]">{businessInfo.name}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm text-stone-200/85 transition",
                  "hover:text-amber-100 hover:bg-white/5",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}
              className="hidden items-center gap-2 rounded-full bg-white/5 px-5 h-11 text-xs uppercase tracking-[0.22em] text-stone-100 transition hover:bg-white/10 hover:text-amber-50 lg:flex"
            >
              <PhoneCall size={16} />
              <span className="hidden xl:inline">Chiama</span>
            </a>
            <ShimmerButton
              href="/scopri-il-locale#contatti"
              background="rgba(74, 0, 0, 1)"
              shimmerColor="#ff8b8b"
              className="hidden md:flex h-11 px-4 lg:px-5 text-xs"
            >
              <span className="hidden lg:inline">Prenota Ora</span>
              <span className="lg:hidden">Prenota</span>
            </ShimmerButton>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

