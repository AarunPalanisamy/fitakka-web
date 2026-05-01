import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito bg-white text-ink">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-8 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-ink">Privacy Policy</h1>
        <div className="space-y-6 text-lg text-ink-50">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>
            At Fitakka, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us, such as your name, email address, fitness goals, dietary preferences, and logged activities.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">2. Audio Recording & Microphone Access</h2>
          <p>
            <strong>Important Notice:</strong> Fitakka offers the ability to log your meals and activities using voice commands. If you choose to use this feature on our mobile app or website, <strong>we will ask for your explicit permission to access your device's microphone and record audio</strong>. 
          </p>
          <p>
            Audio recordings are processed solely for the purpose of transcribing your input into food and activity logs using AI. We do not use your voice data for any other purposes, and you can revoke microphone permissions at any time through your device settings.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to personalize your experience, and to communicate with you about updates and new features. Your health and activity data is strictly used to provide the Fitakka service to you.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">5. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
