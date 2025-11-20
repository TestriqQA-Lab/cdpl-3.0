// pages/advanced-data-analytics.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-analytics/HeroSection";
import StatsSection from "@/components/data-analytics/StatsSection";
import WhyAnalyticsProgram from "@/components/data-analytics/WhyAnalyticsProgram";
import CurriculumSection from "@/components/data-analytics/CurriculumSection";
import ProjectsSection from "@/components/data-analytics/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics/TestimonialsSection";
import CareerSection from "@/components/data-analytics/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics/ToolsSection";
import FaqSection from "@/components/data-analytics/FaqSection";
import CtaSection from "@/components/data-analytics/CtaSection";
import CareerRoadmapSection from "@/components/data-analytics/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";


const AdvancedDataAnalyticsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advanced Data Analytics Hero Program | 110-Hour Training | Mumbai | CDPL</title>
        <meta name="description" content="110-Hour Hero Program in Advanced Data Analytics. Hands-on projects in Power BI, Tableau, Python, SQL. 100% job assistance, global certificates." />
        <meta name="keywords" content="advanced data analytics course mumbai, data analytics hero program, power bi training, tableau course, data analyst jobs mumbai" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAnalyticsProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
};

export default AdvancedDataAnalyticsPage;