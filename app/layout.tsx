import type { Metadata } from "next";
import { Geist_Mono, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontHeading = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "040Basket",
  description: "040Basket - Stowarzyszenie sportowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
