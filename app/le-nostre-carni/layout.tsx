import type { Metadata } from "next";
import { businessInfo } from "@/constants/data";

export const metadata: Metadata = {
  title: "Le nostre carni | Selezione Premium | Vacca Bòna",
  description:
    "Scopri la nostra selezione di carni premium: Japanese Wagyu, Rubia Gallega, Sashi Finland, Black Angus, Fassona Piemontese. Tagli selezionati e frollatura controllata a Casorezzo (MI).",
  keywords: [
    "carni premium casorezzo",
    "wagyu milano",
    "rubia gallega",
    "fassona piemontese",
    "carne pregiata milano",
    "tagli premium vacca bòna",
    "frollatura controllata",
  ],
  openGraph: {
    title: "Le nostre carni | Selezione Premium | Vacca Bòna",
    description:
      "Japanese Wagyu, Rubia Gallega, Sashi Finland, Black Angus, Fassona Piemontese. Tagli selezionati e frollatura controllata.",
    url: `${businessInfo.website}/le-nostre-carni`,
    type: "website",
    siteName: businessInfo.name,
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le nostre carni | Selezione Premium",
    description:
      "Scopri la selezione di carni premium di Vacca Bòna: Japanese Wagyu, Rubia Gallega e altre prelibatezze.",
  },
  alternates: {
    canonical: `${businessInfo.website}/le-nostre-carni`,
  },
};

export default function LeNostreCarniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

