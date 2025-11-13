import React, { ReactNode } from "react";
import {
    BookOpen,
    Zap,
    Briefcase,
    CheckCircle,
    Users,
    Lightbulb,
    Rocket,
    Award,
} from "lucide-react";

interface RoadmapStep {
    number: number;
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
}

const roadmapSteps: RoadmapStep[] = [
    {
        number: 1,
        title: "Learn Through Case Studies",
        description:
            "Understand real-world marketing challenges and strategies from industry experts.",
        icon: <BookOpen className="w-8 h-8" />,
        color: "from-blue-50 to-blue-100",
    },
    {
        number: 2,
        title: "Undergo Hands-On Training",
        description:
            "Execute tasks using industry tools under expert supervision and guidance.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-pink-50 to-pink-100",
    },
    {
        number: 3,
        title: "Live Projects",
        description:
            "Complete a Capstone Project and multiple live assignments with real clients.",
        icon: <Briefcase className="w-8 h-8" />,
        color: "from-indigo-50 to-indigo-100",
    },
    {
        number: 4,
        title: "In-Class Assessment & Feedback",
        description:
            "Receive personalized feedback to refine your execution and strategy.",
        icon: <CheckCircle className="w-8 h-8" />,
        color: "from-green-50 to-green-100",
    },
    {
        number: 5,
        title: "Perform Assignments",
        description:
            "Solidify your learning through consistent, challenging homework and projects.",
        icon: <Users className="w-8 h-8" />,
        color: "from-purple-50 to-purple-100",
    },
    {
        number: 6,
        title: "Interview Prep & Soft Skills",
        description:
            "Master the art of interviewing and essential workplace communication skills.",
        icon: <Lightbulb className="w-8 h-8" />,
        color: "from-indigo-50 to-indigo-100",
    },
    {
        number: 7,
        title: "Lifetime Career Support",
        description:
            "Access to our network and mentorship long after graduation and beyond.",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-cyan-50 to-cyan-100",
    },
    {
        number: 8,
        title: "Placement Assistance",
        description:
            "Secure a high-paying role with our 100% Job Assistance program.",
        icon: <Award className="w-8 h-8" />,
        color: "from-yellow-50 to-yellow-100",
    },
];

export default function CareerRoadmapSection() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
                        Your 8-Step <br />
                        <span className="text-orange-600">
                            Career Acceleration Roadmap
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        A clear, proven path from learning the fundamentals to
                        securing your dream job. This is the CDPL difference.
                    </p>
                    {/* Extra SEO-focused line */}
                    <p className="mt-3 text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
                        Follow a structured{" "}
                        <strong>digital marketing career roadmap</strong> that
                        takes you from beginner to{" "}
                        <strong>
                            job-ready performance marketer, SEO specialist, and
                            social media strategist
                        </strong>{" "}
                        with{" "}
                        <strong>
                            hands-on projects, case studies and placement
                            support
                        </strong>
                        .
                    </p>
                </div>

                {/* Career Progression Timeline (Desktop) – layout like reference section */}
                <div className="mb-16">
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 transform -translate-y-1/2"></div>

                            {/* Timeline Cards */}
                            <div className="grid grid-cols-4 gap-4 relative z-10">
                                {roadmapSteps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="flex flex-col items-center"
                                    >
                                        {/* Card */}
                                        <div
                                            className={`bg-gradient-to-br ${step.color} rounded-xl p-6 border-2 border-slate-200 w-full mb-8 hover:shadow-lg transition-shadow`}
                                        >
                                            {/* Icon */}
                                            <div className="text-orange-600 mb-3 flex items-center justify-between gap-2">
                                                <span>{step.icon}</span>
                                                <span className="text-xs font-bold text-orange-600">
                                                    Step {step.number}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Outcome / SEO block */}
                                            <div className="bg-white/70 rounded-lg p-2 text-center">
                                                <p className="text-[11px] text-slate-600">
                                                    Outcome:
                                                </p>
                                                <p className="text-xs font-semibold text-orange-600">
                                                    Build{" "}
                                                    <strong>
                                                        practical digital
                                                        marketing skills
                                                    </strong>{" "}
                                                    and{" "}
                                                    <strong>
                                                        job-ready portfolio
                                                    </strong>
                                                    .
                                                </p>
                                            </div>
                                        </div>

                                        {/* Connector Circle */}
                                        <div className="w-6 h-6 rounded-full bg-white border-4 border-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline – layout like reference mobile version */}
                    <div className="lg:hidden space-y-6">
                        {roadmapSteps.map((step, idx) => (
                            <div key={step.number} className="relative pl-8">
                                {/* Timeline Line */}
                                {idx < roadmapSteps.length - 1 && (
                                    <div className="absolute left-2 top-12 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-slate-300"></div>
                                )}

                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></div>

                                {/* Card */}
                                <div
                                    className={`bg-gradient-to-br ${step.color} rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-shadow`}
                                >
                                    {/* Step */}
                                    <p className="text-xs font-bold text-orange-600 mb-2">
                                        Step {step.number}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {step.title}
                                    </h3>

                                    {/* Description & Outcome */}
                                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <p className="text-[11px] text-slate-600">
                                                Focus Area
                                            </p>
                                            <p className="font-semibold text-slate-900 text-xs">
                                                Practical{" "}
                                                <strong>
                                                    digital marketing training
                                                </strong>{" "}
                                                with{" "}
                                                <strong>
                                                    tools, live projects and
                                                    case studies
                                                </strong>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Breakdown – adapted from reference Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {roadmapSteps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-orange-600">{step.icon}</div>
                                <div>
                                    <p className="text-xs font-bold text-orange-600">
                                        Step {step.number}
                                    </p>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Core Description (unchanged content) */}
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                {step.description}
                            </p>

                            {/* SEO-friendly breakdown */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-slate-900 mb-2">
                                    What you&apos;ll achieve in this step:
                                </p>
                                <ul className="space-y-1 text-sm text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-[2px]">
                                            →
                                        </span>
                                        Gain{" "}
                                        <strong>
                                            industry-relevant digital marketing
                                            experience
                                        </strong>{" "}
                                        through structured tasks and guided
                                        execution.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-[2px]">
                                            →
                                        </span>
                                        Build strong fundamentals for{" "}
                                        <strong>
                                            high-paying digital marketing jobs
                                        </strong>{" "}
                                        such as SEO Executive, PPC Analyst,
                                        Social Media Manager and Performance
                                        Marketer.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-[2px]">
                                            →
                                        </span>
                                        Strengthen your{" "}
                                        <strong>
                                            portfolio with real projects,
                                            campaigns and case studies
                                        </strong>{" "}
                                        that impress recruiters.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Factors – from reference, customized to digital marketing SEO */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Keys to Rapid Growth in Digital Marketing
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                number: "1",
                                title: "Hands-On Learning",
                                description:
                                    "Practice on real campaigns, SEO audits, Google Ads, Meta Ads and analytics dashboards instead of only theory.",
                            },
                            {
                                number: "2",
                                title: "Portfolio & Case Studies",
                                description:
                                    "Build a strong portfolio with measurable results to showcase in digital marketing and performance marketing interviews.",
                            },
                            {
                                number: "3",
                                title: "Tool Mastery",
                                description:
                                    "Get confident with industry tools like Google Analytics, Google Ads, Search Console, Meta Business Suite and leading SEO tools.",
                            },
                            {
                                number: "4",
                                title: "Specialization Path",
                                description:
                                    "Choose focused tracks in SEO, PPC, social media marketing or growth marketing to command higher salaries and senior roles.",
                            },
                            {
                                number: "5",
                                title: "Networking & Mentorship",
                                description:
                                    "Leverage mentors, alumni and industry experts to get referrals, freelance projects and better interview opportunities.",
                            },
                            {
                                number: "6",
                                title: "Certifications & Continuous Learning",
                                description:
                                    "Boost your profile with recognized digital marketing certifications and keep upgrading your skills with the latest trends.",
                            },
                        ].map((factor, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                                    {factor.number}
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">
                                        {factor.title}
                                    </h4>
                                    <p className="text-slate-300 text-sm">
                                        {factor.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Benefits (keep your original stats content) */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                            8 Weeks
                        </div>
                        <p className="text-gray-600">Structured Learning Path</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="text-4xl font-bold text-pink-600 mb-2">
                            1:1
                        </div>
                        <p className="text-gray-600">Personalized Mentorship</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="text-4xl font-bold text-orange-600 mb-2">
                            100%
                        </div>
                        <p className="text-gray-600">Success Guarantee</p>
                    </div>
                </div>

                {/* CTA (content unchanged, slightly SEO-enhanced via context) */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-4 text-base md:text-lg max-w-2xl mx-auto">
                        Start your structured{" "}
                        <strong>8-step digital marketing career journey</strong>{" "}
                        with live projects, mentorship and{" "}
                        <strong>100% placement assistance</strong>.
                    </p>
                    <button className="btn-cta">
                        Start Your 8-Step Journey Today
                    </button>
                </div>
            </div>
        </section>
    );
}
