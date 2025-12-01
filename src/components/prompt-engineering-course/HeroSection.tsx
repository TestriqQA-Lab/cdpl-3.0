// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm" (same API-testing style).

import Link from "next/link";
import LeadForm from "../CourseLeadForm";
import { ChevronRight, Home } from "lucide-react";

export default function HeroSection() {


    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Prompt Engineering with Generative AI" },
    ];

    return (
        <section id="hero" aria-labelledby="pe-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_220px_at_18%_0%,rgba(22,163,74,0.10),transparent_60%),radial-gradient(800px_260px_at_92%_0%,rgba(34,197,94,0.10),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-12%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-12 md:pb-16">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-green-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-green-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left column: Copy */}
                    <div className="md:col-span-7 lg:col-span-8">
                        {/* Micro-badges (distinct colors, no repeats) */}
                        <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <span className="rounded-full bg-green-50 px-2 py-0.5 text-green-800 border border-green-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-800 border border-sky-200">20 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-violet-50 px-2 py-0.5 text-violet-800 border border-violet-200">Placement Support</span>
                        </div>

                        <h1
                            id="pe-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-DS">Prompt Engineering</span> with{" "}
                            <span className="text-DS">Generative AI</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Learn <strong>prompt patterns</strong> (rewrite, critique, tree-of-thought), build <strong>RAG pipelines</strong>, leverage{" "}
                            <strong>function/tool calling & agents</strong>, add <strong>guardrails & evaluation</strong>, and deploy real apps. Earn a{" "}
                            <strong>QR-verified certificate</strong> and a recruiter-proof portfolio.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Includes prompt optimization, embeddings, vector DBs, safety best practices, latency/cost tuning, and CI/CD for LLM apps.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="contact-us"
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-200"
                                aria-label="Enroll now in Prompt Engineering course"
                            >
                                Enroll Now
                                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
                                </svg>
                            </Link>
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Prompt Engineering curriculum"
                            >
                                View Curriculum
                            </Link>
                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-white px-6 py-3 text-base font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-amber-200"
                                aria-label="Book a free demo for Prompt Engineering"
                            >
                                Free Demo
                            </button>
                        </div>

                        {/* Quick highlights (distinct accent colors, no repeats) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                                Prompt patterns, structure & guardrails (safety-first design)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" />
                                RAG with embeddings & vector DBs (Faiss/PGVector)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                Tool/function calling, agents & workflows
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-600" />
                                Eval & monitoring • latency/cost optimization • CI/CD
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
