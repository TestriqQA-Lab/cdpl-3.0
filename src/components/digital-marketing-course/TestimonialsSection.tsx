// components/sections/TestimonialsSection.tsx
// Server component (no client-side JS) – sleek, responsive, slightly futuristic

import Link from "next/link";
import ReviewsMarquee from "../sections/ReviewMarque";

type Testimonial = {
  name: string;
  text: string;
  role?: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  { name: 'Kishore Jha', role: 'Digital Marketing Analyst', rating: 5, text: 'This course is designed in an efficient and effective manner. The instructor is excellent and under his guidance I was able to learn a lot of new things.' },
  { name: 'Ragini Kumari', role: 'Performance Marketer', rating: 5, text: 'Best training institute for learning. It has the best skilled faculty in my experience and they have placed me in a good company.' },
  { name: 'Faiz Khan', role: 'SEO Specialist', rating: 5, text: 'Everything about this course is great! From the comprehensive content to the engaging delivery, it’s been an enlightening journey.' },
  { name: 'Dakshali Merya', role: 'Content Strategist', rating: 5, text: 'The instructor is highly skilled and the concepts are well comprehended.' },
];

export default function TestimonialsSection() {
  // JSON-LD (Review + AggregateRating)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product', // course/program as a product-like entity for reviews
    name: 'AI-Driven Digital Marketing & Analytics — Mentorship Program',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: `${testimonials.length}`,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: String(t.rating ?? 5), bestRating: '5' },
      author: { '@type': 'Person', name: t.name },
    })),
    keywords:
      'digital marketing reviews, student testimonials, marketing mentorship feedback, SEO course review, performance marketing training',
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-12 sm:py-16 md:py-20"
    >
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-10">
        <header className="text-center">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What Our <span className="text-green-700">Students Say</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Real experiences from learners who leveled up their careers with <strong>job-ready marketing skills</strong>,
            analytics, and <strong>AI-driven execution</strong>.
          </p>
          {/* micro badges */}
          <div className="mt-5 mb-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">4.9★ Avg Rating</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Placement Support</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Project-Based Learning</span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            className="rounded-xl border border-orange-500 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Join the next cohort
          </button>
          <Link
            href="contact-us"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Book a free demo
          </Link>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}


