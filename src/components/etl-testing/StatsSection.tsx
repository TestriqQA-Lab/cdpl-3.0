'use client';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  color: string;   // bg color
  border: string;  // border color
  text: string;    // text color
};

const stats: Stat[] = [
  { value: '85,000+', label: 'ETL Testing Jobs in India', delay: 0.1, color: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-800' },
  { value: '₹6–12 LPA', label: 'Fresher Salary Range',     delay: 0.2, color: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-800' },
  { value: '28% CAGR',  label: 'Data Testing Growth',      delay: 0.3, color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  { value: '18 Hours',  label: 'Intensive Training',       delay: 0.4, color: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-800' },
];

export default function StatsSection() {
  // SEO: structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ETL Testing Key Stats',
    description:
      'Important statistics for ETL Testing in India: job openings, fresher salary range, market growth, and training duration.',
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
      id="etl-stats"
      aria-labelledby="etl-stats-heading"
      className="relative py-4 md:py-10 bg-white"
    >
      {/* Subtle top/bottom separators for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading & subcopy (small on mobile, larger on tablet/desktop) */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="etl-stats-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Real-World Outcomes: <span className='text-ST'>ETL Testing</span> Careers & Training Impact
            
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore key metrics that matter for <strong>ETL Testing</strong> in India—job
            demand, fresher salaries, market growth, and our focused{' '}
            <strong>18-hour</strong> training designed to make you <strong>job-ready</strong>.
          </p>
        </header>

        {/* Stats Grid */}
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
              {/* Decorative corner dot */}
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              <div className={`text-xl lg:text-4xl font-extrabold ${s.text}`}>{s.value}</div>
              <div className="mt-1 text-[11px] sm:text-sm font-medium text-slate-600">{s.label}</div>
              {/* micro caption for SEO & clarity */}
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified industry data for <em>ETL/ELT roles</em>, fresher packages, and demand across Indian tech hubs.
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Employers value <strong>SQL data quality rules</strong>, <strong>reconciliation</strong>,{' '}
            <strong>partitioning</strong>, and <strong>pipeline validation</strong>. Our hands-on approach covers{' '}
            <em>test design, schema checks, orchestration basics, CI/CD integration, and audit-ready reporting</em>.
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
