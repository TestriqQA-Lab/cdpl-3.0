// components/sections/StatsSection.tsx
// Server component — clean, modern, responsive stats with subtle futuristic accents (Comprehensive DS & AI edition).

type Stat = {
  value: string;
  label: string;
  hint?: string;
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // value color
    chip: string;    // hint chip bg
    ring: string;    // focus ring
  };
};

const STATS: Stat[] = [
  {
    value: "25%",
    label: "Market Growth (2020–2030)",
    hint: "AI adoption accelerating",
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
  {
    value: "101,000+",
    label: "Job Vacancies in India",
    hint: "DA • DS • ML roles",
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },
  {
    value: "₹9 LPA",
    label: "Average Fresher Salary",
    hint: "City & role dependent",
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    value: "75%",
    label: "Job Satisfaction",
    hint: "Impactful problem-solving",
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    value: "32%",
    label: "India’s Global Market Share",
    hint: "Services • Product • Startups",
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
  },
  {
    value: "200 Hours",
    label: "Program Duration",
    hint: "Projects + mentorship",
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
];

export default function StatsSection() {
  const seoKeywords =
    "comprehensive data science and ai course, machine learning training india, data science jobs, fresher salary ds ml, ai market growth, 200 hour data science program, mentor led projects";

  // JSON-LD (ItemList) for richer snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Comprehensive Data Science & AI — Program Highlights",
    itemListElement: STATS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Thing",
        name: s.label,
        description: `${s.value} — ${s.label}${s.hint ? ` (${s.hint})` : ""}`,
      },
    })),
    keywords:
      "data science highlights, ai career stats, ml market growth, data jobs india, fresher salary data science",
  };

  return (
    <section
      id="comprehensive-dsai-stats"
      aria-labelledby="dsai-stats-heading"
      className="relative py-4 xl:py-12 bg-white"
    >
      {/* Subtle futuristic backdrop (fine grid + soft indigo glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(79,70,229,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="dsai-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why{" "}
            <span className="text-DS">
              Comprehensive Data Science & AI
            </span>
            ?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Equip yourself for tomorrow’s roles with <strong>Python</strong>, <strong>ML</strong>,{" "}
            <strong>DL</strong>, and <strong>data engineering</strong> foundations—delivered via mentor-led,
            project-first learning.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Stats grid */}
        <div
          role="list"
          aria-label="Program highlights statistics"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STATS.map((s) => (
            <article
              key={s.label}
              role="listitem"
              tabIndex={0}
              className={[
                "group relative rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                s.accent.border,
                s.accent.ring,
                "focus:outline-none focus:ring-2",
              ].join(" ")}
            >
              {/* top accent bar */}
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", s.accent.bar].join(" ")} aria-hidden />

              {/* value + label */}
              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
              <div className={["mt-3 text-4xl font-extrabold tracking-tight", s.accent.text].join(" ")}>
                {s.value}
              </div>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-800">{s.label}</p>

              {/* hint chip (optional) */}
              {s.hint && (
                <div
                  className={[
                    "mx-auto mt-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border",
                    s.accent.border,
                    s.accent.chip,
                    "text-slate-800",
                  ].join(" ")}
                >
                  {s.hint}
                </div>
              )}

              {/* micro-interaction underline */}
              <div className="mt-5 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                <div
                  className={[
                    "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                    s.accent.bar,
                    "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  ].join(" ")}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Build a <strong>recruiter-ready portfolio</strong> with dashboards, models, and pipelines—aimed at{" "}
            <strong>Data Analyst</strong>, <strong>Data Scientist</strong>, and <strong>ML Engineer</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">
            *Figures are indicative and vary by location, skills, and industry.
          </p>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
