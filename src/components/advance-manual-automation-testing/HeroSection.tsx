'use client';
import {
    Bug,
    Bot,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Home,
    ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import IconCard from '../ui/IconCard';
import LeadForm from '../CourseLeadForm';
import Link from 'next/link';


/** ===========================
 * Feature cards (distinct accents)
 * =========================== */
const features = [
    { icon: <Bug />, title: '70% Manual + 30% Auto', description: 'Best of both worlds', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-300' },
    { icon: <Bot />, title: '85% Hands-On', description: 'Real apps + frameworks', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-300' },
    { icon: <Users />, title: 'ISTQB Faculty', description: '15+ yrs in QA', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-300' },
    { icon: <Award />, title: 'Dual Certification', description: 'Manual + Automation', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-300' },
    { icon: <Briefcase />, title: '100% Placement', description: 'Resume + Mock Interviews', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-300' },
];

export default function HeroSection() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Manual and Automation Testing' },
    ];



    return (
        <section id="hero" aria-labelledby="qa-hero" className="relative overflow-hidden">
            {/* Light, sleek background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-0 [background-image:radial-gradient(600px_280px_at_20%_-10%,rgba(14,165,233,0.08),transparent_60%),radial-gradient(700px_300px_at_80%_-10%,rgba(99,102,241,0.08),transparent_55%)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Top badges with different colors (no repeats) */}
                        <div className="mb-4 hidden lg:flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-800">
                                40-Hour Master Program
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">
                                Live Online & Classroom
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
                                Beginner Friendly
                            </span>
                        </div>

                        <h1
                            id="qa-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Advanced <span className='text-ST'>Manual</span> & <span className='text-ST'>Automation Testing</span>
                        </h1>

                        {/* Mobile form below H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Master <strong>ISTQB Manual Testing</strong>, <strong>Selenium</strong>, <strong>Cypress</strong>,{' '}
                            <strong>API</strong>, <strong>Mobile</strong>, and <strong>CI/CD</strong>. Build a portfolio with
                            production-like projects and get <strong>100% placement assistance</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Includes test design techniques, defect lifecycle, framework architecture, Page Object Model, contract testing,
                            device lab runs, and automated reporting with evidence.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Manual + Automation Testing program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View detailed curriculum"
                            >
                                View Curriculum
                            </Link>
                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="Book a free demo session"
                            >
                                Free Demo
                            </button>
                        </div>

                        {/* Quick highlights (distinct colors) */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                                70% structured manual + 30% automation pathway
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                                CI/CD integration (Jenkins & GitHub Actions)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
                                Interview prep, portfolio review, and referrals
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
                                Dual certificate with QR verification
                            </li>
                        </ul>

                        {/* Feature cards — a few inline on large screens */}
                        <div className="mt-6 grid md:hidden lg:grid lg:grid-cols-4 gap-3">
                            {features.slice(0, 4).map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md p-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>

                        {/* All features on small screens */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Desktop Form */}
                    <motion.aside
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" />
                    </motion.aside>
                </div>
            </div>

        </section>
    );
}
