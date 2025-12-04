'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { batches } from '@/components/software-testing-course/data/data';

export default function BatchesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-16"
                >
                    Upcoming Batches
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {batches.map((batch, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-8 text-center"
                        >
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <p className="text-2xl font-bold">{batch.type}</p>
                            <p className="text-4xl font-bold text-orange-600 my-4">{batch.start}</p>
                            <p className="text-lg font-semibold text-red-600">Only {batch.seats} Seats Left!</p>
                            <p className="mt-4 text-gray-600 text-sm">{batch.instructor}</p>
                            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition">
                                Reserve My Seat
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}