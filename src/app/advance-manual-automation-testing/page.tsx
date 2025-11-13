import HeroSection from '@/components/advance-manual-automation-testing/HeroSection';
import StatsSection from '@/components/advance-manual-automation-testing/StatsSection';
import WhyMasterProgram from '@/components/advance-manual-automation-testing/WhyMasterProgram';
import CurriculumSection from '@/components/advance-manual-automation-testing/CurriculumSection';
import ProjectsSection from '@/components/advance-manual-automation-testing/ProjectsSection';
import TestimonialsSection from '@/components/advance-manual-automation-testing/TestimonialsSection';
import CareerSection from '@/components/advance-manual-automation-testing/CareerSection';
import WhoShouldEnroll from '@/components/advance-manual-automation-testing/WhoShouldEnroll';
import ToolsSection from '@/components/advance-manual-automation-testing/ToolsSection';
import FaqSection from '@/components/advance-manual-automation-testing/FaqSection';
import CtaSection from '@/components/advance-manual-automation-testing/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import JsonLd from "@/components/JsonLd";
import { generateCourseSchema, generateFAQSchema } from "@/lib/schema-generators";

export const metadata = {
  title: "Advanced Manual & Automation Testing Master Program | 100% Placement",
  description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
  keywords: "manual testing course, automation testing, ISTQB certification, Selenium training, QA jobs India, SDET course",
};

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Manual & Automation Testing Master Program",
    description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
    url: "/advance-manual-automation-testing",
    slug: "advance-manual-automation-testing",
    price: 25000, // Assuming a price, please update this with the actual price
    currency: "INR",
    duration: "P4M", // Assuming 4 months duration, please update
    level: "Advanced",
    instructor: "Expert QA Mentors",
    // Add other relevant fields like rating, reviewCount, image if available
  });

  const faqs = [
    {
      question: 'What is the duration of the Advanced Manual & Automation Testing Master Program?',
      answer: 'The program typically runs for 4 months, including both theoretical and practical hands-on project work.',
    },
    {
      question: 'Does this course include placement assistance?',
      answer: 'Yes, the course includes 100% placement support, including resume building, mock interviews, and guaranteed interview opportunities.',
    },
    {
      question: 'What tools are covered in the automation testing module?',
      answer: 'The automation module covers industry-leading tools such as Selenium, Cypress, Postman for API testing, and Appium for mobile testing.',
    },
  ];
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />
      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyMasterProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}