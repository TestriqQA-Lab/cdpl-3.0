// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Modules extracted from the official PDF; explicit top-bar classes so Tailwind keeps them.

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
    title: "DBMS with MySQL",
    outcome:
      "ER modeling, normalization (1NF–BCNF), SQL essentials (SELECT/WHERE/LIMIT), joins & subqueries, aggregations & window functions, transactions, indexing & EXPLAIN, admin (users/backup/tuning), DDL/DML/TCL/DCL, views, procedures, functions, triggers, CTEs, and a database capstone.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", bar: "bg-sky-600" },
  },
  {
    num: "02",
    title: "Advanced Excel for Analytics & Viz",
    outcome:
      "Data types & cleaning, duplicates/nulls, math/stat/logical/text functions, validation & conditional formats, date/time ops, charts & sparklines, PivotTables/Charts with slicers & timelines, Analysis ToolPak, forecasting, lookup (V/H/XLOOKUP, INDEX/MATCH), Power Query/Power Pivot, KPI dashboards & storytelling, domain projects.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "03",
    title: "Power BI — Data Analytics & Visualization",
    outcome:
      "BI concepts, Desktop/Service/Mobile, data connections, Power Query transforms (merge/append, pivot/unpivot, type ops, conditional cols), modeling (star/snowflake, relationships, cardinality), visuals & formatting, DAX basics (measures/columns), advanced visuals & interactivity, bookmarks/navigation, publishing & sharing, end-to-end case studies.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300", bar: "bg-indigo-600" },
  },
  {
    num: "04",
    title: "Tableau — Data Analytics & Storytelling",
    outcome:
      "BI workflow, data integration (relationships, joins, unions), logical vs physical layers, dimensions/measures, core charts, Marks card polish, specialized charts (treemap/heatmap/gantt/bullet), maps & density, dual-axis, groups/sorts/filters, calculated fields & table calcs, analytics (trend/forecast/cluster), dashboards & stories, projects & assessment.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", bar: "bg-rose-600" },
  },
  {
    num: "05",
    title: "Python Programming",
    outcome:
      "Jupyter setup, variables/types/ops, I/O & strings, conditionals, core data structures (lists/tuples/sets/dicts), loops, functions & recursion, exceptions, file I/O, OOP (classes, inheritance, polymorphism, encapsulation), modules & packages — foundations for data work.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
  {
    num: "06",
    title: "Statistics & Probability for Data Science",
    outcome:
      "Descriptive stats (central tendency, spread, skew/kurtosis, boxplots), probability & Bayes, discrete/continuous distributions (Bernoulli, Binomial, Poisson, Normal, Uniform, Exponential), sampling & CLT, confidence intervals, hypothesis testing (z/t/ANOVA/chi-square), correlation & regression basics, ML-centric stats & evaluation metrics.",
    accent: { bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-200", ring: "focus:ring-purple-300", bar: "bg-purple-600" },
  },
  {
    num: "07",
    title: "Machine Learning Algorithms with Python",
    outcome:
      "End-to-end ML workflow: preprocessing (missing data, scaling, encoding, splits), regression (linear, polynomial, ridge/lasso), classification (logistic, KNN, decision trees, random forest, SVM), model validation (k-fold, stratified, over/underfitting), metrics (MSE/R², accuracy/precision/recall/F1/ROC-AUC), PCA & clustering (k-means, hierarchical, DB-based), hyperparameter tuning.",
    accent: { bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", ring: "focus:ring-fuchsia-300", bar: "bg-fuchsia-600" },
  },
  {
    num: "08",
    title: "R Programming — Viz, Stats & ML",
    outcome:
      "RStudio workflow; core objects (vectors, lists, factors, matrices, arrays, data frames); reading CSV/Excel; visualization (base & ggplot2); stats (mean/median/mode, quartiles); mini projects: lm() linear regression & glm() logistic regression for practical modeling.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300", bar: "bg-teal-600" },
  },
  {
    num: "09",
    title: "Real-World Projects & Capstone",
    outcome:
      "Domain case studies and capstones: credit-risk modeling (BFSI), customer segmentation (e-commerce), sales forecasting (retail), fraud detection (fintech), hospital resource forecasting (healthcare), HR attrition analytics. Story-driven dashboards and production-style model delivery.",
    accent: { bg: "bg-slate-50", text: "text-slate-900", border: "border-slate-200", ring: "focus:ring-slate-300", bar: "bg-slate-700" },
  },
];

export default function CurriculumSection() {
  const subtitle =
    "A 200+ hour, industry-aligned journey from SQL and Excel to BI (Power BI/Tableau), Python foundations, Statistics, ML with Python, R, and domain projects.";
  const keywords =
    "advanced data science curriculum, MySQL DBMS, Excel analytics, Power BI, Tableau, Python syllabus, statistics probability, machine learning with Python, R programming projects, capstone data science";


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
            {MODULES.length}-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* SEO helper for crawlers */}
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (distinct themes) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">SQL & Data Modeling</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Excel & Dashboards</span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Power BI & Tableau</span>
            <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-purple-900">Stats & ML in Python/R</span>
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
                    className={["h-1 w-0 rounded-full transition-[width] duration-500 ease-out group-hover:w-4/5", m.accent.bar].join(" ")}
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
            aria-label="Download the detailed Advanced Data Science & Machine Learning syllabus"
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

    </section>
  );
}
