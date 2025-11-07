'use client';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  color: string;   // card bg
  border: string;  // card border
  text: string;    // value text color
  badge: string;   // tiny dot color
};

const stats: Stat[] = [
  { value: '4,00,000+', label: 'QA Jobs in India',   delay: 0.1, color: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-900',     badge: 'bg-sky-500' },
  { value: '₹5–18 LPA',  label: 'Salary Range',       delay: 0.2, color: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-900',   badge: 'bg-amber-500' },
  { value: '38% CAGR',   label: 'QA Market Growth',   delay: 0.3, color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', badge: 'bg-emerald-500' },
  { value: '40 Hours',   label: 'Master Training',    delay: 0.4, color: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-900',  badge: 'bg-violet-500' },
];

export default function StatsSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'QA & SDET Program Key Statistics',
    description:
      'Market-driven QA & SDET statistics in India including jobs, salary range, growth rate, and program duration.',
    itemListElement: stats.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
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
      id="program-stats"
      aria-labelledby="stats-heading"
      className="relative py-8 md:py-10"
    >
      {/* Subtle frame + lines (clean, slightly futuristic) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + SEO-friendly copy */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Real-World <span className="text-ST">QA</span> & <span className='text-ST'>SDET</span> Metrics
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Up-to-date insights on <strong>QA jobs in India</strong>, typical <strong>SDET salaries</strong>,{" "}
            <strong>market growth</strong>, and our <strong>industry-focused training duration</strong>—everything you
            need to plan a high-paying QA career.
          </p>
        </header>

        {/* Stat cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
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
              {/* tiny accent dot */}
              <span
                aria-hidden
                className={`pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full ${s.badge} transition-transform group-hover:scale-125`}
              />
              {/* value */}
              <div className={`text-lg md:text-xl xl:text-4xl font-extrabold ${s.text}`}>{s.value}</div>
              {/* label */}
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</div>
              {/* micro caption for accessibility & SEO */}
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified metrics for <em>QA</em>, <em>Automation Testing</em>, and{" "}
                <em>SDET</em> roles across India.
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          With rising demand for <strong>test automation</strong>, <strong>API testing</strong>,{" "}
          <strong>mobile testing</strong>, and <strong>CI/CD</strong> skills, candidates trained on{" "}
          <em>Selenium, Cypress, Playwright, REST Assured</em> and robust <em>framework design</em> consistently
          land interviews faster and negotiate higher packages.
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
