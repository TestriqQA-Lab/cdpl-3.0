// src/components/sections/LocationsBenefitsSection.tsx
"use client";

import type { ComponentType } from "react";
import {
  Globe2,
  Briefcase,
  Layers,
  Smartphone,
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

type Benefit = { icon: IconType; title: string; desc: string };

export default function LocationsBenefitsSection({
  sectionClassName = "",
  containerClassName = "",
}: {
  /** Extra classes for the full-width outer section */
  sectionClassName?: string;
  /** Extra classes appended to the constrained container */
  containerClassName?: string;
}) {
  const benefits: Benefit[] = [
    { icon: Globe2, title: "Nationwide Reach", desc: "Courses in 50+ cities across 5 states." },
    { icon: Briefcase, title: "92% Placement", desc: "Job assistance in local tech hubs." },
    { icon: Layers, title: "Flexible Modes", desc: "Online, offline, hybrid learning options." },
    { icon: Smartphone, title: "Mobile-First", desc: "Access materials anytime, anywhere." },
  ];

  // Clean, soft, modern palettes per card (in order)
  const palettes = [
    // Indigo → Purple
    "bg-gradient-to-br from-indigo-50 to-purple-50 ring-indigo-100",
    // Emerald → Teal
    "bg-gradient-to-br from-emerald-50 to-teal-50 ring-emerald-100",
    // Sky → Cyan
    "bg-gradient-to-br from-sky-50 to-cyan-50 ring-sky-100",
    // Amber → Rose
    "bg-gradient-to-br from-amber-50 to-rose-50 ring-amber-100",
  ] as const;

  // Matching icon accent chips (subtle, airy)
  const chipRings = [
    "ring-indigo-200",
    "ring-emerald-200",
    "ring-sky-200",
    "ring-amber-200",
  ] as const;

  const titleText = [
    "text-indigo-900",
    "text-emerald-900",
    "text-sky-900",
    "text-amber-900",
  ] as const;

  const descText = [
    "text-indigo-700/90",
    "text-emerald-700/90",
    "text-sky-700/90",
    "text-amber-700/90",
  ] as const;

  return (
    <section className={`w-full ${sectionClassName}`}>
      {/* Constrained container as requested */}
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="grid gap-6 text-center md:grid-cols-4">
          <h2 className="col-span-full text-3xl font-bold text-gray-900">
            Why Choose Our Locations?
          </h2>

          {benefits.map((b, i) => {
            const Palette = palettes[i % palettes.length];
            const ChipRing = chipRings[i % chipRings.length];
            const TitleClr = titleText[i % titleText.length];
            const DescClr = descText[i % descText.length];
            const Icon = b.icon;

            return (
              <div
                key={b.title}
                className={[
                  "group rounded-2xl p-6 shadow-sm transition-all",
                  "hover:shadow-lg hover:-translate-y-0.5",
                  "ring-1", // pairs with palette ring-*-100
                  Palette,
                ].join(" ")}
              >
                <div
                  className={[
                    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl",
                    "bg-white/70 backdrop-blur",
                    "ring-1", ChipRing,
                    "shadow-sm",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7 text-gray-800/90" />
                </div>

                <h3 className={`mb-2 font-semibold ${TitleClr}`}>{b.title}</h3>
                <p className={`mx-auto max-w-[22ch] ${DescClr}`}>{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
