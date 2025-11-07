// src/components/sections/ServicesWhyChooseUsSection.tsx
"use client";

import {
    Rocket,
    SlidersHorizontal,
    Hammer,
    LifeBuoy,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type WhyItem = {
    title: string;
    desc: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    bg: string;
    dotColor: string;
    badgeTint: string;
};

const ITEMS: WhyItem[] = [
    {
        title: "Industry Expertise",
        desc: "Senior trainers with 10+ years shipping real products.",
        icon: Rocket,
        bg: "bg-indigo-50",
        dotColor: "rgba(99,102,241,0.18)",
        badgeTint: "text-indigo-700",
    },
    {
        title: "Customized Content",
        desc: "Tailored to your stack, schedule, and business goals.",
        icon: SlidersHorizontal,
        bg: "bg-emerald-50",
        dotColor: "rgba(16,185,129,0.18)",
        badgeTint: "text-emerald-700",
    },
    {
        title: "Hands-On Learning",
        desc: "Labs, capstones, and client-style scenarios.",
        icon: Hammer,
        bg: "bg-sky-50",
        dotColor: "rgba(14,165,233,0.18)",
        badgeTint: "text-sky-700",
    },
    {
        title: "Post-Training Support",
        desc: "Refreshers, guidance, and hiring assistance.",
        icon: LifeBuoy,
        bg: "bg-rose-50",
        dotColor: "rgba(244,63,94,0.18)",
        badgeTint: "text-rose-700",
    },
];

export default function ServicesWhyChooseUsSection() {
    return (
        <section className="py-12 sm:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <header className="mx-auto mb-8 max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Why Teams Choose Our Training
                    </h2>
                    <p className="mt-2 text-slate-600">
                        Clean, focused, and outcomes-driven programs—no fluff.
                    </p>
                </header>

                {/* Uniform-height grid */}
                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {ITEMS.map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-slate-500">
                    ✨ Trusted by teams for measurable outcomes
                </p>
            </div>
        </section>
    );
}

function Card({ title, desc, icon: Icon, bg, dotColor, badgeTint }: WhyItem) {
    return (
        <article
            aria-label={title}
            className={[
                "relative h-full overflow-hidden rounded-3xl",
                "ring-1 ring-slate-200 shadow-sm",
                "transition-shadow duration-200 hover:shadow-md",
                bg,
            ].join(" ")}
        >
            {/* dotted overlay pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `radial-gradient(circle, ${dotColor} 1.1px, transparent 1.1px)`,
                    backgroundSize: "14px 14px",
                }}
            />

            {/* content */}
            <div className="relative z-10 flex h-full min-h-[220px] flex-col p-6 sm:p-7">
                {/* icon badge (solid, minimal) */}
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-white/80 ring-1 ring-slate-200">
                    <Icon className={`h-6 w-6 ${badgeTint}`} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{desc}</p>

                <div className="mt-auto" />
            </div>
        </article>
    );
}
