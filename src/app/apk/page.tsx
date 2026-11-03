import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import React from 'react';

// Served from Vercel Blob via the rewrite in next.config.ts.
const APK_URL = '/fitakka.apk';

export const metadata: Metadata = {
  title: 'Download Fitakka for Android (APK)',
  description: 'Download the Fitakka Android APK and install it directly on your device.',
};

export default function ApkPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito bg-white text-ink">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-8 md:px-10 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold mb-2 text-ink">Fitakka for Android</h1>
        <p className="text-sm text-ink-50 mb-8 font-semibold">Direct APK download</p>

        <a
          href={APK_URL}
          download="fitakka.apk"
          className="inline-block bg-ink text-white px-7 py-3 rounded-[50px] font-nunito font-[800] text-[15px] transition-all hover:-translate-y-0.5 active:translate-y-0 glow-btn"
        >
          Download APK (120 MB)
        </a>

        <div className="space-y-6 text-base text-ink-50 leading-relaxed mt-10">
          <h2 className="text-xl font-bold text-ink">How to install</h2>
          <ol className="list-decimal pl-6 space-y-2 text-ink-50">
            <li>Open this page on your Android phone and tap <strong>Download APK</strong>.</li>
            <li>When the download finishes, open <strong>fitakka.apk</strong> from your notifications or Downloads folder.</li>
            <li>If prompted, allow your browser or file manager to <strong>install unknown apps</strong>.</li>
            <li>Tap <strong>Install</strong>, then open Fitakka.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </main>
  );
}
