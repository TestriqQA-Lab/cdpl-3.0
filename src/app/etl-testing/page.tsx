import HeroSection from '@/components/etl-testing/HeroSection';
import StatsSection from '@/components/etl-testing/StatsSection';
import WhyEtlTesting from '@/components/etl-testing/WhyEtlTesting';
import CurriculumSection from '@/components/etl-testing/CurriculumSection';
import ProjectsSection from '@/components/etl-testing/ProjectsSection';
import TestimonialsSection from '@/components/etl-testing/TestimonialsSection';
import CareerSection from '@/components/etl-testing/CareerSection';
import WhoShouldEnroll from '@/components/etl-testing/WhoShouldEnroll';
import ToolsSection from '@/components/etl-testing/ToolsSection';
import FaqSection from '@/components/etl-testing/FaqSection';
import CtaSection from '@/components/etl-testing/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { ETL_TESTING_FAQS, ETL_TESTING_REVIEW_DATA } from "@/data/etlTestingData";

export const metadata = generateMetadata({
  title: "ETL Testing Course | 100% Job Placement | 18-Hour Training",
  description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
  keywords: [
    "ETL testing course",
    "data validation",
    "SQL for ETL",
    "ETL tester jobs",
    "data quality testing",
    "data warehouse testing",
    "Informatica testing",
    "ETL automation",
    "database testing course"
  ],
  url: "/etl-testing",
  image: "/og-images/etl-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "ETL Testing Course",
    description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
    url: "/etl-testing",
    slug: "etl-testing",
    instructor: "CDPL Expert Mentors",
    duration: "PT18H", // 18 hours
    rating: ETL_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: ETL_TESTING_REVIEW_DATA.reviewCount,
    price: 5500, // Estimated price
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "ETL Testing", url: "/etl-testing" },
  ]);

  const faqSchema = generateFAQSchema(ETL_TESTING_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyEtlTesting /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}