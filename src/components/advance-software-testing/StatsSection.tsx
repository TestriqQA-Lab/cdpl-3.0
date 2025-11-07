'use client';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  cardBg: string;
  cardBorder: string;
  text: string;
  caption?: string;
};

const stats: Stat[] = [
  {
    value: '2,50,000+',
    label: 'QA Jobs in India',
    delay: 0.1,
    cardBg: 'bg-sky-50',
    cardBorder: 'border-sky-200',
    text: 'text-sky-900',
    caption: 'Entry–Senior roles across product & services firms',
  },
  {
    value: '₹6–15 LPA',
    label: 'Fresher Salary Range',
    delay: 0.2,
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    text: 'text-amber-900',
    caption: 'Varies by city, stack, & interview performance',
  },
  {
    value: '32% CAGR',
    label: 'Automation Testing Growth',
    delay: 0.3,
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
    text: 'text-emerald-900',
    caption: 'Driven by CI/CD, AI-assisted QA & DevOps',
  },
  {
    value: '25 Hours',
    label: 'Intensive Training',
    delay: 0.4,
    cardBg: 'bg-violet-50',
    cardBorder: 'border-violet-200',
    text: 'text-violet-900',
    caption: 'Mentor-led, project-based learning path',
  },
];

export default function StatsSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Advanced Software Testing — Key Career Stats',
    description:
      'Job demand, salary ranges, market growth, and program duration for Advanced Software Testing and Automation.',
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
      id="qa-stats"
      aria-labelledby="qa-stats-heading"
      className="relative py-4 md:py-10 bg-white"
    >
      {/* subtle top/bottom separators for a sleek, light, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="qa-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Real-World <span className="text-ST">QA & Automation</span> Career Metrics
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Explore up-to-date <strong>QA job demand</strong>, <strong>automation testing salaries</strong>, and our{' '}
            <strong>mentor-led training</strong> duration that accelerates hiring readiness.
          </p>
        </header>

        {/* stats grid */}
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
                s.cardBg,
                s.cardBorder,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.05)]',
                'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
            >
              {/* corner accent dot */}
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              <div className={`text-xl lg:text-4xl font-extrabold ${s.text}`}>{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</div>
              {s.caption && (
                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  {s.caption}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Gain an edge with <strong>Selenium</strong>, <strong>Appium</strong>, <strong>API automation</strong>, and{' '}
            <strong>CI/CD</strong> practices. Our practical approach with <em>framework design, reporting,</em> and{' '}
            <em>performance insights</em> helps you stand out for <strong>QA Engineer</strong> and{' '}
            <strong>Automation Tester</strong> roles.
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
