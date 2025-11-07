// pages/advanced-data-science-ml.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-science-course/HeroSection";
import StatsSection from "@/components/data-science-course/StatsSection";
import WhyDSProgram from "@/components/data-science-course/WhyDSProgram";
import CurriculumSection from "@/components/data-science-course/CurriculumSection";
import ProjectsSection from "@/components/data-science-course/ProjectsSection";
import TestimonialsSection from "@/components/data-science-course/TestimonialsSection";
import CareerSection from "@/components/data-science-course/CareerSection";
import WhoShouldEnroll from "@/components/data-science-course/WhoShouldEnroll";
import ToolsSection from "@/components/data-science-course/ToolsSection";
import FaqSection from "@/components/data-science-course/FaqSection";
import CtaSection from "@/components/data-science-course/CtaSection";
import CareerRoadmapSection from "@/components/data-science-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";

const AdvancedDSMLPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advanced Data Science & Machine Learning Masterclass in Mumbai | 200-Hour Program | CDPL</title>
        <meta name="description" content="200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="advanced data science course mumbai, machine learning masterclass, data science training mumbai, ml jobs mumbai" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyDSProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
};

export default AdvancedDSMLPage;