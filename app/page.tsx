import {
  Calendar,
  Flame,
  ForkKnife,
  MapPin,
  PhoneCall,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { submitBooking } from "./actions";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/button";
import { InfiniteMarquee } from "@/components/infinite-marquee";
import { ProductCard } from "@/components/product-card";
import {
  businessInfo,
  butcherProducts,
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
          >
            <source
              src="/videos/Creazione_Video_Chef_Macellaio.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-stone-950/80 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,139,63,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(210,75,56,0.12),transparent_26%)]" />
        </div>
        <div className="relative flex min-h-screen flex-col items-end justify-end gap-6 px-6 pb-20 pt-24 text-right md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="max-w-3xl space-y-5">
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Vacca Bòna
              <span className="block text-2xl font-normal text-[#ffb3b3]/80 sm:text-3xl">
                Macelleria di qualità &amp; Ristorante di carne
              </span>
            </h1>
            <p className="text-lg text-stone-200/85">
              Tagli selezionati, frollatura proprietaria e brace viva. Esperienze
              alla carne curate da {businessInfo.owner}, tra bancone e sala.
            </p>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <Button
                href="#contatti"
                variant="primary"
                className="h-12 px-6 text-xs uppercase tracking-[0.22em]"
                icon={Calendar}
              >
                Prenota Tavolo
              </Button>
              <Button
                href="#macelleria"
                variant="outline"
                className="h-12 px-6 text-xs uppercase tracking-[0.22em]"
                icon={ForkKnife}
              >
                Vedi Shop
              </Button>
              <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-stone-200/80">
                <Flame size={16} className="text-[#ff8b8b]" />
                <span>Brace viva · Dry-aged 21gg</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="gallery"
        className="relative w-full overflow-hidden px-0"
        y={20}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Gemini_Generated_Image_4pt0dq4pt0dq4pt0.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/82 to-black/90" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-black/85 via-black/80 to-transparent" />
        <div className="relative px-4 py-16 md:px-12 lg:px-16">
          <InfiniteMarquee
            unstyled
            items={butcherProducts.map((p) => ({
              title: p.name,
              caption: `${p.price} · ${p.description}`,
              image: p.image,
            }))}
          />
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
          <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 md:px-12 lg:px-16">
            <div className="space-y-4 max-w-2xl">
              <Button
                href="/le-nostre-carni"
                variant="primary"
                className="h-12 px-6 text-xs uppercase tracking-[0.22em]"
              >
                Scopri le nostre carni
              </Button>
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
                Dal bancone alla sala
              </p>
              <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
                Storia di un taglio fatto bene
              </h2>
              <p className="text-base text-stone-200/85 md:text-lg">
                Una macelleria di quartiere che cresce, guidata da Danilo Lacagnina. Frollatura
                proprietaria, selezione giornaliera e una cucina che mette la brace al centro.
                Materia prima italiana e internazionale, servizio calibrato e atmosfera calda.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="macelleria"
        className="mt-16 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={22}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Macelleria
            </p>
            <h3 className="font-serif text-3xl text-stone-50 sm:text-4xl">
              Tagli pronti e marinati
            </h3>
            <p className="text-stone-200/80">
              Pronto-cuoci, marinature studiate, frollatura controllata. Stripe
              ready per il prossimo step e-commerce.
            </p>
          </div>
          <Button href="#contatti" variant="primary" className="h-11 px-5">
            Ordina e ritira
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {butcherProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-8 rounded-3xl bg-emerald-500/10 p-6 text-emerald-50 shadow-[0_15px_50px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/80">
                Too Good To Go
              </p>
              <h4 className="font-serif text-2xl text-emerald-50">
                Sacchetti sorpresa anti-spreco
              </h4>
              <p className="text-emerald-50/90">
                Tagli e preparazioni del giorno in edizione limitata. Prenota
                dall&apos;app o chiama in bottega.
              </p>
            </div>
            <Button
              href="https://www.toogoodtogo.com/"
              variant="ghost"
              className="h-11 px-5 text-emerald-50 hover:bg-emerald-400/10"
            >
              Scopri ora
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="gallery-social"
        className="mt-16 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={18}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Social proof
            </p>
            <h3 className="font-serif text-3xl text-stone-50 sm:text-4xl">
              Feed in evidenza
            </h3>
            <p className="text-stone-200/80">
              Ultimi reel e scatti dal bancone e dalla sala.
            </p>
          </div>
        <div className="flex items-center gap-3 text-sm text-[#ffd6d6]">
            <Sparkles size={16} />
            Placeholder dinamico Instagram
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </AnimatedSection>

      <AnimatedSection
        id="orari-hero"
        className="relative mt-16 w-full overflow-hidden px-0 md:mt-20"
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
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <h3 className="font-serif text-3xl text-stone-50 sm:text-4xl">
            Taglio su misura, Ti aspettiamo in bottega e a cena
          </h3>
          <p className="mt-3 max-w-2xl text-base text-stone-200/85 sm:text-lg">
            Selezione giornaliera, frollatura curata e brace viva. Passa in macelleria o prenota per la
            sala: siamo pronti con consigli su cotture e tagli.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-stone-200/90">
            <div>
              <span className="font-heading text-lg text-[#ff8b8b]">Macelleria</span>
              <p>{hours.macelleria}</p>
            </div>
            <div>
              <span className="font-heading text-lg text-[#ff8b8b]">Ristorante</span>
              <p>{hours.ristorante}</p>
            </div>
            <div>
              <span className="font-heading text-lg text-[#ff8b8b]">Prenotazioni</span>
              <p>{businessInfo.mobile}</p>
              <p>Tel: {businessInfo.phone}</p>
            </div>
            <div>
              <span className="font-heading text-lg text-[#ff8b8b]">Indirizzo</span>
              <p>{businessInfo.address}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="contatti"
        className="mt-16 w-full px-4 pb-24 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        y={18}
      >
        <div className="grid gap-8 rounded-3xl bg-stone-950/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
              Prenotazioni &amp; Contatti
            </p>
            <h3 className="font-serif text-3xl text-stone-50 sm:text-4xl">
              Prenota il tuo tavolo
            </h3>
            <p className="mt-2 text-stone-200/80">
              Compila il form: il team riceve la richiesta e conferma via
              telefono. Server Action pronta per integrare CRM o notifiche.
            </p>

            <form action={submitBooking} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <InputField name="name" label="Nome e Cognome" required />
                <InputField name="phone" label="Telefono" required />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
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
              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center text-xs uppercase tracking-[0.22em]"
              >
                Invia richiesta
              </Button>
              <p className="text-xs text-stone-400">
                MVP: la richiesta viene loggata lato server. Integra Stripe/CRM
                al prossimo step.
              </p>
            </form>
          </div>

          <div className="space-y-4">
            <div className="glass-surface overflow-hidden rounded-3xl">
              <iframe
                title="Mappa Vacca Bòna Casorezzo"
                src="https://maps.google.com/maps?q=Via%20Roma%2039%20Casorezzo%20MI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[240px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-white/5 p-5 shadow-[0_10px_36px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
                Contatti rapidi
              </p>
              <div className="mt-3 space-y-2 text-sm text-stone-200/80">
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

      <AnimatedSection
        id="orari"
        className="mt-0 w-full px-0 pb-20"
        y={12}
      >
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-stone-950 to-black py-12">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.04),transparent_32%)]" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14 xl:px-16 2xl:px-20">
            <div className="max-w-xl space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb3b3]/80">
                Orari & contatti
              </p>
              <h3 className="font-serif text-3xl text-stone-50 sm:text-4xl">
                Ti aspettiamo in bottega e a cena
              </h3>
              <p className="text-stone-200/80">
                Servizio di macelleria dedicato e sala per la brace dal giovedì alla domenica.
                Prenota o passa in negozio: prepariamo tagli e marinature su richiesta.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl bg-white/5 p-5 text-sm text-stone-200/85 shadow-[0_14px_48px_rgba(0,0,0,0.45)]">
              <div className="flex items-start gap-3">
                <ForkKnife size={18} className="text-[#ff8b8b]" />
                <div>
                  <p className="text-stone-100">Macelleria</p>
                  <p>{hours.macelleria}</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-start gap-3">
                <Flame size={18} className="text-[#ff8b8b]" />
                <div>
                  <p className="text-stone-100">Ristorante</p>
                  <p>{hours.ristorante}</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-start gap-3">
                <PhoneCall size={18} className="text-[#ff8b8b]" />
                <div className="space-y-1">
                  <a
                    className="block hover:text-[#ffb3b3]"
                    href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}
                  >
                    Prenotazioni: {businessInfo.mobile}
                  </a>
                  <a
                    className="block hover:text-[#ffb3b3]"
                    href={`tel:${businessInfo.phone}`}
                  >
                    Macelleria: {businessInfo.phone}
                  </a>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff8b8b]" />
                <p className="text-stone-200/90">{businessInfo.address}</p>
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
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-50 placeholder:text-stone-500 focus:border-[#b54c4c]/70 focus:outline-none"
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
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-50 placeholder:text-stone-500 focus:border-[#b54c4c]/70 focus:outline-none"
            style={icon ? { paddingLeft: "2.5rem" } : undefined}
          />
        )}
      </div>
    </label>
  );
}
