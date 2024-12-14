import React from 'react';
import PageWrapper from './PageWrapper';

export default function TermsOfServicePage() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to IndoorGym.in. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Website</h2>
        <p className="text-gray-600 text-lg mb-6">
          You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
        <p className="text-gray-600 text-lg mb-6">
          All content on this website, including text, images, logos, and software, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
        <p className="text-gray-600 text-lg mb-6">
          While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of any content on our website. Your use of the website is at your own risk.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 text-lg mb-6">
          We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
        <p className="text-gray-600 text-lg mb-6">
          We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after such changes constitutes your acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-6">
          If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:support@indoorgym.in" className="text-indigo-600 hover:underline">support@indoorgym.in</a>.
        </p>
      </div>
    </PageWrapper>
  );
}
