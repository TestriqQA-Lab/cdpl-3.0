'use client';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
    { title: 'Selenium 4 + WebDriverIO', topics: ['Grid', 'Docker', 'AI Locators', 'Parallel Execution'] },
    { title: 'Cypress + Playwright', topics: ['E2E + Component', 'API Testing', 'Visual Regression', 'Flaky Test Fix'] },
    { title: 'AI & ML in Testing', topics: ['Testim', 'Mabl', 'Applitools', 'Self-Healing Scripts'] },
    { title: 'CI/CD & DevOps', topics: ['Jenkins', 'GitHub Actions', 'Kubernetes', 'Canary Testing'] },
    { title: 'Performance & Security', topics: ['k6', 'Gatling', 'OWASP ZAP', 'Chaos Engineering'] },
    { title: 'Capstone: Netflix Clone', topics: ['Full Automation Suite', 'AI Monitoring', '99.9% Coverage', 'Live Dashboard'] },
];

// Distinct, non-repeating accent palette (light theme, sleek; no heavy gradients)
const accents = [
    { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-700', badgeText: 'text-white', ink: 'text-sky-900', icon: 'text-sky-700' },
    { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-700', badgeText: 'text-white', ink: 'text-emerald-900', icon: 'text-emerald-700' },
    { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', badgeBg: 'bg-amber-700', badgeText: 'text-white', ink: 'text-amber-900', icon: 'text-amber-700' },
    { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', badgeBg: 'bg-violet-700', badgeText: 'text-white', ink: 'text-violet-900', icon: 'text-violet-700' },
    { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-700', badgeText: 'text-white', ink: 'text-rose-900', icon: 'text-rose-700' },
    { cardBg: 'bg-indigo-50', cardBorder: 'border-indigo-200', badgeBg: 'bg-indigo-700', badgeText: 'text-white', ink: 'text-indigo-900', icon: 'text-indigo-700' },
];

export default function CurriculumSection() {
    // SEO: structured data as a Course + ItemList
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Elite Automation Testing Curriculum',
        description:
            'Advanced SDET curriculum covering Selenium 4, WebDriverIO, Cypress, Playwright, AI testing, CI/CD, Kubernetes, performance & security, and a production-grade capstone.',
        itemListElement: curriculum.map((m, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: { '@type': 'Course', name: m.title, description: m.topics.join(', ') },
        })),
    };

    return (
        <section id="curriculum" className="relative py-4 md:py-10 bg-white">
            {/* Subtle top/bottom separators for a futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
                    Elite <span className='text-ST'>Automation Testing</span> Curriculum
                </h2>

                {/* Intro copy for SEO */}
                <p className="mx-auto mt-2 mb-8 max-w-3xl text-center text-sm sm:text-base text-slate-600">
                    Learn <strong>Selenium 4</strong>, <strong>WebDriverIO</strong>, <strong>Cypress</strong>, <strong>Playwright</strong>,
                    AI-assisted testing, <strong>CI/CD</strong> with <em>Jenkins & GitHub Actions</em>, and resilient frameworks for
                    <strong> performance</strong> & <strong>security</strong>—culminating in a <em>Netflix-style capstone</em> you’ll showcase in interviews.
                </p>

                {/* Responsive grid */}
                <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {curriculum.map((mod, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <motion.li
                                key={mod.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                className={[
                                    'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                                    a.cardBg,
                                    a.cardBorder,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* Left index badge (kept left so headings never hide on mobile) */}
                                <div
                                    className={[
                                        'absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-xl text-sm font-bold shadow-sm',
                                        a.badgeBg,
                                        a.badgeText,
                                    ].join(' ')}
                                    aria-hidden="true"
                                >
                                    {i + 1}
                                </div>

                                {/* Title & topics with left padding to avoid overlap at small widths */}
                                <div className="pl-14">
                                    <h3 className={['mb-3 text-lg sm:text-xl font-semibold leading-tight', a.ink].join(' ')}>
                                        {mod.title}
                                    </h3>

                                    <ul className="grid gap-2.5 sm:grid-cols-2">
                                        {mod.topics.map((t) => (
                                            <li key={t} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                                                <span className="text-sm">{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Outcome microcopy */}
                                    <p className="mt-4 text-xs text-slate-500">
                                        Outcome: hands-on labs, code reviews, and a take-home project to validate real-world skills.
                                    </p>
                                </div>
                            </motion.li>
                        );
                    })}
                </ol>

                {/* Bottom mini-CTAs (non-repeating colors) */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="contact-us"
                        className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
                    >
                        Book a Free Demo
                    </Link>
                    <button
                        className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        Get Syllabus PDF
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-xl border-2 border-violet-700 bg-white px-4 py-2 text-sm font-semibold text-violet-800 shadow-sm transition hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-violet-200"
                    >
                        View Capstone
                    </button>
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
