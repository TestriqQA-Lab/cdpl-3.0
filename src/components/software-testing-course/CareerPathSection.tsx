
// CareerPathSection - Light Theme + Pure Tailwind Version (No UI Folder Needed)
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { TrendingUp, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";

// Data
const careerPathContent = {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in QA and software testing.",
    paths: [
        {
            role: "QA Engineer",
            trending: true,
            description:
                "Perform manual and automated testing to ensure software quality.",
            salaryRange: "₹4-8 LPA",
            skills: [
                "Manual Testing",
                "Automation",
                "Test Planning",
                "Bug Reporting",
            ],
            opportunities: [
                "Startups",
                "IT Companies",
                "Product Companies",
                "Consulting Firms",
            ],
        },
        {
            role: "Automation Test Engineer",
            trending: true,
            description:
                "Develop and maintain automated test suites and frameworks.",
            salaryRange: "₹5-10 LPA",
            skills: ["Selenium", "API Testing", "Framework Design", "Scripting"],
            opportunities: [
                "Tech Giants",
                "Product Companies",
                "Testing Services",
                "Startups",
            ],
        },
        {
            role: "Performance Test Engineer",
            trending: false,
            description:
                "Conduct performance and load testing to optimize applications.",
            salaryRange: "₹6-12 LPA",
            skills: [
                "JMeter",
                "LoadRunner",
                "Performance Analysis",
                "Optimization",
            ],
            opportunities: [
                "Enterprise Companies",
                "Financial Services",
                "E-Commerce",
                "Tech Companies",
            ],
        },
        {
            role: "QA Lead / Manager",
            trending: false,
            description: "Lead QA teams and manage testing strategies and processes.",
            salaryRange: "₹10-18 LPA",
            skills: [
                "Team Management",
                "Test Strategy",
                "Process Improvement",
                "Leadership",
            ],
            opportunities: [
                "IT Companies",
                "Product Companies",
                "Consulting Firms",
                "Startups",
            ],
        },
    ],
};

const CareerPathSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: easeOut },
        },
    };

    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-cyan-200/40 border border-cyan-300/60 rounded-full px-3 py-1 mb-4 shadow-sm"
                        variants={itemVariants}
                    >
                        <Sparkles className="w-4 h-4 text-cyan-600" />
                        <span className="text-cyan-700 text-sm font-semibold tracking-wide">
                            Explore Roles
                        </span>
                    </motion.div>

                    <motion.h2 className="text-4xl font-bold text-slate-800 mb-4" variants={itemVariants}>
                        {careerPathContent.title}
                    </motion.h2>

                    <motion.p
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        {careerPathContent.description}
                    </motion.p>

                    <motion.div
                        className="flex justify-center gap-2 items-center text-cyan-700 mt-3"
                        variants={itemVariants}
                    >
                        <Target className="w-5 h-5" />
                        <span className="text-base font-medium">
                            {careerPathContent.subtitle}
                        </span>
                    </motion.div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {careerPathContent.paths.map((path, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                                {/* Glow Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-200/40 via-emerald-200/40 to-teal-200/40"></div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold text-slate-800">{path.role}</h3>

                                        {path.trending && (
                                            <span className="flex items-center gap-1 bg-orange-200/50 border border-orange-300/60 text-orange-700 text-xs px-2 py-1 rounded-full font-bold">
                                                <TrendingUp className="w-3 h-3" /> Hot
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-slate-600 leading-relaxed">
                                        {path.description}
                                    </p>

                                    <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Zap className="w-4 h-4 text-cyan-600" />
                                            <span className="text-slate-500 text-xs uppercase tracking-wider">
                                                Salary Range
                                            </span>
                                        </div>
                                        <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                                            {path.salaryRange}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-semibold mb-2 tracking-wider">
                                            Skills
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {path.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg border border-slate-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Opportunities */}
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-semibold mb-2 tracking-wider">
                                            Opportunities
                                        </p>
                                        <ul className="space-y-2">
                                            {path.opportunities.map((opp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-700">
                                                    <span className="text-cyan-600 font-bold mt-1">→</span>
                                                    {opp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/contact-us"
                                        className="block w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-center py-3 rounded-xl mt-4 hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
                                    >
                                        Explore Role
                                        <ArrowRight className="inline ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CareerPathSection;

