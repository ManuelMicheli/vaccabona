import type { Metadata } from "next";
import { businessInfo } from "@/constants/data";

export const metadata: Metadata = {
  title: "Scopri il Locale | Vacca Bòna - Macelleria e Ristorante Casorezzo",
  description:
    "Scopri la storia e la filosofia di Vacca Bòna: macelleria artigianale e ristorante di brace viva a Casorezzo. Frollatura proprietaria, selezione curata e passione per la carne di qualità.",
  keywords: [
    "vacca bòna casorezzo",
    "macelleria casorezzo",
    "ristorante brace casorezzo",
    "frollatura carne milano",
    "macelleria artigianale milano",
    "ristorante carne milano",
    "contatti vacca bòna",
  ],
  openGraph: {
    title: "Scopri il Locale | Vacca Bòna",
    description:
      "Scopri la nostra storia: macelleria artigianale e ristorante di brace viva. Frollatura proprietaria, selezione curata e atmosfera familiare a Casorezzo.",
    url: `${businessInfo.website}/scopri-il-locale`,
    type: "website",
    siteName: businessInfo.name,
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scopri il Locale | Vacca Bòna",
    description: "Macelleria artigianale e ristorante di brace viva a Casorezzo. Passione per la carne di qualità.",
  },
  alternates: {
    canonical: `${businessInfo.website}/scopri-il-locale`,
  },
};

export default function ScopriIlLocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
