'use client';

import { motion } from 'framer-motion';
import { Rocket, Trophy, Users2 } from 'lucide-react';
import LeadForm from '@/components/software-testing-course/LeadForm';

export default function FinalCTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold">
                            Ready to Launch Your QA Career in 2026?
                        </h2>
                        <p className="text-xl opacity-90">
                            Join 15,000+ students who transformed their careers with Cinute Digital.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-xl text-xl flex items-center gap-3">
                                <Rocket className="w-7 h-7" />
                                Enroll Now – Limited Seats!
                            </button>
                            <button className="border-2 border-white hover:bg-white/10 font-bold px-10 py-5 rounded-xl text-xl">
                                Talk to Counselor
                            </button>
                        </div>
                        <div className="flex gap-8 text-lg">
                            <div className="flex items-center gap-3">
                                <Trophy className="w-8 h-8" />
                                <span>94% Placement Rate</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users2 className="w-8 h-8" />
                                <span>15,000+ Placed</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10">
                            <h3 className="text-3xl font-bold mb-6">Get Free Career Counselling</h3>
                            <LeadForm
                                title="Get Free Career Counselling"
                                subtitle=""
                                buttonText="Yes! Book My Free Session"
                                showCourse={true}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}