// components/sections/WhyDSProgram.tsx
"use client";

import { useMemo } from "react";
import {
    Brain,
    Layers,
    LineChart,
    Cpu,
    Gauge,
    ShieldCheck,
    FlaskConical,
    Cloud,
    BarChart3,
    GitBranch,
    Rocket,
    BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function WhyDSProgram() {
    // SEO: Course schema
    const courseJsonLd = useMemo(
        () =>
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Course",
                name: "Advanced Data Science & Machine Learning Masterclass",
                description:
                    "Hands-on masterclass covering data processing, feature engineering, classical ML, deep learning, MLOps, and scalable deployment on cloud platforms. Build a job-ready portfolio with real-world projects.",
                provider: {
                    "@type": "Organization",
                    name: "Cinute Digital Pvt. Ltd.",
                    sameAs: "https://example.com",
                },
                educationalCredentialAwarded: "Certificate of Completion",
                timeRequired: "PT200H",
                inLanguage: "en",
                keywords: [
                    "data science course",
                    "machine learning training",
                    "deep learning",
                    "MLOps",
                    "TensorFlow",
                    "scikit-learn",
                    "Python data science",
                    "cloud ML deployment",
                    "feature engineering",
                    "model monitoring",
                ],
            }),
        []
    );

    const featureChips = [
        { label: "200 Hours", color: "bg-indigo-600 text-white" },
        { label: "Hands-On Projects", color: "bg-emerald-600 text-white" },
        { label: "Expert Faculty", color: "bg-amber-500 text-gray-900" },
        { label: "Prior Exp Helpful", color: "bg-sky-600 text-white" },
        { label: "100% Job-Ready", color: "bg-rose-600 text-white" },
    ];

    const outcomes = [
        {
            icon: Layers,
            iconColor: "text-violet-700",
            iconBg: "bg-violet-50",
            border: "border-violet-200",
            title: "Data Wrangling & Feature Engineering",
            text:
                "Build reliable pipelines with pandas, Polars & SQL. Encode, scale, and select features with reproducible notebooks.",
        },
        {
            icon: LineChart,
            iconColor: "text-emerald-700",
            iconBg: "bg-emerald-50",
            border: "border-emerald-200",
            title: "Classical ML Done Right",
            text:
                "Model selection with scikit-learn, cross-validation, hyper-parameter tuning, and leakage-free evaluation.",
        },
        {
            icon: Brain,
            iconColor: "text-indigo-700",
            iconBg: "bg-indigo-50",
            border: "border-indigo-200",
            title: "Deep Learning Foundations",
            text:
                "Neural networks, CNNs/RNNs, transfer learning and modern tooling with TensorFlow/Keras & PyTorch basics.",
        },
        {
            icon: Cpu,
            iconColor: "text-amber-700",
            iconBg: "bg-amber-50",
            border: "border-amber-200",
            title: "MLOps & Deployment",
            text:
                "Package models with FastAPI, containerize with Docker, add CI/CD, and deploy to cloud with monitoring.",
        },
        {
            icon: Gauge,
            iconColor: "text-cyan-700",
            iconBg: "bg-cyan-50",
            border: "border-cyan-200",
            title: "Model Monitoring & Drift",
            text:
                "Track performance, data drift and cost; add alerts and retraining triggers for production reliability.",
        },
        {
            icon: ShieldCheck,
            iconColor: "text-lime-700",
            iconBg: "bg-lime-50",
            border: "border-lime-200",
            title: "Responsible & Secure AI",
            text:
                "Bias checks, documentation, and governance so models are ethical, explainable, and audit-ready.",
        },
    ];

    const bullets = [
        {
            icon: BarChart3,
            color: "text-rose-700",
            bg: "bg-rose-50",
            text: "Business-ready dashboards and reports that translate metrics into decisions.",
        },
        {
            icon: GitBranch,
            color: "text-violet-700",
            bg: "bg-violet-50",
            text: "Versioned experiments with MLFlow & DVC for repeatable results.",
        },
        {
            icon: FlaskConical,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
            text: "A/B tests and uplift modeling to prove model impact.",
        },
        {
            icon: Cloud,
            color: "text-sky-700",
            bg: "bg-sky-50",
            text: "Cloud patterns across AWS/GCP/Azure for scalable training & serving.",
        },
        {
            icon: BookOpen,
            color: "text-amber-700",
            bg: "bg-amber-50",
            text: "Clear READMEs and portfolio storytelling recruiters love.",
        },
    ];

    return (
        <section
            className="relative py-14 md:py-24 bg-white"
            aria-labelledby="why-ds-heading"
        >
            {/* Subtle futuristic accent (thin gradient line only) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="flex flex-col justify-center items-center text-center mb-10 md:mb-12">
                    <h1
                        id="why-ds-heading"
                        className="text-3xl md:text-4xl max-w-4xl font-bold tracking-tight text-gray-900"
                    >
                        Advanced Data Science &amp; Machine Learning{" "}
                        <span className="text-DS">Masterclass - Complete Overview</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Go end-to-end from <strong>data processing</strong> to{" "}
                        <strong>production deployment</strong>. Build a <strong>job-ready portfolio</strong> in{" "}
                        <strong>Python, scikit-learn, TensorFlow</strong> and cloud MLOps with measurable impact.
                    </p>
                </header>

                {/* Feature chips (distinct colors, no repetition) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto mb-10 md:mb-12">
                    {featureChips.map((c) => (
                        <div
                            key={c.label}
                            className={`rounded-xl px-4 py-3 text-center text-sm font-semibold shadow-sm ${c.color}`}
                        >
                            {c.label}
                        </div>
                    ))}
                </div>

                {/* Outcomes grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {outcomes.map((o) => (
                        <article
                            key={o.title}
                            className={`rounded-2xl border ${o.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`p-2.5 rounded-xl ${o.iconBg} ring-1 ring-black/5`} aria-hidden="true">
                                    <o.icon className={`w-6 h-6 ${o.iconColor}`} strokeWidth={2.2} />
                                </span>
                                <h3 className="text-lg font-bold text-gray-900">{o.title}</h3>
                            </div>
                            <p className="mt-3 text-gray-700 leading-relaxed">{o.text}</p>
                        </article>
                    ))}
                </div>

                {/* Program summary */}
                <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6 items-start">
                    <article className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900">What you’ll learn (and build)</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            From <strong>EDA & feature engineering</strong> to{" "}
                            <strong>model development</strong> and <strong>MLOps</strong>, this masterclass focuses
                            on deployable skills. You’ll ship APIs, dashboards, and reproducible experiments that
                            translate to interviews and on-the-job success.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className={`mt-0.5 p-1.5 rounded-md ${b.bg} ring-1 ring-black/5`} aria-hidden="true">
                                        <b.icon className={`w-5 h-5 ${b.color}`} strokeWidth={2.2} />
                                    </span>
                                    <span className="text-gray-800">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-gray-700">
                            Keywords:{" "}
                            <em>
                                data science training, machine learning course, deep learning with TensorFlow,
                                feature engineering, model deployment, MLOps pipeline, ML monitoring, cloud AI
                                solutions, Python data analysis
                            </em>
                            .
                        </p>
                    </article>

                    {/* Quick facts / CTA */}
                    <aside className="rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
                        <dl className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Duration</dt>
                                <dd className="font-semibold text-indigo-700">≈ 200 Hours</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Learning Mode</dt>
                                <dd className="font-semibold text-emerald-700">Project-Based</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Prerequisites</dt>
                                <dd className="font-semibold text-amber-700">Basic Python & Math</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Outcome</dt>
                                <dd className="font-semibold text-rose-700">Job-Ready Portfolio</dd>
                            </div>
                        </dl>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <Link
                                href="contact-us"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-slate-900 text-white hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
                                aria-label="Apply now for the Advanced Data Science & ML Masterclass"
                            >
                                Apply Now
                                <Rocket className="w-4 h-4" />
                            </Link>
                            <p className="mt-3 text-xs text-gray-600">
                                Get the full syllabus and a readiness checklist to personalize your learning path.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseJsonLd }} />
        </section>
    );
}
