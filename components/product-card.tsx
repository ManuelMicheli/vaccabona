"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export type Product = {
  name: string;
  price: string;
  description: string;
  badge?: string;
  image?: string;
};

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900/80 to-stone-950 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-white/2 before:opacity-0 before:transition before:duration-300 group-hover:before:opacity-100",
        className,
      )}
    >
      {product.image && (
        <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-white/5">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.description}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl tracking-tight text-stone-50">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-stone-300/80">{product.description}</p>
        </div>
        {product.badge && (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-amber-200 shadow-inner shadow-black/40">
            {product.badge}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.16em] text-amber-100">
          Catalogo · Info su richiesta
        </p>
        <Button
          href="#contatti"
          variant="ghost"
          className="h-11 rounded-full border border-white/10 px-4 text-xs uppercase tracking-[0.16em] text-stone-100 hover:border-amber-300/50"
          icon={ArrowRight}
          iconPosition="right"
        >
          Richiedi info
        </Button>
      </div>
    </motion.article>
  );
}

