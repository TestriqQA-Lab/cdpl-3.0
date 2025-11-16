import React from "react";
import type { Metadata } from "next";
import { courseData, type CourseData } from "@/types/courseData";
import { generateSEO } from "@/lib/seo";

import HeroSection from "@/components/city-courses/HeroSection";
import CourseOverviewSection from "@/components/city-courses/CourseOverviewSection";
import CurriculumSection from "@/components/city-courses/CurriculumSection";
import ProjectsSection from "@/components/city-courses/ProjectsSection";
import WhyChooseSection from "@/components/city-courses/WhyChooseSection";
import CareerPathSection from "@/components/city-courses/CareerPathSection";
import FAQSection from "@/components/city-courses/FAQSection";
import CTASection from "@/components/city-courses/CTASection";
import NotFoundPage from "@/components/NotFoundPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper: fetch by the object's internal `slug`
function getByInternalSlug(slug: string): CourseData | undefined {
  const key = slug.toLowerCase();
  return Object.values(courseData).find(
    (c) => c.slug.toLowerCase() === key
  );
}

// SEO metadata from the matched course - Enhanced
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getByInternalSlug(slug);
  
  if (!data) {
    return {
      title: "Course Not Found | 404 - CDPL",
      description: "The requested course page could not be found. Browse our available courses in software testing, automation, and development.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  // Extract city from location
  const city = data.location || "";
  
  // Build keywords array from metadata.keywords string
  const baseKeywords = data.metadata.keywords 
    ? data.metadata.keywords.split(',').map(k => k.trim())
    : [];
  
  // Add additional keywords
  const additionalKeywords = [
    data.courseName,
    `${data.courseName} course`,
    `${data.courseName} training`,
    city ? `${data.courseName} ${city}` : "",
    city ? `${city} training` : "",
    city ? `${city} courses` : "",
    "CDPL courses",
    "software testing",
    "automation training",
    "QA training",
    "tech courses India"
  ].filter(Boolean);

  const allKeywords = [...baseKeywords, ...additionalKeywords];
  
  // Enhanced metadata using generateSEO
  return generateSEO({
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: allKeywords,
    url: `/${slug}`,
    image: data.heroImage || "/og-images/og-image-courses.webp",
    type: "website"
  });
}

// Only prebuild pages using each object's internal `slug`
export async function generateStaticParams() {
  return Object.values(courseData).map((c) => ({ slug: c.slug.toLowerCase() }));
}

// Optional hard lock:
// export const dynamicParams = false;

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getByInternalSlug(slug);
  
  // Show custom 404 page if course not found
  if (!data) {
    return <NotFoundPage />;
  }

  // Extract city from location
  const city = data.location || "";

  return (
    <>


      {/* Semantic HTML Structure */}
      <main 
        className="overflow-hidden" 
        itemScope 
        itemType="https://schema.org/Course"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content={data.courseName} />
        <meta itemProp="description" content={data.metadata.description} />
        <meta itemProp="provider" content="CDPL - Cinute Digital Pvt. Ltd." />

        {/* SEO-friendly H1 - Hidden visually but available for SEO */}
        <h1 className="sr-only">
          {data.courseName} {city && `in ${city}`} - Professional Training Course by CDPL
        </h1>

        <HeroSection data={data} />
        <CourseOverviewSection data={data} />
        <CurriculumSection data={data} />
        <ProjectsSection data={data} />
        <WhyChooseSection data={data} />
        <CareerPathSection data={data} />
        <FAQSection data={data} />
        <CTASection data={data} />
      </main>
    </>
  );
}
