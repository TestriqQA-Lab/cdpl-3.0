// app/courses/page.tsx (or pages/courses.tsx)
import HeroSection from "@/components/courses/HeroSection";
import StatsSection from "@/components/courses/StatsSection";
import BenefitsSection from "@/components/courses/BenefitsSection";
import FAQSection from "@/components/courses/FAQSection";
import CTASection from "@/components/courses/CTASection";

// If you kept it where I placed it in the canvas:
import FilterableCourseSections from "@/components/courses/FilterableCourseSections";
// If you moved it under components, use:
// import FilterableCourseSections from "@/components/courses/FilterableCourseSections";

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateItemListSchema, generateBreadcrumbSchema, generateCourseSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { FEATURED_COURSES } from "@/lib/seo-config";
import type { Metadata } from "next";

export const metadata: Metadata = generateStaticPageMetadata({
    title: "All Courses",
    description: "Explore our industry-leading courses in Software Testing, Data Science, AI/ML, and Full Stack Development. 100% placement support.",
    url: "/courses",
    keywords: ["software testing courses", "data science training", "full stack development course", "it courses mumbai", "placement guarantee courses"],
});

export default function CoursesPage() {
    const itemListSchema = generateItemListSchema(
        FEATURED_COURSES.map(course => ({
            name: course.name,
            url: `/${course.slug}`,
            description: course.description,
            type: "Course",
            itemSchema: generateCourseSchema({
                name: course.name,
                description: course.description,
                url: `/${course.slug}`,
                slug: course.slug,
                price: course.price,
                currency: course.currency,
                duration: course.duration,
                level: course.level,
                rating: course.rating,
                reviewCount: 50, // Default review count
                enrollmentCount: course.enrollmentCount,
            })
        })),
        "All Courses"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
    ]);

    return (
        <div className="min-h-screen bg-white">
            <JsonLd id="courses-list-schema" schema={itemListSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <HeroSection />
            <FilterableCourseSections />
            <StatsSection />
            <BenefitsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
