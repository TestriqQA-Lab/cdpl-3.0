'use client';

import { motion } from 'framer-motion';
import { Play, FileText } from 'lucide-react';
import LeadForm from '@/components/software-testing-course/LeadForm';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-8 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-12 gap-10 lg:gap-12">

                    {/* LEFT SECTION */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-7 xl:col-span-8"
                    >
                        {/* Badge */}
                        <div className="w-fit bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
                            India's #1 Software Testing Training Institute
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight mt-4 sm:mt-6 break-words">
                            Master <span className="text-orange-500">Software Testing Courses</span> <br className="md:hidden" />with <br className="md:hidden" />100% Placement Support
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="md:hidden mt-5"
                        >
                            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 border border-white/30">
                                <LeadForm />
                                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-4 sm:mt-6">
                                    100% secure • We never spam • 50,000+ students trust us
                                </p>
                            </div>
                        </motion.div>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mt-4">
                            Launch your tech career with industry-leading courses, live projects, and guaranteed job interviews.
                            Join 5000+ successful graduates today.
                        </p>

                        {/* Stats Badges */}
                        <div className="md:flex flex-wrap gap-4 sm:gap-6 hidden">
                            {[{
                                emoji: '👥',
                                value: '5,000+',
                                label: 'Students Placed'
                            }, {
                                emoji: '⭐',
                                value: '4.9/5',
                                label: 'Student Rating'
                            }, {
                                emoji: '🏆',
                                value: '15+ Years',
                                label: 'Industry Experience'
                            }].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white px-3 py-3 md:mt-3  rounded-xl shadow-lg flex-1 min-w-[150px]">
                                    <div className="bg-orange-100 p-3 rounded-full text-lg">
                                        {item.emoji}
                                    </div>
                                    <div>
                                        <p className="text-lg sm:text-xl font-bold text-gray-900">{item.value}</p>
                                        <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-8">
                            <button className="flex items-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-lg transition shadow-lg w-full sm:w-auto justify-center">
                                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                                Download Brochure
                            </button>
                            <button className="flex items-center gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-8 py-3 rounded-xl text-sm sm:text-lg transition shadow-lg w-full sm:w-auto justify-center">
                                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                View Placement Stories
                            </button>
                            <button className="flex items-center gap-2 sm:gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 sm:px-8 py-3 rounded-xl text-sm sm:text-lg transition shadow-lg w-full sm:w-auto justify-center">
                                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                Watch CDPL
                            </button>
                        </div>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                            {['100% Live Interactive Classes', '90+ Real-World Projects', 'ISTQB & Industry Certifications', '100% Job Support with Interview Guarantee', 'Flexible Weekend & Weekday Batches', 'Lifetime Access to Course Materials'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
                                    <span className="text-green-500">✓</span>
                                    <span className="text-gray-700 break-words">{feature}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>

                    {/* RIGHT SECTION */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:block md:col-span-5 xl:col-span-4"
                    >
                        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/30">
                            <LeadForm />
                            <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-4 sm:mt-6">
                                100% secure • We never spam • 50,000+ students trust us
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
