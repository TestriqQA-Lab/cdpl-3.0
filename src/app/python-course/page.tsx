// pages/python-programming.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/python-course/HeroSection";
import StatsSection from "@/components/python-course/StatsSection";
import WhyPythonProgram from "@/components/python-course/WhyPythonProgram";
import CurriculumSection from "@/components/python-course/CurriculumSection";
import ProjectsSection from "@/components/python-course/ProjectsSection";
import CareerSection from "@/components/python-course/CareerSection";
import WhoShouldEnroll from "@/components/python-course/WhoShouldEnroll";
import ToolsSection from "@/components/python-course/ToolsSection";
import TestimonialsSection from "@/components/python-course/TestimonialsSection";
import CareerRoadmapSection from "@/components/python-course/CareerRoadmapSection";
import FaqSection from "@/components/python-course/FaqSection";
import CtaSection from "@/components/python-course/CtaSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";


const PythonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Python Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL</title>
        <meta name="description" content="Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate." />
        <meta name="keywords" content="python course mumbai, python training, django course, data science python, python job guarantee, python certification mumbai" />
      </Head>

       <HeroSection />
      
            {/* Sticky nav must appear right after hero */}
            <div className="hidden md:block sticky top-0 z-20">
              <StickyNav3 />
            </div>
      
            <section id='program-stats'><StatsSection /></section>
            <section id='why-master-program'><WhyPythonProgram /></section>
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

export default PythonPage;