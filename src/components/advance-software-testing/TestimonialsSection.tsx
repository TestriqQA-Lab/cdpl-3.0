'use client';

import ReviewsMarquee from '../sections/ReviewMarque';

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

                <ReviewsMarquee />

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
