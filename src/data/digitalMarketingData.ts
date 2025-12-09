export type DigitalMarketingFaq = {
    question: string;
    answer: string;
    accent: {
        ring: string;
        border: string;
        chip: string;
    };
};

export const DIGITAL_MARKETING_FAQS: DigitalMarketingFaq[] = [
    {
        question: 'Is prior experience required?',
        answer: 'No. The program starts from fundamentals and scales to advanced, portfolio-ready work. If you have experience, you’ll move faster through labs and capstones.',
        accent: { ring: 'focus:ring-sky-300', border: 'border-sky-200', chip: 'bg-sky-100 text-sky-800' },
    },
    {
        question: 'Do you provide placement support?',
        answer: 'Yes — end-to-end job assistance: resume & LinkedIn review, mock interviews, take-home assignment prep, and curated job alerts with referrals where available.',
        accent: { ring: 'focus:ring-emerald-300', border: 'border-emerald-200', chip: 'bg-emerald-100 text-emerald-800' },
    },
    {
        question: 'Are certificates globally recognized?',
        answer: 'Certificates are QR-verified and accepted by top employers. We also help you showcase project outcomes and metrics on your portfolio for higher credibility.',
        accent: { ring: 'focus:ring-amber-300', border: 'border-amber-200', chip: 'bg-amber-100 text-amber-900' },
    },
    {
        question: 'What is the learning format & schedule?',
        answer: 'Live cohort sessions with lifetime recording access. Batches are weekend-friendly. Doubt-clearing, code reviews, and project feedback are included.',
        accent: { ring: 'focus:ring-violet-300', border: 'border-violet-200', chip: 'bg-violet-100 text-violet-900' },
    },
    {
        question: 'Will I work on real projects?',
        answer: 'Absolutely. You’ll complete production-style assignments, audits, dashboards, and campaign builds that translate directly to interview talking points.',
        accent: { ring: 'focus:ring-rose-300', border: 'border-rose-200', chip: 'bg-rose-100 text-rose-900' },
    },
];

export const DIGITAL_MARKETING_REVIEW_DATA = {
    ratingValue: 4.8,
    reviewCount: 200,
};
