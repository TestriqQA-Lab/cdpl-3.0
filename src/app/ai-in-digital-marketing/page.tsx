import HeroSection from "@/components/ai-in-digital-marketing/HeroSection";
import StatsSection from "@/components/ai-in-digital-marketing/StatsSection";
import WhyThisProgram from "@/components/ai-in-digital-marketing/WhyThisProgram";
import CurriculumSection from "@/components/ai-in-digital-marketing/CurriculumSection";
import ProjectsSection from "@/components/ai-in-digital-marketing/ProjectsSection";
import TestimonialsSection from "@/components/ai-in-digital-marketing/TestimonialsSection";
import WhoShouldEnroll from "@/components/ai-in-digital-marketing/WhoShouldEnroll";
import ToolsSection from "@/components/ai-in-digital-marketing/ToolsSection";
import CareerSection from "@/components/ai-in-digital-marketing/CareerSection";
import CareerRoadmapSection from "@/components/ai-in-digital-marketing/CareerRoadmapSection";
import FaqSection from "@/components/ai-in-digital-marketing/FaqSection";
import CtaSection from "@/components/ai-in-digital-marketing/CtaSection";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_IN_DIGITAL_MARKETING_FAQS, AI_IN_DIGITAL_MARKETING_REVIEW_DATA } from "@/data/aiInDigitalMarketingData";

export const metadata = generateMetadata({
    title: "Master Digital Marketing & AI for Business Owners | 10X Your Growth - Cinute Digital",
    description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners. Learn SEO, paid ads (Google/Meta), CRO, and marketing automation to 10X your business.",
    keywords: [
        "Digital Marketing for Business Owners",
        "AI for Business Growth",
        "Digital Marketing Course",
        "SEO for Business",
        "Facebook Ads Training",
        "Google Ads Course",
        "Marketing Automation",
        "Business Growth Strategy",
        "Digital Marketing Training",
        "AI Marketing Tools"
    ],
    url: "/ai-in-digital-marketing",
    image: "/og-images/ai-in-digital-marketing.jpg",
});

export default function AiInDigitalMarketingPage() {
    const courseSchema = generateCourseSchema({
        name: "Master Digital Marketing & AI for Business Owners",
        description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners.",
        url: "/ai-in-digital-marketing",
        slug: "ai-in-digital-marketing",
        price: 45000,
        currency: "INR",
        duration: "P3M",
        instructor: "Expert Digital Marketers",
        rating: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.ratingValue,
        reviewCount: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.reviewCount,
        image: "/og-images/ai-in-digital-marketing.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "AI in Digital Marketing", url: "/ai-in-digital-marketing" },
    ]);

    const faqSchema = generateFAQSchema(AI_IN_DIGITAL_MARKETING_FAQS);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />

            <main>
                <HeroSection />
                <StatsSection />
                <WhyThisProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection />
                <ProjectsSection />
                <TestimonialsSection />
                <WhoShouldEnroll />
                <CareerSection />
                <FaqSection />
                <CtaSection />
            </main>
        </div>
    );
}
