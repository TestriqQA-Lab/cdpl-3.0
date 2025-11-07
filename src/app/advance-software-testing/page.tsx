import HeroSection from '@/components/advance-software-testing/HeroSection';
import StatsSection from '@/components/advance-software-testing/StatsSection';
import WhyAdvancedTesting from '@/components/advance-software-testing/WhyAdvancedTesting';
import CurriculumSection from '@/components/advance-software-testing/CurriculumSection';
import ProjectsSection from '@/components/advance-software-testing/ProjectsSection';
import TestimonialsSection from '@/components/advance-software-testing/TestimonialsSection';
import CareerSection from '@/components/advance-software-testing/CareerSection';
import WhoShouldEnroll from '@/components/advance-software-testing/WhoShouldEnroll';
import ToolsSection from '@/components/advance-software-testing/ToolsSection';
import FaqSection from '@/components/advance-software-testing/FaqSection';
import CtaSection from '@/components/advance-software-testing/CtaSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';

export const metadata = {
  title: "Advanced Software Testing Course | SDET Training | 100% Placement",
  description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
  keywords: "SDET course, Selenium training, Appium, automation testing, ISTQB certification, QA jobs India",
};

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>


      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAdvancedTesting /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </div>
  );
}