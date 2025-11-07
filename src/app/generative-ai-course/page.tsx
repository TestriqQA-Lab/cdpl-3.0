// pages/deep-learning-nlp-genai.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/generative-ai-course/HeroSection";
import StatsSection from "@/components/generative-ai-course/StatsSection";
import WhyGenAIProgram from "@/components/generative-ai-course/WhyGenAIProgram";
import CurriculumSection from "@/components/generative-ai-course/CurriculumSection";
import ProjectsSection from "@/components/generative-ai-course/ProjectsSection";
import TestimonialsSection from "@/components/generative-ai-course/TestimonialsSection";
import CareerSection from "@/components/generative-ai-course/CareerSection";
import WhoShouldEnroll from "@/components/generative-ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/generative-ai-course/ToolsSection";
import FaqSection from "@/components/generative-ai-course/FaqSection";
import CtaSection from "@/components/generative-ai-course/CtaSection";
import CareerRoadmapSection from "@/components/generative-ai-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";

const DeepLearningPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Deep Learning, NLP & Generative AI Course in Mumbai | 55-Hour Hero Program | CDPL</title>
        <meta name="description" content="55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, 100% job assistance, global certificates from AAA." />
        <meta name="keywords" content="deep learning course mumbai, nlp training, generative ai with python, ai hero program, ai jobs mumbai" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyGenAIProgram /></section>
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

export default DeepLearningPage;