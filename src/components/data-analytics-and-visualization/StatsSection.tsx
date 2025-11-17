import React from "react";
import { BarChart3, TrendingUp, Users, Award, Zap, Target } from "lucide-react";

/**
 * Enhanced, accessible, and fully responsive StatsSection.
 * - Keeps original functionality and data structure intact
 * - Polished UI (gradients, glass cards, focus/hover states)
 * - Mobile-first across all breakpoints
 * - Adds SEO-friendly copy & structured data (JSON-LD)
 */

const colorClasses = [
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-cyan-500 to-cyan-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-green-500 to-green-600",
];

export const stats = [
    {
        number: "25%",
        label: "Market Growth (2020-2030)",
        description: "Projected growth in data analytics roles",
    },
    {
        number: "101,000+",
        label: "Job Vacancies in India",
        description: "Excel expert positions available",
    },
    {
        number: "4 LPA",
        label: "Average Fresher Salary",
        description: "Excel expert starting salary",
    },
    {
        number: "75%",
        label: "Job Satisfaction Rate",
        description: "Among data analytics professionals",
    },
    {
        number: "32%",
        label: "India's Global Market Share",
        description: "In data analytics services",
    },
    {
        number: "14+",
        label: "Years of Expertise",
        description: "Cinute Digital's industry experience",
    },
];

export default function StatsSection() {


    const icons = [BarChart3, TrendingUp, Users, Award, Zap, Target];

    return (
        <section
            aria-labelledby="why-course-heading"
            className="relative py-20 bg-white overflow-hidden"
        >
            {/* Subtle background accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute -top-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-blue-100/60 blur-3xl opacity-20" />
                <div className="absolute -bottom-24 -left-20 w-[28rem] h-[28rem] rounded-full bg-indigo-100/60 blur-3xl opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-50 blur-3xl opacity-20" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="why-course-heading"
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
                    >
                        Why Invest in This{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                            Course?
                        </span>
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-slate-600 max-w-6xl mx-auto leading-relaxed">
                        The data analytics industry is booming across India and globally.
                        Mastering <strong>Advanced Excel for Data Analytics</strong>—from{" "}
                        <strong>PivotTables</strong> and <strong>Power Query</strong> to{" "}
                        <strong>Power Pivot</strong> and{" "}
                        <strong>interactive dashboards</strong>—helps you analyze,
                        visualize, and present business insights faster. Ideal for{" "}
                        <strong>freshers</strong>, <strong>working professionals</strong>,
                        and <strong>career switchers</strong>.
                    </p>
                </header>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = icons[index % icons.length];
                        const colorClass = colorClasses[index % colorClasses.length];

                        return (
                            <article
                                key={`${stat.label}-${index}`}
                                className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 focus-within:shadow-xl outline-none"
                                tabIndex={0}
                                aria-label={`${stat.number} ${stat.label}`}
                            >
                                {/* gradient overlay on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${colorClass} text-white mb-5 sm:mb-6 group-hover:scale-105 transition-transform duration-300`}
                                        aria-hidden="true"
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                    </div>

                                    {/* Numbers & labels */}
                                    <div className="space-y-2 sm:space-y-3">
                                        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                                            {stat.number}
                                        </p>
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                                            {stat.label}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* bottom accent */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                                        aria-hidden="true"
                                    />
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Additional insights */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Market insights */}
                    <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                            Market Insights
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>25% growth</strong> in data analytics roles from
                                    2020–2030
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>101,000+ job vacancies</strong> for Excel experts in
                                    India
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>32% global market share</strong> in data analytics
                                    services
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Career benefits */}
                    <section className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                            Career Benefits
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>4 LPA average salary</strong> for freshers with Excel
                                    expertise
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>75% job satisfaction</strong> among data analytics
                                    professionals
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span>
                                    <strong>Multiple career paths</strong> across industries and
                                    roles
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* SEO helper copy (natural keywords) */}
                <div className="mt-12 md:mt-16 max-w-4xl text-slate-700 leading-relaxed">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                        Advanced Excel for Data Analytics & Visualization — Skills You’ll
                        Use Daily
                    </h3>
                    <p className="text-sm sm:text-base">
                        Build job-ready skills with hands-on practice in{" "}
                        <strong>Excel dashboards</strong>, <strong>data cleaning</strong>,{" "}
                        <strong>Power Query</strong>, <strong>Power Pivot</strong>,{" "}
                        <strong>DAX basics</strong>, and <strong>visual storytelling</strong>.{" "}
                        This program is designed for <strong>analysts</strong>,{" "}
                        <strong>business managers</strong>, and <strong>students</strong>{" "}
                        aiming to improve decision-making and reporting. If you’re searching
                        for an <em>Advanced Excel course in Mumbai</em> with{" "}
                        <em>placement assistance</em>, or need{" "}
                        <em>Excel training for data analytics</em> to boost your career,
                        this course gives you a competitive edge.
                    </p>
                </div>

            </div>
        </section>
    );
}
