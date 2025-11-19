"use client";

import {
    ArrowRight,
    ChevronRight,
    Clock,
    Home,
    Award,
    Users,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import React from "react";

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
            aria-label="Enroll for Digital Marketing with AI Bootcamp"
        >
            <h2 className="text-xl font-semibold text-slate-900">
                Request Syllabus & Free Consultation
            </h2>
            <p className="mt-1 text-sm text-slate-600">
                Get the detailed Digital Marketing with AI curriculum, fees, and next batch details.
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
                    <Link href="/privacy-policy" className="underline hover:text-slate-700">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </form>
    );
}

export default function HeroSection() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Digital Marketing with AI Bootcamp", href: "/ai-bootcamp" },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            {/* Decorative background (keeps the soft blobs) */}
            <div className="absolute overflow-hidden">
                <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-6 md:pb-16">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <Link
                                    href={c.href}
                                    className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""
                                        }`}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Main grid (form aligned to top on the right) */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-7 lg:col-span-8">
                        {/* Duration Badge + Institute line (badge from original hero) */}
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                            <div className="w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                                <Clock className="h-4 w-4 text-orange-500" />
                                <span className="text-sm font-semibold text-slate-700">
                                    Duration: <span className="text-orange-600">30 Hours</span>
                                </span>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                                #1 Mumbai&apos;s Premium Training Institute
                            </span>
                        </div>

                        {/* H1 (same style as reference, content changed for Digital Marketing) */}
                        <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            <span>Future-Proof Your Career with </span>
                            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                                AI-Powered
                            </span>
                            <span> </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                        </h1>

                        {/* Mobile form (under H1) */}
                        <LeadForm className="mt-3 md:hidden" />

                        {/* Subheading */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            Master the fusion of <strong>Digital Marketing</strong> and{" "}
                            <strong>Artificial Intelligence</strong> to drive unprecedented growth.
                            Launch your high-income career in a global market projected to reach{" "}
                            <strong>$671 Billion by 2028</strong>.
                        </p>

                        {/* SEO keywords / topic line */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            Topics: SEO, SEM, Social Media Marketing, Performance Marketing, Email & Automation,
                            AI tools for ads & content, funnel strategy, analytics, brand building, and growth hacking.
                        </p>

                        {/* Highlights (adapted from your original stats) */}
                        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                            {[
                                { label: "Hours Training", value: "30" },
                                { label: "Student Rating", value: "9.6/10" },
                                { label: "Job Assistance", value: "100%" },
                                { label: "High-Income Skill Rank", value: "#4" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-orange-300"
                                >
                                    <span className="text-2xl font-bold text-slate-900">{item.value}</span>
                                    <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
                                Download Curriculum & Enroll
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                                Speak to Counselor
                            </button>
                        </div>

                        {/* Trust Indicators (reusing your original info) */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-orange-500" />
                                <span>
                                    <strong className="text-slate-900">AAA Certified</strong> International Recognition
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-500" />
                                <span>
                                    <strong className="text-slate-900">14+ Years</strong> Industry Expertise
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-emerald-500" />
                                <span>
                                    <strong className="text-slate-900">141,000+</strong> Jobs Worldwide
                                </span>
                            </div>
                        </div>

                        {/* Extra SEO copy */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This Digital Marketing with AI bootcamp is designed for students, freshers, and
                            working professionals who want to build a high-demand career in performance marketing,
                            social media, and AI-powered campaign optimization. Learn hands-on with real ad accounts,
                            dashboards, and growth campaigns tailored for Indian and international markets.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned) */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
