'use client';
import { BadgeCheck } from 'lucide-react';
import ReviewsMarquee from '../sections/ReviewMarque';


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

                <ReviewsMarquee />


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
