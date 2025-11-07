// components/sections/CurriculumSection.tsx
// Server component – no client JS needed

import Link from "next/link";

type Module = {
  num: string;
  title: string;
  outcome: string;
};

const modules: Module[] = [
  { num: '01', title: 'Fundamentals of Digital Marketing', outcome: 'Create an end-to-end digital plan and GTM framework.' },
  { num: '02', title: 'SEO Fundamentals', outcome: 'Lift organic traffic with technical + on-page + off-page SEO.' },
  { num: '03', title: 'Social Media Marketing', outcome: 'Design content systems that match platform algorithms.' },
  { num: '04', title: 'Persuasive Copywriting', outcome: 'Write high-converting ads, emails, and landing pages.' },
  { num: '05', title: 'Marketing on Google', outcome: 'Search, Display & Video with SKAG/SCAG and smart bidding.' },
  { num: '06', title: 'Marketing on Facebook', outcome: 'Scale ROAS using CBO, lookalikes, and rules automation.' },
  { num: '07', title: 'LinkedIn & Other Platforms', outcome: 'Run LinkedIn, Apple, Amazon & Native funnels.' },
  { num: '08', title: 'Conversion Tracking', outcome: 'Implement GA4, GTM, Conversions API, heatmaps—properly.' },
  { num: '09', title: 'CRO (Basic → Advanced)', outcome: 'Plan A/B tests and optimize forms, pages, and offers.' },
  { num: '10', title: 'Media Planning', outcome: 'Budget, pacing, and channel mix across the funnel.' },
  { num: '11', title: 'Dashboards & Reporting', outcome: 'Build real-time Looker Studio dashboards stakeholders love.' },
  { num: '12', title: 'Attribution', outcome: 'Compare models; craft a custom attribution strategy.' },
  { num: '13', title: 'Email/WhatsApp + Automation', outcome: 'Automate journeys for acquisition and retention.' },
  { num: '14', title: 'Capstone & Job Preparation', outcome: 'Ship a live portfolio + interview toolkit to land offers.' },
];

// Distinct color accents (no repeats, no heavy gradients)
const ACCENTS = [
  { ring: 'ring-sky-300', soft: 'bg-sky-50', badge: 'text-sky-800 bg-sky-100', text: 'text-sky-900' },
  { ring: 'ring-emerald-300', soft: 'bg-emerald-50', badge: 'text-emerald-800 bg-emerald-100', text: 'text-emerald-900' },
  { ring: 'ring-amber-300', soft: 'bg-amber-50', badge: 'text-amber-800 bg-amber-100', text: 'text-amber-900' },
  { ring: 'ring-violet-300', soft: 'bg-violet-50', badge: 'text-violet-800 bg-violet-100', text: 'text-violet-900' },
  { ring: 'ring-rose-300', soft: 'bg-rose-50', badge: 'text-rose-800 bg-rose-100', text: 'text-rose-900' },
  { ring: 'ring-indigo-300', soft: 'bg-indigo-50', badge: 'text-indigo-800 bg-indigo-100', text: 'text-indigo-900' },
  { ring: 'ring-teal-300', soft: 'bg-teal-50', badge: 'text-teal-800 bg-teal-100', text: 'text-teal-900' },
  { ring: 'ring-fuchsia-300', soft: 'bg-fuchsia-50', badge: 'text-fuchsia-800 bg-fuchsia-100', text: 'text-fuchsia-900' },
  { ring: 'ring-lime-300', soft: 'bg-lime-50', badge: 'text-lime-800 bg-lime-100', text: 'text-lime-900' },
  { ring: 'ring-cyan-300', soft: 'bg-cyan-50', badge: 'text-cyan-800 bg-cyan-100', text: 'text-cyan-900' },
  { ring: 'ring-orange-300', soft: 'bg-orange-50', badge: 'text-orange-800 bg-orange-100', text: 'text-orange-900' },
  { ring: 'ring-stone-300', soft: 'bg-stone-50', badge: 'text-stone-800 bg-stone-100', text: 'text-stone-900' },
  { ring: 'ring-blue-300', soft: 'bg-blue-50', badge: 'text-blue-800 bg-blue-100', text: 'text-blue-900' },
  { ring: 'ring-purple-300', soft: 'bg-purple-50', badge: 'text-purple-800 bg-purple-100', text: 'text-purple-900' },
];

export default function CurriculumSection() {
  // SEO JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI-Driven Digital Marketing & Analytics — Curriculum',
    description:
      'Career-ready digital marketing syllabus: SEO, performance marketing, GA4/GTM, CRO, media planning, dashboards, attribution, automation.',
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    itemListElement: modules.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.title,
      description: m.outcome,
    })),
    keywords:
      'digital marketing curriculum, SEO course modules, GA4 training, CRO syllabus, media planning, attribution, performance marketing course',
  };

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="relative py-8 md:py-8 bg-white"
    >

      {/* Futuristic scaffold + center timeline rail */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(600px_240px_at_50%_0%,rgba(2,132,199,0.06),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <header className="text-center">
          <h2
            id="curriculum-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Course Curriculum - <span className="text-green-700">14 Modules</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            A <strong>portfolio-first</strong>, <strong>job-ready</strong> roadmap: master SEO, performance ads, GA4/GTM,
            CRO, media planning, dashboards, attribution, and lifecycle automation.
          </p>
        </header>

        {/* Timeline layout: on md+ items alternate left/right; on mobile they stack */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* center rail */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block"
          />

          <ol className="space-y-6">
            {modules.map((m, i) => {
              const sideLeft = i % 2 === 0; // left for even, right for odd (md+)
              const accent = ACCENTS[i % ACCENTS.length];

              return (
                <li key={m.num} className="relative">
                  <div
                    className={[
                      'md:flex md:items-stretch',
                      sideLeft ? 'md:justify-start' : 'md:justify-end',
                    ].join(' ')}
                  >
                    {/* connector dot (md+) */}
                    <span
                      aria-hidden
                      className={[
                        'hidden md:block absolute top-6 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full shadow',
                        'ring-4 bg-white', // base
                        accent.ring, // colored ring
                      ].join(' ')}
                    />

                    {/* card */}
                    <article
                      className={[
                        'relative w-full md:w-[calc(50%-1.25rem)] rounded-2xl border bg-white/90 backdrop-blur',
                        'shadow-sm hover:shadow-md transition',
                        'ring-1 ring-transparent hover:translate-y-[-2px]',
                        accent.ring,
                      ].join(' ')}
                    >
                      {/* subtle top bar */}
                      <div aria-hidden className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-black/5" />

                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3">
                          {/* number badge */}
                          <span
                            className={[
                              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold shadow-sm',
                              accent.badge,
                            ].join(' ')}
                            aria-label={`Module ${m.num}`}
                          >
                            {m.num}
                          </span>

                          <div className="min-w-0">
                            <h3
                              className={[
                                'text-base sm:text-lg font-semibold',
                                accent.text,
                              ].join(' ')}
                            >
                              {m.title}
                            </h3>
                            <p className="mt-1 text-[13px] sm:text-sm leading-relaxed text-slate-700">
                              <span className="font-semibold">Outcome:</span> {m.outcome}
                            </p>

                            {/* micro-chips for engagement (rotate unique colors) */}
                            <ul className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
                              <li className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">
                                Practice Brief
                              </li>
                              <li className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
                                Checklist
                              </li>
                              <li className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-indigo-700">
                                Template
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Footer CTA row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            className="rounded-xl border border-orange-500 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Get Full Syllabus PDF
          </button>
          <Link
            href="contact-us"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Book a Free Demo
          </Link>
        </div>
      </div>

      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </section>
  );
}
