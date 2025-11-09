'use client';
import ReviewsMarquee from '../sections/ReviewMarque';

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
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-8 sm:py-10 bg-slate-50">
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

                <ReviewsMarquee />

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
