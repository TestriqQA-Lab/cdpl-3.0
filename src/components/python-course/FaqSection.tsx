// components/sections/FaqSection.tsx
// Server component — sleek, slightly futuristic, responsive, SEO-friendly FAQ.

import Link from "next/link";

type FAQ = { q: string; a: string; accent: string; chip: string };

const faqs: FAQ[] = [
  {
    q: "Do I need prior coding experience?",
    a: "No. We start from absolute basics and build up to production-ready Python for web, data, and automation. You’ll get structured practice, review checklists, and starter templates.",
    accent: "border-sky-200 hover:border-sky-300",
    chip: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes — you’ll receive a globally recognized CDPL certificate with QR validation that recruiters can instantly verify.",
    accent: "border-emerald-200 hover:border-emerald-300",
    chip: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    q: "Is the program live or self-paced?",
    a: "Live, mentor-led sessions with lifetime access to recordings, code repos, and projects. Perfect for working professionals and students.",
    accent: "border-amber-200 hover:border-amber-300",
    chip: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    q: "Do you provide placement support?",
    a: "Absolutely. We help with resume crafting, ATS keywords, mock interviews, GitHub portfolio review, and curated job alerts.",
    accent: "border-violet-200 hover:border-violet-300",
    chip: "bg-violet-50 text-violet-800 border-violet-200",
  },
  {
    q: "What’s the duration and weekly effort?",
    a: "The program is ~10 weeks (~80 hours). Plan ~6 hours/week including live classes, labs, and project time.",
    accent: "border-rose-200 hover:border-rose-300",
    chip: "bg-rose-50 text-rose-800 border-rose-200",
  },
  {
    q: "Will I build a portfolio?",
    a: "Yes — at least 3 deployable projects (web, data, and automation/ML). Each includes a README, demo, and metrics so you can showcase outcomes.",
    accent: "border-indigo-200 hover:border-indigo-300",
    chip: "bg-indigo-50 text-indigo-800 border-indigo-200",
  },
];

export default function FaqSection() {
  // JSON-LD for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
    keywords:
      "Python course FAQ, Python certificate, placement assistance, live classes, recordings, Python portfolio projects",
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Subtle futuristic grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <header className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-FS"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
            Everything you need to know about the program —{" "}
            <strong>live classes, certification, portfolio, and placements</strong>.
          </p>
        </header>

        {/* Search-like helper (static, no JS) */}
        <div className="mt-6 hidden sm:block">
          <div className="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur">
            <div className="text-[11px] font-semibold text-slate-600">
              Tip: Press <kbd className="rounded border bg-slate-50 px-1">Ctrl</kbd> +{" "}
              <kbd className="rounded border bg-slate-50 px-1">F</kbd> to search a keyword (e.g.{" "}
              <em>certificate</em>, <em>projects</em>, <em>placement</em>).
            </div>
          </div>
        </div>

        {/* FAQ items */}
        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className={[
                "group rounded-2xl border bg-white p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition",
                f.accent,
              ].join(" ")}
            >
              {/* Summary row */}
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                <div>
                  <div
                    className={[
                      "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                      f.chip,
                    ].join(" ")}
                  >
                    Answered
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-bold text-slate-900">{f.q}</h3>
                </div>
                {/* Chevron */}
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              {/* Answer */}
              <div className="pt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        {/* Extra SEO/help text */}
        <p className="mt-8 text-center text-sm sm:text-base text-slate-600">
          Still have questions?{" "}
          <Link href="contact-us" className="font-semibold text-FS underline-offset-4 hover:underline">
            Talk to a program advisor
          </Link>{" "}
          for a personalized walkthrough.
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
