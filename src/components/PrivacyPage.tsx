import React from 'react';
import PageWrapper from './PageWrapper';

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 text-lg mb-6">
          At IndoorGym.in, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
        <p className="text-gray-600 text-lg mb-6">
          We may collect the following types of information:
          <ul className="list-disc pl-5">
            <li>Your name, email address, and other contact details when you provide them to us.</li>
            <li>Information about your device, such as IP address, browser type, and operating system.</li>
            <li>Usage data, including pages visited, links clicked, and other interactions with our website.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
        <p className="text-gray-600 text-lg mb-6">
          We use the collected information for the following purposes:
          <ul className="list-disc pl-5">
            <li>To provide and improve our services.</li>
            <li>To communicate with you, including responding to your inquiries.</li>
            <li>To analyze website usage and optimize user experience.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
        <p className="text-gray-600 text-lg mb-6">
          We do not sell or rent your personal information to third parties. However, we may share your information with:
          <ul className="list-disc pl-5">
            <li>Service providers who assist us in operating our website and delivering services.</li>
            <li>Law enforcement or other authorities if required by law.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
        <p className="text-gray-600 text-lg mb-6">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-600 text-lg mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-6">
          If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:support@indoorgym.in" className="text-indigo-600 hover:underline">support@indoorgym.in</a>.
        </p>
      </div>
    </PageWrapper>
  );
}
