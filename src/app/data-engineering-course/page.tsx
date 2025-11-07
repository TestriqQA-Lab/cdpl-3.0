// pages/big-data-engineering.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-engineering-course/HeroSection";
import StatsSection from "@/components/data-engineering-course/StatsSection";
import WhyDataProgram from "@/components/data-engineering-course/WhyDataProgram";
import CurriculumSection from "@/components/data-engineering-course/CurriculumSection";
import ProjectsSection from "@/components/data-engineering-course/ProjectsSection";
import TestimonialsSection from "@/components/data-engineering-course/TestimonialsSection";
import CareerSection from "@/components/data-engineering-course/CareerSection";
import WhoShouldEnroll from "@/components/data-engineering-course/WhoShouldEnroll";
import ToolsSection from "@/components/data-engineering-course/ToolsSection";
import FaqSection from "@/components/data-engineering-course/FaqSection";
import CtaSection from "@/components/data-engineering-course/CtaSection";
import CareerRoadmapSection from "@/components/data-engineering-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";

const BigDataEngineeringPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Big Data Engineering Course in Mumbai | 95-Hour Hero Program | CDPL</title>
        <meta name="description" content="95-Hour Big Data Engineering Master Program with Hadoop, Spark, Kafka. 100% job assistance, global certification, real-time projects." />
        <meta name="keywords" content="big data engineering course mumbai, hadoop spark training, kafka certification, data engineer jobs mumbai, cloud data pipeline" />
      </Head>

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyDataProgram /></section>
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

export default BigDataEngineeringPage;