"use client";

import { useState } from "react";

const FAQ = [
    { q: "Do you support remote work?", a: "Yes. Several roles are Remote (India). For hybrid roles, we meet in Bengaluru for collaboration weeks." },
    { q: "How long does the process take?", a: "We aim for 1–2 weeks end-to-end, depending on schedules and role seniority." },
    { q: "What should I include in my application?", a: "A brief note about why CDPL, links to portfolio/GitHub/LinkedIn, and outcomes you’re proud of." },
    { q: "Do you hire interns or freshers?", a: "Yes. We value potential and craft. Our Student Success and Engineering teams often hire 0–1 yr talent." },
];

export default function JobsCareersFAQSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <header className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQs</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-600">Everything you need to know.</p>
                </header>

                <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white dark:divide-gray-200 dark:border-gray-200 dark:bg-white">
                    {FAQ.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <li key={i}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                                >
                                    <span className="text-sm sm:text-base font-semibold">{item.q}</span>
                                    <span className="ml-4 text-gray-500 dark:text-gray-500">{isOpen ? "–" : "+"}</span>
                                </button>
                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-5 -mt-2">
                                        <p className="text-sm text-gray-700 dark:text-gray-700">{item.a}</p>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
