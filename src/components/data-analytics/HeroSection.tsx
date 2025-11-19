// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm" (same API-testing style).

import Link from "next/link";
import LeadForm from "../CourseLeadForm";
import { ChevronRight, Home } from "lucide-react";

export default function HeroSection() {


    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Advanced Data Analytics", href: "/data-analytics" },
    ];

    return (
        <section id="hero" aria-labelledby="analytics-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_220px_at_18%_0%,rgba(234,88,12,0.08),transparent_60%),radial-gradient(800px_260px_at_92%_0%,rgba(2,132,199,0.08),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
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
                                    className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
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
                            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-orange-700 border border-orange-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">110 Hours</span>
                            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-700 border border-sky-200">Project-based</span>
                            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
                        </div>

                        <h1
                            id="analytics-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in{" "}
                            <span className="text-DS">Advanced Data Analytics</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Become a job-ready <strong>Data Analyst</strong> with <strong>Excel-to-ETL</strong>, <strong>SQL</strong>,{" "}
                            <strong>Python (Pandas/NumPy)</strong>, <strong>Statistics</strong>, <strong>Power BI / Tableau</strong>,{" "}
                            A/B testing and storytelling dashboards. Ship portfolio projects and earn a <strong>QR-verified certificate</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Curriculum includes data modeling, DAX, joins/window functions, EDA, feature prep, automation, and lightweight ML for forecasting & classification.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                                aria-label="Enroll now in Advanced Data Analytics course"
                            >
                                Enroll Now
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full analytics curriculum"
                            >
                                View Curriculum
                            </Link>
                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="Book a free demo for analytics"
                            >
                                Free Demo
                            </button>
                        </div>

                        {/* Quick highlights (distinct accent colors) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                                80% hands-on labs with mentor feedback
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" />
                                BI dashboards (Power BI / Tableau) & storytelling
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                                SQL mastery: joins, CTEs, window functions
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                                Statistics, experimentation & insights for business
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
            </div>

        </section>
    );
}
