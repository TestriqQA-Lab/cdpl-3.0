// pages/advanced-data-analytics.tsx
import HeroSection from "@/components/data-analytics/HeroSection";
import StatsSection from "@/components/data-analytics/StatsSection";
import WhyAnalyticsProgram from "@/components/data-analytics/WhyAnalyticsProgram";
import CurriculumSection from "@/components/data-analytics/CurriculumSection";
import ProjectsSection from "@/components/data-analytics/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics/TestimonialsSection";
import CareerSection from "@/components/data-analytics/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics/ToolsSection";
import FaqSection from "@/components/data-analytics/FaqSection";
import CtaSection from "@/components/data-analytics/CtaSection";
import CareerRoadmapSection from "@/components/data-analytics/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_FAQS, DATA_ANALYTICS_REVIEW_DATA } from "@/data/dataAnalyticsData";

export const metadata = generateMetadata({
  title: "Advanced Data Analytics Hero Program | 110-Hour Training | Mumbai | CDPL",
  description: "110-Hour Hero Program in Advanced Data Analytics. Hands-on projects in Power BI, Tableau, Python, SQL. 100% job assistance, global certificates.",
  keywords: [
    "advanced data analytics course mumbai",
    "data analytics hero program",
    "power bi training",
    "tableau course",
    "data analyst jobs mumbai",
    "python for data analytics",
    "sql training",
    "business intelligence course"
  ],
  url: "/data-analytics",
  image: "/og-images/data-analytics.jpg",
});

export default function AdvancedDataAnalyticsPage() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Data Analytics Hero Program",
    description: "110-Hour Hero Program in Advanced Data Analytics. Hands-on projects in Power BI, Tableau, Python, SQL. 100% job assistance, global certificates.",
    url: "/data-analytics",
    slug: "data-analytics",
    price: 45000,
    currency: "INR",
    duration: "P3M", // ~12 weeks
    instructor: "Expert Data Analysts",
    rating: DATA_ANALYTICS_REVIEW_DATA.ratingValue,
    reviewCount: DATA_ANALYTICS_REVIEW_DATA.reviewCount,
    image: "/og-images/data-analytics.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Advanced Data Analytics", url: "/data-analytics" },
  ]);

  const faqSchema = generateFAQSchema(DATA_ANALYTICS_FAQS);


  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAnalyticsProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}