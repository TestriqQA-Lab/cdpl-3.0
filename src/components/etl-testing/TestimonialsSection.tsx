'use client';
import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck } from 'lucide-react';


type Testimonial = {
    name: string;
    role: string;
    rating: number;
    text: string;
    // optional avatar initials
    initials?: string;
};

const testimonials: Testimonial[] = [
    { name: 'Neha Gupta', role: 'ETL Tester at Cognizant', rating: 5, text: 'Landed ₹9 LPA job in 20 days. The banking project was a game-changer!', initials: 'NG' },
    { name: 'Vikram Singh', role: 'Data QA, Infosys', rating: 5, text: 'Learned reconciliation queries that saved 40 hours weekly.', initials: 'VS' },
    { name: 'Pooja Rao', role: 'Fresher → TCS', rating: 5, text: 'From BCom to ETL expert. Best career move!', initials: 'PR' },
];

// Distinct, non-repeating accents (no heavy gradients)
const accents = [
    { bg: 'bg-sky-50', border: 'border-sky-200', ink: 'text-sky-900', chip: 'bg-sky-100 text-sky-800 border-sky-200' },
    { bg: 'bg-amber-50', border: 'border-amber-200', ink: 'text-amber-900', chip: 'bg-amber-100 text-amber-900 border-amber-200' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', ink: 'text-emerald-900', chip: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
];

export default function TestimonialsSection() {
    // SEO: Review JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'ETL Testing Student Testimonials',
        itemListElement: testimonials.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Review',
                author: { '@type': 'Person', name: t.name },
                reviewBody: t.text,
                reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 },
            },
        })),
    };

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-8 md:py-10 bg-white">
            {/* subtle separators for a clean, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* mini trust badge */}
                <p className="mx-auto mt-2 mb-4 max-w-2xl text-center text-xs sm:text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1 shadow-md rounded-full border border-slate-200 bg-white px-2.5 py-1">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        Verified student feedback • Outcomes-based learning
                    </span>
                </p>

                <h2 className="text-3xl md:text-4xl text-ST text-center font-bold mb-4">
                    Success Stories
                </h2>



                <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <motion.figure
                                key={t.name}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                className={[
                                    'relative h-full rounded-2xl border p-6 sm:p-7',
                                    a.bg,
                                    a.border,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* quote icon */}
                                <Quote
                                    aria-hidden
                                    className="absolute right-5 top-5 h-6 w-6 text-slate-300"
                                />

                                {/* rating */}
                                <div className="mb-3 flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* text */}
                                <blockquote className="text-slate-700">
                                    <p className="italic">&ldquo;{t.text}&rdquo;</p>
                                </blockquote>

                                {/* author */}
                                <figcaption className="mt-5 flex items-center gap-3">
                                    {/* avatar initials (accessible, no external images) */}
                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-slate-800 border border-slate-200">
                                        {t.initials ?? t.name.split(' ').map((x) => x[0]).slice(0, 2).join('')}
                                    </div>
                                    <div>
                                        <div className={['font-semibold leading-tight', a.ink].join(' ')}>{t.name}</div>
                                        <div className="text-xs text-slate-600">{t.role}</div>
                                    </div>
                                </figcaption>
                            </motion.figure>
                        );
                    })}
                </div>

                {/* SEO-supportive line */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Real outcomes include <strong>faster placements</strong>, <strong>salary jumps</strong>, and <strong>portfolio-ready projects</strong> in
                    banking, e-commerce, and healthcare data platforms.
                </p>
            </div>

            {/* JSON-LD for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
