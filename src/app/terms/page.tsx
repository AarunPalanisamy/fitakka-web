import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-nunito bg-white text-ink">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-8 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-2 text-ink">Fitakka — Terms of Use & End-User License Agreement</h1>
        <p className="text-sm text-ink-50 mb-8 font-semibold">Last updated: 26-Jul-2026</p>
        
        <div className="space-y-6 text-base text-ink-50 leading-relaxed">
          <p>
            Welcome to Fitakka. This Terms of Use and End-User License Agreement ("Agreement") governs your access to and use of the Fitakka mobile application, website, and related services (collectively, the "Service"), operating as Fitakka ("Fitakka," "we," "us," or "our"). By downloading, installing, or using the Service, you agree to be bound by this Agreement. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Fitakka, you confirm that you are at least 16 years old (or the age of digital consent in your jurisdiction) and that you have the legal capacity to enter into this Agreement.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">2. Description of Service</h2>
          <p>
            Fitakka provides a fitness and nutrition tracking service, including AI-assisted logging of meals and physical activity. Our Service is provided for informational and habit-tracking purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician or a qualified health provider before making changes to your diet, exercise routine, or health regimen, particularly if you have a pre-existing medical condition.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">3. User Accounts</h2>
          <p>
            To use certain features of Fitakka, you may need to register for an account. You agree to provide accurate, current, and complete information, to keep it up to date, and to keep your login credentials confidential. You are responsible for all activity under your account.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">4. Subscriptions and In-App Purchases</h2>
          <p>
            Fitakka offers a free tier and one or more paid subscription tiers (currently including Monthly, Annual, and a limited-availability Founding Lifetime tier). Current pricing, billing frequency, and any introductory terms for each tier are displayed within the app and the App Store at the time of purchase.
          </p>

          <h3 className="text-lg font-bold text-ink mt-6">4.1 Payment processing</h3>
          <p>
            All purchases are processed exclusively through Apple's In‑App Purchase system and are subject to the Apple Media Services Terms and Conditions. Fitakka does not process, receive, or store your payment card details.
          </p>

          <h3 className="text-lg font-bold text-ink mt-6">4.2 Auto-renewal</h3>
          <p>
            Paid subscriptions (other than the one-time Founding Lifetime purchase) automatically renew for the same duration at the then-current price unless cancelled at least 24 hours before the end of the current billing period. Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.
          </p>

          <h3 className="text-lg font-bold text-ink mt-6">4.3 Managing and cancelling</h3>
          <p>
            You can review, manage, or cancel your subscription at any time via Settings &gt; [Your Apple ID Name] &gt; Subscriptions on your device, or through the App Store. Cancellation takes effect at the end of the current billing period, and you'll keep access to paid features until then.
          </p>

          <h3 className="text-lg font-bold text-ink mt-6">4.4 Refunds</h3>
          <p>
            All billing and refund requests are handled directly by Apple, not by Fitakka, under Apple's App Store refund policies. To request a refund, use <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">reportaproblem.apple.com</a> or contact Apple Support.
          </p>

          <h3 className="text-lg font-bold text-ink mt-6">4.5 Price changes</h3>
          <p>
            We may change subscription pricing from time to time. Changes apply from your next renewal date, and we will provide advance notice where required by law or by Apple's guidelines.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">5. License Grant and Restrictions</h2>
          <p>
            This Agreement is concluded solely between you and Fitakka, and not with Apple. Fitakka, not Apple, is solely responsible for the Service and its content.
          </p>
          <p>
            Subject to your compliance with this Agreement, Fitakka grants you a limited, non-exclusive, non-transferable, revocable license to use the Fitakka app on any Apple-branded device that you own or control, as permitted by Apple's Usage Rules — including use via other accounts associated with you through Family Sharing, where applicable.
          </p>
          <p>
            You may not: (a) copy, modify, reverse-engineer, or create derivative works of the app; (b) sell, rent, lease, sublicense, or redistribute the app; or (c) use the Service for any unlawful purpose or in a manner that violates any third party's rights.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">6. Maintenance and Support</h2>
          <p>
            Fitakka, not Apple, is solely responsible for providing any maintenance and support for the Service. Apple has no obligation whatsoever to furnish maintenance or support services for the app. For support, contact us at <a href="mailto:hello@fitakka.app" className="text-purple hover:underline">hello@fitakka.app</a>.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">7. Warranty Disclaimer</h2>
          <p>
            Fitakka, not Apple, is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
          </p>
          <p>
            In the event the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the applicable purchase price to you. To the maximum extent permitted by law, Apple will have no other warranty obligation whatsoever with respect to the app, and any other claims, losses, or damages arising from a warranty failure are Fitakka's sole responsibility.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">8. Product Claims</h2>
          <p>
            Fitakka, not Apple, is responsible for addressing any claims by you or any third party relating to the Service or your possession and use of it, including: (i) product liability claims; (ii) any claim that the Service fails to conform to an applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">9. Intellectual Property</h2>
          <p>
            The Fitakka app, its content, features, and functionality are owned by Fitakka and are protected by applicable copyright, trademark, and other intellectual property laws. In the event of any third-party claim that the Service or your use of it infringes that party's intellectual property rights, Fitakka, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">10. Legal and Export Compliance</h2>
          <p>
            By using the Service, you represent that you are not located in a country subject to a U.S. Government embargo or designated by the U.S. Government as "terrorist-supporting," and that you are not listed on any U.S. Government list of prohibited or restricted parties.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">11. Third-Party Terms</h2>
          <p>
            Your use of the Service must comply with any other applicable third-party agreements you are subject to (for example, your mobile carrier's data plan terms). Fitakka is not responsible for any violation of such third-party agreements arising from your use of the Service.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">12. Apple as Third-Party Beneficiary</h2>
          <p>
            You acknowledge and agree that Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement, and that upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">13. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Fitakka and its officers, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or other intangible losses, arising from your access to or use of, or inability to access or use, the Service. Nothing in this Agreement limits any liability that cannot be limited under applicable law.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">14. Governing Law and Disputes</h2>
          <p>
            This Agreement is governed by the laws of India, without regard to conflict-of-law principles, and the courts of Chennai, India will have exclusive jurisdiction over any dispute arising from it.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">15. Changes to This Agreement</h2>
          <p>
            We may modify this Agreement at any time. We will provide at least 30 days' notice before material changes take effect, where required by law. Continued use of the Service after changes take effect constitutes acceptance of the revised Agreement.
          </p>

          <h2 className="text-xl font-bold text-ink mt-8">16. Contact Information</h2>
          <p>
            <strong>Name:</strong> Arun Palanisamy<br />
            <strong>Email:</strong> <a href="mailto:arunpalanisamy21@gmail.com" className="text-purple hover:underline">arunpalanisamy21@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
