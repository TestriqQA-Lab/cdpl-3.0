// components/sections/ToolsSection.tsx
// Server component — icon cards with subtle futuristic accents + SEO (DS/ML edition).

import type React from "react";
import {
  Code2,
  Brain,
  FunctionSquare,
  Table2,
  Boxes,
  Workflow,
  BarChart3,
  LineChart,
  Sigma,
  Database,
  Cloud,
  Rocket,
} from "lucide-react";

// Safe Icon type so className/size pass cleanly in TS:
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Tool = {
  name: string;
  tier: "Core" | "ML" | "Data" | "Cloud";
  blurb: string;
  icon: IconType;
  accent: {
    bar: string;     // top bar color
    border: string;  // border color
    text: string;    // accent text color
    chip: string;    // chip bg
    ring: string;    // focus ring
  };
};

const TOOLS: Tool[] = [
  // Core
  {
    name: "Python",
    tier: "Core",
    blurb: "Scripting, data wrangling, and model glue.",
    icon: Code2,
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
  },
  {
    name: "NumPy",
    tier: "Core",
    blurb: "ND arrays, vectorized compute, linear algebra.",
    icon: Sigma,
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },

  // Data
  {
    name: "Pandas",
    tier: "Data",
    blurb: "Tabular analytics, joins, groupbys, I/O.",
    icon: Table2,
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    name: "SQL",
    tier: "Data",
    blurb: "Warehouse queries & data modeling.",
    icon: Database,
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
  {
    name: "Apache Spark",
    tier: "Data",
    blurb: "Distributed compute for large datasets.",
    icon: Boxes,
    accent: { bar: "bg-orange-500", border: "border-orange-200", text: "text-orange-700", chip: "bg-orange-50", ring: "focus:ring-orange-300" },
  },
  {
    name: "Airflow",
    tier: "Data",
    blurb: "Orchestrate reliable ETL/ELT pipelines.",
    icon: Workflow,
    accent: { bar: "bg-teal-500", border: "border-teal-200", text: "text-teal-700", chip: "bg-teal-50", ring: "focus:ring-teal-300" },
  },

  // ML
  {
    name: "scikit-learn",
    tier: "ML",
    blurb: "Classical ML, metrics, pipelines.",
    icon: FunctionSquare,
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    name: "PyTorch",
    tier: "ML",
    blurb: "Deep learning & fine-tuning.",
    icon: Brain,
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
  {
    name: "TensorFlow",
    tier: "ML",
    blurb: "DL production & TF-Serving.",
    icon: LineChart,
    accent: { bar: "bg-fuchsia-500", border: "border-fuchsia-200", text: "text-fuchsia-700", chip: "bg-fuchsia-50", ring: "focus:ring-fuchsia-300" },
  },

  // Viz / Ops / Cloud
  {
    name: "Matplotlib/Seaborn",
    tier: "Data",
    blurb: "Visual analytics & reports.",
    icon: BarChart3,
    accent: { bar: "bg-lime-500", border: "border-lime-200", text: "text-lime-700", chip: "bg-lime-50", ring: "focus:ring-lime-300" },
  },
  {
    name: "AWS",
    tier: "Cloud",
    blurb: "S3 • EC2 • Lambda • SageMaker.",
    icon: Cloud,
    accent: { bar: "bg-stone-500", border: "border-stone-200", text: "text-stone-700", chip: "bg-stone-50", ring: "focus:ring-stone-300" },
  },
  {
    name: "MLOps",
    tier: "Cloud",
    blurb: "Versioning, CI/CD, and deploy.",
    icon: Rocket,
    accent: { bar: "bg-cyan-500", border: "border-cyan-200", text: "text-cyan-700", chip: "bg-cyan-50", ring: "focus:ring-cyan-300" },
  },
];

export default function ToolsSection() {
  const seoKeywords =
    "data science tools with icons, machine learning stack icons, python numpy pandas scikit-learn icons, pytorch tensorflow icons, spark airflow sql, aws cloud mlops, data visualization matplotlib seaborn";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tools & Technologies — You’ll Master",
    itemListElement: TOOLS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: t.name,
        applicationCategory: t.tier,
        operatingSystem: "Cross-platform",
        description: t.blurb,
      },
    })),
  };

  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative py-6 md:py-10 bg-white">
      {/* Subtle futuristic backdrop (fine grid + soft violet glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(167,139,250,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            The industry-trusted stack for <strong>Data Science</strong>, <strong>Machine Learning</strong>, and{" "}
            <strong>Data Engineering</strong>. Learn by building, shipping, and iterating.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Icon cards grid */}
        <div
          role="list"
          aria-label="Tools and technologies list"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {TOOLS.map((t) => {
            const Icon = t.icon as IconType;
            const id = t.name.replace(/\s+|\/+/g, "-").toLowerCase();
            return (
              <article
                key={t.name}
                role="listitem"
                aria-labelledby={id}
                tabIndex={0}
                className={[
                  "group relative rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  t.accent.border,
                  "focus:outline-none focus:ring-2",
                  t.accent.ring,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", t.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "rounded-xl p-2 shrink-0 border",
                      t.accent.border,
                      t.accent.text,
                      t.accent.chip,
                    ].join(" ")}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 id={id} className="text-base md:text-lg font-bold text-slate-900">
                      <span className={t.accent.text}># </span>
                      {t.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">{t.blurb}</p>
                    <span
                      className={[
                        "mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                        t.accent.border,
                        t.accent.chip,
                        "text-slate-700",
                      ].join(" ")}
                    >
                      {t.tier}
                    </span>
                  </div>
                </div>

                {/* micro-interaction underline */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      t.accent.bar,
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <aside className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Practice with <strong>real datasets</strong>, version control, reviews, and deploy checklists—
            the exact toolchain hiring managers expect.
          </p>
        </aside>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
