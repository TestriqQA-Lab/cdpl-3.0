"use client";

import StickyNav from "@/components/manual-testing-course/StickyNav";

import CareerSection from "@/components/manual-testing-course/CareerSection";
import ComparisonSection from "@/components/manual-testing-course/ComparisonSection";
import CurriculumSection from "@/components/manual-testing-course/CurriculumSection";
import FaqSection from "@/components/manual-testing-course/FaqSection";
import HeroManualTesting from "@/components/manual-testing-course/HeroManualTesting";
import InstructorSection from "@/components/manual-testing-course/InstructorSection";
import LearningPath from "@/components/manual-testing-course/LearningPath";
import OtherCoursesSection from "@/components/manual-testing-course/OtherCourseSection";
import ProjectsSection from "@/components/manual-testing-course/ProjectSection";
import ToolsSection from "@/components/manual-testing-course/ToolsSection";
import TrustSection from "@/components/manual-testing-course/TrustSection";
import WhyLearnSection from "@/components/manual-testing-course/WhyLearnSection";

export default function ContactPage() {
  return (
    <main className="relative">
      {/* HERO (with additional padding-top to prevent overlap with sticky nav) */}
      <HeroManualTesting />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      {/* Ensure each subsequent section wrapper has the correct id */}
      <section id="why-learn"><WhyLearnSection /></section>
      <section id="curriculum"><CurriculumSection /></section>
      <section id="tools"><ToolsSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="learning-path"><LearningPath /></section>
      <section id="instructor"><InstructorSection /></section>
      <section id="career"><CareerSection /></section>
      <section id="trust"><TrustSection /></section>
      <section id="comparison"><ComparisonSection /></section>
      <section id="other-courses"><OtherCoursesSection /></section>
      <section id="faq"><FaqSection /></section>
    </main>
  );
}
