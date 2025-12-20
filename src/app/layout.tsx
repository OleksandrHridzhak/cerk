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
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSans.variable} antialiased`}
      >
      <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
