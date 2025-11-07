'use client';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

type Testimonial = {
    name: string;
    role: string;
    rating: number;
    text: string;
    accent: {
        cardBg: string;
        cardBorder: string;
        ink: string;
        chipBg: string;
        chipText: string;
    };
    avatarBg: string;
};

const testimonials: Testimonial[] = [
    {
        name: 'Priya Sharma',
        role: 'API Tester at TCS',
        rating: 5,
        text:
            'Landed my dream job within 30 days of completion. The OWASP project and Postman workflows were game-changers!',
        accent: {
            cardBg: 'bg-sky-50',
            cardBorder: 'border-sky-200',
            ink: 'text-sky-900',
            chipBg: 'bg-sky-100',
            chipText: 'text-sky-800',
        },
        avatarBg: 'bg-sky-200',
    },
    {
        name: 'Rahul Verma',
        role: 'QA Engineer, Infosys',
        rating: 5,
        text:
            'Best investment in my career. Practical REST/GraphQL testing + CI/CD helped me crack 3 interviews.',
        accent: {
            cardBg: 'bg-amber-50',
            cardBorder: 'border-amber-200',
            ink: 'text-amber-900',
            chipBg: 'bg-amber-100',
            chipText: 'text-amber-800',
        },
        avatarBg: 'bg-amber-200',
    },
    {
        name: 'Ananya Patel',
        role: 'Fresher → Wipro',
        rating: 5,
        text:
            'From non-tech to API tester in 15 hours. Schema validation, automation scripts, and mock interviews were super helpful.',
        accent: {
            cardBg: 'bg-emerald-50',
            cardBorder: 'border-emerald-200',
            ink: 'text-emerald-900',
            chipBg: 'bg-emerald-100',
            chipText: 'text-emerald-800',
        },
        avatarBg: 'bg-emerald-200',
    },
];

export default function TestimonialsSection() {
    // JSON-LD (reviews + aggregate rating)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product', // representing the course
        name: 'API Testing Course (Postman, REST, GraphQL)',
        description:
            'Hands-on API testing training covering Postman, REST, GraphQL, JSON Schema, automation, CI/CD, and OWASP API security.',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: String(testimonials.length),
            bestRating: '5',
            worstRating: '1',
        },
        review: testimonials.map((t) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: t.name },
            reviewBody: t.text,
            reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5', worstRating: '1' },
            itemReviewed: { '@type': 'Course', name: 'API Testing Course' },
        })),
    };

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-8 sm:py-10 bg-white">
            {/* subtle top/bottom separators for a clean, futuristic frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-slate-900 text-center font-bold mb-4">
                    Success <span className='text-ST'>Stories</span>
                </h2>

                {/* SEO-supportive intro line */}
                <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
                    Real reviews from professionals who mastered <strong>Postman</strong>, <strong>REST/GraphQL</strong>,{' '}
                    <strong>JSON Schema validation</strong>, <strong>CI/CD</strong>, and <strong>OWASP API security</strong>.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                            className={[
                                'relative overflow-hidden rounded-2xl border p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:translate-y-1.5 transition-all ease-in-out duration-300',
                                t.accent.cardBg,
                                t.accent.cardBorder,
                            ].join(' ')}
                        >
                            {/* decorative quote & avatar */}
                            <div className="mb-5 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={[
                                            'grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-slate-800',
                                            t.avatarBg,
                                        ].join(' ')}
                                        aria-hidden="true"
                                        title={t.name}
                                    >
                                        {t.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .slice(0, 2)
                                            .join('')
                                            .toUpperCase()}
                                    </div>
                                    <figcaption>
                                        <div className={['text-sm font-semibold', t.accent.ink].join(' ')}>{t.name}</div>
                                        <div className="text-xs text-slate-600">{t.role}</div>
                                    </figcaption>
                                </div>
                                <Quote className="h-6 w-6 text-slate-300" aria-hidden="true" />
                            </div>

                            {/* rating */}
                            <div className="mb-3 flex items-center" aria-label={`Rating: ${t.rating} out of 5`}>
                                {Array.from({ length: t.rating }).map((_, idx) => (
                                    <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                                ))}
                                <span className="ml-2 text-xs font-medium text-slate-600">5.0</span>
                            </div>

                            {/* text */}
                            <blockquote className="text-slate-800">
                                <p className="text-sm leading-relaxed">
                                    “{t.text}”
                                </p>
                            </blockquote>

                            {/* chips */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {['Postman', 'REST', 'GraphQL', 'CI/CD'].map((chip) => (
                                    <span
                                        key={chip}
                                        className={[
                                            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
                                            t.accent.chipBg,
                                            t.accent.chipText,
                                            t.accent.cardBorder,
                                        ].join(' ')}
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </motion.figure>
                    ))}
                </div>

                {/* supportive SEO line */}
                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        Showcase verified outcomes on your portfolio: <strong>coverage reports</strong>,{' '}
                        <strong>response-time benchmarks</strong>, and <strong>secure API workflows</strong> integrated with{' '}
                        <strong>GitHub Actions</strong> or <strong>Jenkins</strong>.
                    </p>
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
