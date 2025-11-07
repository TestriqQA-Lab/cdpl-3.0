// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm" (same API-testing style).

import Link from "next/link";
import LeadForm from "../CourseLeadForm";
import { ChevronRight, Home } from "lucide-react";

export default function HeroSection() {
    // JSON-LD for SEO (Course)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Master Program in Big Data Engineering",
        description:
            "Industry-ready Big Data Engineering training covering Hadoop ecosystem, Spark (Core/SQL/Streaming), Kafka, Airflow, Hive, HDFS, NoSQL, data modeling, and cloud deployment (AWS/Azure). Includes live projects, mentor-led labs, and placement assistance.",
        provider: { "@type": "Organization", name: "Cinute Digital Pvt. Ltd. (CDPL)" },
        educationalCredentialAwarded: "CDPL Verified Certificate (QR-enabled)",
        timeRequired: "PT95H",
        keywords:
            "big data engineering course, Apache Spark training, Hadoop HDFS Hive, Kafka streaming, Airflow data pipelines, data engineer jobs India, AWS Azure Databricks",
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Data Engineering", href: "#" },
        { label: "Big Data Engineering", href: "/big-data-engineering" },
    ];

    return (
        <section id="hero" aria-labelledby="bde-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_220px_at_18%_0%,rgba(13,148,136,0.10),transparent_60%),radial-gradient(800px_260px_at_92%_0%,rgba(8,145,178,0.10),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-12%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-12 md:pb-16">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <Link
                                    href={c.href}
                                    className={`hover:text-teal-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left column: Copy */}
                    <div className="md:col-span-7 lg:col-span-8">
                        {/* Micro-badges (distinct colors, no repeats) */}
                        <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <span className="rounded-full bg-teal-50 px-2 py-0.5 text-teal-800 border border-teal-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-cyan-800 border border-cyan-200">95 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-violet-50 px-2 py-0.5 text-violet-800 border border-violet-200">Placement Support</span>
                        </div>

                        <h1
                            id="bde-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-DS">Big Data Engineering</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Become a job-ready <strong>Data Engineer</strong> with <strong>Hadoop HDFS/Hive</strong>,{" "}
                            <strong>Apache Spark</strong> (Core/SQL/Streaming), <strong>Kafka</strong>, <strong>Airflow</strong>,{" "}
                            <strong>NoSQL</strong>, data modeling, and <strong>cloud deployments</strong> (AWS/Azure). Build portfolio pipelines and
                            earn a <strong>QR-verified certificate</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Curriculum includes batch & streaming ETL, partitioning & file formats (Parquet/ORC), optimization, lineage, monitoring, and
                            CI/CD for data workflows.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-teal-200"
                                aria-label="Enroll now in Big Data Engineering course"
                            >
                                Enroll Now
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-cyan-300 bg-white px-6 py-3 text-base font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                aria-label="View full Big Data Engineering curriculum"
                            >
                                View Curriculum
                            </Link>
                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-white px-6 py-3 text-base font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-amber-200"
                                aria-label="Book a free demo for Big Data Engineering"
                            >
                                Free Demo
                            </button>
                        </div>

                        {/* Quick highlights (distinct accent colors, no repeats) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                                Spark Core/SQL/Streaming with performance tuning & partitions
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-600" />
                                Kafka streaming • Airflow orchestration • robust ETL
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                Hive, HDFS, Parquet/ORC • data modeling & governance
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-600" />
                                Deploy on AWS/Azure • CI/CD for data pipelines
                            </li>
                        </ul>

                        {/* Trust strip */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                            <span className="text-yellow-600">★★★★★</span>
                            <span>#1 Mumbai’s Premium Training Institute</span>
                        </div>
                    </div>

                    {/* Right column: Desktop form & visual */}
                    <aside className="md:col-span-5 lg:col-span-4 hidden md:block">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

                            <div className="p-4 sm:p-5">
                                <LeadForm variant="elevated" />
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Alt contact links */}
                <div className="mt-8 text-center">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <Link href="tel:+917888383788" className="underline underline-offset-4 text-slate-800">
                            +91 788-83-83-788
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link href="tel:+918488988984" className="underline underline-offset-4 text-slate-800">
                            +91 84-889-889-84
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link href="tel:+918062785870" className="underline underline-offset-4 text-slate-800">
                            +91 806-27-85-870
                        </Link>
                    </div>
                    <Link
                        href="https://www.cinutedigital.com"
                        className="mt-3 block text-sm text-cyan-700 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.cinutedigital.com
                    </Link>
                </div>
            </div>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
