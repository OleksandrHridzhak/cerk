import type { Metadata } from "next";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", 
  display: "swap",
});
import "./globals.css";

import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "cerk – personal tech & nature blog",
  description: "A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.",
  verification: {
    google: 'KDpigy36G4cK_CqL5s_V-xsN_r8COprfhH2ekYi-_IY',
  },
  alternates: {
    canonical: "https://cerk.vercel.app",
  },
  openGraph: {
    title: "cerk – personal tech & nature blog",
    description: "A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.",
    url: "https://cerk.vercel.app",
    siteName: "cerk blog",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "cerk – personal tech & nature blog",
    description: "A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'cerk blog',
    url: 'https://cerk.vercel.app',
    description: 'A modern, fast, SEO-friendly Next.js blog by Oleksandr Hridzhak.',
    author: {
      '@type': 'Person',
      name: 'Oleksandr Hridzhak',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSans.variable} antialiased`}
      >
      <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
