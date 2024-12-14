import React from 'react';
import PageWrapper from './PageWrapper';

export default function BlogsPage() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Blogs</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to our blogs page. Here you will find articles and posts related to home gym equipment and fitness tips.
        </p>
      </div>
    </PageWrapper>
  );
}
