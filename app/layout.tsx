import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth-context"
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Intellink Nippon | Japan–Africa Strategic Business Consulting",
    template: "%s | Intellink Nippon"
  },
  description: "Premier consulting partner for Japan–Africa business collaboration. We provide market intelligence, strategic advisory, and trade facilitation to drive sustainable growth in emerging markets.",
  keywords: [
    "Japan-Africa business", 
    "Market Entry Strategy", 
    "Trade Facilitation Japan", 
    "Africa Emerging Markets Consulting", 
    "Strategic Advisory", 
    "ExpertConnect", 
    "TradeLink", 
    "Market Intelligence Japan"
  ],
  authors: [{ name: "Intellink Nippon" }],
  creator: "Intellink Nippon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.intellinknippon.co.jp/", // Replace with your actual domain
    title: "Intellink Nippon | Japan–Africa Strategic Business Consulting",
    description: "Bridging Japan and emerging markets through insight-driven strategic solutions and trusted partnerships.",
    siteName: "Intellink Nippon",
    images: [
      {
        url: "/og-image.jpg", // Create this image in your public folder for social sharing
        width: 1200,
        height: 630,
        alt: "Intellink Nippon - Building Bridges, Creating Value",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellink Nippon | Strategic Advisory",
    description: "Connecting Japan and Africa through expert market intelligence and trade facilitation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <AuthProvider>
           <Navigation/>
            {children}
           <Footer />
        </AuthProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConsultingBusiness",
              "name": "Intellink Nippon",
              "alternateName": "Intellink Nippon Co., Ltd.",
              "url": "https://www.intellinknippon.co.jp/",
              "logo": "https://www.intellinknippon.co.jp/logo.png", // Replace with actual logo URL
              "description": "Strategic advisory and trade facilitation partner bridging Japan and emerging markets in Africa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Shibuya City",
                "addressRegion": "Tokyo",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.6580,
                "longitude": 139.7016
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+81-80-5643-1501",
                "contactType": "customer service",
                "email": "info@intellinknippon.co.jp",
                "areaServed": ["JP", "Africa"],
                "availableLanguage": ["English", "Japanese"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/intellink-nippon" // Replace with your actual LinkedIn
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Strategic Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Market Intelligence"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Strategic Advisory"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trade Facilitation"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </body>
    </html>
  );
}