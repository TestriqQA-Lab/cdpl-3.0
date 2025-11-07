// components/sections/WhoShouldEnroll.tsx
// Server component — clean, modern audience section with subtle futuristic accents + SEO (Big Data edition).

type Persona = {
  title: string;
  blurb: string;
  bullets: string[];
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // accent text
    ring: string;    // focus ring
    chip: string;    // chip bg
  };
};

const PERSONAS: Persona[] = [
  {
    title: "Software Engineers & Developers",
    blurb:
      "Transition from app/backend engineering to high-impact Big Data roles building scalable pipelines.",
    bullets: ["Spark • Kafka • Airflow", "CI/CD and code reviews"],
    accent: {
      bar: "bg-teal-500",
      border: "border-teal-200",
      text: "text-teal-700",
      ring: "focus:ring-teal-300",
      chip: "bg-teal-50",
    },
  },
  {
    title: "Data Analysts & ETL Developers",
    blurb:
      "Scale from GB to PB—streaming ingestion, lakehouse modeling, and analytics-ready marts.",
    bullets: ["Delta/ICEBERG tables", "dbt + SQL performance tuning"],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      ring: "focus:ring-sky-300",
      chip: "bg-sky-50",
    },
  },
  {
    title: "IT Professionals & System Admins",
    blurb:
      "Master distributed systems, observability, and security for data platforms on cloud.",
    bullets: ["IAM/RBAC & governance", "Monitoring • cost control"],
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      ring: "focus:ring-violet-300",
      chip: "bg-violet-50",
    },
  },
  {
    title: "Fresh Graduates (B.Tech/MCA)",
    blurb:
      "Launch a Big Data Engineering career with mentor-guided projects and placement support.",
    bullets: ["Beginner-friendly path", "Portfolio + interview prep"],
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      ring: "focus:ring-amber-300",
      chip: "bg-amber-50",
    },
  },
];

export default function WhoShouldEnroll() {
  const seoKeywords =
    "who should enroll big data course, data engineer program audience, spark kafka airflow training, lakehouse delta iceberg, data platform careers, freshers big data engineering, it professionals data engineering";

  // JSON-LD Audience list for richer snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Who Should Enroll — Big Data Engineering Program",
    itemListElement: PERSONAS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Audience",
        audienceType: p.title,
        description: p.blurb,
        keywords:
          "big data audience, software engineers, data analysts, etl developers, sysadmins, fresh graduates",
      },
    })),
  };

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="wse-heading"
      className="relative py-8 md:py-14 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft teal glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="wse-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who Is This <span className="text-DS">Course For</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Whether you’re upskilling or switching careers, this{" "}
            <strong>Big Data Engineering</strong> program turns{" "}
            <strong>Spark</strong>, <strong>Kafka</strong>, <strong>Hadoop</strong>,{" "}
            <strong>Airflow</strong>, and <strong>cloud data platforms</strong> into
            production-ready skills with a recruiter-friendly portfolio.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Who should enroll list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {PERSONAS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <article
                key={p.title}
                role="listitem"
                aria-labelledby={id}
                tabIndex={0}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  "focus:outline-none focus:ring-2",
                  p.accent.ring,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div
                  className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")}
                  aria-hidden
                />

                <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-700">{p.blurb}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")}
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* emphasis row */}
                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}
                  >
                    Beginner-Friendly • Job-Ready
                  </span>
                  <span
                    className={[
                      "text-sm opacity-0 translate-x-1 transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                      p.accent.text,
                    ].join(" ")}
                  >
                    Learn more →
                  </span>
                </div>

                {/* micro-interaction underline */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      p.accent.bar,
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Perfect for <strong>Software Engineers</strong>, <strong>Data Analysts/ETL Developers</strong>,{" "}
            <strong>IT & SysAdmins</strong>, and <strong>Fresh Graduates</strong> targeting{" "}
            <strong>Data Engineer</strong>, <strong>Analytics Engineer</strong>, and{" "}
            <strong>Platform Engineer</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Learning paths adapt by background and pace.</p>
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
