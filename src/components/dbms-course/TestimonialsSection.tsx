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
    { name: 'Amit Kumar', role: 'DB Admin at Infosys', rating: 5, text: 'Got placed in 25 days. The e-commerce project is now in my portfolio!' },
    { name: 'Sneha Patel', role: 'Data Analyst, TCS', rating: 5, text: 'Learned query optimization that improved report speed by 8x.' },
    { name: 'Rohan Mehta', role: 'Fresher → Wipro', rating: 5, text: 'From BCom to MySQL expert. Best decision!' },
];

// non-repeating card accents
const accents = [
    { bg: 'bg-sky-50', border: 'border-sky-200', ink: 'text-sky-900', chip: 'bg-sky-100 text-sky-800 border-sky-200' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', ink: 'text-emerald-900', chip: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { bg: 'bg-amber-50', border: 'border-amber-200', ink: 'text-amber-900', chip: 'bg-amber-100 text-amber-900 border-amber-200' },
];

export default function TestimonialsSection() {
    // SEO: Review + AggregateRating
    const avgRating =
        testimonials.reduce((s, t) => s + (t.rating || 0), 0) / (testimonials.length || 1);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product', // you can switch to Course if this is part of a specific course page
        name: 'MySQL Training & Certification',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: avgRating.toFixed(1),
            reviewCount: testimonials.length,
            bestRating: 5,
            worstRating: 1,
        },
        review: testimonials.map((t) => ({
            '@type': 'Review',
            reviewBody: t.text,
            reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 },
            author: { '@type': 'Person', name: t.name },
        })),
    };

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-6 md:py-10 bg-white">
            {/* subtle top/bottom separators for a sleek frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="projects-heading" className="text-3xl md:text-4xl text-center font-bold tracking-tight text-slate-900">
                    Student Success <span className='text-ST'>Stories</span>
                </h2>

                {/* small SEO line */}
                <p className="mx-auto mt-3 mb-8 max-w-3xl text-center text-sm sm:text-base text-slate-600">
                    Read verified reviews highlighting <strong>job placements</strong>, <strong>query optimization</strong>, and
                    <strong> portfolio-ready projects</strong> built during the MySQL course.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <motion.article
                                key={t.name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                className={[
                                    'relative h-full rounded-2xl border bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]',
                                    a.border,
                                ].join(' ')}
                                aria-label={`${t.name} — ${t.role}`}
                            >
                                {/* corner quote mark */}
                                <Quote className="absolute right-5 top-5 h-5 w-5 text-slate-300" aria-hidden="true" />

                                {/* avatar initials + verified chip */}
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={[
                                                'grid h-10 w-10 place-items-center rounded-full border bg-white text-sm font-semibold',
                                                a.border,
                                                a.ink,
                                            ].join(' ')}
                                            aria-hidden="true"
                                        >
                                            {/* initials */}
                                            {t.name
                                                .split(' ')
                                                .map((x) => x[0])
                                                .slice(0, 2)
                                                .join('')
                                                .toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">{t.name}</div>
                                            <div className="text-xs text-slate-600">{t.role}</div>
                                        </div>
                                    </div>

                                    <span
                                        className={[
                                            'hidden sm:inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
                                            a.chip,
                                        ].join(' ')}
                                    >
                                        Verified
                                    </span>
                                </div>

                                {/* star rating */}
                                <div className="mb-3 flex" aria-label={`Rating: ${t.rating} out of 5`}>
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <Star
                                            key={idx}
                                            className={[
                                                'h-5 w-5',
                                                idx < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300',
                                            ].join(' ')}
                                        />
                                    ))}
                                </div>

                                {/* review text */}
                                <p className="text-slate-700 italic">“{t.text}”</p>
                            </motion.article>
                        );
                    })}
                </div>

                {/* aggregate rating pill */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>
                            {avgRating.toFixed(1)} / 5 based on {testimonials.length}+ reviews
                        </span>
                    </div>
                </div>
            </div>

            {/* JSON-LD for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
