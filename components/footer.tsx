import Image from "next/image";
import { Facebook, Instagram, Leaf, MapPin, PhoneCall } from "lucide-react";
import { businessInfo, hours } from "@/constants/data";
import { Button } from "@/components/button";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-black/60">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-black/50" />
      <div className="flex w-full flex-col gap-12 px-4 py-14 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-surface relative overflow-hidden rounded-3xl p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-black/50">
                <Image
                  src="/images/logo.png"
                  alt={`${businessInfo.name} logo`}
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">
                  Casorezzo · Milano
                </p>
                <p className="font-serif text-2xl text-stone-50">
                  {businessInfo.name}
                </p>
                <p className="text-sm text-stone-300/80">
                  P.IVA {businessInfo.vat}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-stone-200/80">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-amber-200" />
                <p>{businessInfo.address}</p>
              </div>
              <div className="flex items-start gap-2">
                <PhoneCall size={18} className="mt-1 text-amber-200" />
                <div className="space-y-1">
                  <a className="block hover:text-amber-100" href={`tel:${businessInfo.phone}`}>
                    {businessInfo.phone}
                  </a>
                  <a className="block hover:text-amber-100" href={`tel:${businessInfo.mobile.replace(/\s+/g, "")}`}>
                    {businessInfo.mobile} (Prenotazioni)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Leaf size={18} className="mt-1 text-amber-200" />
                <div>
                  <p>Macelleria: {hours.macelleria}</p>
                  <p>Ristorante: {hours.ristorante}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Button
                href={businessInfo.socials.instagram}
                variant="ghost"
                className="h-11 px-4 text-sm"
                icon={Instagram}
              >
                Instagram
              </Button>
              <Button
                href={businessInfo.socials.facebook}
                variant="ghost"
                className="h-11 px-4 text-sm"
                icon={Facebook}
              >
                Facebook
              </Button>
              <div className="ml-auto flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                <Leaf size={14} />
                Too Good To Go
              </div>
            </div>
          </div>

          <div className="glass-surface overflow-hidden rounded-3xl">
            <iframe
              title="Mappa Vacca Bòna Casorezzo"
              src="https://maps.google.com/maps?q=Via%20Roma%2039%20Casorezzo%20MI&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.22em] text-stone-400 md:flex-row">
          <p>© {new Date().getFullYear()} {businessInfo.name} · Danilo Lacagnina</p>
          <p>Macelleria & Ristorante · Carne di qualità · Brace viva</p>
        </div>
      </div>
    </footer>
  );
}

