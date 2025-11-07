'use client';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
  { title: 'API Testing Fundamentals', topics: ['API vs UI Testing', 'POSTMAN Setup', 'HTTP Methods', 'Request/Response Structure'] },
  { title: 'Advanced POSTMAN Mastery', topics: ['Collections & Environments', 'Variables & Scripts', 'API Chaining', 'Data-Driven Testing'] },
  { title: 'Validation & Automation', topics: ['JSON Schema', 'Status Codes', 'Response Time', 'Test Scripts (Pre/Post)'] },
  { title: 'Security & Performance', topics: ['OAuth, JWT, API Keys', 'Rate Limiting', 'SQL Injection Testing', 'Load Testing Basics'] },
  { title: 'Live Projects & Capstone', topics: ['E-Commerce API Testing', 'Banking API Security', 'Healthcare API Compliance', 'Final Portfolio'] },
];

// Distinct accents
const accents = [
  { cardBg: 'bg-sky-50',     cardBorder: 'border-sky-200',     badgeBg: 'bg-sky-600',     badgeText: 'text-white',  ink: 'text-sky-800',     icon: 'text-sky-700' },
  { cardBg: 'bg-amber-50',   cardBorder: 'border-amber-200',   badgeBg: 'bg-amber-600',   badgeText: 'text-white',  ink: 'text-amber-800',   icon: 'text-amber-700' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-600', badgeText: 'text-white',  ink: 'text-emerald-800', icon: 'text-emerald-700' },
  { cardBg: 'bg-violet-50',  cardBorder: 'border-violet-200',  badgeBg: 'bg-violet-600',  badgeText: 'text-white',  ink: 'text-violet-800',  icon: 'text-violet-700' },
  { cardBg: 'bg-rose-50',    cardBorder: 'border-rose-200',    badgeBg: 'bg-rose-600',    badgeText: 'text-white',  ink: 'text-rose-800',    icon: 'text-rose-700' },
];

export default function CurriculumSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'API Testing Course Curriculum',
    description: 'Industry-ready API Testing curriculum: Postman, REST, JSON Schema validation, automation, security testing, performance, and capstone projects.',
    itemListElement: curriculum.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: m.title,
      item: { '@type': 'Course', name: m.title, description: m.topics.join(', ') },
    })),
  };

  return (
    <section id="curriculum" className="relative py-8 sm:py-20 bg-white">
      {/* subtle separators */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          Industry Ready <span className="text-ST">Curriculum</span>
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Master <strong>Postman</strong>, <strong>REST</strong>, <strong>GraphQL</strong>, <strong>JSON Schema</strong>, <strong>automation scripts</strong>, and <strong>OWASP API security</strong>.
          Build a portfolio with real-world API projects to become job-ready for QA and Automation roles.
        </p>

        {/* Cards */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  // EXTRA TOP PADDING on mobile so title never hides beneath the badge
                  'md:pt-12',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index badge — slightly smaller on mobile */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold shadow-sm',
                    // size tweaks for mobile vs larger screens
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                    a.badgeText,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>

                <h3 className={['mb-4 text-xl font-semibold leading-snug break-words', a.ink, 'pr-14 sm:pr-0'].join(' ')}>
                  {mod.title}
                </h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.
                </p>
              </li>
            );
          })}
        </ol>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-xl border-2 border-green-700 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </button>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
