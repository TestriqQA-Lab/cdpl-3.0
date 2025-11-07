// components/sections/WhyProgramName.tsx
"use client";

import { useMemo } from "react";
import {
    Server,
    Activity,
    Database,
    Gauge,
    ShieldCheck,
    Boxes,
    Cloud,
    Workflow,
    LineChart,
    Rocket,
} from "lucide-react";
import Link from "next/link";

export default function WhyDataProgram() {
    // SEO: Course schema
    const courseJsonLd = useMemo(
        () =>
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Course",
                name: "Big Data Engineering — Scalable Data Infrastructure",
                description:
                    "Hands-on Big Data Engineering program covering Kafka, Spark, Hadoop, data lakes/warehouses, streaming pipelines, orchestration, and cloud deployments (AWS/GCP/Azure). Build fault-tolerant, high-performance data platforms.",
                provider: {
                    "@type": "Organization",
                    name: "Cinute Digital Pvt. Ltd.",
                    sameAs: "https://example.com",
                },
                educationalCredentialAwarded: "Certificate of Completion",
                timeRequired: "PT95H",
                inLanguage: "en",
                keywords: [
                    "big data engineering course",
                    "spark kafka hadoop training",
                    "data lake data warehouse",
                    "stream processing",
                    "airflow orchestration",
                    "cloud data engineer",
                    "etl pipelines",
                    "batch and real-time analytics",
                ],
            }),
        []
    );

    const featureChips = [
        { label: "95 Hours", color: "bg-indigo-600 text-white" },
        { label: "Real-Time Pipelines", color: "bg-emerald-600 text-white" },
        { label: "Cloud & On-Prem", color: "bg-amber-500 text-gray-900" },
        { label: "Expert Mentors", color: "bg-sky-600 text-white" },
        { label: "100% Job-Ready", color: "bg-rose-600 text-white" },
    ];

    const outcomes = [
        {
            icon: Activity,
            iconColor: "text-violet-700",
            iconBg: "bg-violet-50",
            border: "border-violet-200",
            title: "Stream Processing (Kafka)",
            text:
                "Design event-driven architectures, build producers/consumers, and process streams with Kafka + Kafka Connect + Schema Registry.",
        },
        {
            icon: Server,
            iconColor: "text-emerald-700",
            iconBg: "bg-emerald-50",
            border: "border-emerald-200",
            title: "Distributed Compute (Spark)",
            text:
                "Batch & streaming with Spark: DataFrame APIs, Spark SQL, tuning, partitioning, checkpoints, and fault tolerance.",
        },
        {
            icon: Database,
            iconColor: "text-amber-700",
            iconBg: "bg-amber-50",
            border: "border-amber-200",
            title: "Data Lakes & Warehouses",
            text:
                "Build medallion layouts, work with Parquet/Delta/Iceberg, and serve BI/ML from curated layers.",
        },
        {
            icon: Workflow,
            iconColor: "text-sky-700",
            iconBg: "bg-sky-50",
            border: "border-sky-200",
            title: "Orchestration & ELT",
            text:
                "Schedule pipelines with Airflow, transform with dbt, add data quality checks and lineage.",
        },
        {
            icon: ShieldCheck,
            iconColor: "text-lime-700",
            iconBg: "bg-lime-50",
            border: "border-lime-200",
            title: "Governance & Security",
            text:
                "Implement access controls, PII masking, audit trails, and compliance-ready logging at scale.",
        },
        {
            icon: Gauge,
            iconColor: "text-rose-700",
            iconBg: "bg-rose-50",
            border: "border-rose-200",
            title: "Performance & Cost",
            text:
                "Optimize storage/compute, right-size clusters, cache smartly, and monitor SLAs & costs.",
        },
    ];

    const bullets = [
        {
            icon: Boxes,
            color: "text-indigo-700",
            bg: "bg-indigo-50",
            text: "End-to-end data lifecycle: ingestion → storage → processing → serving.",
        },
        {
            icon: Cloud,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
            text: "Cloud-ready: AWS, GCP, Azure patterns for production deployments.",
        },
        {
            icon: LineChart,
            color: "text-amber-700",
            bg: "bg-amber-50",
            text: "Business outcomes: real-time dashboards, ML features, and reliable SLAs.",
        },
    ];

    return (
        <section
            className="relative py-14 md:py-10 bg-white"
            aria-labelledby="why-bigdata-heading"
        >
            {/* Subtle futuristic accent line (sleek gradient only) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-10 md:mb-12">
                    <h1
                        id="why-bigdata-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
                    >
                        Big Data Engineering:{" "}
                        <span className="text-DS">The Future of Data Infrastructure</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Build <strong>scalable, real-time data pipelines</strong> and
                        <strong> fault-tolerant architectures</strong> with{" "}
                        <strong>Kafka, Spark, Hadoop</strong> and modern cloud platforms. Become the
                        <strong> Data Engineer</strong> companies trust for petabyte-scale systems.
                    </p>
                </header>

                {/* Feature chips (distinct colors, no repetition) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto mb-10 md:mb-12">
                    {featureChips.map((c) => (
                        <div
                            key={c.label}
                            className={`rounded-xl px-4 py-3 text-center text-sm font-semibold shadow-sm ${c.color}`}
                        >
                            {c.label}
                        </div>
                    ))}
                </div>

                {/* Outcomes grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {outcomes.map((o) => (
                        <article
                            key={o.title}
                            className={`rounded-2xl border ${o.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`p-2.5 rounded-xl ${o.iconBg} ring-1 ring-black/5`} aria-hidden="true">
                                    <o.icon className={`w-6 h-6 ${o.iconColor}`} strokeWidth={2.2} />
                                </span>
                                <h3 className="text-lg font-bold text-gray-900">{o.title}</h3>
                            </div>
                            <p className="mt-3 text-gray-700 leading-relaxed">{o.text}</p>
                        </article>
                    ))}
                </div>

                {/* Program summary */}
                <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6 items-start">
                    <article className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900">What you’ll build</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            A production-grade platform spanning <strong>event ingestion</strong>,{" "}
                            <strong>stream/batch processing</strong>, and <strong>serving layers</strong>. You’ll
                            implement CDC/ETL, medallion lakehouses, and low-latency endpoints to power BI and ML.
                        </p>
                        <ul className="mt-5 space-y-3">
                            {bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className={`mt-0.5 p-1.5 rounded-md ${b.bg} ring-1 ring-black/5`} aria-hidden="true">
                                        <b.icon className={`w-5 h-5 ${b.color}`} strokeWidth={2.2} />
                                    </span>
                                    <span className="text-gray-800">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-gray-700">
                            Keywords:{" "}
                            <em>
                                big data engineering, kafka streaming, spark data processing, data lakehouse,
                                airflow orchestration, dbt transformations, cloud data pipelines, scalable ETL,
                                real-time analytics, data platform architecture
                            </em>
                            .
                        </p>
                    </article>

                    {/* Quick facts / CTA */}
                    <aside className="rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
                        <dl className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Duration</dt>
                                <dd className="font-semibold text-indigo-700">≈ 95 Hours</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Learning Mode</dt>
                                <dd className="font-semibold text-emerald-700">Project-Based</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Prerequisites</dt>
                                <dd className="font-semibold text-amber-700">Programming + SQL Basics</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Outcome</dt>
                                <dd className="font-semibold text-rose-700">Job-Ready Portfolio</dd>
                            </div>
                        </dl>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <Link
                                href="contact-us"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-label="Apply now for Big Data Engineering program"
                            >
                                Apply Now
                                <Rocket className="w-4 h-4" />
                            </Link>
                            <p className="mt-3 text-xs text-gray-600">
                                Get the full syllabus and a readiness checklist to tailor your learning path.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseJsonLd }} />
        </section>
    );
}
