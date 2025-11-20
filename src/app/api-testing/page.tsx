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

// SEO Metadata
export const metadata = {
  title: "API Testing Course with POSTMAN & RestAPIs | 100% Job Placement",
  description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
  keywords: "API testing course, POSTMAN training, RestAPI testing, API automation, QA jobs, placement guaranteed course",
  openGraph: {
    title: "Best API Testing Course in India",
    description: "15-Hour Master Program | 100% Placement | Global Certification",
    images: ["/og-image.jpg"]
  }
};

export default function Home() {
  return (
    <>
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