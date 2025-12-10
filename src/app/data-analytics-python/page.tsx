import HeroSection from "@/components/data-analytics-python/HeroSection";
import StatsSection from "@/components/data-analytics-python/StatsSection";
import CurriculumSection from "@/components/data-analytics-python/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-python/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-python/TestimonialsSection";
import CareerSection from "@/components/data-analytics-python/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-python/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-python/ToolsSection";
import CareerRoadmapSection from "@/components/data-analytics-python/CareerRoadmapSection";
import FaqSection from "@/components/data-analytics-python/FaqSection";
import CtaSection from "@/components/data-analytics-python/CtaSection";
import WhyAnalyticsPythonProgram from "@/components/data-analytics-python/WhyAnalyticsPythonProgram";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_PYTHON_FAQS, DATA_ANALYTICS_PYTHON_REVIEW_DATA } from "@/data/dataAnalyticsPythonData";

export const metadata = generateMetadata({
    title: "Data Analytics with Python Course | 20-Hour Training | Mumbai | CDPL",
    description: "20-Hour Master Program in Data Analytics with Python. Hands-on projects, 100% job assistance, global certificates.",
    keywords: [
        "data analytics with python course mumbai",
        "python for data analytics",
        "pandas course",
        "matplotlib training",
        "data analyst jobs mumbai",
        "python programming for data science"
    ],
    url: "/data-analytics-python",
    image: "/og-images/data-analytics-python.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Analytics using Python",
        description: "20-Hour Master Program in Data Analytics with Python. Hands-on projects, 100% job assistance, global certificates.",
        url: "/data-analytics-python",
        slug: "data-analytics-python",
        price: 25000,
        currency: "INR",
        duration: "P1M", // ~4 weeks
        instructor: "Expert Data Analysts",
        rating: DATA_ANALYTICS_PYTHON_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ANALYTICS_PYTHON_REVIEW_DATA.reviewCount,
        image: "/og-images/data-analytics-python.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Data Analytics with Python", url: "/data-analytics-python" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ANALYTICS_PYTHON_FAQS);

    return (
        <div className="min-h-screen bg-white">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Why This Program Section */}
            <WhyAnalyticsPythonProgram />

            {/* Curriculum Section */}
            <CurriculumSection />

            {/* Tools & Technologies Section */}
            <ToolsSection />

            {/* Career Roadmap Section */}
            <CareerRoadmapSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Who Should Enroll Section */}
            <WhoShouldEnroll />

            {/* Career Section */}
            <CareerSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <CtaSection />
        </div>
    );
}