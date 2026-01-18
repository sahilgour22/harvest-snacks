import type { Metadata, Viewport } from "next";
import { Inter, Righteous, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  weight: "400",
  subsets: ["latin"],
});

const artisanal = Caveat({
  variable: "--font-artisanal",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f6f43",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://threefields.com"),
  title: {
    default: "Healthy Snacks & Roasted Makhana | Three Fields",
    template: "%s | Three Fields",
  },
  description: "Premium roasted makhana & healthy snacks made for clean energy. Gluten-free, protein-rich snacks by Three Fields. Discover nature's finest fuel.",
  keywords: ["healthy snacks", "makhana snacks", "roasted makhana", "protein snacks", "clean snacks", "Indian healthy snacks", "Three Fields"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Healthy Snacks & Roasted Makhana | Three Fields",
    description: "Premium roasted makhana & healthy snacks made for clean energy. Gluten-free, protein-rich snacks by Three Fields.",
    url: "https://threefields.com",
    siteName: "Three Fields",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Three Fields - Premium Healthy Snacks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Snacks & Roasted Makhana | Three Fields",
    description: "Premium roasted makhana & healthy snacks made for clean energy. Gluten-free, protein-rich snacks by Three Fields.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Three Fields",
    "url": "https://threefields.com",
    "logo": "https://threefields.com/logo.png",
    "description": "Premium roasted makhana & healthy snacks made for clean energy.",
    "sameAs": [
      "https://instagram.com/threefields",
      "https://linkedin.com/company/threefields"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "email": "hello@threefields.com"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Three Fields",
    "url": "https://threefields.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://threefields.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${righteous.variable} ${artisanal.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
