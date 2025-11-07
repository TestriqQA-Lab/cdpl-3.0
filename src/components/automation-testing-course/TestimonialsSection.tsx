'use client';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

type Testimonial = {
    name: string;
    role: string;
    text: string;
    rating: number;
    // unique light accents per card (no repeats, no heavy gradients)
    accent: {
        cardBg: string;
        cardBorder: string;
        ink: string;
        chipBg: string;
        chipText: string;
        quote: string;
        star: string;
    };
};

const testimonials: Testimonial[] = [
    {
        name: 'Karan Sharma',
        role: 'SDET at Google',
        rating: 5,
        text:
            'Landed ₹22 LPA role. The AI testing project and CI/CD reporting blew interviewers away!',
        accent: {
            cardBg: 'bg-sky-50',
            cardBorder: 'border-sky-200',
            ink: 'text-sky-900',
            chipBg: 'bg-sky-100',
            chipText: 'text-sky-800',
            quote: 'text-sky-500',
            star: 'text-amber-400',
        },
    },
    {
        name: 'Ananya Iyer',
        role: 'Automation Lead, Microsoft',
        rating: 5,
        text:
            'From manual to SDET in 30 hours. Framework design + Playwright mastery = unreal ROI.',
        accent: {
            cardBg: 'bg-emerald-50',
            cardBorder: 'border-emerald-200',
            ink: 'text-emerald-900',
            chipBg: 'bg-emerald-100',
            chipText: 'text-emerald-800',
            quote: 'text-emerald-500',
            star: 'text-amber-400',
        },
    },
    {
        name: 'Vikrant Rao',
        role: 'Fresher → Amazon',
        rating: 5,
        text:
            'Playwright + Docker Grid + API validation helped me get hired in 15 days.',
        accent: {
            cardBg: 'bg-violet-50',
            cardBorder: 'border-violet-200',
            ink: 'text-violet-900',
            chipBg: 'bg-violet-100',
            chipText: 'text-violet-800',
            quote: 'text-violet-500',
            star: 'text-amber-400',
        },
    },
];

export default function TestimonialsSection() {
    // SEO — structured data for reviews
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'SDET Course Testimonials & Reviews',
        itemListElement: testimonials.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Review',
                author: { '@type': 'Person', name: t.name },
                reviewBody: t.text,
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: t.rating,
                    bestRating: 5,
                },
            },
        })),
    };

    return (
        <section className="relative py-8 md:py-10 bg-white" aria-labelledby="testimonials-heading">
            {/* Subtle rails for a clean, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
                    <span className='text-ST'>SDET</span> Success Storiess
                </h2>

                <motion.ul
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                    aria-live="polite"
                >
                    {testimonials.map((t, i) => (
                        <li key={t.name}>
                            <motion.figure
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                                className={[
                                    'relative h-full overflow-hidden rounded-2xl border p-5 sm:p-6',
                                    t.accent.cardBg,
                                    t.accent.cardBorder,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                                    'hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300 transition',
                                ].join(' ')}
                            >
                                {/* Decorative quote + trust badge */}
                                <div className="flex items-center justify-between">
                                    <Quote className={['h-6 w-6', t.accent.quote].join(' ')} aria-hidden />
                                    <span
                                        className={[
                                            'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                                            t.accent.chipBg,
                                            t.accent.chipText,
                                        ].join(' ')}
                                    >
                                        <ShieldCheck className="h-3.5 w-3.5" />
                                        Verified Review
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="mt-3 flex" aria-label={`Rating: ${t.rating} out of 5`}>
                                    {[...Array(t.rating)].map((_, s) => (
                                        <Star
                                            key={s}
                                            className={['h-5 w-5', t.accent.star].join(' ')}
                                            aria-hidden
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>

                                {/* Review text */}
                                <blockquote className="mt-3">
                                    <p className={['text-sm sm:text-base', 'italic text-slate-700'].join(' ')}>
                                        “{t.text}”
                                    </p>
                                </blockquote>

                                {/* Author */}
                                <figcaption className="mt-5 flex items-start gap-3">
                                    {/* Initials avatar for a friendly, modern touch */}
                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200">
                                        <span className="text-sm font-bold">
                                            {t.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .slice(0, 2)
                                                .join('')
                                                .toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <div className={['text-sm font-semibold', t.accent.ink].join(' ')}>{t.name}</div>
                                        <div className="text-xs text-slate-500">{t.role}</div>
                                    </div>
                                </figcaption>

                                {/* SEO microcopy */}
                                <p className="mt-4 text-[11px] leading-5 text-slate-500">
                                    Highlights: framework design, CI/CD pipelines, visual testing, and AI-assisted automation—skills recruiters shortlist.
                                </p>
                            </motion.figure>
                        </li>
                    ))}
                </motion.ul>

                {/* Supporting SEO copy */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Our alumni showcase <strong>Playwright/Cypress</strong>, <strong>Appium</strong>,{' '}
                    <strong>REST Assured</strong>, and <strong>Docker + Jenkins</strong> projects with clean, reviewed code and
                    <em> measurable impact</em>—a winning combo for SDET interviews.
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
