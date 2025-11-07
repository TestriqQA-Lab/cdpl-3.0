// components/sections/ProjectsSection.tsx
// Server component — clean, modern, responsive projects with subtle futuristic accents (Big Data edition).

import React from "react";
import {
    Activity,
    Database,
    RadioTower,
    CloudCog,
    Layers,
    ShieldCheck,
} from "lucide-react";

// Safer Icon type to avoid TS overload issues with className on icons
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Project = {
    title: string;
    desc: string;
    outcomes: string[];
    stack: string[];
    accent: {
        bar: string;     // top bar color
        border: string;  // border color
        text: string;    // accent text color
        chip: string;    // chip bg
        ring: string;    // focus ring
    };
    icon: IconType;
};

const PROJECTS: Project[] = [
    {
        title: "Real-Time Fraud Detection",
        desc:
            "Detect anomalous transactions at scale with streaming ingestion, fast features, and low-latency scoring.",
        outcomes: ["Kafka topics & partitions", "Spark Structured Streaming", "Windowing & stateful ops"],
        stack: ["Kafka", "Spark", "Scala/PySpark", "Redis"],
        accent: { bar: "bg-teal-500", border: "border-teal-200", text: "text-teal-700", chip: "bg-teal-50", ring: "focus:ring-teal-300" },
        icon: Activity,
    },
    {
        title: "E-Commerce Data Lake",
        desc:
            "Design a lakehouse with ACID tables, schema evolution, and query engines for BI & ML consumers.",
        outcomes: ["Medallion (Bronze/Silver/Gold)", "Delta/ICEBERG tables", "Optimize & Z-Order"],
        stack: ["S3", "Glue", "Athena", "Delta Lake"],
        accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
        icon: Layers,
    },
    {
        title: "IoT Sensor Analytics",
        desc:
            "Ingest 1M+ device events/day and power operational dashboards & alerts with cost-aware design.",
        outcomes: ["Kinesis streams & shards", "EMR/Hive warehousing", "Time-series compaction"],
        stack: ["Kinesis", "EMR", "Hive", "Parquet"],
        accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
        icon: RadioTower,
    },
    {
        title: "Batch ETL with Airflow",
        desc:
            "Build resilient DAGs with retries, SLAs, data quality checks, and lineage for auditability.",
        outcomes: ["Idempotent tasks", "Great Expectations checks", "Backfills & catchup"],
        stack: ["Airflow", "dbt", "PostgreSQL", "Great Expectations"],
        accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
        icon: CloudCog,
    },
    {
        title: "Warehouse & Marts",
        desc:
            "Model a star/snowflake warehouse and deliver fast marts for BI, finance, and growth teams.",
        outcomes: ["Dimensional modeling", "RLS & governance", "Query tuning"],
        stack: ["BigQuery/Snowflake", "SQL", "DAX/LookML"],
        accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
        icon: Database as IconType,
    },
    {
        title: "Privacy & Compliance Pipeline",
        desc:
            "Implement PII detection, tokenization, and access controls to meet GDPR/DPDP compliance.",
        outcomes: ["Field-level masking", "Token vault patterns", "Access audits & logs"],
        stack: ["LakeFS", "Ranger/IAM", "KMS", "Athena/Presto"],
        accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
        icon: ShieldCheck,
    },
];

export default function ProjectsSection() {
    const seoKeywords =
        "big data engineering projects, kafka spark streaming project, data lake delta lakehouse, kinesis emr hive analytics, airflow etl dbt pipeline, snowflake bigquery warehouse, data governance privacy compliance";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Big Data Engineering — Projects You’ll Build",
        itemListElement: PROJECTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "CreativeWork",
                name: p.title,
                description: p.desc,
                keywords:
                    "big data, streaming, lakehouse, etl, airflow, warehouse, governance, compliance",
            },
        })),
    };

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative py-8 md:py-14 bg-white"
        >
            {/* Subtle futuristic backdrop (fine grid + soft teal glow; no loud gradients) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.10),transparent_60%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-3xl text-center">
                    <h2
                        id="projects-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
                    >
                        Real-World{" "}
                        <span className="text-DS">
                            Big Data Projects
                        </span>
                    </h2>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
                        Build <strong>production-grade pipelines</strong> used by top enterprises. Practice{" "}
                        <strong>streaming, lakehouse, ETL,</strong> and <strong>governance</strong> with battle-tested
                        tools and patterns.
                    </p>
                    {/* SEO helper (visually hidden) */}
                    <p className="sr-only">{seoKeywords}</p>
                </header>

                {/* Cards */}
                <div
                    role="list"
                    aria-label="Project list"
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                >
                    {PROJECTS.map((p) => {
                        const Icon = p.icon as IconType;
                        const id = p.title.replace(/\s+/g, "-").toLowerCase();
                        return (
                            <article
                                key={p.title}
                                role="listitem"
                                tabIndex={0}
                                aria-labelledby={id}
                                className={[
                                    "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                                    "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                                    p.accent.border,
                                    p.accent.ring,
                                    "focus:outline-none focus:ring-2",
                                ].join(" ")}
                            >
                                {/* top accent bar */}
                                <div
                                    className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")}
                                    aria-hidden
                                />

                                <div className="flex items-start gap-3">
                                    <div
                                        className={["rounded-xl p-2 shrink-0 border", p.accent.border, p.accent.text].join(" ")}
                                        aria-hidden
                                    >
                                        <Icon className="w-6 h-6" strokeWidth={2} />
                                    </div>
                                    <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                                        <span className={p.accent.text}># </span>
                                        {p.title}
                                    </h3>
                                </div>

                                <p className="mt-3 text-sm md:text-base text-slate-700">{p.desc}</p>

                                {/* outcomes */}
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {p.outcomes.map((o, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span
                                                className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")}
                                                aria-hidden
                                            />
                                            <span>{o}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* stack chips */}
                                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and technologies">
                                    {p.stack.map((t) => (
                                        <span
                                            key={t}
                                            className={[
                                                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-slate-800 border",
                                                p.accent.chip,
                                                p.accent.border,
                                            ].join(" ")}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* micro interaction footer */}
                                <div className="mt-6 flex items-center justify-between">
                                    <span
                                        className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}
                                    >
                                        Portfolio-Ready • Production-Minded
                                    </span>
                                    <span
                                        className={[
                                            "text-sm opacity-0 translate-x-1 transition-all duration-200",
                                            "group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                                            p.accent.text,
                                        ].join(" ")}
                                    >
                                        View details →
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Trust strip */}
                <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                    <p className="text-sm text-slate-700">
                        These <strong>industry-aligned projects</strong> emphasize scalability, governance, and real
                        SLAs—ideal for <strong>Data Engineer</strong>, <strong>Analytics Engineer</strong>, and{" "}
                        <strong>Platform Engineer</strong> roles.
                    </p>
                    <p className="mt-2 text-[11px] text-slate-500">*Scope may vary by dataset, domain, and pace.</p>
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
