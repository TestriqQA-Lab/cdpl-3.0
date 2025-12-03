'use client';

import { motion } from 'framer-motion';
import { features } from '@/components/software-testing-course/data/data';

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold">Why Students <span className="text-orange-500">Choose</span> Cinute Digital</h2>
                    <p className="mt-6 text-xl text-gray-600">We don’t just teach. We build careers.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100 text-center">
                            <f.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                            <p className="text-gray-600">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}