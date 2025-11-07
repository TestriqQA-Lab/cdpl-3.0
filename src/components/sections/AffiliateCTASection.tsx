"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type React from "react";

// Strongly-typed CSS variable helper
type CSSVarStyles<T extends string> = React.CSSProperties & Record<T, string>;

export default function AffiliateCTASection() {
    // Provide typed CSS vars (fixes no-explicit-any)
    const vars: CSSVarStyles<
        "--labelBg" | "--labelText" | "--titleColor" | "--btnBg" | "--btnText"
    > = {
        // Distinct solids (no gradients)
        "--labelBg": "rgb(255, 140, 0)",   // label/tag: vivid orange
        "--labelText": "rgb(255, 255, 255)",
        "--titleColor": "rgb(0, 105, 168)", // title: deep blue
        "--btnBg": "rgb(222, 247, 236)",    // button: light (not white) mint
        "--btnText": "rgb(6, 95, 70)",      // readable dark teal
    };

    return (
        <div
            id="apply"
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 sm:p-12 shadow-[0_16px_45px_-24px_rgba(2,6,23,0.25)]"
            style={vars}
        >
            {/* Solid label/tag (distinct color) */}
            <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "var(--labelBg)", color: "var(--labelText)" }}
            >
                <Sparkles className="h-4 w-4" />
                Ready to earn with CDPL?
            </div>

            {/* Solid title (different color from label & button) */}
            <h2
                className="mt-4 text-3xl font-bold tracking-tight"
                style={{ color: "var(--titleColor)" }}
            >
                Become a CDPL affiliate today
            </h2>

            <p className="mt-2 max-w-2xl text-slate-600">
                Apply in minutes. If approved, you’ll receive your dashboard, referral
                links, and ready-to-ship content to start earning right away.
            </p>

            {/* Solid button (light, non-white, different from label & title) */}
            <div className="mt-6">
                <Link
                    href="/apply-affiliate"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    style={{ backgroundColor: "var(--btnBg)", color: "var(--btnText)" }}
                >
                    Apply now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </div>
    );
}
