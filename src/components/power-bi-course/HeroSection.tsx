"use client";
// components/powerbi/HeroSection.tsx
import React from 'react';
import { Clock, CheckCircle, Award, Briefcase, ArrowRight, Download, Star, Users, TrendingUp, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Interface for the key features under the main title
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="text-blue-600 mb-2">{icon}</div>
        <p className="text-sm font-semibold text-gray-700 text-center">{title}</p>
    </div>
);


const HeroSection: React.FC = () => {
    const features = [
        { icon: <CheckCircle size={24} />, title: 'Real-World Projects' },
        { icon: <Users size={24} />, title: 'Expert Instructors' },
        { icon: <Award size={24} />, title: 'Global Certification' },
        { icon: <Briefcase size={24} />, title: '100% Job Assistance' },
    ];

    const stats = [
        { icon: <Star size={20} className="text-yellow-500" />, text: '4.8/5 Average Rating' },
        { icon: <Users size={20} className="text-blue-500" />, text: '500+ Successful Graduates' },
        { icon: <TrendingUp size={20} className="text-green-500" />, text: '14+ Years Industry Experience' },
    ];

    function LeadForm({ className = "" }: { className?: string }) {
        const countries = [
            { code: "IN", dial: "+91", label: "India", flag: "🇮🇳" },
            { code: "US", dial: "+1", label: "United States", flag: "🇺🇸" },
            { code: "GB", dial: "+44", label: "United Kingdom", flag: "🇬🇧" },
            { code: "AE", dial: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
            { code: "SG", dial: "+65", label: "Singapore", flag: "🇸🇬" },
            { code: "AU", dial: "+61", label: "Australia", flag: "🇦🇺" },
        ];

        return (
            <form
                id="enrollment-form"
                className={[
                    "w-full rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg",
                    "p-5 sm:p-6",
                    className,
                ].join(" ")}
                onSubmit={(e) => {
                    e.preventDefault();
                    // submit handling here
                }}
                aria-label="Enroll for Machine Learning with Python"
            >
                <h2 className="text-xl font-semibold text-slate-900">
                    Request Syllabus & Free Consultation
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                    Get the detailed curriculum, career roadmap, and upcoming batch details
                    for Machine Learning with Python.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    {/* Phone with country code + flag */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                            Mobile Number
                        </label>
                        <div className="mt-1 flex items-stretch gap-2">
                            <div className="flex min-w-[7.5rem] items-center rounded-lg border border-slate-300 bg-white px-2">
                                <select
                                    name="country"
                                    aria-label="Country code"
                                    defaultValue="IN"
                                    className="w-full bg-transparent py-2 text-slate-900 focus:outline-none"
                                >
                                    {countries.map((c) => (
                                        <option key={c.code} value={c.code}>
                                            {c.flag} {c.label} ({c.dial})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="tel"
                                required
                                placeholder="98765 43210"
                                pattern="^[0-9\\s\\-()+]{7,20}$"
                                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                            We’ll never share your number. Standard rates may apply.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        Get Syllabus & Pricing
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <p className="text-xs text-slate-500">
                        By submitting, you agree to our{" "}
                        <Link href="/privacy-policy" className="underline hover:text-slate-700">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </form>
        );
    }

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Data Analytics & Visualization with Power BI" },
    ];

    return (
        <section className="bg-gray-50 py-12 md:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Column: Course Details */}
                    <div className="md:col-span-7 lg:col-span-8">
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                                <Clock size={16} className="mr-2" />
                                Duration: 20 Hours Master Program
                            </span>
                        </div>

                        <h1 className="md:mt-0 max-w-3xl text-3xl md:text-4xl xl:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight text-slate-900 break-words">
                            Master <span className="text-blue-600">Data Analytics</span> & Visualization with <span className="text-orange-500">Power BI</span>
                        </h1>

                        <LeadForm className='md:hidden' />

                        <p className="mt-3 text-lg text-gray-600 mb-8 max-w-3xl">
                            Transform raw data into powerful, actionable insights. Learn from industry experts to master Microsoft Power BI, DAX, and Data Modeling for creating stunning, interactive dashboards.
                        </p>

                        <p className="text-base text-gray-500 mb-10">
                            **Key Skills:** Power BI Desktop, Power BI Service, DAX Calculations, Power Query (M), Data Modeling, Advanced Visualization, Report Publishing, and Collaboration.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                            <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-xl shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-[1.02]">
                                Enroll Now <ArrowRight size={20} className="ml-3" />
                            </button>
                            <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300">
                                Download Syllabus <Download size={20} className="ml-3" />
                            </button>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
                            ))}
                        </div>

                        {/* Mini Stats Bar */}
                        <div className="flex flex-wrap gap-6 border-t pt-6 border-gray-200">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center text-gray-600">
                                    {stat.icon}
                                    <span className="ml-2 font-medium">{stat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4">

                        <LeadForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
