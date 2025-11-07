// components/sections/TestimonialsSection.tsx
// Server component (no client-side JS) – sleek, responsive, slightly futuristic

import Link from "next/link";

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

// Distinct soft accents per card (no repeated colors in a row; no loud gradients)
const ACCENTS = [
  { ring: 'ring-sky-300', chip: 'bg-sky-50 text-sky-800 border-sky-200', dot: 'bg-sky-500' },
  { ring: 'ring-emerald-300', chip: 'bg-emerald-50 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500' },
  { ring: 'ring-amber-300', chip: 'bg-amber-50 text-amber-900 border-amber-200', dot: 'bg-amber-500' },
  { ring: 'ring-violet-300', chip: 'bg-violet-50 text-violet-800 border-violet-200', dot: 'bg-violet-500' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

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
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">4.9★ Avg Rating</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Placement Support</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Project-Based Learning</span>
          </div>
        </header>

        {/* Mobile: horizontal scroll-snap; Desktop: grid */}
        <div className="mt-8 sm:mt-10">
          <div className="grid gap-4 sm:gap-5 md:hidden">
            {/* On very small screens, still a vertical stack (better readability) */}
            {testimonials.map((t, i) => {
              const a = ACCENTS[i % ACCENTS.length];
              return <Card key={i} t={t} a={a} />;
            })}
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => {
              const a = ACCENTS[i % ACCENTS.length];
              return <Card key={i} t={t} a={a} />;
            })}
          </div>

          {/* Horizontal snap for small/medium if desired */}
          <div className="mt-6 md:hidden overflow-x-auto no-scrollbar">
            <div className="flex snap-x snap-mandatory gap-4">
              {testimonials.map((t, i) => {
                const a = ACCENTS[(i + 1) % ACCENTS.length];
                return <Card key={`snap-${i}`} t={t} a={a} snap />;
              })}
            </div>
          </div>
        </div>

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

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </span>
  );
}

function Card({
  t,
  a,
  snap = false,
}: {
  t: Testimonial;
  a: { ring: string; chip: string; dot: string };
  snap?: boolean;
}) {
  return (
    <article
      className={[
        'relative isolate rounded-2xl border border-slate-200 bg-white/95 p-5 sm:p-6 backdrop-blur',
        'ring-1 ring-transparent transition hover:shadow-md',
        a.ring,
        snap ? 'min-w-[88%] snap-center' : '',
      ].join(' ')}
      aria-label={`Testimonial by ${t.name}`}
    >
      {/* Accent bar */}
      <span aria-hidden className={`absolute left-0 top-0 h-full w-1.5 ${a.dot} rounded-l-2xl`} />

      {/* Header: avatar + name + role + rating */}
      <div className="flex items-start gap-3">
        <div
          className={[
            'grid h-12 w-12 place-items-center rounded-xl border text-sm font-bold',
            a.chip,
          ].join(' ')}
          aria-hidden
        >
          {initials(t.name)}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${a.chip}`}>
              Verified Student
            </span>
          </div>
          {t.role && <p className="mt-0.5 text-xs text-slate-600">{t.role}</p>}
          <div className="mt-1">
            <Stars count={t.rating ?? 5} />
          </div>
        </div>
      </div>

      {/* Body */}
      <p className="mt-4 text-[13px] sm:text-sm leading-relaxed text-slate-700 italic">
        “{t.text}”
      </p>

      {/* Footer meta */}
      <div className="mt-4 flex items-center justify-between text-[11px] font-medium">
        <span className="text-slate-500">Outcome • Career Growth • Confidence</span>
        <span className="text-slate-700">★★★★★</span>
      </div>
    </article>
  );
}
