import type { Metadata } from "next";
import { Geist_Mono, Inter, Anton } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontHeading = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="pl">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} antialiased min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
