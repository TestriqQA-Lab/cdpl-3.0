"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { TrendingUp, ArrowRight, Sparkles, Target, Zap, Briefcase } from "lucide-react";
import Link from "next/link";
import { careerPathContent } from "@/components/DS&ML-Courses/data/data";

// Data
// const careerPathContent = {
//     title: "Career Opportunities",
//     description: "Explore diverse career paths after completing the course.",
//     subtitle: "Launch your career in QA and software testing.",
//     paths: [
//         {
//             role: "QA Engineer",
//             trending: true,
//             description: "Perform manual and automated testing to ensure software quality.",
//             salaryRange: "₹4-8 LPA",
//             skills: ["Manual Testing", "Automation", "Test Planning", "Bug Reporting"],
//             opportunities: ["Startups", "IT Companies", "Product Companies", "Consulting Firms"],
//         },
//         {
//             role: "Automation Test Engineer",
//             trending: true,
//             description: "Develop and maintain automated test suites and frameworks.",
//             salaryRange: "₹5-10 LPA",
//             skills: ["Selenium", "API Testing", "Framework Design", "Scripting"],
//             opportunities: ["Tech Giants", "Product Companies", "Testing Services", "Startups"],
//         },
//         {
//             role: "Performance Test Engineer",
//             trending: false,
//             description: "Conduct performance and load testing to optimize applications.",
//             salaryRange: "₹6-12 LPA",
//             skills: ["JMeter", "LoadRunner", "Performance Analysis", "Optimization"],
//             opportunities: ["Enterprise Companies", "Financial Services", "E-Commerce", "Tech Companies"],
//         },
//         {
//             role: "QA Lead / Manager",
//             trending: false,
//             description: "Lead QA teams and manage testing strategies and processes.",
//             salaryRange: "₹10-18 LPA",
//             skills: ["Team Management", "Test Strategy", "Process Improvement", "Leadership"],
//             opportunities: ["IT Companies", "Product Companies", "Consulting Firms", "Startups"],
//         },
//     ],
// };

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function CareerPathSection() {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
            {/* Soft background blobs */}
            <div className="absolute -left-20 -top-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -bottom-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 mb-4" variants={itemVariants}>
                        <Sparkles className="w-4 h-4 text-cyan-600" />
                        <span className="text-cyan-700 text-sm font-semibold">Explore Roles</span>
                    </motion.div>

                    <motion.h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3" variants={itemVariants}>
                        {careerPathContent.title}
                    </motion.h2>

                    <motion.p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg" variants={itemVariants}>
                        {careerPathContent.description}
                    </motion.p>

                    <motion.div className="mt-3 flex items-center justify-center gap-2 text-cyan-700" variants={itemVariants}>
                        <Target className="w-5 h-5" />
                        <span className="text-sm font-medium">{careerPathContent.subtitle}</span>
                    </motion.div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {careerPathContent.paths.map((path, idx) => (
                        <motion.article
                            key={idx}
                            className="group relative bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                        >
                            {/* subtle top accent */}
                            <div className="absolute -top-4 left-6 w-14 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <header className="relative z-10 flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 flex items-center gap-3">
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 border border-slate-100">
                                            <Briefcase className="w-5 h-5 text-cyan-600" />
                                        </span>
                                        {path.role}
                                    </h3>

                                    <p className="mt-2 text-slate-500 text-sm md:text-base max-w-xl">{path.description}</p>
                                </div>

                                {path.trending && (
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-1 rounded-full">
                                        <TrendingUp className="w-3 h-3" /> Hot
                                    </span>
                                )}
                            </header>

                            <div className="relative z-10 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-2xl p-4 bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-4 h-4 text-cyan-600" />
                                        <div>
                                            <p className="text-xs uppercase text-slate-500 tracking-wider">Salary Range</p>
                                            <p className="text-lg md:text-xl font-bold text-slate-800 mt-1">{path.salaryRange}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 flex flex-col gap-2">
                                    <p className="text-xs uppercase text-slate-500 tracking-wider">Top Skills</p>
                                    <div className="flex flex-wrap gap-2">
                                        {path.skills.map((s, i) => (
                                            <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-100 text-slate-700 text-sm shadow-sm">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 relative z-10">
                                <p className="text-xs uppercase text-slate-500 tracking-wider mb-2">Opportunities</p>
                                <div className="flex flex-wrap gap-3">
                                    {path.opportunities.map((o, i) => (
                                        <span key={i} className="text-sm text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{o}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 relative z-10 flex items-center gap-3">
                                <Link href="/contact-us" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-medium shadow-md hover:translate-y-[-1px] transition-transform">
                                    Explore Role
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <div className="text-sm text-slate-500">or <Link href="/courses" className="text-cyan-600 font-medium underline">See related courses</Link></div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
