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

export const metadata = {
  title: "MySQL Database Course | 100% Job Placement | 20-Hour Training",
  description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
  keywords: "MySQL course, SQL training, database management, MySQL certification, DBA jobs India",
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
      <section id='why-master-program'><WhyMysqlSection /></section>
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