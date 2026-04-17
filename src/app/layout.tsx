import type { Metadata } from "next";
import { Nunito, Instrument_Serif } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: 'Fitakka — Your dearly fitness habit builder',
  description: 'Tell Fitakka what you ate and what you did. It calculates every macro, tracks every calorie, and nudges you at the right moment with one clear action. Every single day.',
  icons: {
    icon: '/vercel.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
