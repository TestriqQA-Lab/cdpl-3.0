import HeroSection from '@/components/automation-testing-course/HeroSection';
import StatsSection from '@/components/automation-testing-course/StatsSection';
import WhyAutomation from '@/components/automation-testing-course/WhyAutomation';
import CurriculumSection from '@/components/automation-testing-course/CurriculumSection';
import ProjectsSection from '@/components/automation-testing-course/ProjectsSection';
import TestimonialsSection from '@/components/automation-testing-course/TestimonialsSection';
import CareerSection from '@/components/automation-testing-course/CareerSection';
import WhoShouldEnroll from '@/components/automation-testing-course/WhoShouldEnroll';
import ToolsSection from '@/components/automation-testing-course/ToolsSection';
import FaqSection from '@/components/automation-testing-course/FaqSection';
import CtaSection from '@/components/automation-testing-course/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';

export const metadata = {
  title: "Advanced Automation Testing Course | SDET Training | 100% Placement",
  description: "Master Cypress, Playwright, AI Testing, CI/CD. Become a future-ready SDET with elite projects and FAANG placement.",
  keywords: "automation testing course, SDET training, Cypress, Playwright, AI testing, Selenium, ISTQB",
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
      <section id='why-master-program'><WhyAutomation /></section>
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