'use client';

import { motion } from 'framer-motion';
import type { FC } from 'react';

import { features } from '@/components/DS&ML-Courses/data/data';


// 🎨 BEAUTIFUL UNIQUE COLOR PALETTES FOR EACH CARD
const colorThemes = [
    {
        bg: "from-orange-50 to-orange-100",
        icon: "text-orange-600",
        text: "text-orange-700",
    },
    {
        bg: "from-blue-50 to-blue-100",
        icon: "text-blue-600",
        text: "text-blue-700",
    },
    {
        bg: "from-purple-50 to-purple-100",
        icon: "text-purple-600",
        text: "text-purple-700",
    },
    {
        bg: "from-emerald-50 to-emerald-100",
        icon: "text-emerald-600",
        text: "text-emerald-700",
    },
    {
        bg: "from-rose-50 to-rose-100",
        icon: "text-rose-600",
        text: "text-rose-700",
    },
    {
        bg: "from-amber-50 to-amber-100",
        icon: "text-amber-600",
        text: "text-amber-700",
    },
];

const FeatureCard: FC<{ icon: any; title: string; desc: string; theme: any }> = ({
    icon: Icon,
    title,
    desc,
    theme,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative group bg-gradient-to-br ${theme.bg} border p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300`}
            aria-label={title}
        >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/70 border border-white/50 backdrop-blur-sm mx-auto mb-4 shadow-sm">
                <Icon className={`w-7 h-7 ${theme.icon}`} />
            </div>

            <h3 className={`text-lg font-semibold text-center mb-2 ${theme.text}`}>{title}</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed">{desc}</p>

            {/* underline hover effect */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-3 w-10 h-0.5 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Why Students <span className="text-orange-500">Choose</span> Cinute Digital
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                        Industry-focused Data Science & Machine Learning training — hands-on projects,
                        production-grade tooling, and end-to-end career support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FeatureCard
                            key={i}
                            icon={f.icon}
                            title={f.title}
                            desc={f.desc}
                            theme={colorThemes[i % colorThemes.length]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
