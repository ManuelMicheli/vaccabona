import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Wagyu: l'eccellenza che nasce dalla tradizione | Vacca Bòna",
  description:
    "Scopri la storia millenaria del Wagyu giapponese, dalle origini come animali da lavoro al tesoro nazionale. Genetica unica, alimentazione controllata e grading JMGA.",
  openGraph: {
    title: "Japanese Wagyu: l'eccellenza che nasce dalla tradizione | Vacca Bòna",
    description:
      "Scopri la storia millenaria del Wagyu giapponese, dalle origini come animali da lavoro al tesoro nazionale.",
    type: "website",
  },
};

export default function JapaneseWagyuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

