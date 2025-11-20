// pages/machine-learning-data-science.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/machine-learning-course/HeroSection";
import StatsSection from "@/components/machine-learning-course/StatsSection";
import CurriculumSection from "@/components/machine-learning-course/CurriculumSection";
import ProjectsSection from "@/components/machine-learning-course/ProjectsSection";
import TestimonialsSection from "@/components/machine-learning-course/TestimonialsSection";
import CareerSection from "@/components/machine-learning-course/CareerSection";
import WhoShouldEnroll from "@/components/machine-learning-course/WhoShouldEnroll";
import ToolsSection from "@/components/machine-learning-course/ToolsSection";
import FaqSection from "@/components/machine-learning-course/FaqSection";
import CtaSection from "@/components/machine-learning-course/CtaSection";
import CareerRoadmapSection from "@/components/machine-learning-course/CareerRoadmapSection";
import WhyMLProgram from "@/components/machine-learning-course/WhyMLProgram";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";

const MachineLearningPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Machine Learning & Data Science with Python Hero Program | Mumbai | CDPL</title>
        <meta name="description" content="95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="machine learning course mumbai, data science with python, python data science training, ml hero program, data scientist jobs mumbai" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyMLProgram /></section>
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

export default MachineLearningPage;