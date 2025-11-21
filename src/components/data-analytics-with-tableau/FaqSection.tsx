import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/data-analytics-with-tableau/ui/accordion";
import Link from "next/link";

const faqData = [
    {
        id: 1,
        question: "What is the duration of the course?",
        answer:
            "The course is designed to be completed in 20 hours. This includes classroom sessions, hands-on projects, and assessments. You can attend at your own pace with flexible scheduling options.",
    },
    {
        id: 2,
        question: "Do I need prior programming experience?",
        answer:
            "No, this course is designed for both beginners and intermediate users. We cover everything from basic Tableau concepts to advanced techniques. However, basic computer literacy is recommended.",
    },
    {
        id: 3,
        question: "What topics are covered in the curriculum?",
        answer:
            "The curriculum covers 12 comprehensive modules including BI concepts, Tableau setup, data integration, visualization techniques, dashboard design, advanced analytics, and hands-on projects.",
    },
    {
        id: 4,
        question: "What is the learning format?",
        answer:
            "We offer a hybrid learning model with both classroom and online options. All sessions are live-streamed, and recordings are provided for later access. You can choose the format that works best for you.",
    },
    {
        id: 5,
        question: "Can I attend classes online?",
        answer:
            "Yes, absolutely! We provide live online classes with interactive sessions. You can attend from anywhere and interact with instructors and fellow students in real-time.",
    },
    {
        id: 6,
        question: "What certification will I receive?",
        answer:
            "Upon successful completion, you will receive a Cinute Digital certificate with a unique QR code for validation. The certificate is issued after completing all assessments and mock interviews.",
    },
    {
        id: 7,
        question: "Is the certificate globally recognized?",
        answer:
            "Yes, our certificates are internationally recognized. We are a Tableau Training Partner, and our certifications are valued by employers worldwide.",
    },
    {
        id: 8,
        question: "Do you provide job placement assistance?",
        answer:
            "Yes, we provide 100% job assistance. Our placement team helps with resume building, LinkedIn optimization, interview preparation, and connects you with top hiring companies.",
    },
    {
        id: 9,
        question: "What is the average salary after the course?",
        answer:
            "Tableau developers with our certification earn an average of 4 LPA (Lakhs Per Annum) as freshers, with potential for significant growth as you gain experience.",
    },
    {
        id: 10,
        question: "What if I face technical issues during the course?",
        answer:
            "We provide 1:1 doubt solving support. Our instructors are available to help you resolve any technical issues or clarify concepts. We ensure every doubt is addressed.",
    },
    {
        id: 11,
        question: "What are the system requirements?",
        answer:
            "You need a computer with at least 4GB RAM, internet connection, and Tableau Desktop or Public (free version available). We provide detailed setup instructions during the course.",
    },
    {
        id: 12,
        question: "How do I enroll in the course?",
        answer:
            "You can enroll by filling out the form on our website or contacting us directly. Our team will guide you through the enrollment process and help you get started.",
    },
];

export default function FaqSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about our Tableau course
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            value={`faq-${faq.id}`}
                            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer hover:bg-orange-50 transition-colors">
                                <div className="flex items-center gap-4 w-full text-left">
                                    {/* Number */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Question */}
                                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                                        {faq.question}
                                    </h3>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Additional Help */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Still Have Questions?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">📞</div>
                            <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                            <p className="text-gray-700 mb-3">
                                Speak with our course counselors directly
                            </p>
                            <Link
                                href="tel:+917888383788"
                                className="text-orange-600 text-xs md:text-base font-semibold hover:underline"
                            >
                                +91 788-83-83-788
                            </Link>
                        </div>

                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">✉️</div>
                            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                            <p className="text-gray-700 mb-3">
                                Get detailed information via email
                            </p>
                            <Link
                                href="mailto:contact@cinutedigital.com"
                                className="text-orange-600 text-xs lg:text-base font-semibold hover:underline"
                            >
                                contact@cinutedigital.com
                            </Link>
                        </div>

                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">💬</div>
                            <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
                            <p className="text-gray-700 mb-3">
                                Chat with our support team in real-time
                            </p>
                            <Link href="https://wa.me/9152929342" className="text-orange-600 text-xs md:text-base font-semibold hover:underline">
                                Start Chat
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Ready to start your Tableau learning journey? Enroll now and get started!
                    </p>
                    <Link href="contact-us" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block">
                        Enroll Now & Get Free Consultation →
                    </Link>
                </div>
            </div>
        </section>
    );
}
