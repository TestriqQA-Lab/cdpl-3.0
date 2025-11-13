// src/components/TestimonialsSection.tsx
import React from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';


export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
            Hear From Our Successful Graduates
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            Our students are achieving their career goals in Data Science and Machine Learning.
          </p>
        </div>

        <ReviewsMarquee />
      </div>
    </section>
  );
};
