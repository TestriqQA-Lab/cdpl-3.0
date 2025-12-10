import HeroSection from '@/components/ai-bootcamp/HeroSection';
import StatsSection from '@/components/ai-bootcamp/StatsSection';
import WhyEngineerProgram from '@/components/ai-bootcamp/WhyEngineerProgram';
import CurriculumSection from '@/components/ai-bootcamp/CurriculumSection';
import ProjectsSection from '@/components/ai-bootcamp/ProjectsSection';
import TestimonialsSection from '@/components/ai-bootcamp/TestimonialsSection';
import CareerSection from '@/components/ai-bootcamp/CareerSection';
import WhoShouldEnroll from '@/components/ai-bootcamp/WhoShouldEnroll';
import ToolsSection from '@/components/ai-bootcamp/ToolsSection';
import FaqSection from '@/components/ai-bootcamp/FaqSection';
import CtaSection from '@/components/ai-bootcamp/CtaSection';
import CareerRoadmapSection from '@/components/ai-bootcamp/CareerRoadmapSection';
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_BOOTCAMP_FAQS, AI_BOOTCAMP_REVIEW_DATA } from "@/data/aiBootcampData";

export const metadata = generateMetadata({
    title: "AI-Powered Digital Marketing Bootcamp | 30-Hour Expert Training | CDPL",
    description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with 100% Job Assistance. Classroom & Online options available.",
    keywords: [
        "AI digital marketing bootcamp",
        "digital marketing course mumbai",
        "performance marketing training",
        "job assistance digital marketing",
        "AI marketing tools",
        "digital marketing hybrid course"
    ],
    url: "/ai-bootcamp",
    image: "/og-images/ai-bootcamp.jpg",
});

export default function AiBootcampPage() {
    const courseSchema = generateCourseSchema({
        name: "AI-Powered Digital Marketing Bootcamp",
        description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with 100% Job Assistance.",
        url: "/ai-bootcamp",
        slug: "ai-bootcamp",
        price: 15000,
        currency: "INR",
        duration: "P1M", // ~1 month / 30 hours
        instructor: "Expert Digital Marketers",
        rating: AI_BOOTCAMP_REVIEW_DATA.ratingValue,
        reviewCount: AI_BOOTCAMP_REVIEW_DATA.reviewCount,
        image: "/og-images/ai-bootcamp.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "AI Bootcamp", url: "/ai-bootcamp" },
    ]);

    const faqSchema = generateFAQSchema(AI_BOOTCAMP_FAQS);

    return (
        <div className="min-h-screen flex flex-col">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />

            <main>
                <HeroSection />
                <StatsSection />
                <WhyEngineerProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection />
                <ProjectsSection />
                <TestimonialsSection />
                <CareerSection />
                <WhoShouldEnroll />
                <FaqSection />
                <CtaSection />
            </main>
        </div>
    );
}
