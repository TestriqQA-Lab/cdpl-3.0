import HeroSection from '@/components/dbms-course/HeroSection';
import StatsSection from '@/components/dbms-course/StatsSection';
import WhyMysqlSection from '@/components/dbms-course/WhyMysqlSection';
import CurriculumSection from '@/components/dbms-course/CurriculumSection';
import ProjectsSection from '@/components/dbms-course/ProjectsSection';
import TestimonialsSection from '@/components/dbms-course/TestimonialsSection';
import CareerSection from '@/components/dbms-course/CareerSection';
import WhoShouldEnroll from '@/components/dbms-course/WhoShouldEnroll';
import ToolsSection from '@/components/dbms-course/ToolsSection';
import FaqSection from '@/components/dbms-course/FaqSection';
import CtaSection from '@/components/dbms-course/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { DBMS_FAQS, DBMS_REVIEW_DATA } from "@/data/dbmsData";

export const metadata = generateMetadata({
  title: "MySQL Database Course | 100% Job Placement | 20-Hour Training",
  description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
  keywords: [
    "MySQL course",
    "SQL training",
    "database management",
    "MySQL certification",
    "DBA jobs India",
    "database design course",
    "SQL query optimization",
    "relational database management system",
    "backend development with MySQL"
  ],
  url: "/dbms-course",
  image: "/og-images/dbms-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "MySQL Database Management System Course",
    description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
    url: "/dbms-course",
    slug: "dbms-course",
    instructor: "CDPL Expert Mentors",
    duration: "PT20H", // 20 hours
    rating: DBMS_REVIEW_DATA.ratingValue,
    reviewCount: DBMS_REVIEW_DATA.reviewCount,
    price: 6000, // Estimated price
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "DBMS (MySQL)", url: "/dbms-course" },
  ]);

  const faqSchema = generateFAQSchema(DBMS_FAQS);

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
      <section id='why-master-program'><WhyMysqlSection /></section>
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