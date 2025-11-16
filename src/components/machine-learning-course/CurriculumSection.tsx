// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per module (no repeats), minimal/non-distracting visuals.

import Link from "next/link";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Python Programming Fundamentals",
    outcome:
      "History & setup (Jupyter), syntax, variables, data types, operators, input/print, strings, and clean coding foundations.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300" },
  },
  {
    num: "02",
    title: "Control Flow & Core Data Structures",
    outcome:
      "If/elif/else, logical ops, loops; lists, tuples, sets, dictionaries with indexing/slicing, CRUD, and common methods.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300" },
  },
  {
    num: "03",
    title: "Functions, Recursion, File I/O & Modules",
    outcome:
      "Defining/calling functions (args, scope), recursion, exception handling, open/read/write files, stdlib & custom modules.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300" },
  },
  {
    num: "04",
    title: "Object-Oriented Programming in Python",
    outcome:
      "Classes/objects, instance/class vars & methods, inheritance (single/multiple), polymorphism, encapsulation, properties.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300" },
  },
  {
    num: "05",
    title: "NumPy for Scientific Computing",
    outcome:
      "Arrays vs lists, creation (1D/2D/nD), indexing/slicing, reshaping/broadcasting, random, math/linear algebra utilities.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300" },
  },
  {
    num: "06",
    title: "Data Analysis with pandas & EDA",
    outcome:
      "Series/DataFrame, import/export (CSV/Excel/JSON), cleaning (missing/dupes), filter/sort, groupby/merge/pivot, EDA.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300" },
  },
  {
    num: "07",
    title: "Data Visualization with Matplotlib",
    outcome:
      "Figure/Axes, line/bar/pie, hist/box/heatmap/3D, labels/legends/annotations, simple animations & interactive widgets.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300" },
  },
  {
    num: "08",
    title: "Advanced Visualization with Seaborn",
    outcome:
      "Themes/palettes, dist/KDE/rug, pair/joint plots, categorical (strip/box/violin/swarm), heatmaps/clustermaps, FacetGrid.",
    accent: { bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", ring: "focus:ring-fuchsia-300" },
  },
  {
    num: "09",
    title: "Statistics & Probability Essentials",
    outcome:
      "Descriptive stats, hist/box plots, probability rules & Bayes, discrete/continuous distributions (binomial, normal, etc.).",
    accent: { bg: "bg-lime-50", text: "text-lime-900", border: "border-lime-200", ring: "focus:ring-lime-300" },
  },
  {
    num: "10",
    title: "Sampling, Hypothesis Tests & Regression",
    outcome:
      "Sampling & CLT, confidence intervals, z/t/chi-square/ANOVA, correlation (Pearson/Spearman), simple linear regression.",
    accent: { bg: "bg-orange-50", text: "text-orange-900", border: "border-orange-200", ring: "focus:ring-orange-300" },
  },
  {
    num: "11",
    title: "ML Foundations & Data Preprocessing",
    outcome:
      "Supervised vs unsupervised, ML workflow; missing handling, scaling, encoding, train/val/test split; quick model demo.",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300" },
  },
  {
    num: "12",
    title: "Core ML Algorithms & Model Validation",
    outcome:
      "Regression (linear/poly, ridge/lasso); classification (logistic, KNN, trees, RF, SVM); CV, metrics (MSE, R², AUC, F1).",
    accent: { bg: "bg-stone-50", text: "text-stone-900", border: "border-stone-200", ring: "focus:ring-stone-300" },
  },
  // (Optional) Uncomment to expose unsupervised & capstone as separate blocks:
  // {
  //   num: "13",
  //   title: "Unsupervised Learning",
  //   outcome:
  //     "K-Means & hierarchical clustering, PCA for dimensionality reduction, density-based clustering; EDA integration.",
  //   accent: { bg: "bg-yellow-50", text: "text-yellow-900", border: "border-yellow-200", ring: "focus:ring-yellow-300" },
  // },
  // {
  //   num: "14",
  //   title: "Capstone: End-to-End ML Project",
  //   outcome:
  //     "Problem framing → data prep → EDA → modeling → tuning → dashboards/visuals → evaluation → lightweight deploy.",
  //   accent: { bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-200", ring: "focus:ring-purple-300" },
  // },
];

export default function CurriculumSection() {
  const subtitle =
    "Industry-aligned syllabus spanning Python, NumPy/pandas, Matplotlib/Seaborn, Statistics, and Machine Learning with rigorous EDA and validation.";
  const keywords =
    "data science curriculum, Python programming syllabus, pandas course, NumPy training, Matplotlib Seaborn visualization, statistics and probability, sampling and hypothesis testing, linear regression, logistic regression, SVM, KNN, decision trees, random forest, cross-validation, ROC AUC, end-to-end ML project";

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="relative overflow-hidden py-8 md:py-8 bg-white"
    >
      {/* Subtle futuristic frame (thin grid + soft mask; not a heavy gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="curriculum-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            {MODULES.length}-Core <span className="text-DS">Curriculum Modules</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* SEO keywords for crawlers (hidden) */}
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (distinct accents, no repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Live + Guided</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">Project-based</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Interview Prep</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">Portfolio-Ready</span>
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
              >
                {/* Top accent line */}
                <div
                  className={[
                    "absolute left-0 top-0 h-1 w-2/3 rounded-br-2xl",
                    m.accent.text.replace("text-", "bg-"),
                  ].join(" ")}
                  aria-hidden
                />

                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "grid h-10 w-10 place-items-center rounded-xl border text-sm font-extrabold shadow-sm",
                      "bg-white ring-1 ring-black/5",
                      m.accent.text,
                      m.accent.border,
                    ].join(" ")}
                    aria-label={`Module ${m.num}`}
                    title={`Module ${m.num}`}
                  >
                    {m.num}
                  </div>
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
                  <span
                    className={[
                      "rounded-md px-2.5 py-1 text-[11px] font-semibold  ring-1 ring-black/5",
                      m.accent.text.replace("text-", "bg-"),
                      "text-slate-900",
                    ].join(" ")}
                  >
                    Mentor Tips
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download detailed curriculum syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Apply for the ML & Data Science program"
          >
            Apply Now
          </Link>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary slightly based on cohort needs and instructor discretion.
        </p>
      </div>

    </section>
  );
}
