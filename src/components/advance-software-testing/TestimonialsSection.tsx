'use client';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

type Testimonial = {
    name: string;
    role: string;
    rating: number;
    text: string;
};

const testimonials: Testimonial[] = [
    { name: 'Rohan Desai', role: 'SDET at Accenture', rating: 5, text: 'Got ₹12 LPA offer in 30 days. The CI/CD project sealed the deal!' },
    { name: 'Priya Mehta', role: 'Automation Lead, Wipro', rating: 5, text: 'From manual to SDET in 25 hours. Best investment!' },
    { name: 'Arjun Nair', role: 'Fresher → Infosys', rating: 5, text: 'Appium + Selenium mastery helped me crack 4 interviews.' },
];

// light, non-repeating accents for each card (no heavy gradients)
const accents = [
    { ring: 'ring-sky-200', chipBg: 'bg-sky-600', chipText: 'text-white', name: 'text-sky-900', role: 'text-sky-700' },
    { ring: 'ring-emerald-200', chipBg: 'bg-emerald-600', chipText: 'text-white', name: 'text-emerald-900', role: 'text-emerald-700' },
    { ring: 'ring-amber-200', chipBg: 'bg-amber-600', chipText: 'text-white', name: 'text-amber-900', role: 'text-amber-700' },
];

function Stars({ count = 5 }: { count?: number }) {
    return (
        <div className="flex" aria-label={`${count} star rating`}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    // SEO: Review + AggregateRating
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Advanced Testing Student Testimonials',
        itemListElement: testimonials.map((t, i) => ({
            '@type': 'Review',
            position: i + 1,
            author: { '@type': 'Person', name: t.name },
            reviewBody: t.text,
            reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 },
            itemReviewed: { '@type': 'Course', name: 'Advanced Software Testing / SDET Program' },
        })),
    };

    const aggregate = {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        itemReviewed: { '@type': 'Course', name: 'Advanced Software Testing / SDET Program' },
        ratingValue: '5.0',
        reviewCount: testimonials.length.toString(),
        bestRating: '5',
        worstRating: '1',
    };

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-8 md:py-10 bg-white">
            {/* Subtle separators for a clean, light, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center text-ST font-bold mb-4">
                    Success Stories
                </h2>

                {/* Grid */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => {
                        const a = accents[i % accents.length];
                        const initials = t.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')
                            .toUpperCase();

                        return (
                            <motion.article
                                key={t.name}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                                className={[
                                    'group relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6',
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md',
                                    'focus-within:ring-2 focus-within:ring-offset-2',
                                    a.ring,
                                ].join(' ')}
                            >
                                {/* top row */}
                                <div className="mb-4 flex items-center justify-between">
                                    <Stars count={t.rating} />
                                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${a.chipBg} ${a.chipText}`}>
                                        Verified
                                    </span>
                                </div>

                                {/* quote */}
                                <blockquote className="relative">
                                    <Quote className="absolute -left-1 -top-1 h-4 w-4 text-slate-300" aria-hidden="true" />
                                    <p className="pl-5 text-sm leading-relaxed text-slate-700 italic">“{t.text}”</p>
                                </blockquote>

                                {/* author */}
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                                        {initials}
                                    </div>
                                    <div>
                                        <div className={`text-sm font-semibold ${a.name}`}>{t.name}</div>
                                        <div className={`text-xs ${a.role}`}>{t.role}</div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* SEO-supportive copy */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Alumni highlight <strong>CI/CD automation</strong>, <strong>Appium & Selenium mastery</strong>, and{' '}
                    <strong>framework design</strong> as key differentiators in interviews—backed by portfolio projects and
                    evidence-rich reports.
                </p>
            </div>

            {/* JSON-LD for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregate) }}
            />
        </section>
    );
}
