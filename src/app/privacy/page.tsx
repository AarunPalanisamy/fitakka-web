import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito bg-white text-ink">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-8 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2 text-ink">Fitakka Privacy Policy</h1>
        <p className="text-sm text-ink-50 mb-8 font-semibold">Last updated: July 29, 2026</p>
        
        <div className="space-y-6 text-base text-ink-50 leading-relaxed">
          <p>
            At Fitakka, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-50">
            <li>Account details (name, email address)</li>
            <li>Profile and fitness data (goals, dietary preferences, height, weight, age/date of birth, activity level)</li>
            <li>Logged meals, nutrition estimates, and activity entries</li>
            <li>Messages you send to Fitakka AI</li>
            <li>Voice audio when you choose to use speech-to-text features</li>
            <li>Device and usage information needed to operate the app (e.g. authentication tokens)</li>
          </ul>

          <h2 className="text-xl font-bold text-ink mt-8">2. Audio Recording & Microphone Access</h2>
          <p>
            Fitakka offers the ability to log meals and activities and to chat using voice. If you use these features, we ask for permission to access your device microphone and record audio.
          </p>
          <p>
            Audio is processed to transcribe your speech into text. You can revoke microphone permission at any time in your device settings.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-ink-50">
            <li>Provide, maintain, and improve Fitakka (logging, plans, stats, streaks)</li>
            <li>Personalize your experience</li>
            <li>Power AI features (meal parsing, fitness chat, voice transcription)</li>
            <li>Communicate about updates and support</li>
            <li>Process subscriptions and prevent abuse</li>
          </ul>
          <p className="mt-4">
            Your health and activity data is used to provide the Fitakka service to you.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">4. Third-Party AI & Speech Services</h2>
          <p>
            When you use AI features, Fitakka may share limited personal data with third-party processors solely to fulfill your request:
          </p>
          
          <div className="overflow-x-auto w-full mt-4">
            <table className="w-full text-left border-collapse border border-border text-sm text-ink-50 min-w-[500px]">
              <thead>
                <tr className="bg-ink-08">
                  <th className="p-3 border border-border font-bold text-ink w-1/4">Provider</th>
                  <th className="p-3 border border-border font-bold text-ink w-3/8">Purpose</th>
                  <th className="p-3 border border-border font-bold text-ink w-3/8">Data that may be shared</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-bold text-ink">OpenAI</td>
                  <td className="p-3 border border-border">AI chat replies and parsing food descriptions into structured nutrition logs</td>
                  <td className="p-3 border border-border">Your messages / food text, recent chat context, and relevant profile & health/nutrition context needed to answer (e.g. goals, today’s intake)</td>
                </tr>
                <tr className="bg-[rgba(33,34,45,0.02)]">
                  <td className="p-3 border border-border font-bold text-ink">Deepgram</td>
                  <td className="p-3 border border-border">Speech-to-text for voice input</td>
                  <td className="p-3 border border-border">Voice audio you record for transcription</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            We do not sell your personal data. These providers process data under their own terms and privacy policies as our service providers. Fitakka asks for your permission in the app before first use of features that share data with these services.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">6. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink-50">
            <li>You can decline AI data sharing; AI chat, AI meal logging, and voice transcription will remain unavailable until you agree.</li>
            <li>You can delete your account and associated data from within the app (where available) or by contacting us.</li>
            <li>You can manage App Tracking / privacy settings on your device and in App Store privacy labels.</li>
          </ul>

          <h2 className="text-xl font-bold text-ink mt-8">7. Children’s Privacy</h2>
          <p>
            Fitakka is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last updated” date.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, contact us at the support email listed on the Fitakka App Store page or website.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
