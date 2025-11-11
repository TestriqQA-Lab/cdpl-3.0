"use client";

import { ArrowRight, ChevronRight, Home, Play } from "lucide-react";
import Link from "next/link";
import React from "react";

/** --- Reusable Form (unchanged) --- */
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
                // handle submit
            }}
            aria-label="Request Syllabus & Free Consultation"
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

                {/* Phone */}
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
                            pattern="^[0-9\\s\\-()+]{7,20}$"
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

/** --- Updated SEO-optimized Hero --- */
export default function HeroSection() {
    const courseInfo = {
        title: "Advanced Excel for Data Analytics & Visualization",
        duration: "20 Hours",
        institute: "Cinute Digital Pvt. Ltd.",
        description:
            "Transform raw business data into decision-ready dashboards with Excel’s advanced formulas, PivotTables, Power Query, and Power Pivot. Learn KPI tracking, interactive charts, reporting automation, and best practices for analytics in just 20 hours.",
        tagline: "#1 MUMBAI's PREMIUM TRAINING INSTITUTE",
    };

    /** ---- JSON-LD: Course ---- */
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: courseInfo.title,
        description:
            "Hands-on Advanced Excel training in Mumbai focused on data analytics, dashboarding, and visualization using PivotTables, Power Query, Power Pivot, DAX basics, and automation techniques.",
        provider: {
            "@type": "Organization",
            name: courseInfo.institute,
            url: "https://www.example.com",
        },
        timeRequired: "PT20H",
        educationalLevel: "Beginner to Intermediate",
        keywords:
            "Advanced Excel course Mumbai, Excel data analytics training, Excel dashboards course, PivotTables training India, Power Query certification, Power Pivot DAX basics, Excel business analytics, Excel reporting automation, Excel charts & visualization, Excel for data analysis, best Excel course in Mumbai",
        areaServed: ["Mumbai", "Maharashtra", "India"],
        inLanguage: "en",
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            price: "0",
            url: "https://www.example.com/courses/advanced-excel",
            eligibleRegion: "IN",
        },
    };

    /** ---- JSON-LD: Breadcrumbs ---- */
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.example.com/" },
            { "@type": "ListItem", position: 2, name: "Courses", item: "https://www.example.com/courses" },
            {
                "@type": "ListItem",
                position: 3,
                name: "Advanced Excel for Data Analytics & Visualization",
                item: "https://www.example.com/courses/advanced-excel",
            },
        ],
    };

    /** ---- JSON-LD: FAQ (high-intent queries) ---- */
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who should take this Advanced Excel course in Mumbai?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Beginners, business analysts, MIS executives, marketers, operations and finance professionals who want to analyze data, build dashboards, and automate reports using Excel.",
                },
            },
            {
                "@type": "Question",
                name: "What topics are covered in the Excel data analytics training?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Advanced formulas, PivotTables, Power Query, Power Pivot, data modeling (intro to DAX), interactive charts, KPI dashboards, and best practices for reporting automation.",
                },
            },
            {
                "@type": "Question",
                name: "Is there a certificate after the Excel course?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes. You will receive a course completion certificate from Cinute Digital Pvt. Ltd. after finishing the training and project evaluations.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need prior Excel experience?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Basic Excel knowledge helps, but the 20-hour program is beginner-friendly and progresses quickly to advanced analytics and dashboard skills.",
                },
            },
        ],
    };

    /** ---- Optional: visible breadcrumb for internal linking (kept minimal) ---- */
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Advanced Excel for Data Analytics & Visualization", href: "/data-analytics-and-visualization" },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-10 pb-20">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <script
                type="application/ld+json"
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

                {/* Top-aligned columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left content */}
                    <div className="flex flex-col md:col-span-8 justify-start space-y-8">
                        <div className="space-y-4">
                            {/* Badge / tagline */}
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                {courseInfo.tagline}
                            </div>

                            {/* Heading styled like the second hero */}
                            <h1 className="mt-1 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                                <span>Master </span>
                                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Advanced Excel
                                </span>
                                <span> for </span>
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Data Analytics & Visualization
                                </span>
                            </h1>

                            {/* SEO-optimized description */}
                            <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                                {courseInfo.description} Build job-ready dashboards, streamline weekly and monthly reports,
                                and apply proven frameworks for <strong>Excel data analysis</strong>, <strong>business intelligence</strong>,
                                and <strong>interactive visualization</strong>. Ideal for learners in{" "}
                                <strong>Mumbai, Maharashtra (India)</strong> seeking a career upgrade in analytics, MIS, or reporting.
                            </p>

                            {/* Byline */}
                            <p className="text-sm text-slate-500">
                                {courseInfo.institute} • {courseInfo.duration}
                            </p>

                            {/* Topics/keywords (scan-friendly) */}
                            <div className="mt-2 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3">
                                {[
                                    "Advanced formulas & functions",
                                    "PivotTables & PivotCharts",
                                    "Power Query (ETL)",
                                    "Power Pivot & Data Model",
                                    "DAX (intro) for KPIs",
                                    "Interactive dashboards",
                                    "Data cleaning & shaping",
                                    "Automation & reporting",
                                    "Business analytics use-cases",
                                ].map((t, i) => (
                                    <span
                                        key={i}
                                        className="rounded-md border border-slate-200 bg-white/70 px-2 py-1 text-xs font-medium text-slate-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Local SEO helper (subtle, human-readable) */}
                            <p className="mt-3 max-w-3xl text-sm text-slate-600">
                                Looking for the <strong>best Advanced Excel course in Mumbai</strong>? Join our{" "}
                                <strong>Excel data analytics training</strong> to learn <strong>dashboard design</strong>,
                                <strong> KPI tracking</strong>, and <strong>Power Query</strong> workflows used by modern
                                analytics teams across India.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Enroll Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center gap-2 px-5 py-3 border-2 border-slate-300 hover:border-blue-600 text-slate-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">5,000+ Students Trained</p>
                                <p className="text-xs text-slate-600">Trusted by professionals worldwide</p>
                            </div>
                        </div>

                        {/* Extra SEO copy (concise & useful) */}
                        <div className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
                            This <strong>Advanced Excel training</strong> focuses on real datasets, corporate reporting needs,
                            and job-aligned projects. You’ll practice <strong>ETL with Power Query</strong>, build a
                            <strong> data model with Power Pivot</strong>, create <strong>interactive dashboards</strong> with slicers,
                            and apply <strong>best practices for BI and storytelling</strong>. Perfect for analysts, freshers,
                            and working pros targeting roles in <strong>Data Analytics</strong>, <strong>MIS</strong>, and
                            <strong> Business Intelligence</strong>.
                        </div>
                    </div>

                    {/* Right section: form + floating cards kept */}
                    <div className="relative hidden lg:block lg:col-span-4 mt-5">
                        <div className="relative w-full">
                            <div className="absolute inset-0 rounded-3xl" />
                            {/* Form card */}
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                                <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                                    <LeadForm />
                                </div>
                            </div>

                            {/* Floating cards (KEPT as requested) */}
                            <div className="absolute -bottom-18 -left-30 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-xs animate-[bounce_5s_ease-in-out_infinite] motion-reduce:animate-none">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">100% Job Assistance</p>
                                        <p className="text-xs text-slate-600">Career support included</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-15 -right-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-xs animate-[bounce_5s_ease-in-out_infinite] motion-reduce:animate-none">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold">
                                        ★
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Global Certification</p>
                                        <p className="text-xs text-slate-600">Internationally recognized</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Right section */}
                </div>
            </div>
        </section>
    );
}
