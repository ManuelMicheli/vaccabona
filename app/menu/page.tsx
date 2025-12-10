"use client";

import { Button } from "@/components/button";
import { restaurantMenu } from "@/constants/data";

type MenuColumnProps = {
  title: string;
  items: { name: string; note: string }[];
};

function MenuColumn({ title, items }: MenuColumnProps) {
  return (
    <div className="rounded-3xl bg-white/5 p-5 text-stone-200/80 shadow-[0_10px_36px_rgba(0,0,0,0.35)]">
      <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">{title}</p>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.name} className="space-y-1">
            <p className="font-serif text-xl text-stone-50">{item.name}</p>
            <p className="text-sm">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black text-stone-100">
      <section className="relative overflow-hidden px-4 py-16 md:px-10 lg:px-14 xl:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
        <div className="relative space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
            Ristorante
          </p>
          <h1 className="font-serif text-4xl text-stone-50 sm:text-5xl">Menù alla brace</h1>
          <p className="max-w-2xl text-stone-200/85">
            Starters, piatti alla brace e contorni pensati per accompagnare la carne. Degustazioni
            carving-style, servizio curato e cantina selezionata.
          </p>
          <div className="flex gap-3">
            <Button href="/#contatti" variant="primary" className="h-11 px-5">
              Prenota la cena
            </Button>
            <Button href="/#contatti" variant="outline" className="h-11 px-5">
              Richiedi info
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-10 lg:px-14 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <MenuColumn title="Antipasti" items={restaurantMenu.starters} />
          <MenuColumn title="Secondi & Brace" items={restaurantMenu.mains} />
          <MenuColumn title="Contorni" items={restaurantMenu.sides} />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {restaurantMenu.signatures.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/5 p-5 text-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">Memuuu</p>
              <h4 className="mt-2 font-serif text-2xl text-stone-50">{item.title}</h4>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

