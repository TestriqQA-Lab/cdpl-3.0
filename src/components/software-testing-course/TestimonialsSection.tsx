'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/components/software-testing-course/data/data';

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-16"
                >
                    Success Stories That <span className="text-orange-500">Inspire</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-xl border border-orange-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-200 border-2 border-dashed rounded-full w-14 h-14" />
                                <div>
                                    <p className="font-bold">{t.name}</p>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                    <p className="text-orange-600 font-bold">{t.salary}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}