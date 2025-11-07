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

export const metadata = {
  title: "Advanced Manual & Automation Testing Master Program | 100% Placement",
  description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
  keywords: "manual testing course, automation testing, ISTQB certification, Selenium training, QA jobs India, SDET course",
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