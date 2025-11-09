'use client';
import { useMemo } from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';


type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  // Visual accents (distinct per card; no color repetition)
  accent: string; // top bar color
  ring: string; // ring color
  chip: string; // chip bg/text
  avatar: string; // avatar bg
};

const testimonials: Testimonial[] = [
  {
    name: 'Riya Patel',
    role: 'QA Lead at TCS',
    rating: 5,
    text:
      'From fresher to QA Lead in 45 days. The banking project is now in my resume!',
    accent: 'bg-sky-600',
    ring: 'ring-sky-200',
    chip: 'bg-sky-50 text-sky-800 border-sky-200',
    avatar: 'bg-sky-100 text-sky-800',
  },
  {
    name: 'Aman Verma',
    role: 'SDET, Infosys',
    rating: 5,
    text: 'Manual + Cypress combo got me ₹14 LPA offer.',
    accent: 'bg-emerald-600',
    ring: 'ring-emerald-200',
    chip: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    avatar: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'Shalini Gupta',
    role: 'Fresher → Wipro',
    rating: 5,
    text: 'Best decision! Dual skills opened 5 job offers.',
    accent: 'bg-violet-600',
    ring: 'ring-violet-200',
    chip: 'bg-violet-50 text-violet-800 border-violet-200',
    avatar: 'bg-violet-100 text-violet-800',
  },
];

export default function TestimonialsSection() {

  /** SEO: Aggregate rating + individual reviews */
  const jsonLd = useMemo(() => {
    const average = (
      testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length
    ).toFixed(1);

    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Student Success Stories — QA, SDET & Automation',
      itemListElement: testimonials.map((t, i) => ({
        '@type': 'Review',
        position: i + 1,
        reviewBody: t.text,
        author: { '@type': 'Person', name: t.name },
        itemReviewed: {
          '@type': 'Course',
          name: 'Manual + Automation Testing Master Program',
        },
        reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: '5' },
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: average,
        reviewCount: testimonials.length,
        bestRating: '5',
      },
      keywords:
        'QA success stories, SDET placement, automation testing reviews, Cypress, Selenium, portfolio projects',
    };
  }, []);

  return (
    <section id='testimonials' className="relative py-8 md:py-10 bg-white">
      {/* subtle framework lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          Student <span className='text-ST'>Success Stories</span>
        </h2>

        <p className='text-slate-600 text-center text-lg mb-5'>Join 6000+ QA engineers placed in top firms</p>

        <ReviewsMarquee />

        {/* SEO supportive line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          All reviews cite <strong>job outcomes</strong>, <strong>real project work</strong>, and{' '}
          <strong>automation-first skills</strong> (Selenium, Cypress, Playwright, API, CI/CD)—the exact
          keywords hiring managers search for.
        </p>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
