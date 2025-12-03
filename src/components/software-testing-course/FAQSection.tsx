'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/components/software-testing-course/data/data';

export default function FAQSection() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-orange-50 transition"
                            >
                                <span className="font-semibold text-lg">{faq.q}</span>
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform ${activeFAQ === i ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {activeFAQ === i && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="px-6 pb-6 text-gray-600"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}