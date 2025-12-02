import HeroSection from '@/components/api-testing/HeroSection';
import StatsSection from '@/components/api-testing/StatsSection';
import WhyApiTesting from '@/components/api-testing/WhyApiTesting';
import CurriculumSection from '@/components/api-testing/CurriculumSection';
import ProjectsSection from '@/components/api-testing/ProjectsSection';
import CareerSection from '@/components/api-testing/CareerSection';
import WhoShouldEnroll from '@/components/api-testing/WhoShouldEnroll';
import ToolsSection from '@/components/api-testing/ToolsSection';
import TestimonialsSection from '@/components/api-testing/TestimonialsSection';
import FaqSection from '@/components/api-testing/FaqSection';
import CtaSection from '@/components/api-testing/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { API_TESTING_FAQS, API_TESTING_REVIEW_DATA } from "@/data/apiTestingData";

// SEO Metadata
export const metadata = generateMetadata({
  title: "API Testing Course with POSTMAN & RestAPIs | 100% Job Placement",
  description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
  keywords: [
    "API testing course",
    "POSTMAN training",
    "RestAPI testing",
    "API automation",
    "QA jobs",
    "placement guaranteed course",
    "software testing certification",
    "manual vs automation testing",
    "API security testing",
    "SOAP vs REST"
  ],
  url: "/api-testing",
  image: "/og-images/api-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "API Testing Course with POSTMAN & RestAPIs",
    description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
    url: "/api-testing",
    slug: "api-testing",
    instructor: "CDPL Expert Mentors",
    duration: "PT15H", // 15 hours
    rating: API_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: API_TESTING_REVIEW_DATA.reviewCount,
    price: 5000, // Estimated price, adjust if known
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "API Testing", url: "/api-testing" },
  ]);

  const faqSchema = generateFAQSchema(API_TESTING_FAQS);

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
      <section id='why-master-program'><WhyApiTesting /></section>
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