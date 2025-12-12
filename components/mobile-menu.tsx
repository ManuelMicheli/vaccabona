"use client";

import { useState, useEffect } from "react";
import { X, Menu, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { businessInfo } from "@/constants/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/macelleria", label: "Macelleria" },
  { href: "/menu", label: "Ristorante" },
  { href: "/le-nostre-carni", label: "Le nostre carni" },
  { href: "/#contatti", label: "Contatti" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-11 w-11 rounded-full bg-white/5 text-stone-100 transition hover:bg-white/10 hover:text-amber-50 md:hidden"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm bg-gradient-to-br from-stone-950 via-stone-900/95 to-stone-950 shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ff8b8b]">
                      Menu
                    </p>
                    <p className="font-serif text-xl text-stone-50">{businessInfo.name}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-stone-300 transition hover:bg-white/10 hover:text-stone-50"
                    aria-label="Chiudi menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-6 py-8">
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={link.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "block rounded-2xl px-5 py-4 text-lg font-medium text-stone-200 transition",
                            "hover:bg-white/5 hover:text-amber-100 active:bg-white/10"
                          )}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer Actions */}
                <div className="border-t border-white/10 px-6 py-6 space-y-3">
                  <a
                    href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-3 rounded-full bg-white/5 h-12 text-sm font-medium uppercase tracking-[0.18em] text-stone-100 transition hover:bg-white/10 hover:text-amber-50"
                  >
                    <PhoneCall size={18} />
                    <span>Chiama Ora</span>
                  </a>
                  <ShimmerButton
                    href="#contatti"
                    background="rgba(74, 0, 0, 1)"
                    shimmerColor="#ff8b8b"
                    className="h-12 w-full text-sm"
                    onClick={handleLinkClick}
                  >
                    Prenota Ora
                  </ShimmerButton>

                  {/* Contact Info */}
                  <div className="mt-6 space-y-2 text-center text-xs text-stone-400">
                    <p>{businessInfo.address.split(',')[0]}</p>
                    <p>{businessInfo.mobile}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
