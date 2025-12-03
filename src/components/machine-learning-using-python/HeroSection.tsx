"use client";

import {
    ArrowRight,
    ChevronRight,
    Clock,
    Home,
    BookOpen,
    Award,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MachineLearningCourseLeadForm from "../forms/MachineLearningCourseLeadForm";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerOpen, setIsCareerOpen] = useState(false);
    const courseName = "Machine Learning Algorithms using python Programming";

    const scrollToForm = () => {
        const formSection = document.getElementById("enrollment-form");
        formSection?.scrollIntoView({ behavior: "smooth" });
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Machine Learning Algorithms with Python" },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-blob animation-delay-0 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-6 md:pb-16 relative z-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? (
                                        <Home className="h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4" />
                                    )}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-orange-700 ${isLast
                                                ? "font-semibold text-slate-900"
                                                : ""
                                                }`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-orange-700 ${isLast
                                                ? "font-semibold text-slate-900"
                                                : ""
                                                }`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                {/* Main grid (form aligned to top on the right) */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-7 lg:col-span-8">
                        {/* Duration Badge */}
                        <div className="mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-semibold text-slate-700">
                                Duration: <span className="text-orange-600">45 Hours</span>
                            </span>
                        </div>

                        {/* H1 - same style as reference */}
                        <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            <span>Master </span>
                            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                                Machine Learning Algorithms
                            </span>
                            <span> with </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Python
                            </span>
                        </h1>

                        {/* Mobile form under H1 */}
                        <div className="mt-3 md:hidden">
                            <MachineLearningCourseLeadForm />
                        </div>

                        {/* Subheading */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            Transform raw data into powerful, predictive intelligence. Learn
                            from industry experts and build production-ready ML models that
                            solve real-world business problems using Python.
                        </p>

                        {/* SEO keywords line */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            Topics: supervised & unsupervised learning, regression,
                            classification, clustering, model evaluation, feature engineering,
                            hyperparameter tuning, ensemble methods, time series, and ML model
                            deployment.
                        </p>

                        {/* Key Features (your original cards, adapted to this layout) */}
                        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur-sm transition-colors hover:border-orange-300">
                                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        80:20 Practical
                                    </p>
                                    <p className="text-xs text-slate-600">Hands-on learning</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur-sm transition-colors hover:border-orange-300">
                                <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        Global Certification
                                    </p>
                                    <p className="text-xs text-slate-600">AAA Certified</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur-sm transition-colors hover:border-orange-300">
                                <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        Expert Mentors
                                    </p>
                                    <p className="text-xs text-slate-600">14+ years experience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-4 backdrop-blur-sm transition-colors hover:border-orange-300">
                                <Zap className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        Job-Ready Skills
                                    </p>
                                    <p className="text-xs text-slate-600">100% support</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            >
                                Download Syllabus
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⭐</span>
                                <span>
                                    <strong className="text-slate-900">4.8/5</strong> Average
                                    Rating
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">👥</span>
                                <span>
                                    <strong className="text-slate-900">500+</strong> Successful
                                    Graduates
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span>
                                    <strong className="text-slate-900">5+ Years</strong> Industry
                                    Experience
                                </span>
                            </div>
                        </div>

                        {/* Extra SEO copy */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This Machine Learning with Python program is designed for students,
                            working professionals, and aspiring data scientists who want to
                            build job-ready ML skills. Work on real datasets, learn how to
                            choose the right algorithms, tune models, and communicate insights
                            that drive business impact.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned) */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8">
                        <MachineLearningCourseLeadForm />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Machine Learning with Python - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Machine Learning with Python - Hero Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerOpen}
                onClose={() => setIsCareerOpen(false)}
                source="Machine Learning with Python - Hero Section - Free Demo"
                courseName={courseName}
            />
        </section>
    );
}
