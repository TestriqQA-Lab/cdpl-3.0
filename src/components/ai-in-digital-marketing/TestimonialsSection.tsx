"use client";

import ReviewsMarquee from "../sections/ReviewMarque";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-orange-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real students who have transformed their
            businesses
          </p>
        </div>

        <ReviewsMarquee />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-indigo-100 rounded-2xl border-2 border-orange-300">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Ready to become our next success story?
            </p>
            <Link
              href="/contact-us"
              className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3
    text-sm sm:text-base md:text-lg
    bg-orange-600 hover:bg-orange-700
    text-white font-bold
    rounded-xl
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    break-words
  "
            >
              Start Your Success Journey
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
