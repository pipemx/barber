import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { brand, hours } from "@/lib/config";
import { ThemeProvider } from "@/lib/theme";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} ${brand.tagline} · Barbería Premium en ${brand.city}`,
  description: `La experiencia de barbería más exclusiva de ${brand.city}. Cortes de precisión, ritual de barba con navaja y toalla caliente. Agenda tu cita por WhatsApp en 30 segundos.`,
  keywords: [
    `barbería ${brand.city}`,
    `barbería premium ${brand.neighborhood}`,
    "corte de cabello hombre",
    "barba navaja toalla caliente",
    "fade premium",
    "membresía barbería",
  ],
  openGraph: {
    title: `${brand.name} ${brand.tagline} · Barbería Premium`,
    description: `Cortes de precisión y ritual de barba en ${brand.city}. Agenda por WhatsApp.`,
    type: "website",
    locale: "es_MX",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: `${brand.name} ${brand.tagline}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressLocality: brand.city,
    addressCountry: "MX",
  },
  telephone: brand.phone,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: brand.rating,
    reviewCount: brand.reviewCount,
  },
  openingHoursSpecification: hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.open,
    closes: h.close,
  })),
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${bodoni.variable} ${jost.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
