'use client';
import { CheckCircle, Clock, Award, Layers } from 'lucide-react';
import Link from 'next/link';


type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
    {
        title: 'Selenium WebDriver Mastery',
        topics: ['Page Object Model', 'TestNG/JUnit', 'Data-Driven', 'Parallel Execution'],
    },
    {
        title: 'API Testing with REST Assured',
        topics: ['Request/Response', 'Authentication', 'JSONPath', 'Contract Testing'],
    },
    {
        title: 'Mobile Testing with Appium',
        topics: ['Android/iOS Setup', 'Gestures', 'Hybrid Apps', 'Cloud Testing'],
    },
    {
        title: 'Cypress & Playwright',
        topics: ['E2E Testing', 'Component Testing', 'Visual Testing', 'CI/CD Integration'],
    },
    {
        title: 'Performance & Security',
        topics: ['JMeter Basics', 'Load Testing', 'OWASP ZAP', 'SQL Injection Testing'],
    },
    {
        title: 'Capstone Project',
        topics: ['Full-Stack E-Commerce App', 'CI/CD Pipeline', 'Automated Regression', 'Defect Reporting'],
    },
];

// Distinct light accents (no heavy gradients, no color repetition)
const accents = [
    { card: 'bg-sky-50 border-sky-200', ink: 'text-sky-900', badge: 'bg-sky-600 text-white', icon: 'text-sky-700' },
    { card: 'bg-amber-50 border-amber-200', ink: 'text-amber-900', badge: 'bg-amber-600 text-white', icon: 'text-amber-700' },
    { card: 'bg-emerald-50 border-emerald-200', ink: 'text-emerald-900', badge: 'bg-emerald-600 text-white', icon: 'text-emerald-700' },
    { card: 'bg-violet-50 border-violet-200', ink: 'text-violet-900', badge: 'bg-violet-600 text-white', icon: 'text-violet-700' },
    { card: 'bg-rose-50 border-rose-200', ink: 'text-rose-900', badge: 'bg-rose-600 text-white', icon: 'text-rose-700' },
    { card: 'bg-indigo-50 border-indigo-200', ink: 'text-indigo-900', badge: 'bg-indigo-600 text-white', icon: 'text-indigo-700' },
];

export default function CurriculumSection() {
    // SEO: structured data for the curriculum
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Advanced Software Testing Curriculum',
        description:
            'SDET curriculum covering Selenium, REST Assured, Appium, Cypress, Playwright, JMeter, OWASP ZAP, CI/CD and an automation capstone.',
        itemListElement: curriculum.map((m, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: m.title,
            item: {
                '@type': 'Course',
                name: m.title,
                description: m.topics.join(', '),
            },
        })),
    };

    return (
        <section id="curriculum" className="relative py-8 md:py-10 bg-white">
            {/* Subtle frame for futuristic feel */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
                    Industry-Ready <span className='text-ST'>Advanced Software Testing</span> Curriculum
                </h2>
                {/* SEO-supportive intro row */}
                <div className="mx-auto mt-6 mb-8 grid max-w-4xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                    <p className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-slate-500" /> Framework design & best practices
                    </p>
                    <p className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-slate-500" /> Portfolio-ready automation suites
                    </p>
                    <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" /> 25 hours • mentor-led • hands-on
                    </p>
                </div>

                {/* Modules grid */}
                <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                    {curriculum.map((mod, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <li
                                key={mod.title}
                                className={[
                                    'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                                    a.card,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* Number badge (kept small & offset so it never overlaps titles on mobile) */}
                                <div
                                    className={[
                                        'absolute right-3 top-3 h-8 w-8 rounded-lg text-sm font-bold grid place-items-center shadow-sm',
                                        a.badge,
                                    ].join(' ')}
                                    aria-hidden="true"
                                >
                                    {i + 1}
                                </div>

                                <h3 className={['pr-12 text-lg sm:text-xl font-semibold leading-tight', a.ink].join(' ')}>
                                    {mod.title}
                                </h3>

                                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                                    {mod.topics.map((t) => (
                                        <li key={t} className="flex items-start gap-2 text-slate-700">
                                            <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                                            <span className="text-sm">{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Outcomes micro-copy */}
                                <p className="mt-4 text-xs text-slate-500">
                                    Outcomes: hands-on labs, assessment checklists, CI/CD integration, and evidence-based reporting.
                                </p>
                            </li>
                        );
                    })}
                </ol>

                {/* Inline CTA (optional anchors on the same page) */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="contact-us"
                        className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    >
                        Book a Free Demo
                    </Link>
                    <button
                        className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        Download Syllabus PDF
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
