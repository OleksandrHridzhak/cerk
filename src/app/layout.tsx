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
