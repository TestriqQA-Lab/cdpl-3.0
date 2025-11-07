// PlacementsAlumniQuotesSection.tsx
"use client";

import { Star } from "lucide-react";

const QUOTES = [
    { name: "Ananya • QA", text: "Interview prep + project reviews = offer in 3 weeks." },
    { name: "Rahul • Full-Stack", text: "Loved the pace and quality of mentorship." },
    { name: "Sana • Data", text: "Capstone review was the game-changer for me." },
];

export default function PlacementsAlumniQuotesSection() {
    return (
        <div className="py-10 sm:py-12">
            <h3 className="text-lg font-semibold">What Our Alumni Say</h3>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {QUOTES.map((q) => (
                    <div
                        key={q.name}
                        className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                        <div className="flex items-center gap-1 text-[#ffd19e]">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div className="mt-3 text-slate-700">{q.text}</div>
                        <div className="mt-2 text-sm text-slate-500">{q.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
