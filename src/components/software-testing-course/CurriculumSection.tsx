'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { curriculum } from '@/components/software-testing-course/data/data';

export default function CurriculumSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold">Course Curriculum</h2>
                    <p className="mt-4 text-xl text-gray-600">260+ Hours • 100% Job-Oriented • Updated 2025</p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-4">
                    {curriculum.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-6 hover:bg-orange-50 transition cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{module.title}</h3>
                                        <p className="text-gray-600">{module.weeks} • {module.hours} hours</p>
                                    </div>
                                </div>
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}