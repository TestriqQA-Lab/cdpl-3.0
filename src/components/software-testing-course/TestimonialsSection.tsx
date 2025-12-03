'use client';

import { motion } from 'framer-motion';
import ReviewsMarquee from '@/components/sections/ReviewMarque';

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-white p-2 lg:p-8 rounded-2xl shadow-xl border border-orange-100"
                >
                    <ReviewsMarquee />
                </motion.div>
            </div>
        </section>
    );
}