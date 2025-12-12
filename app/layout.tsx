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
    images: [
      {
        url: `${businessInfo.website}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - Macelleria e Ristorante a Casorezzo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${businessInfo.website}/images/logo.png`],
  },
  alternates: {
    canonical: "/",
  },
  category: "restaurant",
};

const addressSchema = {
  "@type": "PostalAddress",
  streetAddress: "Via Roma 39 (ang. Piazza Garibaldi 2)",
  addressLocality: "Casorezzo",
  addressRegion: "MI",
  postalCode: "20003",
  addressCountry: "IT",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.website}#business`,
    name: businessInfo.name,
    description:
      "Macelleria di qualità e ristorante di carne a Casorezzo (MI). Tagli selezionati, frollatura proprietaria e cucina alla brace. Specialità in carne di alta qualità, dry-aged e tagli premium.",
    url: businessInfo.website,
    image: `${businessInfo.website}/images/logo.png`,
    logo: `${businessInfo.website}/images/logo.png`,
    telephone: businessInfo.mobile,
    address: addressSchema,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.5133",
      longitude: "8.9086",
    },
    priceRange: "€€-€€€",
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
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:30",
        closes: "19:30",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.mobile,
        contactType: "reservations",
        areaServed: "IT",
        availableLanguage: ["Italian"],
      },
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        contactType: "customer service",
        areaServed: "IT",
        availableLanguage: ["Italian"],
      },
    ],
    sameAs: Object.values(businessInfo.socials),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${businessInfo.website}#restaurant`,
    name: `${businessInfo.name} - Ristorante`,
    parentOrganization: {
      "@id": `${businessInfo.website}#business`,
    },
    url: `${businessInfo.website}/menu`,
    address: addressSchema,
    telephone: businessInfo.mobile,
    servesCuisine: ["Carne", "Griglia", "Italiana", "Cucina alla brace"],
    priceRange: "€€-€€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
        opens: "19:00",
        closes: "23:30",
      },
    ],
    acceptsReservations: "True",
    menu: `${businessInfo.website}/menu`,
  },
];

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
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}


