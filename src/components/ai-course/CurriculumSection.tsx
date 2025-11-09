// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Updated with detailed curriculum extracted from the provided PDF (MySQL, Excel, Power BI, Tableau, Python, Stats,
// ML with Python, R, Deep Learning/NLP/GenAI, Prompt Engineering, and Capstone/Projects).
// Unique accent colors per module (no repeats). Hover progress visible on all cards.

import Link from "next/link";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string; bar: string };
};

// === Canonical curriculum extracted from the PDF ===
// Page refs (for internal mapping):
// - MySQL DBMS (pp. 15–18)
// - Advanced Excel (pp. 19–23)
// - Power BI (pp. 24–27)
// - Tableau (pp. 33–36)
// - Python Programming (pp. 37–40)
// - Data Visualization in Python: pandas/matplotlib/seaborn + NumPy (pp. 28–32)
// - Statistics & Probability (pp. 41–43)
// - ML Algorithms with Python (pp. 44–45)
// - Machine Learning & Data Viz with R (p. 46)
// - Deep Learning, NLP & Generative AI (pp. 47–48)
// - Prompt Engineering with Gen AI (pp. 49–50)
// - Real-time Projects & Capstone (pp. 51–52)

const MODULES: Module[] = [
  {
    num: "01",
    title: "DBMS using MySQL",
    outcome:
      "ER modeling, normalization (1NF–BCNF), SQL (joins, subqueries, windows), indexing & EXPLAIN, backup/restore, DDL/DML/TCL/DCL, views, procs, triggers, CTEs, and a capstone database design.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300", bar: "bg-indigo-600" },
  },
  {
    num: "02",
    title: "Advanced Excel for Analytics & Viz",
    outcome:
      "Data types/cleaning, formulas (IF/XLOOKUP), conditional formatting, PivotTables/Charts, ToolPak stats, forecasting, Power Query, interactive dashboards, and hands-on projects.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
  {
    num: "03",
    title: "Power BI (Data Analytics & Visualization)",
    outcome:
      "Power Query transforms, schema modeling (star/snowflake), DAX measures, core & advanced visuals, drill/focus interactivity, dashboards, publishing, and end-to-end projects.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "04",
    title: "Tableau (Analytics & Storytelling)",
    outcome:
      "Data integration (joins/unions/relationships), logical vs physical layers, dimensions/measures, specialized/geospatial charts, table calcs, parameters/sets, dashboards & stories.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", bar: "bg-sky-600" },
  },
  {
    num: "05",
    title: "Core Python Programming",
    outcome:
      "Syntax, data structures (lists/tuples/sets/dicts), control flow, functions & recursion, file I/O, OOP (inheritance/encapsulation), modules/packages, and Jupyter workflows.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300", bar: "bg-violet-600" },
  },
  {
    num: "06",
    title: "Python Data Viz (pandas, Matplotlib, Seaborn) + NumPy",
    outcome:
      "EDA/cleaning with pandas, plot customization & annotations, interactive/animated plots, seaborn statistical & categorical charts, heatmaps/grids, and NumPy arrays/broadcasting.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", bar: "bg-rose-600" },
  },
  {
    num: "07",
    title: "Statistics & Probability",
    outcome:
      "Descriptive stats, probability & Bayes, discrete/continuous distributions, sampling & CLT, hypothesis tests (z/t/χ²/ANOVA), correlation/regression, and ML-centric metrics.",
    accent: { bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-200", ring: "focus:ring-orange-300", bar: "bg-orange-600" },
  },
  {
    num: "08",
    title: "ML with Python",
    outcome:
      "Preprocessing (imputation/encoding/scaling), regression & regularization, classifiers (LR/KNN/DT/RF/SVM), model validation (CV, metrics, ROC-AUC), PCA & clustering, and a capstone.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300", bar: "bg-teal-600" },
  },
  {
    num: "09",
    title: "Machine Learning & Data Viz with R",
    outcome:
      "RStudio workflow, vectors/lists/factors/matrices/DFs, CSV/Excel I/O, ggplot2 visuals, and ML projects using lm() and glm().",
    accent: { bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", ring: "focus:ring-fuchsia-300", bar: "bg-fuchsia-600" },
  },
  {
    num: "10",
    title: "Deep Learning, NLP & Generative AI",
    outcome:
      "ANN/CNN essentials, RNN/LSTM/autoencoders, NLP with NLTK/spaCy & TensorFlow, OCR basics, and GenAI tooling across text, image (LIM), video, and speech.",
    accent: { bg: "bg-lime-50", text: "text-lime-900", border: "border-lime-200", ring: "focus:ring-lime-300", bar: "bg-lime-600" },
  },
  {
    num: "11",
    title: "Prompt Engineering with Gen AI",
    outcome:
      "AI foundations & ML ecosystem, GenAI basics & technicals (GANs, transfer learning), LLM evolution, computer vision tie-ins, hands-on prompting patterns, and responsible AI.",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300", bar: "bg-cyan-600" },
  },
  {
    num: "12",
    title: "Real-Time Projects & Capstone Portfolio",
    outcome:
      "Domain projects: credit risk, customer segmentation, sales forecasting, fraud detection, hospital resource forecasting, and HR attrition analytics—plus portfolio-ready deliverables.",
    accent: { bg: "bg-stone-50", text: "text-stone-900", border: "border-stone-200", ring: "focus:ring-stone-300", bar: "bg-stone-600" },
  },
];

export default function CurriculumSection() {
  const subtitle =
    "An industry-aligned path spanning SQL & BI to Python, Statistics, ML, R, and modern GenAI—with real projects that recruiters can run and trust.";
  const keywords =
    "MySQL DBMS course, Advanced Excel analytics, Power BI training, Tableau storytelling, Python programming, pandas matplotlib seaborn, NumPy, statistics and probability, machine learning with Python, R ggplot2 lm glm, deep learning NLP generative AI, prompt engineering, data science capstone projects";

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
            {MODULES.length}-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (no color repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-6">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">MySQL & SQL</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">Advanced Excel</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Power BI</span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Tableau</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-900">Python</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">Stats & ML</span>
          </div>
        </header>

        {/* Modules grid */}
        <ol role="list" aria-label="Program modules" className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
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
                  <div className={["h-1 w-0 rounded-full transition-[width] duration-500 ease-out group-hover:w-4/5", m.accent.bar].join(" ")} />
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
