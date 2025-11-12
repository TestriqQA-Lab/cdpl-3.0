// components/powerbi/TestimonialsSection.tsx
import React from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';



const TestimonialsSection: React.FC = () => {


  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Student Success Stories
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Graduates Say About the Program
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Join a community of successful data professionals who have transformed their careers with our expert training.
          </p>
        </div>

        <ReviewsMarquee />
      </div>
    </section>
  );
};

export default TestimonialsSection;
