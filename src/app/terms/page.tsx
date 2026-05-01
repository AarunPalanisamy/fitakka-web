import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito bg-white text-ink">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-8 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-ink">Terms and Conditions</h1>
        <div className="space-y-6 text-lg text-ink-50">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>
            Welcome to Fitakka! These Terms and Conditions govern your use of the Fitakka application, website, and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">1. User Accounts</h2>
          <p>
            To use certain features of Fitakka, you may be required to register for an account. You agree to provide accurate and complete information and to keep this information up to date.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">2. Use of Service</h2>
          <p>
            Fitakka provides a fitness and nutrition tracking service. Our services are provided for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or fitness regimen.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">3. Intellectual Property</h2>
          <p>
            The Fitakka app, its original content, features, and functionality are owned by Fitakka and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">4. Limitation of Liability</h2>
          <p>
            In no event shall Fitakka, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">5. Modifications</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
