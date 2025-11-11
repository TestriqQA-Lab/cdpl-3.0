import HeroSection from "@/components/data-analytics-python/HeroSection";
import StatsSection from "@/components/data-analytics-python/StatsSection";
import WhySEOProgram from "@/components/data-analytics-python/WhyAnalyticsPythonProgram";
import CurriculumSection from "@/components/data-analytics-python/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-python/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-python/TestimonialsSection";
import CareerSection from "@/components/data-analytics-python/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-python/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-python/ToolsSection";
import CareerRoadmapSection from "@/components/data-analytics-python/CareerRoadmapSection";
import FaqSection from "@/components/data-analytics-python/FaqSection";
import CtaSection from "@/components/data-analytics-python/CtaSection";
import WhyAnalyticsPythonProgram from "@/components/data-analytics-python/WhyAnalyticsPythonProgram";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Why This Program Section */}
            <WhyAnalyticsPythonProgram />

            {/* Curriculum Section */}
            <CurriculumSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Tools & Technologies Section */}
            <ToolsSection />

            {/* Who Should Enroll Section */}
            <WhoShouldEnroll />

            {/* Career Section */}
            <CareerSection />

            {/* Career Roadmap Section */}
            <CareerRoadmapSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <CtaSection />
        </div>
    );
}