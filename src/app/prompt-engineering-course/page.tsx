import HeroSection from "@/components/prompt-engineering-course/HeroSection";
import StatsSection from "@/components/prompt-engineering-course/StatsSection";
import WhyPromptGenProgram from "@/components/prompt-engineering-course/WhyPromptGenProgram";
import CurriculumSection from "@/components/prompt-engineering-course/CurriculumSection";
import ProjectsSection from "@/components/prompt-engineering-course/ProjectsSection";
import TestimonialsSection from "@/components/prompt-engineering-course/TestimonialsSection";
import CareerSection from "@/components/prompt-engineering-course/CareerSection";
import WhoShouldEnroll from "@/components/prompt-engineering-course/WhoShouldEnroll";
import ToolsSection from "@/components/prompt-engineering-course/ToolsSection";
import FaqSection from "@/components/prompt-engineering-course/FaqSection";
import CtaSection from "@/components/prompt-engineering-course/CtaSection";
import CareerRoadmapSection from "@/components/prompt-engineering-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { PROMPT_ENGINEERING_FAQS, PROMPT_ENGINEERING_REVIEW_DATA } from "@/data/promptEngineeringData";

export const metadata = generateMetadata({
  title: "Prompt Engineering with Generative AI Course in Mumbai | 20-Hour Hero Program | CDPL",
  description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
  keywords: [
    "prompt engineering course mumbai",
    "generative ai training",
    "python gen ai",
    "prompt hero program",
    "ai prompt jobs mumbai"
  ],
  url: "/prompt-engineering-course",
  image: "/og-images/prompt-engineering-course.jpg",
});

export default function PromptGenPage() {
  const courseSchema = generateCourseSchema({
    name: "Prompt Engineering with Generative AI Course",
    description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
    url: "/prompt-engineering-course",
    slug: "prompt-engineering-course",
    price: 25000, // Estimated price, adjust if needed
    currency: "INR",
    duration: "P1M", // ~4 weeks
    instructor: "Expert AI Engineers",
    rating: PROMPT_ENGINEERING_REVIEW_DATA.ratingValue,
    reviewCount: PROMPT_ENGINEERING_REVIEW_DATA.reviewCount,
    image: "/og-images/prompt-engineering-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Prompt Engineering", url: "/prompt-engineering-course" },
  ]);

  const faqSchema = generateFAQSchema(PROMPT_ENGINEERING_FAQS);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyPromptGenProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </div>
  );
}