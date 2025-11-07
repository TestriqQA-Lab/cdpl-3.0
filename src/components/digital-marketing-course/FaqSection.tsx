// components/sections/FaqSection.tsx
// Server component — sleek, slightly futuristic, accessible, fully responsive.

import Link from "next/link";

type Faq = { q: string; a: string; accent: { ring: string; border: string; chip: string } };

const FAQS: Faq[] = [
  {
    q: 'Is prior experience required?',
    a: 'No. The program starts from fundamentals and scales to advanced, portfolio-ready work. If you have experience, you’ll move faster through labs and capstones.',
    accent: { ring: 'focus:ring-sky-300', border: 'border-sky-200', chip: 'bg-sky-100 text-sky-800' },
  },
  {
    q: 'Do you provide placement support?',
    a: 'Yes — end-to-end job assistance: resume & LinkedIn review, mock interviews, take-home assignment prep, and curated job alerts with referrals where available.',
    accent: { ring: 'focus:ring-emerald-300', border: 'border-emerald-200', chip: 'bg-emerald-100 text-emerald-800' },
  },
  {
    q: 'Are certificates globally recognized?',
    a: 'Certificates are QR-verified and accepted by top employers. We also help you showcase project outcomes and metrics on your portfolio for higher credibility.',
    accent: { ring: 'focus:ring-amber-300', border: 'border-amber-200', chip: 'bg-amber-100 text-amber-900' },
  },
  {
    q: 'What is the learning format & schedule?',
    a: 'Live cohort sessions with lifetime recording access. Batches are weekend-friendly. Doubt-clearing, code reviews, and project feedback are included.',
    accent: { ring: 'focus:ring-violet-300', border: 'border-violet-200', chip: 'bg-violet-100 text-violet-900' },
  },
  {
    q: 'Will I work on real projects?',
    a: 'Absolutely. You’ll complete production-style assignments, audits, dashboards, and campaign builds that translate directly to interview talking points.',
    accent: { ring: 'focus:ring-rose-300', border: 'border-rose-200', chip: 'bg-rose-100 text-rose-900' },
  },
];

export default function FaqSection() {
  // SEO JSON-LD (FAQPage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
    keywords:
      'digital marketing course FAQ, placement assistance, globally recognized certificate, live cohort training, project based learning',
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(720px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <header className="text-center">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-green-700">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about the program — certifications, placements, projects, and schedules.
          </p>
        </header>

        {/* FAQ list */}
        <ul className="mt-10 space-y-4">
          {FAQS.map((item) => (
            <li key={item.q}>
              <details
                className={[
                  'group relative rounded-2xl border bg-white p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                  'open:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2',
                  item.accent.border,
                  item.accent.ring,
                ].join(' ')}
              >
                {/* top accent line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
                />
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {item.q}
                  </span>
                  {/* plus/minus icon built with CSS */}
                  <span
                    className="relative mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition group-open:rotate-180"
                    aria-hidden
                  >
                    <span className="absolute h-3 w-0.5 bg-slate-700"></span>
                    <span className="absolute h-0.5 w-3 bg-slate-700"></span>
                  </span>
                </summary>

                <div className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  {item.a}
                </div>

                {/* meta chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.accent.chip} border border-black/5`}>
                    Student-first
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Job-ready
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Portfolio-driven
                  </span>
                </div>
              </details>
            </li>
          ))}
        </ul>

        {/* Soft CTA */}
        <div className="flex flex-col mt-10 justify-center items-center text-center">
          <Link
            href="contact-us"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Still have questions? Talk to an advisor"
          >
            Still have questions? Talk to an advisor
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <Link href="mailto:contact@cinutedigital.com" className="mt-3 text-xs sm:text-sm text-slate-600">
            Or write to us at <span className="font-medium text-slate-800">contact@cinutedigital.com</span>
          </Link>
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
