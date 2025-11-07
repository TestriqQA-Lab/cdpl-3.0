// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per module (no repeats). Hover progress visible on all cards.

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
    title: "Advanced Data Processing & Cleaning",
    outcome:
      "Master large-scale data wrangling with Apache Spark, Hadoop (HDFS/YARN), file formats (Parquet/ORC), and optimized ETL.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300", bar: "bg-indigo-600" },
  },
  {
    num: "02",
    title: "Statistical Modeling & Inference",
    outcome:
      "Hypothesis testing, confidence intervals, regression diagnostics, experiment design, and causal insights for business decisions.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
  {
    num: "03",
    title: "Deep Learning & Computer Vision",
    outcome:
      "CNNs, transfer learning, augmentation, fine-tuning, and evaluation for image classification/detection with Keras/PyTorch.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "04",
    title: "NLP & Generative AI",
    outcome:
      "Classical NLP → embeddings → transformer basics, prompt engineering, evaluation, and text generation safety/guardrails.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", bar: "bg-sky-600" },
  },
  {
    num: "05",
    title: "MLOps & AI Deployment",
    outcome:
      "Model packaging, Docker & Kubernetes, API serving, basic monitoring, CI/CD, and cloud deploys on AWS/GCP/Azure.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300", bar: "bg-violet-600" },
  },
  {
    num: "06",
    title: "Capstone & Portfolio Building",
    outcome:
      "Ship enterprise-grade projects with READMEs, reports, demos, and dashboards that recruiters can run and trust.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", bar: "bg-rose-600" },
  },
];

export default function CurriculumSection() {
  const subtitle =
    "An industry-aligned path from scalable data engineering to deep learning, NLP, and production deployments — capped by a portfolio-ready project.";
  const keywords =
    "data science ai curriculum, spark hadoop course, deep learning computer vision, nlp generative ai, mlops docker kubernetes, data science portfolio";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Comprehensive Data Science & AI Curriculum",
    itemListElement: MODULES.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Course", name: m.title, description: m.outcome },
    })),
    numberOfItems: MODULES.length,
    keywords,
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative overflow-hidden py-6 md:py-0 xl:py-4 bg-white">
      {/* Subtle futuristic grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            6-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (no color repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Spark & Hadoop</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">Stat Inference</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Vision (CNNs)</span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">NLP & GenAI</span>
          </div>
        </header>

        {/* Modules grid */}
        <ol
          role="list"
          aria-label="Program modules"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
        >
          {MODULES.map((m) => (
            <li key={m.num} className="min-w-0">
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
                {/* Top accent bar (explicit class names so Tailwind won't purge) */}
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
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">{m.outcome}</p>
                  </div>
                </div>

                {/* Feature chips */}
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

                {/* Bottom progress (fills on hover for ALL cards) */}
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
            aria-label="Download detailed DS & AI syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            aria-label="Apply for the Comprehensive DS & AI program"
          >
            Apply Now
          </Link>
        </div>

        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary slightly by cohort to maximize outcomes.
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
