"use client";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import React from "react";

const heroData = {
    title: "Master Data Analytics & Visualization with Tableau",
    subtitle:
        "Transform raw data into powerful, insight-driven visualizations. Learn from industry experts and master Tableau for data science, analytics, and interactive dashboards in just 20 hours.",
    duration: "20 Hours",
    highlights: [
        { icon: "📊", label: "Real Projects" },
        { icon: "👨‍🏫", label: "Expert Trainers" },
        { icon: "🎓", label: "Certification" },
        { icon: "💼", label: "Job Ready" },
    ],
    stats: [
        { value: "4.8/5", label: "Average Rating", icon: "⭐" },
        { value: "500+", label: "Successful Graduates", icon: "👥" },
        { value: "5+", label: "Years Experience", icon: "🏆" },
    ],
    cta: {
        primary: "Enroll Now",
        secondary: "Download Syllabus",
    },
};

/** --- Reusable Form --- */
function LeadForm({ className = "" }: { className?: string }) {
    const countries = [
        { code: "IN", dial: "+91", label: "India", flag: "🇮🇳" },
        { code: "US", dial: "+1", label: "United States", flag: "🇺🇸" },
        { code: "GB", dial: "+44", label: "United Kingdom", flag: "🇬🇧" },
        { code: "AE", dial: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
        { code: "SG", dial: "+65", label: "Singapore", flag: "🇸🇬" },
        { code: "AU", dial: "+61", label: "Australia", flag: "🇦🇺" },
    ];

    return (
        <form
            className={[
                "w-full rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg",
                "p-5 sm:p-6",
                className,
            ].join(" ")}
            onSubmit={(e) => {
                e.preventDefault();
                // submit handling here
            }}
            aria-label="Enroll for Tableau Data Analytics & Visualization"
        >
            <h2 className="text-xl font-semibold text-slate-900">
                Request Syllabus & Free Consultation
            </h2>
            <p className="mt-1 text-sm text-slate-600">
                Get the detailed curriculum, career guidance, and upcoming batch info.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>

                {/* Phone with country code + flag */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                        Mobile Number
                    </label>
                    <div className="mt-1 flex items-stretch gap-2">
                        <div className="flex min-w-[7.5rem] items-center rounded-lg border border-slate-300 bg-white px-2">
                            <select
                                name="country"
                                aria-label="Country code"
                                defaultValue="IN"
                                className="w-full bg-transparent py-2 text-slate-900 focus:outline-none"
                            >
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.flag} {c.label} ({c.dial})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            required
                            placeholder="98765 43210"
                            pattern="^[0-9\s\-()+]{7,20}$"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                        We’ll never share your number. Standard rates may apply.
                    </p>
                </div>

                <button
                    type="submit"
                    className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                    Get Syllabus & Pricing
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-xs text-slate-500">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-slate-700">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </form>
    );
}

/** ---- Optional: visible breadcrumb for internal linking ---- */
const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Data Analytics & Visualization with Tableau", href: "/data-analytics-with-tableau" },
];

export default function HeroSection() {


    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-8 md:pt-12 pb-16 overflow-hidden">
            <Head>
                <title>Tableau Course | Data Analytics & BI Dashboard Training (20 Hours)</title>
                <meta
                    name="description"
                    content="Tableau course with real projects: learn dashboards, data visualization, BI reporting, data blending, joins, calculations, parameters, LOD, maps & storytelling. 20 hours, expert trainers, certification, job-ready skills."
                />
                <meta
                    name="keywords"
                    content="Tableau course, Tableau training in Mumbai, Tableau certification, business intelligence, data analytics, data visualization, dashboards, Power BI vs Tableau, LOD expressions, parameters, Tableau maps, data storytelling, analytics course, BI developer training, Tableau Desktop course, Tableau interview preparation, KPI dashboards, ETL and data prep"
                />

            </Head>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
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

                {/* --- HERO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-4 md:col-span-7 lg:col-span-8">
                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-orange-100 rounded-full">
                            <span className="text-2xl">⏱️</span>
                            <span className="text-sm font-semibold text-orange-600">
                                Duration: {heroData.duration}
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4">
                            <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                                Master {" "}
                                <span className="text-orange-600">Data Analytics &</span>{" "}
                                <span className="text-blue-600">Visualization</span>{" "}
                                <span className="text-purple-600">with Tableau</span>
                            </h1>

                            {/* Mobile form (under H1) */}
                            <LeadForm className="mt-3 md:hidden" />

                            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                                {heroData.subtitle}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {heroData.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
                                >
                                    <span className="text-3xl">{highlight.icon}</span>
                                    <span className="text-xs sm:text-sm font-semibold text-center text-gray-700">
                                        {highlight.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-8 py-3 transition-all">
                                {heroData.cta.primary} →
                            </button>
                            <button className="border-2 border-gray-300 hover:border-orange-600 text-gray-700 font-semibold rounded-lg px-8 py-3 transition-all">
                                {heroData.cta.secondary}
                            </button>
                        </div>

                        {/* SEO-rich supporting copy */}
                        <div className="text-sm text-slate-700 max-w-2xl">
                            <p>
                                Learn industry-standard <strong>Tableau Desktop</strong> skills for
                                <strong> Business Intelligence (BI)</strong>, <strong>self-service analytics</strong>, and
                                <strong> interactive dashboards</strong>. Build portfolio projects with real datasets; master
                                <strong> data cleaning</strong>, <strong>data blending</strong>, <strong>joins</strong>,
                                <strong> calculations</strong>, <strong>parameters</strong>, <strong>LOD expressions</strong>,
                                <strong> mapping & geospatial analysis</strong>, <strong>table calculations</strong>, and
                                <strong> dashboard performance optimization</strong>.
                            </p>
                            <ul className="mt-3 list-disc pl-5 grid gap-1">
                                <li>Career-focused Tableau training in Mumbai with <em>job assistance</em></li>
                                <li>Hands-on BI dashboards for finance, marketing, operations, and sales analytics</li>
                                <li>Clear path to roles like <em>Tableau Developer</em>, <em>Data Analyst</em>, and <em>BI Analyst</em></li>
                            </ul>
                        </div>

                        {/* Stats moved BELOW buttons as requested */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {heroData.stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <div>
                                        <div className="font-bold text-lg text-gray-900">{stat.value}</div>
                                        <div className="text-xs text-gray-600">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hidden keyword cluster for SEO (non-intrusive) */}
                        <p className="sr-only">
                            Tableau course Mumbai, Tableau training, Tableau certification, Tableau Desktop training, business
                            intelligence dashboards, data visualization course, KPI dashboard design, table calculations, LOD
                            expressions, parameters, maps, geospatial analytics, joins, blending, data storytelling, BI developer
                            course, analytics training, Power BI vs Tableau, ETL data prep, interview questions, job assistance.
                        </p>
                    </div>

                    {/* Right spacer to balance grid (form moved to top) */}
                    <div className="md:col-span-5 lg:col-span-4 hidden md:block">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
