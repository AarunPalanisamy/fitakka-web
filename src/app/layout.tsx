import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'FitAkka — Intelligent Health Tracking',
  description: 'AI-powered macro calculation, calorie tracking, and activity planning. Built for real people.',
  openGraph: {
    title: 'FitAkka — Intelligent Health Tracking',
    description: 'Coming soon. Join the waitlist.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
