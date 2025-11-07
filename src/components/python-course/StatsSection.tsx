// components/sections/StatsSection.tsx
// Server component — clearer, larger stats with strong contrast and distinct soft colors.
// No client JS needed. Accessible + SEO JSON-LD included.

type Stat = {
  value: string;
  label: string;
  caption: string;
  bg: string;    // soft background
  text: string;  // strong text color for contrast
  ring: string;  // focus ring color
  bar: string;   // thin accent bar color
  aria?: string; // screen-reader label
};

const STATS: Stat[] = [
  {
    value: "$1.2M",
    label: "Top Python Dev Salary (US)",
    caption: "Upper-end compensation in high-demand markets",
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "focus:ring-sky-300",
    bar: "bg-sky-300",
    aria: "Top Python developer salary in the United States is 1.2 million dollars",
  },
  {
    value: "1.8M+",
    label: "Global Python Jobs",
    caption: "Across startups, FAANG, and enterprises",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "focus:ring-emerald-300",
    bar: "bg-emerald-300",
    aria: "Over 1.8 million Python jobs worldwide",
  },
  {
    value: "#1",
    label: "Most-Loved Language (2024)",
    caption: "Developer surveys & community reports",
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "focus:ring-amber-300",
    bar: "bg-amber-300",
    aria: "Python ranked number one most loved language in 2024",
  },
];

export default function StatsSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Python Popularity & Career Stats",
    description:
      "Clear, high-contrast statistics showing Python’s salary potential, job demand, and developer sentiment.",
    itemListElement: STATS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.label,
      additionalProperty: {
        "@type": "PropertyValue",
        name: s.label,
        value: s.value,
        description: s.caption,
      },
    })),
    keywords:
      "Python jobs, Python salary, learn Python, most loved language, Python career growth",
  };

  return (
    <section
      id="python-stats"
      aria-labelledby="python-stats-heading"
      className="relative py-4 md:py-10 bg-white"
    >
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2
            id="python-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Python Stats - <span className="text-FS">Clear & Impactful</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            See why Python leads in <strong>careers, salaries</strong>, and{" "}
            <strong>developer satisfaction</strong>.
          </p>
        </header>

        {/* Clear, large stat cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {STATS.map((s) => (
            <article
              key={s.label}
              role="group"
              aria-label={s.aria ?? s.label}
              className={[
                "rounded-2xl border border-slate-200 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
                "transition hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                s.ring,
                s.bg,
              ].join(" ")}
            >
              {/* top accent bar */}
              <div className={["h-1.5 w-full rounded-t-2xl", s.bar].join(" ")} aria-hidden />

              <div className="p-6">
                <div className={["text-xl md:text-4xl font-extrabold tracking-tight", s.text].join(" ")}>
                  {s.value}
                </div>
                <div className="mt-2 text-base sm:text-lg font-semibold text-slate-800">
                  {s.label}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {s.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting line for SEO & clarity */}
        <p className="mt-8 max-w-4xl mx-auto text-center text-sm sm:text-base text-slate-600">
          From <strong>automation & APIs</strong> to <strong>data science & AI</strong>, Python’s
          ecosystem unlocks multiple high-growth career paths with strong hiring demand.
        </p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
