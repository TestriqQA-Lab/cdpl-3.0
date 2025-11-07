'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useMemo } from 'react';


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

        <p className='text-slate-600 text-center text-lg'>Join 6000+ QA engineers placed in top firms</p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(' ')
              .map((s) => s[0])
              .slice(0, 2)
              .join('');
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                className={[
                  'relative overflow-hidden rounded-2xl border border-slate-200 bg-white',
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                  'hover:shadow-md transition focus-within:ring-2',
                ].join(' ')}
              >
                {/* Accent line */}
                <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${t.accent}`} />

                {/* Body */}
                <div className={`p-6 sm:p-7 ring-0 ${t.ring}`}>
                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        'grid h-12 w-12 place-items-center rounded-full font-semibold',
                        t.avatar,
                      ].join(' ')}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-slate-900">{t.name}</div>
                      <div className="truncate text-sm text-slate-600">{t.role}</div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-3 flex items-center gap-1" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                    “{t.text}”
                  </blockquote>

                  {/* Chips */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span
                      className={[
                        'rounded-full border px-2.5 py-1 text-[11px] font-semibold',
                        t.chip,
                        'border',
                      ].join(' ')}
                    >
                      Verified Review
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      Interview-Ready Skills
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      Portfolio Projects
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
