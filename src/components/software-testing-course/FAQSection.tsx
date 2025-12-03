'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

                <div className="max-w-4xl mx-auto space-y-6">
                    {faqs?.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-orange-50 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.q}</span>
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform duration-300 ${activeFAQ === i ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* AnimatePresence + layout for smooth height animation */}
                            <AnimatePresence initial={false}>
                                {activeFAQ === i && (
                                    <motion.div
                                        key="content"
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ opacity: { duration: 0.24, ease: 'easeInOut' }, layout: { duration: 0.32, ease: 'easeInOut' } }}
                                        className="overflow-hidden"
                                    >
                                        {/* inner element also uses layout so Framer can compute the size smoothly */}
                                        <motion.div layout className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
