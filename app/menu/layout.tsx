import type { Metadata } from "next";
import { businessInfo } from "@/constants/data";

export const metadata: Metadata = {
  title: "Menù alla Brace | Vacca Bòna - Ristorante Casorezzo",
  description:
    "Scopri il menù completo del ristorante Vacca Bòna. Antipasti, secondi alla brace, contorni e specialità Memuuu. Cucina di carne di alta qualità a Casorezzo (MI).",
  keywords: [
    "menù ristorante casorezzo",
    "ristorante carne milano",
    "cucina alla brace",
    "menù vacca bòna",
    "ristorante casorezzo menù",
    "piatti carne milano",
  ],
  openGraph: {
    title: "Menù alla Brace | Vacca Bòna",
    description:
      "Scopri il menù completo: antipasti, secondi alla brace, contorni e specialità Memuuu. Cucina di carne di alta qualità a Casorezzo.",
    url: `${businessInfo.website}/menu`,
    type: "website",
    siteName: businessInfo.name,
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menù alla Brace | Vacca Bòna",
    description: "Scopri il menù completo del ristorante Vacca Bòna a Casorezzo.",
  },
  alternates: {
    canonical: `${businessInfo.website}/menu`,
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

