'use client';
import ReviewsMarquee from '../sections/ReviewMarque';

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

                <ReviewsMarquee />

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
