"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is the total duration of the bootcamp?",
        answer: "The program is an intensive 3-month cohort with 30 hours of core learning, requiring a 6-8 hour weekly commitment. You can complete it at your own pace while maintaining flexibility.",
    },
    {
        question: "What is the mode of learning?",
        answer: "We offer a CLASSROOM + ONLINE hybrid model. You can attend sessions live in the classroom or stream them online. All sessions are recorded for lifetime access, allowing you to revisit content anytime.",
    },
    {
        question: "Is prior experience or coding knowledge required?",
        answer: "No prerequisites are required. The course is designed to take you from beginner to expert. No coding is involved. We start from the fundamentals and progressively build your expertise.",
    },
    {
        question: "What kind of certification will I receive?",
        answer: "You will receive an International Recognized Certificate from AAA, validated with a unique authorization QR code. This certification is globally recognized and instantly boosts your career prospects.",
    },
    {
        question: "How does the 100% Job Assistance work?",
        answer: "We provide resume building, mock interviews, soft skills training, and direct access to job and internship opportunities from our partner companies. Our career support extends beyond the program.",
    },
    {
        question: "Will I get access to course materials after completion?",
        answer: "Yes, you get lifetime access to all course materials, recorded sessions, and resources. You can revisit any module anytime to refresh your knowledge.",
    },
    {
        question: "What is the class size and student-to-instructor ratio?",
        answer: "We maintain small class sizes to ensure personalized attention. Our 1:1 doubt-solving sessions ensure every student gets individual guidance and support.",
    },
    {
        question: "Can I switch between online and classroom modes?",
        answer: "Yes, you have the flexibility to switch between online and classroom modes based on your convenience. Our hybrid model is designed for maximum flexibility.",
    },
];

export default function FaqSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-slate-900">
                        Frequently Asked Questions{" "}
                        <span className="text-orange-600">(FAQs)</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        Everything you need to know about the program, logistics, flexible hybrid learning,
                        certification, and 100% job assistance support for our AI-powered digital marketing bootcamp.
                    </p>
                    <p className="mt-4 text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
                        Get clarity on{" "}
                        <strong>
                            course duration, classroom and online training, placement support, digital marketing career
                            growth, AI marketing tools, and industry-recognized certification
                        </strong>{" "}
                        so you can confidently take the next step in your digital marketing career.
                    </p>
                </div>

                {/* FAQ List – styled like the reference section cards */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setExpandedIndex(expandedIndex === index ? null : index)
                                }
                                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-slate-900 text-left">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Expanded Answer */}
                            {expandedIndex === index && (
                                <div className="px-6 pb-5 border-t border-slate-200 bg-slate-50">
                                    <p className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* SEO helper text below FAQs */}
                <div className="max-w-3xl mx-auto mt-10">
                    <p className="text-sm md:text-base text-slate-500 text-center leading-relaxed">
                        These FAQs cover the most common doubts students have before joining a{" "}
                        <strong>digital marketing bootcamp with AI tools, performance marketing training, live projects,</strong>{" "}
                        and <strong>career-focused mentorship</strong>. If you&apos;re searching for a{" "}
                        <strong>digital marketing course with job assistance, hybrid learning, and globally recognized certification</strong>,
                        this program is designed to give you end-to-end clarity and confidence.
                    </p>
                </div>

                {/* Still Have Questions – CTA box with upgraded styling */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl border-2 border-orange-200 p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        Our career counselors are here to help you choose the right{" "}
                        <strong>AI & digital marketing career path</strong>. Get personalized guidance on{" "}
                        eligibility, fees, batch timings, placement support, and how this{" "}
                        <strong>job-oriented digital marketing bootcamp</strong> can transform your profile.
                    </p>
                    <button
                        onClick={() => setIsCareerSessionOpen(true)}
                        className="btn-cta cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 transition-colors"
                    >
                        Speak to a Career Counselor
                    </button>
                </div>
            </div>

            <CareerSessionModal
                isOpen={isCareerSessionOpen}
                onClose={() => setIsCareerSessionOpen(false)}
                source="AI Bootcamp - FAQ Section"
                courseName={courseName}
            />
        </section>
    );
}
