"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
    category: string;
}

export default function FaqSection() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    const faqs: FAQ[] = [
        {
            category: "Course Content",
            question: "What is the duration of the course?",
            answer: "The course is designed to be completed in 20 hours of intensive training. This includes classroom sessions, hands-on projects, and self-paced learning materials. You can complete it at your own pace while maintaining engagement with live sessions.",
        },
        {
            category: "Course Content",
            question: "Do I need prior programming experience?",
            answer: "Basic Python knowledge is recommended but not mandatory. We cover Python fundamentals in the first module, making the course accessible to beginners. If you have no programming experience, we recommend learning basic Python concepts before enrolling.",
        },
        {
            category: "Course Content",
            question: "What topics are covered in the curriculum?",
            answer: "The course covers 7 comprehensive modules: Python Fundamentals, Environment Setup, Machine Learning Basics, Data Analysis with Pandas, Data Visualization with Matplotlib, Advanced Visualization with Seaborn, and Scientific Computing with NumPy. Each module includes hands-on projects.",
        },
        {
            category: "Learning Format",
            question: "What is the learning format?",
            answer: "We offer a hybrid learning model combining classroom and online sessions. All training is conducted live from our classrooms and streamed online. You also receive recorded sessions for future reference, allowing flexibility in your learning schedule.",
        },
        {
            category: "Learning Format",
            question: "Can I attend classes online?",
            answer: "Yes! Our hybrid model allows you to attend live sessions online. All classroom sessions are streamed in real-time, and you can interact with instructors and peers. Recorded sessions are also available for asynchronous learning.",
        },
        {
            category: "Certification",
            question: "What certification will I receive?",
            answer: "Upon successful completion, you'll receive an internationally recognized certificate from Cinute Digital with a unique QR code for verification. The certificate is validated on our portal and recognized globally by employers.",
        },
        {
            category: "Certification",
            question: "Is the certificate globally recognized?",
            answer: "Yes, our certificates are internationally recognized and validated by AAA. They hold credibility with employers worldwide and can significantly enhance your resume and career prospects.",
        },
        {
            category: "Placement",
            question: "Do you provide job placement assistance?",
            answer: "Yes! We offer 100% job assistance including resume building, interview preparation, and placement support. Our dedicated placement team works to connect you with top companies actively hiring data analysts.",
        },
        {
            category: "Placement",
            question: "What is the average salary after the course?",
            answer: "The average starting salary for Python Data Analysts is 4 LPA, with potential to reach 6-10 LPA within 2-3 years depending on experience and specialization. Many of our graduates see 40-50% salary growth post-course.",
        },
        {
            category: "Technical Support",
            question: "What if I face technical issues during the course?",
            answer: "Our support team is available to help with technical issues. We provide 1:1 doubt-solving sessions where you can clarify any technical or conceptual doubts. You can also reach out via email or during office hours.",
        },
        {
            category: "Technical Support",
            question: "What are the system requirements?",
            answer: "You'll need a computer with Python installed (we provide setup guides), Jupyter Notebook, and basic internet connectivity for online sessions. We support Windows, macOS, and Linux systems.",
        },
        {
            category: "Enrollment",
            question: "How do I enroll in the course?",
            answer: "You can enroll through our website or contact our admissions team. We'll guide you through the enrollment process, discuss your goals, and help you choose the best batch timing.",
        },
    ];

    const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Frequently Asked <span className="text-orange-600">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Find answers to common questions about our course, enrollment, and career opportunities.
                    </p>
                </div>

                {/* FAQs by Category */}
                {categories.map((category) => (
                    <div key={category} className="mb-12">
                        {/* Category Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                            {category}
                        </h3>

                        {/* FAQs List */}
                        <div className="space-y-4">
                            {faqs
                                .filter((faq) => faq.category === category)
                                .map((faq,) => {
                                    const globalIdx = faqs.indexOf(faq);
                                    return (
                                        <div
                                            key={globalIdx}
                                            className="bg-white rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Question */}
                                            <button
                                                onClick={() =>
                                                    setExpandedFAQ(
                                                        expandedFAQ === globalIdx ? null : globalIdx
                                                    )
                                                }
                                                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                            >
                                                <h4 className="text-lg font-semibold text-slate-900 text-left">
                                                    {faq.question}
                                                </h4>
                                                <ChevronDown
                                                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === globalIdx ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {/* Answer */}
                                            {expandedFAQ === globalIdx && (
                                                <div className="px-6 pb-5 border-t border-slate-200 bg-slate-50">
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}

                {/* Still Have Questions */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Still Have Questions?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        Our enrollment team is here to help! Reach out to us via phone, email, or contact form, and we&apos;ll provide personalized guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="tel:+917888383788"
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            📞 Call Us
                        </Link>
                        <Link
                            href="mailto:contact@cinutedigital.com"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            ✉️ Email Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
