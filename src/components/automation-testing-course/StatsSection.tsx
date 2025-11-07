'use client';
import { motion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  color: string;   // card background
  border: string;  // card border
  text: string;    // primary text color
  dot: string;     // tiny accent dot color
};

const stats: Stat[] = [
  { value: '3,00,000+', label: 'Automation Jobs in India', delay: 0.1, color: 'bg-sky-50',    border: 'border-sky-200',    text: 'text-sky-800',    dot: 'bg-sky-400' },
  { value: '₹8–20 LPA', label: 'SDET Salary Range',        delay: 0.2, color: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-800',  dot: 'bg-amber-400' },
  { value: '35% CAGR',  label: 'Automation Growth',        delay: 0.3, color: 'bg-emerald-50',border: 'border-emerald-200',text: 'text-emerald-800',dot: 'bg-emerald-400' },
  { value: '30 Hours',  label: 'Pro Training',             delay: 0.4, color: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', dot: 'bg-violet-400' },
];

export default function StatsSection() {
  // SEO: structured data for search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Automation Testing & SDET Key Stats',
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
      id="automation-stats"
      aria-labelledby="automation-stats-heading"
      className="relative py-8 md:py-10"
    >
      {/* Subtle frame lines for a clean, futuristic vibe */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + supporting copy */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="automation-stats-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Outcomes that Matter for <span className="text-ST">SDET</span> Careers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            See the demand, pay range, market growth, and training effort for
            <strong> Automation Testing</strong> roles across India. These facts help learners plan a
            <strong> job-ready</strong> upskilling path.
          </p>
        </header>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: s.delay ?? i * 0.06, ease: 'easeOut' }}
              className={[
                'group relative overflow-hidden rounded-2xl border p-4 sm:p-5',
                s.color,
                s.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
              aria-label={`${s.value} — ${s.label}`}
            >
              {/* Tiny accent dot (micro detail) */}
              <span className={`pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full ${s.dot} transition-transform group-hover:scale-125`} />

              <div className={`text-xl lg:text-3xl font-extrabold ${s.text}`}>
                {s.value}
              </div>
              <div className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
                {s.label}
              </div>

              {/* Micro caption for SEO + clarity */}
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Benchmarks for <em>Automation Testing</em> / <em>SDET</em> roles — demand, salary, growth, and training time.
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Upskill with <strong>framework design</strong>, <strong>CI/CD pipelines</strong>, and
            <strong> AI-assisted testing</strong> to stand out for roles like <strong>SDET</strong>,
            <strong> Automation Engineer</strong>, and <strong>QA Lead</strong>. Master popular tools
            such as <strong>Selenium</strong>, <strong>Cypress</strong>, <strong>Playwright</strong>,
            <strong> REST Assured</strong>, and <strong>Jenkins</strong>.
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
