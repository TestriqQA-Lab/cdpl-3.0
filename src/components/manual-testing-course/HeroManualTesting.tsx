"use client";

import {
    CheckCircle2,
    ChevronRight,
    Download,
    Award,
    Users,
    Clock,
    BriefcaseBusiness,
    GraduationCap,
    Globe2,
    Star,
    ShieldCheck,
    PlayCircle,
    Sparkles,
    Home,
} from "lucide-react";
import React, { type ReactNode, type ReactElement, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { EnrollPopup, type EnrollFormData } from "@/components/EnrollForms";
import Modal from "@/components/Modal";
import BrochureDownloadForm from "@/components/BrochureDownloadForm";



const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "software-testing", href: "#" },
    { label: "Manual Testing", href: "/about-us" },
]


export default function HeroManualTesting() {

    const [isDownloadOpen, setIsDownloadOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const handleEnrollSubmit = (enroll: EnrollFormData) => {
        alert(
            `Enroll Now Submitted:\nName: ${enroll.name}\nEmail: ${enroll.email}\nPhone: ${enroll.phone}`
        );
        setIsPopupOpen(false);
    };


    return (
        <section className="relative py-10 md:py-12 bg-white" aria-labelledby="manual-testing-hero">
            {/* Background (no color gradients) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_1px)] [background-size:26px_26px]" />
                <div className="absolute top-10 left-4 h-24 w-24 rounded-2xl bg-sky-50 border border-sky-100 shadow-sm" />
                <div className="absolute bottom-12 right-6 h-28 w-28 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm" />
            </div>

            <div className="relative overflow-hidden mx-auto max-w-full xl:max-w-7xl px-4  sm:px-6 lg:px-8">

                {/* Breadcrumbs for SEO & UX */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <Link
                                    href={c.href}
                                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-12 grid-cols-1">
                    {/* LEFT */}
                    <div className="lg:-mt-80 xl:-mt-72 lg:col-span-7">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-0.5 md:py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                            <Sparkles className="h-4 w-4 text-amber-500" />
                            <span>ISTQB Foundation Aligned • Job-Oriented</span>
                        </div>

                        <h1 id="manual-testing-hero" className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            Best <span className="text-blue-700">Manual Testing Course</span>{" "}
                            with 100% Placement <br className="md:hidden" /> Support
                        </h1>

                        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600">
                            Upgrade your QA career with hands-on <strong>Software Testing Training</strong>, <strong>ISTQB Prep</strong>, and real-world{" "}
                            <strong>Manual Testing</strong> projects. Live classes, mentor support, interview preparation, and a curated job pipeline.
                        </p>

                        {/* Lead Form For Mobile Screens and Tab Screens */}

                        <div className="lg:hidden border mt-10 border-slate-300 p-5 shadow-md shadow-purple-300 rounded-2xl">
                            <h2 className="text-slate-800 text-2xl font-bold">Start Your <span className="text-brand">QA</span> Journey</h2>

                            {/* Lead Form */}
                            <form id="apply" className="mt-6 space-y-3" aria-label="Apply for Manual Testing course">
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <Field label="Full Name">
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600"
                                        />
                                    </Field>
                                    <Field label="Mobile Number">
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="+91-XXXXXXXXXX"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600"
                                        />
                                    </Field>
                                </div>
                                <Field label="Email">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-sky-600"
                                    />
                                </Field>

                                <button
                                    type="submit"
                                    className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                                >
                                    Get Call Back
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                </button>
                                <p className="mt-2 text-center text-xs text-slate-500">
                                    By submitting, you agree to our{" "}
                                    <Link href="/terms-of-service" className="underline underline-offset-2 text-slate-700">
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy-policy" className="underline underline-offset-2 text-slate-700">
                                        Privacy Policy
                                    </Link>.
                                </p>
                            </form>
                        </div>


                        {/* Trust Bar */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                            <div className="flex items-center gap-1 text-slate-800">
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <span className="ml-2 font-semibold">4.9/5</span>
                                <span className="ml-1 text-slate-500">from 1,200+ reviews</span>
                            </div>
                            <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
                            <div className="flex items-center gap-2 text-slate-800">
                                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                                <span>Trusted by 5000+ learners</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="group inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-4 text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                aria-label="Enroll in Manual Testing Course"
                            >
                                Enroll Now
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </button>

                            <button
                                onClick={() => setIsDownloadOpen(true)}
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-2 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                aria-label="Download Manual Testing syllabus"
                            >
                                <Download className="mr-2 h-5 w-5 text-slate-700" />
                                Download Syllabus (PDF)
                            </button>

                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-sky-700 px-3 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:ml-1"
                                aria-label="Book a free demo class"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Free Demo Class
                            </button>
                        </div>

                        {/* Feature bullets */}
                        <ul className="mt-8 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                            {[
                                { color: "text-emerald-600", text: "12-Week Live Program" },
                                { color: "text-indigo-700", text: "ISTQB Foundation Preparation" },
                                { color: "text-sky-700", text: "Manual + Agile + SDLC/STLC" },
                                { color: "text-rose-700", text: "Resume, Mock Interviews & Referrals" },
                            ].map((item, i) => (
                                <li className="flex items-center gap-2" key={i}>
                                    <CheckCircle2 className={`h-5 w-5 ${item.color}`} />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Company logos */}
                        <div className="mt-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Alumni work at</p>
                            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-90">
                                <Image src="/company_images/Testriq-Logo-Black.webp" alt="Testriq" width={120} height={24} />
                                <Image src="/company_images/axiom.webp" alt="Pixelwave" width={120} height={24} />
                                <Image src="/company_images/credility.webp" alt="Groundwork Systems" width={120} height={24} />
                                <Image src="/company_images/marqetrix.webp" alt="Nitrosoft" width={120} height={24} />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative lg:col-span-5">
                        <div className="rounded-3xl flex flex-col-reverse gap-5 border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                            <div className="border border-slate-300 p-5 shadow-md shadow-purple-300 rounded-2xl">
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Course Snapshot</h3>
                                    <Award className="h-8 w-8 text-amber-500" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <SnapshotItem
                                        color="bg-sky-50 text-sky-700"
                                        icon={<Users className="h-6 w-6 text-sky-700" />}
                                        label="Students Placed"
                                        value="500+"
                                    />
                                    <SnapshotItem
                                        color="bg-indigo-50 text-indigo-700"
                                        icon={<Clock className="h-6 w-6 text-indigo-700" />}
                                        label="Training Hours"
                                        value="Refer Branches"
                                    />
                                    <SnapshotItem
                                        color="bg-emerald-50 text-emerald-700"
                                        icon={<BriefcaseBusiness className="h-6 w-6 text-emerald-700" />}
                                        label="Real Projects"
                                        value="5"
                                    />
                                    <SnapshotItem
                                        color="bg-amber-50 text-amber-700"
                                        icon={<GraduationCap className="h-6 w-6 text-amber-700" />}
                                        label="ISTQB Included"
                                        value="Yes (with additonial fees)"
                                    />
                                    <SnapshotItem
                                        color="bg-rose-50 text-rose-700"
                                        icon={<Globe2 className="h-6 w-6 text-rose-700" />}
                                        label="Learning Access"
                                        value="Lifetime"
                                    />
                                    <SnapshotItem
                                        color="bg-violet-50 text-violet-700"
                                        icon={<ShieldCheck className="h-6 w-6 text-violet-700" />}
                                        label="Placement Support"
                                        value="100%"
                                    />
                                </div>

                                {/* Next Batch */}
                                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-slate-600">Next Batch</p>
                                            <p className="text-lg font-bold text-slate-900">Nov 15, 2025</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-slate-600">Seats Left</p>
                                            <p className="text-lg font-bold text-rose-700">Only 8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block border border-slate-300 p-5 shadow-md shadow-purple-300 rounded-2xl">
                                <h2 className="text-slate-800 text-2xl font-bold">Start Your <span className="text-brand">QA</span> Journey</h2>

                                {/* Lead Form */}
                                <form id="apply" className="mt-6 space-y-3" aria-label="Apply for Manual Testing course">
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <Field label="Full Name">
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                placeholder="Enter your name"
                                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600"
                                            />
                                        </Field>
                                        <Field label="Mobile Number">
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+91-XXXXXXXXXX"
                                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600"
                                            />
                                        </Field>
                                    </div>
                                    <Field label="Email">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-sky-600"
                                        />
                                    </Field>

                                    <button
                                        type="submit"
                                        className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                                    >
                                        Get Call Back
                                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                    <p className="mt-2 text-center text-xs text-slate-500">
                                        By submitting, you agree to our{" "}
                                        <Link href="/terms-of-service" className="underline underline-offset-2 text-slate-700">
                                            Terms
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/privacy-policy" className="underline underline-offset-2 text-slate-700">
                                            Privacy Policy
                                        </Link>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popup now uses reusable EnrollPopup */}
                <EnrollPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    onSubmit={handleEnrollSubmit}
                />

                <Modal
                    isOpen={isDownloadOpen}
                    onClose={() => setIsDownloadOpen(false)}
                    title="Download Manual Testing Syllabus"
                >
                    <BrochureDownloadForm onClose={() => setIsDownloadOpen(false)} />
                </Modal>


                {/* SEO helper text */}
                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-sm leading-relaxed text-slate-600">
                        Join India’s leading <strong>Manual Testing Course</strong> for freshers and working professionals. Master{" "}
                        <strong>software testing fundamentals, test cases, bug reporting</strong>, <strong>Agile &amp; Scrum</strong>, and interview skills.
                        Available in <strong>online</strong> and <strong>classroom</strong> modes with <strong>placement assistance</strong> across Mumbai • Pune • Bengaluru.
                    </p>
                </div>
            </div>

            {/* JSON-LD */}
            <Script id="course-json-ld" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    name: "Manual Testing Course with ISTQB Prep",
                    description:
                        "Job-oriented Manual Testing training with live classes, ISTQB Foundation preparation, real projects, and 100% placement support.",
                    provider: {
                        "@type": "Organization",
                        name: "Your Ed-Tech Institute",
                        sameAs: "https://www.example.com",
                    },
                    hasCourseInstance: {
                        "@type": "CourseInstance",
                        courseMode: ["Online", "InPerson"],
                        startDate: "2025-11-15",
                        location: { "@type": "Place", name: "Mumbai • Pune • Bengaluru" },
                    },
                    educationalCredentialAwarded: "ISTQB Foundation (prep included)",
                    offers: {
                        "@type": "Offer",
                        url: "https://www.example.com/manual-testing",
                        availability: "https://schema.org/InStock",
                        price: "0",
                        priceCurrency: "INR",
                    },
                })}
            </Script>
        </section>
    );
}



/* ---------- Reusable components in the same file ---------- */
function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
            {children}
        </div>
    );
}

function SnapshotItem({
    icon,
    label,
    value,
    color,
}: {
    icon: ReactElement | ReactNode;
    label: string;
    value: string;
    /** Tailwind classes for the icon chip background/text, e.g. "bg-sky-50 text-sky-700" */
    color?: string;
}) {
    const colorClasses = color ?? "bg-slate-100 text-slate-700";
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${colorClasses}`}>{icon}</span>
            <div className="leading-tight">
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <div className="text-base font-semibold text-slate-900">{value}</div>
            </div>
        </div>
    );
}
