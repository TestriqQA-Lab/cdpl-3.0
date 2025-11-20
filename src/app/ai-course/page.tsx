// pages/comprehensive-data-science-ai.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/ai-course/HeroSection";
import StatsSection from "@/components/ai-course/StatsSection";
import WhyAIProgram from "@/components/ai-course/WhyAIProgram";
import CurriculumSection from "@/components/ai-course/CurriculumSection";
import ProjectsSection from "@/components/ai-course/ProjectsSection";
import TestimonialsSection from "@/components/ai-course/TestimonialsSection";
import CareerSection from "@/components/ai-course/CareerSection";
import WhoShouldEnroll from "@/components/ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/ai-course/ToolsSection";
import FaqSection from "@/components/ai-course/FaqSection";
import CtaSection from "@/components/ai-course/CtaSection";
import CareerRoadmapSection from "@/components/ai-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";

const ComprehensiveDSAI: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comprehensive Data Science & AI Master Program in Mumbai | 255-Hour Training | CDPL</title>
        <meta name="description" content="255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="comprehensive data science course mumbai, ai master program, data science and ai training, data scientist jobs mumbai" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAIProgram /></section>
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

export default ComprehensiveDSAI;