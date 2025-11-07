// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per module (no repeats). Explicit top-bar classes (no dynamic Tailwind).

import Link from "next/link";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string; bar: string };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Big Data Fundamentals & Hadoop Ecosystem",
    outcome:
      "Master HDFS architecture, MapReduce paradigms, YARN scheduling, and Hive for warehousing with partitions & bucketing.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300", bar: "bg-teal-600" },
  },
  {
    num: "02",
    title: "Real-Time & Batch with Apache Spark",
    outcome:
      "Build streaming & batch pipelines using Spark Core/SQL, DataFrames, structured streaming, and MLlib with performance tuning.",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300", bar: "bg-cyan-600" },
  },
  {
    num: "03",
    title: "Data Ingestion & Messaging with Kafka",
    outcome:
      "Design fault-tolerant, high-throughput pipelines: topics, partitions, schema registry, exactly-once semantics, and connectors.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "04",
    title: "Cloud Big Data — AWS • GCP • Azure",
    outcome:
      "Deploy EMR, Databricks, Dataflow, and Synapse; storage layers (S3/GCS/ADLS), IAM, autoscaling, and cost-efficient jobs.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300", bar: "bg-violet-600" },
  },
  {
    num: "05",
    title: "Data Lakes, Warehousing & Orchestration",
    outcome:
      "Implement Delta Lake & lakehouse patterns, dimensional modeling, Airflow DAGs, CI/CD, lineage & observability basics.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
];

export default function CurriculumSection() {

  const subtitle =
    "An industry-aligned Big Data Engineering pathway from Hadoop & Spark to Kafka, cloud platforms, lakehouse architecture, and orchestration.";
  const keywords =
    "big data engineering curriculum, Hadoop Spark Kafka course, Databricks EMR Dataflow Synapse, Delta Lake lakehouse, Airflow orchestration, data engineer syllabus";

  // JSON-LD (ItemList) for modules
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Big Data Engineering Curriculum",
    itemListElement: MODULES.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: { "@type": "Course", name: m.title, description: m.outcome },
    })),
    numberOfItems: MODULES.length,
    keywords,
  };

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="relative overflow-hidden py-4 md:py-8 bg-white"
    >
      {/* Subtle futuristic backdrop (thin grid + soft mask; minimal, non-distracting) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            5-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* Hidden SEO keywords */}
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (distinct accents, no repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-teal-900">Hadoop • Hive • HDFS</span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-900">Spark SQL/Streaming</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Kafka Pipelines</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-900">Lakehouse & Airflow</span>
          </div>
        </header>

        {/* Modules grid */}
        <ol
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
          aria-label="Program modules"
        >
          {MODULES.map((m) => (
            <li key={m.num} className="relative">
              <article
                tabIndex={0}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 md:p-6 shadow-sm backdrop-blur transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  m.accent.bg,
                  m.accent.border,
                  m.accent.ring,
                ].join(" ")}
                aria-label={`${m.num} — ${m.title}`}
                title={m.title}
              >
                {/* Top accent bar (explicit class so Tailwind keeps it) */}
                <div className={["absolute left-0 top-0 h-1.5 w-full", m.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  {/* Number badge */}
                  <div
                    className={[
                      "grid h-10 w-10 place-items-center rounded-xl border text-sm font-extrabold shadow-sm bg-white ring-1 ring-black/5",
                      m.accent.text,
                      m.accent.border,
                    ].join(" ")}
                    aria-label={`Module ${m.num}`}
                  >
                    {m.num}
                  </div>

                  {/* Text block */}
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">
                      {m.outcome}
                    </p>
                  </div>
                </div>

                {/* Footer chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Hands-On Lab
                  </span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Best Practices
                  </span>
                  <span className={["rounded-md px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-black/5", m.accent.bar].join(" ")}>
                    Mentor Tips
                  </span>
                </div>

                {/* Bottom progress hint (fills on hover) */}
                <div className="mt-4 h-1 w-full rounded-full bg-white/80" aria-hidden>
                  <div
                    className={[
                      "h-1 w-0 rounded-full transition-[width] duration-500 ease-out group-hover:w-4/5",
                      m.accent.bar,
                    ].join(" ")}
                  />
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download the detailed Big Data Engineering syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-teal-200"
            aria-label="Apply for the Big Data Engineering program"
          >
            Apply Now
          </Link>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary slightly based on cohort needs and instructor discretion.
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
