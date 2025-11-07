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

export const metadata = {
  title: "ETL Testing Course | 100% Job Placement | 18-Hour Training",
  description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
  keywords: "ETL testing course, data validation, SQL for ETL, ETL tester jobs, data quality testing",
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
      <section id='why-master-program'><WhyEtlTesting /></section>
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