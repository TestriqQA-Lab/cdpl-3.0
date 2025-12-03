'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '@/components/software-testing-course/data/data';

export default function PricingSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold">Choose Your Plan</h2>
                    <p className="mt-4 text-xl text-gray-600">One-time payment • 0% EMI available</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-8 shadow-xl border-2 transition-all ${plan.popular ? 'border-orange-500 bg-orange-50 scale-105' : 'border-gray-200 bg-white'
                                }`}
                        >
                            {plan.popular && (
                                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold absolute -top-4 left-1/2 -translate-x-1/2">
                                    MOST POPULAR
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-5xl font-bold mb-4">
                                ₹{plan.price.toLocaleString()}
                                <span className="text-lg font-normal text-gray-600">/{plan.duration}</span>
                            </p>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-4 rounded-xl font-bold text-lg transition ${plan.popular
                                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                                    }`}
                            >
                                Enroll Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}