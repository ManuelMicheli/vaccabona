"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const wagyuStories = [
  {
    title: "Origini millenarie",
    period: "II secolo d.C.",
    description: "I bovini Wagyu discendono da ceppi autoctoni introdotti in Giappone intorno al II secolo d.C. dalla Cina continentale, utilizzati per secoli come animali da tiro nei campi e nelle foreste. Fino all'era Meiji, il consumo di carne era limitato per ragioni culturali e religiose.",
    image: "/images/JAPANESE WAGYU 2.png",
  },
  {
    title: "Era Meiji e selezione",
    period: "1868-1910",
    description: "Dopo la Restaurazione Meiji, il governo importa razze europee e asiatiche per incroci sistematici con ceppi locali, migliorando resa e qualità della carne. Nel 1910 si chiudono le importazioni, preservando le quattro razze Wagyu: Japanese Black, Brown, Shorthorn e Polled.",
    image: "/images/JAPANESE WAGYU 2.png",
  },
  {
    title: "Standardizzazione premium",
    period: "XX secolo",
    description: "Negli anni '40-50 si certificano le razze native; emergono regioni leader come Kobe (Hyogo, Tajima strain), Matsusaka (Mie) e Omi (Shiga), con protocolli locali su lineage e allevamento. Dal 1968 la Japanese Meat Grading Association (JMGA) monitora qualità e genealogia.",
    image: "/images/JAPANESE WAGYU 2.png",
  },
  {
    title: "Tesoro nazionale",
    period: "XXI secolo",
    description: "Dal 1997 il Giappone dichiara i Wagyu \"tesoro nazionale\", vietando l'esportazione di animali vivi per tutelare la purezza genetica. Oggi è sinonimo di lusso internazionale con grading rigoroso e tracciabilità totale dalla nascita al piatto.",
    image: "/images/JAPANESE WAGYU 2.png",
  },
];

export function JapaneseWagyuSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % wagyuStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + wagyuStories.length) % wagyuStories.length);
  };

  const currentStory = wagyuStories[currentIndex];

  return (
    <div className="w-full pt-12 lg:pt-20 pb-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        {/* Left Side - Description */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              {currentStory.period}
            </p>
            <h3 className="font-serif text-2xl text-stone-50 sm:text-3xl md:text-4xl">
              {currentStory.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone-200/80 sm:text-base lg:text-lg">
              {currentStory.description}
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={prevStory}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-stone-200 transition hover:bg-white/10 hover:text-[#ff8b8b] z-10 relative"
              aria-label="Storia precedente"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Navigation dots */}
            <div className="flex gap-2 z-10 relative">
              {wagyuStories.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "w-8 bg-[#ff8b8b]"
                      : "w-2 bg-stone-600 hover:bg-stone-500"
                  }`}
                  aria-label={`Mostra storia ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextStory}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-stone-200 transition hover:bg-white/10 hover:text-[#ff8b8b] z-10 relative"
              aria-label="Storia successiva"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
          <div className="relative aspect-video w-full h-full overflow-hidden rounded-2xl bg-black">
            <Image
              key={currentIndex}
              src={currentStory.image}
              alt={currentStory.title}
              fill
              priority={currentIndex === 0}
              className="object-cover rounded-2xl transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

