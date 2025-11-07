// components/sections/StatsSection.tsx
// Fix: all progress bars now reveal on hover/focus — no dynamic bg class generation.
// We add an explicit `fill` Tailwind class to each stat to avoid JIT purge issues.

"use client";

import React from "react";

type Stat = {
  value: string;
  label: string;
  aria: string;
  bg: string;
  text: string;
  border: string;
  ring: string;
  targetPct: string; // e.g., "80%", "76%"
  fill: string;      // explicit bg-* utility for the progress fill
};

const STATS: Stat[] = [
  {
    value: "25%",
    label: "Market growth (2020–2030)",
    aria: "Twenty five percent market growth from 2020 to 2030",
    bg: "bg-purple-50",
    text: "text-purple-900",
    border: "border-purple-200",
    ring: "focus:ring-purple-300",
    targetPct: "80%",
    fill: "bg-purple-600",
  },
  {
    value: "101,000+",
    label: "Data roles open in India",
    aria: "Over one hundred one thousand job vacancies in India",
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    ring: "focus:ring-amber-300",
    targetPct: "76%",
    fill: "bg-amber-600",
  },
  {
    value: "₹9 LPA",
    label: "Avg fresher salary (Data Science)",
    aria: "Nine L P A average fresher salary in data science",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    ring: "focus:ring-emerald-300",
    targetPct: "72%",
    fill: "bg-emerald-600",
  },
  {
    value: "75%",
    label: "Job satisfaction (surveyed)",
    aria: "Seventy five percent job satisfaction",
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-200",
    ring: "focus:ring-rose-300",
    targetPct: "78%",
    fill: "bg-rose-600",
  },
  {
    value: "32%",
    label: "India’s share of global market",
    aria: "Thirty two percent India share in the global market",
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    ring: "focus:ring-indigo-300",
    targetPct: "74%",
    fill: "bg-indigo-600",
  },
];

export default function StatsSection() {
  const subtitle =
    "Data is the new oil—and Python is the engine powering AI, analytics, and automation across industries.";
  const keywords =
    "machine learning market growth, data science jobs India, data analyst salary, ML career trends, Python analytics demand";

  return (
    <section
      id="ml-stats"
      aria-labelledby="ml-stats-heading"
      className="relative py-8 md:py-10 bg-white"
    >
      {/* Subtle futuristic accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-60">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#eeeeee_0_14px,transparent_14px_28px)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="ml-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Invest in <span className="text-DS">Machine Learning</span> & <span className="text-DS">Data Science</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Stats grid */}
        <div
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Key industry statistics"
        >
          {STATS.map((s) => (
            <article
              key={s.label}
              role="listitem"
              aria-label={s.aria}
              tabIndex={0}
              className={[
                "group rounded-2xl border p-6 text-center shadow-sm backdrop-blur transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                s.bg,
                s.border,
                s.ring,
              ].join(" ")}
            >
              {/* top accent */}
              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
              <p className={["mt-3 text-4xl font-extrabold", s.text].join(" ")}>{s.value}</p>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-700">{s.label}</p>

              {/* Always-visible full track */}
              <div className="mt-4 relative h-1 w-full rounded-full bg-slate-100" aria-hidden>
                {/* Target width wrapper */}
                <div
                  className="absolute left-0 top-0 h-1 overflow-hidden rounded-full"
                  style={{ width: s.targetPct }}
                >
                  {/* Fill scales from 0 -> 100% on hover/focus */}
                  <div
                    className={[
                      "h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out",
                      s.fill, // explicit bg utility, avoids purge
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust & context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Growing adoption across <strong>FinTech, Healthcare, Retail, and SaaS</strong> is accelerating demand for{" "}
            <strong>Python-first ML engineers, data analysts, and MLOps practitioners</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">
            *Figures are indicative and may vary by source, role, skills, and location.
          </p>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Machine Learning & Data Science Key Statistics",
            itemListElement: STATS.map((s, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: { "@type": "Thing", name: s.label, description: `${s.value} — ${s.label}` },
            })),
            numberOfItems: STATS.length,
            keywords:
              "machine learning market growth, data science jobs India, average data scientist salary, ML demand India",
          }),
        }}
      />
    </section>
  );
}
