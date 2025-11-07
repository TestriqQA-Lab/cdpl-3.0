'use client';
import { motion } from 'framer-motion';

type Stat = { value: string; label: string; delay?: number; color: string; border: string; text: string };

const stats: Stat[] = [
  { value: '1,01,000+', label: 'API Testing Jobs in India', delay: 0.1, color: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800' },
  { value: '₹4–8 LPA', label: 'Fresher Salary Range', delay: 0.2, color: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  { value: '25% CAGR', label: 'Market Growth (2020–30)', delay: 0.3, color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  { value: '15 Hours', label: 'Intensive Training', delay: 0.4, color: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800' },
];

export default function StatsSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: stats.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.label,
      additionalProperty: {
        '@type': 'PropertyValue',
        name: s.label,
        value: s.value,
      },
    })),
  };

  return (
    <section
      id="api-testing-stats"
      aria-labelledby="stats-heading"
      className="relative py-8 sm:py-16"
    >
      {/* Subtle backdrop: light, clean, no heavy gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        {/* ultra-faint grid using borders for a futuristic feel */}
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="stats-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Real-World Outcomes: <span className='text-ST'>API Testing</span> Careers & Training Impact
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Discover key metrics that matter for <strong>API Testing</strong> careers in India—job openings, fresher salary ranges,
            market growth, and our concise <strong>15-hour</strong> intensive program designed to make you <strong>job-ready</strong> quickly.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: s.delay ?? i * 0.05, ease: 'easeOut' }}
              className={[
                'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                s.color,
                s.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
              aria-label={`${s.value} — ${s.label}`}
            >
              {/* Decorative corner dot for futuristic vibe */}
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              <div className={`text-xl font-extrabold sm:text-4xl ${s.text}`}>{s.value}</div>
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
              {/* micro caption for accessibility & SEO */}
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified metrics for <em>API Testing</em> roles, fresher packages, and demand growth across Indian tech hubs.
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            With strong <strong>demand for API automation</strong>, <strong>Postman</strong> proficiency, and <strong>REST/GraphQL</strong> best practices,
            candidates gain an edge in <strong>QA Engineer</strong>, <strong>API Tester</strong>, and <strong>Automation Tester</strong> roles.
            Our hands-on approach focuses on <em>test design, schema validation, CI/CD integration, and API security</em> to accelerate hiring readiness.
          </p>
        </div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
