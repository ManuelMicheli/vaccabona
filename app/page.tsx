"use client";

import {
  Calendar,
  PhoneCall,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { submitBooking } from "./actions";
import { AnimatedSection } from "@/components/animated-section";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { JapaneseWagyuSlider } from "@/components/japanese-wagyu-slider";
import { VelocityScroll } from "@/components/velocity-scroll";
import {
  businessInfo,
  hours,
  socialHighlights,
} from "@/constants/data";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(210,75,56,0.15),_transparent_40%),radial-gradient(ellipse_at_bottom,_rgba(226,139,63,0.12),_transparent_40%)]" />

      <AnimatedSection
        id="home"
        className="relative mt-0 w-full overflow-hidden rounded-[32px] bg-black/60 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        y={36}
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
          >
            <source
              src="/videos/Creazione_Video_Chef_Macellaio.mp4"
              type="video/mp4"
            />
            Il tuo browser non supporta la riproduzione video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-stone-950/80 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,139,63,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(210,75,56,0.12),transparent_26%)]" />
        </div>
        <div className="relative flex min-h-screen flex-col items-center justify-end gap-4 px-4 pb-12 pt-16 text-center sm:items-end sm:gap-5 sm:px-6 sm:pb-16 sm:pt-20 sm:text-right md:px-10 md:pb-20 md:pt-24 lg:px-14 xl:px-16 2xl:px-20">
          <div className="w-full max-w-3xl space-y-4 sm:space-y-5 md:space-y-6">
            <h1 className="font-serif text-3xl leading-tight tracking-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Vacca Bòna
              <span className="mt-2 block text-lg font-normal text-[#ffb3b3]/80 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Macelleria di qualità &amp; Ristorante di carne
              </span>
          </h1>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
              <ShimmerButton
                href="/scopri-il-locale#contatti"
                background="rgba(74, 0, 0, 1)"
                shimmerColor="#ff8b8b"
                className="h-11 w-full px-6 text-xs sm:h-12 sm:w-auto sm:text-xs"
                icon={Calendar}
              >
                Prenota Tavolo
              </ShimmerButton>
              <ShimmerButton
                href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}
                background="rgba(0, 0, 0, 0.4)"
                shimmerColor="#404040"
                className="h-11 w-full px-6 text-xs sm:h-12 sm:w-auto sm:text-xs border-white/30"
                icon={PhoneCall}
              >
                Chiama ora
              </ShimmerButton>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="gallery"
        className="relative w-full overflow-hidden px-0"
        y={20}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-black to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,0,0,0.12),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(107,17,17,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,0,0,0.05),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
        <div className="relative py-10 md:py-14">
          {/* Riflesso rosso verticale */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4A0000]/[0.03] to-transparent" />

          <VelocityScroll
            text="Tagli selezionati, frollatura proprietaria e brace viva    •    Esperienze alla carne tra bancone e sala"
            default_velocity={2}
            className="font-heading text-xl font-light uppercase tracking-[0.25em] text-stone-100/90 md:text-2xl lg:text-3xl"
          />

          {/* Linee decorative con riflesso rosso */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4A0000]/20 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4A0000]/20 to-transparent" />
        </div>
      </AnimatedSection>

      <AnimatedSection id="storia" className="w-full overflow-hidden" y={32}>
        <div
          className="relative flex min-h-screen items-end bg-black"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.9) 100%), url('/images/taglio-pregio.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.3),transparent_40%)]" />
          <div className="relative z-10 flex w-full flex-col justify-between gap-4 px-4 pb-12 sm:gap-5 sm:px-6 sm:pb-16 md:gap-6 md:px-12 lg:px-16">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                Storia di un taglio fatto bene
              </h2>
              <p className="text-sm leading-relaxed text-stone-200/85 sm:text-base md:text-lg lg:text-xl">
                Una macelleria di quartiere che cresce, guidata da Danilo Lacagnina. Frollatura
                proprietaria, selezione giornaliera e una cucina che mette la brace al centro.
                Materia prima italiana e internazionale, servizio calibrato e atmosfera calda.
              </p>
            </div>
            <div className="flex justify-end">
              <ShimmerButton
                href="/le-nostre-carni"
                background="rgba(74, 0, 0, 1)"
                shimmerColor="#ff8b8b"
                className="h-11 w-auto px-5 text-xs sm:h-12 sm:px-6"
              >
                Scopri le nostre carni
              </ShimmerButton>
            </div>
          </div>
        </div>
        {/* Gradient transition to next section */}
        <div className="h-24 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </AnimatedSection>

      <AnimatedSection
        id="gallery-social"
        className="relative mt-0 w-full overflow-hidden bg-gradient-to-b from-black via-stone-950 to-black px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={18}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,0,0,0.15),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(107,17,17,0.12),transparent_50%),radial-gradient(ellipse_at_50%_20%,rgba(139,0,0,0.08),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(153,27,27,0.1),transparent_60%)]" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Social proof
            </p>
            <h3 className="font-serif text-2xl text-stone-50 sm:text-3xl md:text-4xl">
              Feed in evidenza
            </h3>
            <p className="text-sm text-stone-200/80 sm:text-base">
              Ultimi reel e scatti dal bancone e dalla sala.
            </p>
          </div>
        <a
          href={businessInfo.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center text-xs text-[#ffd6d6] sm:text-sm hover:text-[#ff8b8b] transition-colors duration-300"
        >
          <span>@{businessInfo.socials.instagram.split("/").pop()}</span>
        </a>
        </div>
        <div className="relative mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {socialHighlights.map((item) => (
            <div
              key={item.title}
              className="group relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900/70 to-stone-950 p-4 shadow-[0_12px_38px_rgba(0,0,0,0.4)]"
              style={
                item.image
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {!item.image && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,75,56,0.12),transparent_45%)] transition duration-500 group-hover:scale-110" />
              )}
              <div className="relative flex h-full flex-col justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-[#ffb3b3]/80">
                  Reel
                </p>
                <div>
                  <h4 className="font-serif text-xl text-stone-50">{item.title}</h4>
                  <p className="text-sm text-stone-300/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Gradient transition to next section */}
        <div className="relative h-24 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </AnimatedSection>

      {/* Storia del mese - Japanese Wagyu */}
      <AnimatedSection
        className="relative w-full overflow-hidden bg-gradient-to-b from-black via-stone-950 to-black px-4 pt-0 pb-0 md:px-10 lg:px-14 xl:px-16 2xl:px-20"
        y={24}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,0,0,0.12),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(107,17,17,0.08),transparent_50%)]" />
        
        {/* Mobile Version - Original Layout */}
        <div className="relative mx-auto max-w-4xl space-y-6 sm:space-y-8 lg:hidden">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Storia del mese
            </p>
            <h2 className="font-serif text-3xl leading-tight text-stone-50 sm:text-4xl md:text-5xl">
              Japanese Wagyu
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-stone-200/85 sm:text-base md:text-lg">
              L&apos;eccellenza che nasce dalla tradizione. Scopri la storia millenaria della carne più pregiata al mondo, dalle origini come animali da lavoro all&apos;era moderna del tesoro nazionale giapponese.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-3xl rounded-xl sm:rounded-2xl bg-gradient-to-br from-stone-900/60 to-black/60 p-5 sm:p-6 md:p-8 backdrop-blur-sm border border-white/5">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="font-serif text-xl text-stone-50 mb-2 sm:text-2xl sm:mb-3">
                  Un patrimonio di secoli
                </h3>
                <p className="text-sm leading-relaxed text-stone-200/80 sm:text-base">
                  Il Wagyu giapponese affonda le sue radici nella storia millenaria del Giappone. 
                  I bovini Wagyu discendono da ceppi autoctoni introdotti nell&apos;arcipelago intorno 
                  al II secolo d.C., inizialmente utilizzati come animali da tiro. Per secoli, 
                  fino all&apos;era Meiji, il consumo di carne bovina era limitato, con gli allevatori 
                  che concentravano ogni sforzo sulla resistenza fisica e sulla cura quotidiana 
                  di questi animali preziosi.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-stone-50 mb-2 sm:text-2xl sm:mb-3">
                  Perché è così pregiato
                </h3>
                <p className="text-sm leading-relaxed text-stone-200/80 sm:text-base">
                  La genetica unica dei Wagyu favorisce una marezzatura intramuscolare estrema 
                  (BMS 1-12), con alta ereditabilità per tenerezza e sapore. L&apos;alimentazione 
                  controllata combina riso, orzo e fieno di prima qualità, spesso integrati con 
                  birra o massaggi tradizionali. Il sistema di grading JMGA certifica ogni taglio, 
                  e solo A4-A5 o B4-B5 possono essere certificati come Kobe, Matsusaka o Omi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - Interactive Slider */}
        <div className="hidden lg:block">
          <div className="text-center space-y-4 mb-12">
            <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Storia del mese
            </p>
            <h2 className="font-serif text-4xl leading-tight text-stone-50 md:text-5xl lg:text-6xl">
              Japanese Wagyu
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-200/85 md:text-lg">
              L&apos;eccellenza che nasce dalla tradizione. Scopri la storia millenaria della carne più pregiata al mondo.
            </p>
          </div>
          <JapaneseWagyuSlider />
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="orari-hero"
        className="relative mt-0 w-full overflow-hidden px-0"
        y={24}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Gemini_Generated_Image_gf13d7gf13d7gf13.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/82 to-black/90" />
        <div className="relative flex min-h-[60vh] sm:min-h-[70vh] flex-col items-center justify-center px-4 pt-12 pb-0 text-center sm:pt-16 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <h3 className="font-serif text-2xl leading-tight text-stone-50 sm:text-3xl md:text-4xl lg:text-5xl">
            Taglio su misura, Ti aspettiamo in bottega e a cena
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-200/85 sm:text-base md:text-lg">
            Selezione giornaliera, frollatura curata e brace viva. Passa in macelleria o prenota per la
            sala: siamo pronti con consigli su cotture e tagli.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-stone-200/90 sm:gap-5 sm:text-base md:grid-cols-2 md:max-w-3xl md:gap-x-8 md:gap-y-5">
            <div className="space-y-1">
              <span className="block font-heading text-base text-[#ff8b8b] sm:text-lg">Macelleria</span>
              <p className="text-stone-300/90">{hours.macelleria}</p>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-base text-[#ff8b8b] sm:text-lg">Ristorante</span>
              <p className="text-stone-300/90">{hours.ristorante}</p>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-base text-[#ff8b8b] sm:text-lg">Prenotazioni</span>
              <p className="text-stone-300/90">{businessInfo.mobile}</p>
              <p className="text-stone-300/90">Tel: {businessInfo.phone}</p>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-base text-[#ff8b8b] sm:text-lg">Indirizzo</span>
              <p className="text-stone-300/90">{businessInfo.address}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="contatti"
        className="mt-0 w-full px-4 pb-24 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={18}
      >
        <div className="grid gap-6 rounded-2xl bg-stone-950/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:gap-8 sm:rounded-3xl sm:p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Prenotazioni &amp; Contatti
            </p>
            <h3 className="font-serif text-2xl text-stone-50 sm:text-3xl md:text-4xl">
              Prenota il tuo tavolo
            </h3>
            <p className="mt-2 text-sm text-stone-200/80 sm:text-base">
              Compila il form: il team riceve la richiesta e conferma via
              telefono. Server Action pronta per integrare CRM o notifiche.
            </p>

            <form action={submitBooking} className="mt-5 space-y-4 sm:mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField name="name" label="Nome e Cognome" required />
                <InputField name="phone" label="Telefono" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  name="date"
                  label="Data"
                  type="date"
                  required
                  icon={<Calendar size={16} />}
                />
                <InputField
                  name="guests"
                  label="N° coperti"
                  type="number"
                  min={1}
                  max={12}
                  required
                  icon={<Users size={16} />}
                />
              </div>
              <InputField
                name="note"
                label="Richieste speciali"
                placeholder="Allergie, preferenze di cottura, orario..."
                as="textarea"
                rows={3}
              />
              <ShimmerButton
                type="submit"
                background="rgba(74, 0, 0, 1)"
                shimmerColor="#ff8b8b"
                className="w-full h-11 justify-center text-xs sm:h-12 sm:text-sm"
              >
                Invia richiesta
              </ShimmerButton>
              <p className="text-[10px] text-stone-400 sm:text-xs">
                MVP: la richiesta viene loggata lato server. Integra Stripe/CRM
                al prossimo step.
              </p>
            </form>
          </div>

          <div className="space-y-4">
            <div className="glass-surface overflow-hidden rounded-2xl sm:rounded-3xl">
              <iframe
                title="Mappa Vacca Bòna Casorezzo"
                src="https://maps.google.com/maps?q=Via%20Roma%2039%20Casorezzo%20MI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[200px] w-full sm:h-[240px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl bg-white/5 p-4 shadow-[0_10px_36px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-5">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
                Contatti rapidi
              </p>
              <div className="mt-3 space-y-2 text-xs text-stone-200/80 sm:text-sm">
                <a
                  className="block rounded-lg border border-transparent px-2 py-1 transition hover:border-[#b54c4c]/60 hover:text-[#ffb3b3]"
                  href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}
                >
                  {businessInfo.mobile} · Prenotazioni
          </a>
          <a
                  className="block rounded-lg border border-transparent px-2 py-1 transition hover:border-[#b54c4c]/60 hover:text-[#ffb3b3]"
                  href={`tel:${businessInfo.phone}`}
                >
                  {businessInfo.phone} · Macelleria
                </a>
                <p className="rounded-lg border border-transparent px-2 py-1 text-stone-300/80">
                  {businessInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}

type InputFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
  min?: number;
  max?: number;
  icon?: ReactNode;
};

function InputField({
  name,
  label,
  type = "text",
  placeholder,
  required,
  as = "input",
  rows,
  min,
  max,
  icon,
}: InputFieldProps) {
  return (
    <label className="block space-y-2 text-sm text-stone-200/80">
      <span className="text-xs uppercase tracking-[0.22em] text-[#ffb3b3]/80">
        {label}
      </span>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#ff8b8b]">
            {icon}
          </span>
        )}
        {as === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            required={required}
            rows={rows ?? 3}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-stone-50 placeholder:text-stone-500 focus:border-[#b54c4c]/70 focus:outline-none focus:ring-2 focus:ring-[#ff8b8b]/30 transition-all"
            style={icon ? { paddingLeft: "2.5rem" } : undefined}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            min={min}
            max={max}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-stone-50 placeholder:text-stone-500 focus:border-[#b54c4c]/70 focus:outline-none focus:ring-2 focus:ring-[#ff8b8b]/30 transition-all"
            style={icon ? { paddingLeft: "2.5rem" } : undefined}
          />
        )}
      </div>
    </label>
  );
}
