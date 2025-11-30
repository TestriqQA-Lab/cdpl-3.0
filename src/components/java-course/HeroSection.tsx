// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm"

'use client';
import Link from "next/link";
import LeadForm from "../forms/ApiCourseLeadForm";
import { ChevronRight, Home, ArrowRight } from "lucide-react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import CareerSessionModal from "@/components/CareerSessionModal";

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Programming", href: "#" },
        { label: "Java Master Program", href: "/java-course" },
    ];

    return (
        <section id="hero" aria-labelledby="java-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_200px_at_20%_0%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(800px_240px_at_90%_0%,rgba(37,99,235,0.08),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
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
                                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : ''}`}
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
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700 border border-indigo-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">80 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
                        </div>

                        <h1
                            id="java-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-FS">Java Programming</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <LeadForm variant="elevated" source="Java Course Page - Hero Section" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Become industry-ready with <strong>Core Java</strong>, <strong>OOP</strong>, <strong>Collections</strong>,{" "}
                            <strong>JDBC</strong>, <strong>Spring Boot</strong>, <strong>REST APIs</strong>, unit testing, and deployment.
                            Build portfolio projects and earn a <strong>QR-verified certificate</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Curriculum includes Maven/Gradle, JUnit/Mockito, Hibernate/JPA, security basics, and CI/CD best practices.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Java course"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('java-curriculum')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Java curriculum"
                            >
                                View Curriculum
                            </button>
                            <button
                                onClick={() => setIsCareerModalOpen(true)}
                                className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="Book a free demo for Java"
                            >
                                Free Demo
                            </button>
                        </div>

                        {/* Quick highlights (distinct accent colors) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                                80% practical labs with mentor feedback
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                                Spring Boot microservices & RESTful APIs
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                                JUnit & Mockito testing fundamentals
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                CI/CD: GitHub Actions, Docker basics
                            </li>
                        </ul>

                        {/* Desktop feature tiles under copy (no repeated colors) */}
                        <div className="mt-6 hidden lg:grid lg:grid-cols-4 gap-3">
                            {[
                                { k: "Hands-On", c: "border-emerald-200 bg-emerald-50 text-emerald-900" },
                                { k: "Expert Faculty", c: "border-indigo-200 bg-indigo-50 text-indigo-900" },
                                { k: "Verified Cert", c: "border-amber-200 bg-amber-50 text-amber-900" },
                                { k: "Placement Help", c: "border-rose-200 bg-rose-50 text-rose-900" },
                            ].map((f) => (
                                <div
                                    key={f.k}
                                    className={[
                                        "rounded-xl border p-4 text-center text-sm font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
                                        f.c,
                                    ].join(" ")}
                                >
                                    {f.k}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: Desktop form & visual */}
                    <aside className="md:col-span-5 lg:col-span-4 hidden md:block">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

                            <div className="p-4 sm:p-5">
                                <LeadForm variant="elevated" source="Java Course Page - Hero Section" />
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Trust strip under the grid */}
                <div className="mt-8 text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                        <span className="text-yellow-600">★★★★★</span>
                        <span>#1 Mumbai’s Premium Training Institute</span>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="Java Programming"
                source="Java Course Page - Hero Section - Enroll Now"
            />

            <CareerSessionModal
                isOpen={isCareerModalOpen}
                onClose={() => setIsCareerModalOpen(false)}
                source="Java Course Page - Hero Section - Free Demo"
            />

        </section>
    );
}
