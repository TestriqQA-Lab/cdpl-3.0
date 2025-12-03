'use client';

import { motion } from 'framer-motion';
import { Play, FileText } from 'lucide-react';
import LeadForm from '@/components/software-testing-course/LeadForm';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-10 lg:py-14">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    {/* LEFT SECTION - Updated to match the image exactly in structure & style */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            <span className="text-sm">India's #1 Software Testing & Data Science Training Institute</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="lg:text-5xl text-4xl font-extrabold text-gray-900 leading-tight mt-6">
                            Master <span className="text-orange-500">Software Testing Courses</span>{' '}
                            with 100% Placement Support
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mt-6">
                            Launch your tech career with industry-leading courses, live projects, and guaranteed job interviews.
                            Join 5000+ successful graduates today.
                        </p>

                        {/* Stats Badges */}
                        <div className="flex flex-wrap gap-6 mt-6">
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-lg">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <span className="text-xl">👥</span>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">5,000+</p>
                                    <p className="text-gray-600 text-sm">Students Placed</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-lg">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <span className="text-xl">⭐</span>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">4.9/5</p>
                                    <p className="text-gray-600 text-sm">Student Rating</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-lg">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <span className="text-xl">🏆</span>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">15+ Years</p>
                                    <p className="text-gray-600 text-sm">Industry Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                            {[
                                '100% Live Interactive Classes',
                                '90+ Real-World Projects',
                                'ISTQB & Industry Certifications',
                                '100% Job Support with Interview Guarantee',
                                'Flexible Weekend & Weekday Batches',
                                'Lifetime Access to Course Materials',
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <span className="text-green-500">✓</span>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons - Matching image style */}
                        <div className="flex flex-wrap gap-4 pt-8">
                            <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-lg transition shadow-lg">
                                <FileText className="w-5 h-5" />
                                Download Brochure
                            </button>
                            <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-lg transition shadow-lg">
                                <Play className="w-5 h-5" />
                                View Placement Stories
                            </button>
                            <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl text-lg transition shadow-lg">
                                <Play className="w-5 h-5" />
                                Watch CDPL
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT SECTION - Completely unchanged */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-5 lg:col-span-4"
                    >
                        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
                            <LeadForm />
                            <p className="text-xs text-gray-500 text-center mt-6">
                                100% secure • We never spam • 50,000+ students trust us
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}