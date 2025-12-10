import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LenisScroll from "@/components/LenisScroll";
import { businessInfo } from "@/constants/data";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const title =
  "Vacca Bòna | Macelleria di qualità & Ristorante di carne a Casorezzo";
const description =
  "Tagli selezionati, frollatura proprietaria e cucina alla brace nel cuore di Casorezzo (MI). Macelleria e ristorante curati da Danilo Lacagnina.";

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title,
  description,
  keywords: [
    "macelleria casorezzo",
    "ristorante carne milano",
    "vacca bòna",
    "butcher shop milan",
    "dry aged beef",
  ],
  authors: [{ name: businessInfo.owner }],
  creator: businessInfo.owner,
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: businessInfo.name,
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
  category: "restaurant",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: businessInfo.name,
  url: businessInfo.website,
  image:
    "https://images.unsplash.com/photo-1604908177733-2f8b27cde3d2?auto=format&fit=crop&w=1600&q=80",
  telephone: businessInfo.mobile,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Roma 39 (ang. Piazza Garibaldi 2)",
    addressLocality: "Casorezzo",
    addressRegion: "MI",
    postalCode: "20003",
    addressCountry: "IT",
  },
  servesCuisine: ["Carne", "Griglia", "Italiana"],
  priceRange: "€€-€€€",
  sameAs: Object.values(businessInfo.socials),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
      opens: "19:00",
      closes: "23:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "customer service",
      areaServed: "IT",
      availableLanguage: ["Italian"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="bg-stone-950">
      <body
        className={`${oswald.variable} ${roboto.variable} ${bebas.variable} antialiased text-stone-100`}
      >
        <Navbar />
        <LenisScroll>
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </LenisScroll>
        <div id="portal-root" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}


