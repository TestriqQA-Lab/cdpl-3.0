'use client';
import { ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react';
import { useEffect, useId, useMemo, useState } from 'react';

type Faq = { q: string; a: string; tag?: string };

const RAW_FAQS: Faq[] = [
    {
        q: 'Do I need coding?',
        a: 'Basic JavaScript or Python helps, but we start from first principles with clear examples, labs, and mentor feedback.',
        tag: 'Getting Started',
    },
    {
        q: 'Will I get ISTQB?',
        a: 'Yes. We include ISTQB Foundation & Advanced prep, exam strategy, and practice tests mapped to the official syllabus.',
        tag: 'Certification',
    },
    {
        q: 'Duration?',
        a: '30 hours of live, mentor-led classes plus lifetime access to recordings, handouts, and code repositories.',
        tag: 'Schedule',
    },
    {
        q: 'Placement?',
        a: '100% job assistance: resume revamp, interview drills, LinkedIn optimization, and FAANG-style problem practice.',
        tag: 'Careers',
    },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);
    const [query, setQuery] = useState('');
    const sectionId = useId();

    void setQuery;

    // simple client-side search (title + answer + tag)
    const faqs = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return RAW_FAQS;
        return RAW_FAQS.filter(
            f =>
                f.q.toLowerCase().includes(q) ||
                f.a.toLowerCase().includes(q) ||
                (f.tag && f.tag.toLowerCase().includes(q))
        );
    }, [query]);

    // Distinct light accents per card (no heavy gradients)
    const accents = [
        { wrap: 'bg-sky-50 border-sky-200', ink: 'text-sky-900', chip: 'bg-sky-100 text-sky-800' },
        { wrap: 'bg-emerald-50 border-emerald-200', ink: 'text-emerald-900', chip: 'bg-emerald-100 text-emerald-800' },
        { wrap: 'bg-amber-50 border-amber-200', ink: 'text-amber-900', chip: 'bg-amber-100 text-amber-800' },
        { wrap: 'bg-violet-50 border-violet-200', ink: 'text-violet-900', chip: 'bg-violet-100 text-violet-800' },
    ];

    // SEO JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: RAW_FAQS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    // ensure open index stays valid after filtering
    useEffect(() => {
        if (open !== null && (open < 0 || open > faqs.length - 1)) setOpen(null);
    }, [faqs.length, open]);

    return (
        <section
            id="faq"
            aria-labelledby={`${sectionId}-heading`}
            className="relative py-8 md:py-14 bg-white"
        >
            {/* subtle frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center text-ST font-bold mb-4">
                    Frequently Asked Questions
                </h2>

                <p className='text-center text-slate-600'>Clear answers about the program, certification, timeline, and job assistance</p>


                {/* FAQ list */}
                <div className="space-y-4 mt-8">
                    {faqs.length === 0 && (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                            No results—try a different search term.
                        </div>
                    )}

                    {faqs.map((faq, i) => {
                        const a = accents[i % accents.length];
                        const idx = i;
                        const isOpen = open === idx;
                        const panelId = `${sectionId}-panel-${idx}`;
                        const buttonId = `${sectionId}-button-${idx}`;

                        return (
                            <div
                                key={faq.q}
                                className={[
                                    'rounded-2xl border transition',
                                    a.wrap,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                                    isOpen ? 'ring-2 ring-slate-200' : 'hover:shadow-md',
                                ].join(' ')}
                            >
                                <h3 className="m-0">
                                    <button
                                        id={buttonId}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpen(isOpen ? null : idx)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setOpen(isOpen ? null : idx);
                                            }
                                            // Arrow navigation
                                            if (e.key === 'ArrowDown') setOpen(Math.min((open ?? -1) + 1, faqs.length - 1));
                                            if (e.key === 'ArrowUp') setOpen(Math.max((open ?? faqs.length) - 1, 0));
                                        }}
                                        className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4"
                                    >
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <HelpCircle className={`h-5 w-5 flex-shrink-0 ${a.ink}`} />
                                                <span className={`truncate font-semibold ${a.ink}`}>{faq.q}</span>
                                                {faq.tag && (
                                                    <span className={`ml-2 hidden sm:inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${a.chip}`}>
                                                        {faq.tag}
                                                    </span>
                                                )}
                                            </div>
                                            {/* micro copy for SEO */}
                                            <span className="mt-1 block text-xs text-slate-600">
                                                Learn about eligibility, certifications, training hours, and placement support.
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={[
                                                'h-5 w-5 shrink-0 transition-transform text-slate-600',
                                                isOpen ? 'rotate-180' : '',
                                            ].join(' ')}
                                        />
                                    </button>
                                </h3>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={[
                                        'grid transition-all duration-300 ease-out',
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                                    ].join(' ')}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 sm:px-6 pb-5 text-slate-700 text-sm leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* soft CTA help row */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                        href="mailto:contact@cinutedigital.com"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-900 hover:bg-indigo-100 transition"
                    >
                        <Mail className="h-5 w-5" />
                        Still have questions? Email support
                    </a>
                    <a
                        href="tel:+917888383788"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition"
                    >
                        <Phone className="h-5 w-5" />
                        Talk to an advisor: +91 788-83-83-788
                    </a>
                </div>
            </div>

            {/* JSON-LD (SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
