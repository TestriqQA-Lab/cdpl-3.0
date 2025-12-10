import { type QA } from "@/types/faq";

interface FaqItem extends QA {
    details?: string[];
    emoji: string;
    color: "blue" | "orange" | "green" | "purple" | "pink";
}

export const POWER_BI_FAQS: FaqItem[] = [
    {
        question: "What is the duration of the Power BI course?",
        answer: "The program is a 20-Hour Master Program, structured to provide comprehensive, hands-on training in a condensed, efficient format.",
        details: ["Weekend & weekday batches available", "Includes projects + recorded sessions"],
        emoji: "⏱️",
        color: "blue",
        category: "Schedule",
    },
    {
        question: "Do I need prior programming experience to enroll?",
        answer: "No, the course is designed for both technical and non-technical learners. We start with foundational concepts, making it accessible for beginners.",
        details: ["No coding prerequisites", "Excel familiarity helps but isn’t mandatory"],
        emoji: "🧭",
        color: "orange",
        category: "Prerequisites",
    },
    {
        question: "What kind of certification will I receive?",
        answer: "You will receive a globally recognized certificate from our training partner, which is validated with a unique QR code for authenticity.",
        details: ["Shareable on LinkedIn", "Verifiable by employers via QR code"],
        emoji: "🎓",
        color: "green",
        category: "Certification",
    },
    {
        question: "Is job placement assistance provided?",
        answer: "Yes, we offer 100% dedicated job assistance, including resume building, profile optimization on job portals (LinkedIn, Naukri), and tailored interview preparation.",
        details: ["Mock interviews & feedback", "Portfolio review & guidance"],
        emoji: "💼",
        color: "purple",
        category: "Career",
    },
    {
        question: "What is the learning format (online/offline)?",
        answer: "We offer a Hybrid (CLASSROOM + ONLINE) model. You can attend live sessions in the classroom or stream them online, with access to all recorded lectures.",
        details: ["Miss a session? Watch the recording", "Access materials on web & mobile"],
        emoji: "🎥",
        color: "pink",
        category: "Learning Format",
    },
];

export const POWER_BI_REVIEW_DATA = {
    ratingValue: 4.8,
    reviewCount: 300,
};
