import type { Metadata } from "next";
import { businessInfo } from "@/constants/data";

export const metadata: Metadata = {
  title: "Macelleria | Tagli Pronti e Marinati | Vacca Bòna",
  description:
    "Scopri la nostra selezione di tagli pronti e marinati: bistecche, salsicce, costine e preparazioni gourmet. Frollatura controllata e qualità premium a Casorezzo (MI).",
  keywords: [
    "macelleria casorezzo",
    "tagli pronti marinati",
    "bistecca fiorentina",
    "carne premium milano",
    "macelleria qualità",
    "tagli carne casorezzo",
    "frollatura controllata",
  ],
  openGraph: {
    title: "Macelleria | Tagli Pronti e Marinati | Vacca Bòna",
    description:
      "Tagli selezionati, frollatura controllata e preparazioni gourmet. La nostra macelleria a Casorezzo.",
    url: `${businessInfo.website}/macelleria`,
    type: "website",
    siteName: businessInfo.name,
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macelleria | Tagli Pronti e Marinati",
    description: "Scopri la selezione di tagli premium della macelleria Vacca Bòna.",
  },
  alternates: {
    canonical: `${businessInfo.website}/macelleria`,
  },
};

export default function MacelleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

