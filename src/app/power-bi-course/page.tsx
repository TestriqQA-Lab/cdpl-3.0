import HeroSection from '@/components/power-bi-course/HeroSection';
import StatsSection from '@/components/power-bi-course/StatsSection';
import WhyBIProgram from '@/components/power-bi-course/WhyBIProgram';
import CurriculumSection from '@/components/power-bi-course/CurriculumSection';
import ProjectsSection from '@/components/power-bi-course/ProjectsSection';
import TestimonialsSection from '@/components/power-bi-course/TestimonialsSection';
import CareerSection from '@/components/power-bi-course/CareerSection';
import WhoShouldEnroll from '@/components/power-bi-course/WhoShouldEnroll';
import ToolsSection from '@/components/power-bi-course/ToolsSection';
import FaqSection from '@/components/power-bi-course/FaqSection';
import CtaSection from '@/components/power-bi-course/CtaSection';
import CareerRoadmapSection from '@/components/power-bi-course/CareerRoadmapSection';
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { POWER_BI_FAQS, POWER_BI_REVIEW_DATA } from "@/data/powerBiData";

export const metadata = generateMetadata({
    title: "Master Data Analytics & Visualization with Power BI | Certified Course",
    description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
    keywords: [
        "Power BI Course",
        "Data Analytics",
        "Power BI Certification",
        "DAX training",
        "Power Query",
        "Business Intelligence course",
        "Data Visualization training"
    ],
    url: "/power-bi-course",
    image: "/og-images/power-bi-course.jpg",
});

const PowerBIPage: React.FC = () => {
    const courseSchema = generateCourseSchema({
        name: "Master Data Analytics & Visualization with Power BI",
        description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
        url: "/power-bi-course",
        slug: "power-bi-course",
        price: 20000,
        currency: "INR",
        duration: "P1M",
        instructor: "Expert Power BI Mentors",
        rating: POWER_BI_REVIEW_DATA.ratingValue,
        reviewCount: POWER_BI_REVIEW_DATA.reviewCount,
        image: "/og-images/power-bi-course.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Power BI Course", url: "/power-bi-course" },
    ]);

    const faqSchema = generateFAQSchema(POWER_BI_FAQS);


    return (
        <>
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            <main>
                {/* Note: You would typically include a Header/Navbar component here */}

                <HeroSection />
                <StatsSection />
                <WhyBIProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection /> {/* NEW SEO BOOST SECTION */}
                <ProjectsSection />
                <CareerSection />
                <WhoShouldEnroll />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />

                {/* Note: You would typically include a Footer component here */}
            </main>
        </>
    );
};

export default PowerBIPage;
