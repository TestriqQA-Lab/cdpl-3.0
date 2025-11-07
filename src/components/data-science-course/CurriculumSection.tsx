// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per module (no repeats). Explicit top-bar classes so Tailwind keeps them.

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
    title: "Data Science Fundamentals",
    outcome:
      "Master data wrangling with Pandas, exploratory data analysis, visualization (Matplotlib/Seaborn), and basics of ML.",
    accent: { bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-200", ring: "focus:ring-purple-300", bar: "bg-purple-600" },
  },
  {
    num: "02",
    title: "Advanced Machine Learning",
    outcome:
      "Build and optimize models using regularization, feature engineering, ensembles (RF, GBM, XGBoost), and hyperparameter tuning.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", bar: "bg-sky-600" },
  },
  {
    num: "03",
    title: "Deep Learning & Neural Networks",
    outcome:
      "Train CNNs/RNNs/Transformers fundamentals for images and text; use Keras/PyTorch with callbacks, checkpoints, and metrics.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
  {
    num: "04",
    title: "NLP & Time Series",
    outcome:
      "Tokenization, embeddings, classical NLP, sequence models, ARIMA/Prophet/ETS, feature lags/rolling stats, and forecasting.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "05",
    title: "Big Data & Cloud Deployment",
    outcome:
      "Parallel data processing with Spark, data lakes/warehouses, and deployments to AWS/GCP (API, serverless, containers).",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300", bar: "bg-violet-600" },
  },
  {
    num: "06",
    title: "MLOps & Capstone Project",
    outcome:
      "CI/CD for ML, model packaging, tracking, evaluation, monitoring; ship a portfolio-grade capstone with docs & demo.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", bar: "bg-rose-600" },
  },
];

export default function CurriculumSection() {
  const subtitle =
    "An industry-aligned pathway from core data science to deep learning, big data, cloud deployments, and MLOps — ending with a portfolio-ready capstone.";
  const keywords =
    "advanced data science curriculum, machine learning syllabus, deep learning course modules, NLP time series, big data spark, mlops deployment, data science in India";

  // JSON-LD (ItemList) for modules
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Advanced Data Science & Machine Learning Curriculum",
    itemListElement: MODULES.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: { "@type": "Course", name: m.title, description: m.outcome },
    })),
    numberOfItems: MODULES.length,
    keywords,
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative overflow-hidden py-4 md:py-0 bg-white">
      {/* Subtle futuristic backdrop (light grid + soft mask) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            6-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* SEO helper for crawlers */}
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (no repeated colors) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-purple-900">Statistics & EDA</span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Ensembles & Tuning</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">DL Essentials</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">NLP & Forecasting</span>
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
                {/* Top accent bar (explicit to avoid purging) */}
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
            aria-label="Download the detailed Advanced Data Science & ML syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Apply for the Advanced Data Science & Machine Learning program"
          >
            Apply Now
          </Link>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary slightly by cohort and instructor discretion to maximize learning outcomes.
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
