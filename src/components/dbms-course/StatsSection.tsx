'use client';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  bg: string;
  border: string;
  ink: string;
};

const stats: Stat[] = [
  { value: '1,50,000+', label: 'MySQL Jobs in India',  delay: 0.1, bg: 'bg-sky-50',     border: 'border-sky-200',     ink: 'text-sky-900' },
  { value: '₹5–10 LPA', label: 'Fresher Salary Range', delay: 0.2, bg: 'bg-amber-50',   border: 'border-amber-200',   ink: 'text-amber-900' },
  { value: '30% CAGR',  label: 'DB Market Growth',     delay: 0.3, bg: 'bg-emerald-50', border: 'border-emerald-200', ink: 'text-emerald-900' },
  { value: '20 Hours',  label: 'Intensive Training',   delay: 0.4, bg: 'bg-violet-50',  border: 'border-violet-200',  ink: 'text-violet-900' },
];

export default function StatsSection() {
  // SEO structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MySQL Course Key Statistics',
    description:
      'Job demand, fresher salary, market growth, and training hours for the MySQL course and database careers in India.',
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
      id="mysql-stats"
      aria-labelledby="stats-heading"
      className="relative py-4 md:py-10 bg-white"
    >
      {/* subtle top/bottom separators for a clean, futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + intro */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="stats-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Real-World <span className="text-ST">MySQL</span> Metrics for <span className='text-ST'>Careers & Training</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore the demand for <strong>MySQL</strong> and <strong>SQL</strong> skills in India—job openings, fresher salary,
            database market growth, and our concise <strong>20-hour</strong> program designed to make you <strong>job-ready</strong>.
          </p>
        </header>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: s.delay ?? i * 0.05, ease: 'easeOut' }}
              aria-label={`${s.value} — ${s.label}`}
              className={[
                'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                s.bg,
                s.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
            >
              {/* tiny corner pixel for a futuristic touch */}
              <span className="pointer-events-none animate-pulse absolute right-4 top-4 h-2 w-2 rounded-full bg-slate-400/30 transition-transform group-hover:scale-125" />

              <div className={['font-extrabold', s.ink, 'text-xl lg:text-4xl'].join(' ')}>
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{s.label}</div>

              {/* micro caption for accessibility & SEO */}
              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified indicators for <em>MySQL</em> roles, fresher packages, and demand growth across Indian tech hubs.
              </p>
            </motion.article>
          ))}
        </div>

        {/* supporting SEO line */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Build competitive expertise in <strong>SQL querying</strong>, <strong>schema design</strong>,{' '}
            <strong>indexing & optimization</strong>, and <strong>transaction management</strong> to stand out for{' '}
            <strong>Database Developer</strong>, <strong>Data Analyst</strong>, and <strong>Backend Engineer</strong> roles.
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
