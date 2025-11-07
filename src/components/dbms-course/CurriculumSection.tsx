'use client';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
  { title: 'MySQL Fundamentals',            topics: ['Installation & Setup', 'Database vs Table', 'Data Types', 'CRUD Operations'] },
  { title: 'Advanced SQL Queries',          topics: ['JOINs (INNER, LEFT, etc.)', 'Subqueries', 'Aggregate Functions', 'Window Functions'] },
  { title: 'Database Design & Normalization', topics: ['ER Diagrams', '1NF to 3NF', 'Keys & Constraints', 'Indexing Strategy'] },
  { title: 'Performance Optimization',      topics: ['EXPLAIN PLAN', 'Index Optimization', 'Query Caching', 'Partitioning'] },
  { title: 'Real-World Projects',           topics: ['E-Commerce DB', 'Inventory System', 'Analytics Dashboard', 'Banking DB'] },
];

// Distinct, non-repeating accents (no heavy gradients)
const accents = [
  { cardBg: 'bg-sky-50',     cardBorder: 'border-sky-200',     badgeBg: 'bg-sky-600',     ink: 'text-sky-900',     icon: 'text-sky-700' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-600', ink: 'text-emerald-900', icon: 'text-emerald-700' },
  { cardBg: 'bg-amber-50',   cardBorder: 'border-amber-200',   badgeBg: 'bg-amber-600',   ink: 'text-amber-900',   icon: 'text-amber-700' },
  { cardBg: 'bg-violet-50',  cardBorder: 'border-violet-200',  badgeBg: 'bg-violet-600',  ink: 'text-violet-900',  icon: 'text-violet-700' },
  { cardBg: 'bg-rose-50',    cardBorder: 'border-rose-200',    badgeBg: 'bg-rose-600',    ink: 'text-rose-900',    icon: 'text-rose-700' },
];

export default function CurriculumSection() {
  // SEO structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MySQL Course Curriculum',
    description:
      'Industry-ready MySQL curriculum: SQL queries, database design & normalization, indexing, EXPLAIN, caching, partitioning, and real projects.',
    itemListElement: curriculum.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: m.title,
      item: {
        '@type': 'Course',
        name: m.title,
        description: m.topics.join(', '),
      },
    })),
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-8 md:py-10 bg-white">
      {/* subtle top/bottom separators for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-slate-900 text-center font-bold mb-4">
        Industry-Ready <span className='text-ST'>MySQL Curriculum</span>
      </h2>

        {/* SEO-supportive intro */}
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Learn <strong>SQL querying</strong>, <strong>schema design</strong>, <strong>normalization</strong>,{' '}
          <strong>index strategies</strong>, <strong>EXPLAIN plan analysis</strong>, <strong>caching</strong>,{' '}
          <strong>partitioning</strong>, and build <strong>production-style MySQL databases</strong> for real business use cases.
        </p>

        {/* Modules grid */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  // extra padding-top so badge never overlaps title on small screens
                  'pt-14 md:pt-10',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* Number badge */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold text-white shadow-sm',
                    // smaller on mobile, upsized on sm+
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>

                <h3 className={['mb-4 text-xl font-semibold leading-snug pr-14 sm:pr-0', a.ink].join(' ')}>{mod.title}</h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* outcomes microcopy */}
                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, performance drills, and take-home projects to showcase on your portfolio.
                </p>
              </li>
            );
          })}
        </ol>

        {/* Optional inline CTAs (anchor within page) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </button>
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
