// Updated ProjectsSection with integrated projectsContent data

"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Code2, Briefcase, Award, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";


const projectsContent = {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",
    projects: [
        {
            name: "E-Commerce Platform Testing",
            description:
                "Complete testing of an e-commerce application including manual and automation testing.",
            skills: ["Manual Testing", "Selenium", "Test Case Design", "Bug Reporting"],
            difficulty: "Intermediate",
        },
        {
            name: "Banking Application QA",
            description: "Security and performance testing of a banking application.",
            skills: [
                "Security Testing",
                "Performance Testing",
                "API Testing",
                "Database Testing",
            ],
            difficulty: "Advanced",
        },
        {
            name: "Mobile App Testing Suite",
            description:
                "Comprehensive testing of a mobile application across multiple devices.",
            skills: [
                "Mobile Testing",
                "Appium",
                "Cross-Platform Testing",
                "Device Testing",
            ],
            difficulty: "Intermediate",
        },
        {
            name: "CI/CD Pipeline Implementation",
            description: "Set up automated testing in a CI/CD pipeline with Jenkins.",
            skills: [
                "Automation Testing",
                "Jenkins",
                "Git Integration",
                "Test Reporting",
            ],
            difficulty: "Advanced",
        },
    ],
};

const ProjectsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: easeOut },
        },
    };

    return (
        <section className="relative py-8 md:py-16 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full text-[13px] font-semibold mb-4 border border-cyan-200 shadow-sm"
                        variants={itemVariants}
                    >
                        <Code2 className="w-4 h-4" /> Hands-On Projects
                    </motion.div>

                    <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" variants={itemVariants}>
                        {projectsContent.title}
                    </motion.h2>

                    <motion.p className="text-xl text-slate-600 max-w-4xl mx-auto font-light" variants={itemVariants}>
                        {projectsContent.description}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projectsContent.projects.map((project, index) => {
                        return (
                            <motion.div key={index} className="group" variants={cardVariants}>
                                <div className="relative h-full bg-white rounded-3xl border border-slate-100 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-100/50 hover:border-cyan-300 transform hover:-translate-y-1">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                                            <Code2 className="w-7 h-7" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.name}</h3>
                                    <p className="text-slate-500 leading-relaxed mb-4">{project.description}</p>

                                    <div className="pt-4 border-t border-slate-50">
                                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Skills</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-sm font-medium transition-all border-transparent group-hover:border-cyan-200 group-hover:bg-cyan-50"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/40 transform hover:scale-[1.02]"
                                    >
                                        View Project Details <ArrowRight className="w-5 h-5 ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Why Build With Us?</h3>
                    <p className="text-lg text-slate-500">The benefits of completing these hands-on projects.</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {[
                        {
                            icon: <Briefcase className="w-7 h-7" />, title: "Portfolio Ready", description: "Build high-quality, deployable projects that stand out."
                        },
                        {
                            icon: <Award className="w-7 h-7" />, title: "Real-World Skills", description: "Gain practical, industry-ready experience."
                        },
                        {
                            icon: <Zap className="w-7 h-7" />, title: "Accelerated Learning", description: "Master complex concepts faster with hands-on tasks."
                        },
                    ].map((b, i) => (
                        <motion.div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-lg group hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-300 transition-all" variants={cardVariants}>
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white mb-6 shadow-xl group-hover:scale-105 transition-transform">
                                {b.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{b.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
