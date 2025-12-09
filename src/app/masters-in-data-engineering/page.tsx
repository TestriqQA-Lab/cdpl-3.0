// src/components/data-analytics-bi-bigdata/index.tsx
// This file acts as the main page component that assembles all sections.

import React from 'react';
import HeroSection from '@/components/masters-in-data-engineering/HeroSection';
import StatsSection from '@/components/masters-in-data-engineering/StatsSection';
import WhyEngineerProgram from '@/components/masters-in-data-engineering/WhyEngineerProgram';
import CurriculumSection from '@/components/masters-in-data-engineering/CurriculumSection';
import ProjectsSection from '@/components/masters-in-data-engineering/ProjectsSection';
import TestimonialsSection from '@/components/masters-in-data-engineering/TestimonialsSection';
import CareerSection from '@/components/masters-in-data-engineering/CareerSection';
import WhoShouldEnroll from '@/components/masters-in-data-engineering/WhoShouldEnroll';
import ToolsSection from '@/components/masters-in-data-engineering/ToolsSection';
import FaqSection from '@/components/masters-in-data-engineering/FaqSection';
import CtaSection from '@/components/masters-in-data-engineering/CtaSection';
import CareerRoadmapSection from '@/components/masters-in-data-engineering/CareerRoadmapSection';
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ENGINEERING_MASTERS_FAQS, DATA_ENGINEERING_MASTERS_REVIEW_DATA } from "@/data/dataEngineeringMastersData";

export const metadata = generateMetadata({
    title: "Master Program in Data Analytics & Data Engineering | Mumbai",
    description: "Comprehensive Master Program in Data Analytics, BI & Big Data Engineering. Learn SQL, Python, Tableau, Power BI, Hadoop, Spark. 100% job assistance.",
    keywords: [
        "data engineering courses in mumbai",
        "big data training",
        "business intelligence master program",
        "data analytics and engineering course",
        "hadoop spark training",
        "etl developer course"
    ],
    url: "/masters-in-data-engineering",
    image: "/og-images/masters-in-data-engineering.jpg",
});

const DataAnalyticsMasterProgramPage: React.FC = () => {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Analytics, BI & Big Data Engineering",
        description: "Comprehensive Master Program in Data Analytics, BI & Big Data Engineering. Learn SQL, Python, Tableau, Power BI, Hadoop, Spark. 100% job assistance.",
        url: "/masters-in-data-engineering",
        slug: "masters-in-data-engineering",
        price: 45000,
        currency: "INR",
        duration: "P3M", // ~3 months
        instructor: "Expert Data Engineers",
        rating: DATA_ENGINEERING_MASTERS_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ENGINEERING_MASTERS_REVIEW_DATA.reviewCount,
        image: "/og-images/masters-in-data-engineering.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Master in Data Engineering", url: "/masters-in-data-engineering" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ENGINEERING_MASTERS_FAQS);
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            {/* Optional: Add a simple Header/Navbar component here if needed */}

            <main>
                <HeroSection />
                <StatsSection />
                <WhyEngineerProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection /> {/* NEW SEO BOOST SECTION */}
                <ProjectsSection />
                <CareerSection />
                <WhoShouldEnroll />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />
            </main>

            {/* Optional: Add a simple Footer component here if needed */}
        </div>
    );
};

export default DataAnalyticsMasterProgramPage;
